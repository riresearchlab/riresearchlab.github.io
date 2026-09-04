import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Network, FlaskConical, BookOpen, Users, Sparkles } from 'lucide-react';
import heroBackground from '@/assets/hero-neural-bg.jpg';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network animation
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const nodeCount = 50;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const opacity = 1 - distance / 150;
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });

        // Draw node
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
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
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated neural network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-20">
        {/* Badge */}
        <div className="mb-8 animate-fade-in-up">
          <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5 text-primary backdrop-blur-sm">
            <FlaskConical className="h-3.5 w-3.5 mr-2" />
            Advanced Computer Science Research Laboratory
            <span className="ml-2 text-accent">● Dhaka, Bangladesh</span>
          </Badge>
        </div>

        <div className="flex items-center justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full" />
            <Network className="h-16 w-16 md:h-20 md:w-20 text-primary mr-4 relative animate-float" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold hero-text tracking-tight">
            RI Research Lab
          </h1>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Pushing the frontiers of <span className="text-primary font-medium">Computer Science</span>,{' '}
          <span className="text-accent font-medium">Artificial Intelligence</span>, and{' '}
          <span className="text-neural font-medium">Intelligent Systems</span>
        </p>
        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          through rigorous research, open collaboration, and translational innovation — bridging cutting-edge theory with real-world impact across South Asia and beyond.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {[
            { icon: FlaskConical, label: 'Research Areas', value: '9+', color: 'text-primary' },
            { icon: BookOpen, label: 'Projects', value: '13+', color: 'text-accent' },
            { icon: Users, label: 'Collaborators', value: 'Global', color: 'text-neural' },
            { icon: Sparkles, label: 'Publications', value: 'Growing', color: 'text-data' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="stat-card rounded-xl p-4 md:p-6">
                <Icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.color} mx-auto mb-2`} />
                <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="group data-glow btn-primary text-base px-8" onClick={() => window.location.href = '#researchareas'}>
            Explore Research
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted hover:border-primary/50 text-base px-8" onClick={() => window.location.href = '#projects'}>
            View Impact Projects
          </Button>
        </div>

        {/* Research Pillars */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {['Artificial Intelligence', 'Distributed Systems', 'Neural Computing', 'Data Science', 'LLMs & NLP'].map((pillar, i) => (
            <Badge key={i} variant="secondary" className="px-3 py-1.5 text-xs md:text-sm bg-muted/50 border-border hover:border-primary/40 transition-colors">
              {pillar}
            </Badge>
          ))}
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