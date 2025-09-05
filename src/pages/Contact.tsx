
import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
      // Form submitted successfully
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
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/youssefhergal" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://linkedin.com/in/youssefhergal" },
    { name: "Twitter", icon: <Twitter size={20} />, url: "https://twitter.com/youssefhergal" }
  ];

  return (
    <div className="page-container lg:ml-64 bg-background transition-colors duration-200">
      <SectionTitle title="Contact Me" subtitle="Get in touch with me" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <div className="scroll-animation">
          <h3 className="section-subtitle">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Your Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="transition-all duration-300 hover:shadow-md"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john.doe@example.com"
                className="transition-all duration-300 hover:shadow-md"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                Subject
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="transition-all duration-300 hover:shadow-md"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message here..."
                className="resize-none transition-all duration-300 hover:shadow-md"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ 
                background: 'var(--gradient-primary)',
                boxShadow: 'var(--shadow-medium)'
              }}
              className="w-full px-4 py-2 sm:px-6 sm:py-3 text-primary-foreground rounded-md hover:scale-105 transition-all duration-300 flex items-center justify-center text-sm sm:text-base font-medium"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div className="scroll-animation" style={{ animationDelay: '0.2s' }}>
          <h3 className="section-subtitle">Connect With Me</h3>
          
          <div 
            className="rounded-lg p-6 border mb-8 transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'var(--gradient-card)',
              borderColor: 'hsl(var(--border))',
              boxShadow: 'var(--shadow-soft)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
              e.currentTarget.style.borderColor = 'hsl(var(--primary))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
              e.currentTarget.style.borderColor = 'hsl(var(--border))';
            }}
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail size={24} className="mt-1 mr-4 text-secondary" />
                <div>
                  <h4 className="text-lg font-medium text-foreground">Email</h4>
                  <a 
                    href="mailto:bonjour@youssefhergal.com"
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                  >
                    bonjour@youssefhergal.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="mt-1 mr-4 text-secondary" />
                <div>
                  <h4 className="text-lg font-medium text-foreground">Phone</h4>
                  <a 
                    href="tel:+33 074539****"
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                  >
                    +33 074539****
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="section-subtitle">Follow Me</h3>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--gradient-card)',
                  borderColor: 'hsl(var(--border))'
                }}
                className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border rounded-md hover:border-secondary hover:scale-105 transition-all duration-300 text-sm sm:text-base justify-center sm:justify-start"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className={`social-icon ${social.name.toLowerCase()}`}>
                  {social.icon}
                </span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="section-subtitle">Availability</h3>
            <div 
              className="rounded-lg p-6 border transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'var(--gradient-card)',
                borderColor: 'hsl(var(--border))',
                boxShadow: 'var(--shadow-soft)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                e.currentTarget.style.borderColor = 'hsl(var(--primary))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                e.currentTarget.style.borderColor = 'hsl(var(--border))';
              }}
            >
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
