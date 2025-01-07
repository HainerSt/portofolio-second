// FloatingNavbarClient.tsx
"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";

export const FloatingNavbarClient = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const direction = current - scrollYProgress.getPrevious()!;
    if (scrollYProgress.get() < 0.05) {
      setVisible(true);
    } else {
      setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Additional dynamic UI */}
      </motion.div>
    </AnimatePresence>
  );
};
