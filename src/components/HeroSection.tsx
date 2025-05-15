
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
      style={{ backgroundColor: '#0E0E10' }}
    >
      <div className="max-w-4xl">
        <p className="mb-5 font-mono text-[#A0A0A0]">Hi, my name is</p>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-[#3D5AFE]">
          <AnimatedText text="Software Developer" typingSpeed={80} />
        </h1>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#00C9A7]">
          <EncryptedReveal text="I build things for the web." duration={3000} />
        </h2>
        
        <p className="text-lg md:text-xl max-w-xl mb-8 text-[#F5F5F5]">
          I am a software developer student specializing in building (and occasionally designing) exceptional digital experiences.
          Currently, I'm focused on developing accessible, user-centered products.
        </p>
        
        <div className="mb-8 overflow-hidden">
          <p className="text-[#A0A0A0] mb-3">Tech Stack:</p>
          <TechIcons />
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#3D5AFE] text-[#F5F5F5] hover:bg-opacity-90 transition-colors"
          >
            View My Projects <ArrowRight size={16} />
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#3D5AFE] rounded-md text-[#F5F5F5] bg-transparent hover:bg-[#3D5AFE]/10 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
