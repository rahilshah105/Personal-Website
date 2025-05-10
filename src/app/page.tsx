"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import RahilShahAnimation from "./Textanimation";

// ✅ Register plugins (all of these are free – no Club GSAP plugins used)
gsap.registerPlugin(ScrollTrigger, Draggable, TextPlugin, MotionPathPlugin);

/**
 * CrazyPortfolio – a single–page portfolio with tons of GSAP flair 🤘
 * Install deps:
 *   npm install gsap
 *   # or yarn add gsap
 * Tailwind is assumed to be set-up (see https://tailwindcss.com/docs/guides/nextjs).
 * Drop this as the root component (e.g. pages/index.js in Next.js or App.jsx in CRA).
 */

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function CrazyPortfolio() {
  // Refs for GSAP targets
  const heroRef = useRef(null);
  const marqueeRef = useRef(null);
  const cursorRef = useRef(null);
  const orbitRef = useRef(null);

  // Mouse-move parallax
  useEffect(() => {
    const hero = heroRef.current;
    const cursor = cursorRef.current;
    const orbit = orbitRef.current;

    // ✨ Intro timeline
    const introTl = gsap.timeline();
    introTl
      .from(".stagger", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1.2,
        ease: "back.out(1.7)",
      })
      .from(hero.querySelector(".cta"), { scale: 0.3, opacity: 0, ease: "elastic.out(1, 0.4)" }, "<");

    // 🔁 Horizontal marquee loop using MotionPathPlugin
    gsap.to(marqueeRef.current, {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "none",
    });

    // 🚀 Scroll-triggered section pin & reveal
    sections.forEach(({ id }) => {
      gsap.from(`#${id} .reveal`, {
        scrollTrigger: {
          trigger: `#${id}`,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    // 🛰️ Icon orbit animation (just for chaos!)
    gsap.to(orbit, {
      motionPath: {
        path: "#circlePath",
        align: "#circlePath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      repeat: -1,
      duration: 20,
      ease: "none",
    });

    // 🖱️ Draggable logo Easter-egg
    Draggable.create("#logo", {
      bounds: "body",
      inertia: true,
    });
  }, []);

  return (
    <>
      {/* 🔗 Sticky nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 bg-white/40 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex space-x-6">
        {sections.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className="font-semibold text-slate-800 hover:text-indigo-600 transition-colors">
            {label}
          </a>
        ))}
      </nav>

      {/* 🌠 HERO */}
      <header
        ref={heroRef}
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 via-purple-600 to-fuchsia-600 text-white"
      >
        <RahilShahAnimation />
        <p className="stagger mt-6 text-xl md:text-2xl text-center max-w-xl">
          Full-stack sorcerer crafting delightful web things with React, Next.js & GSAP.
        </p>
        <button className="cta mt-10 px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-xl hover:scale-105 transition-transform">
          Hire Me
        </button>
        {/* Marquee */}
        <div className="absolute bottom-10 overflow-hidden whitespace-nowrap w-full">
          <p ref={marqueeRef} className="text-4xl font-black uppercase tracking-widest opacity-20">
            ★ Creative • Developer • Designer • Dreamer ★ Creative • Developer • Designer • Dreamer ★
          </p>
        </div>
      </header>

      {/* 🧑‍💻 ABOUT */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center bg-white text-slate-900 px-6 md:px-0"
      >
        <h2 className="reveal text-5xl font-bold mb-4">About Me</h2>
        <p className="reveal max-w-2xl text-center text-lg">
          I'm a Michigan Wolverine building AI-powered finance tools by day and designing surreal interactive
          experiences by night. When I'm not coding, you'll find me on a hiking trail, chess board, or chasing the
          perfect cortado.
        </p>
        <img ref={orbitRef} src="./asdf.png" alt="React logo f" className="w-16 h-16 absolute" />
        <svg width="0" height="0">
          <path id="circlePath" d="M400,-75 A400,175 0 1,1 -400,-75 A400,175 0 1,1 400,-75" fill="none" />
        </svg>
      </section>

      {/* 🛠️ SKILLS */}
      <section id="skills" className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center">
        <h2 className="reveal text-5xl font-bold mb-8">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 text-lg font-medium">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Supabase",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
            "GSAP",
            "Figma",
          ].map((skill) => (
            <li key={skill} className="reveal">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* 📂 PROJECTS */}
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-br from-fuchsia-600 via-pink-600 to-rose-600 text-white flex flex-col justify-center items-center px-6 md:px-0"
      >
        <h2 className="reveal text-5xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          {[1, 2, 3, 4].map((n) => (
            <article
              key={n}
              className="reveal bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-3xl font-bold mb-2">Project {n}</h3>
              <p className="mb-4 text-base">
                A brief, exciting summary of what this project does and why it's awesome.
              </p>
              <a href="#" className="font-semibold underline">
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ✉️ CONTACT */}
      <footer
        id="contact"
        className="min-h-[50vh] bg-slate-800 text-white flex flex-col justify-center items-center space-y-6 px-6 md:px-0"
      >
        <h2 className="reveal text-5xl font-bold">Let's connect</h2>
        <a
          href="mailto:rahil@example.com"
          className="reveal px-8 py-4 bg-indigo-600 rounded-full font-bold hover:bg-indigo-500 transition-colors"
        >
          Send me an email
        </a>
        <p className="reveal text-sm opacity-60">© 2025 Rahil Shah</p>
      </footer>
    </>
  );
}
