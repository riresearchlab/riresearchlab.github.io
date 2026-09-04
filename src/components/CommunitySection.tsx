import { Users, Target, BookOpen, Award, Handshake, GraduationCap, Briefcase, FileText, ArrowRight, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CommunitySection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-section)' }} />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-neural/30 bg-neural/5 text-neural">
            <Handshake className="h-3.5 w-3.5 mr-2" />
            Open Research Ecosystem
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="section-title hero-text">Community & Collaboration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-12">
            Building a thriving, inclusive research ecosystem through active partnerships,
            open knowledge sharing, and the establishment of rigorous new standards for R&D excellence.
          </p>
        </div>

        {/* RI Research Benchmark */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-16 research-card">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
              RI Research Benchmark
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              An evolving standard for measuring research and development excellence in computer science,
              AI, distributed systems, and data-driven innovation — designed for the Global South.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-6 rounded-xl bg-muted/30 border border-border">
              <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-primary">01</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Standardized Metrics</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Comprehensive evaluation criteria covering research quality, reproducibility, deployment rigor, and societal impact.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-muted/30 border border-border">
              <div className="w-16 h-16 bg-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-accent">02</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Open Collaboration</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fostering transparent, inclusive, and ethical research practices that accelerate shared innovation across institutions.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-muted/30 border border-border">
              <div className="w-16 h-16 bg-neural/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-neural">03</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Global + Local Impact</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ensuring research outcomes translate to deployable solutions for both global challenges and under-served regional contexts.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button className="data-glow btn-primary">
              <FileText className="h-4 w-4 mr-2" />
              Learn About the Benchmark
            </Button>
          </div>
        </div>

        {/* Collaboration Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          <div className="lg:col-span-3">
            <h3 className="text-3xl font-bold mb-6 hero-text">
              Join Our Research Community
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              We actively seek collaboration with curious, passionate individuals and institutions who share our vision
              of advancing scientific knowledge paired with practical, ethical technology deployment.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-5 p-5 rounded-xl border border-border bg-muted/20 hover:border-primary/30 hover:bg-muted/40 transition-all">
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Students & Early-Career Researchers</h4>
                  <p className="text-muted-foreground text-sm">
                    Structured research internships, thesis co-supervision, hands-on engineering experience, and publication mentorship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-5 rounded-xl border border-border bg-muted/20 hover:border-accent/30 hover:bg-muted/40 transition-all">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Industry Engineers & Practitioners</h4>
                  <p className="text-muted-foreground text-sm">
                    Apply production-grade engineering to research challenges; co-design systems that scale from prototype to deployment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-5 rounded-xl border border-border bg-muted/20 hover:border-neural/30 hover:bg-muted/40 transition-all">
                <div className="w-12 h-12 bg-neural/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-neural" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Faculty, Scientists & Partner Labs</h4>
                  <p className="text-muted-foreground text-sm">
                    Co-author papers, co-supervise students, pursue joint grants, and run shared experimental research programs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 research-card self-start lg:sticky lg:top-24">
            <h4 className="text-2xl font-bold mb-2 text-center">Get Involved</h4>
            <p className="text-muted-foreground text-sm text-center mb-7">
              Rolling openings. No deadlines — apply when ready.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center p-4 bg-muted/40 rounded-xl hover:bg-muted/60 transition-colors">
                <span className="font-medium text-sm">Research Internships</span>
                <span className="text-primary text-xs font-bold px-2 py-0.5 bg-primary/10 rounded-full">● Open</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/40 rounded-xl hover:bg-muted/60 transition-colors">
                <span className="font-medium text-sm">Joint Projects</span>
                <span className="text-accent text-xs font-bold px-2 py-0.5 bg-accent/10 rounded-full">● Accepting</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/40 rounded-xl hover:bg-muted/60 transition-colors">
                <span className="font-medium text-sm">Visiting Researchers</span>
                <span className="text-neural text-xs font-bold px-2 py-0.5 bg-neural/10 rounded-full">● Apply</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full data-glow btn-primary" onClick={() => window.location.href = '#contact'}>
                Apply for Collaboration
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <a
                href="mailto:researchlabri@gmail.com"
                className="inline-flex items-center justify-center w-full h-10 px-4 py-2 rounded-md border border-input bg-background hover:bg-accent/5 hover:border-primary/40 hover:text-primary text-sm font-medium transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email: researchlabri@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="text-center p-8 md:p-12 bg-gradient-to-br from-primary/10 via-accent/5 to-neural/10 rounded-2xl border border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">Ready to Push Research Boundaries With Us?</h4>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're seeking an internship, a co-authorship, or a long-term institutional partnership —
              we'd love to discuss how we can create meaningful research together.
            </p>
            <Button size="lg" className="data-glow btn-primary" onClick={() => window.location.href = '#contact'}>
              Start a Research Conversation
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;