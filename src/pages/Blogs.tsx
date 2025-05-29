import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { blogsData } from '../data/blogsData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blogs = () => {
  useScrollAnimation();

  const featuredBlogs = blogsData.filter(blog => blog.featured);
  const otherBlogs = blogsData.filter(blog => !blog.featured);

  return (
    <div className="page-container lg:ml-64">
      <SectionTitle title="Blog & Articles" subtitle="Sharing knowledge and insights" />

      {/* Featured Articles */}
      <div className="scroll-animation mb-16">
        <h3 className="section-subtitle mb-8">Featured Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredBlogs.map((blog) => (
            <article 
              key={blog.id}
              className="group bg-white dark:bg-[#1A1A1E] rounded-lg border border-gray-200 dark:border-[#3D5AFE]/20 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-[#A0A0A0] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(blog.publishedDate).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog.readTime}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-[#F5F5F5] mb-3 group-hover:text-[#3D5AFE] transition-colors">
                  {blog.title}
                </h4>
                <p className="text-gray-600 dark:text-[#A0A0A0] mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs bg-[#3D5AFE]/10 text-[#3D5AFE] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-[#3D5AFE] hover:text-[#00C9A7] transition-colors">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Other Articles */}
      <div className="scroll-animation" style={{ animationDelay: '0.2s' }}>
        <h3 className="section-subtitle mb-8">Recent Articles</h3>
        <div className="space-y-6">
          {otherBlogs.map((blog) => (
            <article 
              key={blog.id}
              className="group bg-white dark:bg-[#1A1A1E] rounded-lg border border-gray-200 dark:border-[#3D5AFE]/20 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-[#A0A0A0] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(blog.publishedDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {blog.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-[#F5F5F5] mb-2 group-hover:text-[#3D5AFE] transition-colors">
                    {blog.title}
                  </h4>
                  <p className="text-gray-600 dark:text-[#A0A0A0] mb-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags.slice(0, 4).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs bg-[#3D5AFE]/10 text-[#3D5AFE] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-[#3D5AFE] hover:text-[#00C9A7] transition-colors">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Writing Philosophy */}
      <div className="mt-16 scroll-animation" style={{ animationDelay: '0.4s' }}>
        <h3 className="section-subtitle">Why I Write</h3>
        <div className="bg-white dark:bg-[#1A1A1E] rounded-lg p-8 border border-gray-200 dark:border-[#3D5AFE]/20">
          <p className="text-gray-600 dark:text-[#A0A0A0] mb-4">
            Writing has always been a way for me to solidify my understanding of complex topics and share knowledge 
            with the developer community. Through my blog, I aim to break down complicated concepts into digestible, 
            actionable insights.
          </p>
          <p className="text-gray-600 dark:text-[#A0A0A0]">
            Whether it's exploring new technologies, sharing lessons learned from projects, or discussing industry trends, 
            I believe in the power of documentation and knowledge sharing to help fellow developers grow and succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
