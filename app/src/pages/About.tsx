import { ScrollReveal } from '@/components/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/Stagger';
import { useCountUp } from '@/hooks/useCountUp';

function StatBlock({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(target, 1500);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-teal tracking-tight">
        {count}{suffix}
      </p>
      <p className="mt-2 text-sm text-secondary-text">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-teal mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal tracking-tight" style={{ lineHeight: 1.15 }}>
              We fix revenue bottlenecks.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Message */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-site max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xl md:text-2xl font-semibold text-gunmetal" style={{ lineHeight: 1.5 }}>
              Most local businesses are sold bloated retainers that fail to fix operational lead leaks.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="w-16 h-0.5 bg-teal mx-auto my-8" />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base text-secondary-text" style={{ lineHeight: 1.6 }}>
              HostItWise was built to do the opposite. We diagnose exactly where your leads are leaking — your website, your missed calls, your reviews, your follow-up — and we fix it with specific services that produce measurable results. No vague 'marketing strategies.' No 50-page reports. Just infrastructure that makes your phone ring.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="mt-4 text-base text-secondary-text" style={{ lineHeight: 1.6 }}>
              We work with home services, legal firms, healthcare providers, and hospitality businesses — the operators who keep their communities running and deserve a website and lead system that works as hard as they do.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="mt-12">
            <img src="/images/about-visual.png" alt="Lead funnel illustration" className="w-full max-w-md mx-auto rounded-image" />
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12" stagger={0.15}>
            <StaggerItem>
              <StatBlock target={200} suffix="+" label="Local Businesses Served" />
            </StaggerItem>
            <StaggerItem>
              <StatBlock target={15} suffix="+" label="Industries" />
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-teal tracking-tight">Zero</p>
                <p className="mt-2 text-sm text-secondary-text">Long-Term Contracts Required</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
