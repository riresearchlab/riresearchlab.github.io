import { MapPin, Target, Users, Award, Microscope, GraduationCap, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="about">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-accent/30 bg-accent/5 text-accent">
            <Microscope className="h-3.5 w-3.5 mr-2" />
            Who We Are
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="section-title hero-text">About RI Research Lab</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-12">
            A premier research and innovation laboratory dedicated to advancing the frontiers of
            <span className="text-primary font-medium"> Computer Science</span> and
            <span className="text-accent font-medium"> Artificial Intelligence</span> through
            rigorous scholarship, collaborative discovery, and translational impact.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="research-card p-8 rounded-2xl text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To conduct pioneering research in AI, distributed systems, neural computing,
              and intelligent systems — while building bridges between academic excellence
              and industry translation for sustainable, equitable technological progress.
            </p>
          </div>

          <div className="research-card p-8 rounded-2xl text-center group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
              <MapPin className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Regional Hub</h3>
            <p className="text-muted-foreground leading-relaxed">
              Based in Dhaka, Bangladesh, we serve as a nexus for advanced CS research in
              South Asia — empowering local talent, engaging global partnerships, and
              positioning the region on the world innovation map.
            </p>
          </div>

          <div className="research-card p-8 rounded-2xl text-center group">
            <div className="w-16 h-16 bg-neural/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-neural/20 transition-colors">
              <Users className="h-8 w-8 text-neural" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Community</h3>
            <p className="text-muted-foreground leading-relaxed">
              A multidisciplinary collective of researchers, engineers, students, and
              industry partners — united by intellectual curiosity, rigor, and a shared
              commitment to solving problems that matter.
            </p>
          </div>
        </div>

        {/* Lab Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {[
            { icon: Award, label: 'Peer-Reviewed Research', desc: 'Published & validated work', color: 'text-primary' },
            { icon: Lightbulb, label: 'Open Innovation', desc: 'Open-source & accessible', color: 'text-accent' },
            { icon: GraduationCap, label: 'Student Mentorship', desc: 'Next-gen researchers', color: 'text-neural' },
            { icon: Microscope, label: 'Applied Research', desc: 'Real-world deployment', color: 'text-data' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="stat-card rounded-xl p-5 md:p-6 text-center">
                <Icon className={`h-7 w-7 md:h-8 md:w-8 ${item.color} mx-auto mb-3`} />
                <div className="font-semibold text-sm md:text-base mb-1">{item.label}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{item.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Research Philosophy */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 research-card">
          <div className="text-center mb-10">
            <Award className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
              Research Philosophy
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Grounded in scientific rigor, driven by curiosity, and measured by impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-muted-foreground">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Theory + Practice
              </h4>
              <p className="leading-relaxed">
                The most transformative innovations emerge at the intersection of strong theory
                and deliberate application. We pair mathematical depth and computational
                rigor with real-world problem framing — ensuring our research is not only
                publishable but usable.
              </p>
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Open, Collaborative Science
              </h4>
              <p className="leading-relaxed">
                We cultivate an environment of radical openness where ideas cross domains,
                hierarchies, and institutions. Breakthroughs rarely happen in silos — so our
                lab culture actively encourages interdisciplinary exchange and shared ownership.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neural"></span>
                Reproducibility & Integrity
              </h4>
              <p className="leading-relaxed">
                Excellence demands the highest standards of research integrity, data quality,
                and experimental reproducibility. We build our work on open benchmarks,
                versioned datasets, and auditable code — because reproducible science is
                the only solid foundation for lasting progress.
              </p>
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-data"></span>
                Global Partnerships, Local Impact
              </h4>
              <p className="leading-relaxed">
                We actively partner with universities, industry labs, and international
                research institutions — ensuring our work benefits from global perspectives
                while remaining deeply rooted in the regional challenges and opportunities
                of Bangladesh and the Global South.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;