"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RahilShahAnimation() {
  const textRef = useRef<HTMLSpanElement>(null);

  // encapsulate animation logic so it can be called on mount & pageshow
  const runAnimation = () => {
    const element = textRef.current;
    if (!element) return;

    // clear out any existing chars
    element.textContent = "";

    const originalText = "Rahil Shah";
    const chars = originalText.split("").map((char) => {
      const span = document.createElement("span");
      span.className = "char inline-block";
      span.innerHTML = char === " " ? "&nbsp;" : char;
      return span;
    });
    chars.forEach((span) => element.appendChild(span));

    gsap.from(element.querySelectorAll(".char"), {
      delay: 0.8,
      opacity: 0,
      y: 30,
      duration: 1.4,
      ease: "power2.out",
      stagger: 0.1,
    });
  };

  useEffect(() => {
    // run on initial mount
    runAnimation();

    // re-run when Safari restores from bfcache
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        runAnimation();
      }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => {
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return (
    <span
      ref={textRef}
      className="inline-block max-w-[90%] text-4xl md:text-5xl font-normal text-left leading-tight break-words"
      style={{ color: "#1F2937", wordBreak: "break-word", overflowWrap: "break-word" }}
    >
      Rahil Shah
    </span>
  );
}
