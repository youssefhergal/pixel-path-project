
import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Clock, User, ExternalLink } from 'lucide-react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('all');
  const blogsPerPage = 6;

  // Sample blog data with external URLs
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
      category: "technology",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
      url: "https://medium.com/@example/future-of-web-development",
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
      }
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
      category: "technology",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
      url: "https://medium.com/@example/future-of-web-development",
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
      }
    },
    {
      id: 2,
      title: "Digital Marketing Strategies for 2024",
      excerpt: "Discover effective digital marketing strategies that will help your business grow and reach new audiences in 2024.",
      category: "marketing",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      url: "https://dev.to/example/digital-marketing-strategies-2024",
      author: {
        name: "Sarah Smith",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=100&q=80"
      }
    },
    {
      id: 3,
      title: "Healthcare Technology Revolution",
      excerpt: "How modern technology is transforming healthcare delivery and patient care across the globe.",
      category: "healthcare",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1000&q=80",
      url: "https://medium.com/@example/healthcare-tech-revolution",
      author: {
        name: "Dr. Michael Johnson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
      }
    },
    {
      id: 4,
      title: "Remote Work Best Practices",
      excerpt: "Essential tips and strategies for maintaining productivity and team collaboration in remote work environments.",
      category: "workplace",
      date: "2024-01-08",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      url: "https://hashnode.com/@example/remote-work-best-practices",
      author: {
        name: "Emily Chen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
      }
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      excerpt: "Fundamental design principles that create exceptional user experiences and drive business success.",
      category: "design",
      date: "2024-01-05",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=80",
      url: "https://medium.com/@example/ui-ux-design-principles",
      author: {
        name: "Alex Rivera",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
      }
    },
    {
      id: 6,
      title: "Artificial Intelligence in Business",
      excerpt: "How AI is revolutionizing business operations and creating new opportunities across industries.",
      category: "technology",
      date: "2024-01-03",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
      url: "https://dev.to/example/ai-in-business",
      author: {
        name: "David Wilson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
      }
    }
  ];

  // Filter blogs based on active category
  const filteredBlogs = activeCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  // Handle blog card click
  const handleBlogClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    // Animation observer for scroll effects
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.scroll-animation, .blog-card-animation');
    animatedElements.forEach(element => observer.observe(element));

    return () => {
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, [currentBlogs]);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <div className="page-container lg:ml-64">
      <div className="scroll-animation">
        <SectionTitle title="Blog" subtitle="Insights, tutorials, and thoughts on technology and development" />
        
        {/* Filter Tabs */}
        <div className="mb-10">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="bg-gray-100 dark:bg-[#1A1A1E] p-1 mb-8">
              <TabsTrigger value="all" className="rounded-md">
                All Posts
              </TabsTrigger>
              <TabsTrigger value="technology" className="rounded-md">
                Technology
              </TabsTrigger>
              <TabsTrigger value="marketing" className="rounded-md">
                Marketing
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="rounded-md">
                Healthcare
              </TabsTrigger>
              <TabsTrigger value="workplace" className="rounded-md">
                Workplace
              </TabsTrigger>
              <TabsTrigger value="design" className="rounded-md">
                Design
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className="blog-card-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-[#1A1A1E] border-gray-200 dark:border-[#3D5AFE]/20 h-full cursor-pointer group"
                  onClick={() => handleBlogClick(blog.url)}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className="bg-[#3D5AFE]/10 text-[#3D5AFE] dark:text-[#00C9A7] border-[#3D5AFE]/20 dark:border-[#00C9A7]/20"
                      >
                        {blog.category}
                      </Badge>
                      <div className="text-sm text-gray-500 dark:text-[#A0A0A0]">{blog.date}</div>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-[#3D5AFE] dark:group-hover:text-[#00C9A7] transition-colors">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="text-gray-600 dark:text-[#A0A0A0] line-clamp-3">
                      {blog.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-2 flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={blog.author.avatar}
                          alt={blog.author.name}
                        />
                        <AvatarFallback className="bg-[#3D5AFE]/20 text-[#3D5AFE] dark:text-[#00C9A7]">
                          <User size={16} />
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-gray-700 dark:text-[#F5F5F5]">
                        {blog.author.name}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-[#A0A0A0]">
                      <Clock size={14} className="mr-1" />
                      {blog.readTime}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500 dark:text-[#A0A0A0] bg-white dark:bg-[#1A1A1E] rounded-lg border border-gray-200 dark:border-[#3D5AFE]/20 shadow-md">
              No blog posts found for the selected category.
              <p className="mt-2 text-[#3D5AFE] dark:text-[#00C9A7]">Try selecting a different category.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-[#3D5AFE]/10'}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                          className="cursor-pointer hover:bg-gray-100 dark:hover:bg-[#3D5AFE]/10"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-[#3D5AFE]/10'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
