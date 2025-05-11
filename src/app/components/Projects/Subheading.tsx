// Subheading.tsx
import React from "react";
import ProjectTechStackCard from "./ProjectTechStackCard";

interface Project {
  excerpt: string;
  techStack: any[];
}

interface Props {
  project: Project;
}

const Subheading: React.FC<Props> = ({ project }) => {
  const { excerpt, techStack } = project;

  return (
    <div>
      <h2
        id="subtitle"
        className="my-10 max-w-screen-lg px-5 font-prata text-[7vw] opacity-0 md:p-0 md:text-[3vw] md:leading-[4rem]"
      >
        {excerpt}
      </h2>
      <ul
        role="presentation"
        className="flex flex-col items-start justify-between gap-3 px-5 md:flex-row md:gap-5 md:px-10"
      >
        {techStack.map((tech, index) => (
          <ProjectTechStackCard key={index} techStack={tech} />
        ))}
      </ul>
    </div>
  );
};

export default Subheading;
