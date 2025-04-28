import React from 'react';
import { HeartHandshake, Home, Book, Leaf } from 'lucide-react';

const donationOptions = [
  {
    amount: "25",
    description: "Provides daily offerings for one week",
    icon: <Leaf className="h-6 w-6 text-gold" />
  },
  {
    amount: "50",
    description: "Supports community meals for 20 people",
    icon: <HeartHandshake className="h-6 w-6 text-gold" />
  },
  {
    amount: "100",
    description: "Funds children's cultural education for a month",
    icon: <Book className="h-6 w-6 text-gold" />
  },
  {
    amount: "500",
    description: "Contributes to temple maintenance and renovation",
    icon: <Home className="h-6 w-6 text-gold" />
  }
];

const Donate: React.FC = () => {
  return (
    <section id="donate" className="py-16 md:py-24 bg-maroon text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Support Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-white/80">
            Your generous contributions help us maintain our temple, conduct regular ceremonies, and continue our community service. Every donation, big or small, makes a difference.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gold/20 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-maroon mb-4">Why Donate?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-gold">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Preserve sacred traditions and cultural heritage</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-gold">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Support community outreach and charitable work</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-gold">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Maintain and improve temple facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-gold">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Enable educational programs for all ages</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold text-maroon mb-6">Make a Donation</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {donationOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gold hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-maroon">${option.amount}</span>
                      {option.icon}
                    </div>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <label htmlFor="custom-amount" className="block text-gray-700 mb-2">Other Amount</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <input 
                    type="text" 
                    id="custom-amount" 
                    className="pl-7 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent" 
                    placeholder="Enter amount"
                  />
                </div>
              </div>
              
              <button className="w-full bg-gold hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Donate Now
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                All donations are tax-deductible. A receipt will be emailed to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;