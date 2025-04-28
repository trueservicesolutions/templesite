import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon mb-4">
            Visit & Contact Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We welcome visitors and newcomers. Reach out to us with any questions or drop by during our visiting hours.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 bg-cream rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175936414986!2d-73.9867269845845!3d40.748440279327535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc7de500b7!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1649299768692!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Temple location"
              className="w-full"
            ></iframe>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-cream p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold text-maroon mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-700">
                      123 Temple Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-700">
                      <a href="tel:+1-212-555-6789" className="hover:text-maroon">+1 (212) 555-6789</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-700">
                      <a href="mailto:info@divinetemple.org" className="hover:text-maroon">info@divinetemple.org</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visiting Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 6:00 AM - 8:00 PM<br />
                      Saturday - Sunday: 5:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-maroon flex items-center justify-center text-white hover:bg-gold transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-maroon flex items-center justify-center text-white hover:bg-gold transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.058 1.805.249 2.228.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.356 1.057.413 2.227.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.17-.249 1.805-.413 2.227-.217.562-.477.961-.896 1.381-.42.419-.819.679-1.382.896-.423.164-1.058.356-2.228.413-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-1.17-.058-1.805-.249-2.227-.413-.562-.217-.961-.477-1.381-.896-.42-.42-.679-.819-.896-1.381-.164-.422-.356-1.057-.413-2.227-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.058-1.17.249-1.805.413-2.228.217-.561.477-.96.896-1.381.42-.419.819-.679 1.381-.896.423-.164 1.057-.356 2.227-.413 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.148.261-2.913.558-.788.306-1.459.718-2.126 1.384-.666.667-1.079 1.338-1.384 2.126-.297.765-.5 1.636-.558 2.913-.058 1.28-.072 1.689-.072 4.948s.014 3.667.072 4.947c.058 1.277.261 2.148.558 2.913.306.788.718 1.459 1.384 2.126.667.666 1.338 1.079 2.126 1.384.765.297 1.636.5 2.913.558 1.28.058 1.689.072 4.948.072s3.667-.014 4.947-.072c1.277-.058 2.148-.261 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.338 1.384-2.126.297-.765.5-1.636.558-2.913.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.261-2.148-.558-2.913-.306-.788-.718-1.459-1.384-2.126-.667-.666-1.338-1.079-2.126-1.384-.765-.297-1.636-.5-2.913-.558-1.28-.058-1.689-.072-4.947-.072z" />
                      <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                      <circle cx="18.406" cy="5.594" r="1.44" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-maroon flex items-center justify-center text-white hover:bg-gold transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-maroon flex items-center justify-center text-white hover:bg-gold transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-maroon mb-6">Send Us a Message</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent" 
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent" 
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent" 
                placeholder="Enter subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent" 
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-maroon hover:bg-maroon/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;