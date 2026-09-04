import { Mail, Phone, Globe, MapPin, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Logo from './Logo';

const footerLinks = {
  lab: [
    { label: 'About Us', href: '#about' },
    { label: 'Research Areas', href: '#researchareas' },
    { label: 'Projects', href: '#projects' },
    { label: 'Community', href: '#community' },
    { label: 'Contact', href: '#contact' },
  ],
  research: [
    { label: 'Artificial Intelligence', href: '#researchareas' },
    { label: 'Distributed Systems', href: '#researchareas' },
    { label: 'Neural Computing', href: '#researchareas' },
    { label: 'Large Language Models', href: '#researchareas' },
    { label: 'Data Science', href: '#researchareas' },
  ],
  resources: [
    { label: 'Research Benchmark', href: '#community' },
    { label: 'Open Projects', href: '#projects' },
    { label: 'Internships', href: '#community' },
    { label: 'Collaboration', href: '#community' },
    { label: 'Guidelines', href: '#community' },
  ],
};

const socials = [
  { icon: Github, href: 'https://github.com/riresearchlab', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/50 overflow-hidden" id="contact">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-3xl rounded-full translate-y-1/3 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top row: Brand + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-5 -ml-2">
              <Logo size={52} animate={false} />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm text-sm">
              Advancing the frontiers of Computer Science, Artificial Intelligence, and
              Intelligent Systems through rigorous research, open collaboration, and
              translational innovation — from Dhaka, Bangladesh, for the world.
            </p>
            <div className="space-y-3.5">
              <a
                href="mailto:researchlabri@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                researchlabri@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                +880 1511-803004
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-neural/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-neural" />
                </div>
                Dhaka, Bangladesh
              </div>
              <a
                href="https://riresearchlab.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-data transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-data/10 flex items-center justify-center">
                  <Globe className="h-4 w-4 text-data" />
                </div>
                riresearchlab.github.io
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground mb-5">Laboratory</h4>
              <ul className="space-y-2.5">
                {footerLinks.lab.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground mb-5">Research</h4>
              <ul className="space-y-2.5">
                {footerLinks.research.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground mb-5">Resources</h4>
              <ul className="space-y-2.5">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-neural transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {['AI Research', 'Distributed Systems', 'NLP / LLMs', 'Data Science', 'Open Science'].map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs border-border bg-muted/30 text-muted-foreground hover:border-primary/40 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/70">
              Advancing computing research from South Asia — with global impact.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted hover:border-primary/30 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} RI Research Lab · All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
