
import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
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

    const animatedElements = document.querySelectorAll('.scroll-animation');
    animatedElements.forEach(element => observer.observe(element));

    return () => {
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: <Twitter size={20} />, url: "https://twitter.com/yourusername" }
  ];

  return (
    <div className="page-container lg:ml-64 bg-gray-50 dark:bg-[#0E0E10] transition-colors duration-200">
      <SectionTitle title="Contact Me" subtitle="Get in touch with me" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="scroll-animation">
          <h3 className="section-subtitle">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-[#F5F5F5] mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#1A1A1E] border border-gray-300 dark:border-[#3D5AFE]/20 text-gray-900 dark:text-[#F5F5F5] focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-[#F5F5F5] mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#1A1A1E] border border-gray-300 dark:border-[#3D5AFE]/20 text-gray-900 dark:text-[#F5F5F5] focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="john.doe@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-[#F5F5F5] mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#1A1A1E] border border-gray-300 dark:border-[#3D5AFE]/20 text-gray-900 dark:text-[#F5F5F5] focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-[#F5F5F5] mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#1A1A1E] border border-gray-300 dark:border-[#3D5AFE]/20 text-gray-900 dark:text-[#F5F5F5] focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] focus:outline-none resize-none transition-all duration-300 hover:shadow-md"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-[#3D5AFE] text-white rounded-md hover:bg-opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div className="scroll-animation" style={{ animationDelay: '0.2s' }}>
          <h3 className="section-subtitle">Connect With Me</h3>
          
          <div className="bg-white dark:bg-[#1A1A1E] rounded-lg p-6 border border-gray-200 dark:border-[#3D5AFE]/20 mb-8 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail size={24} className="mt-1 mr-4 text-[#00C9A7]" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-[#F5F5F5]">Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-gray-600 dark:text-[#A0A0A0] hover:text-[#00C9A7] transition-colors duration-300"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="mt-1 mr-4 text-[#00C9A7]" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-[#F5F5F5]">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-600 dark:text-[#A0A0A0] hover:text-[#00C9A7] transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="section-subtitle">Follow Me</h3>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#1A1A1E] border border-gray-200 dark:border-[#3D5AFE]/20 rounded-md hover:border-[#00C9A7] hover:text-[#00C9A7] hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="section-subtitle">Availability</h3>
            <div className="bg-white dark:bg-[#1A1A1E] rounded-lg p-6 border border-gray-200 dark:border-[#3D5AFE]/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <p className="text-gray-600 dark:text-[#A0A0A0]">
                I'm currently available for freelance work, part-time positions, and internships. If you have a project 
                that you'd like to discuss, please feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
