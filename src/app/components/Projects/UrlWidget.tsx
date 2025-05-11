import React from "react";

interface UrlWidgetProps {
  project: {
    mainColor: string;
    secondaryColor: string;
    repoLink: string;
    liveLink: string;
  };
}

const UrlWidget: React.FC<UrlWidgetProps> = ({ project }) => {
  const { mainColor, secondaryColor, repoLink, liveLink } = project;
  return (
    <div
      id="widget"
      className="fixed bottom-7 right-7 space-y-2 p-3 text-left opacity-0 transition-opacity duration-150 md:bottom-10 md:right-10 md:p-5"
      style={{ backgroundColor: mainColor, color: secondaryColor }}
    >
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover-underline-animation-widget text-sm md:text-base"
      >
        CODE
      </a>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover-underline-animation-widget text-sm md:text-base"
      >
        LIVE
      </a>
    </div>
  );
};

export default UrlWidget;
