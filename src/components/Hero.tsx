import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fadeIn">
          Preserving Tradition, Building Community
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Join us in our mission to maintain our sacred temple and serve our community through spiritual guidance and charitable work.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#donate" 
            className="bg-gold hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 duration-300"
          >
            Donate Now
          </a>
          <a 
            href="#programs" 
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-3 px-8 rounded-full transition-all"
          >
            Our Programs
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M12 5L12 19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;