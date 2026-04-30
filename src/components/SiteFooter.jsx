import { Github, Linkedin, Mail, Code2 } from "lucide-react";
export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vansh Kumar — Built with passion & caffeine ☕
        </p>
        <div className="flex items-center gap-3">
          <a
            aria-label="GitHub"
            href="https://github.com/vanshchaudhary2404"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-foreground"
          >
            <Github size={16} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://linkedin.com/in/vanshkumar024"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-foreground"
          >
            <Linkedin size={16} />
          </a>
          <a
            aria-label="LeetCode"
            href="https://leetcode.com/vansh024"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-foreground"
          >
            <Code2 size={16} />
          </a>
          <a
            aria-label="Email"
            href="mailto:vanshkumar.official24@gmail.com"
            className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-foreground"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
