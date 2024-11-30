"use client";

import dynamic from "next/dynamic";
import React from "react";

// Importing critical components normally
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Hero from "@/components/Hero";

// Dynamically importing less critical components
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Page() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10">
      <div className="w-full max-w-full">
        {/* Essential components */}
        <FloatingNavbar navItems={navItems} />
        <Hero />

        {/* Dynamically loaded components */}
        <Grid />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
