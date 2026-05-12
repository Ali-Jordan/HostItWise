import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/Stagger';
import { SectionHeader } from '@/components/SectionHeader';

const packages = [
  {
    title: 'Website Launch',
    price: '$250–750 one-time',
    featured: false,
    features: [],
    note: 'One-time website build',
  },
  {
    title: 'Starter',
    price: '$199/mo',
    featured: false,
    features: ['Lead recovery system', 'Review growth automation', 'Monthly reporting', 'Email support'],
    note: '',
  },
  {
    title: 'Growth',
    price: '$499/mo',
    featured: true,
    features: ['Everything in Starter', 'Hosting + maintenance', 'Reputation management', 'Local visibility engine', 'Priority support'],
    note: '',
  },
  {
    title: 'Demand',
    price: '$999/mo + ad spend',
    featured: false,
    features: ['Everything in Growth', 'Google Ads management', 'Landing page design', 'Conversion tracking', 'Weekly reporting', 'Dedicated account contact'],
    note: '',
  },
];

const faqs = [
  {
    q: 'Can I start with just a website?',
    a: 'Yes. Many clients begin with Website Launch and upgrade to a monthly package later.',
  },
  {
    q: 'Is there a setup fee for monthly packages?',
    a: 'No setup fee for Starter, Growth, or Demand. Website Launch is the only one-time cost.',
  },
  {
    q: 'What if I already have a website?',
    a: "We'll audit it first. If it's functional, we can layer on lead recovery, ads, or reputation services.",
  },
  {
    q: 'How long until I see results?',
    a: 'Website launch takes 2–3 weeks. Lead recovery and reputation improvements show within 30 days. Local visibility and ads typically show results in 60–90 days.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Monthly packages are month-to-month with 30 days notice. No long-term contracts.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-card shadow-card mb-3 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-base font-semibold text-gunmetal">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-text transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '200px' : '0px' }}
      >
        <p className="px-5 pb-5 text-sm text-secondary-text" style={{ lineHeight: 1.6 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function Packages() {
  return (
    <div>
      {/* Header */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="Packages"
            headline="Choose your growth plan."
            subtext="All packages include our core promise: more leads, less waste."
            centered={false}
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
            {packages.map((pkg) => (
              <StaggerItem key={pkg.title}>
                <div className={`bg-white rounded-card p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${pkg.featured ? 'ring-2 ring-teal' : ''}`}>
                  {pkg.featured && (
                    <span className="inline-block px-3 py-1 bg-teal text-white text-xs font-medium rounded-small mb-3">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gunmetal mb-2">{pkg.title}</h3>
                  <p className="text-3xl font-bold text-gunmetal tracking-tight mb-4">{pkg.price}</p>
                  <div className="border-t border-borders pt-4">
                    {pkg.features.length > 0 ? (
                      <ul className="space-y-2">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-secondary-text">
                            <Check className="w-4 h-4 text-teal flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-text">{pkg.note}</p>
                    )}
                  </div>
                  <Link
                    to="/contact"
                    className={`mt-6 block text-center px-5 py-3 text-sm font-semibold rounded-button transition-all duration-200 ${
                      pkg.featured
                        ? 'bg-teal text-white hover:bg-teal-hover'
                        : 'border border-teal text-teal hover:bg-teal hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-teal mb-3">FAQ</p>
            <h3 className="text-2xl font-semibold text-gunmetal">Common questions.</h3>
          </ScrollReveal>

          <StaggerContainer stagger={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <FAQItem q={faq.q} a={faq.a} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
