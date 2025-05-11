"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Page.module.css";

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
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#a9def9";

    if (mainRef.current) {
      gsap.fromTo(mainRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" });
    }

    const scrollTarget = document.querySelector(`.${styles.linksSection}`);
    const onWheel = (e: WheelEvent) => {
      if (scrollTarget) {
        scrollTarget.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    document.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Aside nav */}
      <aside
        className="items-center h-full bottom-0 fixed flex-col hidden justify-between left-0 md:flex px-10 top-0 w-10 z-50"
        id="nav"
        style={{ color: "#a9def9" }}
      >
        <div className="flex items-center text-sm h-full md:-rotate-90 md:space-x-10 space-x-5 2xl:pl-32 justify-center pl-12">
          <hr
            className="md:w-20 w-10"
            style={{
              borderColor: "#a9def9",
            }}
          />
          <a className="hover-underline-animation-reverse" href="/">
            Home
          </a>
        </div>
        <div className="flex items-center text-sm h-full md:-rotate-90 md:space-x-10 space-x-5 pointer-events-none pr-32"></div>
      </aside>

      {/* Main content */}
      <main className={styles.pageMain} ref={mainRef} style={{ opacity: 0 }}>
        <header className={styles.header}>
          <img
            alt="Rahil Shah"
            className={styles.profileImage}
            src="/aa.webp"
            height={400}
            width={400}
            loading="eager"
          />
          <div className="space-y-3">
            <h1 className="font-semibold text-4xl tracking-widest">Projects</h1>
            <p className={styles.paragraph}>
              Explore a compilation of my finest endeavors spanning Web Design and Development. In a dynamic digital
              landscape, my role has transformed over the past 3 years, adapting to the ever-evolving realms of design
              and development. I remain committed to continuous learning, consistently acquiring new skills to stay at
              the forefront of innovation.
            </p>
          </div>
        </header>

        <section id="links" className={styles.linksSection}>
          <ul className="space-y-10" role="navigation">
            {projects.map((project, index) => (
              <li className="project-item" data-image={project.image} key={index}>
                <a className={styles.link} href={project.href}>
                  <h2 style={{ fontFamily: "'Prata', serif" }}>{project.title}</h2>
                </a>
                <h3 className={styles.projectDescription}>{project.description}</h3>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Page;
