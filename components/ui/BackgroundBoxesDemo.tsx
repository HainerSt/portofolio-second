"use client";
import React from "react";
import { Boxes } from "../ui/BackgroundBoxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg cursor-crosshair">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>I'm very flexible.</h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        I can easily adjust my schedule to align with different regions and ensure seamless collaboration.
      </p>
    </div>
  );
}
