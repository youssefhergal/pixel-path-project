
import React from 'react';
import { Code, Server } from 'lucide-react';

const TechIcons = () => {
  const icons = [
    { icon: Code, label: 'JavaScript' },
    { icon: Code, label: 'Java' },
    { icon: Server, label: 'AWS' },
  ];

  return (
    <div className="flex gap-8 mt-8">
      {icons.map((item, index) => (
        <div
          key={item.label}
          className="flex flex-col items-center space-y-2 animate-bounce"
          style={{ animationDelay: `${index * 200}ms`, animationDuration: '2s' }}
        >
          <div className="p-3 rounded-full bg-portfolio-darkBlue/10">
            <item.icon className="w-6 h-6 text-portfolio-darkBlue" />
          </div>
          <span className="text-sm text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
