// src/components/SocialMedia.tsx
import React from "react";

const socialMedia = [
  {
    href: "https://github.com/N4N1T0",
    src: "/svg/github.svg",
    label: "GitHub",
  },
  {
    href: "https://stackoverflow.com/users/23143125/n4n1t0",
    src: "/svg/stackoverflow.svg",
    label: "Stack Overflow",
  },
  {
    href: "https://x.com/AdrianlvarezAl1",
    src: "/svg/x.svg",
    label: "X (Twitter)",
  },
  {
    href: "https://dev.to/n4n1t0",
    src: "/svg/devto.svg",
    label: "Dev.to",
  },
  {
    href: "https://www.instagram.com/adrian_alvarez_dev/",
    src: "/svg/instagram.svg",
    label: "Instagram",
  },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="w-fit">
      <hr className="border-px my-3 w-full border-foreground" />
      <ul className="mt-5 flex gap-5 px-2">
        {socialMedia.map(({ href, label, src }) => (
          <li key={href} className="list-none" title={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <img
                src={src}
                alt={label}
                className="h-6 w-6 transition-transform duration-150 ease-out group-hover:scale-110"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
