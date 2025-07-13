// src/app/page.tsx
import React from "react";
import InfoHeader from "@/app/components/Home/InfoHeader";
import NavLinks from "@/app/components/Home/NavLinks";
import RahilShahAnimation from "./components/Home/Textanimation";
import TestimonialBox from "./components/Home/TestimonialBox";

const HomePage = () => {
  return (
    <main className="relative flex flex-col md:flex-row min-h-screen w-screen bg-[#a9def9] text-slate-900">
      {/* Left section */}
      <div className="w-full md:w-1/2 flex items-end px-6 md:px-10 pb-10 md:pb-12">
        <InfoHeader
          heading={<RahilShahAnimation key={Date.now()} />}
          role="Full-Stack Software Engineer"
          description="I'm a full-stack engineer focused on building fast, scalable web apps with clean code and great user experience—from React frontends to backend APIs and databases."
        />
      </div>

      {/* Right section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center px-14 pt-8 md:pt-0">
        <NavLinks />
        {/* Only stacked below on mobile */}
        <div className="block md:hidden w-full flex justify-center">
          <TestimonialBox />
        </div>
      </div>

      {/* Desktop absolute box */}
      <div className="hidden md:block">
        <TestimonialBox />
      </div>
    </main>
  );
};

export default HomePage;
