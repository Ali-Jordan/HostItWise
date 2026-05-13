import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  Monitor,
  PhoneOff,
  Star,
  MapPin,
  MailOpen,
  Home as HomeIcon,
  Scale,
  HeartPulse,
  BedDouble,
  Building2,
  Car,
  Wrench,
  Scissors,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/Stagger';
import { SectionHeader } from '@/components/SectionHeader';

import { ContactSection } from '../components/ContactSection';

const problemCards = [
  { icon: Monitor,  title: 'Outdated website', desc: "Your site looks old and doesn't convert visitors." },
  { icon: PhoneOff, title: 'Missed calls',     desc: 'Every missed call is a lost customer you never knew about.' },
  { icon: Star,     title: 'Weak reviews',     desc: 'Low review count makes you invisible to new customers.' },
  { icon: MapPin,   title: 'Poor visibility',  desc: "You're not showing up when people search for your service." },
  { icon: MailOpen, title: 'Weak follow-up',   desc: 'Leads go cold because no one follows up fast enough.' },
];

// Repriced for the local SMB market — competitive vs Fiverr, GoDaddy,
// CallRail, Birdeye, Mailchimp, Podium, etc.
const services = [
  { num: '01', name: 'Website Launch',           price: '$200–600 one-time' },
  { num: '02', name: 'Hosting + Maintenance',    price: '$39–89/mo' },
  { num: '03', name: 'Lead Recovery',            price: '$39–99/mo' },
  { num: '04', name: 'Reputation Growth',        price: '$39–99/mo' },
  { num: '05', name: 'Local Visibility',         price: '$149–399/mo' },
  { num: '06', name: 'Google Ads Management',    price: '$199–599/mo + ad spend' },
  { num: '07', name: 'Follow-Up Engine',         price: '$59–199/mo' },
  { num: '08', name: 'Content Day',              price: '$399–799 one-time' },
  { num: '09', name: 'Branding from Zero',       price: '$250–750 one-time' },
  { num: '10', name: 'Live Reception + Booking', price: '$99 setup + $49–149/mo' },
  { num: '11', name: 'AI Chatbot',               price: '$149 setup + $39–99/mo' },
  { num: '12', name: 'Quote/Estimate Calculator', price: '$250–650 one-time' },
];

// 3 packages — Hosting in every recurring tier; pricing pulled down to
// match the new à-la-carte ranges + bundle savings.
const packages = [
  {
    title: 'Starter',
    price: '$149/mo',
    tagline: 'Plug the leaks',
    featured: false,
    features: ['Hosting + Maintenance', 'Lead Recovery', 'Reputation Growth', 'Monthly reporting'],
  },
  {
    title: 'Growth',
    price: '$329/mo',
    tagline: 'Build a real engine',
    featured: true,
    features: ['Hosting + Maintenance', 'Lead Recovery', 'Reputation Growth', 'Local Visibility', 'Monthly reporting'],
  },
  {
    title: 'Demand',
    price: '$599/mo + ad spend',
    tagline: 'Pour gasoline on it',
    featured: false,
    features: ['Google Ads Management', 'Landing Pages', 'Call Tracking', 'Weekly Optimization'],
  },
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
  { category: 'Review Growth',    title: 'Legal Firm Reputation', metrics: [{ num: '+312',  label: 'New Reviews' }, { num: '4.2→4.8', label: 'Rating' }],      img: '/images/result-reviews.png' },
  { category: 'Ad Performance',   title: 'HVAC Paid Campaign',    metrics: [{ num: '-35%',  label: 'Cost Per Lead' }, { num: '+92%',   label: 'Conversion' }],  img: '/images/result-ads.png' },
];

