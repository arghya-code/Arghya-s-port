import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { TypeWriter } from "./TypeWriter";
import avatar from "@/assets/avatar.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 overflow-hidden">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="space-y-7 animate-[fade-up_0.8s_ease-out]">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
            </span>
            Available for new opportunities
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Alex Carter</span>
          </h1>

          <div className="text-2xl sm:text-3xl text-muted-foreground font-medium h-10">
            <TypeWriter
              words={[
                "Full-Stack Developer",
                "AI/ML Engineer",
                "UI/UX Designer",
                "Cloud Architect",
              ]}
              className="text-foreground"
            />
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I craft premium digital experiences at the intersection of design and engineering —
            shipping fast, accessible, AI-powered products that scale.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-5 py-3 text-sm font-medium text-background shadow-[0_0_30px_oklch(0.72_0.2_250/0.4)] hover:shadow-[0_0_40px_var(--neon-purple)] transition-all hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-medium hover:border-[var(--neon-cyan)]/40 hover:shadow-[0_0_20px_var(--neon-cyan)/30] transition-all"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            {[
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Mail, href: "#contact" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="group relative grid place-items-center h-10 w-10 rounded-xl glass hover:glass-strong transition-all hover:-translate-y-1"
                aria-label="social link"
              >
                <Icon className="h-4 w-4 text-muted-foreground group-hover:text-[var(--neon-cyan)] transition-colors" />
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_var(--neon-cyan)]" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative animate-[fade-up_1s_ease-out]">
          <div className="relative mx-auto w-[280px] sm:w-[340px] lg:w-[380px] aspect-square">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-cyan)] opacity-40 blur-2xl animate-glow-pulse" />
            <div className="absolute inset-0 rounded-3xl glass-strong p-2">
              <img
                src={avatar}
                alt="Alex Carter"
                width={380}
                height={380}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -left-6 glass-strong rounded-xl px-3 py-2 text-xs animate-float">
              <div className="text-[var(--neon-cyan)] font-semibold">5+ yrs</div>
              <div className="text-muted-foreground">Experience</div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass-strong rounded-xl px-3 py-2 text-xs animate-float [animation-delay:-2s]">
              <div className="text-[var(--neon-purple)] font-semibold">40+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="absolute top-1/2 -right-8 glass-strong rounded-xl px-3 py-2 text-xs animate-float [animation-delay:-4s]">
              <div className="text-[var(--neon-gold)] font-semibold">⚡ AI</div>
              <div className="text-muted-foreground">Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
