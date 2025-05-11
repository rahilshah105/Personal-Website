// ProjectTechStackCard.tsx
import React from "react";

interface Props {
  techStack: any;
}

const ProjectTechStackCard: React.FC<Props> = ({ techStack }) => {
  const { link, title, info } = techStack;
  return (
    <li className="flex-1 space-y-2">
      <h3 className="font-bold md:text-lg">{title}</h3>
      <p className="text-sm md:text-base">{info}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover-underline-animation text-sm font-bold">
        More Info
      </a>
    </li>
  );
};

export default ProjectTechStackCard;
