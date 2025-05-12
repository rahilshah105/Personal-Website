// src/app/page.tsx
import React from "react";
import InfoHeader from "@/app/components/Home/InfoHeader";
import NavLinks from "@/app/components/Home/NavLinks";
import RahilShahAnimation from "./components/Home/Textanimation";

const HomePage = () => {
  return (
    <main className="flex flex-col md:flex-row min-h-screen w-screen bg-[#a9def9] text-slate-900">
      {/* Left section */}
      <div className="w-full md:w-1/2 flex items-end md:items-end px-6 md:px-10 pb-10 md:pb-12">
        <InfoHeader
          heading={<RahilShahAnimation key={Date.now()} />}
          role="Full-Stack Software Engineer"
          description="I'm a full-stack engineer focused on building fast, scalable web apps with clean code and great user experience—from React frontends to backend APIs and databases."
        />
      </div>

      {/* Right section */}
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end px-14 pt-8 md:pt-0">
        <NavLinks />
      </div>
    </main>
  );
};

export default HomePage;
