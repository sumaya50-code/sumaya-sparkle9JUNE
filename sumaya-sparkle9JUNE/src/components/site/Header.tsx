import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Home, Trophy, GraduationCap, Briefcase, Image as ImageIcon, MessageSquare } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/skills", label: "Skills", icon: Trophy },
  { to: "/qualification", label: "Qualification", icon: GraduationCap },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/projects", label: "Projects", icon: ImageIcon },
  { to: "/contact", label: "Contact", icon: MessageSquare },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-gradient">Sumaya</span>
          <span className="text-foreground">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm text-foreground bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-lg transition-transform hover:scale-105 md:inline-flex"
        >
          Hire Me
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-full border border-border bg-surface p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 z-40 origin-top transform transition-all duration-300 ${
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <div className="container-page pb-6">
          <div className="glass rounded-2xl p-3">
            <ul className="grid grid-cols-2 gap-2">
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                      activeProps={{ className: "flex items-center gap-2 rounded-xl px-3 py-3 text-sm text-foreground bg-secondary" }}
                      activeOptions={{ exact: true }}
                    >
                      <Icon className="h-4 w-4" />
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-brand-foreground"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
