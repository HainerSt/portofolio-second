"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { BackgroundBoxesDemo } from "./BackgroundBoxesDemo";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn("gap-4 lg:gap-8 mx-auto grid md:grid-row-7 grid-cols-1 md:grid-cols-6 lg:grid-cols-5  ", className)}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hainer.stefan@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "pb-20 relative row-span-1 rounded-2xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white  justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        backgroundColor: "rgb(4,10,51)",
        background:
          "linear-gradient(0deg, rgba(4,10,51,1) 0%, rgba(11,9,59,1) 59%, rgba(11,7,46,1) 84%, rgba(18,10,61,1)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center "} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={img} alt={img} className={cn(imgClassName, "object-cover, object-center")} />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={spareImg} alt={spareImg} className="object-cover, object-center w-full h-full" />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 group-hover/bento:translate-x-2 transition duration-200"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d4] text-sm dark:text-neutral-300 md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <BackgroundBoxesDemo/>}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 ">
              <div className="flex flex-col gap-3 lg:gap-8 animate-verticalScroll md:pl-0">
                {["HTML", "CSS", "JAVASCRIPT"].map((it) => (
                  <span
                    key={it}
                    className="py-2 lg:py-4  lg:px-3 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10232E] mr-1"
                  >
                    {it}
                  </span>
                ))}
                <span className="py-5 px-3 rounded-lg text-center bg-[#10232E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8 animate-verticalScroll">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10232E]" />
                {["TYPESCRIPT", "REACT", "Next.js"].map((it) => (
                  <span
                    key={it}
                    className="py-5 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10232E] mr-3"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* id 6 here...with magic click link mail...     */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="dynamic absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my mail"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
