import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-gradient text-lg">AR.</span>
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        </div>
        <nav className="flex items-center gap-5">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="hover:text-foreground transition-colors">
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
