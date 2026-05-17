import { Target, Sparkles, Rocket, Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader, Counter } from "./shared";

const stats = [
  { label: "Projects Completed", value: 40, suffix: "+" },
  { label: "Happy Clients", value: 28, suffix: "+" },
  { label: "Years of Experience", value: 5, suffix: "" },
  { label: "Open Source ⭐", value: 1200, suffix: "+" },
];

const cards = [
  {
    Icon: Target,
    title: "Mission",
    text: "Building products that feel inevitable — fast, elegant, and human.",
    color: "var(--neon-cyan)",
  },
  {
    Icon: Sparkles,
    title: "Craft",
    text: "Obsessing over the details that separate good from world-class.",
    color: "var(--neon-blue)",
  },
  {
    Icon: Rocket,
    title: "Velocity",
    text: "Shipping at startup pace without sacrificing engineering rigor.",
    color: "var(--neon-purple)",
  },
  {
    Icon: Heart,
    title: "Passion",
    text: "Coffee, design systems, sci-fi, and open-source weekends.",
    color: "var(--neon-gold)",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="About me"
            title={<>The story <span className="text-gradient">behind the code</span></>}
            description="I'm a developer and designer based in San Francisco. For the past 5 years I've helped startups and Fortune 500 teams ship interfaces that people actually love using."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="glass-strong rounded-2xl p-6 text-center hover:border-[var(--neon-blue)]/40 hover:-translate-y-1 transition-all">
                <div className="text-4xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ Icon, title, text, color }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group relative h-full glass rounded-2xl p-6 hover:glass-strong transition-all hover:-translate-y-1 overflow-hidden">
                <div
                  className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity"
                  style={{ background: color }}
                />
                <div
                  className="inline-grid place-items-center h-11 w-11 rounded-xl glass mb-4"
                  style={{ boxShadow: `0 0 20px ${color}` }}
                >
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
