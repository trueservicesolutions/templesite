import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Temple celebration with decorative lights",
    caption: "Annual Diwali Celebration"
  },
  {
    src: "https://images.pexels.com/photos/8063919/pexels-photo-8063919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Community gathering for prayer",
    caption: "Morning Prayer Ceremony"
  },
  {
    src: "https://images.pexels.com/photos/4430316/pexels-photo-4430316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Volunteers distributing food",
    caption: "Community Food Service"
  },
  {
    src: "https://images.pexels.com/photos/7725325/pexels-photo-7725325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Cultural dance performance",
    caption: "Traditional Dance Performance"
  },
  {
    src: "https://images.pexels.com/photos/4551901/pexels-photo-4551901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Temple architecture detail",
    caption: "Temple Architecture"
  },
  {
    src: "https://images.pexels.com/photos/5257481/pexels-photo-5257481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Children's cultural education class",
    caption: "Children's Cultural Class"
  }
];

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon mb-4">
            Temple Gallery
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Glimpses of our temple activities, celebrations, and community service. These moments reflect our commitment to spiritual practice and social harmony.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              onClick={() => openLightbox(index)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md group relative"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-medium text-lg">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={goToPrevious}
            className="absolute left-4 text-white p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh]">
            <img 
              src={galleryImages[currentImage].src} 
              alt={galleryImages[currentImage].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="text-white text-center mt-4 text-lg">
              {galleryImages[currentImage].caption}
            </div>
          </div>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 text-white p-2"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;