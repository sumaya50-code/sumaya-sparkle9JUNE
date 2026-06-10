import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/portfolio-data";
import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sumaya Akter" },
      { name: "description", content: "Frontend, backend, and full-stack web development services — Laravel, PHP, React, and modern tooling." },
      { property: "og:title", content: "Services — Sumaya Akter" },
      { property: "og:description", content: "What I offer: frontend, backend, and full-stack web development." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Services</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">What I offer</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">Focused services that move from idea to shipped product — designed, engineered, and maintained with care.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} as="article" className="card-elevated relative flex h-full flex-col p-7">
              <span className="absolute right-6 top-6 font-display text-5xl font-bold text-gradient opacity-30">0{i + 1}</span>
              <h2 className="font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-2" /> {p}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-2 transition-all hover:gap-3 story-link">
                Discuss your project <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
