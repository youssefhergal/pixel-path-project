
import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { educationData, certificationData } from '../data/educationData';
import { Book } from 'lucide-react';

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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div>
          <h3 className="section-subtitle">Academic Background</h3>
          
          <div className="relative border-l border-muted pl-8 space-y-12 ml-4 ">
            {educationData.map((item, index) => (
              <div 
                key={item.id} 
                className="scroll-animation "
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute w-4 h-4 bg-portfolio-darkBlue rounded-full -left-2 mt-2 border-4 border-background"></div>
                
                <div className="bg-portfolio-slateGray rounded-lg p-6 border border-sidebar-border">
                  <div className="flex flex-col md:justify-between md:items-start mb-4">
                    <h4 className="text-xl font-medium text-portfolio-white">{item.degree}</h4>
                    <p className="text-lg text-portfolio-darkBlue">{item.institution} • {item.location}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.startDate} – {item.endDate}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium text-portfolio-white mb-2">Achievements:</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex">
                            <span className="mr-2">▹</span>
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
          <h3 className="section-subtitle">Certifications</h3>
          
          <div className="grid gap-6">
            {certificationData.map((cert, index) => (
              <div 
                key={cert.id}
                className="scroll-animation bg-portfolio-slateGray rounded-lg p-6 border border-sidebar-border flex"
                style={{ animationDelay: `${(index + educationData.length) * 0.15}s` }}
              >
                <div className="mr-4 text-portfolio-darkBlue">
                  <Book size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-portfolio-white">{cert.title}</h4>
                  <p className="text-portfolio-darkBlue">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-2">Issued {cert.date}</p>
                  
                  {cert.credentialLink && (
                    <a 
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-portfolio-white hover:text-portfolio-darkBlue transition-colors"
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
