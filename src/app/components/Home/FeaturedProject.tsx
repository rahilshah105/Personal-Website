import React from "react";
import Link from "next/link";

const FeaturedProject: React.FC = () => {
  return (
    <section
      id="pantone"
      className="rounded-[28px] border border-[#d7e0ea] bg-white/80 p-6 opacity-0 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-md md:p-8"
    >
      <p className="mb-3 text-[0.72rem] uppercase tracking-[0.18em] text-slate-500">Featured project</p>

      <h2 className="text-3xl text-[#1F2937] md:text-4xl" style={{ fontFamily: "'Prata', serif" }}>
        Raptis Roofing
      </h2>

      <p className="mt-4 max-w-[54ch] text-[0.98rem] leading-7 text-slate-600">
        Website redesign for a roofing company focused on stronger credibility, a cleaner mobile experience, and a
        clearer path to customer inquiries.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Roofing", "Lead-focused", "Mobile-first", "Local business"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#d7e0ea] bg-[#f8fbff] px-3 py-1 text-sm text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center rounded-full bg-[#1F2937] px-5 py-3 text-sm text-white transition hover:opacity-90"
        >
          View case study
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-[#d7e0ea] bg-white px-5 py-3 text-sm text-[#1F2937] transition hover:bg-[#f8fbff]"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProject;
