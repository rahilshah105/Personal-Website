// src/app/components/Services/Page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Page.module.css";

const services = [
  {
    title: "Website Design",
    description: "Custom websites for local businesses that need a clean, modern, and trustworthy online presence.",
    href: "/contact",
    type: "image",
    media: "/Services/front.png",
  },
  {
    title: "Website Redesigns",
    description: "Redesign outdated websites to improve credibility, clarity, and the overall customer experience.",
    href: "/contact",
    type: "image",
    media: "/Services/compare.png",
  },
  {
    title: "Mobile Optimization",
    description:
      "Make sure your website looks polished and works smoothly on phones, where most local visitors first find you.",
    href: "/contact",
    type: "image",
    media: "/Services/mobile.png",
  },
  {
    title: "Lead-Focused Pages",
    description: "Create pages built around quote requests, contact forms, and clearer calls to action.",
    href: "/contact",
    type: "image",
    media: "/Services/lead.png",
  },
  // {
  //   title: "Service Business Websites",
  //   description:
  //     "Websites tailored for roofing companies and other local service businesses that rely on trust and clear communication.",
  //   href: "/contact",
  //   type: "image",
  //   media: "/Services/service-business.jpg",
  // },
  // {
  //   title: "Ongoing Website Updates",
  //   description: "Keep your site current with edits, new content, image updates, and small improvements over time.",
  //   href: "/contact",
  //   type: "image",
  //   media: "/Services/updates.jpg",
  // },
];

const Page: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  /* ───── mobile carousel state ───── */
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const handlePrev = () => setCurrentMobileIndex((i) => (i - 1 + services.length) % services.length);
  const handleNext = () => setCurrentMobileIndex((i) => (i + 1) % services.length);
  const current = services[currentMobileIndex];

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
            style={{
              position: "relative",
              width: "425px",
              height: "375px",
            }}
            className={styles.headerPreview}
          >
            {services.map((srv, index) =>
              srv.type === "video" ? (
                <video
                  key={index}
                  src={srv.media}
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
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "15px",
                    overflow: "hidden",
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    pointerEvents: "none",
                  }}
                >
                  <img
                    src={srv.media}
                    alt={srv.title}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ),
            )}
          </div>

          <div className="space-y-3">
            <h1 className="font-semibold text-4xl tracking-widest">Services</h1>
            <p className={styles.paragraph}>
              I design and build websites for roofing and local service businesses that want a stronger online presence,
              better credibility, and a clearer path to customer inquiries.
            </p>
          </div>
        </header>

        {/* ───────── desktop links list ───────── */}
        <section id="links" className={styles.linksSection}>
          <ul className="space-y-10" role="navigation">
            {services.map((srv, index) => (
              <li
                key={index}
                className="project-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
              >
                <a className={styles.link} href={srv.href}>
                  <h2 style={{ fontFamily: "'Prata', serif" }}>{srv.title}</h2>
                </a>
                <h3 className={styles.projectDescription}>{srv.description}</h3>
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
            <button onClick={handlePrev} aria-label="Previous service">
              ←
            </button>
            <button onClick={handleNext} aria-label="Next service">
              →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
