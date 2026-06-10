import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, type Project } from "@/lib/portfolio-data";
import { ExternalLink, Folder } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import shomitiImage from "@/assets/shomiti-management-system.png";
import DocumentImage from "@/assets/document_management.png";
import LabishImage from "@/assets/Hotel management.jpg";
import EcommerceFrontendImage from "@/assets/ecommerce-frontend.png";
import EcommerceFurnitureImage from "@/assets/ecommerce_furniture.jpg";
import EcommerceFoodImage from "@/assets/ecommerce_food.png";
import LearnHubImage from "@/assets/learnHub.png";
import PersonalPortfolioImage from "@/assets/Personal Portfolio.png";
import ThreeDPortfolioImage from "@/assets/3D Portfolio.png";
import GitHubProfilesImage from "@/assets/GitHub Profiles.jpg";
import EnglishDictionaryImage from "@/assets/English Dictionary.png";
import FoodSearchAppImage from "@/assets/Food Search App.jpg";
import CurrencyConverterImage from "@/assets/Currency Converter.png";
import CountdownTimerImage from "@/assets/Countdown Timer.png";
import SmartMealImage from "@/assets/SmartMeal.png";
import ResumeBuilderImage from "@/assets/Resumebuilder.png";

const projectImageMap: Record<string, string> = {
  "shomiti-management-system.png": shomitiImage,
  "document_management.png": DocumentImage,
  "Hotel management.jpg": LabishImage,
  "ecommerce-frontend.png": EcommerceFrontendImage,
  "ecommerce_furniture.jpg": EcommerceFurnitureImage,
  "ecommerce_food.png": EcommerceFoodImage,
  "learnHub.png": LearnHubImage,
  "personal-portfolio.png": PersonalPortfolioImage,
  "3d-portfolio.png": ThreeDPortfolioImage,
  "GitHub Profiles.jpg": GitHubProfilesImage,
  "English Dictionary.png": EnglishDictionaryImage,
  "Food Search App.jpg": FoodSearchAppImage,
  "Currency Converter.png": CurrencyConverterImage,
  "Countdown Timer.png": CountdownTimerImage,
  "SmartMeal.png": SmartMealImage,
  "Resumebuilder.png": ResumeBuilderImage,
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sumaya Akter" },
      { name: "description", content: "Selected work: management systems, e-commerce platforms, portfolio sites, and apps built with Laravel, PHP, and React." },
      { property: "og:title", content: "Projects — Sumaya Akter" },
      { property: "og:description", content: "Most recent full-stack work across management, e-commerce, portfolio, and apps." },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Management", "E-commerce", "Portfolio", "Apps", "Educations", "Career & Productivity"] as const;
type Filter = (typeof filters)[number];

function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Projects</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Most recent work</h1>
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-95 ${
                filter === f
                  ? "bg-gradient-brand text-brand-foreground shadow-lg"
                  : "border border-border bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p: Project, i) => {
            const imageFileName = p.image;
            const imageSrc = imageFileName ? projectImageMap[imageFileName] : undefined;
            const projectUrl =
              p.title === "Shomiti Management System"
                ? "https://github.com/sumaya76/SomitiManagementSystem"
                : p.title === "SmartMeal"
                  ? "https://github.com/sumaya76/SmartMeal"
                : p.title === "AI Resume Builder"
                  ? "https://github.com/sumaya76/resumyBuilder"
                : p.title === "Document Management System (DMS)"
                  ? "https://github.com/sumaya76/document-management"
                  : p.title === "Hotel Booking System (Labish)"
                    ? "https://github.com/sumaya76/Hotelmanagement"
                    : p.title === "E-Commerce — Furnifrenzy"
                      ? "https://github.com/sumaya76/ecommerce_project"
                    : p.title === "E-Commerce — Food"
                      ? "https://github.com/sumaya76/E-CommerceProjectLaravel"
                      : p.title === "MediCore — Full-Stack Hospital Management System"
                        ? "https://github.com/sumaya76/HospitalManagement"
                        : p.title === "HireFlow — AI-powered Applicant Tracking System"
                          ? "https://github.com/sumaya76/hireflow"
                          : p.title === "LearnHub — Online Learning Platform"
                            ? "https://github.com/sumaya76/learnhUB"
                        : p.title === "Modern E-Commerce Frontend System"
                          ? "https://github.com/sumaya76/ecommerce"
                          : p.title === "Personal Portfolio Website"
                            ? "https://github.com/sumaya76/My-Portfolio"
                            : p.title === "3D Portfolio Website"
                              ? "https://github.com/sumaya76/Sumaya_portfolio"
                              : p.title === "GitHub Profiles Search App"
                                ? "https://hilarious-sawine-903797.netlify.app/"
                                : p.title === "English Dictionary App"
                                  ? "https://serene-youtiao-c2112d.netlify.app/"
                                  : p.title === "Food Search App"
                                    ? "https://github.com/sumaya76/project_four"
                                    : p.title === "Currency Converter"
                                      ? "https://nimble-khapse-9d1049.netlify.app/"
                                      : p.title === "Countdown Timer"
                                        ? "https://keen-nasturtium-891d5d.netlify.app/"
                                        : "#";
            const shouldOpenExternal = projectUrl !== "#";

            return (
              <article
                key={p.title}
                className="card-elevated group flex h-full flex-col overflow-hidden animate-fade-up"
                style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-brand">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={`${p.title} screenshot`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.4), transparent 40%)",
                        }}
                      />
                      <Folder className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-brand-foreground/80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                    </>
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">#{t}</span>
                    ))}
                  </div>
                  <a
                    href={projectUrl}
                    target={shouldOpenExternal ? "_blank" : undefined}
                    rel={shouldOpenExternal ? "noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-2 transition-all hover:gap-3 story-link"
                  >
                    View project <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
