
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  imageUrl?: string;
}

export const blogsData: BlogPost[] = [
  {
    id: "blog1",
    title: "Building Scalable Web Applications with React and Node.js",
    excerpt: "Learn how to create robust, scalable web applications using modern React patterns and Node.js backend architecture.",
    content: "In this comprehensive guide, we'll explore the best practices for building scalable web applications...",
    publishedDate: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Node.js", "Architecture", "Best Practices"],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    id: "blog2",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the emerging trends and technologies that are shaping the future of web development.",
    content: "As we move forward in 2024, the web development landscape continues to evolve...",
    publishedDate: "2024-02-08",
    readTime: "6 min read",
    tags: ["Trends", "Web Development", "Technology", "Future"],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176"
  },
  {
    id: "blog3",
    title: "Optimizing Performance in Modern JavaScript Applications",
    excerpt: "Discover techniques and tools to improve the performance of your JavaScript applications.",
    content: "Performance optimization is crucial for modern web applications...",
    publishedDate: "2024-01-28",
    readTime: "10 min read",
    tags: ["JavaScript", "Performance", "Optimization", "Best Practices"],
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
  },
  {
    id: "blog4",
    title: "Getting Started with Cloud Computing: AWS Basics",
    excerpt: "A beginner's guide to understanding and working with Amazon Web Services.",
    content: "Cloud computing has revolutionized how we build and deploy applications...",
    publishedDate: "2024-02-12",
    readTime: "12 min read",
    tags: ["AWS", "Cloud Computing", "DevOps", "Infrastructure"],
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
  }
];
