import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data/index";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ className, id, title, description, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            key={id}
            className={className}
            id={id}
            title={title}
            description={description}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
