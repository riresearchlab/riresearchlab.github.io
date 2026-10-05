import { ArrowRight, ArrowUpRight, BookOpenCheck, Sparkles } from 'lucide-react';
import ResearchGraph from './ResearchGraph';
import { researchAreas, resources } from '@/data/lab';
import { projects } from '@/data/projects';

export const selectResearchArea = (id: string) => {
  window.dispatchEvent(new CustomEvent('ri:select-area', { detail: id }));
  document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
};

const stats = [
  { value: researchAreas.length, label: 'Research areas' },
  { value: projects.length, label: 'Impact projects' },
  { value: resources.length, label: 'Open resources' },
  { value: '35', label: 'Open research tracks' },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* Backdrop */}
      <div className="absolute inset-0 grid-bg fade-mask-b" />
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(58,180,242,0.35), transparent 65%)' }}
      />
      <div
        className="absolute top-20 -right-40 h-[560px] w-[560px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(22,179,90,0.28), transparent 65%)' }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-24 lg:pt-16">
        <div>
          <div className="reveal chip mb-7 !py-1.5 font-mono !text-[11px] uppercase tracking-[0.16em]">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-ring" />
            Computer Science Research Lab · Dhaka, Bangladesh
          </div>

          <h1 className="reveal text-[2.75rem] font-bold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[4.4rem]" style={{ '--d': '80ms' } as React.CSSProperties}>
            Research that turns <span className="text-gradient">hard questions</span> into working systems.
          </h1>

          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl" style={{ '--d': '160ms' } as React.CSSProperties}>
            RI Research Lab studies artificial intelligence, language models and distributed systems — and
            ships what it learns as open tools, datasets and deployable prototypes for South Asia and beyond.
          </p>

          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row" style={{ '--d': '240ms' } as React.CSSProperties}>
            <a href="#research" className="btn-brand !py-3.5">
              Explore our research
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#resources" className="btn-ghost !py-3.5">
              <BookOpenCheck className="h-4 w-4 text-primary" />
              Open resources
            </a>
          </div>

          <dl className="reveal mt-12 grid max-w-xl grid-cols-2 overflow-hidden rounded-2xl border bg-card/80 backdrop-blur sm:grid-cols-4" style={{ '--d': '320ms' } as React.CSSProperties}>
            {stats.map((s, i) => (
              <div key={s.label} className={`px-5 py-4 ${i % 2 ? 'border-l' : ''} ${i > 1 ? 'border-t sm:border-t-0' : ''} ${i === 2 ? 'sm:border-l' : ''}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-gradient">{s.value}</dd>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Interactive graph */}
        <div className="reveal relative mx-auto hidden w-full max-w-[560px] sm:block" style={{ '--d': '200ms' } as React.CSSProperties}>
          <ResearchGraph onSelect={selectResearchArea} />

          <a
            href="#resources"
            className="absolute -left-6 -top-2 hidden xl:flex items-center gap-3 rounded-2xl border bg-card/95 px-4 py-3 shadow-lg backdrop-blur animate-float-y"
          >
            <span className="icon-tile h-9 w-9">
              <Sparkles className="h-4 w-4 text-primary" />
            </span>
            <span className="text-left">
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Latest release</span>
              <span className="block text-sm font-semibold">Reverse Engineering Arena</span>
            </span>
          </a>

          <div
            className="absolute left-0 bottom-2 hidden xl:block rounded-2xl border bg-card/95 px-4 py-3 shadow-lg backdrop-blur animate-float-y"
            style={{ animationDelay: '-3s' }}
          >
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Hover a node</span>
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              See how fields connect <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
