
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  useEffect(() => {
    // Animation observer for scroll effects
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
    <div className="flex-1 lg:ml-64 bg-gray-50 dark:bg-[#0E0E10] transition-colors duration-200">
      <HeroSection />

      <section className="section-padding bg-gray-50 dark:bg-[#0E0E10] transition-colors duration-200">
        <div className="scroll-animation">
          <div className="flex justify-between items-center mb-10">
            <SectionTitle title="Featured Projects" subtitle="Some things I've built" />
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-gray-700 dark:text-[#F5F5F5] hover:text-[#3D5AFE] transition-all duration-300 hover:scale-105"
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

      <section className="section-padding bg-gray-50 dark:bg-[#0E0E10] transition-colors duration-200">
        <div className="scroll-animation">
          <SectionTitle title="Get In Touch" />
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-[#A0A0A0] mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3D5AFE] text-white rounded-md hover:bg-opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300"
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
