"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./about.module.css";

const About: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#1f2937";
    // document.body.style.overflow = "hidden";

    if (mainRef.current) {
      gsap.fromTo(mainRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" });
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Aside nav */}

      <nav className={styles.mobileNavbar}>
        <a href="/">Home</a>
      </nav>

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

      {/* Main about content */}
      <main className={styles.main} ref={mainRef} style={{ opacity: 0 }}>
        <div className={styles.info} id="info">
          <h1 className={styles.heading}>About</h1>
          <h2 className={styles.description}>
            I’m Rahil Shah, a web designer and developer focused on helping roofing and local service businesses build a
            stronger online presence. I create modern, mobile-friendly websites that look more credible, communicate
            services clearly, and turn more visitors into leads.
          </h2>

          <p className={styles.paragraph}>
            With a background in business and technology, I approach each project with both design and results in mind.
            My goal is to build websites that not only look good, but also help businesses grow.
          </p>

          {/* <p className={styles.item}>
            <a
              href="/Resume/Rahil Shah Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline-animation-reverse"
            >
              Download Resume
            </a>
          </p> */}
          <p className={styles.item}>
            <a href="/contact" className="hover-underline-animation-reverse">
              Contact Me
            </a>
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img src="/main.png" alt="Rahil Shah full-body" className={styles.fullImage} loading="lazy" />
        </div>
      </main>
    </div>
  );
};

export default About;
