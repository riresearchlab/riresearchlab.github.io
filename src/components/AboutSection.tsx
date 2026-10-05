import { Target, MapPin, Users, Award, Lightbulb, GraduationCap, Microscope } from 'lucide-react';
import SectionHeader from './SectionHeader';

const pillars = [
  {
    icon: Target,
    title: 'Our mission',
    body: 'Pioneering research in AI, distributed systems, neural computing and intelligent systems — while building bridges between academic excellence and real-world translation.',
  },
  {
    icon: MapPin,
    title: 'A regional hub',
    body: 'Based in Dhaka, we are a nexus for advanced computing research in South Asia — empowering local talent, engaging global partners, and putting the region on the innovation map.',
  },
  {
    icon: Users,
    title: 'Our community',
    body: 'A multidisciplinary collective of researchers, engineers, students and industry partners united by curiosity, rigor and problems that matter.',
  },
];

const principles = [
  {
    title: 'Theory + practice',
    body: 'Transformative ideas live where strong theory meets deliberate application. We pair mathematical depth with real problem framing, so the work is publishable and usable.',
  },
  {
    title: 'Open, collaborative science',
    body: 'Ideas cross domains, hierarchies and institutions here. Breakthroughs rarely happen in silos, so we design for interdisciplinary exchange and shared ownership.',
  },
  {
    title: 'Reproducibility & integrity',
    body: 'Open benchmarks, versioned datasets and auditable code. Reproducible science is the only solid foundation for progress that lasts.',
  },
  {
    title: 'Global partners, local impact',
    body: 'We work with universities, industry labs and international institutes — while staying rooted in the challenges and opportunities of Bangladesh and the Global South.',
  },
];

const highlights = [
  { icon: Award, label: 'Peer-reviewed research' },
  { icon: Lightbulb, label: 'Open innovation' },
  { icon: GraduationCap, label: 'Student mentorship' },
  { icon: Microscope, label: 'Applied research' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          eyebrow="Who we are"
          title={
            <>
              A lab built for <span className="text-gradient">rigor</span> and <span className="text-gradient">reach</span>.
            </>
          }
          description="RI Research Lab advances computer science and artificial intelligence through careful scholarship, collaborative discovery and translational impact."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="reveal surface surface-hover p-7 md:p-8"
                style={{ '--d': `${i * 90}ms` } as React.CSSProperties}
              >
                <span className="icon-tile mb-6 h-12 w-12">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mb-3 text-xl font-semibold">{p.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5 reveal">
          {highlights.map(({ icon: Icon, label }) => (
            <span key={label} className="chip !py-1.5 !text-sm">
              <Icon className="h-3.5 w-3.5 text-accent" />
              {label}
            </span>
          ))}
        </div>

        {/* Research philosophy */}
        <div className="reveal mt-16 grid gap-10 rounded-3xl border bg-card p-8 md:p-12 lg:grid-cols-[0.8fr_1.2fr]" style={{ boxShadow: 'var(--shadow-soft)' }}>
          <div>
            <div className="eyebrow mb-4">Research philosophy</div>
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
              Grounded in rigor. Driven by curiosity. <span className="text-gradient">Measured by impact.</span>
            </h3>
            <img src="/logo-full.png" alt="" className="mt-10 hidden h-40 w-auto opacity-90 lg:block" />
          </div>
          <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {principles.map((p, i) => (
              <li key={p.title} className="relative pl-12">
                <span className="absolute left-0 top-0 font-mono text-sm font-semibold text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="mb-2 text-lg font-semibold">{p.title}</h4>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
