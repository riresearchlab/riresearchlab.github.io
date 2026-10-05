import { GraduationCap, Briefcase, BookOpen, ArrowRight, Mail, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';

const benchmark = [
  { title: 'Standardized metrics', body: 'Evaluation criteria covering research quality, reproducibility, deployment rigor and societal impact.' },
  { title: 'Open collaboration', body: 'Transparent, inclusive and ethical practices that accelerate shared innovation across institutions.' },
  { title: 'Global + local impact', body: 'Outcomes that translate into deployable solutions for global challenges and under-served regional contexts.' },
];

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students & early-career researchers',
    body: 'Structured research internships, thesis co-supervision, hands-on engineering experience and publication mentorship.',
  },
  {
    icon: Briefcase,
    title: 'Industry engineers & practitioners',
    body: 'Bring production-grade engineering to research challenges; co-design systems that scale from prototype to deployment.',
  },
  {
    icon: BookOpen,
    title: 'Faculty, scientists & partner labs',
    body: 'Co-author papers, co-supervise students, pursue joint grants and run shared experimental programs.',
  },
];

const openings = [
  { label: 'Research internships', status: 'Open' },
  { label: 'Joint projects', status: 'Accepting' },
  { label: 'Visiting researchers', status: 'Apply' },
];

const CommunitySection = () => (
  <section id="community" className="relative py-24 md:py-32 bg-card/60 border-y">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeader
        index="06"
        eyebrow="Community & collaboration"
        title={
          <>
            Research is a team sport. <span className="text-gradient">Join the team.</span>
          </>
        }
        description="We are building an inclusive research ecosystem through partnerships, open knowledge and new standards for R&D excellence."
      />

      {/* Benchmark */}
      <div className="reveal relative overflow-hidden rounded-3xl p-8 md:p-12 text-white" style={{ background: 'linear-gradient(135deg, #0b5f86 0%, #0d7d72 55%, #127a42 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-30 [filter:invert(1)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em]">
              <Award className="h-3.5 w-3.5" /> In development
            </span>
            <h3 className="mt-5 text-3xl md:text-4xl font-semibold">RI Research Benchmark</h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/80">
              An evolving standard for measuring R&D excellence in computer science, AI, distributed systems and
              data-driven innovation — designed for the Global South.
            </p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b5f86] transition hover:bg-white/90">
              Help shape the benchmark <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {benchmark.map((b, i) => (
              <div key={b.title} className="flex gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm">
                <span className="font-mono text-sm font-bold text-white/60">0{i + 1}</span>
                <div>
                  <h4 className="font-semibold">{b.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get involved */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-4">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="reveal surface surface-hover flex gap-5 p-6" style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
                <span className="icon-tile h-12 w-12 shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">{a.title}</h4>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="reveal surface p-7 lg:sticky lg:top-24 self-start">
          <h4 className="text-2xl font-semibold">Get involved</h4>
          <p className="mt-1 text-sm text-muted-foreground">Rolling openings — no deadlines. Apply when you're ready.</p>
          <ul className="mt-6 divide-y rounded-2xl border">
            {openings.map((o) => (
              <li key={o.label} className="flex items-center justify-between px-4 py-3.5">
                <span className="font-medium">{o.label}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring" />
                  {o.status}
                </span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-brand mt-6 w-full">
            Apply for collaboration <ArrowRight className="h-4 w-4" />
          </a>
          <a href="mailto:researchlabri@gmail.com" className="btn-ghost mt-3 w-full">
            <Mail className="h-4 w-4" /> researchlabri@gmail.com
          </a>
        </aside>
      </div>
    </div>
  </section>
);

export default CommunitySection;
