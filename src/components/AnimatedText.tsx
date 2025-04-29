
import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

const AnimatedText = ({ text, typingSpeed = 70, className = '' }: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <div className={`typing-container ${className}`}>
      <span className={isTypingComplete ? '' : 'typing-animation'}>
        {displayText}
      </span>
    </div>
  );
};

export default AnimatedText;
