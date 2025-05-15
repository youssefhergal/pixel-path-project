
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();

  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "SQL"] },
    { category: "Frontend", items: ["React", "Vue.js", "Redux", "Tailwind CSS", "SCSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Webpack", "Jest", "Docker"] },
    { category: "AI", items: ["Pytorch", "Tensorflow", "Jupeter", "Pandas", "ML/DL","Numpy" ,"Matplotlib", "Mlflow"] }

  ];

  return (
    <div className="page-container lg:ml-64">
      <SectionTitle title="About Me" subtitle="My background and skills" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 scroll-animation">
          <h3 className="section-subtitle">
            My Background
          </h3>
          
          <div className="space-y-4" style={{ color: 'var(--clr-light-a0)' }}>
            <p>
              Hello! I'm a passionate software developer student with a focus on creating elegant, functional web applications. 
              My journey in coding began when I was in high school, tinkering with HTML and CSS to build simple websites.
            </p>
            <p>
              Fast forward to today, I've had the opportunity to work on various projects spanning from simple static websites 
              to complex full-stack applications. My goal is to build software that not only solves problems but provides 
              an exceptional user experience.
            </p>
            <p>
              When I'm not at my computer, you'll find me hiking in the mountains, reading science fiction novels, or 
              experimenting with new cooking recipes. I believe in continuous learning and am always looking to expand my skillset.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="section-subtitle">Professional Interests</h3>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--clr-light-a0)' }}>
              <li>Web Application Development</li>
              <li>User Interface/Experience Design</li>
              <li>Cloud Computing and Serverless Architecture</li>
              <li>Open Source Contribution</li>
              <li>Technical Writing and Documentation</li>
            </ul>
          </div>
        </div>

        <div className="scroll-animation" style={{ animationDelay: '0.2s' }}>
          <div className="rounded-lg p-6 border" style={{ 
            background: 'linear-gradient(135deg, var(--clr-surface-tonal-a10), var(--clr-surface-a10))',
            borderColor: 'var(--clr-primary-a20)' 
          }}>
            <h3 className="text-xl font-medium mb-6" style={{ color: 'var(--clr-primary-a40)' }}>Skills & Technologies</h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-lg font-medium mb-3" style={{ color: 'var(--clr-primary-a30)' }}>{skillGroup.category}</h4>
                  <div className="flex flex-wrap">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
