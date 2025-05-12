// src/app/components/Contact/Contact.tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Contact.module.css";

const contactItems = [
  {
    label: "Email",
    subLabel: "superrahil10@gmail.com",
    link: "mailto:superrahil10@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Rahil%2C%0A%0AI%20came%20across%20your%20portfolio%20and...",
  },
  {
    label: "LinkedIn",
    subLabel: "linkedin.com/in/rahil-shah300",
    link: "https://www.linkedin.com/in/rahil-shah300/",
  },
];

const Contact: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#1f2937";

    if (mainRef.current) {
      gsap.fromTo(mainRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* ───────── mobile top-center Home button ───────── */}
      <nav className={styles.mobileNavbar}>
        <a href="/">Home</a>
      </nav>

      {/* ───────── desktop aside nav (unchanged) ───────── */}
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

      {/* ───────── main contact content ───────── */}
      <main className={styles.main} ref={mainRef} style={{ opacity: 0 }}>
        <div className={styles.info} id="info">
          <h1 className={styles.heading}>Contact</h1>
          <h2 className={styles.description}>
            If you'd like to work with me or just have a chat, you can reach me here:
          </h2>

          <div className={styles.items}>
            {contactItems.map(({ label, link, subLabel }) => (
              <p className={styles.item} key={label}>
                {label}:{" "}
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover-underline-animation-reverse">
                  {subLabel}
                </a>
              </p>
            ))}

            <p className={styles.item}>
              <a
                href="/Resume/Rahil Shah Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline-animation-reverse"
              >
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
