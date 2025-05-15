
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Book, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { ThemeToggle } from './ThemeProvider';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={23} /> },
    { path: '/about', label: 'About', icon: <User size={23} /> },
    { path: '/projects', label: 'Projects', icon: <Github size={23} /> },
    { path: '/journey', label: 'Journey', icon: <Briefcase size={23} /> },
    { path: '/education', label: 'Education', icon: <Book size={23} /> },
    { path: '/opensource', label: 'Open Source', icon: <Github size={23} /> },
    { path: '/volunteering', label: 'Volunteering', icon: <User size={23} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={23} /> },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/yourusername", label: "Twitter" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <button 
        className="fixed top-6 right-6 z-50 p-2 bg-[#3D5AFE] dark:bg-[#3D5AFE] text-white dark:text-[#F5F5F5] rounded-full lg:hidden"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className={`fixed top-0 left-0 h-full bg-white dark:bg-[#1A1A1E] z-40 transition-transform duration-300 ease-in-out transform w-64 border-r border-gray-200 dark:border-[#3D5AFE]/20 rounded-tr-2xl rounded-br-2xl
                      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-3 border-b border-gray-200 dark:border-[#3D5AFE]/20">
            <div className="flex flex-col items-center mb-4">
              <Avatar className="h-16 w-16 border border-gray-300 dark:border-[#3D5AFE]/30 mb-1">
                <AvatarImage src="src/data/youssef_profile.jpg" alt="Profile" />
                <AvatarFallback className="bg-gray-100 dark:bg-[#3D5AFE]/20 text-gray-800 dark:text-[#F5F5F5]">DP</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h1 className="text-lg font-bold text-gray-900 dark:text-[#F5F5F5]">Portfolio</h1>
                <p className="text-xs text-gray-600 dark:text-[#A0A0A0]">Software Developer</p>
              </div>
            </div>
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </div>
          
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors
                              ${isActive(item.path) 
                                ? 'bg-[#3D5AFE] text-white dark:text-[#F5F5F5]' 
                                : 'text-gray-600 dark:text-[#A0A0A0] hover:bg-gray-100 dark:hover:bg-[#3D5AFE]/10 hover:text-[#3D5AFE] dark:hover:text-[#00C9A7]'}`}
                    onClick={closeSidebar}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-gray-200 dark:border-[#3D5AFE]/20 mt-auto">
            <div className="flex justify-center space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-600 dark:text-[#A0A0A0] hover:text-[#3D5AFE] dark:hover:text-[#00C9A7] transition-colors p-2"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-center text-gray-500 dark:text-[#A0A0A0]">© 2025 My Portfolio</p>
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
