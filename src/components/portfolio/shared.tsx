import { useEffect, useRef, useState, type ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center mb-14">
      <span className="inline-block rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1500;
          const step = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            setValue(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
