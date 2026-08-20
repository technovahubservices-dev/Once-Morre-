import variantsImage from '../../assets/images/variants.webp'

export default function ButtermilkVariants() {
  return (
    <section className="bg-surface-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-12">
        <div className="text-center mb-8">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold mb-4 block">
            Variants
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-emerald mb-2">
            Available Buttermilk Variants
          </h2>
          <div className="h-[1px] w-12 bg-regal-gold mx-auto mb-6" />
        </div>

        <div className="mb-6 text-center">
          <p className="font-body-md text-lg md:text-xl text-deep-emerald font-medium mb-4">
            "ஒவ்வொரு துளியிலும் இயற்கையின் புத்துணர்ச்சி!"
          </p>
          <div className="space-y-4 text-sm md:text-base text-on-surface-variant max-w-4xl mx-auto">
            <div className="flex items-start gap-3 justify-center">
              <span className="text-xl">🥛</span>
              <div>
                <h3 className="font-headline-md text-deep-emerald mb-1">Plain Buttermilk</h3>
                <p>உடலுக்கு புத்துணர்ச்சியையும் நீர்ச்சத்தையும் வழங்க உதவும். செரிமானத்திற்கு இலகுவான பானம். கோடைக்காலத்தில் உடலை குளிர்ச்சியாக வைத்திருக்க உதவும்.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-center">
              <span className="text-xl">🌿</span>
              <div>
                <h3 className="font-headline-md text-deep-emerald mb-1">Masala Buttermilk</h3>
                <p>சீரகம், இஞ்சி போன்ற மசாலா சேர்வதால் சுவையும் மணமும் அதிகரிக்கும். உணவுக்குப் பிறகு புத்துணர்ச்சியாக பருகலாம். லேசான மசாலா சுவையுடன் தினசரி குடிக்க ஏற்றது.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-center">
              <span className="text-xl">🌼</span>
              <div>
                <h3 className="font-headline-md text-deep-emerald mb-1">Turmeric Buttermilk</h3>
                <p>மஞ்சளின் இயற்கையான சேர்க்கையுடன் தயாரிக்கப்படுகிறது. புத்துணர்ச்சியான, லேசான பானமாக பருகலாம். பாரம்பரிய மஞ்சள் சுவையுடன் தனித்துவமான அனுபவம் தரும். தினசரி உணவுடன் சேர்த்துப் பருக ஏற்றது.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low shadow-sm w-full max-w-2xl">
            <img
              src={variantsImage}
              alt="Plain, masala, and turmeric buttermilk variants"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}