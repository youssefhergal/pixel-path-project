
import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { educationData, certificationData } from '../data/educationData';
import { Book, GraduationCap } from 'lucide-react';

const Education = () => {
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
      <SectionTitle title="Education" subtitle="My academic background and certifications" />
      
      <div className="grid grid-cols-1 gap-8 lg:gap-12">
        <div>
          <h3 className="text-xl font-medium mb-6 text-secondary">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-primary" />
              <span>Academic Background</span>
            </div>
          </h3>
          
          <div className="relative lg:border-l lg:border-primary/30 lg:pl-8 space-y-8 lg:space-y-12 lg:ml-4">
            {educationData.map((item, index) => (
              <div 
                key={item.id} 
                className="scroll-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 mt-2 border-4 border-background hidden lg:block"></div>
                
                <div 
                  className="rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border bg-card overflow-hidden group"
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
                  <div className="flex flex-col md:justify-between md:items-start mb-4">
                    <h4 className="text-xl font-medium text-foreground">{item.degree}</h4>
                    <p className="text-lg text-secondary">{item.institution} • {item.location}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.startDate} – {item.endDate}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-2">Achievements:</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex">
                            <span className="mr-2 text-primary">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6 text-secondary">
            <div className="flex items-center gap-2">
              <Book className="text-primary" />
              <span>Certifications</span>
            </div>
          </h3>
          
          <div className="grid gap-6">
            {certificationData.map((cert, index) => (
                <div 
                key={cert.id}
                className="scroll-animation rounded-xl p-6 border flex transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border bg-card overflow-hidden group"
                style={{ 
                  animationDelay: `${(index + educationData.length) * 0.15}s`,
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
                <div className="mr-4 text-secondary">
                  <Book size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground">{cert.title}</h4>
                  <p className="text-secondary">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-2">Issued {cert.date}</p>
                  
                  {cert.credentialLink && (
                    <a 
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-secondary transition-colors"
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
