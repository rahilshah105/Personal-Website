"use client";

import Image from "next/image";
import SocialMedia from "@/app/components/Home/SocialMedia";
import PageReveal from "@/app/components/Home/PageReveal";

const topLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const services = [
  "Website design",
  "Website development",
  "Redesigns for outdated sites",
  "Mobile optimization",
  "Landing pages for local businesses",
  "Ongoing site updates",
];

export default function HomePage() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 250);
  };

  return (
    <main className="min-h-screen bg-[#1F2937] text-[#1F2937]">
      <PageReveal />

      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="flex-1">
          {/* HERO */}
          <section className="bg-[#d8ecff] px-8 py-4 sm:px-12 lg:min-h-[54vh]">
            <div className="mx-auto max-w-[1200px]">
              <div className="flex items-start justify-between gap-8">
                <p className="text-3xl font-light tracking-tight">Rahil Shah</p>

                {/* <nav className="hidden items-center gap-10 pt-2 md:flex">
                  {topLinks.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="block cursor-pointer text-[13px] uppercase tracking-[0.18em] text-[#1F2937] transition-all duration-500 ease-out hover:translate-x-2 hover:-skew-x-12"
                    >
                      {label}
                    </a>
                  ))}
                </nav> */}
              </div>

              <div className="mt-14 max-w-[720px]">
                <h1
                  className="max-w-[16ch] text-[clamp(3.6rem,3vw,5.8rem)] leading-[0.94] tracking-[-0.04em] text-[#1F2937]"
                  style={{ fontFamily: "'Prata', serif" }}
                >
                  I build websites for <br />
                  local service businesses.
                </h1>

                <p className="mt-6 max-w-[740px] text-[18px] leading-[1.65] text-[#344256]">
                  I design and develop websites that help local service businesses look more trustworthy and generate
                  more leads. Recently, I built a new site for Raptis Roofing, creating a more modern mobile-friendly
                  online presence focused on turning visitors into quote requests.
                </p>

                <div className="mt-8">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="bg-[#f7f8fc] px-8 py-10 sm:px-12 lg:min-h-[46vh]">
            <div className="mx-auto max-w-[1200px]">
              <h2
                className="mb-4 text-[clamp(1.5rem,2.5vw,4rem)] leading-none text-[#1F2937]"
                style={{ fontFamily: "'Prata', serif" }}
              >
                Projects
              </h2>

              <div className="rounded-[28px] border border-[#e4e9f1] bg-white/70 p-6 shadow-[0_12px_40px_rgba(31,41,55,0.05)] backdrop-blur-sm md:p-8">
                <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
                  {/* LEFT TEXT COLUMN */}
                  <div className="lg:pr-6">
                    <h3
                      className="text-[clamp(2.2rem,3.8vw,2.6rem)] leading-[0.92] text-[#1F2937]"
                      style={{ fontFamily: "'Prata', serif" }}
                    >
                      Raptis Roofing
                    </h3>

                    <p className="mt-4 text-[17px] leading-[1.65] text-[#4d5c71]">
                      Website redesign for a roofing company to improve trust, credibility, and increase quote requests.
                    </p>

                    <div className="mt-8 border-t border-[#1F2937] pt-8">
                      <h4
                        className="text-[clamp(1.9rem,2.8vw,2.6rem)] leading-none text-[#1F2937]"
                        style={{ fontFamily: "'Prata', serif" }}
                      >
                        Services
                      </h4>

                      <ul className="mt-5 space-y-1">
                        {services.map((service) => (
                          <li key={service} className="flex items-start gap-1 text-[17px] leading-[1.5] text-[#4d5c71]">
                            <span className="mt-[1px] text-[#1F2937]">✓</span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT VISUAL STAGE */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      {/* SCREENSHOTS STACK */}
                      <div className="relative min-h-[420px] flex-1 sm:min-h-[500px] lg:min-h-[680px]">
                        {/* back screenshot */}
                        <div className="absolute left-[24%] top-[30%] z-10 h-[240px] w-[75%] overflow-hidden rounded-[12px] shadow-[0_10px_30px_rgba(31,41,55,0.06)] flex items-center justify-center">
                          <Image
                            src="/raptis-homepage2.png"
                            alt="Raptis Roofing gallery preview"
                            width={1200}
                            height={700}
                            className="h-auto w-[125%] max-w-none"
                          />
                        </div>

                        {/* front screenshot */}
                        <div className="absolute left-0 top-0 w-[96%] overflow-hidden rounded-[12px] bg-white shadow-[0_18px_48px_rgba(31,41,55,0.10)]">
                          <Image
                            src="/raptis-homepage.png"
                            alt="Raptis Roofing homepage preview"
                            width={1400}
                            height={1500}
                            className="h-auto w-full object-cover"
                            priority
                          />
                        </div>
                      </div>

                      {/* TESTIMONIAL + BUTTON */}
                      <div className="z-20 hidden w-[240px] shrink-0 flex-col gap-4 pt-2 lg:flex xl:w-[270px]">
                        <div className="rounded-[18px] bg-[#1F2937] p-5 text-white shadow-[0_18px_45px_rgba(31,41,55,0.22)]">
                          <div className="z-20 flex items-center gap-3">
                            <Image
                              src="/profile.png"
                              alt="Nick Raptis"
                              width={44}
                              height={44}
                              className="rounded-full"
                            />
                            <div>
                              <p className="text-[14px] font-medium leading-none">Nick Raptis</p>
                              <p className="mt-1 text-[12px] text-white/75">Owner, Raptis Roofing</p>
                            </div>
                          </div>

                          <p className="mt-4 text-[14px] leading-[1.6] text-white/90">
                            "Working with Rahil on our new website was a game-changer. He completely transformed the
                            look and feel of our online presence, giving Raptis Roofing a professional and modern site
                            that has already driven more quote requests and business."
                          </p>

                          <a
                            href="/contact"
                            onClick={(e) => handleNavClick(e, "/contact")}
                            className="mt-4 inline-flex min-h-[56px] w-full items-center justify-center rounded-[16px] bg-white px-6 text-[16px] text-[#1F2937] shadow-[0_10px_25px_rgba(31,41,55,0.08)] transition hover:opacity-90"
                          >
                            Get In Touch
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Mobile testimonial + button */}
                    <div className="mt-6 flex flex-col gap-4 lg:hidden">
                      <div className="rounded-[18px] bg-[#1F2937] p-5 text-white shadow-[0_18px_45px_rgba(31,41,55,0.22)]">
                        <div className="flex items-center gap-3">
                          <Image src="/profile.png" alt="Nick Raptis" width={44} height={44} className="rounded-full" />
                          <div>
                            <p className="text-[14px] font-medium leading-none">Nick Raptis</p>
                            <p className="mt-1 text-[12px] text-white/75">Owner, Raptis Roofing</p>
                          </div>
                        </div>

                        <p className="mt-4 text-[14px] leading-[1.6] text-white/90">
                          "Working with Rahil on our new website was a game-changer. He completely transformed the look
                          and feel of our online presence, giving Raptis Roofing a professional and modern site that has
                          already driven more quote requests and business."
                        </p>
                      </div>

                      <a
                        href="/contact"
                        onClick={(e) => handleNavClick(e, "/contact")}
                        className="inline-flex min-h-[56px] w-full items-center justify-center rounded-[16px] bg-white px-6 text-[16px] text-[#1F2937] shadow-[0_10px_25px_rgba(31,41,55,0.08)] transition hover:opacity-90"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT RAIL */}
        <aside className="hidden w-[300px] shrink-0 bg-[#edf5ff] lg:flex">
          <div className="flex w-full items-start justify-center px-10 pt-28">
            <nav>
              {topLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="block cursor-pointer text-[56px] leading-[0.94] tracking-[-0.04em] text-[#1F2937] transition-all duration-500 ease-out hover:translate-x-2 hover:-skew-x-12"
                  style={{ fontFamily: "'Prata', serif" }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </main>
  );
}
