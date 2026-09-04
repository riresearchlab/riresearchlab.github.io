import { useState } from 'react';
import { Filter, ExternalLink, ChevronRight, Rocket, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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

const categories = [
  'All Projects',
  'Clean Energy Logistics',
  'Architectural Technology',
  'Cultural Education',
  'Digital Governance',
  'Food Security',
  'Vocational Training',
  'Medical AI',
  'Industrial Energy',
  'Digital Sovereignty',
  'Urban Mining',
  'Healthcare Identity',
  'Infrastructure Defense',
  'Industrial Sustainability'
];

const projects = [
  {
    id: 1,
    title: 'Ammonia Drive',
    category: 'Clean Energy Logistics',
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
    image: connectingStateImg,
    url: 'https://connecting-state.lovable.app/',
    description: 'A citizen-centric digital governance and public engagement platform bridging the gap between citizens and government institutions with transparent issue reporting, real-time tracking, and participatory policymaking.',
    technologies: ['Citizen Engagement', 'Real-time Tracking', 'Multi-level Administration', 'Geo-visualization', 'Transparency & Accountability'],
    results: 'Transforming governance from reactive to proactive, data-driven, and citizen-focused ecosystem',
    problem: 'Citizens face significant barriers in reporting public issues, tracking complaints, and participating in governance. Communication gaps between the public and government institutions lead to unresolved infrastructure problems, waste management failures, corruption, lack of transparency, and slow response times across all administrative levels from Union Parishad to Ministry offices.',
    solution: 'Built a comprehensive digital governance platform that enables citizens to report incidents (damaged roads, broken infrastructure, waste management, water supply, illegal encroachments, environmental concerns, corruption) with photos, location, and descriptions. Features multi-level monitoring (Union Parishad → Upazila → District → Division → Ministry), anonymous reporting for sensitive cases, process improvement proposals, policy analysis dashboards, public asset monitoring, community voting, and intelligent analytics with heatmaps and geographic visualization.',
  },
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = selectedCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-data/30 bg-data/5 text-data">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Translational Research Output
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="section-title hero-text">Projects & Applications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-12">
            From prototype to production — our research translates into deployed systems
            and scalable solutions addressing high-impact challenges across sectors and societies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by Research Domain:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 text-xs sm:text-sm ${selectedCategory === category ? 'data-glow btn-primary' : 'hover:border-primary/40'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card rounded-2xl overflow-hidden cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <Badge className="bg-primary text-primary-foreground border-0 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                  <Badge variant="outline" className="bg-background/60 backdrop-blur-sm border-border text-foreground">
                    #{String(project.id).padStart(2, '0')}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 3).map((tech: string) => (
                    <span key={tech} className="tech-badge px-2 py-0.5 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-badge px-2 py-0.5 rounded-md text-xs">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 gap-1 transition-all">
                    <span>Deep Dive</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in-up">
            <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
            <div className="bg-card border border-border rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl research-card">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-card/80 backdrop-blur-sm hover:bg-card text-foreground rounded-full flex items-center justify-center border border-border transition-all hover:border-primary/40"
                >
                  ✕
                </button>
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-card/70 backdrop-blur-sm border-border text-xs">
                    Project #{String(selectedProject.id).padStart(2, '0')}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 md:p-10 -mt-16 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-primary text-primary-foreground border-0">
                    {selectedProject.category}
                  </Badge>
                  <Badge variant="secondary" className="bg-muted/60">
                    {selectedProject.technologies.length} Technologies
                  </Badge>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed border-l-2 border-primary pl-4">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-7">
                    <div className="rounded-xl bg-muted/30 border border-border p-5">
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-primary">Problem Statement</span>
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div className="rounded-xl bg-muted/30 border border-border p-5">
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        <span className="text-accent">Research + Solution</span>
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-7">
                    <div className="rounded-xl bg-muted/30 border border-border p-5">
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neural"></span>
                        <span className="text-neural">Tech Stack</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="tech-badge px-3 py-1.5 rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-5">
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-data"></span>
                        <span className="text-data">Key Outcomes</span>
                      </h4>
                      <p className="text-foreground font-semibold text-base md:text-lg leading-relaxed">
                        {selectedProject.results}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity data-glow btn-primary flex-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Project
                      </a>
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border border-border hover:border-primary/40 hover:bg-muted/50 transition-colors flex-1"
                      >
                        <Github className="h-4 w-4" />
                        Code & Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;