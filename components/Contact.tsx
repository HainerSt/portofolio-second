"use client";
import React from "react";
import { SlideModal } from "./ui/SlideModal";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import FractalDotGrid from "./ui/FractalDotGridProps";

const Contact = () => {
  const words =
    "I'm always excited to chat about new opportunities! Feel free to reach out through any platform below.";
  return (
    <footer
      className="w-full h-full static flex flex-col justify-center items-center text-center bg-gradient-to-b text-white  rounded-lg"
      id="contact"
    >
      <div className="w-full h-full relative z-30 mx-auto">
        <FractalDotGrid
          dotSize={7}
          dotSpacing={12}
          dotOpacity={0.3}
          waveIntensity={1}
          waveRadius={0}
          dotColor="rgba(100, 100, 255, 1)"
          glowColor="rgba(100, 100, 255, 1)"
          enableNoise={false}
          noiseOpacity={0.01}
          enableMouseGlow={true}
          initialPerformance="medium"
        />

        <div className="max-w-7xl md:pt-10 md:mt-10 mx-auto px-4 text-center z-50">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase  bg-[#000319] select-none w-auto mx-auto inline-block px-5 pt-10">
            Let<span className="text-purple">&apos;</span>s Connect
          </h2>

          <TextGenerateEffect
            words={words}
            className="text-sm md:text-md lg:text-xl px-5 mb-10 bg-[#000319] select-none w-auto mx-auto inline-block my-5 lg:my-10"
          />
          <SlideModal />
          <p className="text-xs md:text-sm text-gray-400 bg-[#000319] select-none w-auto mx-auto inline-block  mt-10 mb-10">
            &copy; 2024 Hainer Stefan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
