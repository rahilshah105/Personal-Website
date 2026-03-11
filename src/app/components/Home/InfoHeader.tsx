"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

import SocialMedia from "./SocialMedia";
import styles from "./InfoHeader.module.css";

interface InfoHeaderProps {
  role: string;
  description: string;
}

const InfoHeader: React.FC<InfoHeaderProps> = ({ role, description }) => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to("#courtin", { scaleY: 0, duration: 0.6, delay: 0.3 })
      .to("#info", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to("#links", { opacity: 1, duration: 0.8 }, "-=0.2")
      .to("#modal", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .to("#pantone", { opacity: 1, y: 0, duration: 0.6 }, "-=0.5");
  }, []);

  return (
    <>
      <div
        id="courtin"
        className="absolute inset-0 z-50 origin-bottom scale-y-100 bg-[#1F2937]"
        style={{ transformOrigin: "bottom" }}
      />

      <header id="info" className={styles.infoHeader}>
        <p className={styles.eyebrow}>Roofing + local business websites</p>

        <h1 className={styles.heading}>
          Websites built to make service businesses look trustworthy and convert better.
        </h1>

        <p className={styles.role}>{role}</p>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <Link href="/projects" className={styles.primaryButton}>
            View projects
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Get in touch
          </Link>
        </div>

        <SocialMedia />
      </header>
    </>
  );
};

export default InfoHeader;
