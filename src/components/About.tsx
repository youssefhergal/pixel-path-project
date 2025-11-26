
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Code2,
  Database,
  Globe,
  Server,
  Brain,
  Wrench,
} from 'lucide-react';

const About = () => {
  useScrollAnimation();

  const skills = [
    { 
      category: "Languages", 
      icon: <Code2 size={20} />, 
      items: [
        { name: "Java", icon: "/icons/tech/Java.svg" },
        { name: "Python", icon: "/icons/tech/Python.svg" },
        { name: "R", icon: "/icons/tech/R.svg" },
        { name: "PHP", icon: "/icons/tech/PHP.svg" },
        { name: "JavaScript", icon: "/icons/tech/JavaScript.svg" },
        { name: "Shell", icon: "/icons/tech/Shell.svg" }
      ]
    },
    { 
      category: "Frontend", 
      icon: <Globe size={20} />, 
      items: [
        { name: "React.js", icon: "/icons/tech/React.svg" },
        { name: "Angular", icon: "/icons/tech/Angular.svg" },
        { name: "Next.js", icon: "/icons/tech/Next.js.svg" },
        { name: "Tailwind CSS", icon: "/icons/tech/Tailwind CSS.svg" },
        { name: "Bootstrap", icon: "/icons/tech/Bootstrap.svg" },
        { name: "HTML5", icon: "/icons/tech/HTML5.svg" },
        { name: "CSS3", icon: "/icons/tech/CSS3.svg" }
      ]
    },
    { 
      category: "Backend", 
      icon: <Server size={20} />, 
      items: [
        { name: "Node.js", icon: "/icons/tech/Node.js.svg" },
        { name: "Spring", icon: "/icons/tech/Spring.svg" },
        { name: "Laravel", icon: "/icons/tech/Laravel.svg" },
        { name: "Flask", icon: "/icons/tech/Flask.svg" }
      ]
    },
    { 
      category: "Databases", 
      icon: <Database size={20} />, 
      items: [
        { name: "MySQL", icon: "/icons/tech/MySQL.svg" },
        { name: "PostgreSQL", icon: "/icons/tech/PostgresSQL.svg" },
        { name: "Oracle", icon: "/icons/tech/Oracle.svg" },
        { name: "MongoDB", icon: "/icons/tech/MongoDB.svg" },
        { name: "Snowflake", icon: "/icons/tech/Snowflake.svg" }
      ]
    },
    { 
      category: "Tools & DevOps", 
      icon: <Wrench size={20} />, 
      items: [
        { name: "Git", icon: "/icons/tech/Git.svg" },
        { name: "Docker", icon: "/icons/tech/Docker.svg" },
        { name: "Jenkins", icon: "/icons/tech/Jenkins.svg" },
        { name: "Swagger", icon: "/icons/tech/Swagger.svg" },
        { name: "Postman", icon: "/icons/tech/Postman.svg" }
      ]
    },
    { 
      category: "Data Science & ML", 
      icon: <Brain size={20} />, 
      items: [
        { name: "TensorFlow", icon: "/icons/tech/TensorFlow.svg" },
        { name: "PyTorch", icon: "/icons/tech/PyTorch.svg" },
        { name: "NumPy", icon: "/icons/tech/NumPy.svg" },
        { name: "Apache Spark", icon: "/icons/tech/Apache Spark.svg" },
        { name: "Hadoop", icon: "/icons/tech/Hadoop.svg" }
      ]
    }
  ];

  return (
    <div className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
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
          <div 
            className="rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border bg-card overflow-hidden group"
            style={{
              background: 'var(--gradient-white-gray)',
              borderColor: 'hsl(var(--border))',
              boxShadow: 'var(--shadow-soft)'
            }}
          >
            <h3 className="text-xl font-medium text-foreground mb-6">Skills &amp; Technologies</h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary">{skillGroup.icon}</span>
                    <h4 className="text-lg font-medium text-secondary">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="flex items-center justify-center p-2 rounded-lg border border-border hover:scale-110 transition-all duration-300 bg-card/50 hover:bg-card group relative"
                        style={{
                          boxShadow: 'var(--shadow-glow)'
                        }}
                        title={skill.name}
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
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
