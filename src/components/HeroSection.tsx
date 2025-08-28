import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import EncryptedReveal from './EncryptedReveal';
import ResumeDialog from './ResumeDialog';
import TechIcons from './TechIcons';

const HeroSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating animation for the image
    const floatingAnimation = () => {
      if (!imageRef.current) return;
      
      let time = 0;
      const animate = () => {
        time += 0.02;
        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${Math.sin(time) * 10}px) scale(${1 + Math.sin(time * 0.5) * 0.02})`;
        }
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    // Particle animation
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        particle.style.animationDuration = `${2 + Math.random() * 3}s`;
        particlesRef.current.appendChild(particle);
      }
    };

    floatingAnimation();
    createParticles();
  }, []);

  return (
      <section
          className="flex min-h-[calc(100vh-6rem)] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden"
          style={{ 
            background: 'var(--gradient-background)',
            transition: 'all 0.3s ease'
          }}
      >
        {/* Animated particles background */}
        <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <p className="mb-3 sm:mb-5 font-mono text-muted-foreground animate-fade-in text-sm sm:text-base">Hi, my name is</p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-2 text-primary animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <AnimatedText text="Youssef Hergal" typingSpeed={80} />
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-4 sm:mb-6 text-secondary animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <EncryptedReveal text="Full-Stack Developer & AI Engineer" duration={3000} />
              </h2>

              <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8 text-foreground/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                I'm a passionate software developer currently pursuing a Master's in Data Exploration & Decision Support. 
                My focus is on developing intelligent, user-centric web applications using modern full-stack and AI technologies.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: '0.8s' }}>
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 group text-sm sm:text-base"
                    style={{ 
                      background: 'var(--gradient-primary)',
                      color: 'hsl(var(--primary-foreground))',
                      boxShadow: 'var(--shadow-medium)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-large)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                    }}
                >
                  <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                  View My Projects 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <ResumeDialog>
                  <button 
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium border transition-all duration-300 group text-sm sm:text-base"
                    style={{ 
                      background: 'var(--gradient-hover)',
                      borderColor: 'hsl(var(--border))',
                      color: 'hsl(var(--foreground))'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = 'var(--gradient-white-gray)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'var(--gradient-hover)';
                    }}
                  >
                    <Download size={14} className="group-hover:translate-y-1 transition-transform" />
                    Resume
                  </button>
                </ResumeDialog>

                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium border transition-all duration-300 group text-sm sm:text-base"
                    style={{ 
                      background: 'transparent',
                      borderColor: 'hsl(var(--primary))',
                      color: 'hsl(var(--primary))'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'hsl(var(--primary) / 0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                  Get In Touch
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 relative flex justify-center animate-scale-in mb-8 lg:mb-0" style={{ animationDelay: '1s' }}>
            <div className="relative w-64 sm:w-80 md:w-full max-w-sm">
              {/* Animated gradient background */}
              <div 
                className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                style={{
                  background: 'var(--gradient-primary)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.2)'
                }}
              ></div>
              
              {/* Main image container */}
              <div 
                className="relative w-full pt-[100%] overflow-hidden rounded-full border-2 sm:border-4 shadow-2xl"
                style={{
                  borderColor: 'hsl(var(--primary))',
                  boxShadow: 'var(--shadow-glow)'
                }}
              >
                <img
                    ref={imageRef}
                    src="/youssef_profile.jpg"
                    alt="Developer Profile"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300"
                />
                
                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0 rounded-full opacity-10"
                  style={{ background: 'var(--gradient-primary)' }}
                ></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-8 sm:w-12 h-8 sm:h-12 border-2 border-secondary rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/4 -left-4 sm:-left-8 w-4 sm:w-6 h-4 sm:h-6 bg-secondary/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 -right-3 sm:-right-6 w-6 sm:w-10 h-6 sm:h-10 border border-primary/40 rotate-45 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Floating Tech Icons Background - Hidden on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <div className="tech-icons-wrapper">
            <TechIcons />
          </div>
        </div>
        
        {/* Background decorative elements - Hidden on mobile */}
        <div 
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full opacity-10 animate-pulse hidden sm:block"
          style={{ 
            background: 'var(--gradient-primary)',
            filter: 'blur(60px)'
          }}
        ></div>
        <div 
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 rounded-full opacity-10 animate-pulse hidden sm:block"
          style={{ 
            background: 'var(--gradient-secondary)',
            filter: 'blur(40px)',
            animationDelay: '1s'
          }}
        ></div>
      </section>
  );
};

export default HeroSection;
