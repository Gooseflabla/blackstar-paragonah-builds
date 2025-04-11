
import { Roof, Home, Hammer, MapPin } from 'lucide-react';
import CTAButton from './CTAButton';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md service-card transition-all-300">
    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2 mb-6">
      {[...Array(3)].map((_, i) => (
        <li key={i} className="flex items-center star-bullet">
          <span>Feature {i+1}</span>
        </li>
      ))}
    </ul>
    <CTAButton href="#contact" className="w-full justify-center">Learn More</CTAButton>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: 'Roofing',
      description: 'Expert installation and repair of all types of roofing materials for residential properties.',
      icon: <Roof size={24} />
    },
    {
      title: 'Remodeling',
      description: 'Transform your living spaces with our comprehensive remodeling services.',
      icon: <Home size={24} />
    },
    {
      title: 'Drywall',
      description: 'Professional drywall installation, repair, and finishing for any room in your home.',
      icon: <MapPin size={24} />
    },
    {
      title: 'Deck Building',
      description: 'Custom deck design and construction using premium materials for lasting enjoyment.',
      icon: <Hammer size={24} />
    }
  ];

  return (
    <section id="services" className="bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="text-gray-600 mt-6">
            Blackstar Services offers a comprehensive range of high-quality contracting services
            for homeowners in Paragonah and surrounding areas. Our team of experts brings years of 
            experience to every project, ensuring exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              title={service.title} 
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-6">
            Not sure which service you need? We offer free consultations to help you determine
            the best solution for your home improvement needs.
          </p>
          <CTAButton href="#contact">Schedule a Consultation</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
