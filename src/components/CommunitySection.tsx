import { Users, Target, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CommunitySection = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hero-text">
            Community & Collaboration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building a thriving research ecosystem through collaboration, knowledge sharing,
            and the establishment of new standards in R&D excellence.
          </p>
        </div>

        {/* RI Research Benchmark */}
        <div className="bg-card border border-border rounded-xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <Award className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4 hero-text">
              RI Research Benchmark
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Introducing a new standard for research and development excellence in computer science,
              artificial intelligence, and distributed systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">01</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Standardized Metrics</h4>
              <p className="text-muted-foreground text-sm">
                Comprehensive evaluation criteria for research quality, reproducibility, and impact.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">02</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Open Collaboration</h4>
              <p className="text-muted-foreground text-sm">
                Fostering transparent, inclusive research practices that accelerate innovation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neural/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neural">03</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Global Impact</h4>
              <p className="text-muted-foreground text-sm">
                Ensuring research outcomes contribute to solving real-world challenges.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button className="data-glow">
              Learn About the Benchmark
            </Button>
          </div>
        </div>

        {/* Collaboration Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 hero-text">
              Join Our Research Community
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We actively seek collaboration with passionate individuals who share our vision
              of advancing scientific knowledge and creating practical solutions. Whether you're
              a student, professional, or established researcher, there's a place for you in our community.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Graduate & Undergraduate Students</h4>
                  <p className="text-muted-foreground text-sm">
                    Gain hands-on research experience, mentorship, and contribute to cutting-edge projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Target className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Professional Developers & Engineers</h4>
                  <p className="text-muted-foreground text-sm">
                    Apply your technical skills to research challenges and expand the scope of our projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 text-neural flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Scientists & Researchers</h4>
                  <p className="text-muted-foreground text-sm">
                    Collaborate on interdisciplinary research and share expertise across domains.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-center">Get Involved</h4>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span className="font-medium">Research Internships</span>
                <span className="text-primary text-sm">Available</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span className="font-medium">Collaborative Projects</span>
                <span className="text-accent text-sm">Open</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span className="font-medium">Guest Researcher Program</span>
                <span className="text-neural text-sm">Apply Now</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full data-glow">
                Apply for Collaboration
              </Button>
              <Button variant="outline" className="w-full">
                Download Research Guidelines
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
          <h4 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h4>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us in shaping the future of technology and research. Together, we can expand
            the boundaries of what's possible and create solutions that matter.
          </p>
          <Button size="lg" className="data-glow">
            Start Your Research Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;