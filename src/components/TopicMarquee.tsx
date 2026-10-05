const topics = [
  'Explainable AI', 'Large Language Models', 'Federated Learning', 'Edge AI', 'Consensus Algorithms',
  'Bangla NLP', 'Medical Imaging', 'Binary Analysis', 'Graph Neural Networks', 'Digital Governance',
  'Satellite Data', 'Quantitative Finance', 'Digital Humanities', 'Reproducible Science',
];

const TopicMarquee = () => (
  <div className="relative border-y bg-card/60 py-5 overflow-hidden" aria-hidden="true">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
    <div className="flex w-max animate-marquee gap-10">
      {[...topics, ...topics].map((t, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-medium text-muted-foreground">
          {t}
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        </span>
      ))}
    </div>
  </div>
);

export default TopicMarquee;
