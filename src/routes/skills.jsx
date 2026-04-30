import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Vansh's Portfolio" },
      {
        name: "description",
        content:
          "Skills, work experience, education and certifications of Vansh Kumar — MERN, C++ and AI developer.",
      },
      { property: "og:title", content: "Vansh's Portfolio" },
      {
        property: "og:description",
        content: "Tech stack, internships, education and Cisco certifications.",
      },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  { title: "Languages", items: ["C++", "JavaScript"] },
  { title: "Frontend", items: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js"] },
  { title: "Database", items: ["MongoDB", "Firebase", "SQL", "Redis"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "Postman", "VS Code"] },
  { title: "Concepts", items: ["DSA", "OOP", "REST APIs", "DBMS", "Computer Networks"] },
  { title: "AI / ML", items: ["NLP (basic)", "Rule-Based Systems", "AI API Integration"] },
];
const experience = [
  {
    role: "Web Developer Intern",
    org: "Brainwave Matrix Solution",
    when: "2025 · Remote, India",
    bullets: [
      "Designed responsive UI using Bootstrap with optimized performance.",
      "Developed a MERN-based real-time collaboration platform (frontend).",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Hackathon Projects",
    when: "2025 · Greater Noida",
    bullets: [
      "Built RFID-based health-tech systems integrating Firebase and AI modules.",
      "Implemented real-time data handling and user-centric interfaces.",
    ],
  },
];

export function SkillsSection({ id = "skills" }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        // skills & experience
      </p>
      <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
        Tools I <span className="text-gradient">love</span> · paths I've walked.
      </h1>

      {/* Skills */}
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {g.items.length}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-mono text-foreground/90 transition hover:border-primary hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mt-20 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-accent">
            <Briefcase size={16} />
            <p className="font-mono text-xs uppercase tracking-widest"> // experience</p>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold">Work</h2>
          <ol className="mt-6 space-y-5">
            {experience.map((e) => (
              <li key={e.role} className="relative rounded-2xl border border-border bg-card/40 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">
                    {e.role} <span className="text-muted-foreground">— {e.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.when}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="flex items-center gap-2 text-accent">
            <GraduationCap size={16} />
            <p className="font-mono text-xs uppercase tracking-widest"> // education</p>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold">Education</h2>
          <div className="mt-6 rounded-2xl border border-border bg-card/40 p-5">
            <h3 className="font-display text-lg font-semibold">B.Tech in Computer Science</h3>
            <p className="text-muted-foreground">
              G.L. Bajaj Institute of Technology and Management
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">2023 – 2027</p>
          </div>

          <div className="mt-10 flex items-center gap-2 text-accent">
            <Award size={16} />
            <p className="font-mono text-xs uppercase tracking-widest"> // certifications</p>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold">Certifications</h2>
          <ul className="mt-6 space-y-3">
            {[
              "Cisco AICTE Cybersecurity Virtual Internship (2025)",
              "Cisco Networking Academy — Cybersecurity",
              "Cisco Networking Academy — Networking Basics",
            ].map((c) => (
              <li key={c} className="rounded-xl border border-border bg-card/40 p-4 text-sm">
                <span className="text-accent">✦</span> <span className="ml-1">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SkillsPage() {
  return <SkillsSection />;
}
