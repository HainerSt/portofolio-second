"use client";
import { useState, useEffect } from "react";

const ChevronDown: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    // Ensure this effect runs only on the client
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Set initial state (in case user starts not at the top)
    handleScroll();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      {isAtTop && (
        <div
          style={{
            cursor: "pointer",
            animation: "fade-in 0.5s ease, bounce 1.5s infinite",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="40px"
            height="40px"
          >
            <path
              fillRule="evenodd"
              d="M12 15.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 11.708-.708L12 15.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default ChevronDown;
