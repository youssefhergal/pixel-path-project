
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
  // Default project images if none is provided
  const defaultImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
  ];
  
  // Use provided image or fall back to a default one based on index
  const backgroundImage = imageUrl || defaultImages[index % defaultImages.length];
  
  return (
    <div 
      className="project-card-animation border border-sidebar-border rounded-lg overflow-hidden transition-all duration-300 h-full"
      style={{ 
        animationDelay: `${index * 0.1}s`, 
        borderColor: 'var(--clr-primary-a20)',
        backgroundColor: 'var(--clr-surface-a10)',
      }}
    >
      <div className="aspect-video w-full bg-gray-800 overflow-hidden relative">
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div 
            className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          >
            <div className="text-center p-6">
              <span className="block text-2xl font-bold" style={{ color: 'var(--clr-light-a0)' }}>{title}</span>
              <span className="block mt-2" style={{ color: 'var(--clr-primary-a40)' }}>Project Preview</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-base mb-4" style={{ color: 'var(--clr-surface-a50)' }}>{description}</p>
        
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
            className="inline-flex items-center gap-1 text-sm transition-colors"
            style={{ color: 'var(--clr-light-a0)', ':hover': { color: 'var(--clr-primary-a30)' } }}
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm transition-colors"
              style={{ color: 'var(--clr-light-a0)', ':hover': { color: 'var(--clr-primary-a30)' } }}
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
