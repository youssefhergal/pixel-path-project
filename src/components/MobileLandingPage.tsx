
import React from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Projects from '../pages/Projects';
import Journey from '../pages/Journey';
import Education from '../pages/Education';
import Contact from '../pages/Contact';

const MobileLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0E0E10]">
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <Projects />
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20">
        <Journey />
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </div>
  );
};

export default MobileLandingPage;
