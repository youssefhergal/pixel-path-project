import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { ScrollArea, ScrollBar } from '../components/ui/scroll-area';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // Extract unique tech stack items
  const techFilters = ['all', ...new Set(projectsData.flatMap(project => project.techStack))];

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
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-3 px-4 py-2 mb-3">
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
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-2 sm:px-0">
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