"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close menu

export const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Default to true for initial visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the hamburger menu

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (current < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-10 inset-x-0 z-[5000] px-4 sm:px-6 lg:px-8",
          className
        )}
      >
        <div 
           className={cn(
            "mx-auto lg:max-w-md flex items-center justify-between rounded-md border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2 px-4 bg-transparent dark:bg-transparent lg:bg-white lg:bg-opacity-50 lg:dark:bg-slate-900 lg:dark:border-white/[0.2]" 
          )}
        >
          {/* Hamburger Menu - Positioned to the right for small screens */}
          <button
            className="lg:hidden ml-auto flex items-center justify-center text-neutral-600 dark:text-neutral-50 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Items for Large Screens - Centered */}
          <div className="hidden lg:flex justify-center w-full space-x-8">
  {navItems.map((navItem, idx: number) => (
    <Link
      key={`link=${idx}`}
      href={navItem.link}
      className="relative dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-base font-bold group"
    >
      <span>{navItem.name}</span>
      {/* Underline */}
      <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-neutral-50 transition-all duration-300 ease-in-out group-hover:w-full opacity-50 mt-1"></span>
    </Link>
  ))}
</div>

          {/* Dropdown Menu for Small Screens */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full right-0 bg-white dark:bg-slate-900 border border-neutral-200 dark:border-neutral-800 shadow-lg rounded-md p-4 z-50 lg:hidden"
              >
                <div className="flex flex-col space-y-2">
                  {navItems.map((navItem, idx: number) => (
                    <Link
                      key={`menu-link-${idx}`}
                      href={navItem.link}
                      className="relative dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-base font-bold"
                      onClick={() => setIsMenuOpen(false)} // Close menu on link click
                    >
                      {navItem.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
