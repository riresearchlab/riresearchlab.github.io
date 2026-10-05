import { useMemo, useRef, useState } from 'react';
import { researchAreas, crossLinks } from '@/data/lab';

const SIZE = 560;
const C = SIZE / 2;

const shortLabels: Record<string, string> = {
  'computer-science': 'Computer Science',
  'artificial-intelligence': 'Artificial Intelligence',
  'distributed-systems': 'Distributed Systems',
  'neural-networking': 'Neural Networks',
  'large-language-models': 'LLMs & NLP',
  'space-data': 'Space Data',
  'financial-analysis': 'Financial Analytics',
  'history-visualization': 'History Visualization',
  'human-health': 'Health Analytics',
};

/** Mix the logo's cyan → green gradient by t ∈ [0,1]. */
const brandColor = (t: number) => {
  const a = [58, 180, 242];
  const b = [20, 184, 166];
  const c = [22, 179, 90];
  const [from, to, k] = t < 0.5 ? [a, b, t / 0.5] : [b, c, (t - 0.5) / 0.5];
  const m = from.map((v, i) => Math.round(v + (to[i] - v) * k));
  return `rgb(${m[0]}, ${m[1]}, ${m[2]})`;
};

interface ResearchGraphProps {
  onSelect?: (id: string) => void;
}

const ResearchGraph = ({ onSelect }: ResearchGraphProps) => {
  const [hover, setHover] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const nodes = useMemo(
    () =>
      researchAreas.map((area, i) => {
        const angle = (i / researchAreas.length) * Math.PI * 2 - Math.PI / 2 + 0.2;
        const r = i % 2 === 0 ? 200 : 150;
        const x = C + Math.cos(angle) * r;
        const y = C + Math.sin(angle) * r;
        return { id: area.id, label: shortLabels[area.id] ?? area.title, x, y, color: brandColor(y / SIZE), size: i % 2 === 0 ? 11 : 8 };
      }),
    [],
  );

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setTilt({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 14,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 14,
    });
  };

  const isLinked = (i: number) =>
    hover === null || hover === i || crossLinks.some(([a, b]) => (a === hover && b === i) || (b === hover && a === i));

  return (
    <div
      ref={ref}
      className="relative aspect-square w-full max-w-[560px] select-none"
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setHover(null);
      }}
    >
      {/* soft halo */}
      <div
        className="absolute inset-[12%] rounded-full blur-3xl opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(58,180,242,0.22), rgba(22,179,90,0.12) 55%, transparent 70%)' }}
      />

      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="relative h-full w-full overflow-visible"
        style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)`, transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)' }}
        role="img"
        aria-label="Graph of RI Research Lab's nine connected research areas"
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3ab4f2" />
            <stop offset="55%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#16b35a" />
          </linearGradient>
          <radialGradient id="core" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e6f6fb" />
          </radialGradient>
        </defs>

        {/* orbits */}
        <circle cx={C} cy={C} r={150} fill="none" stroke="hsl(199 40% 60% / 0.22)" strokeDasharray="2 6" />
        <circle cx={C} cy={C} r={200} fill="none" stroke="hsl(199 40% 60% / 0.18)" strokeDasharray="2 8" />
        <circle cx={C} cy={C} r={250} fill="none" stroke="hsl(199 40% 60% / 0.10)" />

        {/* hub spokes */}
        {nodes.map((n, i) => (
          <line
            key={`s-${n.id}`}
            x1={C}
            y1={C}
            x2={n.x}
            y2={n.y}
            stroke="url(#edge)"
            strokeWidth={hover === i ? 2.2 : 1.2}
            strokeOpacity={isLinked(i) ? 0.55 : 0.12}
            strokeDasharray={hover === i ? '6 6' : undefined}
            className={hover === i ? 'animate-dash' : ''}
            style={{ transition: 'stroke-opacity 0.3s' }}
          />
        ))}

        {/* cross links */}
        {crossLinks.map(([a, b]) => {
          const on = hover === a || hover === b;
          return (
            <line
              key={`c-${a}-${b}`}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke={on ? nodes[hover!].color : 'hsl(199 40% 50%)'}
              strokeWidth={on ? 1.8 : 1}
              strokeOpacity={hover === null ? 0.18 : on ? 0.8 : 0.05}
              strokeDasharray={on ? '6 6' : '3 5'}
              className={on ? 'animate-dash' : ''}
              style={{ transition: 'stroke-opacity 0.3s' }}
            />
          );
        })}

        {/* hub */}
        <circle cx={C} cy={C} r={58} fill="url(#core)" stroke="hsl(190 50% 80%)" />
        <image href="/logo-icon.png" x={C - 30} y={C - 34} width={60} height={68} />

        {/* nodes */}
        {nodes.map((n, i) => {
          const dim = !isLinked(i);
          const labelLeft = n.x < C - 10;
          return (
            <g
              key={n.id}
              className="cursor-pointer"
              style={{ opacity: dim ? 0.35 : 1, transition: 'opacity 0.3s' }}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              onClick={() => onSelect?.(n.id)}
              tabIndex={0}
              role="button"
              aria-label={`Explore ${n.label}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect?.(n.id);
                }
              }}
            >
              <circle cx={n.x} cy={n.y} r={n.size + 10} fill={n.color} opacity={hover === i ? 0.18 : 0} style={{ transition: 'opacity 0.3s' }} />
              <circle cx={n.x} cy={n.y} r={n.size} fill={n.color} stroke="white" strokeWidth={3} />
              <text
                x={labelLeft ? n.x - n.size - 9 : n.x + n.size + 9}
                y={n.y + 4}
                textAnchor={labelLeft ? 'end' : 'start'}
                className="font-display"
                fontSize={14}
                fontWeight={hover === i ? 700 : 600}
                fill="hsl(202 55% 14%)"
                paintOrder="stroke"
                stroke="hsl(192 33% 98%)"
                strokeWidth={5}
                strokeLinejoin="round"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ResearchGraph;
