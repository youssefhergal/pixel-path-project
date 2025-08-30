import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import EncryptedReveal from '../components/EncryptedReveal';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Brain, 
  Wrench,
  Coffee,
  Github,
  Zap,
  FileText,
  Layers,
  Cpu
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
      <div className="page-container lg:ml-64">
        <SectionTitle title="About Me" subtitle="My background and skills" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 scroll-animation">
            <h3 className="section-subtitle">
              <EncryptedReveal text="My Background" duration={1500} />
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-[#A0A0A0]">
              <p>
                Hello! I'm Youssef Hergal, a passionate software developer with strong academic and hands-on experience in full-stack development, artificial intelligence, and cloud technologies. I'm currently pursuing a Master’s in Data Exploration and Decision Support at Sorbonne Paris Nord.
              </p>
              <p>
                Over the years, I've built and contributed to intelligent systems involving document management, smart authentication, and AI-powered educational tools using cutting-edge technologies such as Java, React, Spring Boot, OpenAI API, and Docker. I have experience working in both academic and industry settings, including freelance engagements and R&D collaborations.
              </p>
              <p>
                Outside of coding, I enjoy hiking, exploring new places, and engaging in competitive programming. I'm deeply motivated by the challenge of building impactful, scalable software and continuously improving through new learning opportunities.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="section-subtitle">Professional Interests</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-[#A0A0A0]">
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Web Application Development</li>
                <li>Software Architecture and DevOps</li>
                <li>Cloud Infrastructure & CI/CD</li>
                <li>Open Source Contributions & Hackathons</li>
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
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                e.currentTarget.style.borderColor = 'hsl(var(--primary))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                e.currentTarget.style.borderColor = 'hsl(var(--border))';
              }}
            >
              <h3 className="text-xl font-medium text-foreground mb-6">Skills & Technologies</h3>

              <div className="space-y-6">
                {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-primary">{skillGroup.icon}</span>
                        <h4 className="text-lg font-medium text-secondary">{skillGroup.category}</h4>
                      </div>
                       <div className="flex flex-wrap gap-3">
                         {skillGroup.items.map((skill) => (
                             <div 
                               key={skill.name} 
                               className="flex items-center justify-center p-3 rounded-lg border border-border hover:scale-110 transition-all duration-300 bg-card/50 hover:bg-card group relative"
                               style={{
                                 boxShadow: 'var(--shadow-glow)'
                               }}
                               title={skill.name}
                             >
                               <img 
                                 src={skill.icon} 
                                 alt={skill.name}
                                 className="w-8 h-8 object-contain"
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
