import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register the TextPlugin for animated text effects
gsap.registerPlugin(TextPlugin);

/**
 * RahilShahAnimation – a standalone component that renders
 * a "Rahil Shah" heading with a wild, looping GSAP text animation.
 */
export default function RahilShahAnimation() {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    // Split text into individual span-wrapped characters
    const chars = element.textContent.split("").map((char) => {
      return `<span class='char inline-block'>${char}</span>`;
    });
    element.innerHTML = chars.join("");

    const charEls = element.querySelectorAll(".char");

    // Build a timeline that loops infinitely, yoyos, and pauses between cycles
    const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });

    // Animate characters from random positions, scales, and rotations
    tl.from(charEls, {
      opacity: 0,
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-200, 200),
      rotation: () => gsap.utils.random(-360, 360),
      scale: 0,
      duration: 2.0,
      ease: "elastic.out(1, 0.5)",
      stagger: 0.12,
    })
      // Color-pulse effect
      .to(
        charEls,
        {
          color: "#F472B6", // Tailwind pink-400 (will inherit via CSS)
          duration: 0.5,
          stagger: 0.05,
        },
        0.5
      )
      // Return to original color
      .to(
        charEls,
        {
          color: "#FFFFFF",
          duration: 1.5,
          stagger: 0.05,
        },
        1
      );
  }, []);

  return (
    <h1 ref={textRef} className="text-8xl md:text-8xl font-extrabold text-center text-white">
      Rahil Shah
    </h1>
  );
}
