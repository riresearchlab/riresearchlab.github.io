interface LogoProps {
  size?: number;
  className?: string;
  /** Show the "RI Research Lab" wordmark next to the mark. */
  showText?: boolean;
}

/** Official RI Research Lab mark (raster brand asset) with a typeset wordmark. */
const Logo = ({ size = 36, className = '', showText = true }: LogoProps) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <img
      src="/logo-icon.png"
      alt={showText ? '' : 'RI Research Lab'}
      style={{ height: size, width: 'auto' }}
      className="select-none object-contain"
      draggable={false}
    />
    {showText && (
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-bold tracking-tight text-foreground">
          RI <span className="text-gradient">Research Lab</span>
        </span>
        <span className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground">
          Computing · AI · Systems
        </span>
      </span>
    )}
  </span>
);

export default Logo;
