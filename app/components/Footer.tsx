'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <div>
      <footer id="contact" className="bg-gradient-to-r from-[#6FA1D3] to-[#39536D] text-white py-8 sm:py-12 mt-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 md:gap-0">
            {/* Logo a jméno vlevo */}
            <div className="flex flex-col items-center md:items-start md:w-1/3">
              <Image 
                src="/img/logo2_white.png" 
                alt="Logo Petra Vítková" 
                width={256}
                height={256}
                className="h-48 sm:h-56 md:h-64 w-auto mb-2"
              />
            </div>

            {/* Kontakt uprostřed */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4">KONTAKTUJTE MĚ!</h3>
              <p className="mb-1 text-base sm:text-lg">Potřebujete vyřešit hypotéku? Nebo<br />poradit v jiných oblastech financí?</p>
              <p className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 mt-2">Moc ráda vám pomohu.</p>
              <p className="mb-1 text-base sm:text-lg flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                <a href="tel:+420725057108" className="hover:underline text-white font-medium no-underline">+420 725 057 108</a>
              </p>
              <p className="text-base sm:text-lg flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5" />
                <a href="mailto:petravitkova43@seznam.cz" className="hover:underline text-white font-medium no-underline">petravitkova43@seznam.cz</a>
              </p>
            </div>

            {/* Adresa vpravo */}
            <div className="flex flex-col items-center text-center md:w-1/3">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4">KDE MĚ NAJDETE?</h3>
              <p className="text-base sm:text-lg">Nádražní 26, 56401 Žamberk, Pardubický kraj</p>
              <p className="text-base sm:text-lg mt-1">IČO: 88282031</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-white py-2 sm:py-3 w-full">
        <div className="container mx-auto px-4 text-center text-slate-700 text-xs sm:text-sm font-medium">
          Developed with <span className="text-red-500">❤</span> by Coalfamily | © {currentYear}
        </div>
      </div>
    </div>
  );
};

export default Footer; 