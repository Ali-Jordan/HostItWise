import { ScrollReveal } from './ScrollReveal';

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  subtext?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ eyebrow, headline, subtext, centered = true, light = false }: SectionHeaderProps) {
  return (
    <ScrollReveal className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <p className="text-xs font-medium uppercase tracking-[0.1em] text-teal mb-3">
        {eyebrow}
      </p>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? 'text-white' : 'text-gunmetal'}`} style={{ lineHeight: 1.15 }}>
        {headline}
      </h2>
      {subtext && (
        <p className={`mt-4 text-base max-w-xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-secondary-text'}`} style={{ lineHeight: 1.6 }}>
          {subtext}
        </p>
      )}
    </ScrollReveal>
  );
}
