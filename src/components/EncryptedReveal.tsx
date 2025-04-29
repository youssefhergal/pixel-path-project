
import React, { useEffect, useState } from 'react';

interface EncryptedRevealProps {
  text: string;
  duration?: number;
  className?: string;
}

const EncryptedReveal = ({ text, duration = 2000, className = '' }: EncryptedRevealProps) => {
  const [displayText, setDisplayText] = useState('');
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iterations = 0;
    const maxIterations = 10;
    
    const scramble = () => {
      let result = '';
      const percent = iterations / maxIterations;
      
      for (let i = 0; i < text.length; i++) {
        if (i < Math.floor(text.length * percent)) {
          result += text[i];
        } else if (text[i] === ' ') {
          result += ' ';
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      setDisplayText(result);
      iterations += 1;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    };
    
    interval = setInterval(scramble, duration / maxIterations);
    return () => clearInterval(interval);
  }, [text, duration]);
  
  return (
    <span className={`text-scramble ${className}`}>
      {displayText || text.replace(/./g, chars[Math.floor(Math.random() * chars.length)])}
    </span>
  );
};

export default EncryptedReveal;
