"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function RahilShahAnimation() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const originalText = "Rahil Shah"; // safer to hardcode here since we'll be replacing content anyway
    element.textContent = "";

    // Split into individual characters, preserving spaces
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
  }, []);

  return (
    <span
      ref={textRef}
      className="inline-block max-w-[90%] text-4xl md:text-6xl font-extrabold text-left leading-tight break-words"
      style={{ color: "#0a0a0a", wordBreak: "break-word", overflowWrap: "break-word" }}
    >
      Rahil Shah
    </span>
  );
}
