import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext.jsx'

const API_BASE = 'http://localhost:5000/api'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const { user, token, isAuthenticated } = useAuth()

  const saveLocal = (newItems) => {
    setItems(newItems)
    localStorage.setItem('cart', JSON.stringify(newItems))
  }

  const loadLocal = () => {
    try {
      const stored = localStorage.getItem('cart')
      if (stored) setItems(JSON.parse(stored))
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    loadLocal()
  }, [])

  useEffect(() => {
    if (isAuthenticated && token) {
      loadBackendCart()
    } else if (!isAuthenticated) {
      loadLocal()
    }
  }, [isAuthenticated, token])

  const loadBackendCart = async () => {
    if (!token) return
    try {
      const res = await fetch(`${API_BASE}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include',
      })
      if (res.ok) {
        const data = await res.json()
        const backendItems = (data.data?.items || []).map((item) => ({
          id: item.product?._id ? item.product._id.toString() : item._id?.toString(),
          name: item.product?.name || item.name,
          price: item.product?.price || item.price,
          image: item.product?.image || item.image,
          sku: item.product?.sku || item.sku,
          quantity: item.quantity,
          size: item.size,
          _backendItemId: item._id?.toString(),
        }))
        saveLocal(backendItems)
      }
    } catch {
      // keep local state on network error
    }
  }

  const syncToBackend = async () => {
    if (!token || !isAuthenticated) return false
    try {
      // Clear backend cart first
      await fetch(`${API_BASE}/cart/clear`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include',
      })
    } catch {
      // continue anyway
    }

    // Add each local item to backend
    for (const item of items) {
      const productId = item._id || item.id
      if (!productId) continue
      try {
        await fetch(`${API_BASE}/cart/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include',
          body: JSON.stringify({ productId, quantity: item.quantity || 1, size: item.size }),
        })
      } catch {
        // continue with next item
      }
    }

    // Reload backend cart to get proper IDs
    await loadBackendCart()
    return true
  }

  const addItem = (product) => {
    const productId = product._id || product.id
    setItems((prev) => {
      const existing = prev.find((item) => item.id === productId)
      if (existing) {
        const next = prev.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
        localStorage.setItem('cart', JSON.stringify(next))
        return next
      }
      const next = [...prev, { ...product, id: productId, quantity: 1 }]
      localStorage.setItem('cart', JSON.stringify(next))
      return next
    })
  }

  const removeItem = (productId) => {
    setItems((prev) => {
      const next = prev.filter((item) => item.id !== productId)
      localStorage.setItem('cart', JSON.stringify(next))
      return next
    })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    setItems((prev) => {
      const next = prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
      localStorage.setItem('cart', JSON.stringify(next))
      return next
    })
  }

  const clearCart = () => {
    saveLocal([])
  }

  const cartCount = items.reduce((sum, item) => sum + (item.quantity || 0), 0)
  const cartTotal = items.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, cartCount, cartTotal, loadBackendCart, syncToBackend }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
