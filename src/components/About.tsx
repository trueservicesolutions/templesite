import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Temple interior with traditional architecture" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon mb-6">
              Our Sacred Mission
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 1985, Divine Temple has been a pillar of spiritual guidance and community service. Our non-profit organization works tirelessly to preserve our ancient traditions while adapting to serve the evolving needs of our community.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              We believe in the power of faith to transform lives and communities. Through our various programs, charitable initiatives, and regular ceremonies, we strive to create a space where everyone can find peace, purpose, and belonging.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-maroon mb-2">Our Vision</h3>
                <p className="text-gray-700 text-sm">To create a harmonious society through spiritual wisdom and compassionate service.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-maroon mb-2">Our Values</h3>
                <p className="text-gray-700 text-sm">Compassion, integrity, devotion, community, and selfless service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;