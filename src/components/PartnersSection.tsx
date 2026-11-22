import { useState } from 'react';
import { ArrowUpRight, ExternalLink, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { partners, type Partner } from '@/data/partners';

const PartnerLogo = ({ partner }: { partner: Partner }) => {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className="flex h-full w-full items-center justify-center rounded-xl bg-primary/10 font-mono text-lg font-bold tracking-wide text-primary">
        {partner.short}
      </span>
    );
  }
  return (
    <img
      src={partner.logo}
      alt={`${partner.name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="max-h-full max-w-full object-contain"
    />
  );
};

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
        description="Academic partners we work with on research, supervision and student mentorship."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((p, i) => (
          <article
            key={p.name}
            className="reveal surface surface-hover flex flex-col p-6"
            style={{ '--d': `${i * 70}ms` } as React.CSSProperties}
          >
            <a
              href={p.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} website`}
              className="flex h-28 items-center justify-center rounded-xl border bg-white p-4"
            >
              <PartnerLogo partner={p} />
            </a>
            <h3 className="mt-5 text-lg font-semibold leading-snug">{p.name}</h3>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {p.location}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
            <div className="mt-5 flex items-center justify-between border-t pt-4 text-sm font-medium">
              <a href={p.details.href} className="inline-flex items-center gap-1.5 text-primary hover:underline">
                {p.details.label} <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.short} official website`}
                className="text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
