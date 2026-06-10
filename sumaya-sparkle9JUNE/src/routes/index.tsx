import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, Phone, Sparkles, Code2, Server } from "lucide-react";
import portrait from "@/assets/sumaya-portrait.png";
import { stats, testimonials } from "@/lib/portfolio-data";
import { Reveal } from "@/components/site/Reveal";
import { RotatingText } from "@/components/site/RotatingText";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sumaya Akter — Full-Stack Developer & IT Admin Officer" },
      { name: "description", content: "Hi, I'm Sumaya — a Laravel & PHP backend-focused full-stack developer crafting scalable, high-performance web applications. Explore my work and get in touch." },
      { property: "og:title", content: "Sumaya Akter — Software Engineer (Backend Developer)" },
      { property: "og:description", content: "Laravel & PHP backend developer crafting scalable, high-performance web applications." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand/30 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-2/20 blur-3xl animate-blob" />

        <div className="container-page relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Available for new projects
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Hello, I'm{" "}
              <span className="text-gradient">Sumaya</span>
              <span className="mt-2 block text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                <RotatingText
                  items={[
                    "Software Engineer",
                    "Backend Developer",
                    "Laravel Specialist",
                    "PHP Developer",
                    "API Architect",
                  ]}
                />
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Software Engineer (Backend) at Time Research & Innovation, specializing in Laravel/PHP API
              development, backend architecture, AI feature integration, performance optimization, and
              reliable staging-to-production delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg transition-transform hover:scale-105"
              >
                Hire Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-gradient sm:text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-[40%] bg-gradient-brand opacity-30 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-[40%] border border-border bg-surface glow animate-float">
              <img
                src={portrait}
                alt="Portrait of Sumaya Akter, full-stack developer"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-surface/90 p-4 backdrop-blur shadow-card">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-brand p-2"><Code2 className="h-5 w-5 text-brand-foreground" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Currently</p>
                  <p className="text-sm font-semibold">Software Engineer · Backend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-3">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Biography</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">A bit about me</h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Code is my canvas — logic is my brush, and every function is a stroke of intention. I'm a
              software developer who blends creativity with precision, turning abstract ideas into
              interactive, intelligent experiences. Whether designing intuitive interfaces or architecting
              solid backend systems, I build with purpose, passion, and a constant eye on improvement —
              where design meets depth and innovation meets impact.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a href="tel:+8801690253986" className="card-elevated flex items-center gap-3 p-4">
                <div className="rounded-xl bg-secondary p-2.5"><Phone className="h-5 w-5 text-brand-2" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-semibold">+880 1690-253986</p>
                </div>
              </a>
              <a href="mailto:Sumaya0akter45@gmail.com" className="card-elevated flex items-center gap-3 p-4">
                <div className="rounded-xl bg-secondary p-2.5"><Mail className="h-5 w-5 text-brand" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-semibold break-all">Sumaya0akter45@gmail.com</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT I DO PREVIEW */}
      <section className="section bg-surface/40">
        <div className="container-page">
          <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">Services</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What I do</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-brand-2 story-link">View all services →</Link>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal delay={80} className="card-elevated p-6">
              <div className="inline-flex rounded-xl bg-gradient-brand p-3"><Code2 className="h-6 w-6 text-brand-foreground" /></div>
              <h3 className="mt-4 text-xl font-semibold">Frontend Development</h3>
              <p className="mt-2 text-sm text-muted-foreground">Responsive, modern interfaces with React and Tailwind — pixel-perfect and seamlessly interactive.</p>
            </Reveal>
            <Reveal delay={160} className="card-elevated p-6">
              <div className="inline-flex rounded-xl bg-gradient-brand p-3"><Server className="h-6 w-6 text-brand-foreground" /></div>
              <h3 className="mt-4 text-xl font-semibold">Backend Development</h3>
              <p className="mt-2 text-sm text-muted-foreground">Robust server-side systems with Laravel, PHP & Node.js — APIs, databases, and clean architecture.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What clients say</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} as="figure" className="card-elevated flex h-full flex-col p-6">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand font-semibold text-brand-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-gradient-brand p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
            <h2 className="font-display text-3xl font-bold text-brand-foreground sm:text-4xl">Have a project in mind?</h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-foreground/85">Let's build something fast, clean, and reliable together.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
