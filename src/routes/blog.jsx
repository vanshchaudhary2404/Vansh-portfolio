import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Linkedin, Code2, Send, Trophy } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Vansh's Portfolio" },
      {
        name: "description",
        content:
          "Achievements, upcoming blog posts and contact details for Vansh Kumar — MERN, C++ and AI developer.",
      },
      { property: "og:title", content: "Vansh's Portfolio" },
      { property: "og:description", content: "Get in touch with Vansh Kumar." },
    ],
  }),
  component: BlogPage,
});

const achievements = [
  "Built CuraID — RFID + Firebase + AI health-tech prototype at hackathon.",
  "Shipped WanderLust full-stack MERN travel listings platform.",
  "Completed Cisco AICTE Cybersecurity Virtual Internship (2025).",
  "Active LeetCode problem solver — sharpening DSA daily.",
];
const posts = [
  {
    title: "Why I bet on the MERN stack in 2026",
    tag: "Engineering",
    desc: "How a single language across the stack accelerates shipping.",
  },
  {
    title: "From C++ to JavaScript: lessons in thinking",
    tag: "Languages",
    desc: "What systems programming taught me about web development.",
  },
  {
    title: "Plugging AI into everyday apps",
    tag: "AI",
    desc: "Practical patterns for adding LLMs to real products.",
  },
];

export function BlogSection({ id = "blog" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState("sending");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Message could not be sent.");
      }

      setSubmitState("success");
      setSubmitMessage("Message sent. I’ll reply by email as soon as I can.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error instanceof Error ? error.message : "Unable to send message.");
    }
  };
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-accent"> // blog & contact</p>
      <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
        Wins, <span className="text-gradient">words</span>, and a way to reach me.
      </h1>

      {/* Achievements */}
      <div className="mt-14">
        <div className="flex items-center gap-2 text-accent">
          <Trophy size={16} />
          <p className="font-mono text-xs uppercase tracking-widest"> // achievements</p>
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold">Highlights</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {achievements.map((a) => (
            <li key={a} className="rounded-2xl border border-border bg-card/40 p-4 text-sm">
              <span className="text-accent">✦</span> <span className="ml-1">{a}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Blog */}
      <div className="mt-20">
        <p className="font-mono text-xs uppercase tracking-widest text-accent"> // blog</p>
        <h2 className="mt-3 font-display text-3xl font-bold">Coming soon</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {p.tag}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 inline-block rounded-full border border-border px-3 py-1 text-[11px] font-mono text-muted-foreground">
                draft · soon
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-20 grid gap-10 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent"> // contact</p>
          <h2 className="mt-3 font-display text-4xl font-bold">Let's talk.</h2>
          <p className="mt-3 text-muted-foreground">
            Hiring, collaborating, or just want to nerd out about MERN and AI? Drop me a line.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:vanshkumar.official24@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm transition hover:border-primary"
            >
              <Mail size={14} /> vanshkumar.official24@gmail.com
            </a>
          </div>
          <div className="mt-4 flex gap-2">
            <a
              aria-label="GitHub"
              href="https://github.com/vanshchaudhary2404"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border p-3 text-muted-foreground transition hover:border-primary hover:text-foreground"
            >
              <Github size={16} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/in/vanshkumar024"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border p-3 text-muted-foreground transition hover:border-primary hover:text-foreground"
            >
              <Linkedin size={16} />
            </a>
            <a
              aria-label="LeetCode"
              href="https://leetcode.com/vansh024"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border p-3 text-muted-foreground transition hover:border-primary hover:text-foreground"
            >
              <Code2 size={16} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-3xl p-6">
          <div className="grid gap-4">
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="Jane Doe"
              />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="jane@company.com"
              />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="Tell me about your project…"
              />
            </label>
            <button
              type="submit"
              disabled={submitState === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-(image:--gradient-primary) px-6 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-glow) transition hover:opacity-90"
            >
              {submitState === "sending" ? "Sending..." : "Send message"}
              <Send size={14} />
            </button>
            {submitMessage && (
              <p
                className={`text-sm ${
                  submitState === "error" ? "text-destructive" : "text-muted-foreground"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function BlogPage() {
  return <BlogSection />;
}
