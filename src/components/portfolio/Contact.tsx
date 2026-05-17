import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./shared";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const errs: Record<string, string> = {};
    if (!name || name.length > 100) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email.";
    if (!message || message.length > 1000) errs.message = "Message is required (max 1000 chars).";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      e.currentTarget?.reset?.();
    }, 1000);
  }

  const inputCls =
    "w-full rounded-xl glass px-4 py-3 text-sm outline-none focus:border-[var(--neon-cyan)]/60 focus:shadow-[0_0_20px_var(--neon-cyan)/30] transition-all placeholder:text-muted-foreground/60";

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title={<>Let's build something <span className="text-gradient">great</span></>}
            description="Open to full-time roles, freelance work, and friendly conversations."
          />
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <Reveal>
            <div className="space-y-4">
              {[
                { Icon: Mail, label: "Email", value: "alex@carter.dev", href: "mailto:alex@carter.dev" },
                { Icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { Icon: MapPin, label: "Location", value: "San Francisco, CA" },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 glass-strong rounded-2xl p-4 hover:border-[var(--neon-cyan)]/40 hover:-translate-y-0.5 transition-all"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl glass shadow-[0_0_15px_var(--neon-blue)/40]">
                    <Icon className="h-5 w-5 text-[var(--neon-cyan)]" />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                </a>
              ))}

              <div className="glass-strong rounded-2xl p-4">
                <div className="text-xs text-muted-foreground mb-3">Find me online</div>
                <div className="flex gap-3">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="grid place-items-center h-10 w-10 rounded-xl glass hover:shadow-[0_0_20px_var(--neon-purple)] hover:-translate-y-1 transition-all"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="glass-strong rounded-3xl p-6 md:p-8 space-y-4"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground" htmlFor="name">Name</label>
                  <input id="name" name="name" maxLength={100} placeholder="Jane Doe" className={`${inputCls} mt-1.5`} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs text-muted-foreground" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" maxLength={255} placeholder="jane@company.com" className={`${inputCls} mt-1.5`} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" maxLength={150} placeholder="Project inquiry" className={`${inputCls} mt-1.5`} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground" htmlFor="message">Message</label>
                <textarea id="message" name="message" maxLength={1000} rows={5} placeholder="Tell me about your project…" className={`${inputCls} mt-1.5 resize-none`} />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-5 py-3 text-sm font-medium text-background shadow-[0_0_25px_oklch(0.72_0.2_250/0.5)] hover:shadow-[0_0_40px_var(--neon-purple)] transition-all disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : status === "sent" ? "Message sent ✓" : "Send Message"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
