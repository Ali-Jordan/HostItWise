import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Monitor, PhoneOff, Star, MapPin, MailOpen } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/Stagger';
import { SectionHeader } from '@/components/SectionHeader';

import { ContactSection } from '../components/ContactSection';
const problemCards = [
  { icon: Monitor, title: 'Outdated website', desc: 'Your site looks old and doesn\'t convert visitors.' },
  { icon: PhoneOff, title: 'Missed calls', desc: 'Every missed call is a lost customer you never knew about.' },
  { icon: Star, title: 'Weak reviews', desc: 'Low review count makes you invisible to new customers.' },
  { icon: MapPin, title: 'Poor visibility', desc: 'You\'re not showing up when people search for your service.' },
  { icon: MailOpen, title: 'Weak follow-up', desc: 'Leads go cold because no one follows up fast enough.' },
];

const services = [
  { num: '01', name: 'Website Launch', price: '$250–750 one-time', icon: 'Globe', img: '/images/service-website.png' },
  { num: '02', name: 'Hosting + Maintenance', price: '$49–99/mo', icon: 'Server', img: '/images/service-hosting.png' },
  { num: '03', name: 'Lead Recovery System', price: '$49–149/mo', icon: 'PhoneCall', img: '/images/service-lead.png' },
  { num: '04', name: 'Reputation Growth', price: '$49–149/mo', icon: 'Star', img: '/images/service-reputation.png' },
  { num: '05', name: 'Local Visibility Engine', price: '$250–500/mo', icon: 'MapPin', img: '/images/service-visibility.png' },
  { num: '06', name: 'Google Ads Lead Engine', price: '$300–750/mo + ad spend', icon: 'BarChart3', img: '/images/service-ads.png' },
  { num: '07', name: 'Follow-Up Engine', price: '$99–299/mo', icon: 'Mail', img: '/images/service-followup.png' },
  { num: '08', name: 'Content Day', price: '$300–800 one-time', icon: 'Camera', img: '/images/service-content.png' },
];

const packages = [
  { icon: 'Globe', title: 'Website Launch', price: '$250–750 one-time', featured: false, features: [] },
  { icon: 'Zap', title: 'Starter', price: '$199/mo', featured: false, features: ['Lead recovery', 'Review growth', 'Reporting'] },
  { icon: 'TrendingUp', title: 'Growth', price: '$499/mo', featured: true, features: ['Hosting', 'Lead recovery', 'Reputation', 'Local visibility'] },
  { icon: 'Rocket', title: 'Demand', price: '$999/mo + ad spend', featured: false, features: ['Google Ads', 'Landing pages', 'Tracking', 'Reporting'] },
];

const timelineSteps = [
  'Website Fix',
  'Lead Recovery',
  'Reputation',
  'Local Visibility',
  'Paid Ads',
  'Retention',
];

const results = [
  { category: 'Website Redesign', title: 'Home Services Website', metrics: [{ num: '+180%', label: 'Lead Volume' }, { num: '-40%', label: 'Bounce Rate' }], img: '/images/result-website.png' },
  { category: 'Review Growth', title: 'Legal Firm Reputation', metrics: [{ num: '+312', label: 'New Reviews' }, { num: '4.2→4.8', label: 'Rating' }], img: '/images/result-reviews.png' },
  { category: 'Ad Performance', title: 'HVAC Paid Campaign', metrics: [{ num: '-35%', label: 'Cost Per Lead' }, { num: '+92%', label: 'Conversion' }], img: '/images/result-ads.png' },
];

const industries = [
  { icon: 'Home', title: 'Home Services', list: 'Roofing, HVAC, Plumbing, Electricians, Landscaping, Cleaning, Restoration, Pest Control, Moving, General Contractors' },
  { icon: 'Scale', title: 'Legal', list: 'Personal Injury, Family Law, Criminal Defense, Immigration, Estate Planning, Local Law Firms' },
  { icon: 'HeartPulse', title: 'Healthcare', list: 'Med Spas, Chiropractors, Urgent Care, Physical Therapy, Dermatology, Primary Care, Private Clinics, Wellness' },
  { icon: 'BedDouble', title: 'Hospitality', list: 'Hotels, Boutique Hotels, Vacation Rentals' },
];

