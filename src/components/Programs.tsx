import React from 'react';
import { Calendar, Users, Heart, BookOpen } from 'lucide-react';

const programData = [
  {
    title: "Daily Ceremonies",
    description: "Join our daily prayer sessions and traditional ceremonies that connect us with our spiritual heritage.",
    icon: <Calendar className="h-8 w-8 text-gold" />,
    time: "6:00 AM, 12:00 PM, 6:00 PM"
  },
  {
    title: "Community Service",
    description: "Participate in our regular community service activities, from food distribution to helping the elderly.",
    icon: <Users className="h-8 w-8 text-gold" />,
    time: "Weekends, 10:00 AM - 2:00 PM"
  },
  {
    title: "Charitable Initiatives",
    description: "Support our various charitable programs aimed at education, healthcare, and poverty alleviation.",
    icon: <Heart className="h-8 w-8 text-gold" />,
    time: "Ongoing"
  },
  {
    title: "Spiritual Education",
    description: "Learn about our scriptures, philosophy, and traditions through classes for all age groups.",
    icon: <BookOpen className="h-8 w-8 text-gold" />,
    time: "Tue & Thu, 7:00 PM - 8:30 PM"
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon mb-4">
            Our Programs & Activities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Divine Temple, we offer a variety of programs and activities to nurture spiritual growth and foster community bonds. Everyone is welcome to participate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programData.map((program, index) => (
            <div 
              key={index} 
              className="bg-cream rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-maroon mb-3">
                {program.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {program.description}
              </p>
              <div className="text-sm text-gray-500 font-medium">
                <span>Timing: {program.time}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-bold text-maroon mb-6">
            Upcoming Special Events
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-sage/10 border border-sage/30 rounded-lg p-6 md:w-1/3">
              <div className="text-sage font-bold text-lg mb-2">APR 15, 2025</div>
              <h4 className="text-xl font-bold mb-2">Annual Temple Celebration</h4>
              <p className="text-gray-600 mb-4">Join us for a day of devotion, cultural performances, and community feast.</p>
              <a href="#contact" className="text-maroon font-medium hover:underline">Learn more →</a>
            </div>
            
            <div className="bg-sage/10 border border-sage/30 rounded-lg p-6 md:w-1/3">
              <div className="text-sage font-bold text-lg mb-2">MAY 10, 2025</div>
              <h4 className="text-xl font-bold mb-2">Meditation Retreat</h4>
              <p className="text-gray-600 mb-4">A weekend of guided meditation, spiritual talks, and inner reflection.</p>
              <a href="#contact" className="text-maroon font-medium hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;