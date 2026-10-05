import { Cpu, Brain, Network, MessageSquare, Layers, Satellite, TrendingUp, Clock, Heart, Landmark, Coins, GraduationCap, Binary } from 'lucide-react';

export const researchAreas = [
  {
    id: 'computer-science',
    title: 'Computer Science',
    icon: Cpu,
    summary: 'Fundamental algorithms, data structures, and computational theory research.',
    description: 'Advancing the core principles of computer science through algorithm optimization, complexity analysis, and innovative computing paradigms. Our work spans theoretical computer science to practical software engineering solutions.',
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    icon: Brain,
    summary: 'Machine learning, deep learning, and cognitive computing systems.',
    description: 'Developing next-generation AI systems that can learn, reason, and adapt. Our research focuses on explainable AI, ethical machine learning, and human-AI collaboration frameworks.',
  },
  {
    id: 'distributed-systems',
    title: 'Distributed Systems',
    icon: Network,
    summary: 'Scalable, fault-tolerant systems for modern computing environments.',
    description: 'Building resilient distributed architectures for cloud computing, edge processing, and IoT ecosystems. Our focus includes consensus algorithms, system reliability, and performance optimization.',
  },
  {
    id: 'neural-networking',
    title: 'Neural Networking',
    icon: Layers,
    summary: 'Advanced neural architectures and connectivity patterns.',
    description: 'Exploring novel neural network topologies, biological-inspired computing models, and brain-computer interfaces. Our research bridges neuroscience and computational intelligence.',
  },
  {
    id: 'large-language-models',
    title: 'Large Language Models',
    icon: MessageSquare,
    summary: 'Natural language processing and generative AI systems.',
    description: 'Developing sophisticated language models for multilingual understanding, generation, and reasoning. Our work focuses on efficiency, safety, and cultural adaptation of LLMs.',
  },
  {
    id: 'space-data',
    title: 'Space Data Analysis',
    icon: Satellite,
    summary: 'Astronomical data processing and space mission analytics.',
    description: 'Processing vast datasets from space missions, satellite observations, and astronomical surveys. Our work includes orbital mechanics modeling, space weather prediction, and deep space exploration data analysis.',
  },
  {
    id: 'financial-analysis',
    title: 'Financial Analytics',
    icon: TrendingUp,
    summary: 'Quantitative finance and market intelligence systems.',
    description: 'Developing predictive models for financial markets, risk assessment algorithms, and blockchain analytics. Our research focuses on algorithmic trading, fraud detection, and financial technology innovation.',
  },
  {
    id: 'history-visualization',
    title: 'History Visualization',
    icon: Clock,
    summary: 'Digital humanities and historical data representation.',
    description: 'Creating immersive visualizations of historical data, cultural heritage preservation, and timeline analytics. Our work includes archaeological data modeling, historical trend analysis, and interactive historical narratives.',
  },
  {
    id: 'human-health',
    title: 'Human Health Analytics',
    icon: Heart,
    summary: 'Healthcare data science and medical informatics.',
    description: 'Advancing personalized medicine through genomic analysis, epidemiological modeling, and health outcome prediction. Our research includes drug discovery acceleration, clinical trial optimization, and public health monitoring systems.',
  },
];

export const resources = [
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
  {
    id: 'reverse-engineering-research-arena',
    title: 'Reverse Engineering Arena',
    subtitle: 'LLM-Assisted Research Directions',
    icon: Binary,
    url: 'https://riresearchlab.github.io/reverse-engineering-research-arena/',
    description:
      'An open catalog of thirty-five LLM-assisted research directions for turning raw bytes back into human meaning \u2014 spanning decompilation, malware and firmware analysis, kernel internals, hardware signals and smart contracts.',
    highlights: ['35 research tracks across 8 domains', 'Question, objective & method per track', 'Searchable, keyword-filtered workspace'],
    tags: ['Reverse Engineering', 'Binary Analysis', 'LLM Research'],
  },
];

/** Related research areas (indices into researchAreas) — drives the hero graph and explorer. */
export const crossLinks: [number, number][] = [
  [0, 1], [1, 4], [1, 3], [3, 4], [0, 2], [2, 5], [5, 6], [6, 8], [7, 4], [8, 1], [7, 5],
];

/** Lab projects that apply each research area (by project title). */
export const areaProjects: Record<string, string[]> = {
  'computer-science': ['Connecting State', 'Kinetix Flow'],
  'artificial-intelligence': ['Holo Clinic', 'Mobi Circular', 'Sentinel Bot Infra', 'Sustain Stack'],
  'distributed-systems': ['Kinetix Flow', 'Nomadic Health', 'Holo Clinic'],
  'neural-networking': ['Mobi Circular', 'Holo Clinic'],
  'large-language-models': ['Lingua Trust', 'Ethos Learning'],
  'space-data': [],
  'financial-analysis': ['Fridge Force', 'Ammonia Drive'],
  'history-visualization': [],
  'human-health': ['Holo Clinic', 'Nomadic Health'],
};
