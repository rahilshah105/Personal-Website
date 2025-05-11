"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Contact.module.css";

const contactItems = [
  {
    label: "Email",
    subLabel: "superrahil10@gmail.com",
    link: "mailto:superrahil10@gmail.com",
  },
  {
    label: "Phone",
    subLabel: "+34 647 31 72 14",
    link: "tel:+34647317214",
  },
  {
    label: "GitHub",
    subLabel: "github.com/AdrianAlvarezAlonso",
    link: "https://github.com/N4N1T0",
  },
];

const Contact: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#1f2937"; // match contact background

    if (mainRef.current) {
      gsap.fromTo(mainRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" });
    }
  }, []);

  return (
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
              href="/en/Adrian_Alvarez_Alonso_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline-animation-reverse"
            >
              Download CV
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
