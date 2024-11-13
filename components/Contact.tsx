import React from "react";
import { AnimatedDock } from "./ui/SocialDock";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="w-full pt-20 pb-20" id="contact">
      <h1 className="heading">Contact</h1>
      <main>
        <AnimatedDock
          className="inter-var mx-auto w-36 max-w-44"
          items={[
            {
              link: "https://github.com/HainerSt",
              target: "_blank",
              Icon: <FaGithub size={22} />,
            },
            {
              link: "https://www.linkedin.com/in/hainerstefan/",
              target: "_blank",
              Icon: <FaLinkedin size={22} />,
            },
          ]}
        />
      </main>
    </footer>
  );
};

export default Contact;
