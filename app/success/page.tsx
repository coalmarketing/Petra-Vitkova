export const dynamic = "force-static";

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#6FA1D3] to-[#39536D] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center animate-fade-in">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#39536D] mb-2">Děkujeme za odeslání!</h1>
          <p className="text-[#6FA1D3] mb-2">
            Vaše zpráva byla úspěšně odeslána a potvrzujeme její přijetí.
          </p>
          <p className="text-[#39536D] mb-2">
            Ozvu se vám nejpozději do 24 hodin na zadaný e-mail nebo telefonní číslo.
          </p>
          <p className="text-[#39536D] text-sm mb-4">
            Pokud by vám potvrzení nepřišlo do e-mailu, zkontrolujte prosím složku spam nebo mě kontaktujte přímo na <a href="mailto:petra@vitkova.cz" className="text-[#6FA1D3] underline hover:text-[#39536D]">petra@vitkova.cz</a>.
          </p>
        </div>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#6FA1D3] to-[#39536D] rounded-lg shadow-lg hover:from-[#39536D] hover:to-[#6FA1D3] focus:outline-none focus:ring-2 focus:ring-[#6FA1D3] focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  );
} 