import { FileText, Download, Eye } from "lucide-react";
import { Reveal } from "./Reveal";

export function ResumeSection() {
  return (
    <section id="resume" className="relative py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[var(--neon-blue)] opacity-20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[var(--neon-purple)] opacity-20 blur-3xl" />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="inline-block rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
                  Resume
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                  Want the <span className="text-gradient">full story?</span>
                </h2>
                <p className="mt-3 text-muted-foreground max-w-md">
                  Grab a copy of my latest resume — a one-page summary of everything you've seen here, plus references.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-5 py-3 text-sm font-medium text-background shadow-[0_0_30px_oklch(0.72_0.2_250/0.4)] hover:shadow-[0_0_40px_var(--neon-purple)] transition-all hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" /> Download PDF
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:glass-strong transition-all"
                  >
                    <Eye className="h-4 w-4" /> Preview
                  </a>
                </div>
              </div>

              <div className="relative mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-50 blur-2xl" />
                <div className="relative w-40 h-52 rounded-2xl glass-strong p-4 rotate-[-6deg] hover:rotate-0 transition-transform">
                  <FileText className="h-8 w-8 text-[var(--neon-cyan)] mb-3" />
                  <div className="space-y-1.5">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 rounded-full bg-white/10"
                        style={{ width: `${60 + ((i * 37) % 40)}%` }}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-[9px] text-muted-foreground">alex_carter_cv.pdf</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
