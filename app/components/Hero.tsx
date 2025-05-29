'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6FA1D3] to-[#39536D] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="absolute inset-0">
        <Image
          src="/img/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Petra Vitková
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Finanční poradenství
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact-form"
              className="inline-block bg-white text-[#39536D] px-8 py-3 rounded-lg font-semibold hover:bg-[#39536D] hover:text-white transition-colors duration-300"
            >
              Kontaktujte mě
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 