"use client";

import { AnimatePresence, motion } from "framer-motion"; // Make sure you're using the correct import for motion
import React, { useState, useEffect } from "react";

interface CopyStatusButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
}

export const CopyStatusButton: React.FC<CopyStatusButtonProps> = ({
  buttonColor,
  buttonTextColor,
  changeText,
  initialText,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    // Copy to clipboard
    navigator.clipboard.writeText("hainer.stefan@gmail.com").then(() => {
      setCopied(true); // Set copied to true when successfully copied to clipboard
    });
  };

  // Reset text to initialText after 5 seconds
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false); // Reset the text after 5 seconds
      }, 5000);
      return () => clearTimeout(timeout); // Cleanup timeout on unmount or when copied changes
    }
  }, [copied]);

  return (
    <AnimatePresence mode="wait">
      {copied ? (
        <motion.button
          className="relative flex h-10 w-[200px] items-center justify-center overflow-hidden rounded-md bg-white outline outline-1 outline-black"
          onClick={handleCopy} // Trigger copy on click
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative flex h-full w-full items-center justify-center font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex h-10 w-[200px] cursor-pointer items-center justify-center rounded-md border-none"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={handleCopy} // Trigger copy on click
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative flex items-center justify-center font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
