import type { ReactNode } from 'react';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  action?: ReactNode;
}

const SectionHeader = ({ index, eyebrow, title, description, align = 'left', action }: SectionHeaderProps) => {
  const centered = align === 'center';
  return (
    <div
      className={`reveal mb-12 md:mb-16 flex flex-col gap-6 ${
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={centered ? 'max-w-3xl' : 'max-w-2xl'}>
        <div className="eyebrow mb-5">
          <span className="text-primary">{index}</span>
          <span className="h-px w-8 bg-border" />
          {eyebrow}
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] text-foreground">{title}</h2>
        {description && (
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};

export default SectionHeader;
