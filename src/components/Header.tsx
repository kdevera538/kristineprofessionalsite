import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#stack", label: "Tech Stack" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Kris Digital logo" className="h-10 w-10 rounded-lg" />
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground">Kristine De Vera</div>
            <div className="text-xs text-muted-foreground">Automation • Sales • Marketing</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground bg-gradient-warm shadow-soft hover:shadow-glow transition-all"
          >
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
}
