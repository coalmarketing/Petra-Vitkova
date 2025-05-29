'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Hypoteční poradenství',
    description: 'Pomohu vám s výběrem nejvýhodnější hypotéky a s celým procesem jejího získání.'
  },
  {
    title: 'Finanční plánování',
    description: 'Vytvořím vám komplexní finanční plán na míru vašim potřebám a cílům.'
  },
  {
    title: 'Investiční poradenství',
    description: 'Poradím vám s investicemi a pomohu vám dosáhnout vašich finančních cílů.'
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#39536D] mb-4">
            Moje služby
          </h2>
          <p className="text-lg text-[#6FA1D3] max-w-2xl mx-auto">
            Komplexní finanční poradenství pro vaši budoucnost
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#39536D] mb-3">
                {service.title}
              </h3>
              <p className="text-[#6FA1D3]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview; 