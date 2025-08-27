
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

      <div className="relative border-l border-[#3D5AFE]/30 pl-8 space-y-16 ml-4">
        {journeyData.map((item, index) => (
          <div 
            key={item.id} 
            className="scroll-animation"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="absolute w-4 h-4 bg-[#3D5AFE] rounded-full -left-2 mt-2 border-4 border-[#0E0E10]"></div>
            
            <div 
              className="rounded-lg p-6 border transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'var(--gradient-card)',
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
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium text-[#F5F5F5]">{item.title}</h3>
                  <p className="text-lg text-[#00C9A7]">{item.company} • {item.location}</p>
                </div>
                <p className="text-[#A0A0A0] text-sm md:text-base whitespace-nowrap">
                  {item.startDate} – {item.endDate}
                </p>
              </div>
              
              <ul className="space-y-2 text-[#A0A0A0] mb-6">
                {item.description.map((bullet, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2 text-[#00C9A7]">▹</span>
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
