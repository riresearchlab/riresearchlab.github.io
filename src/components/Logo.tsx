interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  animate?: boolean;
}

const Logo = ({ size = 64, className = '', showText = true, animate = true }: LogoProps) => {
  const brainIconSize = size * 1.1;
  const textSize = size * 0.55;
  const subTextSize = size * 0.35;
  const letterSpacing = textSize * 0.25;

  return (
    <div className={`inline-flex flex-col items-center ${className}`} style={{ width: size * 2.2 }}>
      <svg
        width={brainIconSize}
        height={brainIconSize}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animate ? 'animate-float' : ''}
      >
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5AC8FA" />
            <stop offset="50%" stopColor="#10D4A2" />
            <stop offset="100%" stopColor="#00C853" />
          </linearGradient>
          <linearGradient id="stem-gradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5AC8FA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00C853" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Neural connection lines (stems) */}
        <g stroke="url(#stem-gradient)" strokeWidth="7" strokeLinecap="round" filter="url(#glow)">
          <line x1="66" y1="58" x2="100" y2="42" />
          <line x1="100" y1="42" x2="122" y2="60" />
          <line x1="100" y1="42" x2="100" y2="94" />
          <line x1="68" y1="92" x2="100" y2="94" />
          <line x1="100" y1="94" x2="134" y2="92" />
          <line x1="100" y1="94" x2="108" y2="136" />
          <line x1="108" y1="136" x2="152" y2="148" />
        </g>

        {/* Small dot nodes */}
        <circle cx="60" cy="100" r="8" fill="url(#neural-gradient)" filter="url(#glow)" />
        <circle cx="118" cy="62" r="7" fill="url(#neural-gradient)" filter="url(#glow)" opacity="0.85" />
        <circle cx="116" cy="124" r="7" fill="url(#neural-gradient)" filter="url(#glow)" opacity="0.85" />

        {/* Medium node circles (brain upper) */}
        <circle cx="66" cy="58" r="12" fill="url(#neural-gradient)" filter="url(#glow)" />
        <circle cx="134" cy="58" r="14" fill="url(#neural-gradient)" filter="url(#glow)" />
        <circle cx="100" cy="40" r="18" fill="url(#neural-gradient)" filter="url(#glow)" />

        {/* Medium node circles (brain middle) */}
        <circle cx="70" cy="94" r="17" fill="url(#neural-gradient)" filter="url(#glow)" />
        <circle cx="100" cy="94" r="14" fill="url(#neural-gradient)" filter="url(#glow)" />
        <circle cx="134" cy="92" r="17" fill="url(#neural-gradient)" filter="url(#glow)" />

        {/* Large bottom node (brain stem base) */}
        <circle cx="108" cy="138" r="28" fill="url(#neural-gradient)" filter="url(#glow)" />
      </svg>

      {showText && (
        <div className="flex flex-col items-center -mt-1 leading-none select-none">
          <span
            className="font-extrabold tracking-tight"
            style={{
              fontSize: `${textSize}px`,
              color: '#00C853',
              lineHeight: 1,
              textShadow: '0 0 20px rgba(0, 200, 83, 0.35)',
            }}
          >
            RI
          </span>
          <span
            className="font-bold mt-1 uppercase"
            style={{
              fontSize: `${subTextSize}px`,
              color: '#4DD0E1',
              letterSpacing: `${letterSpacing}px`,
              lineHeight: 1,
              textShadow: '0 0 16px rgba(77, 208, 225, 0.3)',
            }}
          >
            Research Lab
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
