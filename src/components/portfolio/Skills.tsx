import { Code2, Server, Brain, Database, Cloud, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./shared";

const groups = [
  {
    Icon: Code2,
    title: "Frontend",
    color: "var(--neon-cyan)",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 96 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    Icon: Server,
    title: "Backend",
    color: "var(--neon-blue)",
    skills: [
      { name: "Node.js / Bun", level: 90 },
      { name: "Go", level: 78 },
      { name: "GraphQL", level: 84 },
      { name: "tRPC / REST", level: 92 },
    ],
  },
  {
    Icon: Brain,
    title: "AI / ML",
    color: "var(--neon-purple)",
    skills: [
      { name: "PyTorch", level: 82 },
      { name: "LangChain", level: 88 },
      { name: "Vector DBs", level: 80 },
      { name: "Prompt Eng.", level: 90 },
    ],
  },
  {
    Icon: Database,
    title: "Databases",
    color: "var(--neon-gold)",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Supabase", level: 92 },
    ],
  },
  {
    Icon: Cloud,
    title: "Cloud / DevOps",
    color: "var(--neon-cyan)",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Docker / K8s", level: 80 },
      { name: "Cloudflare", level: 90 },
      { name: "CI/CD", level: 85 },
    ],
  },
  {
    Icon: Wrench,
    title: "Tools & Craft",
    color: "var(--neon-purple)",
    skills: [
      { name: "Figma", level: 88 },
      { name: "Git / GitHub", level: 95 },
      { name: "Testing (Vitest)", level: 84 },
      { name: "System Design", level: 86 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Skills"
            title={<>An end-to-end <span className="text-gradient">tech stack</span></>}
            description="From pixel-perfect UI to production cloud infrastructure — and the AI in between."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map(({ Icon, title, color, skills }, gi) => (
            <Reveal key={title} delay={gi * 80}>
              <div className="group relative h-full glass-strong rounded-2xl p-6 hover:-translate-y-1 transition-all overflow-hidden">
                <div
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-20 group-hover:opacity-40 blur-3xl transition-opacity"
                  style={{ background: color }}
                />
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="grid place-items-center h-11 w-11 rounded-xl glass"
                    style={{ boxShadow: `0 0 18px ${color}` }}
                  >
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                </div>
                <ul className="space-y-3 relative">
                  {skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-[width] duration-1000 ease-out"
                          style={{
                            width: `${s.level}%`,
                            background: `linear-gradient(90deg, ${color}, var(--neon-purple))`,
                            boxShadow: `0 0 10px ${color}`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
