import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, Sparkles, Code2, Brain, Rocket } from "lucide-react";
import { useEffect } from "react";
import profilePic from "../assests/profile1.png";
import { ProjectsSection } from "./projects";
import { SkillsSection } from "./skills";
import { BlogSection } from "./blog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vansh's Portfolio" },
      {
        name: "description",
        content:
          "Vansh Kumar — Full Stack MERN Developer, C++ programmer, and AI Enthusiast. Building CuraID, WanderLust and scalable real-world apps.",
      },
      { property: "og:title", content: "Vansh's Portfolio" },
      { property: "og:description", content: "Full Stack MERN Developer & AI Enthusiast." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) {
      return;
    }

    const target = document.getElementById(hash);
    if (!target) {
      return;
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-(image:--gradient-bold) opacity-30 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-accent opacity-20 blur-3xl animate-blob" />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-14 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:items-start md:pt-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              <Sparkles size={12} className="text-accent" /> Available for opportunities
            </div>

            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Hey, I'm <span className="text-gradient">Vansh Kumar</span>.{/* <br /> */}
              {/* I build the <span className="text-gradient">web</span> & ship <span className="text-gradient">AI</span>. */}
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              <span className="font-mono text-accent">{"< "}</span>
              MERN Stack Developer · C++ Developer · AI Enthusiast
              <span className="font-mono text-accent">{"/>"}</span>
              <br />
              Building MERN and AI-powered applications — including{" "}
              <span className="text-foreground">CuraID</span> and{" "}
              <span className="text-foreground">WanderLust</span> — with a focus on scalable systems
              and real-world solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", "#projects");
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-(image:--gradient-primary) px-6 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-glow) transition hover:opacity-90"
              >
                View Projects{" "}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="https://drive.google.com/file/d/1h5aC8eAgGh2BWz0jfxmF9UEgc-gzzHgN/view"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold transition hover:border-primary"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#blog"
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .getElementById("blog")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", "#blog");
                }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-16 grid grid-cols-4 gap-3 md:max-w-md">
              {[
                { k: "2+", v: "Years Hands-on Coding" },
                { k: "4+", v: "Projects built" },
                { k: "9+", v: "Certifications" },
                { k: "3+", v: "Hackathons" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-xl p-4">
                  <div className="text-2xl font-bold text-gradient">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:justify-self-end">
            <div className="pointer-events-none absolute -inset-4 rounded-4xl bg-(image:--gradient-bold) opacity-20 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-4xl border border-border/70 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.8)]">
              <img
                src={profilePic}
                alt="Sample profile photo"
                className="aspect-4/5 w-full object-cover rounded-2xl hover:scale-105 transition duration-300"
              />
            </div>
            <div className="absolute -bottom-5 left-5 glass rounded-2xl px-4 py-3 text-sm text-muted-foreground shadow-(--shadow-glow)">
              Open to full-time and freelance work.
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-hidden className="border-y border-border/40 bg-card/30 py-5 overflow-hidden">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "C++",
                "Tailwind",
                "Firebase",
                "TypeScript",
                "AI APIs",
                "DSA",
                "REST",
                "Git",
              ].map((t) => (
                <span key={t} className="flex items-center gap-3">
                  <span className="text-accent">◆</span> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent"> // about</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              A developer who <span className="text-gradient">obsesses</span> over solving real
              problems.
            </h2>
            <p className="mt-5 text-muted-foreground">
              I'm a Computer Science undergrad at G.L. Bajaj Institute of Technology and Management,
              focused on the MERN stack, C++, and applied AI. I love taking ideas from a Figma file
              or a hackathon napkin all the way to a deployed product — clean architecture, fast UI,
              and a backend that doesn't fall over.
            </p>
            <p className="mt-3 text-muted-foreground">
              When I'm not shipping, I'm grinding DSA on LeetCode or exploring how AI can plug into
              everyday workflows.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                icon: Code2,
                title: "Full Stack MERN",
                desc: "React, Node, Express, MongoDB — end to end.",
              },
              {
                icon: Brain,
                title: "AI Integration",
                desc: "Wiring NLP and AI APIs into product flows.",
              },
              {
                icon: Rocket,
                title: "Hackathon-tested",
                desc: "Real-time RFID + Firebase health-tech systems.",
              },
            ].map((c) => (
              <div key={c.title} className="glass rounded-2xl p-5 transition hover:border-primary">
                <c.icon className="text-accent" size={22} />
                <div className="mt-3 font-semibold">{c.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection />
      <SkillsSection />
      <BlogSection />

      {/* RESUME */}
      <section id="resume" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-10 md:p-14">
          <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-(image:--gradient-bold) opacity-30 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-3xl font-bold md:text-4xl">
                Want the full <span className="text-gradient">resume</span>?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Download the latest version or open the live PDF.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1h5aC8eAgGh2BWz0jfxmF9UEgc-gzzHgN/view"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-(image:--gradient-primary) px-6 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-glow)"
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
