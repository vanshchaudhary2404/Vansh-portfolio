import { createFileRoute } from "@tanstack/react-router";
import { Github, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Vansh's Portfolio" },
      {
        name: "description",
        content:
          "Selected work by Vansh Kumar — CuraID health-tech, WanderLust MERN platform, AI assistants and realtime collaboration tools.",
      },
      { property: "og:title", content: "Vansh's Portfolio" },
      { property: "og:description", content: "MERN, C++ and AI projects by Vansh Kumar." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "CuraID",
    tag: "Health-tech",
    desc: "RFID-based patient identification platform integrating Firebase and AI modules for real-time medical data handling and triage workflows.",
    stack: ["React", "Firebase", "Node.js", "RFID", "AI"],
    accent: "from-pink-500 to-violet-500",
    featured: true,
    github: "https://github.com/vanshchaudhary2404/CuraID",
  },
  {
    title: "WanderLust",
    tag: "MERN Platform",
    desc: "A travel listings platform built on the MERN stack with auth, image uploads, reviews, and a responsive booking-style UI.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
    accent: "from-cyan-400 to-violet-500",
    featured: true,
    github: "https://github.com/vanshchaudhary2404/WanderLust",
  },
  {
    title: "AI Chat Assistant",
    tag: "AI · MERN",
    desc: "A conversational assistant with persistent chat history, streaming responses, and prompt presets — wired to an LLM API.",
    stack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    accent: "from-amber-400 to-orange-600",
    github: "https://github.com/vanshchaudhary2404",
  },
  {
    title: "Campus Bazar",
    tag: "Full Stack - MERN + AI",
    desc: "A scalable student marketplace with real-time chat, intelligent search, and secure authentication, enhanced by AI-driven recommendations for smarter product discovery.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Firebase",
      "AI",
      "JWT Authentication",
    ],
    accent: "from-violet-400 to-fuchsia-500",
    github: "https://github.com/vanshchaudhary2404",
  },
  {
    title: "Burger Menu CRUD App",
    tag: "Frontend - JavaScript",
    desc: "A clean and mobile-friendly burger ordering interface with dynamic CRUD operations, enabling real-time menu management and persistent storage using browser localStorage.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "from-amber-400 to-orange-600",
    github: "https://github.com/vanshchaudhary2404/Ecommerce_burgerwebsite",
  },
  // {
  //   title: "Realtime Collab Board",
  //   tag: "MERN · Sockets",
  //   desc: "Multi-user task board with live presence, drag-and-drop columns, and instant updates over WebSockets.",
  //   stack: ["React", "Express", "Socket.IO", "MongoDB"],
  //   accent: "from-emerald-400 to-cyan-500",
  //   github: "https://github.com/vanshchaudhary2404",
  // },
];

export function ProjectsSection({ id = "projects" }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-accent"> // projects</p>
      <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
        Things I've <span className="text-gradient">built</span>.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A mix of shipped products, hackathon projects, and concept builds across MERN and AI.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-(--shadow-glow)"
          >
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-br ${p.accent} opacity-30 blur-3xl transition group-hover:opacity-50`}
            />
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold">
                  {p.title}
                  {p.featured && (
                    <span className="ml-2 align-middle text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      ★ featured
                    </span>
                  )}
                </h3>
              </div>
              <div className="flex gap-2">
                {p.github && (
                  <a
                    aria-label="GitHub"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-foreground"
                  >
                    <Github size={14} />
                  </a>
                )}
                {p.live && (
                  <a
                    aria-label="Live"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-foreground"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-mono text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage() {
  return <ProjectsSection />;
}
