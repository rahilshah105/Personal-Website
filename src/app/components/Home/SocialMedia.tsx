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
    label: "LinkedIn",
  },
  {
    href: "https://www.thetruvestor.com",
    src: "/svg/logo.png",
    label: "Truvestor",
  },
];

const SocialMedia: React.FC = () => {
  return (
    <ul className="flex gap-5">
      {socialMedia.map(({ href, label, src }) => (
        <li key={href} className="list-none" title={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" className="group">
            <img
              src={src}
              alt={label}
              className={`transition-transform duration-150 ease-out group-hover:scale-110 ${
                label === "Truvestor" ? "h-8 rounded-sm" : "h-8 w-8"
              }`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
