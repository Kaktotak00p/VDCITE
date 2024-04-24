import React from 'react';

interface ScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
  onClick?: () => void;
  block?: 'start' | 'center' | 'end' | 'nearest'; // New prop for scroll alignment
  className?: string;
  style?: React.CSSProperties;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ targetId, children, onClick, block = 'center', className, style }) => {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: window.innerWidth <= 768 ? 'start' : block, // Use 'start' on mobile unless overridden
        inline: 'start'
      });
    }
    onClick?.();
  };

  return (
    <a
      onClick={scrollToTarget}
      className={className}
      style={{
        cursor: 'pointer',
        fontFamily: 'Fifaks10Dev1',
        ...style,
      }}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
