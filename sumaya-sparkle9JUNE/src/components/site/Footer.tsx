import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="font-display text-2xl font-bold">
              <span className="text-gradient">Sumaya</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Full-Stack Developer crafting scalable web applications with Laravel, PHP, and modern JavaScript.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/skills" className="hover:text-foreground">Skills</Link></li>
              <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:Sumaya0akter45@gmail.com" className="hover:text-foreground">Sumaya0akter45@gmail.com</a></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+8801690253986" className="hover:text-foreground">+880 1690-253986</a></li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a aria-label="GitHub" href="#" className="rounded-full border border-border p-2 text-muted-foreground hover:border-brand hover:text-foreground"><Github className="h-4 w-4" /></a>
              <a aria-label="LinkedIn" href="#" className="rounded-full border border-border p-2 text-muted-foreground hover:border-brand hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Sumaya Akter. All rights reserved.</p>
          <p>Built with care · Laravel · React · TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
