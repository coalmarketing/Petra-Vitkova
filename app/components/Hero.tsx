import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <header id="home" className="relative overflow-hidden h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)]">
      {/* Pozadí s obrázkem, gradientem a rozmazáním */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.85) 100%), url('/img/Grafy.webp') center/cover no-repeat`,
        }}
        aria-hidden="true"
      />
      {/* Overlay pro zesvětlení */}
      <div className="absolute inset-0 bg-white opacity-30 z-10 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-20 flex flex-col justify-center">
        <div className="flex flex-col items-start max-h-[90vh]">
          <div className="mb-[2vh] sm:mb-[2.5vh] md:mb-[3vh]">
            <Image 
              src="/img/logo2.png" 
              alt="Logo" 
              width={220} 
              height={100} 
              className="w-[15vh] sm:w-[18vh] md:w-[20vh] lg:w-[22vh] h-auto object-contain"
              priority
            />
          </div>
          <div className="w-full">
            <h1 
              className="mb-[1.5vh] sm:mb-[2vh] md:mb-[2.5vh] font-teachers font-bold text-[4vh] sm:text-[5vh] md:text-[6vh] lg:text-[7vh] xl:text-[8vh] leading-[1.1] text-[#304160]"
            >
              <span className="block">VAŠE FINANČNÍ</span>
              <span className="block">JISTOTA NA MÍRU</span>
            </h1>
            <p 
              className="mb-[2vh] sm:mb-[2.5vh] md:mb-[3vh] max-w-4xl font-teachers text-[1.8vh] sm:text-[2vh] md:text-[2.2vh] lg:text-[2.5vh] xl:text-[2.8vh] font-light leading-[1.2] text-[#222]"
            >
              Pomohu vám s hypotékami, investicemi a finančním plánováním, abyste měli jistotu pro každou životní etapu.
            </p>
            <Link 
              href="#contact-form" 
              className="inline-block bg-[#304160] text-white px-6 py-3 rounded-lg font-teachers text-[1.5vh] sm:text-[1.7vh] md:text-[1.9vh] lg:text-[2.1vh] xl:text-[2.3vh] transition-all duration-300 hover:bg-[#1e2a3b] hover:shadow-lg transform hover:-translate-y-1"
            >
              CHCI NEZÁVAZNOU KONZULTACI
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero; 