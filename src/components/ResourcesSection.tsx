import { ArrowUpRight, Check } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { resources } from '@/data/lab';

const tints = [
  'from-sky-100 via-cyan-50 to-white',
  'from-emerald-100 via-teal-50 to-white',
  'from-cyan-100 via-sky-50 to-white',
  'from-teal-100 via-emerald-50 to-white',
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          eyebrow="Open knowledge platforms"
          title={
            <>
              Free tools that make <span className="text-gradient">public data usable</span>.
            </>
          }
          description="Interactive atlases, audits and directories built by the lab — turning scattered information into something researchers, founders and students can actually work with."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((r, i) => {
            const Icon = r.icon;
            const host = r.url.replace('https://', '').replace(/\/$/, '');
            return (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group surface surface-hover flex flex-col overflow-hidden"
                style={{ '--d': `${(i % 2) * 100}ms` } as React.CSSProperties}
              >
                {/* Browser-chrome header */}
                <div className={`relative bg-gradient-to-br ${tints[i % tints.length]} px-6 pb-7 pt-4 border-b`}>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </span>
                    <span className="flex-1 truncate rounded-full border bg-white/80 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      {host}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-border">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate text-xl md:text-2xl font-semibold">{r.title}</h3>
                      <p className="text-sm font-medium text-accent">{r.subtitle}</p>
                    </div>
                    <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="leading-relaxed text-muted-foreground">{r.description}</p>
                  <ul className="mt-5 mb-6 space-y-2">
                    {r.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-1.5 border-t pt-5">
                    {r.tags.map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
