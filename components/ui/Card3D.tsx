/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { cn } from "@/lib/utils"; // Assuming cn is a utility function for conditionally combining classnames

interface Card3DProps {
  title: string;
  img: string;
  des: string;
  source: string;
  link: string;
  tech: string[]
}

export const Card3D: React.FC<Card3DProps> = ({ title, img, des, source, link, tech }) => {
  return (
    <CardContainer className="inter-var mx-auto w-full max-w-[95%]">
      <CardBody
        className={cn(
          "relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] h-90 w-full sm:w-[95%] md:w-[95%] lg:w-[95%] h-auto rounded-xl p-8 border gap-4 lg:gap-8 flex flex-col justify-between"
        )}
      >
        {/* Title */}
        <CardItem translateZ={50} className="text-3xl font-bold text-neutral-600 dark:text-white flex-grow">
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-sm max-w-lg mt-2 dark:text-neutral-300 flex-grow truncate max-h-[50px] "
        >
          {des}
        </CardItem>

        {/* Image */}
        <CardItem translateZ={90} className="w-full mt-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image
              src={img}
              alt={title}
              height={1000}
              width={1000}
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </a>
        </CardItem>

        {/* Technology Icons (SVGs) */}
        <div className="flex justify-start items-center space-x-4 mt-4">
          {tech.map((iconUrl, index) => (
            <CardItem key={index} translateZ={70} className="w-8 h-8 flex-shrink-1">
              <img
                src={iconUrl}
                alt={`Tech icon ${index + 1}`}
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </CardItem>
          ))}
        </div>

        {/* Links section */}
        <div className="flex justify-between items-center mt-8 gap-4">
          <CardItem
            translateZ={10}
            as="a"
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-s font-normal dark:text-white bg-transparent border-2 border-white"
          >
            Source
          </CardItem>
          <CardItem
            translateZ={10}
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl dark:bg-white dark:text-black text-white text-s font-bold"
          >
            Live
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
