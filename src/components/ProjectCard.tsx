
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
  imageUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubLink,
  demoLink,
  imageUrl,
  index
}) => {
  return (
    <div 
      className="project-card-animation border border-sidebar-border rounded-lg overflow-hidden bg-secondary hover:border-portfolio-darkBlue transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-video w-full bg-gray-800 overflow-hidden">
        <div className="w-full h-full bg-sidebar-accent flex items-center justify-center text-muted-foreground">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-4">
              <span className="block text-xl font-bold">{title}</span>
              <span className="text-sm">Project Preview</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-portfolio-white mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap mb-6">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-portfolio-white hover:text-portfolio-darkBlue transition-colors"
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-portfolio-white hover:text-portfolio-darkBlue transition-colors"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
