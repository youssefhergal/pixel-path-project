
import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Extract unique tech stack items
  const techFilters = ['all', ...new Set(projectsData.flatMap(project => project.techStack))];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => 
        project.techStack.includes(filter)
      ));
    }
  }, [filter]);

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
  }, [filteredProjects]);

  return (
    <div className="page-container lg:ml-64">
      <div className="scroll-animation">
        <SectionTitle title="Projects" subtitle="A selection of my technical work" />
        
        <div className="mb-10">
          {/* Horizontal scrollable filter with arrows */}
          <div className="relative w-full">
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border hover:bg-accent/10 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            
            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide px-12 py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {techFilters.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`group relative px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm hover:scale-105 border-2 flex-shrink-0 ${
                    filter === tech 
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground border-transparent shadow-lg scale-105' 
                      : 'bg-background/80 backdrop-blur-sm text-foreground border-border hover:border-primary/50 hover:bg-accent/10'
                  }`}
                >
                  <span className="relative z-10">
                    {tech === 'all' ? '🚀 All Projects' : tech}
                  </span>
                  {filter !== tech && (
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              ))}
            </div>
            
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border hover:bg-accent/10 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
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
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500 dark:text-[#A0A0A0] bg-white dark:bg-[#1A1A1E] rounded-lg border border-gray-200 dark:border-[#3D5AFE]/20 shadow-md mx-2 sm:px-0">
              No projects match the selected filter.
              <p className="mt-2 text-[#3D5AFE] dark:text-[#00C9A7]">Try selecting a different technology.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
