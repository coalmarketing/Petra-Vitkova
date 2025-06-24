'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact-form" className="py-16 sm:py-20 md:py-28 bg-gradient-to-r from-[#6FA1D3] to-[#39536D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm p-8 sm:p-10 md:p-14 rounded-2xl shadow-2xl text-center"
        >
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#39536D] mb-4">Kontaktujte mě</h2>
            <p className="text-lg sm:text-xl text-[#6FA1D3] max-w-2xl mx-auto">
              Pomohu vám k dosažení lepší finanční budoucnosti. Vyplňte formulář a já se vám ozvu do 24 hodin.
            </p>
          </div>
          
          <form 
            className="space-y-6 text-left"
            data-netlify="true"
            name="contact"
            method="POST"
            action="/success"
          >
            {/* Hidden input pro Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#39536D] mb-2">
                  Jméno a příjmení <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-[#6FA1D3] focus:border-[#6FA1D3] text-base transition-all duration-200 border border-[#6FA1D3]/30 hover:border-[#6FA1D3]"
                  placeholder="Zadejte vaše jméno"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#39536D] mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-[#6FA1D3] focus:border-[#6FA1D3] text-base transition-all duration-200 border border-[#6FA1D3]/30 hover:border-[#6FA1D3]"
                  placeholder="vas@email.cz"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#39536D] mb-2">
                Telefonní číslo
              </label>
              <input 
                type="tel" 
                name="phone" 
                id="phone" 
                value={formState.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-[#6FA1D3] focus:border-[#6FA1D3] text-base transition-all duration-200 border border-[#6FA1D3]/30 hover:border-[#6FA1D3]"
                placeholder="+420 XXX XXX XXX"
              />
              <p className="mt-2 text-sm text-[#6FA1D3] flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Není povinné, pokud preferujete komunikaci e-mailem
              </p>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#39536D] mb-2">
                Dejte mi prosím vědět, o jaké služby máte zájem? <span className="text-red-500">*</span>
              </label>
              <textarea 
                name="message" 
                id="message" 
                rows={4} 
                required 
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-[#6FA1D3] focus:border-[#6FA1D3] text-base transition-all duration-200 border border-[#6FA1D3]/30 hover:border-[#6FA1D3]"
                placeholder="Popište prosím, s čím vám mohu pomoci..."
              ></textarea>
            </div>
            
            <div className="text-center pt-4">
              <button 
                type="submit" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#6FA1D3] to-[#39536D] rounded-lg shadow-lg hover:from-[#39536D] hover:to-[#6FA1D3] focus:outline-none focus:ring-2 focus:ring-[#6FA1D3] focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Odeslat zprávu
              </button>
            </div>
          </form>
          
          <p className="mt-8 text-sm text-[#39536D] text-center">
            Odesláním formuláře vyjadřujete souhlas s{' '}
            <a href="#" className="text-[#6FA1D3] hover:text-[#39536D] font-medium underline-offset-2 hover:underline">
              podmínkami ochrany osobních údajů
            </a>
            {' '}a se{' '}
            <a href="#" className="text-[#6FA1D3] hover:text-[#39536D] font-medium underline-offset-2 hover:underline">
              Zásadami cookies (EU)
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 