import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard.jsx'
import curdImage from '../../assets/images/curd.jpg'
import buttermilkImage from '../../assets/images/buttermilk.jpg'
import gheeImage from '../../assets/images/Ghee packed.jpg'
import paneerImage from '../../assets/images/paneer.jpg'

const categories = [
  {
    id: 1,
    name: 'Fresh Curd',
    slug: 'Curd',
    image: curdImage,
  },
  {
    id: 2,
    name: 'Buttermilk',
    slug: 'Buttermilk',
    image: buttermilkImage,
  },
  {
    id: 3,
    name: 'Ghee',
    slug: 'Ghee',
    image: gheeImage,
  },
  {
    id: 4,
    name: 'Paneer',
    slug: 'Paneer',
    image: paneerImage,
  },
]

export default function PureMilkGoodness() {
  return (
    <section className="bg-surface-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold mb-4 block">
            Our Range
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-emerald mb-2">
            Pure Milk Goodness
          </h2>
          <div className="h-[1px] w-12 bg-regal-gold mx-auto mb-6" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            From creamy curd to golden ghee, every product is a testament to the purity of milk and the art of traditional dairy-making.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
