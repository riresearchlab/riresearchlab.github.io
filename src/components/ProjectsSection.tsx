import { useState } from 'react';
import { Filter, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ammoniaDriveImg from '@/assets/ammonia-drive.jpg';
import bioEnvelopeImg from '@/assets/bio-envelope.png';
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
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = selectedCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hero-text" id="projects">
            Projects & Applications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our research translates into practical solutions that address real-world challenges
            across multiple industries and domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Filter className="h-4 w-4 text-muted-foreground" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  <span>View Details</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-bold hero-text">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">Problem Statement</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {selectedProject.problem}
                    </p>

                    <h4 className="text-xl font-semibold mb-3 text-accent">Our Solution</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-neural">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-xl font-semibold mb-3 text-primary">Results</h4>
                    <p className="text-accent font-medium text-lg">
                      {selectedProject.results}
                    </p>

                    <div className="mt-8 flex gap-4">
                      <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                        <ExternalLink className="h-4 w-4" />
                        View Project
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