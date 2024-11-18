import React from "react";
import { SlideModal } from "./ui/SlideModal";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Contact = () => {
  const words =
    "I'm always excited to chat about new opportunities! Feel free to reach out through any platform below.";
  return (
    <footer
      className="w-[screen] static flex flex-col justify-center items-center text-center bg-gradient-to-b text-white py-20 rounded-lg"
      style={{
        backgroundColor: "rgb(4,10,51)",
        background:
          "linear-gradient(0deg, rgba(4,10,51,1) 0%, rgba(11,9,59,1) 59%, rgba(11,7,46,1) 84%, rgba(18,10,61,1))",
      }}
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wide uppercase">
          Let<span className="text-purple">&apos;</span>s Connect
        </h2>

        <TextGenerateEffect words={words} className="text-sm md:text-lg lg:text-xl mb-6" />
        <SlideModal />
        <p className="mt-12 text-xs md:text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Hainer Stefan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
