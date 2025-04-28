import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Donate from './components/Donate';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Divine Temple - Faith & Community';
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Donate />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;