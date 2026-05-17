import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 transition-all duration-300 ${
          scrolled ? "" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-[0_8px_30px_rgb(0,0,0,0.4)]" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] text-background font-bold text-sm shadow-[0_0_20px_var(--neon-blue)] transition-transform group-hover:scale-110">
              A
            </span>
            <span className="font-semibold tracking-tight">
              Alex<span className="text-gradient">.dev</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                    active === l.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] shadow-[0_0_8px_var(--neon-blue)]" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-4 py-2 text-sm font-medium text-background shadow-[0_0_20px_var(--neon-blue)/40] hover:shadow-[0_0_30px_var(--neon-purple)] transition-shadow"
          >
            Let's Talk
          </a>

          <button
            className="lg:hidden p-2 rounded-lg glass"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-strong p-3 animate-[fade-up_0.3s_ease-out]">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm ${
                      active === l.id ? "text-foreground bg-white/5" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
