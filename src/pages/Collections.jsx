import { useState, useEffect } from 'react'
import ProductCard from '../components/product/ProductCard.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import Pagination from '../components/common/Pagination.jsx'
import SidebarFilters from '../components/common/SidebarFilters.jsx'
import { api } from '../services/api.js'

export default function Collections() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('Recommended')

  useEffect(() => {
    api.getProducts().then(setProducts)
  }, [])

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Dairy Products' },
  ]

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-[120px]">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant pb-6">
          <div>
            {/* // Improved typography: larger headline, clearer subtext, consistent tracking for premium look. */}
            <h1 className="font-headline-lg text-headline-lg text-deep-emerald mb-3">Premium Dairy Collection</h1>
            <p className="text-on-surface-variant text-base max-w-2xl leading-relaxed">Discover our exquisite range of farm-fresh dairy products, crafted with tradition and delivered with care.</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-on-surface-variant text-sm">Showing 1-24 of 1,248 Items</span>
            <div className="relative">
              <select
                className="appearance-none bg-transparent border border-outline-variant rounded-none py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-deep-emerald focus:border-deep-emerald cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>New Arrivals</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <SidebarFilters />
        <div className="flex-1">
          {/* // Root cause of congestion: 4 columns on xl screens makes cards too narrow.
              // Fix: cap grid at 3 columns on all screen sizes for comfortable breathing room. */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={12} onPageChange={setCurrentPage} />
        </div>
      </div>
    </main>
  )
}
