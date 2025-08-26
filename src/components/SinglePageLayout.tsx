import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import About from './About';
import Projects from '../pages/Projects';
import Journey from '../pages/Journey';
import Education from '../pages/Education';
import OpenSource from '../pages/OpenSource';
import Volunteering from '../pages/Volunteering';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

const SinglePageLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Map routes to section IDs
  const routeToSection: { [key: string]: string } = {
    '/': 'home',
    '/about': 'about',
    '/projects': 'projects',
    '/journey': 'journey',
    '/education': 'education',
    '/opensource': 'opensource',
    '/volunteering': 'volunteering',
    '/blog': 'blog',
    '/contact': 'contact'
  };

  const sectionToRoute: { [key: string]: string } = {
    'home': '/',
    'about': '/about',
    'projects': '/projects',
    'journey': '/journey',
    'education': '/education',
    'opensource': '/opensource',
    'volunteering': '/volunteering',
    'blog': '/blog',
    'contact': '/contact'
  };

  // Scroll to section when route changes
  useEffect(() => {
    const targetSection = routeToSection[location.pathname];
    if (targetSection && sectionsRef.current[targetSection]) {
      sectionsRef.current[targetSection]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [location.pathname]);

  // Intersection Observer to update route based on visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id;
            const route = sectionToRoute[sectionId];
            if (route && location.pathname !== route) {
              navigate(route, { replace: true });
            }
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all sections
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [navigate, location.pathname]);

  const setSectionRef = (sectionId: string) => (el: HTMLElement | null) => {
    sectionsRef.current[sectionId] = el;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Home Section */}
      <section 
        id="home" 
        ref={setSectionRef('home')}
        className="min-h-screen"
      >
        <HeroSection />
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={setSectionRef('about')}
        className="min-h-screen py-20"
      >
        <About />
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={setSectionRef('projects')}
        className="min-h-screen py-20"
      >
        <Projects />
      </section>

      {/* Journey Section */}
      <section 
        id="journey" 
        ref={setSectionRef('journey')}
        className="min-h-screen py-20"
      >
        <Journey />
      </section>

      {/* Education Section */}
      <section 
        id="education" 
        ref={setSectionRef('education')}
        className="min-h-screen py-20"
      >
        <Education />
      </section>

      {/* Open Source Section */}
      <section 
        id="opensource" 
        ref={setSectionRef('opensource')}
        className="min-h-screen py-20"
      >
        <OpenSource />
      </section>

      {/* Volunteering Section */}
      <section 
        id="volunteering" 
        ref={setSectionRef('volunteering')}
        className="min-h-screen py-20"
      >
        <Volunteering />
      </section>

      {/* Blog Section */}
      <section 
        id="blog" 
        ref={setSectionRef('blog')}
        className="min-h-screen py-20"
      >
        <Blog />
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={setSectionRef('contact')}
        className="min-h-screen py-20"
      >
        <Contact />
      </section>
    </div>
  );
};

export default SinglePageLayout;