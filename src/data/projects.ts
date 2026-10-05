import ammoniaDriveImg from '@/assets/ammonia-drive.jpg';
import bioEnvelopeImg from '@/assets/bio-envelope.png';
import connectingStateImg from '@/assets/government-admin.jpg';
import ethosLearningImg from '@/assets/ethos-learning.jpg';
import fridgeForceImg from '@/assets/fridge-force.jpg';
import greenStepperImg from '@/assets/green-stepper.jpg';
import holoClinicImg from '@/assets/holo-clinic.jpg';
import kinetixFlowImg from '@/assets/kinetix-flow.png';
import linguaTrustImg from '@/assets/lingua-trust.jpg';
import mobiCircularImg from '@/assets/mobi-circular.jpg';
import nomadicHealthImg from '@/assets/nomadic-health.png';
import sentinelBotInfraImg from '@/assets/sentinel-bot-infra.jpg';
import sustainStackImg from '@/assets/sustain-stack.jpg';

export type ProjectTheme = 'Climate & Energy' | 'Health & Life' | 'Learning & Language' | 'Governance & Infrastructure';

export interface Project {
  id: number;
  title: string;
  category: string;
  theme: ProjectTheme;
  image: string;
  url: string;
  description: string;
  technologies: string[];
  results: string;
  problem: string;
  solution: string;
}

