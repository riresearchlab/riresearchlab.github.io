import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Resources', href: '#resources' },
  { label: 'Projects', href: '#projects' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/70' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="RI Research Lab — home">
          <Logo size={34} />
        </a>

        <div className="hidden lg:flex items-center gap-1 rounded-full border bg-card/80 p-1 shadow-sm backdrop-blur">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.href
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex">
          <a href="#contact" className="btn-brand !px-5 !py-2.5">
            Collaborate
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border bg-card"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-background/97 backdrop-blur-xl transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex h-full flex-col px-5 pb-8 pt-4">
          <div className="flex-1 space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b py-4 font-display text-2xl font-semibold"
              >
                <span>
                  <span className="mr-3 font-mono text-xs text-primary">0{i + 1}</span>
                  {link.label}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </a>
            ))}
          </div>
          <a href="mailto:researchlabri@gmail.com" className="btn-ghost mt-6 w-full">
            <Mail className="h-4 w-4" />
            researchlabri@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
