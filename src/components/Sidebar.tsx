import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Book, Mail, Github, Linkedin, Twitter, Globe, BookOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeProvider';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en'); // 'en' for English, 'fr' for French, 'ar' for Arabic
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={23} /> },
    { path: '/about', label: 'About', icon: <User size={23} /> },
    { path: '/projects', label: 'Projects', icon: <Github size={23} /> },
    { path: '/journey', label: 'Journey', icon: <Briefcase size={23} /> },
    { path: '/education', label: 'Education', icon: <Book size={23} /> },
    { path: '/opensource', label: 'Open Source', icon: <Github size={23} /> },
    { path: '/volunteering', label: 'Volunteering', icon: <User size={23} /> },
    { path: '/blog', label: 'Blog', icon: <BookOpen size={23} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={23} /> },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/youssefhergal", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/youssefhergal", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/youssefhergal", label: "Twitter" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const languageLabels = {
    'en': 'English',
    'fr': 'Français',
    'ar': 'العربية'
  };

  return (
    <>
      <button 
        className="fixed top-6 right-6 z-50 p-2 bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-full lg:hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div 
        className={`fixed top-0 left-0 h-full bg-sidebar z-40 transition-all duration-300 ease-in-out transform w-64 border-r border-sidebar-border rounded-tr-2xl rounded-br-2xl backdrop-blur-sm shadow-2xl
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        style={{ 
          background: 'var(--gradient-white-gray)',
          boxShadow: 'var(--shadow-medium)'
        }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-sidebar-border/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10 border-2 border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg" style={{ boxShadow: 'var(--shadow-glow)' }}>
                  <AvatarImage src="/youssef_profile.jpg" alt="Profile" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-lg font-bold text-sidebar-foreground">Hergal</h1>
                  <p className="text-xs text-muted-foreground">Software Developer</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="flex items-center justify-center p-1.5 rounded-full text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-105"
                      style={{ 
                        background: 'var(--gradient-hover)',
                        boxShadow: 'var(--shadow-soft)'
                      }}
                      title="Select Language"
                    >
                      <Globe size={16} />
                      <span className="ml-1 text-xs font-medium">{currentLanguage.toUpperCase()}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
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
          </div>
          
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden
                              ${isActive(item.path) 
                                ? 'text-primary-foreground shadow-lg' 
                                : 'text-muted-foreground hover:text-primary hover:scale-[1.02] hover:shadow-md'}`}
                    style={isActive(item.path) 
                      ? { 
                          background: 'var(--gradient-primary)',
                          boxShadow: 'var(--shadow-medium)'
                        }
                      : {}}
                    onMouseEnter={(e) => {
                      if (!isActive(item.path)) {
                        e.currentTarget.style.background = 'var(--gradient-hover)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(item.path)) {
                        e.currentTarget.style.background = '';
                        e.currentTarget.style.boxShadow = '';
                      }
                    }}
                    onClick={closeSidebar}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-sidebar-border/50 mt-auto">
            <div className="flex justify-center space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-all duration-300 p-2 rounded-full hover:scale-110 hover:shadow-lg"
                  style={{
                    background: 'var(--gradient-hover)',
                    boxShadow: 'var(--shadow-soft)'
                  }}
                  onMouseEnter={(e) => {
                    const parent = e.currentTarget;
                    const socialIcon = parent.querySelector('.social-icon');
                    if (socialIcon?.classList.contains('github')) {
                      parent.style.background = 'hsl(var(--github-color))';
                    } else if (socialIcon?.classList.contains('linkedin')) {
                      parent.style.background = 'hsl(var(--linkedin-color))';
                    } else if (socialIcon?.classList.contains('twitter')) {
                      parent.style.background = 'hsl(var(--twitter-color))';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--gradient-hover)';
                  }}
                >
                  <span className={`social-icon ${social.label.toLowerCase()}`}>
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-xs text-center text-muted-foreground">© 2025 My Portfolio</p>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
