import React, { useState } from 'react';
import { Menu, X, Globe, Home, User, Briefcase, Book, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ThemeToggle } from './ThemeProvider';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import HeroSection from './HeroSection';
import About from './About';
import Projects from '../pages/Projects';
import Journey from '../pages/Journey';
import Education from '../pages/Education';
import Contact from '../pages/Contact';
import Volunteering from '../pages/Volunteering';

const MobileLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Github size={20} /> },
    { id: 'journey', label: 'Journey', icon: <Briefcase size={20} /> },
    { id: 'education', label: 'Education', icon: <Book size={20} /> },
    { id: 'volunteering', label: 'Volunteering', icon: <User size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> }
  ];

  const socialLinks = [
    { icon: <Github size={18} />, url: "https://github.com/youssefhergal", label: "GitHub" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com/in/youssefhergal", label: "LinkedIn" },
    { icon: <Twitter size={18} />, url: "https://twitter.com/youssefhergal", label: "Twitter" },
  ];

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hamburger Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm border"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-background border-r border-border/50 transform transition-transform duration-300 z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } backdrop-blur-sm shadow-2xl`}>
        <div className="flex flex-col h-full">
          {/* Header with Profile */}
          <div className="p-4 border-b border-border/50">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12 border-2 border-primary/20 transition-all duration-300 hover:scale-110">
                  <AvatarImage src="/youssef_profile.jpg" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">YH</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Hergal</h1>
                  <p className="text-sm text-muted-foreground">Software Developer</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
                className="hover:bg-accent/50"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Language and Theme Controls */}
            <div className="flex items-center justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border-border/50 hover:bg-accent/50"
                  >
                    <Globe size={16} />
                    <span className="text-xs font-medium">{currentLanguage.toUpperCase()}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer">
                    🇺🇸 English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('fr')} className="cursor-pointer">
                    🇫🇷 Français
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('ar')} className="cursor-pointer">
                    🇸🇦 العربية
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <ThemeToggle />
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-accent/50 transition-all duration-300 text-foreground group hover:scale-[1.02]"
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
          
          {/* Footer with Social Links */}
          <div className="p-4 border-t border-border/50 mt-auto">
            <div className="flex justify-center space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-all duration-300 p-2 rounded-full hover:scale-110 hover:bg-accent/50"
                >
                  <span className={`social-icon ${social.label.toLowerCase()}`}>
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-xs text-center text-muted-foreground">© 2025 Hergal Portfolio</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="overflow-y-auto">
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="journey">
          <Journey />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="volunteering">
          <Volunteering />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default MobileLayout;