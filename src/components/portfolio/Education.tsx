import { GraduationCap, Award } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./shared";

const items = [
  {
    year: "2020 — 2022",
    degree: "M.S. in Computer Science",
    school: "Stanford University",
    grade: "GPA: 3.95 / 4.0",
    notes: "Specialization in AI & Human-Computer Interaction.",
  },
  {
    year: "2016 — 2020",
    degree: "B.S. in Software Engineering",
    school: "UC Berkeley",
    grade: "GPA: 3.88 / 4.0 — Summa Cum Laude",
    notes: "Coursework: Algorithms, Distributed Systems, Computer Graphics.",
  },
  {
    year: "2023",
    degree: "AWS Solutions Architect — Professional",
    school: "Amazon Web Services",
    grade: "Score: 932 / 1000",
    notes: "Production-grade cloud infrastructure & cost optimization.",
  },
  {
    year: "2024",
    degree: "Deep Learning Specialization",
    school: "DeepLearning.AI",
    grade: "5 / 5 courses · with distinction",
    notes: "Neural networks, transformers, and reinforcement learning.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeader
            eyebrow="Qualifications"
            title={<>Education & <span className="text-gradient">Certifications</span></>}
            description="A foundation built on rigorous fundamentals and continuous learning."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--neon-blue)]/60 to-transparent" />
          {items.map((it, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal key={i} delay={i * 100}>
                <div className={`relative mb-8 md:grid md:grid-cols-2 md:gap-8 ${left ? "" : ""}`}>
                  <div className="hidden md:block" />
                  <div className={`pl-12 md:pl-0 ${left ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}>
                    <div className="absolute left-2 md:left-1/2 -translate-x-1/2 mt-2 grid place-items-center h-6 w-6 rounded-full bg-background border border-[var(--neon-blue)] shadow-[0_0_15px_var(--neon-blue)]">
                      <span className="h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
                    </div>
                    <div className="group glass-strong rounded-2xl p-5 hover:border-[var(--neon-purple)]/40 hover:-translate-y-1 transition-all">
                      <span className="inline-flex items-center gap-1 text-xs text-[var(--neon-cyan)] font-medium">
                        <Award className="h-3 w-3" /> {it.year}
                      </span>
                      <h3 className="mt-1 font-semibold text-lg flex items-center gap-2 md:justify-end">
                        {left && <span className="md:order-2"><GraduationCap className="h-4 w-4 text-[var(--neon-purple)]" /></span>}
                        {!left && <GraduationCap className="h-4 w-4 text-[var(--neon-purple)]" />}
                        {it.degree}
                      </h3>
                      <div className="text-sm text-muted-foreground">{it.school}</div>
                      <div className="mt-2 text-sm text-[var(--neon-gold)]">{it.grade}</div>
                      <p className="mt-2 text-sm text-muted-foreground/80">{it.notes}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
