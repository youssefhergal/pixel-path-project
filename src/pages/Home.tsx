import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.scroll-animation, .project-card-animation');
    animatedElements.forEach(element => observer.observe(element));

    return () => {
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 2);

  return (
      <div className="flex-1 lg:ml-64 bg-background transition-colors duration-300">
        <HeroSection />

        <section className="section-padding bg-background transition-colors duration-300">
          <div className="scroll-animation">
            <div className="flex justify-between items-center mb-10">
              <SectionTitle title="Featured Projects" subtitle="Some things I've built" />
              <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                View All <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                  <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      techStack={project.techStack}
                      githubLink={project.githubLink}
                      demoLink={project.demoLink}
                      imageUrl={project.imageUrl}
                      index={index}
                  />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background transition-colors duration-300">
          <div className="scroll-animation">
            <SectionTitle title="Get In Touch" />
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                I'm currently seeking an apprenticeship starting October 2025 as part of my CTO & Tech Lead program (1 week school / 3 weeks company). If you're working on innovative technical projects, let's connect!
              </p>
              <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg hover:scale-105 transition-all duration-300"
                  style={{ 
                    background: 'var(--gradient-primary)',
                    boxShadow: 'var(--shadow-medium)'
                  }}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Home;
