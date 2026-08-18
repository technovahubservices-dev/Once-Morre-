import { Link } from 'react-router-dom'

const qualityPoints = [
  {
    id: 'freshness',
    title: 'Freshness',
    subtitle: 'Daily Delivery',
    description: 'Our dairy products are delivered within hours of production to lock in maximum freshness, nutrients, and natural taste.',
    icon: 'local_fire_department',
    link: '/category/Curd',
  },
  {
    id: 'purity',
    title: 'Purity',
    subtitle: 'No Additives',
    description: 'We use absolutely no preservatives, artificial flavors, or chemicals. Just pure milk and traditional ingredients.',
    icon: 'verified',
    link: '/category/Ghee',
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    subtitle: 'Rich in Goodness',
    description: 'Packed with essential proteins, calcium, and vitamins. Our products support a healthy, active lifestyle for the whole family.',
    icon: 'fitness_center',
    link: '/category/Paneer',
  },
  {
    id: 'tradition',
    title: 'Tradition',
    subtitle: 'Time-Tested Methods',
    description: 'Crafted using age-old techniques like bilona method for ghee and natural fermentation for curd, ensuring authentic taste.',
    icon: 'auto_awesome',
    link: '/category/Sweets',
  },
]

export default function DairyQualityGuide() {
  return (
    <section className="bg-soft-cream">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold mb-4 block">
            Our Promise
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-emerald mb-4">
            The ONCE MORRE Standard
          </h2>
          <div className="h-[1px] w-12 bg-regal-gold mx-auto mb-6" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Four pillars that guarantee every product you receive meets the highest standards of quality, taste, and nutrition.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityPoints.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group bg-surface-white border border-outline-variant p-8 rounded-sm hover:border-regal-gold/50 transition-all duration-300 text-center"
            >
              <span className="material-symbols-outlined text-4xl text-regal-gold mb-4 block group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <h3 className="font-headline-md text-headline-md text-deep-emerald mb-1">{item.title}</h3>
              <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant text-xs mb-4">{item.subtitle}</p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/collections"
            className="inline-block bg-deep-emerald text-surface-white font-label-caps text-label-caps uppercase tracking-widest py-4 px-10 rounded hover:bg-deep-emerald/90 transition-colors"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
