export const api = {
  getProducts: async () => {
    const { getAllProducts } = await import('../data/products.js')
    return getAllProducts()
  },

  getProductById: async (id) => {
    const { getProductById } = await import('../data/products.js')
    return getProductById(Number(id))
  },

  getCategories: async () => {
    const { categories } = await import('../data/products.js')
    return categories
  },

  getProductsByCategory: async (category) => {
    const { getProductsByCategory } = await import('../data/products.js')
    return getProductsByCategory(category)
  },

  getProductsByTag: async (tag) => {
    const { getProductsByTag } = await import('../data/products.js')
    return getProductsByTag(tag)
  },

  getNewArrivals: async () => {
    const { getNewArrivals } = await import('../data/products.js')
    return getNewArrivals()
  },

  getOffers: async () => {
    const { getOffers } = await import('../data/products.js')
    return getOffers()
  },

  searchProducts: async (query) => {
    const { searchProducts } = await import('../data/products.js')
    return searchProducts(query)
  },
}
