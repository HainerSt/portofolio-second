"use client";
import { FaChevronDown } from "react-icons/fa";
import React, { useState, useEffect, useCallback } from "react";

const Chevron: React.FC = () => {
  const [showChevron, setShowChevron] = useState(true);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleScroll = useCallback(() => {
    setShowChevron(window.scrollY === 0);
  }, []);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`absolute -bottom-32 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 transition-opacity duration-500 ${
        showChevron ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToContent}
    >
      <FaChevronDown className="text-3xl text-blue-100 animate-bounce mb-32 pb-10" />
    </div>
  );
};

// Generic debounce function with TypeScript support
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default Chevron;
