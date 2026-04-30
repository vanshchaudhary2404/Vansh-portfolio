import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog" },
  { id: "resume", label: "Resume" },
];

const sectionIds = links.map((link) => link.id);

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => (event) => {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    setOpen(false);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5">
        <a
          href="#home"
          onClick={scrollToSection("home")}
          className="group flex items-center gap-2 font-display text-lg font-bold"
        >
          <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-lg bg-(image:--gradient-bold) shadow-(--shadow-glow)">
            <img src="/logo.png" alt="Vansh logo" className="h-full w-full object-cover" />
          </span>
          <span className="text-gradient">Vansh's Portfolio</span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={scrollToSection(link.id)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition hover:bg-accent/10 hover:text-foreground ${
                  isActive ? "bg-accent/10 text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="rounded-full border border-border bg-card/70 p-2.5 text-foreground shadow-sm transition hover:border-primary hover:text-accent"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="rounded-full border border-border bg-card/70 p-2.5 text-foreground shadow-sm transition hover:border-primary hover:text-accent md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={scrollToSection(link.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-3 py-2 text-sm hover:bg-accent/10 hover:text-foreground ${
                    isActive ? "bg-accent/10 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
