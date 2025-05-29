
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import EncryptedReveal from './EncryptedReveal';

const HeroSection = () => {
  return (
    <section 
      className="flex min-h-[calc(100vh-6rem)] py-20 px-6 md:px-12 lg:px-16 relative overflow-hidden" 
      style={{ backgroundColor: '#0E0E10' }}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 relative">
        {/* Left Content - Text Information */}
        <div className="lg:w-2/3 z-10">
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

          <div className="mb-8">
            <p className="text-[#A0A0A0] mb-3">Tech Stack:</p>
            <div className="flex flex-wrap gap-3">
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Java</span>
              <span className="tech-badge">Spring</span>
              <span className="tech-badge">AWS</span>
              <span className="tech-badge">SQL</span>
            </div>
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
        
        {/* Right Content - Simple Photo */}
        <div className="lg:w-1/3 relative flex justify-center mb-24 z-10">
          <div className="photo-container relative w-full max-w-md">
            {/* Simple background glow */}
            <div className="absolute inset-0 bg-[#3D5AFE]/10 rounded-2xl filter blur-xl"></div>
            
            {/* Actual photo with clean styling */}
            <div className="relative w-full pt-[100%] overflow-hidden rounded-2xl border-2 border-[#3D5AFE]/30 shadow-2xl">
              <img 
                src="src/data/youssef_profile.jpg" 
                alt="Developer Profile" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#3D5AFE]/20 to-transparent blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#00C9A7]/20 to-transparent blur-3xl rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
