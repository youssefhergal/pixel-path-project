
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
      className="project-card-animation border rounded-xl overflow-hidden transition-all duration-300 h-full hover:scale-105 hover:shadow-2xl border-border bg-card group"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        background: 'var(--gradient-white-gray)',
        boxShadow: 'var(--shadow-soft)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
        e.currentTarget.style.borderColor = 'hsl(var(--primary))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
        e.currentTarget.style.borderColor = 'hsl(var(--border))';
      }}
    >
      <div className="aspect-video w-full overflow-hidden relative">
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
            className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm group-hover:bg-black/40 transition-all duration-300"
          >
            <div className="text-center p-6">
              <span className="block text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{title}</span>
              <span className="block mt-2 text-secondary group-hover:text-primary transition-colors duration-300">Project Preview</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-base mb-4 text-card-foreground">{description}</p>
        
        <div className="flex flex-wrap mb-6">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="text-xs py-2 px-3 rounded-lg mr-2 mb-2 inline-block hover:scale-110 transition-all duration-300 border border-border"
              style={{
                background: 'var(--gradient-hover)',
                color: 'hsl(var(--primary))',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-card-foreground hover:text-primary hover:scale-110 transition-all duration-300 px-3 py-2 rounded-lg border border-border"
            style={{ background: 'var(--gradient-hover)' }}
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground hover:scale-110 transition-all duration-300 px-3 py-2 rounded-lg"
              style={{ 
                background: 'var(--gradient-primary)',
                boxShadow: 'var(--shadow-glow)'
              }}
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
