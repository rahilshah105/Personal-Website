"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "Termogar",
    description:
      "High-end e-commerce platform for aerothermal product sales, built and powered with these technologies:",
    href: "/en/projects/termogar",
    image: "/_astro/termogar-showcase.uV47bryf.webp",
  },
  {
    title: "Lola Barcelona",
    description:
      "Ecommerce store for modern beauty and cosmetic products, created to enhance the user experience and built with the following technologies:",
    href: "/en/projects/lola-barcelona",
    image: "/_astro/vupf7r5l8wq60gzssvobyp885nf4.BK8ABJmf.webp",
  },
  {
    title: "Backswing",
    description:
      "Headless Woocommerce for selling paddle items, using Next.js as the application base and these technologies:",
    href: "/en/projects/backswing",
    image: "/_astro/backswing-showcase.xVYVfs-T.webp",
  },
  {
    title: "Lavanda del Lago",
    description: "Ecommerce for selling lavender and natural products, created and powered by these technologies:",
    href: "/en/projects/lavanda-del-lago",
    image: "/_astro/lavanda-del-lago-showcase.BbotMfc8.webp",
  },
  {
    title: "Striking Gold",
    description:
      "Sports blog powered by AI, using Davinci LLM to fine-tune the voice of articles with on-site editing technologies and also:",
    href: "/en/projects/striking-gold",
    image: "/_astro/striking-gold-showcase.Da9F4-3x.webp",
  },
  {
    title: "Tough",
    description:
      "Eye-catching sports equipment e-commerce site, inspired by the Everlast website and built with these technologies:",
    href: "/en/projects/tough",
    image: "/_astro/tough-showcase.2P4GnwoK.webp",
  },
  {
    title: "Nano Fighters Club",
    description:
      "Combat Sports Trainer site using Astro's new technologies to create maximum performance combined with:",
    href: "/en/projects/nano-fighters-club",
    image: "/_astro/nano-fighters-club-showcase.kJVVnM7q.webp",
  },
];

const Page = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to("#courtin", {
      scaleY: 0,
      duration: 1,
      delay: 0.4,
    });

    document.body.style.backgroundColor = "#a9def9";
  }, []);

  return (
    <div
      className="overflow-x-hidden relative text-[#a9def9] bg-[#1F2937]"
      style={{ transition: "background-color 1s ease 1s" }}
    >
      {/* Animated Curtain */}
      <div
        id="courtin"
        className="absolute inset-0 z-50 origin-bottom scale-y-100 bg-[#1F2937]"
        style={{ transformOrigin: "bottom" }}
      ></div>

      <main
        id="page-main"
        className="flex items-center px-10 relative text-[#a9def9] flex-col gap-10 justify-around md:flex-row md:gap-32 md:mt-0 md:px-24 mt-10 w-screen z-10"
      >
        <header
          id="info"
          className="flex flex-col z-10 3xl:bottom-20 bottom-10 flex-1 max-w-[650px] opacity-100 self-end sticky"
          style={{ transform: "translateY(0px)" }}
        >
          <img
            alt="Adrian Alvarez Alonso"
            className="opacity-100 hidden aspect-square fade-in md:block object-cover p-10 w-full"
            src="/_astro/Placeholder-Original.D3ETx0y8.webp"
            height={400}
            width={400}
            loading="eager"
          />
          <div className="space-y-3">
            <h1 className="font-semibold text-4xl tracking-widest">Projects</h1>
            <p className="text-sm">
              Explore a compilation of my finest endeavors spanning Web Design and Development. In a dynamic digital
              landscape, my role has transformed over the past 3 years, adapting to the ever-evolving realms of design
              and development. I remain committed to continuous learning, consistently acquiring new skills to stay at
              the forefront of innovation.
            </p>
          </div>
        </header>

        <section
          id="links"
          className="opacity-100 flex-1 font-prata md:py-16 text-balance"
          style={{ transform: "translateY(50px)" }}
        >
          <ul className="space-y-10" role="navigation">
            {projects.map((project, index) => (
              <li className="project-item" data-image={project.image} key={index}>
                <a
                  className="block duration-500 ease-out hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] md:text-[7vw] text-[12vw] transition-all uppercase"
                  href={project.href}
                >
                  <h2 style={{ fontFamily: "'Prata', serif" }}>{project.title}</h2>
                </a>
                <h3 className="font-sans inline md:text-base pl-5 text-xs">{project.description}</h3>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Page;
