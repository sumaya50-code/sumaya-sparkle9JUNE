import { createFileRoute } from "@tanstack/react-router";
import { education, work } from "@/lib/portfolio-data";
import { GraduationCap, Briefcase } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/qualification")({
  head: () => ({
    meta: [
      { title: "Qualification — Sumaya Akter" },
      { name: "description", content: "Education and work experience: B.Sc. in CSE from IUBAT, IT Admin Officer at Zonesparks Ltd, and more." },
      { property: "og:title", content: "Qualification — Sumaya Akter" },
      { property: "og:description", content: "Education and professional experience." },
    ],
  }),
  component: QualificationPage,
});

function Timeline({ items }: { items: { title: string; place: string; period: string; detail: string }[] }) {
  return (
    <ol className="relative space-y-6 border-l border-border pl-6">
      {items.map((it, i) => (
        <Reveal key={i} as="li" delay={i * 90} className="relative">
          <span className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-brand ring-4 ring-background animate-pop" />
          <div className="card-elevated p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-2">{it.period}</p>
            <h3 className="mt-1 font-display text-lg font-bold">{it.title}</h3>
            <p className="text-sm text-muted-foreground">{it.place}</p>
            <p className="mt-2 text-sm">{it.detail}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

function QualificationPage() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Qualification</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Experience & education</h1>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-brand p-2.5"><GraduationCap className="h-5 w-5 text-brand-foreground" /></div>
              <h2 className="font-display text-2xl font-bold">Education</h2>
            </div>
            <Timeline items={education} />
          </Reveal>
          <Reveal delay={160}>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-brand p-2.5"><Briefcase className="h-5 w-5 text-brand-foreground" /></div>
              <h2 className="font-display text-2xl font-bold">Work</h2>
            </div>
            <Timeline items={work} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
