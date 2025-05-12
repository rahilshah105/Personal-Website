// src/app/components/Home/Page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Page.module.css";

const projects = [
  {
    title: "Truvestor",
    description: "AI-powered investing dashboard for sentiment analysis, portfolio tracking, and smart notifications.",
    href: "/en/projects/truvestor",
    type: "video",
    media: "/videos/truvestor.mp4",
  },
  {
    title: "Son Of a Tailor",
    description:
      "Custom-made e-commerce platform for fitted clothing, offering a seamless sizing and ordering experience.",
    href: "/en/projects/son-of-a-tailor",
    type: "video",
    media: "/videos/sonofatailor.mp4",
  },
  {
    title: "Enigma",
    description: "Headless WooCommerce frontend built with Next.js, optimized for performance and flexibility.",
    href: "/en/projects/enigma",
    type: "video",
    media: "/videos/enigma.mp4",
  },
  {
    title: "AI-Video Bot",
    description:
      "Automated video content generation tool using AI scripts and voice synthesis for short-form video platforms.",
    href: "/en/projects/ai-video-bot",
    type: "video",
    media: "/videos/youtube.mp4",
  },
  {
    title: "Sports Arbitrage",
    description:
      "Real-time sports arbitrage calculator and alert system for bettors to capitalize on odds differences.",
    href: "/en/projects/sports-arbitrage",
    type: "image",
    media: "/videos/sports.png",
  },
];

const Page: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /* ───── mobile carousel state ───── */
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const handlePrev = () => setCurrentMobileIndex((i) => (i - 1 + projects.length) % projects.length);
  const handleNext = () => setCurrentMobileIndex((i) => (i + 1) % projects.length);

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
    return () => document.removeEventListener("wheel", onWheel);
  }, []);

  const current = projects[currentMobileIndex];

  return (
    <div className={styles.wrapper}>
      {/* ───────── mobile navbar ───────── */}
      <nav className={styles.mobileNavbar}>
        <a href="/">Home</a>
      </nav>

      {/* ───────── desktop aside nav ───────── */}
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

      {/* ───────── main content ───────── */}
      <main ref={mainRef} className={styles.pageMain} style={{ opacity: 0 }}>
        {/* header (title & intro) */}
        <header className={styles.header}>
          <div
            className={styles.headerPreview}
            style={{
              position: "relative",
              width: "600px",
              height: "600px",
            }}
          >
            {projects.map((project, index) =>
              project.type === "video" ? (
                <video
                  key={index}
                  src={project.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "25px",
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    pointerEvents: "none",
                  }}
                />
              ) : (
                <img
                  key={index}
                  src={project.media}
                  alt={project.title}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "25px",
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    pointerEvents: "none",
                  }}
                />
              )
            )}
          </div>

          <div className="space-y-3">
            <h1 className="font-semibold text-4xl tracking-widest">Projects</h1>
            <p className={styles.paragraph}>
              Explore a compilation of my finest endeavors spanning Web Design and Development. In a dynamic digital
              landscape, my role has transformed over the past 3&nbsp;years, adapting to the ever-evolving realms of
              design and development. I remain committed to continuous learning, consistently acquiring new skills to
              stay at the forefront of innovation.
            </p>
          </div>
        </header>

        {/* ───────── desktop links list ───────── */}
        <section id="links" className={styles.linksSection}>
          <ul className="space-y-10" role="navigation">
            {projects.map((project, index) => (
              <li
                key={index}
                className="project-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a className={styles.link} href={project.href}>
                  <h2 style={{ fontFamily: "'Prata', serif" }}>{project.title}</h2>
                </a>
                <h3 className={styles.projectDescription}>{project.description}</h3>
              </li>
            ))}
          </ul>
        </section>

        {/* ───────── mobile carousel ───────── */}
        <section className={styles.mobileCarousel}>
          <a href={current.href}>
            {current.type === "video" ? (
              <video src={current.media} autoPlay muted loop playsInline controls={false} />
            ) : (
              <img src={current.media} alt={current.title} />
            )}
          </a>

          <h2 className={styles.mobileProjectTitle}>{current.title}</h2>
          <p className={styles.mobileProjectDesc}>{current.description}</p>

          <div className={styles.carouselControls}>
            <button onClick={handlePrev} aria-label="Previous project">
              ←
            </button>
            <button onClick={handleNext} aria-label="Next project">
              →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
