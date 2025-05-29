'use client';

import { useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-gradient-to-r from-[#6FA1D3] to-[#39536D] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="relative h-12 w-auto">
              <Image 
                src="/logo.png" 
                alt="Petra Vitková - Finanční poradenství" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              © {currentYear} Petra Vitková. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 