const industries = [
  { Icon: HomeIcon,    title: 'Home Services',  list: 'Roofing, HVAC, Plumbing, Electricians, Landscaping, Cleaning, Restoration, Pest Control' },
  { Icon: Scale,       title: 'Legal',          list: 'Personal Injury, Family Law, Criminal Defense, Immigration, Estate Planning, Real Estate Law' },
  { Icon: HeartPulse,  title: 'Healthcare',     list: 'Med Spas, Chiropractors, Urgent Care, Physical Therapy, Dermatology, Dental, Wellness Clinics' },
  { Icon: Building2,   title: 'Real Estate',    list: 'Agents, Brokers, Property Management, Home Inspectors, Mortgage Brokers, Title Companies' },
  { Icon: Car,         title: 'Auto',           list: 'Auto Repair, Body Shops, Detailing, Tire Shops, Mobile Mechanics, Used Car Dealers' },
  { Icon: Wrench,      title: 'Trades',         list: 'Builders, Remodelers, Architects, Interior Designers, Specialty Contractors, Concrete' },
  { Icon: Scissors,    title: 'Personal Care',  list: 'Salons, Barbershops, Nail Studios, Spas, Estheticians, Tattoo Artists' },
  { Icon: BedDouble,   title: 'Hospitality',    list: 'Hotels, Boutique Stays, Vacation Rentals, Restaurants, Catering, Event Venues' },
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
                initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}
              >
                Lead Systems for Local Businesses
              </motion.p>
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-gunmetal tracking-tight"
                style={{ lineHeight: 1.1 }}
                initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}
              >
                Websites and lead systems for local businesses that need more calls.
              </motion.h1>
              <motion.p
                className="mt-4 text-base text-secondary-text max-w-md"
                style={{ lineHeight: 1.6 }}
                initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}
              >
                We build websites, recover missed leads, improve reviews, and help local businesses generate more inbound leads.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}
              >
                <Link to="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-teal text-white text-sm font-semibold rounded-button hover:bg-teal-hover transition-all duration-200 hover:-translate-y-0.5 shadow-button">
                  Get Free Audit
                </Link>
                <Link to="/portfolio" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-gunmetal text-sm font-semibold rounded-button border border-borders hover:border-teal hover:text-teal transition-all duration-200">
                  See Our Work
                </Link>
              </motion.div>
              <motion.div
                className="mt-10 flex items-center gap-3"
                initial={{ opacity: 1 }} animate={{ opacity: 1 }}
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
              className="flex-1 max-w-xl w-full"
              initial={{ opacity: 1, x: 0 }} animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="/images/about-visual.png"
                alt="Leads in, revenue out — the lead system illustration"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Problem */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <div className="text-center mb-12">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-teal mb-3">The Real Problem</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gunmetal tracking-tight" style={{ lineHeight: 1.15 }}>You do not have a lead problem.</h2>
              <h2 className="text-3xl md:text-4xl font-bold text-teal tracking-tight mt-1" style={{ lineHeight: 1.15 }}>You have a lead leak problem.</h2>
              <p className="mt-4 text-base text-secondary-text max-w-lg mx-auto" style={{ lineHeight: 1.6 }}>Most local businesses lose leads before they ever realize they had them.</p>
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

      {/* Section 3 — Services preview (10 services) */}
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
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 border border-teal text-teal text-sm font-semibold rounded-button hover:bg-teal hover:text-white transition-all duration-200">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Packages (repriced) */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="Packages"
            headline="A plan for every stage of growth."
            subtext="Start small or go all-in. Every package includes what matters most."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" stagger={0.1}>
            {packages.map((pkg) => (
              <StaggerItem key={pkg.title}>
                <div className={`bg-white rounded-card p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ${pkg.featured ? 'ring-2 ring-teal' : ''}`}>
                  {pkg.featured && (
                    <span className="inline-block self-start px-3 py-1 bg-teal text-white text-xs font-medium rounded-small mb-3">Most Popular</span>
                  )}
                  <h3 className="text-2xl font-bold text-gunmetal mb-1">{pkg.title}</h3>
                  <p className="text-sm text-muted-text mb-3">{pkg.tagline}</p>
                  <p className="text-3xl font-bold text-gunmetal tracking-tight mb-4">{pkg.price}</p>
                  <div className="border-t border-borders pt-4 flex-grow">
                    <ul className="space-y-2">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-secondary-text">
                          <Check className="w-4 h-4 text-teal flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
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
          <p className="text-center text-sm text-muted-text mt-8">
            Need a website first? Add <span className="font-semibold text-gunmetal">Website Launch</span> ($200–600 one-time) to any plan.
          </p>
          <div className="text-center mt-6">
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 border border-teal text-teal text-sm font-semibold rounded-button hover:bg-teal hover:text-white transition-all duration-200">
              View Packages + Services
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 — How it works */}
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
                    <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center text-teal font-semibold text-base">{i + 1}</div>
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
            <Link to="/results" className="inline-flex items-center justify-center px-6 py-3 border border-teal text-teal text-sm font-semibold rounded-button hover:bg-teal hover:text-white transition-all duration-200">
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
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr" stagger={0.08}>
            {industries.map((ind) => {
              const Icon = ind.Icon;
              return (
                <StaggerItem key={ind.title}>
                  <div className="bg-teal-light rounded-card p-7 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-teal" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-semibold text-gunmetal mb-3">{ind.title}</h3>
                    <p className="text-sm text-secondary-text flex-grow" style={{ lineHeight: 1.7 }}>{ind.list}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 8 — Final CTA */}
      <section className="bg-gunmetal py-20 md:py-24">
        <div className="container-site text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-xl mx-auto" style={{ lineHeight: 1.15 }}>Your website should generate leads — not lose them.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-base text-white/70 max-w-md mx-auto" style={{ lineHeight: 1.6 }}>Get a free audit. We'll show you exactly where your leads are leaking.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white text-sm font-semibold rounded-button hover:bg-teal-hover transition-all duration-200 hover:-translate-y-0.5 mt-8">
              Book Free Website Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
