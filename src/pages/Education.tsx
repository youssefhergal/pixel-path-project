
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-medium mb-6 text-[#00C9A7]">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-[#3D5AFE]" />
              <span>Academic Background</span>
            </div>
          </h3>
          
          <div className="relative border-l border-[#3D5AFE]/30 pl-8 space-y-12 ml-4">
            {educationData.map((item, index) => (
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
                  <div className="flex flex-col md:justify-between md:items-start mb-4">
                    <h4 className="text-xl font-medium text-[#F5F5F5]">{item.degree}</h4>
                    <p className="text-lg text-[#00C9A7]">{item.institution} • {item.location}</p>
                    <p className="text-[#A0A0A0] text-sm">
                      {item.startDate} – {item.endDate}
                    </p>
                  </div>
                  
                  <p className="text-[#A0A0A0] mb-4">{item.description}</p>
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium text-[#F5F5F5] mb-2">Achievements:</h5>
                      <ul className="space-y-1 text-sm text-[#A0A0A0]">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex">
                            <span className="mr-2 text-[#3D5AFE]">▹</span>
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
          <h3 className="text-xl font-medium mb-6 text-[#00C9A7]">
            <div className="flex items-center gap-2">
              <Book className="text-[#3D5AFE]" />
              <span>Certifications</span>
            </div>
          </h3>
          
          <div className="grid gap-6">
            {certificationData.map((cert, index) => (
                <div 
                key={cert.id}
                className="scroll-animation rounded-lg p-6 border flex transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  animationDelay: `${(index + educationData.length) * 0.15}s`,
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
                <div className="mr-4 text-[#00C9A7]">
                  <Book size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#F5F5F5]">{cert.title}</h4>
                  <p className="text-[#00C9A7]">{cert.issuer}</p>
                  <p className="text-[#A0A0A0] text-sm mb-2">Issued {cert.date}</p>
                  
                  {cert.credentialLink && (
                    <a 
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#3D5AFE] hover:text-[#00C9A7] transition-colors"
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
