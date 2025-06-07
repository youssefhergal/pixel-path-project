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
    id: "journey2",
    title: "R&D Intern (Open Source Project)",
    company: "École des Mines de Paris",
    location: "Paris, France",
    startDate: "Apr 2025",
    endDate: "Sep 2025",
    description: [
      "Collaborated with researchers to improve an e-learning platform through ML personalization",
      "Integrated and optimized custom algorithms to tailor educational experiences",
      "Worked on the design and evaluation of adaptive learning systems"
    ],
    technologies: ["Javascript" , "Python", "TensorFlow", "Solid Js", "Scikit-learn"]
  },
  {
    id: "journey4",
    title: "Freelance Software Developer",
    company: "CodySoft",
    location: "Remote, Île-de-France",
    startDate: "Dec 2023",
    endDate: "Jan 2025",
    description: [
      "Built and maintained custom web apps for clients using modern full-stack tools",
      "Developed internal APIs for user, payment, and notification systems",
      "Coordinated directly with product teams to deliver tailored solutions"
    ],
    technologies: ["Java" , "Php" , "Javascript" , "Laravel" , "Node.js", "React.js", "MongoDB", "Spring Boot", "Docker"]
  },
  {
    id: "journey1",
    title: "AI Software Engineer Intern",
    company: "ANCFCC",
    location: "Rabat, Morocco",
    startDate: "Jul 2024",
    endDate: "Sep 2024",
    description: [
      "Designed and developed a document management platform using Spring Boot and React.js",
      "Integrated OpenAI API with LangChain and RAG architecture for semantic search and summarization",
      "Implemented PostgreSQL and Elasticsearch for storage and querying",
      "Set up CI/CD pipelines and containerization with Docker for scalable deployment"
    ],
    technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "Elasticsearch", "Docker", "LangChain", "CI/CD", "ML/DL" , "API Rest"]
  },
  {
    id: "journey3",
    title: "Full Stack Developer Intern",
    company: "ZALAGH PLANCHER / BETON ZALAGH",
    location: "Fès, Morocco",
    startDate: "Jul 2023",
    endDate: "Aug 2023",
    description: [
      "Maintained and optimized an internal billing system using Symfony and MySQL",
      "Redesigned the UI for better usability and automated PDF generation",
      "Documented system architecture for future migration"
    ],
    technologies: ["PHP", "Symfony", "MySQL", "JavaScript", "Bootstrap"]
  }
];
