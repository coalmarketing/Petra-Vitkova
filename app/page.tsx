import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CSOBSection from './components/CSOBSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <Services />
      <Testimonials />
      <CSOBSection />
      <ContactForm />
      <Footer />
    </>
  );
}
