import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import SectionTitle from '../components/SectionTitle';
import { volunteeringData } from '../data/volunteeringData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-image-gallery/styles/css/image-gallery.css';

const Volunteering = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === volunteeringData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? volunteeringData.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Animation observer for scroll effects
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.scroll-animation');
    animatedElements.forEach(element => observer.observe(element));

    return () => {
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="page-container lg:ml-64">
      <SectionTitle title="Volunteering Experience" subtitle="Giving back to the community" />
      
      <div className="scroll-animation">
        <div className="mt-12 relative">
          <div 
            className="overflow-hidden rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border bg-card group"
            style={{
              background: 'var(--gradient-white-gray)',
              borderColor: 'hsl(var(--border))',
              boxShadow: 'var(--shadow-soft)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
              e.currentTarget.style.borderColor = 'hsl(var(--primary))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
              e.currentTarget.style.borderColor = 'hsl(var(--border))';
            }}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {volunteeringData.map((item) => (
                <div 
                  key={item.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative">
                      <ImageGallery
                        items={item.images}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showNav={false}
                        showThumbnails={true}
                        thumbnailPosition="bottom"
                        slideDuration={450}
                        slideInterval={3000}
                        infinite={true}
                        lazyLoad={true}
                        additionalClass="volunteering-gallery"
                      />
                    </div>
                    
                    <div className="md:w-1/2 p-8">
                      <div className="mb-6">
                        <h4 className="text-xl font-medium text-[#F5F5F5]">{item.title}</h4>
                        <p className="text-[#00C9A7]">{item.organization}</p>
                        <p className="text-sm text-[#A0A0A0] mt-1">
                          {item.location} | {item.startDate} – {item.endDate}
                        </p>
                      </div>
                      
                      <p className="text-[#A0A0A0]">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                onClick={prevSlide}
                className="bg-[#0E0E10]/50 hover:bg-[#0E0E10]/80 p-2 rounded-full ml-4 text-[#F5F5F5]"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={nextSlide}
                className="bg-[#0E0E10]/50 hover:bg-[#0E0E10]/80 p-2 rounded-full mr-4 text-[#F5F5F5]"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {volunteeringData.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-[#3D5AFE]' : 'bg-[#A0A0A0]/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 scroll-animation" style={{ animationDelay: '0.2s' }}>
        <h3 className="section-subtitle">The Impact of Volunteering</h3>
        <div 
          className="rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border bg-card overflow-hidden group"
          style={{
            background: 'var(--gradient-white-gray)',
            borderColor: 'hsl(var(--border))',
            boxShadow: 'var(--shadow-soft)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
            e.currentTarget.style.borderColor = 'hsl(var(--primary))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
            e.currentTarget.style.borderColor = 'hsl(var(--border))';
          }}
        >
          <p className="text-[#A0A0A0] mb-4">
            Volunteering has been an integral part of my personal and professional growth. Through these experiences, 
            I've been able to apply my technical skills to make a positive impact in my community while also developing 
            valuable soft skills like leadership, communication, and empathy.
          </p>
          <p className="text-[#A0A0A0] mb-4">
            I believe that tech professionals have a unique opportunity to use their skills to address social challenges and 
            empower underrepresented groups. My volunteering work has allowed me to:
          </p>
          <ul className="space-y-2 text-[#A0A0A0]">
            <li className="flex">
              <span className="mr-2 text-[#00C9A7]">▹</span>
              <span>Mentor aspiring developers from diverse backgrounds</span>
            </li>
            <li className="flex">
              <span className="mr-2 text-[#00C9A7]">▹</span>
              <span>Build technology solutions for nonprofit organizations</span>
            </li>
            <li className="flex">
              <span className="mr-2 text-[#00C9A7]">▹</span>
              <span>Participate in events that promote technology education</span>
            </li>
            <li className="flex">
              <span className="mr-2 text-[#00C9A7]">▹</span>
              <span>Share knowledge through workshops and educational sessions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
