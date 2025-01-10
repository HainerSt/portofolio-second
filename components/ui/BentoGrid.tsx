import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import Image from "next/legacy/image";
import { CopyStatusButton } from "./CopyStatusButton";
import { Boxes } from "./BackgroundBoxes";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn("gap-4 lg:gap-8 mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 auto-rows-min", className)}
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
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-2xl overflow-hidden group/bento hover:shadow-xl transition duration-75 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white  justify-between flex flex-col space-y-4 border border-white/[0.1] md:col-span-3 md:row-span-2 lg:col-span-2",
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
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
              width={16}
              height={9}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            // eslint-disable-next-line @next/next/no-img-element
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover, object-center w-full h-full"
              width={16}
              height={9}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 text-white font-bold pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName, "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10  transition ")}>
          <div className="font-sans font-extralight text-[#c1c2d4]  dark:text-neutral-300  text-xs md:text-lg lg:text-base z-10 bg-red inline-block px-2 py-1 rounded">
            {description}
          </div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96 z-10 px-2 py-1 text-lg ">
            {title}
          </div>

          {id === 2 && (
            <div className="h-40 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
              <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
              <Boxes />

              <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                {" "}
                I&apos;m very <span className="swirl-effect">flexible</span>.
              </h1>
              <p className="text-center mt-2 text-neutral-300 relative z-20">
                I can easily adjust my schedule to align with different regions and ensure seamless collaboration.
              </p>
            </div>
          )}
          {id === 3 && (
            <>
              <div className="flex absolute -right-28 lg:right-0 top-0 w-fit  object-scale-down  ">
                <OrbitingCirclesDemo />
              </div>
              <div className=" text-3xl  ">
                <ul className="z-50 backdrop-blur-xl sm:text-sm md:text-base lg:text-3xl  inline-block px-2 py-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Next.JS</li>
                </ul>
              </div>
            </>
          )}
          {id === 6 && (
            <div id="firstdiv" className="mt-5 relative flex justify-center align-center">
              <CopyStatusButton buttonColor="black" initialText="Copy Mail" changeText="Mail Copied" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
