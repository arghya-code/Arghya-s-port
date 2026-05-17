import { Trophy, Medal, Star, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader, Counter } from "./shared";

const items = [
  { Icon: Trophy, title: "TechCrunch Disrupt — Top 10", year: "2023", color: "var(--neon-gold)" },
  { Icon: Medal, title: "Google HashCode — World Top 1%", year: "2022", color: "var(--neon-cyan)" },
  { Icon: Star, title: "GitHub Star Program", year: "2024", color: "var(--neon-purple)" },
  { Icon: Zap, title: "MLH Hackathon — 3x Winner", year: "2020-2022", color: "var(--neon-blue)" },
];

const stats = [
  { label: "LeetCode Rank", value: 2400, suffix: "+" },
  { label: "Hackathons Won", value: 12, suffix: "" },
  { label: "Certifications", value: 8, suffix: "" },
  { label: "GitHub Stars", value: 1200, suffix: "+" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Achievements"
            title={<>Awards & <span className="text-gradient">recognition</span></>}
            description="A few moments that mean a lot."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {items.map(({ Icon, title, year, color }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group relative h-full glass-strong rounded-2xl p-6 text-center hover:-translate-y-1 transition-all overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"
                  style={{ background: color }}
                />
                <div
                  className="mx-auto grid place-items-center h-14 w-14 rounded-2xl glass mb-4"
                  style={{ boxShadow: `0 0 25px ${color}` }}
                >
                  <Icon className="h-6 w-6" style={{ color }} />
                </div>
                <h3 className="font-semibold">{title}</h3>
                <div className="mt-1 text-xs text-muted-foreground">{year}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="glass rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
