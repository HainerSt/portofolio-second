/* eslint-disable @next/next/no-img-element */
import { personalprojects } from "@/data/index";
import { Card3D } from "./ui/Card3D";

const Projects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">My Projects</h1>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {personalprojects.map(({ id, title, img, des, source, link }) => (
          <Card3D key={id} title={title} img={img} des={des} source={source} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
