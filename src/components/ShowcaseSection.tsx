
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
}

const ShowcaseSection = () => {
  const projectCategories = ['All', 'Roofing', 'Remodeling', 'Drywall', 'Decks'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Deck Construction',
      category: 'Decks',
      description: 'Custom cedar deck with built-in seating and pergola for shade.',
      image: '/placeholder.svg',
      location: 'Paragonah, UT'
    },
    {
      id: 2,
      title: 'Complete Kitchen Renovation',
      category: 'Remodeling',
      description: 'Total kitchen transformation with custom cabinets and island.',
      image: '/placeholder.svg',
      location: 'Cedar City, UT'
    },
    {
      id: 3,
      title: 'New Shingle Roof Installation',
      category: 'Roofing',
      description: 'Full roof replacement with architectural shingles and enhanced ventilation.',
      image: '/placeholder.svg',
      location: 'Paragonah, UT'
    },
    {
      id: 4,
      title: 'Bathroom Remodel',
      category: 'Remodeling',
      description: 'Modern bathroom update with custom tile work and walk-in shower.',
      image: '/placeholder.svg',
      location: 'Enoch, UT'
    },
    {
      id: 5,
      title: 'Drywall Repair & Texture',
      category: 'Drywall',
      description: 'Comprehensive drywall repair and matching texture in living areas.',
      image: '/placeholder.svg',
      location: 'Parowan, UT'
    },
    {
      id: 6,
      title: 'Multi-Level Composite Deck',
      category: 'Decks',
      description: 'Durable composite decking system with integrated lighting and railings.',
      image: '/placeholder.svg',
      location: 'Paragonah, UT'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="showcase" className="bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title mx-auto">Our Work</h2>
          <p className="text-gray-600 mt-6">
            Browse our portfolio of completed projects throughout Paragonah and neighboring communities.
            Each project showcases our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {projectCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all-300 ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm">{project.category}</p>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{project.category}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                <p className="text-xs text-gray-500">📍 {project.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <CTAButton href="#contact">Request Similar Project</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
