
import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

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
        
        <div className="mb-10 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {techFilters.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
                  filter === tech 
                    ? 'bg-portfolio-cyan text-portfolio-white' 
                    : 'bg-portfolio-slateGray text-muted-foreground hover:bg-portfolio-darkBlue'
                }`}
              >
                {tech === 'all' ? 'All Projects' : tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No projects match the selected filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
