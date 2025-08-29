import { useState } from 'react';
import { Cpu, Brain, Network, MessageSquare, Layers, Globe, Satellite, TrendingUp, Clock, Heart } from 'lucide-react';

const researchAreas = [
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
    id: 'geo-data-analysis',
    title: 'Geo Data Analysis',
    icon: Globe,
    summary: 'Spatial data processing and geographical intelligence systems.',
    description: 'Advanced geospatial analytics for urban planning, environmental monitoring, and location-based insights. Our research includes GIS optimization, satellite imagery analysis, and real-time mapping solutions.',
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

const ResearchAreasSection = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hero-text">
            Research Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our multidisciplinary approach spans five core areas of computer science and artificial intelligence,
            each contributing to our comprehensive research ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area) => {
            const IconComponent = area.icon;
            const isHovered = hoveredArea === area.id;
            
            return (
              <div
                key={area.id}
                className="research-card p-8 rounded-xl cursor-pointer group relative overflow-hidden"
                onMouseEnter={() => setHoveredArea(area.id)}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <div className="relative z-10">
                  <IconComponent className="h-12 w-12 text-primary mb-6 group-hover:text-accent transition-colors duration-300" />
                  
                  <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 transition-all duration-300">
                    {isHovered ? area.description : area.summary}
                  </p>

                  <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <button className="text-primary hover:text-accent font-medium text-sm uppercase tracking-wider">
                      Learn More →
                    </button>
                  </div>
                </div>

                {/* Animated background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating on any of these research areas?
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-300 data-glow">
            Join Our Research Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreasSection;