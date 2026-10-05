import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Search, TrendingUp, X, ExternalLink, AlertCircle, Lightbulb, Layers } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import SectionHeader from './SectionHeader';
import { projects, projectThemes, type Project } from '@/data/projects';

/** Open a project's detail dialog from anywhere on the page. */
export const openProject = (title: string) => {
  window.dispatchEvent(new CustomEvent('ri:open-project', { detail: title }));
};

const ProjectsSection = () => {
  const [theme, setTheme] = useState<string>('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const p = projects.find((x) => x.title === (e as CustomEvent<string>).detail);
      if (p) setSelected(p);
    };
    window.addEventListener('ri:open-project', onOpen);
    return () => window.removeEventListener('ri:open-project', onOpen);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (theme !== 'All' && p.theme !== theme) return false;
      if (!q) return true;
      return [p.title, p.category, p.description, ...p.technologies].join(' ').toLowerCase().includes(q);
    });
  }, [theme, query]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    projectThemes.forEach((t) => (c[t] = projects.filter((p) => p.theme === t).length));
    return c;
  }, []);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-card/60 border-y">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          eyebrow="Projects & applications"
          title={
            <>
              From prototype to <span className="text-gradient">deployable systems</span>.
            </>
          }
          description="Translational projects where our research meets climate, health, learning and governance challenges. Open any project for the problem, the approach and the outcome."
        />

        {/* Controls */}
        <div className="reveal mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by theme">
            {['All', ...projectThemes].map((t) => {
              const on = theme === t;
              return (
                <button
                  key={t}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setTheme(t)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    on ? 'border-foreground bg-foreground text-background' : 'bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30'
                  }`}
                >
                  {t === 'All' ? 'All projects' : t}
                  <span className={`rounded-full px-1.5 font-mono text-[11px] ${on ? 'bg-background/20' : 'bg-muted'}`}>{counts[t]}</span>
                </button>
              );
            })}
          </div>
          <label className="relative block w-full lg:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or methods…"
              className="h-11 w-full rounded-full border bg-card pl-10 pr-4 text-sm outline-none transition focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
              aria-label="Search projects"
            />
          </label>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed bg-card p-12 text-center text-muted-foreground">
            No projects match “{query}”.{' '}
            <button className="font-medium text-primary hover:underline" onClick={() => { setQuery(''); setTheme('All'); }}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className="group surface surface-hover flex flex-col overflow-hidden text-left animate-in fade-in duration-500"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                    {p.category}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-black/40 px-2 py-1 font-mono text-[11px] text-white backdrop-blur">
                    #{String(p.id).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex items-center justify-between gap-3 text-xl font-semibold">
                    {p.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-auto pt-5">
                    <div className="flex items-start gap-2 rounded-xl bg-accent/[0.06] px-3 py-2.5 text-[13px] font-medium text-accent">
                      <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span className="line-clamp-2">{p.results}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Detail dialog */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden rounded-3xl border p-0 max-h-[92vh] overflow-y-auto [&>button]:hidden">
          {selected && (
            <>
              <div className="relative h-56 md:h-72">
                <img src={selected.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md hover:bg-white"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="relative -mt-14 px-6 pb-8 md:px-10 md:pb-10">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">{selected.category}</span>
                  <span className="rounded-full border bg-white px-3 py-1 text-xs font-medium text-muted-foreground">{selected.theme}</span>
                </div>
                <DialogTitle className="mt-4 font-display text-3xl md:text-4xl font-semibold">{selected.title}</DialogTitle>
                <DialogDescription className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {selected.description}
                </DialogDescription>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border bg-rose-50/50 p-5">
                    <div className="eyebrow mb-2 !text-rose-700">
                      <AlertCircle className="h-3.5 w-3.5" /> Problem
                    </div>
                    <p className="text-[15px] leading-relaxed text-foreground/80">{selected.problem}</p>
                  </div>
                  <div className="rounded-2xl border bg-sky-50/60 p-5">
                    <div className="eyebrow mb-2 !text-primary">
                      <Lightbulb className="h-3.5 w-3.5" /> Research + solution
                    </div>
                    <p className="text-[15px] leading-relaxed text-foreground/80">{selected.solution}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border bg-emerald-50/60 p-5">
                  <div className="eyebrow mb-2 !text-accent">
                    <TrendingUp className="h-3.5 w-3.5" /> Key outcome
                  </div>
                  <p className="font-display text-lg font-semibold text-foreground">{selected.results}</p>
                </div>

                <div className="mt-6">
                  <div className="eyebrow mb-3">
                    <Layers className="h-3.5 w-3.5" /> Methods & stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((t) => (
                      <span key={t} className="chip !text-foreground/80">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={selected.url} target="_blank" rel="noopener noreferrer" className="btn-brand">
                    <ExternalLink className="h-4 w-4" />
                    Visit live project
                  </a>
                  <a href="#contact" onClick={() => setSelected(null)} className="btn-ghost">
                    Collaborate on this
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
