"use client";
import React from "react";
import { SlideModal } from "./ui/SlideModal";
const Contact = () => {
  return (
    <footer
      className="w-full h-full  flex-col j text-center  text-white  rounded-lg
       dark:bg-[#000319] bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"
      id="contact"
    >
      <div className="w-full h-full relative z-30 mx-auto">
        <div className="max-w-7xl md:pt-10 md:mt-10 mx-auto px-4 text-center z-50">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase  bg-[#000319] select-none w-auto mx-auto inline-block px-5 ">
            Let<span className="text-purple">&apos;</span>s Connect
          </h2>
          {/* className="text-sm md:text-md lg:text-md px-5 mb-10 bg-[#000319] select-none w-auto mx-auto inline-block my-5
          lg:my-10" */}

          <SlideModal />
          <p className="text-xs md:text-sm text-gray-400 bg-[#000319] select-none w-auto mx-auto inline-block  mt-10 mb-4">
            &copy; 2024 Hainer Stefan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
