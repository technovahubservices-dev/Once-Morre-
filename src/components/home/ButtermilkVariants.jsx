import variantsImage from '../../assets/images/variants.webp'

export default function ButtermilkVariants() {
  return (
    <section className="bg-surface-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold mb-4 block">
            Variants
          </span>

          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-emerald mb-2">
            Available Buttermilk Variants
          </h2>

          <div className="h-[1px] w-12 bg-regal-gold mx-auto mb-6" />

          <p className="font-body-md text-lg md:text-xl text-deep-emerald font-medium">
            "ஒவ்வொரு துளியிலும் இயற்கையின் புத்துணர்ச்சி!"
          </p>
        </div>

        {/* Three Variants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">

          {/* Plain Buttermilk - Left */}
          <div className="text-center flex flex-col items-center ">
            <span className="text-3xl mb-4">
              🥛
            </span>

            <h3 className="font-headline-md text-xl md:text-2xl text-deep-emerald font-medium mb-4">
              Plain Buttermilk
            </h3>

            <div className="space-y-3 text-sm md:text-base text-on-surface-variant leading-relaxed">
              <p>
                உடலுக்கு புத்துணர்ச்சியையும் நீர்ச்சத்தையும் வழங்க உதவும்.
              </p>

              <p>
                செரிமானத்திற்கு இலகுவான பானம்.
              </p>

              <p>
                கோடைக்காலத்தில் உடலை குளிர்ச்சியாக வைத்திருக்க உதவும்.
              </p>
            </div>
          </div>

          {/* Masala Buttermilk - Center */}
          <div className="text-center flex flex-col items-center">
            <span className="text-3xl mb-4">
              🌿
            </span>

            <h3 className="font-headline-md text-xl md:text-2xl text-deep-emerald font-medium mb-4">
              Masala Buttermilk
            </h3>

            <div className="space-y-3 text-sm md:text-base text-on-surface-variant leading-relaxed">
              <p>
                சீரகம், இஞ்சி போன்ற மசாலா சேர்வதால் சுவையும் மணமும் அதிகரிக்கும்.
              </p>

              <p>
                உணவுக்குப் பிறகு புத்துணர்ச்சியாக பருகலாம்.
              </p>

              <p>
                லேசான மசாலா சுவையுடன் தினசரி குடிக்க ஏற்றது.
              </p>
            </div>
          </div>

          {/* Turmeric Buttermilk - Right */}
          <div className="text-center flex flex-col items-center">
            <span className="text-3xl mb-4">
              🌼
            </span>

            <h3 className="font-headline-md text-xl md:text-2xl text-deep-emerald font-medium mb-4">
              Turmeric Buttermilk
            </h3>

            <div className="space-y-3 text-sm md:text-base text-on-surface-variant leading-relaxed">
              <p>
                மஞ்சளின் இயற்கையான சேர்க்கையுடன் தயாரிக்கப்படுகிறது.
              </p>

              <p>
                புத்துணர்ச்சியான, லேசான பானமாக பருகலாம்.
              </p>

              <p>
                பாரம்பரிய மஞ்சள் சுவையுடன் தனித்துவமான அனுபவம் தரும்.
              </p>

              <p>
                தினசரி உணவுடன் சேர்த்துப் பருக ஏற்றது.
              </p>
            </div>
          </div>

        </div>

        {/* Image */}
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