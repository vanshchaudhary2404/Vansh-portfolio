import { createFileRoute } from "@tanstack/react-router";
import { Github, ExternalLink } from "lucide-react";
import overlayImage from "../assests/overlay.png";

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
  title: "Anvexa",
  tag: "AI-Powered E-Commerce Platform",
  desc: "A modern full-stack e-commerce platform built with the MERN stack, featuring secure authentication, product management, Razorpay payments, Cloudinary image uploads, and AI-powered shopping insights.",
  summary:
    "A production-oriented e-commerce experience with customer shopping, cart and checkout flows, admin management, sales analytics, and smart search suggestions for a more personalized shopping experience.",
  impact:
    "Built a complete end-to-end commerce platform with secure role-based access, integrated payments, cloud image storage, and data-driven admin analytics.",
  stack: [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "Redux Toolkit",
    "JWT",
    "Razorpay",
    "Cloudinary",
    "AI"
  ],
    accent: "linear-gradient(135deg, #d4af37 0%, #f5d76e 50%, #b8860b 100%)",
    glow: "rgba(212, 175, 55, 0.28)",
    image: overlayImage,
    featured: true,
    github: "https://github.com/vanshchaudhary2404/Anvexa",
    live: "https://anvexa.onrender.com/",
    highlights: [
      "AI Smart Search",
      "Sales Analytics",
      "Razorpay Payments",
      "JWT Authentication",
      "Cloudinary Uploads"
    ],
  },
  {
    title: "CuraID",
    tag: "Health-tech",
    desc: "RFID-based patient identification platform integrating Firebase and AI modules for real-time medical data handling and triage workflows.",
    summary:
      "A hospital-facing emergency response system that retrieves patient records instantly via RFID scan to reduce delays in critical care situations.",
    impact: "Cut manual lookup time and improved emergency-access workflows for patient data retrieval.",
    stack: ["React", "Firebase", "Node.js", "RFID", "AI"],
    accent: "linear-gradient(135deg, #f472b6 0%, #8b5cf6 55%, #4f7c6b 100%)",
    glow: "rgba(244, 114, 182, 0.28)",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    github: "https://github.com/vanshchaudhary2404/CuraID",
    highlights: ["RFID patient lookup", "Firebase auth", "Emergency triage workflow"],
  },
  {
    title: "Campus Bazar",
    tag: "Full Stack - MERN + AI",
    desc: "A scalable student marketplace with real-time chat, intelligent search, and secure authentication, enhanced by AI-driven recommendations for smarter product discovery.",
    summary:
      "A peer-to-peer campus marketplace with live communication, secure login, and AI-assisted discovery for student buying and selling.",
    impact: "Built a community-driven marketplace model emphasizing trust, speed, and smart recommendations.",
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
    accent: "linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)",
    glow: "rgba(167, 139, 250, 0.25)",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/vanshchaudhary2404/Campus-Bazaar",
    highlights: ["AI recommendations", "Real-time chat", "Marketplace auth"],
  },
  {
    title: "WanderLust",
    tag: "MERN Platform",
    desc: "A travel listings platform built on the MERN stack with auth, image uploads, reviews, and a responsive booking-style UI.",
    summary:
      "An Airbnb-style accommodation booking experience with listing management, user authentication, and interactive exploration flows.",
    impact: "Delivered a complete listing and booking flow with real-world travel-platform patterns.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
    accent: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 50%, #0f172a 100%)",
    glow: "rgba(34, 211, 238, 0.28)",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    github: "https://github.com/vanshchaudhary2404/WanderLust",
    highlights: ["Booking UI", "Image uploads", "Reviews & auth"],
  },
  {
    title: "AI Chat Assistant",
    tag: "AI · MERN",
    desc: "A conversational assistant with persistent chat history, streaming responses, and prompt presets — wired to an LLM API.",
    summary:
      "A full-stack AI conversation app for chat sessions, contextual prompts, and persistent memory across user interactions.",
    impact: "Enabled a clean, reusable chat experience connected to LLM APIs and stored session history.",
    stack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    accent: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
    glow: "rgba(251, 191, 36, 0.22)",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/vanshchaudhary2404",
    highlights: ["Persistent chat", "LLM integration", "Prompt presets"],
  },
  {
    title: "Burger Menu CRUD App",
    tag: "Frontend - JavaScript",
    desc: "A clean and mobile-friendly burger ordering interface with dynamic CRUD operations, enabling real-time menu management and persistent storage using browser localStorage.",
    summary:
      "A fast, modern restaurant UI with interactive menu management and simplified checkout flows for a small food brand experience.",
    impact: "Showcased responsive UX patterns and front-end CRUD interactions for product management.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    glow: "rgba(245, 158, 11, 0.2)",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/vanshchaudhary2404/Ecommerce_burgerwebsite",
    highlights: ["Responsive UI", "Menu CRUD", "LocalStorage state"],
  },
  {
  title: "MediaSearch",
  tag: "Frontend • React + Redux",
  description:
    "A unified media search platform for discovering GIFs, images, and videos from multiple APIs.",
  summary:
    "A media discovery platform integrating Tenor, Unsplash, and Pexels APIs with Redux-powered state management and a favorites collection system.",
  impact:
    "Built to demonstrate API integration, global state management, and responsive media discovery.",
  stack: [
    "React",
    "Redux Toolkit",
    "JavaScript",
    "REST APIs",
    "Vite"
  ],
    accent: "linear-gradient(135deg, #7a7bfa 0%, #ec4899 100%)",
    glow: "rgba(167, 139, 250, 0.25)",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/vanshchaudhary2404/Media-Search",
    highlights: [
      "Multi-source Search",
      "Redux State Management",
      "Favorites Collection"
    ],
  },
];

function ProjectCard({ project, index }) {
  return (
    <article
      key={project.title}
      className="project-card group relative flex h-full  flex-col overflow-hidden rounded-[28px] p-5 md:p-6"
      style={{
        ["--project-accent"]: project.accent,
        ["--project-glow"]: project.glow,
      }}
    >
      <div className="project-card__glow" />

      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
          {project.tag}
        </span>
        <span className="rounded-full border border-border/80 bg-background/60 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="project-card__thumb" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="project-card__thumb-overlay" />
        <div className="project-card__banner">
          <div className="project-card__banner-line" />
          <div className="project-card__banner-pill">
            {project.featured ? "Featured" : "BUILD"}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-semibold leading-tight md:text-[2rem]">
            {project.title}
          </h3>
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a
              aria-label="GitHub"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground transition hover:border-primary hover:text-foreground"
            >
              <Github size={14} />
            </a>
          )}
          {project.live && (
            <a
              aria-label="Live"
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground transition hover:border-primary hover:text-foreground"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-background/50 px-3 py-1 text-[11px] font-mono text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="project-card__details mt-4">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80">Impact</p>
        <p className="project-card__impact mt-2 text-sm leading-6 text-foreground/90">
          {project.impact}
        </p>
      </div>

      <div className="mt-auto pt-2">
        <div className="flex flex-wrap gap-2">
          {project.highlights?.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/80 bg-background/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection({ id = "projects" }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent"> // projects</p>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
          Things I've <span className="text-gradient">built</span>.
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          A mix of shipped products, hackathon projects, and concept builds across MERN and AI.
        </p>
      </div>

      <div className="project-grid mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectsPage() {
  return <ProjectsSection />;
}
