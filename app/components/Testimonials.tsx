'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Jana Nováková',
    role: 'Majitelka firmy',
    content: 'Petra mi pomohla s financováním mé firmy. Její profesionální přístup a znalosti mi pomohly najít nejlepší řešení.',
    image: '/img/testimonial1.jpg'
  },
  {
    name: 'Petr Svoboda',
    role: 'Klient',
    content: 'Díky Petře jsem získal výhodnou hypotéku a ušetřil jsem spoustu peněz. Její poradenství bylo opravdu na úrovni.',
    image: '/img/testimonial2.jpg'
  }
];

const Testimonials = () => {
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
            Reference
          </h2>
          <p className="text-lg text-[#6FA1D3] max-w-2xl mx-auto">
            Co o mně říkají moji klienti
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#39536D]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#6FA1D3]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-[#39536D]">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 