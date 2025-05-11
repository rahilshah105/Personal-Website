// src/components/SocialMedia.tsx
import React from "react";

const socialMedia = [
  {
    href: "https://github.com/rahilshah105",
    src: "/svg/github.svg",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/rahil-shah300/",
    src: "/svg/linkedin.svg",
    label: "Linkedin",
  },
  {
    href: "https://www.thetruvestor.com",
    src: "/svg/logo.png",
    label: "Logo",
  },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="w-fit">
      <hr className="border-px my-3 w-full border-background" />
      <ul className="mt-5 flex gap-5 px-2">
        {socialMedia.map(({ href, label, src }) => (
          <li key={href} className="list-none" title={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <img
                src={src}
                alt={label}
                className={`transition-transform duration-150 ease-out group-hover:scale-110 ${
                  label === "Logo" ? "h-6 rounded-sm" : "h-6 w-6"
                }`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
