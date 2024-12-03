"use client";

import React, { useEffect, useState, useRef,  useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FractalDotGridProps {
  dotSize?: number;
  dotSpacing?: number;
  enableNoise?: boolean;
  noiseOpacity?: number;
  enableMouseGlow?: boolean;
  initialPerformance?: "low" | "medium" | "high";
}

const NoiseSVG: React.FC = React.memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
));

NoiseSVG.displayName = "NoiseSVG";

const NoiseOverlay: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div className="absolute inset-0 h-auto w-full mix-blend-overlay" style={{ opacity }}>
    <NoiseSVG />
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: windowSize.width < 768,
    isTablet: windowSize.width >= 768 && windowSize.width < 1024,
    isDesktop: windowSize.width >= 1024,
  };
};

const usePerformance = (initialPerformance: "low" | "medium" | "high" = "medium") => {
  const [performance, setPerformance] = useState(initialPerformance);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = window.performance.now();
    let framerId: number;

    const measureFps = (time: number) => {
      frameCount++;
      if (time - lastTime > 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }
      framerId = requestAnimationFrame(measureFps);
    };

    framerId = requestAnimationFrame(measureFps);

    return () => cancelAnimationFrame(framerId);
  }, []);

  useEffect(() => {
    if (fps < 30 && performance !== "low") {
      setPerformance("low");
    } else if (fps >= 30 && fps < 50 && performance !== "medium") {
      setPerformance("medium");
    } else if (fps >= 50 && performance !== "high") {
      setPerformance("high");
    }
  }, [fps, performance]);

  return { performance, fps };
};

const FractalDotGrid: React.FC<FractalDotGridProps> = ({
  enableNoise = true,
  noiseOpacity = 0.03,
  enableMouseGlow = true,
  initialPerformance = "medium",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { performance } = usePerformance(initialPerformance);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = containerRef.current?.getBoundingClientRect() ?? {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 overflow-hidden w-full h-full"
      >
        {enableNoise && <NoiseOverlay opacity={noiseOpacity} />}
        {enableMouseGlow && (
          <div
            className="absolute w-40 h-40 rounded-full pointer-events-none"
            style={{
              left: `${mousePos.x * 100}%`,
              top: `${mousePos.y * 100}%`,
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default FractalDotGrid;
