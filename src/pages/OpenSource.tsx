
import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Github, Star, GitFork } from 'lucide-react';

const OpenSource = () => {
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

  // Example open source contributions
  const contributions = [
    {
      id: "os1",
      repo: "react/react",
      description: "Fixed a bug in the useEffect hook documentation that was causing confusion for new users.",
      type: "Documentation",
      link: "https://github.com/facebook/react/pull/1234"
    },
    {
      id: "os2",
      repo: "tailwindlabs/tailwindcss",
      description: "Added new utility class for gradient text effects and provided examples in the documentation.",
      type: "Feature",
      link: "https://github.com/tailwindlabs/tailwindcss/pull/5678"
    },
    {
      id: "os3",
      repo: "vercel/next.js",
      description: "Improved error messaging for common configuration mistakes in Next.js API routes.",
      type: "Enhancement",
      link: "https://github.com/vercel/next.js/pull/9012"
    }
  ];

  // Example personal open source projects
  const ownProjects = [
    {
      id: "ownos1",
      name: "react-simplified-form",
      description: "A lightweight form management library for React applications with built-in validation.",
      stars: 142,
      forks: 34,
      link: "https://github.com/yourusername/react-simplified-form"
    },
    {
      id: "ownos2",
      name: "css-animation-library",
      description: "A collection of reusable CSS animations and transitions for web projects.",
      stars: 87,
      forks: 12,
      link: "https://github.com/yourusername/css-animation-library"
    }
  ];

  return (
    <div className="page-container lg:ml-64">
      <SectionTitle title="Open Source" subtitle="My contributions to the open source community" />
      
      <div className="grid grid-cols-1 gap-12">
        <div className="scroll-animation">
          <h3 className="section-subtitle">Contributions</h3>
          <p className="text-muted-foreground mb-8">
            I believe in giving back to the community. Here are some of my contributions to open source projects:
          </p>
          
          <div className="space-y-6">
            {contributions.map((item, index) => (
              <div 
                key={item.id}
                className="bg-secondary rounded-lg p-6 border border-sidebar-border"
              >
                <div className="flex items-center mb-3">
                  <Github size={20} className="mr-2 text-portfolio-darkBlue" />
                  <h4 className="text-lg font-medium text-portfolio-white">{item.repo}</h4>
                  <span className="ml-auto text-xs py-1 px-2 bg-portfolio-darkBlue/20 text-portfolio-lightGray rounded-full">
                    {item.type}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{item.description}</p>
                
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-white hover:text-portfolio-darkBlue transition-colors text-sm"
                >
                  View Pull Request →
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="scroll-animation" style={{ animationDelay: '0.2s' }}>
          <h3 className="section-subtitle">My Open Source Projects</h3>
          <p className="text-muted-foreground mb-8">
            I maintain several open source projects that others can use in their work:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ownProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-secondary rounded-lg p-6 border border-sidebar-border"
              >
                <h4 className="text-lg font-medium text-portfolio-white mb-2">{project.name}</h4>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <Star size={16} className="mr-1 text-portfolio-darkBlue" />
                      <span className="text-sm text-muted-foreground">{project.stars}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork size={16} className="mr-1 text-portfolio-darkBlue" />
                      <span className="text-sm text-muted-foreground">{project.forks}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-white hover:text-portfolio-darkBlue transition-colors text-sm"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="scroll-animation" style={{ animationDelay: '0.4s' }}>
          <h3 className="section-subtitle">Get Involved</h3>
          <div className="bg-secondary rounded-lg p-6 border border-sidebar-border">
            <p className="text-muted-foreground mb-4">
              I'm always open to collaborating on interesting open source projects. If you have a project that you think I could contribute to, or if you'd like to contribute to any of my projects, please don't hesitate to reach out!
            </p>
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-darkBlue text-portfolio-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              <Github size={18} />
              <span>Visit My GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
