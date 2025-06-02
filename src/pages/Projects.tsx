
import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { Filter } from 'lucide-react';

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
          <div className="flex items-center mb-6 text-[#3D5AFE] dark:text-[#3D5AFE]">
            <div className="bg-gray-100 dark:bg-[#1A1A1E] p-3 rounded-full shadow-md mr-3">
              <Filter size={20} className="text-[#3D5AFE] dark:text-[#00C9A7]" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-[#F5F5F5]">Filter Projects</h3>
          </div>
          
          {/* Horizontal scrolling filter container */}
          <div className="relative">
            <div 
              className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
              style={{
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* Internet Explorer 10+ */
              }}
            >
              {techFilters.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`flex-shrink-0 px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-sm whitespace-nowrap text-sm md:text-base hover:scale-105 hover:shadow-lg
                    ${filter === tech 
                      ? 'bg-gradient-to-r from-[#3D5AFE] to-[#00C9A7] text-white dark:text-[#F5F5F5] shadow-xl transform scale-105' 
                      : 'bg-white dark:bg-[#1A1A1E] text-gray-700 dark:text-[#A0A0A0] hover:bg-gray-50 dark:hover:bg-[#1A1A1E]/80 hover:text-[#3D5AFE] dark:hover:text-[#F5F5F5] border border-gray-200 dark:border-[#3D5AFE]/20 hover:border-[#3D5AFE]/40'
                    }`}
                >
                  {tech === 'all' ? 'All Projects' : tech}
                </button>
              ))}
            </div>
            
            {/* Gradient fade effect at the end */}
            <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-gray-50 dark:from-[#0E0E10] to-transparent pointer-events-none"></div>
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
            <div className="col-span-full text-center py-12 text-gray-500 dark:text-[#A0A0A0] bg-white dark:bg-[#1A1A1E] rounded-lg border border-gray-200 dark:border-[#3D5AFE]/20 shadow-md mx-2 sm:mx-0">
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
