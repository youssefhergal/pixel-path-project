
import React, { useEffect, useRef } from 'react';
import { 
  Code2, 
  FileJson, 
  Cpu, 
  Database, 
  Server, 
  Github 
} from 'lucide-react';

interface TechIconProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const TechIcon = ({ name, icon, description }: TechIconProps) => {
  return (
    <div className="tech-icon group relative">
      <div 
        className="p-3 rounded-full border"
        style={{ 
          color: '#3D5AFE', 
          backgroundColor: 'rgba(61, 90, 254, 0.1)', 
          borderColor: 'rgba(61, 90, 254, 0.2)' 
        }}
      >
        {icon}
      </div>
      <span 
        className="tech-icon-name mt-2 block text-center"
        style={{ color: '#00C9A7' }}
      >
        {name}
      </span>
      <div 
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-16 left-1/2 -translate-x-1/2 p-2 rounded text-xs w-40 z-10"
        style={{ backgroundColor: '#1A1A1E', color: '#F5F5F5' }}
      >
        {description}
      </div>
    </div>
  );
};

const TechIcons = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const firstScrollerRef = useRef<HTMLDivElement>(null);
  const secondScrollerRef = useRef<HTMLDivElement>(null);
  
  const techStack = [
    { 
      name: 'JavaScript', 
      icon: <FileJson size={24} className="text-yellow-400" />, 
      description: 'Frontend & backend development with modern ES6+ features',
    },
    { 
      name: 'React', 
      icon: <Code2 size={24} className="text-blue-400" />, 
      description: 'Building responsive and dynamic user interfaces',
    },
    { 
      name: 'Java', 
      icon: <Cpu size={24} className="text-orange-400" />, 
      description: 'Enterprise applications and Android development',
    },
    { 
      name: 'HTML', 
      icon: <Code2 size={24} className="text-red-400" />, 
      description: 'Markup language for web page structure',
    },
    { 
      name: 'CSS', 
      icon: <Code2 size={24} className="text-blue-500" />, 
      description: 'Styling for web applications',
    },
    { 
      name: 'AWS', 
      icon: <Server size={24} className="text-orange-500" />, 
      description: 'Cloud infrastructure and serverless architecture',
    },
    {
      name: 'SPring',
      icon: <Server size={24} className="text-green-500" />,
      description: 'Spring ecosystem for Java development',
    },
    { 
      name: 'Git', 
      icon: <Github size={24} className="text-white" />, 
      description: 'Version control and collaboration',
    },
    { 
      name: 'SQL', 
      icon: <Database size={24} className="text-green-400" />, 
      description: 'Database management and queries',
    }
  ];

  useEffect(() => {
    if (!scrollerRef.current || !firstScrollerRef.current || !secondScrollerRef.current) return;

    // Set up the animation
    const scrollers = scrollerRef.current;
    
    // If user prefers reduced motion, don't animate
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    
    const animateScroller = () => {
      if (!firstScrollerRef.current || !secondScrollerRef.current) return;
      
      const firstScroller = firstScrollerRef.current;
      const secondScroller = secondScrollerRef.current;
      
      firstScroller.animate(
        [
          { transform: 'translateX(0)' },
          { transform: `translateX(-${firstScroller.offsetWidth}px)` }
        ],
        {
          duration: 25000,
          iterations: Infinity,
          easing: 'linear'
        }
      );
      
      secondScroller.animate(
        [
          { transform: `translateX(${firstScroller.offsetWidth}px)` },
          { transform: '0' }
        ],
        {
          duration: 25000,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    };
    
    animateScroller();
  }, []);

  return (
    <div className="scroller-container overflow-hidden relative my-8" ref={scrollerRef}>
      <div className="scroller flex gap-6 items-center absolute" ref={firstScrollerRef}>
        {techStack.map((tech, index) => (
          <TechIcon 
            key={`tech1-${index}`} 
            name={tech.name} 
            icon={tech.icon} 
            description={tech.description} 
          />
        ))}
      </div>
      <div className="scroller flex gap-6 items-center absolute" ref={secondScrollerRef}>
        {techStack.map((tech, index) => (
          <TechIcon 
            key={`tech2-${index}`} 
            name={tech.name} 
            icon={tech.icon} 
            description={tech.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default TechIcons;
