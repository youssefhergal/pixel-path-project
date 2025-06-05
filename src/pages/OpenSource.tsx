import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Github, Star, GitFork, Clock } from 'lucide-react';

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
          
          {/* Coming Soon Section */}
          <div className="bg-[#1A1A1E] rounded-lg p-8 border border-[#3D5AFE]/20 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-[#3D5AFE]/20 p-4 rounded-full">
                <Clock size={32} className="text-[#3D5AFE]" />
              </div>
            </div>
            <h4 className="text-xl font-medium text-[#F5F5F5] mb-2">Coming Soon</h4>
            <p className="text-[#A0A0A0]">
              I'm currently working on exciting open source contributions. Check back soon to see my latest work!
            </p>
          </div>
          
          {/* Hidden existing contributions - uncomment when ready to show real data */}
          <div className="hidden">
            <p className="text-[#A0A0A0] mb-8">
              I believe in giving back to the community. Here are some of my contributions to open source projects:
            </p>
            
            <div className="space-y-6">
              {contributions.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-[#1A1A1E] rounded-lg p-6 border border-[#3D5AFE]/20"
                >
                  <div className="flex items-center mb-3">
                    <Github size={20} className="mr-2 text-[#3D5AFE]" />
                    <h4 className="text-lg font-medium text-[#F5F5F5]">{item.repo}</h4>
                    <span className="ml-auto text-xs py-1 px-2 bg-[#3D5AFE]/20 text-[#F5F5F5] rounded-full">
                      {item.type}
                    </span>
                  </div>
                  
                  <p className="text-[#A0A0A0] mb-4">{item.description}</p>
                  
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5F5F5] hover:text-[#00C9A7] transition-colors text-sm"
                  >
                    View Pull Request →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="scroll-animation" style={{ animationDelay: '0.2s' }}>
          <h3 className="section-subtitle">My Open Source Projects</h3>
          <p className="text-[#A0A0A0] mb-8">
            I maintain several open source projects that others can use in their work:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ownProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-[#1A1A1E] rounded-lg p-6 border border-[#3D5AFE]/20"
              >
                <h4 className="text-lg font-medium text-[#F5F5F5] mb-2">{project.name}</h4>
                <p className="text-[#A0A0A0] mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <Star size={16} className="mr-1 text-[#00C9A7]" />
                      <span className="text-sm text-[#A0A0A0]">{project.stars}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork size={16} className="mr-1 text-[#00C9A7]" />
                      <span className="text-sm text-[#A0A0A0]">{project.forks}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5F5F5] hover:text-[#00C9A7] transition-colors text-sm"
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
          <div className="bg-[#1A1A1E] rounded-lg p-6 border border-[#3D5AFE]/20">
            <p className="text-[#A0A0A0] mb-4">
              I'm always open to collaborating on interesting open source projects. If you have a project that you think I could contribute to, or if you'd like to contribute to any of my projects, please don't hesitate to reach out!
            </p>
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3D5AFE] text-[#F5F5F5] rounded-md hover:bg-opacity-90 transition-colors"
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
