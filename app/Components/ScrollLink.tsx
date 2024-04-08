import React from 'react';

interface ScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ targetId, children }) => {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a onClick={scrollToTarget} style={{ cursor: 'pointer', margin: '10px', textDecoration: 'underline', whiteSpace:"nowrap" }}>
      {children}
    </a>
  );
};

export default ScrollLink;
