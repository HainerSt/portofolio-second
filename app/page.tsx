"use client";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React from "react";

export default function Home() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden  sm:px-10 ">
      <div className="w-full max-w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
