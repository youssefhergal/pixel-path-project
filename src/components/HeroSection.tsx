
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import EncryptedReveal from './EncryptedReveal';
import TechIcons from './TechIcons';

const HeroSection = () => {
  return (
    <section 
      className="flex flex-col justify-center min-h-[calc(100vh-6rem)] py-20 px-6 md:px-12 lg:px-16" 

    >
      <div className="max-w-4xl">
        <p className="mb-5 font-mono" style={{ color: 'var(--clr-primary-a30)' }}>Hi, my name is</p>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2" style={{ color: 'var(--clr-primary-a20)' }}>
          <AnimatedText text="Software Developer" typingSpeed={80} />
        </h1>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--clr-surface-a50)' }}>
          <EncryptedReveal text="I build things for the web." duration={3000} />
        </h2>
        
        <p className="text-lg md:text-xl max-w-xl mb-8" style={{ color: 'var(--clr-light-a0)' }}>
          I am a software developer student specializing in building (and occasionally designing) exceptional digital experiences.
          Currently, I'm focused on developing accessible, user-centered products.
        </p>
        
        <TechIcons />
        
        <div className="flex flex-wrap gap-4 mt-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            style={{ 
              background: 'linear-gradient(135deg, var(--clr-primary-a0), var(--clr-primary-a20))', 
              color: 'var(--clr-light-a0)' 
            }}
          >
            View My Projects <ArrowRight size={16} />
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 border rounded-md transition-colors hover:bg-opacity-10"
            style={{ 
              borderColor: 'var(--clr-primary-a20)', 
              color: 'var(--clr-light-a0)', 
              backgroundColor: 'transparent',
              ':hover': { backgroundColor: 'rgba(107, 140, 222, 0.1)' } /* --clr-primary-a20 with opacity */
            }}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
