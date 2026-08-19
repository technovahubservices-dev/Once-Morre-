import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'
import { useState } from 'react'

export default function ProductCard({ product, variant = 'default' }) {
  const { addItem } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const [showQuickView, setShowQuickView] = useState(false)

  if (variant === 'compact') {
    return (
      <div className="group cursor-pointer">
        <div className="bg-surface-white rounded-xl overflow-hidden aspect-square mb-4 relative flex items-center justify-center p-4 border border-outline-variant/50 transition-all shadow-sm hover:shadow-md hover:border-outline-variant">
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 bg-surface-container-low px-2 py-0.5 rounded text-[10px] font-label-caps text-on-surface-variant">
              {product.badge}
            </span>
          )}
          <button
            onClick={() => toggleWishlist(product)}
            className="absolute top-3 right-3 z-10 text-outline hover:text-error transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">favorite</span>
          </button>
          <img
            className="w-full h-full object-contain img-hover-zoom"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="text-center px-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-body-md text-sm text-on-surface-variant truncate mb-1 group-hover:text-deep-emerald transition-colors">{product.name}</h3>
          </Link>
          {/* // Fix: use consistent ₹ currency symbol (data is in INR), add tabular-nums for aligned price digits,
              // and use tracking-tight for a cleaner premium look. */}
          <p className="font-headline-md text-base text-primary font-medium tracking-tight tabular-nums">₹ {product.price.toLocaleString()}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={`group bg-surface-white border rounded-2xl overflow-hidden luxury-hover transition-all duration-300 ${product.discount || product.originalPrice ? 'border-regal-gold/50 shadow-[0_0_0_1px_rgba(196,164,132,0.15)]' : 'border-outline-variant/60'}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.discount || product.originalPrice ? (
            <span className="absolute top-4 left-4 z-10 bg-regal-gold text-surface-white text-[10px] font-label-caps font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {product.badge || `-${product.discount}%`}
            </span>
          ) : (
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-4 left-4 z-10 text-outline hover:text-error transition-colors"
            >
              <span className={`material-symbols-outlined ${isInWishlist(product.id) ? 'icon-fill text-regal-gold' : ''}`}>
                favorite
              </span>
            </button>
          )}
          <button
            onClick={() => toggleWishlist(product)}
            className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${product.discount || product.originalPrice ? 'bg-surface-white/90 text-regal-gold hover:bg-surface-white' : 'bg-surface-white/80 backdrop-blur-sm hover:bg-surface-white'}`}
          >
            <span className={`material-symbols-outlined ${isInWishlist(product.id) ? 'icon-fill text-regal-gold' : 'text-outline'}`}>
              favorite
            </span>
          </button>
          <button
            onClick={() => addItem(product)}
            className="absolute bottom-4 left-4 right-4 bg-deep-emerald text-surface-white font-label-caps text-label-caps uppercase tracking-widest py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={() => setShowQuickView(true)}
            className="absolute bottom-4 left-4 right-4 bg-surface-white text-deep-emerald font-label-caps text-label-caps uppercase tracking-widest py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-deep-emerald"
          >
            Quick View
          </button>
        </div>
        <div className="p-5">
          <Link to={`/category/${encodeURIComponent(product.category)}`} className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant text-xs mb-2 hover:text-regal-gold transition-colors">
            {product.category}
          </Link>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-headline-md text-headline-md text-deep-emerald mb-2 hover:text-regal-gold transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <p className="font-headline-md text-headline-md text-deep-emerald tabular-nums tracking-tight">
                ₹ {product.price.toLocaleString()}
              </p>
              {product.originalPrice && (
                <p className="font-body-md text-sm text-on-surface-variant line-through tabular-nums">
                  ₹ {product.originalPrice.toLocaleString()}
                </p>
              )}
              {product.discount && (
                <span className="text-xs font-label-caps font-bold uppercase tracking-widest text-regal-gold bg-regal-gold/10 px-2 py-0.5 rounded-full">
                  -{product.discount}%
                </span>
              )}
            </div>
            <Link
              to={`/product/${product.id}`}
              className="text-sm font-label-caps text-label-caps uppercase text-deep-emerald border-b border-deep-emerald hover:text-regal-gold hover:border-regal-gold transition-colors self-start"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowQuickView(false)}>
          <div className="bg-surface-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-headline-md text-headline-md text-deep-emerald">{product.name}</h2>
                <button onClick={() => setShowQuickView(false)} className="text-on-surface-variant hover:text-deep-emerald">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover rounded" />
                </div>
                <div>
                  <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant text-xs mb-2">{product.category}</p>
                  {/* // Fix: consistent ₹ currency and tabular-nums for aligned digits */}
                  <p className="font-headline-md text-headline-md text-deep-emerald mb-4 tabular-nums tracking-tight">₹ {product.price.toLocaleString()}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">{product.description}</p>
                  <button
                    onClick={() => { addItem(product); setShowQuickView(false); }}
                    className="w-full bg-deep-emerald text-white font-label-caps text-label-caps uppercase tracking-widest py-4 rounded hover:bg-deep-emerald/90 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => setShowQuickView(false)}
                    className="block w-full text-center border border-outline text-deep-emerald font-label-caps text-label-caps uppercase tracking-widest py-4 rounded mt-4 hover:bg-surface-container-low transition-colors"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
