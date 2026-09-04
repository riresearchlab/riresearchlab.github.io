interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  animate?: boolean;
}

/**
 * Official RI Research Lab logo.
 * Uses the raster brand assets in /public (transparent background PNGs)
 * instead of a hand-drawn SVG so the mark always matches the brand file.
 */
const Logo = ({ size = 64, className = '', showText = true, animate = true }: LogoProps) => {
  const src = showText ? '/logo-full.png' : '/logo-icon.png';
  // The full lockup is wider/taller than the bare mark, so scale accordingly.
  const height = showText ? size * 1.6 : size * 1.15;

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src={src}
        alt="RI Research Lab"
        height={height}
        style={{ height, width: 'auto' }}
        className={`select-none object-contain ${animate ? 'animate-float' : ''}`}
        draggable={false}
      />
    </div>
  );
};

export default Logo;
