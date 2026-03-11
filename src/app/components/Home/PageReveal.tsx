"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function PageReveal() {
  useEffect(() => {
    gsap.to("#page-reveal", {
      scaleY: 0,
      duration: 0.7,
      delay: 0.2,
      ease: "power2.out",
      transformOrigin: "bottom",
    });
  }, []);

  return (
    <div
      id="page-reveal"
      className="pointer-events-none fixed inset-0 z-[9999] bg-[#1F2937]"
      style={{ transformOrigin: "bottom" }}
    />
  );
}
