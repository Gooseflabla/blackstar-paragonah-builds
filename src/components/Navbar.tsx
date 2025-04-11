
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black flex items-center justify-center text-white">
            <span className="text-2xl">★</span>
          </div>
          <span className="font-bold text-xl md:text-2xl">Blackstar Services</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <a href="#services" className="font-medium hover:text-gray-600 transition-all-300">Services</a>
            <a href="#showcase" className="font-medium hover:text-gray-600 transition-all-300">Our Work</a>
            <a href="#testimonials" className="font-medium hover:text-gray-600 transition-all-300">Testimonials</a>
            <a href="#contact" className="font-medium hover:text-gray-600 transition-all-300">Contact</a>
          </nav>
          <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
            <Phone size={16} /> Call Now
          </Button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg animate-fade-in">
          <nav className="flex flex-col p-4">
            <a 
              href="#services" 
              className="py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#showcase" 
              className="py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Work
            </a>
            <a 
              href="#testimonials" 
              className="py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="mt-4 bg-black hover:bg-gray-800 text-white w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={16} className="mr-2" /> Call Now: (435) 555-1234
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
