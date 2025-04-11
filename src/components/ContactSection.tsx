
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Blackstar Services. We'll be in touch with you shortly.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-gray-600 my-6">
              Ready to start your project? Contact Blackstar Services today for a free consultation 
              and estimate. We're here to answer any questions and help bring your vision to life.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start">
                <div className="bg-black p-3 rounded-full text-white mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-gray-600">(435) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black p-3 rounded-full text-white mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-600">info@blackstarservices.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black p-3 rounded-full text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-gray-600">Paragonah, Utah 84760</p>
                  <p className="text-gray-500 text-sm mt-1">Serving all of Iron County</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black p-3 rounded-full text-white mr-4">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: By appointment</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Request a Free Estimate</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Roofing">Roofing</option>
                      <option value="Remodeling">Remodeling</option>
                      <option value="Drywall">Drywall</option>
                      <option value="Deck Building">Deck Building</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black hover:bg-gray-800 text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>
            
            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>Your information is secure and will never be shared with third parties.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
