import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo(0, 0);
    
    // Also try smooth scrolling as fallback
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
