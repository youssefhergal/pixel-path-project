
import React from 'react';
import { Code, Server, Terminal } from 'lucide-react';

const TechIcons = () => {
  const icons = [
    { 
      icon: Code, 
      label: 'JavaScript',
      description: 'Building interactive web applications with modern JavaScript (ES6+)'
    },
    { 
      icon: Terminal, 
      label: 'Java',
      description: 'Developing robust backend services and applications'
    },
    { 
      icon: Server, 
      label: 'AWS',
      description: 'Cloud infrastructure and serverless architecture'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {icons.map((item, index) => (
        <div
          key={item.label}
          className="group flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300"
          style={{ 
            animation: `float 3s ease-in-out infinite`,
            animationDelay: `${index * 0.3}s`
          }}
        >
          <div className="p-4 rounded-full bg-portfolio-darkBlue/10 group-hover:bg-portfolio-darkBlue/20 transition-colors">
            <item.icon className="w-8 h-8 text-portfolio-darkBlue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-portfolio-white mb-2">{item.label}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
