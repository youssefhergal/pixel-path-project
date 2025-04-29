
import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { journeyData } from '../data/journeyData';

const Journey = () => {
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

  return (
    <div className="page-container lg:ml-64">
      <SectionTitle title="Professional Journey" subtitle="My work experience and career milestones" />

      <div className="relative border-l border-muted pl-8 space-y-16 ml-4">
        {journeyData.map((item, index) => (
          <div 
            key={item.id} 
            className="scroll-animation"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="absolute w-4 h-4 bg-portfolio-darkBlue rounded-full -left-2 mt-2 border-4 border-background"></div>
            
            <div className="bg-portfolio-lavender rounded-lg p-6 border border-sidebar-border">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium text-portfolio-white">{item.title}</h3>
                  <p className="text-lg text-portfolio-darkBlue">{item.company} • {item.location}</p>
                </div>
                <p className="text-muted-foreground text-sm md:text-base whitespace-nowrap">
                  {item.startDate} – {item.endDate}
                </p>
              </div>
              
              <ul className="space-y-2 text-muted-foreground mb-6">
                {item.description.map((bullet, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap">
                {item.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
