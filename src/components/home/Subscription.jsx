import { useState } from 'react'
import { subscriptionApi } from '../../services/subscriptionApi.js'
import { useAuth } from '../../context/AuthContext.jsx'

const plans = [
  {
    id: '30-days',
    duration: '30 DAYS',
    regularPrice: '₹2,100',
    offerPrice: '₹1,800',
    savings: 'SAVE ₹300',
    iconColor: 'text-blue-600',
    badgeClass: 'bg-blue-600 text-white',
    accentClass: 'bg-blue-50',
    popular: false,
    productId: '6a856e8839e5f3bd42f7855b',
    originalPrice: 2100,
    offerPriceValue: 1800,
  },
  {
    id: '90-days',
    duration: '90 DAYS',
    regularPrice: '₹5,600',
    offerPrice: '₹4,999',
    savings: 'SAVE ₹601',
    iconColor: 'text-green-600',
    badgeClass: 'bg-green-600 text-white',
    accentClass: 'bg-green-50',
    popular: true,
    productId: '6a856e8839e5f3bd42f7855b',
    originalPrice: 5600,
    offerPriceValue: 4999,
  },
  {
    id: '180-days',
    duration: '180 DAYS',
    regularPrice: '₹11,600',
    offerPrice: '₹8,999',
    savings: 'SAVE ₹2,601',
    iconColor: 'text-orange-600',
    badgeClass: 'bg-orange-500 text-white',
    accentClass: 'bg-orange-50',
    popular: false,
    productId: '6a856e8839e5f3bd42f7855b',
    originalPrice: 11600,
    offerPriceValue: 8999,
  },
]

export default function Subscription() {
  const { token } = useAuth()
  const [loading, setLoading] = useState({})
  const [message, setMessage] = useState({})

  const handleActivate = async (plan) => {
    if (!token) {
      setMessage({ [plan.id]: 'Please login to activate subscription' })
      return
    }

    setLoading((prev) => ({ ...prev, [plan.id]: true }))
    setMessage({})

    try {
      await subscriptionApi.activate(token, {
        productId: plan.productId,
        plan: plan.duration,
        quantity: 1,
        offerPrice: plan.offerPriceValue,
        originalPrice: plan.originalPrice,
      })
      setMessage({ [plan.id]: 'Subscription activated successfully!' })
    } catch (err) {
      setMessage({ [plan.id]: err.message || 'Failed to activate subscription' })
    } finally {
      setLoading((prev) => ({ ...prev, [plan.id]: false }))
    }
  }
  return (
    <section className="bg-soft-cream">
      <div className="max-w-[1280px] mx-auto px-12 md:px-12 py-8">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-surface-white border border-regal-gold/40 text-deep-emerald font-label-caps text-label-caps uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <span className="material-symbols-outlined text-regal-gold text-[20px]">delivery_truck_speed</span>
            SUBSCRIPTION PLAN
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-emerald mb-2">
            1 LITRE PER DAY SUBSCRIPTION PLAN
          </h2>
          <div className="h-[1px] w-12 bg-regal-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative bg-surface-white border rounded-2xl p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col ${
                plan.popular
                  ? 'border-regal-gold/60 shadow-[0_0_0_1px_rgba(196,164,132,0.15)]'
                  : 'border-outline-variant/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-regal-gold text-surface-white text-[10px] font-label-caps font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-1">
                    Plan Duration
                  </p>
                  <h3 className="font-headline-md text-headline-md text-deep-emerald">{plan.duration}</h3>
                </div>
                <div className={`h-16 w-16 rounded-full ${plan.accentClass} flex items-center justify-center shrink-0`}>
                  <span className={`material-symbols-outlined ${plan.iconColor} text-[30px]`}>calendar_month</span>
                </div>
              </div>

              <div className={`mb-6 ${plan.badgeClass} rounded px-4 py-3 text-center font-label-caps text-label-caps uppercase tracking-widest`}>
                {plan.offerPrice}
              </div>

              <div className="mb-6">
                <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-2">
                  Regular Price
                </p>
                <p className="text-xl text-on-surface-variant line-through">{plan.regularPrice}</p>
              </div>

              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-low text-deep-emerald text-xs font-label-caps font-bold uppercase tracking-widest">
                  {plan.savings}
                </span>
              </div>

              <div className="mt-auto">
                <button
                  type="button"
                  onClick={() => handleActivate(plan)}
                  disabled={loading[plan.id]}
                  className="w-full bg-deep-emerald text-surface-white font-label-caps text-label-caps uppercase tracking-widest py-4 rounded-lg hover:bg-deep-emerald/90 transition-colors disabled:opacity-50"
                >
                  {loading[plan.id] ? 'Activating...' : 'Activate Plan'}
                </button>
                {message[plan.id] && (
                  <p className={`mt-2 text-sm text-center ${message[plan.id].includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {message[plan.id]}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 bg-deep-emerald text-surface-white rounded-lg px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 font-label-caps text-label-caps uppercase tracking-widest">
            <span className="material-symbols-outlined text-regal-gold text-[24px]">local_shipping</span>
            100% FREE HOME DELIVERY
          </div>
          <p className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold">
            ON TIME, EVERY DAY
          </p>
        </div>
      </div>
    </section>
  )
}
