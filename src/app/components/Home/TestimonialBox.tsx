"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./TestimonialBox.module.css";

const TestimonialBox = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={clsx(styles.container, visible ? styles.visible : styles.hidden)}>
      <p className={styles.kicker}>Client feedback</p>

      <div className="flex items-center gap-3">
        <Image src="/profile.png" alt="Nick Raptis" width={48} height={48} className="rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold text-[#1F2937]">Nick Raptis</p>
          <p className="text-xs text-slate-500">Owner, Raptis Roofing</p>
        </div>
      </div>

      <div className={styles.content}>
        <p>
          “Working with Rahil on our new website was a game-changer. He completely transformed the look and feel of our
          online presence, giving Raptis Roofing a modern, clean, and professional image that truly reflects the quality
          of our work.”
        </p>
      </div>
    </div>
  );
};

export default TestimonialBox;
