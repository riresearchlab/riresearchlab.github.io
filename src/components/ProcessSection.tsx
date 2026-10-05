import { HelpCircle, Database, Code2, ShieldCheck, Globe2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  { icon: HelpCircle, title: 'Frame the question', body: 'Start from a real problem — a gap in the literature or a pain point in the field — and state it precisely.' },
  { icon: Database, title: 'Gather evidence', body: 'Collect, clean and version the data. Survey prior work so we build on it instead of repeating it.' },
  { icon: Code2, title: 'Build & experiment', body: 'Prototype models and systems quickly, with baselines and ablations planned from day one.' },
  { icon: ShieldCheck, title: 'Validate rigorously', body: 'Reproducible runs, honest error analysis and peer review before anything is called a result.' },
  { icon: Globe2, title: 'Open & deploy', body: 'Publish the paper, release the code or tool, and pilot it with the people it was built for.' },
];

const ProcessSection = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeader
        index="05"
        eyebrow="How we work"
        title={
          <>
            A research loop that <span className="text-gradient">ends in the open</span>.
          </>
        }
        description="Every project — a paper, a dataset or a deployed tool — follows the same five-stage path."
      />

      <ol className="relative grid gap-5 md:grid-cols-5">
        {/* connector */}
        <div className="absolute left-0 right-0 top-7 hidden h-px md:block" style={{ background: 'linear-gradient(90deg, transparent, #3ab4f2 10%, #14b8a6 50%, #16b35a 90%, transparent)' }} />
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.title} className="reveal relative" style={{ '--d': `${i * 90}ms` } as React.CSSProperties}>
              <span className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border bg-card shadow-sm">
                <Icon className="h-5 w-5 text-primary" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand font-mono text-[10px] font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);

export default ProcessSection;
