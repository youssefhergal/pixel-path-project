
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
    <div className="page-container lg:ml-64">
      <SectionTitle title="Contact Me" subtitle="Get in touch with me" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="scroll-animation">
          <h3 className="section-subtitle">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-portfolio-white mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-muted border border-portfolio-lavender/20 text-portfolio-textGray focus:border-portfolio-lavender focus:ring-1 focus:ring-portfolio-lavender focus:outline-none"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-portfolio-white mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-muted border border-portfolio-lavender/20 text-portfolio-textGray focus:border-portfolio-lavender focus:ring-1 focus:ring-portfolio-lavender focus:outline-none"
                placeholder="john.doe@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-portfolio-white mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-muted border border-portfolio-lavender/20 text-portfolio-textGray focus:border-portfolio-lavender focus:ring-1 focus:ring-portfolio-lavender focus:outline-none"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-portfolio-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-md bg-muted border border-portfolio-lavender/20 text-portfolio-textGray focus:border-portfolio-lavender focus:ring-1 focus:ring-portfolio-lavender focus:outline-none resize-none"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-portfolio-lavender text-portfolio-slateGray rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div className="scroll-animation" style={{ animationDelay: '0.2s' }}>
          <h3 className="section-subtitle">Connect With Me</h3>
          
          <div className="bg-muted rounded-lg p-6 border border-portfolio-lavender/20 mb-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail size={24} className="mt-1 mr-4 text-portfolio-cyan" />
                <div>
                  <h4 className="text-lg font-medium text-portfolio-white">Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-muted-foreground hover:text-portfolio-cyan transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="mt-1 mr-4 text-portfolio-cyan" />
                <div>
                  <h4 className="text-lg font-medium text-portfolio-white">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-portfolio-cyan transition-colors"
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
                className="flex items-center gap-2 px-6 py-3 bg-muted border border-portfolio-lavender/20 rounded-md hover:border-portfolio-cyan hover:text-portfolio-cyan transition-all"
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="section-subtitle">Availability</h3>
            <div className="bg-muted rounded-lg p-6 border border-portfolio-lavender/20">
              <p className="text-muted-foreground">
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
