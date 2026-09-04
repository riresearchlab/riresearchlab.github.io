import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FlaskConical, BookOpen, Users, Sparkles, Cpu, Brain, Database, Network } from 'lucide-react';
import Logo from './Logo';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    type Node = { x: number; y: number; vx: number; vy: number; size: number; hue: number };
    const nodes: Node[] = [];
    const nodeCount = 55;

    for (let i = 0; i < nodeCount; i++) {
      const hue = 145 + (i / nodeCount) * 55; // 145 (green) -> 200 (cyan), matches logo gradient
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: 1.2 + Math.random() * 2.2,
        hue,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, index) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections - use gradient distance
        nodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex && index < otherIndex) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 140) {
              const opacity = 1 - distance / 140;
              // Blend between node colors (cyan-green gradient lines)
              const avgHue = (node.hue + otherNode.hue) / 2;
              ctx.strokeStyle = `hsla(${avgHue}, 90%, 60%, ${opacity * 0.32})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });

        // Draw node - cyan-green based on its hue
        ctx.fillStyle = `hsla(${node.hue}, 95%, 65%, 0.85)`;
        ctx.shadowColor = `hsla(${node.hue}, 95%, 60%, 0.7)`;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-background">
      {/* Animated neural network canvas — cyan-green logo palette */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-55" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-35" />

      {/* Logo glow behind center content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-60 pointer-events-none"
           style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, hsl(var(--accent) / 0.06) 35%, transparent 65%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-20 pt-28">
        {/* Official Logo prominently displayed */}
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex flex-col items-center" style={{ filter: 'drop-shadow(0 0 50px hsl(var(--primary) / 0.3))' }}>
            <Logo size={96} showText={false} animate={true} />
          </div>
        </div>

        {/* Badge */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5 text-primary backdrop-blur-sm">
            <FlaskConical className="h-3.5 w-3.5 mr-2" />
            Advanced Computer Science Research Laboratory
            <span className="ml-2 text-accent">● Dhaka, Bangladesh</span>
          </Badge>
        </div>

        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="block hero-text">RI Research Lab</span>
          </h1>
          {/* Wordmark line — mimics the logo's RESEARCH LAB wordmark in cyan */}
          <div
            className="mt-2 text-sm md:text-base font-bold tracking-[0.35em] uppercase"
            style={{ color: '#4DD0E1', textShadow: '0 0 20px rgba(77, 208, 225, 0.25)' }}
          >
            Research Laboratory
          </div>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          Pushing the frontiers of <span className="text-primary font-semibold">Computer Science</span>,{' '}
          <span className="text-accent font-semibold">Artificial Intelligence</span>, and{' '}
          <span className="text-neural font-semibold">Intelligent Systems</span>
        </p>
        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          through rigorous scholarship, open collaboration, and translational innovation — bridging
          cutting-edge theory with measurable real-world impact across South Asia and beyond.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
          {[
            { icon: FlaskConical, label: 'Research Areas', value: '9+', color: 'text-primary' },
            { icon: BookOpen, label: 'Projects', value: '13+', color: 'text-accent' },
            { icon: Users, label: 'Global Network', value: 'Open', color: 'text-neural' },
            { icon: Sparkles, label: 'Publications', value: 'Growing', color: 'text-data' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="stat-card rounded-2xl p-4 md:p-6 hover:bg-muted/40">
                <Icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.color} mx-auto mb-2`} />
                <div className={`text-2xl md:text-3xl font-extrabold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="group data-glow btn-primary text-base px-8 rounded-xl" onClick={() => (window.location.href = '#researchareas')}>
            Explore Research
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted hover:border-primary/50 text-base px-8 rounded-xl" onClick={() => (window.location.href = '#projects')}>
            View Impact Projects
          </Button>
        </div>

        {/* Research Pillars tags */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {[
            { icon: Brain, label: 'Artificial Intelligence' },
            { icon: Network, label: 'Distributed Systems' },
            { icon: Cpu, label: 'Neural Computing' },
            { icon: Database, label: 'Data Science' },
            { icon: Sparkles, label: 'LLMs & NLP' },
          ].map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Badge key={i} variant="secondary" className="px-3 py-1.5 text-xs md:text-sm bg-muted/50 border-border hover:border-primary/40 transition-colors gap-1.5">
                <Icon className="h-3 w-3 opacity-70" />
                {pillar.label}
              </Badge>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-7 h-11 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
