"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

import SocialMedia from "./SocialMedia";
import styles from "./InfoHeader.module.css";

interface InfoHeaderProps {
  heading: React.ReactNode;
  role: string;
  description: string;
}

const InfoHeader: React.FC<InfoHeaderProps> = ({ heading, role, description }) => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to("#courtin", { scaleY: 0, duration: 0.6, delay: 0.3 })
      .to("#info", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to("#links", { opacity: 1, stagger: 0.2, duration: 0.8 }, "-=0.2")
      .to("#nav", { opacity: 1, duration: 0.4 }, "-=0.3")
      .to("#modal", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .to("#pantone", { opacity: 1, y: 0, duration: 0.6 }, "-=0.5");
  }, []);

  return (
    <>
      <div
        id="courtin"
        className="absolute inset-0 z-50 origin-bottom scale-y-100 bg-[#1F2937]"
        style={{ transformOrigin: "bottom" }}
      ></div>

      <header id="info" className={styles.infoHeader}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.role}>{role}</p>
        <p className={styles.description}>{description}</p>

        <SocialMedia />
      </header>
    </>
  );
};

export default InfoHeader;
