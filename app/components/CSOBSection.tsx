import Image from 'next/image';

const CSOBSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3A4F] mb-2 uppercase tracking-wide text-center">Výhradní partner ČSOB</h2>
        <p className="text-base sm:text-lg md:text-xl text-[#7E8CA0] mb-8 sm:mb-12 md:mb-16 font-semibold tracking-wide uppercase text-center">Jistota, inovace a dlouhodobá stabilita</p>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Text vlevo */}
          <div className="md:w-1/2 text-left px-2 sm:px-4 md:px-8">
            <p className="text-lg sm:text-xl md:text-2xl text-black mb-6 sm:mb-8">
              Jsem certifikovaná finanční poradkyně s více než 14 lety zkušeností. Svou profesní dráhu stavím na férovém přístupu, srozumitelné komunikaci a individuálním přístupu ke každému klientovi.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-black">
              Jako výhradní partner ČSOB – jedné z největších českých finančních skupin – vám mohu nabídnout jistotu, inovace a dlouhodobou stabilitu.
            </p>
          </div>
          
          {/* Obrázek vpravo */}
          <div className="md:w-1/2 flex justify-center px-2 sm:px-4 md:px-8">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/img/tym.webp"
                alt="Logo ČSOB"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSOBSection; 