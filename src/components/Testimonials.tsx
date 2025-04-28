import React from 'react';

const testimonials = [
  {
    quote: "The temple has become my spiritual home. The community here is so welcoming, and the programs have deepened my understanding of our traditions.",
    name: "Priya Sharma",
    role: "Community Member",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Volunteering at the temple's food distribution program has been incredibly fulfilling. We're making a real difference in our community.",
    name: "Rahul Mehta",
    role: "Volunteer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The cultural education classes for my children have helped them connect with their heritage in ways I couldn't provide alone. We're grateful.",
    name: "Anita Patel",
    role: "Parent",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-sage/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon mb-4">
            Community Voices
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from members of our community about how the temple has impacted their lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gold">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-8">
                <svg className="h-8 w-8 text-gold opacity-30 mb-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                
                <div className="mt-4">
                  <h4 className="font-bold text-maroon">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;