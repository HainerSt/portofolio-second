// FloatingNavbar.tsx
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FloatingNavbarClient } from "./FloatingNavbarClient";

export const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-2 py-2 md:px-6 md:py-4 md:space-x-4",
        className
      )}
      style={{
        backgroundColor: "rgb(4,10,51)",
        background:
          "linear-gradient(0deg, rgba(4,10,51,1) 0%, rgba(11,9,59,1) 59%, rgba(11,7,46,1) 84%, rgba(18,10,61,1)",
      }}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link-${idx}`}
          href={navItem.link}
          className="relative flex items-center text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500 group"
        >
          <span className="text-sm md:text-lg px-2 py-1">{navItem.name}</span>
        </Link>
      ))}
      {/* Client-side dynamic logic */}
      <FloatingNavbarClient />
    </div>
  );
};
