
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

      <div className="relative lg:border-l lg:border-primary/30 lg:pl-8 space-y-8 lg:space-y-16 lg:ml-4">
        {journeyData.map((item, index) => (
          <div 
            key={item.id} 
            className="scroll-animation"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 mt-2 border-4 border-background hidden lg:block"></div>
            
            <div 
              className="rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border bg-card overflow-hidden group relative"
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
              {item.logo && (
                <div className="absolute top-6 left-6 w-12 h-12 rounded-lg overflow-hidden bg-background border border-border shadow-sm">
                  <img 
                    src={item.logo} 
                    alt={`${item.company} logo`}
                    className="w-full h-full object-contain p-1.5"
                  />
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 ml-16">
                <div>
                  <h3 className="text-xl font-medium text-card-foreground">{item.title}</h3>
                  <p className="text-lg text-secondary">{item.company} • {item.location}</p>
                </div>
                <p className="text-muted-foreground text-sm md:text-base whitespace-nowrap">
                  {item.startDate} – {item.endDate}
                </p>
              </div>
              
              <ul className="space-y-2 text-muted-foreground mb-6">
                {item.description.map((bullet, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2 text-secondary">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap">
                {item.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs py-2 px-3 rounded-lg mr-2 mb-2 inline-block hover:scale-110 transition-all duration-300 border border-border"
                    style={{
                      background: 'var(--gradient-hover)',
                      color: 'hsl(var(--primary))',
                      boxShadow: 'var(--shadow-glow)'
                    }}
                  >
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
