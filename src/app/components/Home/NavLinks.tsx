"use client";
import React from "react";

const NavLinks: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 300); // 500ms delay
  };

  const links = [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];

  return (
    <ul
      id="links"
      role="navigation"
      aria-label="Main Navigation"
      className="font-prata uppercase opacity-0 text-[#1F2937]"
      style={{ fontFamily: "'Prata', serif" }}
    >
      {links.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            onClick={(e) => handleClick(e, href)}
            className="block cursor-pointer text-[14vw] md:text-[9vw] leading-[0.95em] transition-all duration-500 ease-out hover:translate-x-10 hover:-skew-x-12"
            aria-label={label}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
