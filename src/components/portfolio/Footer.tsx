import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

const links = ["home", "about", "skills", "projects", "experience", "contact"];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] text-background font-bold shadow-[0_0_20px_var(--neon-blue)]">A</span>
              <span className="font-semibold">Alex<span className="text-gradient">.dev</span></span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Designing and building premium digital products at the edge of AI and the web.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
            {links.map((l) => (
              <a key={l} href={`#${l}`} className="text-sm text-muted-foreground hover:text-foreground capitalize transition-colors">
                {l}
              </a>
            ))}
          </nav>

          <div className="flex md:justify-end gap-3">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center h-10 w-10 rounded-xl glass hover:shadow-[0_0_18px_var(--neon-cyan)] hover:-translate-y-1 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Alex Carter. Crafted with care.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors group"
          >
            Back to top
            <span className="grid place-items-center h-8 w-8 rounded-xl glass group-hover:shadow-[0_0_15px_var(--neon-blue)] transition-shadow">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
