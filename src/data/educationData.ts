
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
    degree: "Bachelor of Science in Computer Science",
    institution: "Tech University",
    location: "City, State",
    startDate: "Sep 2022",
    endDate: "May 2026 (Expected)",
    description: "Focusing on software development, data structures, algorithms, and web technologies.",
    achievements: [
      "Dean's List (2023-2024)",
      "Winner of the Annual Hackathon (2023)",
      "Teaching Assistant for Introduction to Programming"
    ]
  },
  {
    id: "edu2",
    degree: "Associate's Degree in Web Development",
    institution: "Community College",
    location: "City, State",
    startDate: "Sep 2020",
    endDate: "May 2022",
    description: "Studied web development fundamentals, including frontend and backend technologies.",
    achievements: [
      "Outstanding Student Award (2021)",
      "Developed the college's student resource portal as capstone project"
    ]
  }
];

export const certificationData: CertificationItem[] = [
  {
    id: "cert1",
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "December 2023",
    credentialLink: "https://example.com/credentials/123"
  },
  {
    id: "cert2",
    title: "React Developer Certification",
    issuer: "Meta",
    date: "August 2023",
    credentialLink: "https://example.com/credentials/456"
  },
  {
    id: "cert3",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2023",
    credentialLink: "https://example.com/credentials/789"
  },
  {
    id: "cert4",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "February 2023",
    credentialLink: "https://example.com/credentials/012"
  }
];
