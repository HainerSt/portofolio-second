/* eslint-disable @next/next/no-img-element */
import { personalprojects } from "@/data/index";
import { Card3D } from "./ui/Card3D";

const Projects = () => {
  return (
    <div className="lg:max-w-7xl mx-auto mb-20 py-10 px-5 " id="projects">
      <h1 className="heading mb-10 ">My Projects</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 content-center justify-items-stretch ">
        {personalprojects.map(({ id, title, img, des, source, link, tech }) => (
          <Card3D key={id} title={title} img={img} des={des} source={source} link={link} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
