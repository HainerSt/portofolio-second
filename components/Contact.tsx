import React from "react";
import { AnimatedDock } from "./ui/SocialDock";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SlideModal } from "./ui/SlideModal";

const Contact = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wide uppercase">
          Let<span className="text-purple">&apos;</span>s Connect
        </h2>
        <p className="text-sm md:text-lg lg:text-xl mb-10">
          I&apos;m always excited to chat about new opportunities! Feel free to reach out through any platform below.
        </p>
        <SlideModal />
        <p className="mt-12 text-xs md:text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Hainer Stefan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
