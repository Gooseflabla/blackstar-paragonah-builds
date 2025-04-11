
import { Facebook, Instagram, Mail, Phone, MapPinIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white flex items-center justify-center text-black">
                <span className="text-2xl">★</span>
              </div>
              <span className="font-bold text-xl">Blackstar Services</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing quality construction and home improvement services to Paragonah
              and surrounding communities since 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@blackstarservices.com" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+14355551234" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Roofing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Remodeling</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Drywall</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Deck Building</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Free Estimates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Phone size={18} className="text-gray-400" />
                <span>(435) 555-1234</span>
              </li>
              <li className="flex gap-2">
                <Mail size={18} className="text-gray-400" />
                <span>info@blackstarservices.com</span>
              </li>
              <li className="flex gap-2">
                <MapPinIcon size={18} className="text-gray-400" />
                <span>Paragonah, Utah 84760</span>
              </li>
            </ul>
            <div className="mt-6 p-3 bg-white/5 rounded-lg">
              <p className="text-sm">
                Licensed & Insured<br />
                UT License #12345678
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Blackstar Services. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
