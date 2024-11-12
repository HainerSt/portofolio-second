/* eslint-disable @next/next/no-img-element */
import { experience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <div className="py-20 " id="experience">
      <h1 className="heading">
        My e<span className="text-purple">xp</span>erience
      </h1>
      <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-stretch">
        {experience.map((e) => (
          <Button
            key={e.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.30rem"
            className="w-full text-white border border-neutral-200 dark:border-white-200"
          >
            {/* Adjusted child container to grid layout */}
            <div className="grid grid-cols-[auto,1fr] gap-4 p-5 w-full items-center">
              {/* Image and text content set in grid */}
              <img src={e.thumbnail} alt={e.title} className="object-contain" />
              <div className="w-full">
                <h1 className="text-start text-xl md:text-2xl font-bold">{e.title}</h1>
                <h2 className="text-start text-md md:text-lg font-bold text-neutral-400 dark:text-neutral-300">
                  {e.company ? e.company : e.organisation}
                </h2>
                <div className="mt-2 text-xs md:text-sm text-neutral-300">
                  {e.des?.map((s, index) => (
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
    </div>
  );
};

export default Experience;
