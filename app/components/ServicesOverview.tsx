import { FaHome, FaChartLine, FaPiggyBank, FaShieldAlt } from 'react-icons/fa';

const services = [
  { icon: <FaHome size={64} />, label: 'HYPOTÉKY' },
  { icon: <FaChartLine size={64} />, label: 'INVESTICE' },
  { icon: <FaPiggyBank size={64} />, label: 'SPOŘENÍ' },
  { icon: <FaShieldAlt size={64} />, label: 'POJIŠTĚNÍ' },
];

const ServicesOverview = () => {
  return (
    <section id="services-overview" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 uppercase tracking-wide text-[#2E3A4F]">KOMPLEXNÍ PORADENSTVÍ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {services.map((service, idx) => (
            <div
              key={service.label}
              className="flex flex-col items-center justify-center bg-[#7EB2DF] rounded-sm py-4 sm:py-6 px-3 sm:px-4 w-full max-w-xs"
            >
              <div className="mb-4 sm:mb-6 text-white transform scale-75 sm:scale-100">{service.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-regular text-white tracking-wide">{service.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;