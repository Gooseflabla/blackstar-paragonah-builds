
import CTAButton from './CTAButton';
import { Check } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-white via-gray-50 to-gray-100">
          {/* Overlay pattern for depth */}
          <div className="absolute inset-0 opacity-5" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }}>
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <span className="bg-black text-white px-4 py-1 rounded-full text-sm mb-4 inline-block">
              Paragonah, Utah's Premier Contractor
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building <span className="relative">
                Excellence 
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-black"></span>
              </span> In Every Project
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Specializing in roofing, remodeling, drywall, and custom deck building for homeowners in Paragonah and surrounding areas.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {['Licensed & Insured', 'Free Estimates', 'Quality Craftsmanship', 'Local Experts'].map((item) => (
                <div key={item} className="flex items-center">
                  <Check size={18} className="mr-2 text-black" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="#contact">Get Free Estimate</CTAButton>
              <CTAButton href="#showcase" className="bg-white hover:bg-gray-100 text-black border border-black">
                View Our Work
              </CTAButton>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-black rotate-3 rounded-lg z-0"></div>
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-300 z-10">
                <img 
                  src="/placeholder.svg" 
                  alt="Blackstar Services project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 bg-white p-4 shadow-xl rounded-lg z-20">
                <p className="font-bold text-lg">Trusted by 100+ Homeowners</p>
                <div className="flex text-yellow-500">
                  {'★★★★★'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