export default function Home() {
  return (
    <div>
      {/* Section 1 — Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 max-w-xl">
              <motion.p
                className="text-xs font-medium uppercase tracking-[0.1em] text-muted-text mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Lead Systems for Local Businesses
              </motion.p>
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-gunmetal tracking-tight"
                style={{ lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Websites and lead systems for local businesses that need more calls.
              </motion.h1>
              <motion.p
                className="mt-4 text-base text-secondary-text max-w-md"
                style={{ lineHeight: 1.6 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              >
                We build websites, recover missed leads, improve reviews, and help local businesses generate more inbound leads.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-teal text-white text-sm font-semibold rounded-button hover:bg-teal-hover transition-all duration-200 hover:-translate-y-0.5 shadow-button"
                >
                  Get Free Audit
                </Link>
                <Link
                  to="/packages"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-gunmetal text-sm font-semibold rounded-button border border-borders hover:border-teal hover:text-teal transition-all duration-200"
                >
                  View Packages
                </Link>
              </motion.div>
              <motion.div
                className="mt-10 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.55 }}
              >
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-teal-light flex items-center justify-center border-2 border-white">
                      <Check className="w-3 h-3 text-teal" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-text">
                  Built for home services, legal firms, healthcare providers, hospitality businesses, and local operators.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="flex-1 max-w-lg w-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img
                src="/images/hero-mockup.png"
                alt="Website dashboard mockup"
                className="w-full rounded-image shadow-card"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Problem Section */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <div className="text-center mb-12">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-teal mb-3">
                The Real Problem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gunmetal tracking-tight" style={{ lineHeight: 1.15 }}>
                You do not have a lead problem.
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-teal tracking-tight mt-1" style={{ lineHeight: 1.15 }}>
                You have a lead leak problem.
              </h2>
              <p className="mt-4 text-base text-secondary-text max-w-lg mx-auto" style={{ lineHeight: 1.6 }}>
                Most local businesses lose leads before they ever realize they had them.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" stagger={0.08}>
            {problemCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="bg-white rounded-card p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <card.icon className="w-6 h-6 text-teal mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gunmetal mb-2">{card.title}</h4>
                  <p className="text-sm text-muted-text" style={{ lineHeight: 1.5 }}>{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 3 — Services Preview */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="What We Do"
            headline="Every service designed to fix a lead leak."
            subtext="Pick the fix your business needs — or let us handle everything."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.06}>
            {services.map((service) => (
              <StaggerItem key={service.num}>
                <div className="bg-teal-light rounded-card p-7 hover:bg-white hover:border hover:border-borders hover:-translate-y-0.5 transition-all duration-300">
                  <p className="text-xs font-medium text-muted-text mb-3">{service.num}</p>
                  <h4 className="text-lg font-semibold text-gunmetal mb-1">{service.name}</h4>
                  <p className="text-sm text-secondary-text">{service.price}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-teal text-teal text-sm font-semibold rounded-button hover:bg-teal hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Package Preview */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="Packages"
            headline="A plan for every stage of growth."
            subtext="Start small or go all-in. Every package includes what matters most."
            centered={false}
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
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
                      <p className="text-sm text-muted-text">One-time website build</p>
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

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center px-6 py-3 border border-teal text-teal text-sm font-semibold rounded-button hover:bg-teal hover:text-white transition-all duration-200"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 — Client Growth Path */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="How It Works"
            headline="From broken system to lead machine."
            subtext="We fix your foundation first — then build on it."
          />

          <StaggerContainer className="flex flex-wrap justify-center gap-4 md:gap-0" stagger={0.1}>
            {timelineSteps.map((step, i) => (
              <StaggerItem key={step} direction="left">
                <div className="flex items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center text-teal font-semibold text-base">
                      {i + 1}
                    </div>
                    <p className="text-sm font-semibold text-gunmetal text-center w-24">{step}</p>
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <div className="hidden md:block w-12 h-0.5 bg-borders mx-2 mt-[-20px]" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 6 — Results */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="Results"
            headline="Before and after transformations."
            subtext="Real improvements in website performance, reviews, and lead volume."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
            {results.map((result) => (
              <StaggerItem key={result.title}>
                <div className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="h-48 bg-soft-section overflow-hidden">
                    <img src={result.img} alt={result.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-teal mb-2">{result.category}</p>
                    <h4 className="text-lg font-semibold text-gunmetal mb-3">{result.title}</h4>
                    <div className="flex flex-wrap gap-4">
                      {result.metrics.map((m) => (
                        <div key={m.label} className="bg-teal-light rounded-small px-3 py-2">
                          <p className="text-lg font-bold text-teal">{m.num}</p>
                          <p className="text-xs text-muted-text">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-10">
            <Link
              to="/results"
              className="inline-flex items-center justify-center px-6 py-3 border border-teal text-teal text-sm font-semibold rounded-button hover:bg-teal hover:text-white transition-all duration-200"
            >
              View All Results
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7 — Industries */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="Who We Serve"
            headline="Built for the businesses that keep communities running."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" stagger={0.1}>
            {industries.map((ind) => (
              <StaggerItem key={ind.title}>
                <div className="bg-teal-light rounded-card p-8 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4">
                    <span className="text-teal font-bold text-sm">{ind.icon.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gunmetal mb-3">{ind.title}</h3>
                  <p className="text-sm text-secondary-text" style={{ lineHeight: 1.8 }}>{ind.list}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 8 — Final CTA */}
      <section className="bg-gunmetal py-20 md:py-24">
        <div className="container-site text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-xl mx-auto" style={{ lineHeight: 1.15 }}>
              Your website should generate leads — not lose them.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-base text-white/70 max-w-md mx-auto" style={{ lineHeight: 1.6 }}>
              Get a free audit. We'll show you exactly where your leads are leaking.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white text-sm font-semibold rounded-button hover:bg-teal-hover transition-all duration-200 hover:-translate-y-0.5 mt-8"
            >
              Book Free Website Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
