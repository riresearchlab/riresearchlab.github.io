import { useState, useEffect } from 'react';
import { Menu, X, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Logo from './Logo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#researchareas' },
  { label: 'Projects', href: '#projects' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_-10px_hsl(var(--primary)/0.25)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center group -ml-2" aria-label="RI Research Lab Home">
          <Logo size={40} animate={false} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="mailto:researchlabri@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            researchlabri@gmail.com
          </a>
          <a href="#contact">
            <Button size="sm" className="btn-primary data-glow">
              Get in Touch
              <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background border-l-border p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between h-20 px-6 border-b border-border">
                  <Logo size={36} animate={false} />
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <X className="h-4 w-4" />
                    </Button>
                  </SheetClose>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        {link.label}
                        <span className="text-muted-foreground/40">→</span>
                      </a>
                    </SheetClose>
                  ))}
                </div>
                <div className="p-6 border-t border-border space-y-3">
                  <a
                    href="mailto:researchlabri@gmail.com"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted/50 text-sm hover:bg-muted transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    researchlabri@gmail.com
                  </a>
                  <SheetClose asChild>
                    <a href="#contact">
                      <Button className="w-full btn-primary data-glow">
                        Get in Touch
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
