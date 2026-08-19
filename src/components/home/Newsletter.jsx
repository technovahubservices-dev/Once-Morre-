import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      alert('Thank you for subscribing!')
      setEmail('')
    }
  }

  return (
    <section className="bg-deep-emerald">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-12">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold mb-4 block">
            Stay Connected
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface-white mb-4">
            Join the ONCE MORRE Family
          </h2>
          <div className="h-[1px] w-12 bg-regal-gold mx-auto mb-6" />
          <p className="font-body-md text-body-md text-surface-white/80 mb-6">
            Subscribe to receive exclusive updates on new dairy products, special offers, farm stories, and health tips.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-surface-white border-none rounded px-6 py-4 font-body-md text-body-md text-deep-emerald placeholder-on-surface-variant/50 focus:ring-1 focus:ring-regal-gold"
            />
            <button
              type="submit"
              className="bg-regal-gold text-surface-white font-label-caps text-label-caps uppercase tracking-widest py-4 px-10 rounded hover:bg-regal-gold/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
