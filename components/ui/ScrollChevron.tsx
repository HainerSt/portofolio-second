import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa"; // You can use any other chevron icon

const ScrollChevron = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is at the top of the page
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isAtTop && (
      <div
        className="fixed bottom-32 left-1/2 transform -translate-x-1/2 cursor-pointer transition-opacity duration-500 ease-out z-50"
        style={{ opacity: isAtTop ? 1 : 0 }}
      >
        <FaChevronDown className="text-3xl text-gray-600 dark:text-gray-300 animate-bounce" />
      </div>
    )
  );
};

export default ScrollChevron;
