import React from 'react';

interface ScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string; // Optional prop for CSS class names
  style?: React.CSSProperties; // Optional prop for inline styles
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ targetId, children, className, style }) => {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <a
      onClick={scrollToTarget}
      className={className} // Apply the className prop
      style={{
        cursor: 'pointer',
        // textDecoration: 'underline',
        whiteSpace: 'nowrap',
        fontFamily: 'Fifaks10Dev1',
        ...style, // Spread the style prop to include additional styles
      }}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
