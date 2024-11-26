/* eslint-disable @next/next/no-img-element */
import { personalprojects } from "@/data/index";
import { Card3D } from "./ui/Card3D";

const Projects = () => {
  return (
    <div className=" max-w-7xl mx-auto mb-20 py-10 px-5 " id="projects">
      <h1 className="heading mb-10">My Projects</h1>
      <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8  content-center">
        {personalprojects.map(({ id, title, img, des, source, link, tech }) => (
          <Card3D key={id} title={title} img={img} des={des} source={source} link={link} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
