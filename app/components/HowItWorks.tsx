'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    title: 'Konzultace',
    description: 'Sejdeme se a probereme vaše potřeby a cíle.',
    icon: '/img/consultation.png'
  },
  {
    title: 'Analýza',
    description: 'Provedu analýzu vaší současné finanční situace.',
    icon: '/img/analysis.png'
  },
  {
    title: 'Řešení',
    description: 'Navrhnu vám nejlepší řešení na míru.',
    icon: '/img/solution.png'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#39536D] mb-4">
            Jak to funguje
          </h2>
          <p className="text-lg text-[#6FA1D3] max-w-2xl mx-auto">
            Jednoduchý proces, který vás dovede k vašim finančním cílům
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mb-6 relative">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#39536D] mb-3">
                {step.title}
              </h3>
              <p className="text-[#6FA1D3]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 