import React, { useEffect, useState, useRef } from 'react';
import styles from './typingAnimation.module.css'; // Make sure this path is correct

interface TypingAnimationProps {
  text: string;
  typingSpeed?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  typingSpeed = 150,
  className = '',
  style = {},
}) => {
  const [visibleText, setVisibleText] = useState('');
  const elementRef = useRef<HTMLHeadingElement>(null); // Ref to the component's root

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Only start the animation if the component is visible
        if (entry.isIntersecting) {
          let index = 0;
          const interval = setInterval(() => {
            setVisibleText((prev) => prev + text.charAt(index));
            index++;
            if (index === text.length) {
              clearInterval(interval);
            }
          }, typingSpeed);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      {
        root: null, // Observes the element in the viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger if at least 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [text, typingSpeed]);

  const combinedClassName = `${styles.typingAnimation} mainText ${className}`.trim();

  return (
    <h1 ref={elementRef} className={combinedClassName} style={style}>
      {visibleText}
    </h1>
  );
};

export default TypingAnimation;