export const projectThemes: ProjectTheme[] = ['Climate & Energy', 'Health & Life', 'Learning & Language', 'Governance & Infrastructure'];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ammonia Drive',
    category: 'Clean Energy Logistics',
    theme: 'Climate & Energy',
    image: ammoniaDriveImg,
    url: 'https://riresearchlab.github.io/ammonia-drive/',
    description: 'Enterprise platform transitioning heavy-duty Middle Mile logistics from diesel to green ammonia—safely, verifiably, and profitably.',
    technologies: ['Green Chemistry', 'AI Route Optimization', 'IoT', 'Zero-Leak Standard'],
    results: '12gCO₂/MJ fuel intensity with Scope 3 verification',
    problem: 'Heavy-duty logistics relies heavily on diesel, contributing to significant carbon emissions and environmental pollution.',
    solution: 'Developed a green ammonia logistics platform that safely transitions fleet operations to sustainable fuel sources.',
  },
  {
    id: 2,
    title: 'Bio Envelope',
    category: 'Architectural Technology',
    theme: 'Climate & Energy',
    image: bioEnvelopeImg,
    url: 'https://riresearchlab.github.io/bio-envelope/',
    description: 'Transform static warehouses into living carbon sinks with photobioreactor facades that sequester CO₂ at rates 10–50× higher than trees.',
    technologies: ['Photobioreactor Technology', 'Algae Cultivation', 'Carbon Sequestration', 'Smart Software'],
    results: '10-50× higher CO₂ sequestration than trees',
    problem: 'Traditional buildings are carbon emitters with static, energy-intensive environmental systems.',
    solution: 'Created living building facades using algae photobioreactors that actively absorb CO₂ and produce oxygen.',
  },
  {
    id: 3,
    title: 'Ethos Learning',
    category: 'Cultural Education',
    theme: 'Learning & Language',
    image: ethosLearningImg,
    url: 'https://riresearchlab.github.io/ethos-learning/',
    description: 'AI-powered cultural context tutor that transcreates curriculum into cultural frameworks—not just translate words.',
    technologies: ['Emotion AI', 'NLP', 'Cultural Frameworks', '99+ Languages'],
    results: 'Culture-first approach reaching global learners',
    problem: 'Technology often fails to account for cultural context, making education less effective across different regions.',
    solution: 'Built an AI system that understands and incorporates cultural context into educational content delivery.',
  },
  {
    id: 4,
    title: 'Fridge Force',
    category: 'Food Security',
    theme: 'Climate & Energy',
    image: fridgeForceImg,
    url: 'https://riresearchlab.github.io/fridge-force/',
    description: 'Solar-powered, thermal-battery cold storage for rural cooperatives, turning post-harvest loss into economic floor-stability.',
    technologies: ['Solar Power', 'Thermal Battery', 'IoT Monitoring', 'Blockchain Carbon Credits'],
    results: '40% of crops saved in emerging markets',
    problem: '40% of crops are lost in emerging markets due to lack of cold storage, causing $310B annual economic loss.',
    solution: 'Deployed modular, off-grid cold storage units powered entirely by solar energy with blockchain-verified carbon credits.',
  },
  {
    id: 5,
    title: 'Green Stepper',
    category: 'Vocational Training',
    theme: 'Learning & Language',
    image: greenStepperImg,
    url: 'https://riresearchlab.github.io/green-stepper/',
    description: 'Augmented Reality platform turning any location into a world-class vocational lab for the zero-carbon workforce.',
    technologies: ['Augmented Reality', 'Vocational Training', 'Mobile Platform', 'Green Technology'],
    results: '90% cost reduction vs. physical labs, 3× faster certification',
    problem: '100M+ green tech workers needed by 2035, but traditional training methods are slow and expensive.',
    solution: 'Created an AR-powered training platform that turns real-world environments into interactive learning labs.',
  },
  {
    id: 6,
    title: 'Holo Clinic',
    category: 'Medical AI',
    theme: 'Health & Life',
    image: holoClinicImg,
    url: 'https://riresearchlab.github.io/holo-clinic/',
    description: 'Privacy-first medical AI bringing specialist-level screening to underserved regions with Edge-AI that learns globally, diagnoses locally.',
    technologies: ['Edge AI', 'Federated Learning', 'Medical Imaging', 'Privacy-First Design'],
    results: '>85% sensitivity with zero data leaks',
    problem: 'Underserved regions lack access to specialist-level medical diagnosis due to infrastructure and connectivity limitations.',
    solution: 'Developed federated AI diagnostics that work on 2G networks without ever moving patient data.',
  },
  {
    id: 7,
    title: 'Kinetix Flow',
    category: 'Industrial Energy',
    theme: 'Climate & Energy',
    image: kinetixFlowImg,
    url: 'https://riresearchlab.github.io/kinetix-flow/',
    description: 'Transform fulfillment center conveyor networks into a regenerative energy grid with closed-loop energy management.',
    technologies: ['IIoT', 'Cloud Analytics', 'Energy Recovery', 'Edge Computing'],
    results: '30% energy recovery with 99.7% uptime SLA',
    problem: 'Fulfillment centers consume massive amounts of energy with significant mechanical energy wasted as heat.',
    solution: 'Created a kinetic energy recovery system that captures and reuses mechanical energy from conveyor systems.',
  },
  {
    id: 8,
    title: 'Lingua Trust',
    category: 'Digital Sovereignty',
    theme: 'Learning & Language',
    image: linguaTrustImg,
    url: 'https://riresearchlab.github.io/lingua-trust/',
    description: 'On-device Small Language Models (SLMs) that function entirely offline under community command for digital sovereignty.',
    technologies: ['Small Language Models', 'On-Device AI', 'Offline Operation', '<10W Power'],
    results: 'Zero-cloud dependency, complete community data ownership',
    problem: 'Indigenous and minority language communities lack AI tools that respect their data sovereignty.',
    solution: 'Built community-owned AI systems that run entirely offline on local devices with zero cloud dependency.',
  },
  {
    id: 9,
    title: 'Mobi Circular',
    category: 'Urban Mining',
    theme: 'Climate & Energy',
    image: mobiCircularImg,
    url: 'https://riresearchlab.github.io/mobi-circular/',
    description: 'Neural sorting and reinforcement learning for automated e-waste urban mining with unprecedented rare-earth metal recovery.',
    technologies: ['Neural Sorting', 'Reinforcement Learning', 'Blockchain Verification', 'Robotics'],
    results: 'High-purity rare-earth metal extraction',
    problem: 'E-waste contains valuable rare-earth metals but current recycling methods are inefficient and environmentally harmful.',
    solution: 'Developed AI-powered urban mining technology that automates precise metal extraction with blockchain verification.',
  },
  {
    id: 10,
    title: 'Nomadic Health',
    category: 'Healthcare Identity',
    theme: 'Health & Life',
    image: nomadicHealthImg,
    url: 'https://riresearchlab.github.io/nomadic-health/',
    description: 'Portable digital medical identities for the global workforce ensuring care continuity across borders.',
    technologies: ['End-to-End Encryption', 'Portable Identity', 'HIPAA/GDPR Compliant', 'Offline Support'],
    results: 'Active in 12+ countries with 89 partner clinics',
    problem: '280M+ people cross borders annually and lose access to their medical history when they leave home.',
    solution: 'Created tamper-proof, portable medical identities that work anywhere online or offline in any language.',
  },
  {
    id: 11,
    title: 'Sentinel Bot Infra',
    category: 'Infrastructure Defense',
    theme: 'Governance & Infrastructure',
    image: sentinelBotInfraImg,
    url: 'https://riresearchlab.github.io/sentinel-bot-infra/',
    description: 'Autonomous crawler-drone swarms that detect, predict, and repair structural decay across bridges, pipelines, and energy grids.',
    technologies: ['Drone Swarms', 'Predictive Maintenance', 'Autonomous Repair', 'AI Inspection'],
    results: 'Proactive infrastructure preservation before failure',
    problem: 'Critical infrastructure deteriorates silently, leading to costly failures and safety hazards.',
    solution: 'Deployed autonomous inspection systems that continuously monitor and predict infrastructure decay.',
  },
  {
    id: 12,
    title: 'Sustain Stack',
    category: 'Industrial Sustainability',
    theme: 'Climate & Energy',
    image: sustainStackImg,
    url: 'https://riresearchlab.github.io/sustain-stack/',
    description: 'AI-powered waste diversion combined with biotech-integrated architecture that breathes and processes waste naturally.',
    technologies: ['EcoVision AI', 'BioEnvelope', 'Waste Processing', 'Living Architecture'],
    results: 'Intelligent waste management and living building systems',
    problem: 'Industrial operations generate massive waste while traditional buildings contribute to environmental degradation.',
    solution: 'Developed complementary platforms combining AI waste management with biotech-integrated architectural systems.',
  },
  {
    id: 13,
    title: 'Connecting State',
    category: 'Digital Governance',
    theme: 'Governance & Infrastructure',
    image: connectingStateImg,
    url: 'https://connecting-state.lovable.app/',
    description: 'A citizen-centric digital governance and public engagement platform bridging the gap between citizens and government institutions with transparent issue reporting, real-time tracking, and participatory policymaking.',
    technologies: ['Citizen Engagement', 'Real-time Tracking', 'Multi-level Administration', 'Geo-visualization', 'Transparency & Accountability'],
    results: 'Transforming governance from reactive to proactive, data-driven, and citizen-focused ecosystem',
    problem: 'Citizens face significant barriers in reporting public issues, tracking complaints, and participating in governance. Communication gaps between the public and government institutions lead to unresolved infrastructure problems, waste management failures, corruption, lack of transparency, and slow response times across all administrative levels from Union Parishad to Ministry offices.',
    solution: 'Built a comprehensive digital governance platform that enables citizens to report incidents (damaged roads, broken infrastructure, waste management, water supply, illegal encroachments, environmental concerns, corruption) with photos, location, and descriptions. Features multi-level monitoring (Union Parishad → Upazila → District → Division → Ministry), anonymous reporting for sensitive cases, process improvement proposals, policy analysis dashboards, public asset monitoring, community voting, and intelligent analytics with heatmaps and geographic visualization.',
  },
];
