"use client";

import React, { useEffect } from "react";
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
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to("#courtin", {
      scaleY: 0,
      duration: 1,
      delay: 0.4,
      onComplete: () => {
        const curtain = document.getElementById("courtin");
        if (curtain) curtain.remove();
      },
    });

    document.body.style.backgroundColor = "#a9def9";

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
      <div id="courtin" className={styles.curtain}></div>

      <main className={styles.pageMain}>
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
