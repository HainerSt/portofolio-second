/* eslint-disable @next/next/no-img-element */
import Image from "next/legacy/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { cn } from "@/lib/utils"; // Assuming cn is a utility function for conditionally combining classnames

interface Card3DProps {
  title: string;
  img: string;
  des: string;
  source: string;
  link: string;
  tech: string[];
}

export const Card3D: React.FC<Card3DProps> = ({ title, img, des, source, link, tech }) => {
  return (
    <CardContainer className="inter-var mx-auto w-full md:max-w-full lg:max-w-[95%] my-0 py-0 flex flex-col h-full ">
      <CardBody
        className={cn(
          " relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-full lg:w-[95%] rounded-xl sm:p-2 md:p-8 border sm:gap-2 md:gap-4 lg:gap-8 flex flex-col justify-between h-full "
        )}
      >
        {/* Title */}
        <CardItem
          translateZ={50}
          className="text-xl md:text-xl font-bold text-neutral-600 dark:text-white flex-grow justify-center items-center "
        >
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ={60}
          className="mt-2 text-xs md:text-sm text-neutral-500 lg:max-w-lg dark:text-neutral-300 flex-grow  max-h-[50px]"
        >
          {des}
        </CardItem>

        {/* Image */}
        <CardItem translateZ={90} className="w-full mt-4">
          <Image
            src={img}
            alt={title}
            height={1000}
            width={1400}
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>

        {/* Technology Icons (SVGs) */}
        <div className="flex justify-center items-center space-x-4 mt-4 ">
          {tech.map((iconUrl, index) => (
            <CardItem key={index} translateZ={70} className="w-8 h-8 flex-shrink-1">
              <Image
                src={iconUrl}
                alt={`Tech icon ${index + 1}`}
                width={30}
                height={30}
                className="w-full h-full object-contain"
              />
            </CardItem>
          ))}
        </div>

        {/* Links section */}
        <div className="w-full flex justify-center md:justify-between items-center mt-8 gap-4 mx-0 lg:mx-0 ">
  <CardItem
    translateZ={10}
    as="a"
    href={source}
    target="_blank"
    rel="noopener noreferrer"
    className="  px-4 py-2 rounded-xl text-s font-normal dark:text-white bg-transparent border-2 border-white "
  >
    Source
  </CardItem>
  <CardItem
    translateZ={10}
    as="a"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 rounded-xl dark:bg-white dark:text-black text-white text-s font-bold "
  >
    Live
  </CardItem>
</div>

      </CardBody>
    </CardContainer>
  );
};
