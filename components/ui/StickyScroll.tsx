
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content?: React.ReactNode | any;
    organisation?: string;
    des?: string[];
    link?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // Uncomment line 22 and comment line 23 if you DON'T want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["var(--slate-900)", "var(--black)", "var(--neutral-900)"];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] mt-12 w-full overflow-y-auto  flex justify-center relative space-x-10 rounded-md p-10 
      
        [&::-webkit-scrollbar]:w-0
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500

      "
      ref={ref}
    >
      <div className="relative flex items-start px-4  ">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                }}
                className="text-xl text-slate-300 mt-2"
              >
                <span className="font-semibold">{item.organisation}</span>
              </motion.p>
              <motion.ul
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                }}
                className="list-disc text-lg text-slate-300 my-8 list-outside"
              >
                {item.des && (
                  <motion.ul
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.2,
                    }}
                    className="list-disc text-lg text-slate-300 my-8 list-outside"
                  >
                    {item.des.map((point, i) => (
                      <li key={i} className="py-1">
                        {point}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </motion.ul>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn("hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden", contentClassName)}
        onMouseEnter={() => {
          window.open(content[activeCard].link, "_blank");
        }}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
