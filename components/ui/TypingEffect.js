import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let interval = null;
    let i = 0;
    
    interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, delay);
    
    return () => clearInterval(interval);
  }, [text, delay]);
  
  return (
    <span>{displayText}</span>
  );
};

export default TypingEffect;