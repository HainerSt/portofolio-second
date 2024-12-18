"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaChevronDown } from "react-icons/fa";

const Hero = () => {
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowChevron(true);
      } else {
        setShowChevron(false);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className=" h-[90vh] relative mt-20 ">
        <div>
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
          <Spotlight className="top-28 left-80 md:-left-32 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div>
          <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          </div>
        </div>
        <div></div>
        <div className="h-[60vh] flex justify-center relative z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mt-36 ">
            <h1 className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-80 bg-[#000319] bg-opacity-50">
              Hainer Stefan&apos;s Portofolio.
            </h1>
            <TextGenerateEffect
              className="text-center  text-[40px] md:text-5xl lg:text-6xl lg:bg-[#000319] lg:bg-opacity-50 "
              words="Transforming Ideas into Experiences"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl bg-[#000319] bg-opacity-50">
              Hi! I&apos;m Stefan, a Frontend Developer based in Romania.{" "}
            </p>
            <a href="#projects">
              <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
            </a>
          </div>
        </div>

        <div
          className={`absolute -bottom-32 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 transition-opacity duration-500 ${
            showChevron ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={scrollToContent}
        >
          <FaChevronDown className="text-3xl text-blue-100 animate-bounce mb-32 pb-10" />
        </div>
      </div>{" "}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default Hero;
