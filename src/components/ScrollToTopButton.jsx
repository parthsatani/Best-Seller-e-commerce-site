import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This function checks the scroll position
    const handleScroll = () => {
      // Show the button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll); // Add event listener for scroll
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  // Only render the button if it's visible
  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-5 bg-gradient-to-r from-[#3D1900] to-[#B01052] text-white px-4 py-4 rounded-full shadow-md transition duration-300 hover:scale-105"
      >
        ↑ Top
      </button>
    )
  );
};

export default ScrollToTopButton;
