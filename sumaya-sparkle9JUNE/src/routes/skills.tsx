import { createFileRoute } from "@tanstack/react-router";
import {
  backendSkills, frontendSkills, databaseSkills, paymentSkills, toolsSkills,
  type Skill,
} from "@/lib/portfolio-data";
import { Server, Layout, Database, CreditCard, Wrench } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import {
  SiPhp, SiLaravel, SiNodedotjs, SiMysql, SiMongodb, SiPostgresql,
  SiJavascript, SiTypescript, SiVuedotjs, SiGit, SiGithub, SiHtml5, SiReact,
  SiBootstrap, SiTailwindcss, SiFigma, SiCss, SiFastapi, SiPostman,
  SiGooglemaps, SiPaypal, SiCpanel, SiPerplexity, SiDjango,
} from "react-icons/si";
import { FaCode, FaServer, FaShieldAlt, FaSitemap, FaPlug, FaSearch, FaProjectDiagram, FaDatabase, FaTasks, FaMoneyBillWave, FaRobot } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import type { ComponentType, SVGProps } from "react";

const skillIcons: Record<string, { Icon: ComponentType<SVGProps<SVGSVGElement>>; color: string }> = {
  // Backend
  PHP: { Icon: SiPhp, color: "#777BB4" },
  "Laravel Framework": { Icon: SiLaravel, color: "#FF2D20" },
  NodeJS: { Icon: SiNodedotjs, color: "#5FA04E" },
  "RESTful API Development": { Icon: FaCode, color: "#22D3EE" },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  "API Integration": { Icon: FaPlug, color: "#A78BFA" },
  "MVC Architecture": { Icon: FaSitemap, color: "#F59E0B" },
  "Backend System Design": { Icon: FaProjectDiagram, color: "#60A5FA" },
  "Authentication & Authorization": { Icon: FaShieldAlt, color: "#10B981" },
  "SEO Implementation": { Icon: FaSearch, color: "#EC4899" },
  Django: { Icon: SiDjango, color: "#092E20" },
  // Frontend
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Vue.js": { Icon: SiVuedotjs, color: "#42B883" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  AJAX: { Icon: FaCode, color: "#22D3EE" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  // Database
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  "Database Design": { Icon: FaDatabase, color: "#60A5FA" },
  "Query Optimization": { Icon: FaTasks, color: "#F59E0B" },
  "Data Management": { Icon: FaDatabase, color: "#A78BFA" },
  LocalWP: { Icon: FaServer, color: "#51CF66" },
  // Payments
  SSLCommerz: { Icon: FaMoneyBillWave, color: "#10B981" },
  PayPal: { Icon: SiPaypal, color: "#00457C" },
  // Tools
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  "Google Maps API": { Icon: SiGooglemaps, color: "#4285F4" },
  "VS Code": { Icon: VscVscode, color: "#007ACC" },
  cPanel: { Icon: SiCpanel, color: "#FF6C2C" },
  Cursor: { Icon: FaRobot, color: "#22D3EE" },
  "GitHub Copilot": { Icon: SiGithub, color: "#A78BFA" },
  Perplexity: { Icon: SiPerplexity, color: "#20B8CD" },
};

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Sumaya Akter" },
      { name: "description", content: "Backend and frontend technical skills: Laravel, PHP, React, Tailwind, MySQL, MongoDB, and more." },
      { property: "og:title", content: "Skills — Sumaya Akter" },
      { property: "og:description", content: "Areas of expertise across backend and frontend development." },
    ],
  }),
  component: SkillsPage,
});

const levelStyles: Record<string, string> = {
  Advanced: "bg-gradient-brand text-brand-foreground",
  Intermediate: "bg-secondary text-foreground border border-border",
};

function SkillCard({ name, level, index }: { name: string; level: string; index: number }) {
  const entry = skillIcons[name];
  const Icon = entry?.Icon;
  return (
    <div
      className="card-elevated flex items-center justify-between gap-3 p-4 animate-fade-up"
      style={{ animationDelay: `${Math.min(index, 10) * 50}ms` }}
    >
      <span className="flex items-center gap-3 text-sm font-semibold">
        {Icon && (
          <span
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/40"
            aria-hidden
          >
            <Icon style={{ color: entry.color }} className="h-5 w-5" />
          </span>
        )}
        {name}
      </span>
      <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${levelStyles[level] ?? ""}`}>
        {level}
      </span>
    </div>
  );
}

function SkillsPage() {
  const groups: { title: string; Icon: ComponentType<SVGProps<SVGSVGElement>>; items: Skill[]; delay: number }[] = [
    { title: "Backend Development", Icon: Server, items: backendSkills, delay: 80 },
    { title: "Frontend Development", Icon: Layout, items: frontendSkills, delay: 140 },
    { title: "Database Management", Icon: Database, items: databaseSkills, delay: 200 },
    { title: "Payment Gateway Integration", Icon: CreditCard, items: paymentSkills, delay: 260 },
    { title: "Tools & Platforms", Icon: Wrench, items: toolsSkills, delay: 320 },
  ];
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Areas of Expertise</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Skills that define my work</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">A curated stack I use day-to-day to ship reliable full-stack products — from data layer to interface.</p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {groups.map(({ title, Icon, items, delay }) => (
            <Reveal key={title} delay={delay}>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-brand p-2.5"><Icon className="h-5 w-5 text-brand-foreground" /></div>
                <h2 className="font-display text-2xl font-bold">{title}</h2>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {items.map((s, i) => <SkillCard key={s.name} index={i} {...s} />)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
