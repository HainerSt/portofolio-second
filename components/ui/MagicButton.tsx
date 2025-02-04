"use client";
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="w-full  justify-center relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] 
               md:w-60 md:mt-20 transition-all duration-200 ease-in-out mx-auto align-center"
      onClick={handleClick}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                     bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center 
                  rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white 
                  backdrop-blur-xl gap-2 ${otherClasses} 
                  md:text-base md:py-2 lg:py-3`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
