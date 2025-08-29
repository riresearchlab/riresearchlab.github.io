import { useState } from 'react';
import { Filter, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import medicalImage from '@/assets/medical-research.jpg';
import trafficImage from '@/assets/traffic-systems.jpg';
import govImage from '@/assets/government-admin.jpg';
import supplyImage from '@/assets/supply-chain.jpg';
import newsImage from '@/assets/news-analysis.jpg';
import pollutionImage from '@/assets/pollution-resource.jpg';

const categories = [
  'All Projects',
  'Medical Science',
  'Traffic Systems',
  'Government Administration',
  'Supply Chain',
  'News Content Analysis',
  'Pollution & Resource Wastage',
  'Knowledge Mapping',
  'Manufacturing Automation',
  'Geo Data Analysis',
  'Space Data',
  'Financial Analytics',
  'History Visualization',
  'Human Health'
];

const projects = [
  {
    id: 1,
    title: 'AI-Powered Medical Diagnosis',
    category: 'Medical Science',
    image: medicalImage,
    description: 'Machine learning system for early disease detection and diagnosis.',
    technologies: ['Python', 'TensorFlow', 'Computer Vision', 'Medical Imaging'],
    results: 'Improved diagnosis accuracy by 35%',
    problem: 'Traditional medical diagnosis can be time-consuming and prone to human error, especially in resource-limited settings.',
    solution: 'Developed an AI system that analyzes medical images and patient data to provide rapid, accurate diagnostic suggestions.',
  },
  {
    id: 2,
    title: 'Smart Traffic Optimization',
    category: 'Traffic Systems',
    image: trafficImage,
    description: 'Intelligent traffic management using real-time data analysis.',
    technologies: ['IoT', 'Machine Learning', 'Real-time Analytics', 'Edge Computing'],
    results: 'Reduced traffic congestion by 28%',
    problem: 'Urban traffic congestion leads to increased pollution, wasted time, and economic losses.',
    solution: 'Created an adaptive traffic control system that optimizes signal timing based on real-time traffic patterns.',
  },
  {
    id: 3,
    title: 'Digital Government Services',
    category: 'Government Administration',
    image: govImage,
    description: 'Streamlined digital platform for citizen services and administration.',
    technologies: ['React', 'Node.js', 'Blockchain', 'Cloud Computing'],
    results: 'Reduced processing time by 60%',
    problem: 'Citizens face long wait times and bureaucratic inefficiencies when accessing government services.',
    solution: 'Built a comprehensive digital platform that automates processes and provides transparent, efficient service delivery.',
  },
  {
    id: 4,
    title: 'Supply Chain Intelligence',
    category: 'Supply Chain',
    image: supplyImage,
    description: 'Predictive analytics for supply chain optimization and risk management.',
    technologies: ['Big Data', 'Predictive Analytics', 'IoT', 'Machine Learning'],
    results: 'Reduced supply chain costs by 22%',
    problem: 'Supply chains are vulnerable to disruptions and inefficiencies that can cause significant financial losses.',
    solution: 'Developed a predictive system that anticipates disruptions and optimizes supply chain operations in real-time.',
  },
  {
    id: 5,
    title: 'News Content Analyzer',
    category: 'News Content Analysis',
    image: newsImage,
    description: 'AI system for news verification, sentiment analysis, and bias detection.',
    technologies: ['NLP', 'BERT', 'Sentiment Analysis', 'Fact-checking APIs'],
    results: 'Achieved 92% accuracy in bias detection',
    problem: 'Misinformation and biased reporting make it difficult for readers to access reliable news.',
    solution: 'Created an AI tool that analyzes news content for bias, sentiment, and factual accuracy.',
  },
  {
    id: 6,
    title: 'Environmental Monitoring System',
    category: 'Pollution & Resource Wastage',
    image: pollutionImage,
    description: 'IoT-based system for monitoring pollution levels and resource usage.',
    technologies: ['IoT Sensors', 'Data Analytics', 'Environmental Modeling', 'Cloud Platform'],
    results: 'Reduced resource wastage by 30%',
    problem: 'Lack of real-time environmental monitoring leads to inefficient resource use and delayed responses to pollution.',
    solution: 'Implemented a comprehensive monitoring network that tracks environmental parameters and optimizes resource allocation.',
  },
  {
    id: 7,
    title: 'Urban Geospatial Intelligence',
    category: 'Geo Data Analysis',
    image: trafficImage,
    description: 'Advanced GIS analytics for urban planning and smart city development.',
    technologies: ['GIS', 'Spatial Analytics', 'Remote Sensing', 'Machine Learning'],
    results: 'Improved urban planning efficiency by 45%',
    problem: 'Urban planners lack comprehensive spatial intelligence tools for data-driven decision making.',
    solution: 'Developed an integrated geospatial platform that combines satellite imagery, demographic data, and predictive modeling.',
  },
  {
    id: 8,
    title: 'Satellite Mission Analytics',
    category: 'Space Data',
    image: supplyImage,
    description: 'Real-time processing of satellite telemetry and space mission data.',
    technologies: ['Python', 'Space Physics', 'Signal Processing', 'Big Data'],
    results: 'Enhanced mission success rate by 25%',
    problem: 'Space missions generate massive amounts of data that require real-time analysis for mission-critical decisions.',
    solution: 'Created an automated analytics pipeline that processes satellite data and provides real-time mission insights.',
  },
  {
    id: 9,
    title: 'Financial Risk Prediction',
    category: 'Financial Analytics',
    image: newsImage,
    description: 'AI-powered financial risk assessment and market prediction system.',
    technologies: ['Machine Learning', 'Time Series Analysis', 'Financial Modeling', 'APIs'],
    results: 'Increased prediction accuracy by 40%',
    problem: 'Traditional financial analysis methods fail to capture complex market dynamics and emerging risks.',
    solution: 'Built a comprehensive AI system that analyzes market data, news sentiment, and economic indicators for risk prediction.',
  },
  {
    id: 10,
    title: 'Interactive History Timeline',
    category: 'History Visualization',
    image: govImage,
    description: 'Immersive digital platform for historical data visualization and exploration.',
    technologies: ['D3.js', 'WebGL', 'Data Visualization', 'Digital Archives'],
    results: 'Increased historical engagement by 65%',
    problem: 'Historical data is often presented in static, non-interactive formats that limit exploration and understanding.',
    solution: 'Created an interactive visualization platform that allows users to explore historical events, trends, and connections.',
  },
  {
    id: 11,
    title: 'Genomic Health Analytics',
    category: 'Human Health',
    image: medicalImage,
    description: 'Personalized medicine through genomic data analysis and health prediction.',
    technologies: ['Bioinformatics', 'Genomics', 'Machine Learning', 'Cloud Computing'],
    results: 'Improved treatment outcomes by 50%',
    problem: 'Generic medical treatments often fail to account for individual genetic variations and health profiles.',
    solution: 'Developed a genomic analysis platform that provides personalized health insights and treatment recommendations.',
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hero-text">
            Projects & Applications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our research translates into practical solutions that address real-world challenges
            across multiple industries and domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
                      <Button className="data-glow">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                      <Button variant="outline">
                        Technical Details
                      </Button>
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