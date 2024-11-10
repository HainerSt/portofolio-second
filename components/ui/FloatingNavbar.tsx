"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

  // Set initial visibility to true so it shows when entering the page
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      // Show the navbar when at the top of the page (scroll is at 0)
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        // Show navbar when scrolling up, hide when scrolling down
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex items-center max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-2 space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500 group"
            )}
          >
            <span className="text-md px-2 py-1">{navItem.name}</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-px bg-gradient-to-r from-transparent dark:via-white to-transparent h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
