import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import ChevronDown from "./ui/ChevronDown";


const Hero = () => {
  return (
    <>
      <div className=" h-[95vh] relative mt-30 select-none ">
        <div>
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
          <Spotlight className="top-28 left-80 md:-left-32 h-[80vh] w-[80vw]" fill="blue" />
        </div>

        <div>
          <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          </div>
        </div>
        <div className="h-[95vh] relative flex items-center justify-center z-10">
  <div
    id="plm"
    className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"
  >
    <h1 className="sm:text-xl md:text-2xl lg:text-7xl">Hainer Stefan&apos;s Portofolio</h1>
    <p className="text-center md:tracking-wider mt-8 text-sm md:text-lg lg:text-2xl bg-[#000319] bg-opacity-50">
      Hi! I&apos;m a developer based in Timișoara, Romania.{" "}
    </p>
    <a href="#projects" draggable="false">
      <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
    </a>
  </div>
</div>

      </div>
      <ChevronDown />
    </>
  );
};

export default Hero;
