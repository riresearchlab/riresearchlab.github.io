import { Github, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { researchAreas, resources } from '@/data/lab';

const lab = [
  { label: 'About', href: '#about' },
  { label: 'Research areas', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t bg-card">
    <div className="absolute inset-x-0 top-0 h-1 bg-brand" />
    <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Logo size={40} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Advancing computer science, artificial intelligence and intelligent systems through rigorous research, open
            collaboration and translational innovation — from Dhaka, for the world.
          </p>
          <div className="mt-6 flex gap-2">
            <a href="https://github.com/riresearchlab" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border hover:border-primary/40 hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="mailto:researchlabri@gmail.com" aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full border hover:border-primary/40 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="eyebrow mb-4 !text-foreground">Laboratory</h4>
            <ul className="space-y-2.5 text-sm">
              {lab.map((l) => (
                <li key={l.label}><a href={l.href} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-4 !text-foreground">Research</h4>
            <ul className="space-y-2.5 text-sm">
              {researchAreas.slice(0, 5).map((a) => (
                <li key={a.id}><a href="#research" className="text-muted-foreground hover:text-primary transition-colors">{a.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-4 !text-foreground">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {resources.map((r) => (
                <li key={r.id}><a href={r.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{r.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} RI Research Lab · Dhaka, Bangladesh</p>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
