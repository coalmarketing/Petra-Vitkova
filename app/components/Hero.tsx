import Image from 'next/image';

const Hero = () => {
  return (
    <header id="home" className="relative overflow-hidden h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)]">
      {/* Pozadí s obrázkem, gradientem a rozmazáním */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.85) 100%), url('/img/Grafy.png') center/cover no-repeat`,
        }}
        aria-hidden="true"
      />
      {/* Overlay pro zesvětlení */}
      <div className="absolute inset-0 bg-white opacity-30 z-10 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-20 flex flex-col justify-end pb-24 sm:pb-16 md:pb-24 lg:pb-40">
        <div className="flex flex-col items-start">
          <div className="mb-12 sm:mb-8 md:mb-12">
            <Image 
              src="/img/logo2.png" 
              alt="Logo" 
              width={220} 
              height={100} 
              className="w-36 sm:w-40 md:w-48 h-auto"
              priority
            />
          </div>
          <div className="w-full">
            <h1 
              className="mb-6 sm:mb-8 md:mb-10 font-teachers font-bold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[1.1] text-[#304160]"
            >
              <span className="block">VAŠE FINANČNÍ</span>
              <span className="block">JISTOTA NA MÍRU</span>
            </h1>
            <p 
              className="mb-8 sm:mb-10 md:mb-12 max-w-4xl font-teachers text-xl sm:text-2xl md:text-[1.75rem] lg:text-[2rem] font-light leading-[1.2] text-[#222]"
            >
              Pomohu vám s hypotékami, investicemi a finančním plánováním, abyste měli jistotu pro každou životní etapu.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero; 