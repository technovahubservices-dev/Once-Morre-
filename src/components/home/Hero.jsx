import heroImage from '../../assets/images/heropage.jpeg'

export default function Hero() {
  return (
    <section className="bg-surface-white overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <img
          src={heroImage}
          alt="Once Morre buttermilk homepage banner"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  )
}
