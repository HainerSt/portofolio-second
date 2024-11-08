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
}

export const Card3D: React.FC<Card3DProps> = ({ title, img, des, source, link }) => {
  return (
    <a key={title} href={link} target="_blank" rel="noopener noreferrer">
      <CardContainer className="inter-var mx-auto w-full">
        <CardBody
          className={cn(
            // MODIFY THIS
            "relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-500 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[90%] md:w-[90%] lg:w-[90%] h-auto rounded-xl p-6 border gap-4 lg:gap-8 flex flex-col justify-between"
          )}
        >
          {/* Title with perspective effect */}
          <CardItem translateZ={50} className="text-3xl font-bold text-neutral-600 dark:text-white">
            {title}
          </CardItem>

          {/* Description with a bit more depth */}
          <CardItem as="p" translateZ={60} className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {des}
          </CardItem>

          {/* Image */}
          <CardItem translateZ={90} className="w-full mt-4">
            <Image
              src={img}
              alt={title}
              height={1000}
              width={1000}
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>

          {/* Links section */}
          <div className="flex justify-between items-center mt-8 gap-4">
            <CardItem
              translateZ={10}
              as="a"
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              // MODIFY THIS
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-blue-500 bg-transparent border-2 border-red-700"
            >
              Source
            </CardItem>
            <CardItem
              translateZ={10}
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Live
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </a>
  );
};
