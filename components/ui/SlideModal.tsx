"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const profilelinks = [
  {
    id: 1,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/hainerstefan/",
    Icon: <FaLinkedin size={24} />,
  },
  {
    id: 2,
    title: "GitHub",
    link: "https://github.com/HainerSt",
  },
  {
    id: 3,
    title: "Gmail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=hainer.stefan@gmail.com",
  },
];

export function SlideModal() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row gap-12 lg:gap-8 ">
        {profilelinks.map((profile) => (
          <a
            key={profile.id}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-black dark:bg-white dark:text-black text-white flex items-center justify-center group hover:no-underline w-20 h-20 lg:w-24 lg:h-24 overflow-hidden sm:rounded-md lg:rounded-full shadow-md"
          >
            {/* Title */}
            <motion.span className="absolute inset-0 flex items-center justify-center text-center transition-transform duration-500 group-hover:translate-x-40 font-bold">
              {profile.title}
            </motion.span>

            {/* SVG Icon */}
            <motion.div className="absolute inset-0 -translate-x-40 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0 font-bold">
              {profile.id === 1 && <FaLinkedin size={24} />}
              {profile.id === 2 && <FaGithub size={24} />}
              {profile.id === 3 && <FaEnvelope size={24} />}
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}
