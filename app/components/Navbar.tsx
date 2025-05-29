'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], header[id]');
      
      let currentActiveSection = 'home';
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < 100) {
          currentActiveSection = section.id;
        }
      });
      
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#6FA1D3] to-[#39536D] text-white sticky top-0 z-50 py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="#home" className="flex items-center">
            <Image 
              src="/img/logo1_white.png" 
              alt="Logo" 
              width={100} 
              height={100} 
              className="w-16 sm:w-20 md:w-24 lg:w-[100px] h-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 ml-auto">
            <Link href="#services" className={`nav-link text-white hover:text-gray-200 text-sm lg:text-base ${activeSection === 'services' ? 'active' : ''}`}>
              SLUŽBY
            </Link>
            <Link href="#how-it-works" className={`nav-link text-white hover:text-gray-200 text-sm lg:text-base ${activeSection === 'how-it-works' ? 'active' : ''}`}>
              JAK NA TO
            </Link>
            <Link href="#references" className={`nav-link text-white hover:text-gray-200 text-sm lg:text-base ${activeSection === 'references' ? 'active' : ''}`}>
              REFERENCE
            </Link>
            <Link href="#contact" className="btn-primary ml-4 uppercase text-sm lg:text-base px-4 lg:px-6 py-2">
              DOMLUVIT KONZULTACI
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <button 
                className="text-white focus:outline-none p-2"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      
      <div 
        className={`md:hidden fixed top-0 left-0 w-full bg-gradient-to-r from-[#6FA1D3] to-[#39536D] transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col">
          <div className="flex justify-end p-4">
            <button 
              className="text-white focus:outline-none p-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col">
            <Link 
              href="#services" 
              className="block text-white px-6 py-4 text-lg border-b border-white/10 hover:bg-white/10 transition-colors" 
              onClick={toggleMenu}
            >
              SLUŽBY
            </Link>
            <Link 
              href="#how-it-works" 
              className="block text-white px-6 py-4 text-lg border-b border-white/10 hover:bg-white/10 transition-colors" 
              onClick={toggleMenu}
            >
              JAK NA TO
            </Link>
            <Link 
              href="#references" 
              className="block text-white px-6 py-4 text-lg border-b border-white/10 hover:bg-white/10 transition-colors" 
              onClick={toggleMenu}
            >
              REFERENCE
            </Link>
          </div>
          <div className="p-6 border-t border-white/10">
            <Link 
              href="#contact" 
              className="block w-full bg-white text-[#2E5082] text-center font-medium rounded-sm px-4 py-3 uppercase text-lg hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              DOMLUVIT KONZULTACI
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 