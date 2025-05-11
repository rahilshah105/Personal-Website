// src/app/page.tsx
import React from "react";
import InfoHeader from "@/app/components/Home/InfoHeader";
import NavLinks from "@/app/components/Home/NavLinks";
import NewArticleModal from "@/app/components/Home/NewArticleModal";
import RahilShahAnimation from "./Textanimation";

interface Article {
  title: string;
  url: string;
}

interface PageProps {
  latestArticle?: Article;
}

const HomePage: React.FC<PageProps> = ({ latestArticle }) => {
  return (
    <main className="flex h-screen w-screen bg-[#a7b3e3] text-slate-900">
      {/* Left section */}
      <div className="w-1/2 flex items-end px-10 pb-12">
        <InfoHeader
          heading={<RahilShahAnimation />}
          role="Full-Stack Software Engineer"
          description="I'm a full-stack engineer focused on building fast, scalable web apps with clean code and great user experience—from React frontends to backend APIs and databases."
        />
      </div>

      {/* Right section */}
      <div className="w-1/2 flex items-center justify-end pr-10">
        <NavLinks />
      </div>

      {/* Modal in bottom-right */}
      {latestArticle && <NewArticleModal title={latestArticle.title} url={latestArticle.url} />}
    </main>
  );
};

export default HomePage;
