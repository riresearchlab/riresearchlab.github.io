import { MapPin, Target, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hero-text">
            About RI Research Lab
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A cutting-edge research and development laboratory dedicated to pushing the boundaries
            of technology and scientific innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="research-card p-8 rounded-xl text-center">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To conduct groundbreaking research in artificial intelligence, distributed systems,
              and neural networking while fostering collaboration between academia and industry.
            </p>
          </div>

          <div className="research-card p-8 rounded-xl text-center">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Location</h3>
            <p className="text-muted-foreground leading-relaxed">
              Based in Dhaka, Bangladesh, we serve as a regional hub for advanced research
              and development, connecting local talent with global opportunities.
            </p>
          </div>

          <div className="research-card p-8 rounded-xl text-center">
            <Users className="h-12 w-12 text-neural mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Team</h3>
            <p className="text-muted-foreground leading-relaxed">
              A diverse team of researchers, engineers, and scientists working collaboratively
              to solve complex problems and create innovative solutions.
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-6 text-center hero-text">
            Research Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
            <div>
              <p className="leading-relaxed mb-4">
                At RI Research Lab, we believe that the most impactful innovations emerge from
                the intersection of theoretical research and practical application. Our approach
                combines rigorous scientific methodology with real-world problem-solving.
              </p>
              <p className="leading-relaxed">
                We foster an environment of open collaboration, where ideas can flourish and
                cross-disciplinary insights lead to breakthrough discoveries.
              </p>
            </div>
            <div>
              <p className="leading-relaxed mb-4">
                Our commitment to excellence drives us to maintain the highest standards in
                research integrity, data quality, and experimental design. We believe that
                reproducible science is the foundation of progress.
              </p>
              <p className="leading-relaxed">
                Through partnerships with universities, industry leaders, and international
                research institutions, we ensure our work has global impact and relevance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;