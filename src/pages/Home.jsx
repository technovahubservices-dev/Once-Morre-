import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero.jsx'
import SlowMovingImages from '../components/home/SlowMovingImages.jsx'
import ProductGrid from '../components/product/ProductGrid.jsx'
import PureMilkGoodness from '../components/home/PureMilkGoodness.jsx'
import DairyQualityGuide from '../components/home/DairyQualityGuide.jsx'
import StorySection from '../components/home/StorySection.jsx'
import Subscription from '../components/home/Subscription.jsx'
import CustomerReviews from '../components/home/CustomerReviews.jsx'
import Blogs from '../components/home/Blogs.jsx'
import Newsletter from '../components/home/Newsletter.jsx'
import { api } from '../services/api.js'

export default function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    api.getProducts().then(setProducts)
    api.getCategories().then(setCategories)
  }, [])

  const featuredProducts = products.filter((p) => p.badge === 'Best Seller' || p.reviews > 100)

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Slow Moving Images */}
      <SlowMovingImages />

      {/* 3. Featured Products */}
      <section className="bg-surface-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold mb-4 block">
              Handpicked For You
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-emerald mb-2">
              Featured Products
            </h2>
            <div className="h-[1px] w-12 bg-regal-gold mx-auto" />
          </div>
          {featuredProducts.length > 0 ? (
            <ProductGrid products={featuredProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="font-body-md text-body-md text-on-surface-variant">Discover our most loved dairy products.</p>
            </div>
          )}
          <div className="text-center mt-12">
            <Link
              to="/collections"
              className="inline-block border-b border-deep-emerald text-deep-emerald font-label-caps text-label-caps uppercase tracking-widest pb-1 hover:text-regal-gold hover:border-regal-gold transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Pure Milk Goodness */}
      <PureMilkGoodness />

      {/* 4. Why Choose ONCE MORRE */}
      <DairyQualityGuide />

      {/* 5. Dairy Journey */}
      <StorySection />

      {/* 6. Subscription */}
      <Subscription />

      {/* 7. Customer Reviews */}
      <CustomerReviews />

      {/* 8. Blogs */}
      <Blogs />

      {/* 9. Newsletter */}
      <Newsletter />
    </>
  )
}
