import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import logoImage from '../../assets/images/logo.jpeg'

export default function Header() {
  const { cartCount } = useCart()
  const { items: wishlistItems } = useWishlist()
  const { user, isAuthenticated, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path ? 'border-b-2 border-regal-gold pb-1 text-primary dark:text-primary-fixed' : ''

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-surface dark:bg-primary docked full-width top-0 sticky border-b border-outline-variant dark:border-primary-container shadow-sm dark:shadow-none z-50 hidden md:block">
        <div className="flex items-center justify-between gap-4 min-h-20 py-3 w-full max-w-container-max mx-auto px-margin-desktop">
          <Link className="flex-shrink-0 flex items-center gap-4" to="/">
            <img src={logoImage} alt="ONCE MORRE logo" className="h-12 w-12 rounded-full bg-surface-white object-contain p-1" />
            <span className="text-display-lg font-display-lg text-deep-emerald dark:text-primary-fixed hover:opacity-80 transition-opacity">
              ONCE MORRE
            </span>
          </Link>
          <nav className="flex items-center gap-6 font-label-caps text-label-caps">
            <Link className={`${isActive('/')} scale-95 duration-200 ease-in-out`} to="/">Home</Link>
            <Link className={`${isActive('/about')} text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300 scale-95 duration-200 ease-in-out pb-1 border-b-2 border-transparent`} to="/about">About</Link>
            <Link className={`${isActive('/subscription')} text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300 scale-95 duration-200 ease-in-out pb-1 border-b-2 border-transparent`} to="/subscription">Subscription</Link>
            <Link className={`${isActive('/blogs')} text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300 scale-95 duration-200 ease-in-out pb-1 border-b-2 border-transparent`} to="/blogs">Blogs</Link>
            <Link className={`${isActive('/offers')} text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300 scale-95 duration-200 ease-in-out pb-1 border-b-2 border-transparent`} to="/offers">Offers</Link>
          </nav>
          <div className="flex items-center gap-3 text-primary dark:text-on-primary">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-48 bg-surface-container-low border-none rounded py-1 pl-4 pr-10 text-sm focus:ring-1 focus:ring-regal-gold"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">search</span>
              </button>
            </form>
            <Link to="/collections" className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-container-low hover:text-deep-emerald transition-colors duration-300" aria-label="View all dairy products">
              <span className="material-symbols-outlined text-[24px]">storefront</span>
            </Link>
            <Link to="/wishlist" className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-container-low hover:text-deep-emerald transition-colors duration-300">
              <span className="material-symbols-outlined text-[24px]">favorite</span>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-regal-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/account"
                  className={`hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-container-low hover:text-deep-emerald transition-colors duration-300 ${isActive('/account')}`}
                >
                  <span className="material-symbols-outlined text-[24px]">person</span>
                </Link>
                <span className="text-sm font-body-md text-on-surface-variant hidden lg:block">
                  Hi, {user?.name?.split(' ')[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="hidden md:block text-sm font-label-caps uppercase tracking-widest px-3 py-2 rounded hover:bg-surface-container-low hover:text-deep-emerald transition-colors duration-300"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/account"
                className={`hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-container-low hover:text-deep-emerald transition-colors duration-300 ${isActive('/account')}`}
              >
                <span className="material-symbols-outlined text-[24px]">person</span>
              </Link>
            )}
            <Link
              to="/cart"
              className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-surface-container-low hover:text-deep-emerald focus-visible:outline focus-visible:outline-2 focus-visible:outline-regal-gold transition-colors duration-300 ${isActive('/cart')}`}
              aria-label="Open cart"
            >
              <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-regal-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-40 bg-surface border-b border-outline-variant flex items-center justify-between p-4 shadow-sm">
        <button aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <Link className="flex-shrink-0 flex items-center gap-2" to="/">
          <img src={logoImage} alt="ONCE MORRE logo" className="h-8 w-8 rounded-full bg-surface-white object-contain p-0.5" />
          <span className="font-display-lg text-[20px] text-deep-emerald">
            ONCE MORRE
          </span>
        </Link>
        <div className="flex items-center gap-3">
          {isAuthenticated && (
            <button onClick={handleLogout} className="text-xs font-label-caps uppercase tracking-widest text-on-surface-variant">
              Sign Out
            </button>
          )}
          <Link
            to="/cart"
            className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-regal-gold ${isActive('/cart')}`}
            aria-label="Open cart"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-regal-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-surface border-t border-outline-variant">
          <div className="flex flex-col p-6 space-y-4">
            <button onClick={() => setMobileMenuOpen(false)} className="self-end">
              <span className="material-symbols-outlined">close</span>
            </button>
            <Link to="/collections" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Dairy Products</Link>
            <Link to="/category/Curd" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Curd</Link>
            <Link to="/category/Buttermilk" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Buttermilk</Link>
            <Link to="/category/Ghee" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Ghee</Link>
            <Link to="/category/Sweets" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Sweets</Link>
            <Link to="/category/Paneer" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Paneer</Link>
            <Link to="/new-arrivals" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">New Arrivals</Link>
            <Link to="/offers" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Offers</Link>
            <Link to="/search" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Search</Link>
            {isAuthenticated ? (
              <>
                <Link to="/account" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Account</Link>
                <button onClick={handleLogout} className="text-lg font-medium text-left">Sign Out</button>
              </>
            ) : (
              <Link to="/account" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Account</Link>
            )}
            <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Wishlist</Link>
          </div>
        </div>
      )}
    </>
  )
}
