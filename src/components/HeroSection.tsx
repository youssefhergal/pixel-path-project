
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center min-h-[calc(100vh-6rem)] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-portfolio-darkBlue font-mono mb-5">Hi, my name is</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-white mb-2">
          Software Developer
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
          I build things for the web.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12">
          I am a software developer student specializing in building (and occasionally designing) exceptional digital experiences.
          Currently, I'm focused on developing accessible, user-centered products.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-darkBlue text-portfolio-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            View My Projects <ArrowRight size={16} />
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-portfolio-darkBlue text-portfolio-white rounded-md hover:bg-portfolio-darkBlue/10 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
