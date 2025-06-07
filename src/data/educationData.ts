export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
}

export const educationData: EducationItem[] = [
  {
    id: "edu1",
    degree: "Master en Exploration Informatique des Données et Décisionnel (en cours)",
    institution: "Université Sorbonne Paris Nord",
    location: "Paris, France",
    startDate: "2024",
    endDate: "2025",
    description: "Master program focused on data engineering, analytics, and AI-driven decision systems.",
    achievements: []
  },
  {
    id: "edu2",
    degree: "Master 1 en Web Intelligence et Science des Données",
    institution: "Faculté des Sciences Dhar El Mahraz",
    location: "Fès, Maroc",
    startDate: "2023",
    endDate: "2024",
    description: "Covered advanced topics in data science, machine learning, and intelligent web systems.",
    achievements: []
  },
  {
    id: "edu3",
    degree: "Licence en Sciences Mathématiques et Informatique",
    institution: "Faculté des Sciences Dhar El Mahraz",
    location: "Fès, Maroc",
    startDate: "2020",
    endDate: "2023",
    description: "Strong foundation in mathematics, programming, and algorithmic problem-solving.",
    achievements: ["Developed the college's student resource portal as capstone project"]
  },
  {
    id: "edu4",
    degree: "Baccalauréat Sciences Mathématiques A",
    institution: "Lycée Moulay Idriss Al Akbar",
    location: "Ribat El Kheir, Maroc",
    startDate: "2018",
    endDate: "2019",
    description: "Scientific baccalaureate with a focus on mathematics and physics.",
    achievements: []
  }
];

export const certificationData: CertificationItem[] = [
  {
    id: "cert1",
    title: "Java SE 17 Developer",
    issuer: "Oracle",
    date: "2024",
    credentialLink: "https://www.oracle.com" // replace with actual if available
  },
  {
    id: "cert2",
    title: "Professional Data Engineer in Python",
    issuer: "DataCamp",
    date: "2024",
    credentialLink: "https://www.datacamp.com" // replace with actual if available
  },
  {
    id: "cert3",
    title: "Machine Learning Specialization & Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2024",
    credentialLink: "https://www.deeplearning.ai" // replace with actual if available
  },
  {
    id: "cert4",
    title: "Java, JavaScript & SQL Certificates",
    issuer: "HackerRank",
    date: "2024",
    credentialLink: "https://www.hackerrank.com" // replace with actual if available
  }
];
