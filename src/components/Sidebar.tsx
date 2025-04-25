
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Book, Mail, Github } from 'lucide-react';

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
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/about', label: 'About', icon: <User size={20} /> },
    { path: '/projects', label: 'Projects', icon: <Github size={20} /> },
    { path: '/journey', label: 'Journey', icon: <Briefcase size={20} /> },
    { path: '/education', label: 'Education', icon: <Book size={20} /> },
    { path: '/opensource', label: 'Open Source', icon: <Github size={20} /> },
    { path: '/volunteering', label: 'Volunteering', icon: <User size={20} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <button 
        className="fixed top-6 right-6 z-50 p-2 bg-portfolio-darkBlue rounded-full lg:hidden"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className={`fixed top-0 left-0 h-full bg-sidebar z-40 transition-transform duration-300 ease-in-out transform w-64
                      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-sidebar-border">
            <h1 className="text-xl font-bold text-portfolio-white">Portfolio</h1>
            <p className="text-sm text-muted-foreground">Software Developer</p>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors
                              ${isActive(item.path) 
                                ? 'bg-portfolio-darkBlue text-portfolio-white' 
                                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'}`}
                    onClick={closeSidebar}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-sidebar-border mt-auto">
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
