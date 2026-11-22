import SectionHeader from './SectionHeader';
import partners from '@/data/partners.json';

const PartnersSection = () => (
  <section id="collaborations" className="relative py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeader
        index="07"
        eyebrow="Collaborations"
        title={
          <>
            Universities we <span className="text-gradient">collaborate with.</span>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {partners.map((p, i) => (
          <a
            key={p.name}
            href={p.href}
            aria-label={p.name}
            title={p.name}
            className="reveal surface surface-hover flex h-40 items-center justify-center bg-white p-6"
            style={{ '--d': `${i * 70}ms` } as React.CSSProperties}
          >
            <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
