import { useState } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'The best curd I have ever tasted! So creamy and fresh. My whole family loves it. Delivery is always on time and the packaging is perfect.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    text: 'Pure ghee with an amazing aroma. You can tell it is made using the traditional bilona method. Worth every rupee. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Anita Patel',
    location: 'Bangalore',
    rating: 5,
    text: 'I subscribe to the family pack and it has made our lives so easy. Fresh paneer, curd, and buttermilk every single day without fail.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Pune',
    rating: 5,
    text: 'The palkova is divine! It reminds me of my grandmother\'s recipe. ONCE MORRE has truly preserved the authentic taste of traditional dairy.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
]

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-surface-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold mb-4 block">
            Testimonials
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-emerald mb-2">
            What Our Customers Say
          </h2>
          <div className="h-[1px] w-12 bg-regal-gold mx-auto" />
        </div>

        {/* Desktop Reviews Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-soft-cream border border-outline-variant rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 text-regal-gold mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined text-[18px]">
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-outline-variant"
                />
                <div>
                  <p className="font-body-md text-sm font-semibold text-deep-emerald">{review.name}</p>
                  <p className="font-body-md text-xs text-on-surface-variant">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Reviews Carousel */}
        <div className="md:hidden">
          <div className="bg-soft-cream border border-outline-variant rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-1 text-regal-gold mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="material-symbols-outlined text-[18px]">
                  star
                </span>
              ))}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              "{reviews[activeIndex].text}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={reviews[activeIndex].avatar}
                alt={reviews[activeIndex].name}
                className="w-12 h-12 rounded-full object-cover border border-outline-variant"
              />
              <div>
                <p className="font-body-md text-sm font-semibold text-deep-emerald">{reviews[activeIndex].name}</p>
                <p className="font-body-md text-xs text-on-surface-variant">{reviews[activeIndex].location}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === activeIndex ? 'bg-deep-emerald' : 'bg-outline-variant'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
