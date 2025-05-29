import Link from 'next/link';

const services = [
  {
    title: 'HYPOTÉKY',
    description: 'Ráda vám pomohu s výběrem té nejlepší hypotéky na míru. Snižte úroky a refinancujte výhodněji!'
  },
  {
    title: 'SPOŘENÍ',
    description: 'Začněte spořit na budoucnost s minimálními riziky a maximálním zhodnocením.'
  },
  {
    title: 'INVESTICE',
    description: 'Investujte chytře a bezpečně. Pomohu vám vytvořit plán pro vaše úspory.'
  },
  {
    title: 'ŽIVOTNÍ POJIŠTĚNÍ',
    description: 'Postarejte se o svou rodinu s flexibilním životním pojištěním, které chrání všechny životní situace.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-[#eaf4fb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3A4F] mb-8 sm:mb-12 uppercase tracking-wide">Udělejte krok k lepší finanční budoucnosti.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {services.map((service) => (
            <div key={service.title} className="bg-white border border-[#7EB2DF] rounded-none py-6 sm:py-8 md:py-10 px-4 sm:px-6 flex flex-col items-center justify-center text-center min-h-[160px] sm:min-h-[180px]">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-regular text-[#2E3A4F] mb-3 sm:mb-4 uppercase tracking-wide">{service.title}</h3>
              <p className="text-base sm:text-lg md:text-xl text-black font-normal leading-snug">{service.description}</p>
            </div>
          ))}
        </div>
        <Link href="#contact-form" className="inline-block bg-[#2E3A4F] text-white text-base sm:text-lg md:text-xl font-bold rounded-none px-6 sm:px-8 md:px-10 py-2 sm:py-3 tracking-wide transition hover:bg-[#1a2533]">
          DOMLUVIT KONZULTACI
        </Link>
      </div>
    </section>
  );
};

export default Services; 