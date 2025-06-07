import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import EncryptedReveal from '../components/EncryptedReveal';

const About = () => {
  useScrollAnimation();

  const skills = [
    { category: "Languages", items: ["Java", "Python", "R", "PHP", "JavaScript", "Shell"] },
    { category: "Frontend", items: ["React.js", "Angular", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Spring", "JEE", "Laravel", "Flask", "Hibernate"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "Snowflake"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "CI/CD", "Databricks", "Jenkins", "Swagger", "Postman"] },
    { category: "Data Science & ML", items: ["TensorFlow", "PyTorch", "NumPy", "Scikit-learn", "Apache Spark", "Hadoop"] },
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
            <div className="rounded-lg p-6 border bg-white dark:bg-[#1A1A1E] border-gray-200 dark:border-[#3D5AFE]/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-medium text-gray-900 dark:text-[#F5F5F5] mb-6">Skills & Technologies</h3>

              <div className="space-y-6">
                {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h4 className="text-lg font-medium mb-3 text-[#00C9A7]">{skillGroup.category}</h4>
                      <div className="flex flex-wrap">
                        {skillGroup.items.map((skill) => (
                            <span key={skill} className="tech-badge hover:scale-110 hover:shadow-md transition-all duration-300">
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
