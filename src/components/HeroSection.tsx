
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import EncryptedReveal from './EncryptedReveal';
import TechIcons from './TechIcons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const HeroSection = () => {
  return (
    <section 
      className="flex flex-col justify-center min-h-[calc(100vh-6rem)] py-20 px-6 md:px-12 lg:px-16" 
      style={{ backgroundColor: '#0E0E10' }}
    >
      <div className="max-w-4xl">
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12 mb-8">
          <div className="flex-1">
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
          </div>
          
          <div className="relative flex-shrink-0 flex justify-center md:justify-end">
            {/* SVG frame around the avatar */}
            <div className="absolute inset-0 -m-4 animate-pulse-slow">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path 
                  fill="#3D5AFE" 
                  d="M40,-51.7C52.2,-40.8,62.7,-28.4,66.2,-13.8C69.7,0.8,66.2,17.4,58.2,31.7C50.2,46,37.6,58,22.6,62.9C7.7,67.8,-9.6,65.5,-22.7,58.1C-35.7,50.7,-44.6,38.2,-52.8,24.4C-61.1,10.6,-68.8,-4.6,-65.6,-17.7C-62.4,-30.9,-48.2,-42,-34.1,-52.6C-20.1,-63.2,-6.1,-73.5,5.7,-81.7C17.5,-89.9,27.9,-62.5,40,-51.7Z" 
                  transform="translate(100 100)" 
                  className="opacity-20"
                />
              </svg>
            </div>
            
            <Avatar className="w-32 h-32 md:w-52 md:h-52 border-4 border-[#3D5AFE] shadow-xl shadow-[#3D5AFE]/30 z-10 animate-floating">
              <AvatarImage src="src/data/youssef_profile.jpg" alt="Profile" className="animate-pulse-slow" />
              <AvatarFallback className="bg-gray-100 dark:bg-[#3D5AFE]/20 text-gray-800 dark:text-[#F5F5F5]">DP</AvatarFallback>
            </Avatar>
            
            {/* Abstract geometric shapes around the avatar */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#00C9A7] rounded-full opacity-50 animate-bounce-slow"></div>
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#3D5AFE] rounded-full opacity-60 animate-pulse-slow"></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 border-2 border-[#00C9A7] rounded-lg opacity-70 rotate-12 animate-spin-slow"></div>
          </div>
        </div>
        
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
