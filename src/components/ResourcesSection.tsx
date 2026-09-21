import { ExternalLink, ArrowUpRight, Library, Landmark, Coins, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const resources = [
  {
    id: 'state-theory',
    title: 'রাষ্ট্রতত্ত্ব · Bangladesh',
    subtitle: 'State Theory & Governance Audit',
    icon: Landmark,
    url: 'https://riresearchlab.github.io/state-theory/',
    description:
      'An evidence-based reading of Bangladesh’s governance gap — why plans are written but roads are not built. Six theoretical lenses, a diagnostic checklist of institutional failures, and a ministry-level audit of structural deficits.',
    highlights: ['80 structural deficits across 20 ministries', 'Six theoretical lenses', 'State scorecard & indicators'],
    tags: ['Public Administration', 'Political Theory', 'Governance Reform'],
  },
  {
    id: 'funding-atlas',
    title: 'Funding Atlas',
    subtitle: '100 Routes for Bangladeshi Founders',
    icon: Coins,
    url: 'https://riresearchlab.github.io/funding-atlas/',
    description:
      'A curated atlas of grants, accelerators, cloud credits, competitions, hackathons and development funds open to Bangladeshi founders — filterable by type, stage and geography, with a shortlist you can build as you browse.',
    highlights: ['100 programs across 7 categories', 'Filter by type, stage & geography', 'Shortlist and compare'],
    tags: ['Startup Funding', 'Non-Dilutive Capital', 'Ecosystem Data'],
  },
  {
    id: 'cs-departments',
    title: 'Computing Departments',
    subtitle: 'Where the Top-Ranked Programs Live',
    icon: GraduationCap,
    url: 'https://riresearchlab.github.io/cs-departments/',
    description:
      'A directory of computing departments at globally top-ranked universities, built on QS World University Rankings 2027 — filterable by discipline, with direct links to every official department page.',
    highlights: ['Global, US & Bangladesh top 20 views', 'CS, SE, IT, AI & Data Science', 'Direct official department links'],
    tags: ['Higher Education', 'Rankings Data', 'Graduate Pathways'],
  },
];

const ResourcesSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-muted/20" id="resources">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-data/30 bg-data/5 text-data">
            <Library className="h-3.5 w-3.5 mr-2" />
            Open Knowledge Platforms
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="section-title hero-text">Research Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-12">
            Free, openly accessible references built by the lab — interactive atlases, audits and
            directories that turn scattered public data into something researchers, founders and
            students can actually use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card rounded-2xl p-7 flex flex-col group animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-xl font-bold mb-1.5 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm font-medium text-accent mb-4">{resource.subtitle}</p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {resource.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {resource.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-data shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {resource.tags.map((tag) => (
                    <span key={tag} className="tech-badge px-2 py-0.5 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 pt-4 border-t border-border text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open Resource</span>
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
