"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function ProjectPageClient() {
  useEffect(() => {
    // 1) hide everything off-screen/transparent
    gsap.set(["#header", "#subtitle", "#links", "#nav", "#pantone"], { opacity: 0, y: 20 });

    // 2) smoother timeline defaults
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 } });

    tl.to("#courtin", { scaleY: 0, duration: 1, ease: "power1.out", delay: 0.3 })
      .to("#header", { opacity: 1, y: 0 }, "-=0.5")
      .to("#subtitle", { opacity: 1, y: 0 }, "-=0.4")
      .to("#links", { opacity: 1, y: 0, stagger: 0.2 }, "-=0.3")
      .to("#nav", { opacity: 1, y: 0 }, "-=0.2")
      .to("#pantone", { opacity: 1, y: 0 }, "-=0.5");
  }, []); // ← fixed: use [] instead of null

  return (
    <div
      id="courtin"
      className="absolute inset-0 z-50 origin-bottom scale-y-100 bg-[#1F2937]"
      style={{ transformOrigin: "bottom" }}
    ></div>
  );
}
