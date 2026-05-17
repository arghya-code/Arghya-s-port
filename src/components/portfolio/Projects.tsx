import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./shared";
import img1 from "@/assets/project-1.jpg";
import img2 from "@/assets/project-2.jpg";
import img3 from "@/assets/project-3.jpg";
import img4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Nexus Analytics",
    desc: "Real-time analytics platform processing 10M+ events/day with sub-second dashboards.",
    image: img1,
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "Web",
    status: "Live",
  },
  {
    title: "Aurora AI Assistant",
    desc: "Native mobile chatbot powered by RAG over private knowledge bases.",
    image: img2,
    tags: ["Next.js", "LangChain", "AI/ML"],
    category: "AI",
    status: "Live",
  },
  {
    title: "Lumen Commerce",
    desc: "Premium 3D-product e-commerce experience with AR try-on.",
    image: img3,
    tags: ["Next.js", "Three.js", "Stripe"],
    category: "Web",
    status: "Beta",
  },
  {
    title: "Pulse Metrics",
    desc: "Engineering insights dashboard for distributed teams.",
    image: img4,
    tags: ["React", "GraphQL", "AWS"],
    category: "Web",
    status: "Live",
  },
];

const filters = ["All", "Web", "AI", "Mobile"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title={<>Selected <span className="text-gradient">work</span></>}
            description="A handful of products I've designed, engineered, and shipped in the last few years."
          />
        </Reveal>

        <Reveal>
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm transition-all ${
                  filter === f
                    ? "bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-background shadow-[0_0_20px_var(--neon-blue)]"
                    : "glass hover:glass-strong text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group relative overflow-hidden rounded-3xl glass-strong hover:-translate-y-1 transition-all">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <span className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-medium glass-strong ${
                    p.status === "Live" ? "text-[var(--neon-cyan)]" : "text-[var(--neon-gold)]"
                  }`}>
                    ● {p.status}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-semibold text-xl">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md glass px-2 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--neon-cyan)] hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" /> Source
                    </a>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: "inset 0 0 0 1px oklch(0.72 0.2 250 / 0.5), 0 0 40px oklch(0.72 0.2 250 / 0.25)" }}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
