import { Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./shared";

const jobs = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Vercel",
    period: "2023 — Present",
    desc: "Leading frontend platform initiatives. Shipping the next-gen dashboard used by 1M+ developers.",
    points: [
      "Drove a 38% reduction in TTI for the dashboard",
      "Led a team of 5 across 3 timezones",
      "Open-sourced 2 internal frameworks",
    ],
  },
  {
    role: "Founding Engineer",
    company: "Helix AI (YC W22)",
    period: "2021 — 2023",
    desc: "First engineering hire. Built the product end-to-end from prototype to Series A.",
    points: [
      "Architected RAG pipeline serving 50k MAU",
      "Built design system used company-wide",
      "Helped raise $14M Series A",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Stripe",
    period: "Summer 2020",
    desc: "Worked on the Connect dashboard team improving onboarding flows.",
    points: [
      "Reduced KYC drop-off by 22%",
      "Shipped 6 features in 12 weeks",
    ],
  },
  {
    role: "Tech Lead — Volunteer",
    company: "Code for America",
    period: "2019 — 2021",
    desc: "Led a team of 8 volunteers building civic-tech for SF Bay Area nonprofits.",
    points: [
      "Shipped 4 production apps used by 30k+ residents",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeader
            eyebrow="Experience"
            title={<>Where I've <span className="text-gradient">shipped</span></>}
            description="Five years across startups and platform companies."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--neon-purple)]/60 to-transparent" />
          {jobs.map((j, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="relative pl-12 mb-6">
                <span className="absolute left-4 -translate-x-1/2 mt-3 grid place-items-center h-8 w-8 rounded-xl glass border border-[var(--neon-purple)]/60 shadow-[0_0_15px_var(--neon-purple)]">
                  <Briefcase className="h-3.5 w-3.5 text-[var(--neon-purple)]" />
                </span>
                <div className="group glass-strong rounded-2xl p-6 hover:border-[var(--neon-cyan)]/40 hover:-translate-y-1 transition-all">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-lg">
                      {j.role} <span className="text-[var(--neon-cyan)]">· {j.company}</span>
                    </h3>
                    <span className="text-xs text-muted-foreground">{j.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{j.desc}</p>
                  <ul className="mt-3 space-y-1.5">
                    {j.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--neon-cyan)] flex-none shadow-[0_0_6px_var(--neon-cyan)]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
