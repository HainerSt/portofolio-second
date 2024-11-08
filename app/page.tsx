import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full max-w-7xl">
        <FloatingNavbar
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
          ]}
        />
        <Hero />
        <Grid />
          <Projects />
      </div>
    </main>
  );
}
