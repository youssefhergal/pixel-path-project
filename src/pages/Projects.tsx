
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
          <div className="flex items-center mb-6 text-[#3D5AFE]">
            <div className="bg-[#1A1A1E] p-3 rounded-full shadow-md mr-3">
              <Filter size={20} className="text-[#00C9A7]" />
            </div>
            <h3 className="text-xl font-medium text-[#F5F5F5]">Filter Projects</h3>
          </div>
          
          <div className="overflow-x-auto px-1 py-2">
            <div className="flex flex-wrap gap-2 pb-2">
              {techFilters.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2.5 rounded-xl transition-all duration-200 font-medium shadow-sm whitespace-nowrap
                    ${filter === tech 
                      ? 'bg-gradient-to-r from-[#3D5AFE] to-[#00C9A7] text-[#F5F5F5]' 
                      : 'bg-[#1A1A1E] text-[#A0A0A0] hover:bg-[#1A1A1E]/80 hover:text-[#F5F5F5] border border-[#3D5AFE]/20'
                    }`}
                >
                  {tech === 'all' ? 'All Projects' : tech}
                </button>
              ))}
            </div>
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
            <div className="col-span-full text-center py-12 text-[#A0A0A0] bg-[#1A1A1E] rounded-lg border border-[#3D5AFE]/20 shadow-md">
              No projects match the selected filter.
              <p className="mt-2 text-[#00C9A7]">Try selecting a different technology.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
