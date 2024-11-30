
import React from "react";
import { Boxes } from "../ui/BackgroundBoxes";
import { cn } from "@/lib/utils";
import "../../app/globals.css";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full w-full overflow-hidden flex flex-col items-center justify-center rounded-lg cursor-crosshair hover-effect-parent">
      <div className="absolute inset-0 w-[200vw] h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 hover-trigger")}>
        I&apos;m very <span className="swirl-effect">flexible</span>.
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        I can easily adjust my schedule to align with different regions and ensure seamless collaboration.
      </p>
    </div>
  );
}
