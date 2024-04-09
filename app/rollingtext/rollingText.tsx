// import React, { useEffect, useState, useRef } from 'react';
// import styles from './scrollingBanner.module.css'; // Make sure this path is correct

// interface ScrollingBannerProps {
//   text: string;
//   scrollSpeed?: number; // Controls the speed of scrolling
//   className?: string;
//   style?: React.CSSProperties;
// }

// const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
//   text,
//   scrollSpeed = 2, // Default speed, might need to adjust based on preference
//   className = '',
//   style = {},
// }) => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const requestRef = useRef<number>(0);
//   const bannerRef = useRef<HTMLDivElement>(null); // Ref for the scrolling container
//   const textRef = useRef<HTMLDivElement>(null); // Ref to measure text width

//   useEffect(() => {
//     // Dynamically calculate the number of repetitions needed for smooth scrolling
//     const calculateRepetitions = () => {
//       if (bannerRef.current && textRef.current) {
//         const bannerWidth = bannerRef.current.offsetWidth;
//         const textWidth = textRef.current.offsetWidth;
//         // Calculate repetitions needed to fill the banner and ensure continuous scrolling
//         const repetitionsNeeded = Math.ceil(bannerWidth / textWidth) * 2; // Ensure we cover twice the banner width
//         return Array(repetitionsNeeded).fill(text).join(' ');
//       }
//       return text;
//     };

//     const repeatedText = calculateRepetitions();

//     const scrollText = () => {
//       setScrollPosition((prevPosition) => {
//         if (-prevPosition >= textRef.current?.scrollWidth) {
//           return bannerRef.current?.offsetWidth ?? 0;
//         } else {
//           return prevPosition - scrollSpeed;
//         }
//       });
//       requestRef.current = requestAnimationFrame(scrollText);
//     };

//     requestRef.current = requestAnimationFrame(scrollText);

//     return () => {
//       cancelAnimationFrame(requestRef.current);
//     };
//   // Include scrollSpeed in the dependency array; you might also monitor the size of the container or text
//   }, [scrollSpeed, text]);

//   const combinedClassName = `${styles.scrollingBanner} ${className}`.trim();

//   // Style dynamically adjusted for transforming based on scrollPosition
//   const dynamicStyle = {
//     ...style,
//     transform: `translateX(${scrollPosition}px)`,
//   };

//   return (
//     <div ref={bannerRef} className={combinedClassName} style={dynamicStyle}>
//       <div ref={textRef}>{text} {text} {text} {text} {text} {text} {text} {text} {text} {text}</div>
//     </div>
//   );
// };

// export default ScrollingBanner;
