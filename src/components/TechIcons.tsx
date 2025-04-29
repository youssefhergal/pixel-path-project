
import React from 'react';
import { Java, ArrowRight } from 'lucide-react';

interface TechIconProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  animationClass?: string;
}

const TechIcon = ({ name, icon, description, animationClass = 'float' }: TechIconProps) => {
  return (
    <div className="tech-icon group">
      <div className={`${animationClass} text-primary-a30 p-2 rounded-full bg-surface-tonal-a10 border border-primary-a10/20`} style={{ color: 'var(--clr-primary-a30)', backgroundColor: 'var(--clr-surface-tonal-a10)' }}>
        {icon}
      </div>
      <span className="tech-icon-name">{name}</span>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-16 left-1/2 -translate-x-1/2 bg-surface-tonal-a20 p-2 rounded text-xs w-40 z-10"
           style={{ backgroundColor: 'var(--clr-surface-tonal-a20)' }}>
        {description}
      </div>
    </div>
  );
};

const TechIcons = () => {
  const techStack = [
    { 
      name: 'JavaScript', 
      icon: <span className="text-yellow-400 text-2xl">JS</span>, 
      description: 'Frontend & backend development with modern ES6+ features',
      animationClass: 'float'
    },
    { 
      name: 'React', 
      icon: <span className="text-blue-400 text-2xl">⚛️</span>, 
      description: 'Building responsive and dynamic user interfaces',
      animationClass: 'pulse'
    },
    { 
      name: 'Java', 
      icon: <Java size={24} className="text-orange-400" />, 
      description: 'Enterprise applications and Android development',
      animationClass: 'rotate'
    },
    { 
      name: 'Python', 
      icon: <span className="text-green-400 text-2xl">🐍</span>, 
      description: 'Data analysis, automation, and backend services',
      animationClass: 'float'
    },
    { 
      name: 'AWS', 
      icon: <span className="text-orange-500 text-2xl">☁️</span>, 
      description: 'Cloud infrastructure and serverless architecture',
      animationClass: 'pulse'
    }
  ];

  return (
    <div className="tech-icons-container">
      {techStack.map((tech, index) => (
        <TechIcon 
          key={index} 
          name={tech.name} 
          icon={tech.icon} 
          description={tech.description}
          animationClass={tech.animationClass}
        />
      ))}
    </div>
  );
};

export default TechIcons;
