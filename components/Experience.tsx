/* eslint-disable @next/next/no-img-element */
"use client";
import { experience } from "@/data";
import React, { useState } from "react";
import { Button } from "./ui/MovingBorder";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/legacy/image";

type ExperienceItem = {
  id: number;
  title: string;
  company?: string;
  organisation?: string;
  des: string[];
  className?: string;
  thumbnail: string;
  link?: string;
  img?: string;
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null); // Specify type
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (experience: ExperienceItem) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedExperience(null);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto mb-20 py-10 px-5" id="experience">
      <h1 className="heading mb-10">
        My e<span className="text-purple">xp</span>erience
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-stretch">
        {experience.map((e) => (
          <Button
            key={e.id}
            duration={10000}
            borderRadius="1.30rem"
            className="w-full text-white border border-neutral-200"
            onClick={() => (e.id === 1 ? window.open("http://www.bngtracking.ro", "_blank") : openModal(e))}
          >
            <div className="grid grid-cols-[auto,1fr] gap-4 p-5 w-full items-center">
              <Image
                src={e.thumbnail}
                alt={e.title}
                className="object-contain w-10 flex align-top items-start lg:w-full pr-4"
                layout="responsive"
                width={16}
                height={9}
              />
              <div className="w-full">
                <h1 className="text-start text-xl md:text-2xl font-bold">{e.title}</h1>
                <h2 className="text-start text-md md:text-lg font-bold text-neutral-400 dark:text-neutral-300">
                  {e.company ? e.company : e.organisation}
                </h2>
                <div className="mt-2 text-xs md:text-sm text-neutral-300">
                  {e.des.map((s, index) => (
                    <p key={index} className="text-start py-1">
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {isModalOpen && selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div className="p-5 rounded-lg w-[80vw] max-w-[1000px] h-auto" onClick={(e) => e.stopPropagation()}>
            <button
              className="text-neutral-600 dark:text-neutral-300 text-sm float-right translate-x-10"
              onClick={closeModal}
            >
              <IoIosCloseCircleOutline className="w-10 h-10 bg-black-100 rounded-full" />
            </button>
            <div className="text-center w-full">
              <Image
                src={selectedExperience.img || "/placeholder.jpg"}
                alt={selectedExperience.title}
                className="rounded-md"
                layout="responsive"
                width={16}
                height={9}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
