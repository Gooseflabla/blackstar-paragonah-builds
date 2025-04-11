
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Michael Johnson',
      location: 'Paragonah, UT',
      rating: 5,
      text: 'Blackstar Services completely transformed our outdated kitchen into a modern, functional space. Their attention to detail and craftsmanship exceeded our expectations. Highly recommend!',
      project: 'Kitchen Remodel'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      location: 'Cedar City, UT',
      rating: 5,
      text: 'After a major storm damaged our roof, Blackstar Services came to the rescue. They provided a fair quote, started work promptly, and finished ahead of schedule. Our new roof looks fantastic!',
      project: 'Roof Replacement'
    },
    {
      id: 3,
      name: 'David Thompson',
      location: 'Paragonah, UT',
      rating: 5,
      text: 'The team at Blackstar built us the perfect deck for entertaining. They listened to our ideas and offered valuable suggestions to improve the design. Professional from start to finish.',
      project: 'Custom Deck'
    },
    {
      id: 4,
      name: 'Jennifer Miller',
      location: 'Parowan, UT',
      rating: 4,
      text: "We hired Blackstar for drywall work after water damage in our living room. They matched the existing texture perfectly and you can't even tell there was ever a problem. Great service!",
      project: 'Drywall Repair'
    }
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mx-auto">Client Testimonials</h2>
          <p className="text-gray-600 mt-6">
            Don't just take our word for it. Hear what our clients have to say about their
            experience working with Blackstar Services on their home improvement projects.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg relative">
            <div className="absolute -top-6 left-10 bg-black p-3 rounded-full text-white">
              <Quote size={24} />
            </div>
            
            <div key={testimonials[currentTestimonialIndex].id} className="animate-fade-in">
              <div className="flex flex-wrap justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold">{testimonials[currentTestimonialIndex].name}</h3>
                  <p className="text-gray-500">{testimonials[currentTestimonialIndex].location}</p>
                </div>
                <div className="flex text-yellow-500 mt-2 md:mt-0">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < testimonials[currentTestimonialIndex].rating ? 'currentColor' : 'none'} 
                    />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg mb-8 italic">
                "{testimonials[currentTestimonialIndex].text}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">
                  Project: <span className="font-bold">{testimonials[currentTestimonialIndex].project}</span>
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  index === currentTestimonialIndex ? 'bg-black scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
