"use client"
import React, { useEffect } from 'react';

const HeadManager = () => {
  useEffect(() => {
    // Function to detect if the browser is Safari
    const isSafari = () => {
      const userAgent = navigator.userAgent;
      return /^((?!chrome|android).)*safari/i.test(userAgent);
    };

    // Function to update the viewport meta tag
    const updateMetaTag = () => {
      const existingMeta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
      
      if (isSafari()) {
        if (existingMeta) {
          existingMeta.content = "width=device-width, maximum-scale=1.0, user-scalable=no";
        } else {
          const meta = document.createElement('meta');
          meta.name = "viewport";
          meta.content = "width=device-width,  maximum-scale=1.0, user-scalable=no";
          document.getElementsByTagName('head')[0].appendChild(meta);
        }
      } else if (existingMeta) {
        existingMeta.content = "width=device-width, initial-scale=1";
      }
    };

    updateMetaTag();

    // Optional: Cleanup function if needed when the component unmounts
    return () => {
      const meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
      if (meta && isSafari()) {
        meta.content = "width=device-width, initial-scale=1";
      }
    };
  }, []);

  return null; // This component does not render anything
};

export default HeadManager;
