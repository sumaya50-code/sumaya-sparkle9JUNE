import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sumaya Akter" },
      { name: "description", content: "Get in touch with Sumaya Akter — full-stack developer. Email Sumaya0akter45@gmail.com or send a message." },
      { property: "og:title", content: "Contact — Sumaya Akter" },
      { property: "og:description", content: "Talk to me about your project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nProject:\n${form.project}`);
    window.location.href = `mailto:Sumaya0akter45@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Opening your email app…", {
      description: "Thanks for reaching out — I usually reply within 24 hours.",
    });
  };

  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Contact Me</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Get in touch</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">Have a project, role, or collaboration in mind? Send a message — I usually respond within 24 hours.</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Talk to me */}
          <Reveal delay={80} className="space-y-4 lg:col-span-2">
            <h2 className="font-display text-xl font-bold">Talk to me</h2>
            <a href="mailto:Sumaya0akter45@gmail.com" className="card-elevated flex items-start gap-4 p-5">
              <div className="rounded-xl bg-gradient-brand p-3"><Mail className="h-5 w-5 text-brand-foreground" /></div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="font-semibold break-all">Sumaya0akter45@gmail.com</p>
                <p className="mt-1 text-sm text-brand-2">Write a message →</p>
              </div>
            </a>
            <a href="tel:+8801690253986" className="card-elevated flex items-start gap-4 p-5">
              <div className="rounded-xl bg-gradient-brand p-3"><Phone className="h-5 w-5 text-brand-foreground" /></div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                <p className="font-semibold">+880 1690-253986</p>
                <p className="mt-1 text-sm text-brand-2">Call directly →</p>
              </div>
            </a>
          </Reveal>

          {/* Form */}
          <Reveal delay={160} className="lg:col-span-3">
            <h2 className="font-display text-xl font-bold">Write me about your project</h2>
            <form onSubmit={handleSubmit} className="mt-4 card-elevated space-y-4 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project</span>
                <textarea
                  required
                  rows={5}
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  placeholder="Tell me a little about what you'd like to build…"
                  className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              {sent && (
                <p className="flex items-center gap-2 text-sm text-brand-2 animate-fade-up">
                  <CheckCircle2 className="h-4 w-4" /> Your email client should now be open. Thanks!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
