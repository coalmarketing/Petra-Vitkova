import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    text: 'Petra Vítková je ženou na správném místě. Velice rychle mi s přítelem pomohla na trhu všech možných bank získat tu nejvýhodnější hypotéku ke koupi našeho vysněného bytu. Od té doby s Petrou spolupracujeme dál.',
    name: 'Jan Novák',
  },
  {
    id: 2,
    text: 'Ve světě přesyceného trhu bank a mladých, nezkušených \'poradců\' je Petra světlem na konci tunelu. Díky svým letitým zkušenostem získala okamžitě mou důvěru a za nejvýhodnějších podmínek jsem pojistil celou svou rodinu.',
    name: 'Jan Novák',
  },
];

const Testimonials = () => {
  return (
    <section id="references" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3A4F] mb-2 uppercase tracking-wide text-center">Reference</h2>
        <p className="text-base sm:text-lg md:text-xl text-[#7E8CA0] mb-8 sm:mb-12 md:mb-16 font-semibold tracking-wide uppercase text-center">Péče o vaše finance, bezpečně a s důvěrou</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col items-start text-left px-2 sm:px-4 md:px-8">
              <Image 
                src="/img/uvozovky.svg" 
                alt="Uvozovky" 
                width={64}
                height={64}
                className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 mb-2" 
              />
              <p className="text-lg sm:text-xl md:text-2xl text-black mb-6 sm:mb-8">{t.text}</p>
              <span className="block text-lg sm:text-xl md:text-2xl font-bold text-[#2E3A4F] mt-2">- {t.name}</span>
              <div className="w-full flex justify-end mt-[-30px] sm:mt-[-35px] md:mt-[-40px]">
                <Image 
                  src="/img/uvozovky.svg" 
                  alt="Uvozovky" 
                  width={64}
                  height={64}
                  className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rotate-180" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 