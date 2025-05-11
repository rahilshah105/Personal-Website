// src/components/NavLinks.tsx
import React from "react";

const NavLinks: React.FC = () => {
  return (
    <ul
      id="links"
      role="navigation"
      aria-label="Main Navigation"
      className="font-prata uppercase opacity-0"
      style={{ fontFamily: "'Prata', serif" }}
    >
      <li className="[&>a]:block [&>a]:cursor-pointer [&>a]:text-[14vw] md:[&>a]:text-[9vw]">
        <a
          href="/projects"
          className="leading-[0.95em] transition-all duration-500 ease-out hover:translate-x-10 hover:-skew-x-12"
          aria-label="Projects"
        >
          Projects
        </a>
      </li>
      <li className="[&>a]:block [&>a]:cursor-pointer [&>a]:text-[14vw] md:[&>a]:text-[9vw]">
        <a
          href="/services"
          className="leading-[0.95em] transition-all duration-500 ease-out hover:translate-x-10 hover:-skew-x-12"
          aria-label="Services"
        >
          Services
        </a>
      </li>
      <li className="[&>a]:block [&>a]:cursor-pointer [&>a]:text-[14vw] md:[&>a]:text-[9vw]">
        <a
          href="/contact"
          className="leading-[0.95em] transition-all duration-500 ease-out hover:translate-x-10 hover:-skew-x-12"
          aria-label="Contact"
        >
          Contact
        </a>
      </li>
      <li className="[&>a]:block [&>a]:cursor-pointer [&>a]:text-[14vw] md:[&>a]:text-[9vw]">
        <a
          href="/about"
          className="leading-[0.95em] transition-all duration-500 ease-out hover:translate-x-10 hover:-skew-x-12"
          aria-label="About"
        >
          About
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
