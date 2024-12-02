"use client";

import React, { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FractalDotGridProps {
  /** Size of each dot in pixels */
  dotSize?: number;
  /** Spacing between dots in pixels */
  dotSpacing?: number;
  /** Opacity of dots (0-1) */
  dotOpacity?: number;
  /** Intensity of the wave effect when hovering */
  waveIntensity?: number;
  /** Radius of the wave effect in pixels */
  waveRadius?: number;
  /** Color of the dots (supports any valid CSS color) */
  dotColor?: string;
  /** Color of the dot glow effect (supports any valid CSS color) */
  glowColor?: string;
  /** Enable or disable the noise overlay */
  enableNoise?: boolean;
  /** Opacity of the noise overlay (0-1) */
  noiseOpacity?: number;
  /** Enable or disable the mouse glow effect */
  enableMouseGlow?: boolean;
  /** Set the initial performance level */
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
    let lastTime = window.performance.now(); // Ensure `performance.now()` is correctly typed
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
  }, [fps]);

  return { performance, fps };
};

const FractalDotGrid: React.FC<FractalDotGridProps> = ({
  dotSize = 4,
  dotSpacing = 20,
  dotOpacity = 0.3,
  waveIntensity = 30,
  waveRadius = 200,
  dotColor = "rgba(100, 100, 255, 1)",
  glowColor = "rgba(100, 100, 255, 1)",
  enableNoise = true,
  noiseOpacity = 0.03,
  enableMouseGlow = true,
  initialPerformance = "medium",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet } = useResponsive();
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

  const responsiveDotSize = useMemo(() => {
    if (isMobile) return dotSize * 0.75;
    if (isTablet) return dotSize * 0.9;
    return dotSize;
  }, [isMobile, isTablet, dotSize]);

  const responsiveDotSpacing = useMemo(() => {
    if (isMobile) return dotSpacing * 1.5;
    if (isTablet) return dotSpacing * 1.25;
    return dotSpacing;
  }, [isMobile, isTablet, dotSpacing]);

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        key="fractal-dot-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 overflow-hidden w-full h-full"
      >
        {/* DotCanvas component implementation */}
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
