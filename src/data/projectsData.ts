
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
  imageUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "project1",
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing an e-commerce platform, featuring analytics, inventory management, and sales tracking.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js"],
    githubLink: "https://github.com/yourusername/ecommerce-dashboard",
    demoLink: "https://ecommerce-dashboard.example.com",
    featured: true
  },
  {
    id: "project2",
    title: "Task Management Application",
    description: "A feature-rich task management app with drag-and-drop capabilities, filters, and team collaboration features.",
    techStack: ["React", "Redux", "Express", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/yourusername/task-management-app",
    demoLink: "https://task-app.example.com",
    featured: true
  },
  {
    id: "project3",
    title: "Weather Forecast App",
    description: "A weather application that displays current conditions and forecasts based on location with a clean, minimalist UI.",
    techStack: ["React", "OpenWeather API", "Styled Components", "Jest"],
    githubLink: "https://github.com/yourusername/weather-forecast-app",
    demoLink: "https://weather-app.example.com",
  },
  {
    id: "project4",
    title: "Markdown Note Editor",
    description: "A real-time markdown editor with preview functionality, syntax highlighting, and cloud synchronization.",
    techStack: ["React", "Firebase", "Marked.js", "CodeMirror"],
    githubLink: "https://github.com/yourusername/markdown-note-editor",
  },
  {
    id: "project5",
    title: "Personal Budget Tracker",
    description: "A budgeting application to track expenses, income, and financial goals with data visualization.",
    techStack: ["Vue.js", "Node.js", "Express", "PostgreSQL", "D3.js"],
    githubLink: "https://github.com/yourusername/budget-tracker",
    demoLink: "https://budget-tracker.example.com",
  },
  {
    id: "project6",
    title: "Recipe Finder",
    description: "An application to discover and save recipes based on available ingredients, dietary preferences, and cuisine types.",
    techStack: ["React Native", "Redux", "Spoonacular API", "Firebase"],
    githubLink: "https://github.com/yourusername/recipe-finder",
  }
];
