// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";

type Tech = { name: string; description: string; link: string };
type Testimonial = { quote: string; author: string };

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  headerBgColor: string;
  tech: Tech[];
  showcaseImage: string;
  contentHtml: string;
  styleImage: string;
  testimonial: Testimonial;
  codeLink: string;
  liveLink: string;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug) as Project | undefined;
  if (!project) notFound();

  return (
    <div className="bg-[#a9def9] text-[#1f2937] overflow-x-hidden relative">
      {/* ───────── mobile navbar ───────── */}
      <nav className="bg-[#a9def9] text-[#1f2937] text-sm flex items-center gap-5 h-14 justify-between md:hidden px-10 z-50">
        <a href="/">Home</a>
      </nav>

      {/* ───────── desktop aside nav ───────── */}
      <aside
        className="bg-[#a9def9] text-[#1f2937] items-center h-full bottom-0 fixed flex-col hidden justify-between left-0 md:flex px-10 top-0 w-10 z-50"
        id="nav"
        style={{ color: "#1f2937" }}
      >
        <div className="flex items-center text-sm h-full md:-rotate-90 md:space-x-10 space-x-5 2xl:pl-32 justify-center pl-12">
          <hr
            className="md:w-20 w-10"
            style={{
              borderColor: "#1f2937",
            }}
          />
          <a className="hover-underline-animation-reverse" href="/">
            Home
          </a>
        </div>
        <div className="flex items-center text-sm h-full md:-rotate-90 md:space-x-10 space-x-5 pointer-events-none pr-32"></div>
      </aside>

      {/* ───────── inner mobile “Projects” nav ───────── */}
      <aside className="bg-[#a9def9] text-[#1f2937] text-sm flex items-center gap-5 h-14 justify-between md:hidden px-10 z-50">
        <button id="theme-toggle" className="cursor-pointer hover-underline-animation">
          <span id="theme-original" className="hidden">
            Original
          </span>
          <span id="theme-pantone">Pantone</span>
        </button>
        <hr className="flex-1 border-foreground" />
        <a href="/projects" className="hover-underline-animation-reverse">
          Projects
        </a>
      </aside>

      {/* ───────── main content ───────── */}
      <main className="flex flex-col items-center justify-center gap-10 md:gap-20 md:my-10 md:px-24 w-screen relative bg-[#a9def9] text-[#1f2937]">
        {/* Header */}
        <section
          id="header"
          className="flex justify-center items-end h-[70vh] w-full overflow-hidden text-center"
          style={{ backgroundColor: project.headerBgColor }}
        >
          <h1 id="title" className="font-prata text-[11vw] text-white uppercase z-20">
            {project.title}
          </h1>
        </section>

        {/* Subtitle */}
        <h2
          id="subtitle"
          className="font-prata max-w-screen-lg md:leading-[4rem] md:text-[3vw] my-10 px-5 text-[7vw] text-center"
        >
          {project.subtitle}
        </h2>

        {/* Tech List */}
        <ul className="flex flex-col gap-3 md:flex-row md:gap-5 md:px-10 px-5 w-full">
          {project.tech.map((t) => (
            <li key={t.name} className="flex-1 space-y-2">
              <h3 className="font-bold md:text-lg">{t.name}</h3>
              <p className="text-sm md:text-base">{t.description}</p>
              <a className="text-sm font-bold hover-underline-animation" href={t.link} target="_blank" rel="noreferrer">
                Más Info
              </a>
            </li>
          ))}
        </ul>

        {/* Showcase */}
        <img src={project.showcaseImage} alt={`${project.title} Showcase`} className="w-full max-w-screen-lg" />

        {/* Content */}
        <section id="content" className="custom-prose max-w-screen-lg">
          <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
        </section>

        {/* Style Image */}
        <img src={project.styleImage} alt={`${project.title} Style`} className="my-10 max-w-screen-md" />

        {/* Testimonial */}
        <section id="testimonial" className="md:leading-tight pb-12 text-center w-full max-w-screen-lg">
          <h2 className="font-prata text-[3vw]">“{project.testimonial.quote}”</h2>
          <p className="text-[2vw] mt-4">{project.testimonial.author}</p>
        </section>
      </main>
    </div>
  );
}
