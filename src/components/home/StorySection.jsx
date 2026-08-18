import { Link } from 'react-router-dom'

export default function StorySection() {
  return (
    <section className="bg-surface-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-low rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=1000&fit=crop"
                alt="Our dairy farm"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 md:w-64 md:h-64 bg-soft-cream rounded-sm overflow-hidden border-4 border-surface-white shadow-lg hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=400&h=400&fit=crop"
                alt="Fresh dairy products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-lg">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold mb-4 block">
              Our Legacy
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-emerald mb-6 leading-tight">
              From our farms to your family, with love
            </h2>
            <div className="h-[1px] w-12 bg-regal-gold mb-6" />
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              For over three generations, ONCE MORRE has been synonymous with purity and quality. Our dairy products are crafted using traditional methods passed down through our family, ensuring the richest taste and highest nutritional value.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              From the gentle hand-churning of butter to the slow fermentation of curd, every step is performed with care and respect for nature's goodness.
            </p>
            <Link
              to="/collections"
              className="inline-block border-b border-deep-emerald text-deep-emerald font-label-caps text-label-caps uppercase tracking-widest pb-1 hover:text-regal-gold hover:border-regal-gold transition-colors"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
