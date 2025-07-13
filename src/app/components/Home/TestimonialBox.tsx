"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./TestimonialBox.module.css";

const TestimonialBox = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={clsx(styles.container, visible ? styles.visible : styles.hidden)}>
      {/* header */}
      <div className="flex items-center gap-3">
        <Image src="/profile.png" alt="Nick Raptis" width={48} height={48} className="rounded-full" />
        <div>
          <p className="font-semibold text-white text-sm">Nick Raptis</p>
          <p className="text-xs text-gray-200">Owner, Raptis Roofing</p>
        </div>
      </div>

      {/* expanding testimonial */}
      <div className={styles.content}>
        <p>
          “Working with Rahil on our new website was a game-changer. He completely transformed the look and feel of our
          online presence, giving Raptis Roofing a modern, clean, and professional image that truly reflects the quality
          of our work. The site is not only stunning—it’s incredibly user-friendly and built to drive leads. Rahil
          understood our vision and executed it flawlessly. We're confident this new site will take our business to the
          next level. Highly recommend!”
        </p>
      </div>
    </div>
  );
};

export default TestimonialBox;
