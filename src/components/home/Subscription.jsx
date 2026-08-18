import { Link } from 'react-router-dom'

const plans = [
  {
    id: 'daily',
    name: 'Daily Fresh',
    price: '₹899',
    period: '/month',
    description: 'Fresh curd and buttermilk delivered every morning.',
    features: ['500g Curd Daily', '500ml Buttermilk Daily', 'Free Delivery', 'Cancel Anytime'],
    popular: false,
  },
  {
    id: 'family',
    name: 'Family Pack',
    price: '₹1,499',
    period: '/month',
    description: 'Complete dairy essentials for the whole family.',
    features: ['1kg Curd Daily', '1L Buttermilk Daily', '200g Paneer 3x/week', 'Free Delivery', 'Priority Support'],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹2,499',
    period: '/month',
    description: 'Premium dairy range with ghee and sweets.',
    features: ['500ml Ghee Monthly', '250g Palkova Monthly', 'All Family Pack Items', 'Free Delivery', 'Exclusive Offers'],
    popular: false,
  },
]

export default function Subscription() {
  return (
    <section className="bg-soft-cream">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold mb-4 block">
            Subscribe & Save
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-emerald mb-2">
            Dairy Subscription Plans
          </h2>
          <div className="h-[1px] w-12 bg-regal-gold mx-auto mb-6" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Never run out of your favorite dairy products. Subscribe to a plan and get fresh deliveries right to your doorstep.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-surface-white border rounded-lg p-8 shadow-sm ${
                plan.popular ? 'border-regal-gold border-2 scale-105' : 'border-outline-variant'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-regal-gold text-white text-xs font-label-caps uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className="font-headline-md text-headline-md text-deep-emerald mb-2">{plan.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="font-display-lg text-headline-lg text-deep-emerald">{plan.price}</span>
                  <span className="text-on-surface-variant ml-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                    <span className="material-symbols-outlined text-regal-gold text-[20px]">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/collections"
                className={`block w-full text-center font-label-caps text-label-caps uppercase tracking-widest py-4 rounded transition-colors ${
                  plan.popular
                    ? 'bg-deep-emerald text-surface-white hover:bg-surface-tint'
                    : 'bg-transparent border border-outline-variant text-deep-emerald hover:bg-surface-container-low'
                }`}
              >
                Subscribe Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
