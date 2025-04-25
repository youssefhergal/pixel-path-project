
export interface JourneyItem {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export const journeyData: JourneyItem[] = [
  {
    id: "journey1",
    title: "Frontend Developer Intern",
    company: "Tech Innovators Inc.",
    location: "Remote",
    startDate: "Jun 2024",
    endDate: "Present",
    description: [
      "Developing responsive web applications using React, TypeScript, and Tailwind CSS",
      "Collaborating with UX designers to implement pixel-perfect interfaces",
      "Optimizing application performance and improving load times by 30%",
      "Participating in code reviews and implementing best practices"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "RESTful APIs"]
  },
  {
    id: "journey2",
    title: "Student Research Assistant",
    company: "University Research Lab",
    location: "On-campus",
    startDate: "Jan 2024",
    endDate: "May 2024",
    description: [
      "Assisted in developing data visualization tools for research projects",
      "Created interactive dashboards to display complex research data",
      "Implemented automated data collection and processing scripts",
      "Collaborated with researchers to present findings at academic conferences"
    ],
    technologies: ["Python", "D3.js", "Pandas", "Jupyter Notebooks"]
  },
  {
    id: "journey3",
    title: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    description: [
      "Designed and developed websites for small businesses and nonprofits",
      "Created custom WordPress themes and plugins for client-specific needs",
      "Provided ongoing maintenance and support for client websites",
      "Implemented SEO best practices to improve client search rankings"
    ],
    technologies: ["HTML/CSS", "JavaScript", "WordPress", "PHP"]
  }
];
