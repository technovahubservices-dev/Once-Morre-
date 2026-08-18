import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import onceMoreImage1 from '../../assets/images/once more home page.png'
import onceMoreImage2 from '../../assets/images/once more home page 2.png'
import onceMoreImage3 from '../../assets/images/Once MoOre (3).png'

const heroImages = [
  onceMoreImage1,
  onceMoreImage2,
  onceMoreImage3,
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${10 + Math.random() * 8}s`,
    size: `${2 + Math.random() * 4}px`,
  }))

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] bg-surface-white flex items-center justify-center overflow-hidden">
      {/* Background images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            animation: index === currentIndex ? 'heroPan 20s linear infinite' : 'none',
          }}
        />
      ))}

      {/* Premium visual effects */}
      {/* Flowing milk gradient */}
      <div className="absolute inset-0 milk-gradient opacity-30" />

      {/* Soft mist layers */}
      <div className="mist-layer w-48 h-48 md:w-96 md:h-96 top-10 left-10" style={{ animationDelay: '0s' }} />
      <div className="mist-layer w-40 h-40 md:w-80 md:h-80 top-20 right-20" style={{ animationDelay: '2s' }} />
      <div className="mist-layer w-32 h-32 md:w-64 md:h-64 bottom-20 left-1/3" style={{ animationDelay: '4s' }} />

      {/* Cloud-like forms */}
      <div className="cloud-layer opacity-40" />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}

      {/* Liquid wave effect */}
      <div className="liquid-wave opacity-20" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto mt-8 md:mt-16">
        <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] md:tracking-[0.3em] text-surface-white mb-4 md:mb-6 drop-shadow-md">
          Pure Goodness, Every Day.
        </p>
        <h1 className="font-display-lg text-4xl md:text-[72px] lg:text-[80px] text-surface-white leading-[1.1] mb-6 md:mb-8 drop-shadow-lg">
          ONCE MORRE
        </h1>
        <p className="font-body-lg text-base md:text-body-lg text-surface-white/90 max-w-xl mx-auto mb-8 md:mb-10 drop-shadow">
          Fresh dairy goodness crafted with purity, care, and tradition.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <Link
            className="bg-surface-white text-deep-emerald font-label-caps text-label-caps uppercase tracking-[0.15em] md:tracking-[0.2em] py-3 px-6 md:py-4 md:px-10 rounded transition-all hover:bg-surface-container-lowest hover:shadow-xl border border-transparent"
            to="/collections"
          >
            Explore Our Products
          </Link>
          <Link
            className="bg-transparent border border-surface-white text-surface-white font-label-caps text-label-caps uppercase tracking-[0.15em] md:tracking-[0.2em] py-3 px-6 md:py-4 md:px-10 rounded transition-all hover:bg-surface-white hover:text-deep-emerald"
            to="/category/Curd"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
