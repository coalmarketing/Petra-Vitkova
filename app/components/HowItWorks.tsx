import React from 'react';

const steps = [
  {
    number: '01',
    title: 'První konzultace zdarma',
    description: 'Zjistíte, co potřebujete pro svou finanční stabilitu.'
  },
  {
    number: '02',
    title: 'Osobní plán',
    description: 'Na základě konzultace vytvoříme individuální plán pro vaši finanční budoucnost.'
  },
  {
    number: '03',
    title: 'Realizace',
    description: 'Společně realizujeme všechny kroky a sledujeme úspěšný průběh.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative bg-white py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Dekorativní stopy v pozadí */}
      <img 
        src="/img/stopy.png" 
        alt="Dekorativní stopy" 
        className="hidden md:block absolute left-[60%] top-24 w-[180px] lg:w-[220px] opacity-10 pointer-events-none select-none z-0"
      />
      <img 
        src="/img/stopy.png" 
        alt="Dekorativní stopy" 
        className="hidden md:block absolute left-[80%] top-64 w-[140px] lg:w-[180px] opacity-10 pointer-events-none select-none z-0"
      />
      <img 
        src="/img/stopy.png" 
        alt="Dekorativní stopy" 
        className="hidden md:block absolute left-[20%] top-[60%] w-[120px] lg:w-[160px] opacity-10 pointer-events-none select-none z-0"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#2E3A4F] mb-12 sm:mb-16 uppercase tracking-wide">Tři kroky k úspěchu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 sm:gap-y-16 md:gap-y-0 md:gap-x-8 lg:gap-x-12 items-start justify-items-center w-full">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex flex-row items-start md:items-center w-full max-w-xs md:max-w-none justify-center md:justify-start">
              <span className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold text-[#2E3A4F] leading-none mr-4 sm:mr-6 md:mr-8" style={{fontFamily:'inherit'}}>{step.number}</span>
              <div className="flex flex-col items-start">
                <span className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-semibold text-[#7EB2DF] leading-tight mb-1" style={{fontFamily:'inherit'}}>{step.title}</span>
                <span className="block text-base sm:text-lg md:text-xl text-black font-normal" style={{fontFamily:'inherit'}}>{step.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 