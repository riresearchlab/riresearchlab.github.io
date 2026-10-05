import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Link2, FolderGit2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { researchAreas, crossLinks, areaProjects } from '@/data/lab';
import { openProject } from './ProjectsSection';

const ResearchAreasSection = () => {
  const [activeId, setActiveId] = useState(researchAreas[1].id);

  useEffect(() => {
    const onSelect = (e: Event) => setActiveId((e as CustomEvent<string>).detail);
    window.addEventListener('ri:select-area', onSelect);
    return () => window.removeEventListener('ri:select-area', onSelect);
  }, []);

  const activeIndex = researchAreas.findIndex((a) => a.id === activeId);
  const active = researchAreas[activeIndex];
  const Icon = active.icon;
  const related = crossLinks
    .filter(([a, b]) => a === activeIndex || b === activeIndex)
    .map(([a, b]) => researchAreas[a === activeIndex ? b : a]);
  const projects = areaProjects[active.id] ?? [];

  return (
    <section id="research" className="relative py-24 md:py-32 bg-card/60 border-y">
      <div className="absolute inset-0 dot-bg opacity-60 fade-mask-radial pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          eyebrow="Research areas"
          title={
            <>
              Nine fields, <span className="text-gradient">one connected agenda</span>.
            </>
          }
          description="Our work spans core computer science through applied analytics. Pick an area to see what we study, how it connects to the rest of the lab, and where it already ships."
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
          {/* Area list */}
          <div role="tablist" aria-label="Research areas" className="reveal -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 snap-x lg:mx-0 lg:grid lg:grid-cols-1 lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:none]">
            {researchAreas.map((area, i) => {
              const AreaIcon = area.icon;
              const selected = area.id === activeId;
              return (
                <button
                  key={area.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="research-panel"
                  onClick={() => setActiveId(area.id)}
                  className={`group flex shrink-0 snap-start items-center gap-3 lg:gap-4 rounded-xl border px-4 py-3 lg:py-3.5 text-left transition-all ${
                    selected
                      ? 'border-primary/40 bg-card shadow-[var(--shadow-soft)]'
                      : 'border-border lg:border-transparent bg-card lg:bg-transparent hover:border-border hover:bg-card/80'
                  }`}
                >
                  <span className="hidden lg:inline w-6 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${selected ? 'bg-brand text-white' : 'bg-muted text-muted-foreground group-hover:text-primary'}`}>
                    <AreaIcon className="h-4 w-4" />
                  </span>
                  <span className={`whitespace-nowrap flex-1 font-display font-semibold ${selected ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                    {area.title}
                  </span>
                  <ArrowRight className={`hidden lg:block h-4 w-4 transition-all ${selected ? 'text-primary translate-x-0 opacity-100' : 'opacity-0 -translate-x-2'}`} />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            id="research-panel"
            role="tabpanel"
            key={active.id}
            className="relative overflow-hidden rounded-3xl border bg-card p-8 md:p-10 animate-in fade-in slide-in-from-bottom-2 duration-500"
            style={{ boxShadow: 'var(--shadow-lift)' }}
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.12] bg-brand blur-2xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  Area {String(activeIndex + 1).padStart(2, '0')} / {String(researchAreas.length).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-7 text-3xl md:text-4xl font-semibold">{active.title}</h3>
              <p className="mt-3 text-lg font-medium text-primary">{active.summary}</p>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">{active.description}</p>

              <div className="mt-9 grid gap-6 border-t pt-7 md:grid-cols-2">
                <div>
                  <div className="eyebrow mb-3">
                    <Link2 className="h-3.5 w-3.5" /> Connected fields
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {related.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => setActiveId(r.id)}
                        className="chip hover:border-primary/40 hover:text-foreground transition-colors"
                      >
                        {r.title}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="eyebrow mb-3">
                    <FolderGit2 className="h-3.5 w-3.5" /> Applied in
                  </div>
                  {projects.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {projects.map((title) => (
                        <button
                          key={title}
                          onClick={() => openProject(title)}
                          className="chip !border-accent/25 !bg-accent/5 !text-accent hover:!bg-accent/10 transition-colors"
                        >
                          {title}
                          <ArrowUpRight className="h-3 w-3" />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Early-stage — we're looking for collaborators.{' '}
                      <a href="#contact" className="font-medium text-primary hover:underline">
                        Propose a project →
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreasSection;
