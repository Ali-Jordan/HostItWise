import { Link } from 'react-router-dom';
import {
  Monitor,
  Server,
  PhoneIncoming,
  Star,
  MapPin,
  TrendingUp,
  MessageSquare,
  Camera,
  Check,
} from 'lucide-react';

// 3 packages — Website Launch is one-time (lives in services grid).
// Hosting is now in every recurring tier as the foundation.
const packages = [
  {
    name: 'Starter',
    price: '$199',
    priceSuffix: '/mo',
    tagline: 'Plug the leaks',
    popular: false,
    note: null,
    features: ['Hosting + Maintenance', 'Lead Recovery', 'Reputation Growth', 'Monthly reporting'],
  },
  {
    name: 'Growth',
    price: '$499',
    priceSuffix: '/mo',
    tagline: 'Build a real engine',
    popular: true,
    note: null,
    features: [
      'Hosting + Maintenance',
      'Lead Recovery',
      'Reputation Growth',
      'Local Visibility',
      'Monthly reporting',
    ],
  },
  {
    name: 'Demand',
    price: '$999',
    priceSuffix: '/mo + ad spend',
    tagline: 'Pour gasoline on it',
    popular: false,
    note: 'Layers on Growth — combined $1,498/mo + ad spend.',
    features: [
      'Google Ads Management',
      'Landing Pages',
      'Call Tracking',
      'Weekly Optimization',
    ],
  },
];

const services = [
  {
    number: '01', icon: Monitor, name: 'Website Launch', price: '$250–750 one-time', addon: false,
    description: 'A fast, modern, conversion-focused site built in 7–14 days. Mobile-first, SEO-ready, hosted on Vercel. You own the code.',
  },
  {
    number: '02', icon: Server, name: 'Hosting + Maintenance', price: '$49–99/mo', addon: false,
    description: 'Fast hosting, monthly security updates, weekly backups, and content edits when you need them. Your site stays fast, current, and online.',
  },
  {
    number: '03', icon: PhoneIncoming, name: 'Lead Recovery', price: '$49–149/mo', addon: false,
    description: 'Capture missed calls, texts, and abandoned form submissions. Automated follow-ups so cold leads warm back up before they call a competitor.',
  },
  {
    number: '04', icon: Star, name: 'Reputation Growth', price: '$49–149/mo', addon: false,
    description: 'Automated review requests after every job. Build a 4.8+ star Google profile that wins clicks before your competitors even get a chance.',
  },
  {
    number: '05', icon: MapPin, name: 'Local Visibility', price: '$250–500/mo', addon: false,
    description: 'Google Business Profile optimization plus local SEO. Show up when neighbors search "[service] near me" instead of your competitor down the street.',
  },
  {
    number: '06', icon: TrendingUp, name: 'Google Ads Management', price: '$300–750/mo + ad spend', addon: false,
    description: 'Conversion-tracked Google Ads with dedicated landing pages, call tracking, and weekly optimization. Pay for clicks that turn into booked jobs.',
  },
  {
    number: '07', icon: MessageSquare, name: 'Follow-Up Engine', price: '$99–299/mo', addon: true,
    description: 'Email and SMS sequences that re-engage past customers and book repeat work. The cheapest lead is the one who already paid you once.',
  },
  {
    number: '08', icon: Camera, name: 'Content Day', price: '$300–800 one-time', addon: true,
    description: 'One full content day with a local professional photographer. Photos, video b-roll, headshots, team shots — everything you need to keep your site and socials fed for a year.',
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-12">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">Solutions</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gunmetal mb-6 leading-tight">
              Pick a package. Or build your own.
            </h1>
            <p className="text-gunmetal/70 text-lg sm:text-xl">
              Every package is a mix of our services. Start where you are — add what you need as you grow.
            </p>
          </div>
        </div>
      </section>

      <section id="packages" className="py-12">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">Packages</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gunmetal mb-3">A plan for every stage of growth.</h2>
            <p className="text-gunmetal/70">Start small or go all-in. Every package bundles the services that work together.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={
                  'relative bg-white p-6 rounded-2xl flex flex-col ' +
                  (pkg.popular
                    ? 'border-2 border-teal shadow-lg lg:scale-105'
                    : 'border border-gunmetal/10 hover:border-gunmetal/30 transition-colors')
                }
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-teal text-white text-xs font-semibold rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gunmetal mb-1">{pkg.name}</h3>
                <p className="text-sm text-gunmetal/60 mb-4">{pkg.tagline}</p>
                <p className="mb-6">
                  <span className="text-3xl font-bold text-gunmetal">{pkg.price}</span>
                  <span className="text-sm text-gunmetal/60 ml-1">{pkg.priceSuffix}</span>
                </p>
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-gunmetal/80">
                      <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                {pkg.note && (
                  <p className="text-xs text-teal/90 mb-4 px-3 py-2 bg-teal/5 rounded-md border border-teal/20 leading-relaxed">{pkg.note}</p>
                )}
                <Link
                  to="/contact"
                  className={
                    'block w-full text-center py-2.5 rounded-button font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ' +
                    (pkg.popular
                      ? 'bg-teal text-white hover:bg-teal-hover'
                      : 'border border-teal text-teal hover:bg-teal hover:text-white')
                  }
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-10 text-center space-y-3">
            <p className="text-sm text-gunmetal/80">
              <span className="font-semibold text-gunmetal">Need a site first?</span>{' '}
              Add <span className="font-semibold text-gunmetal">Website Launch</span> ($250–750 one-time) to any plan.
            </p>
            <p className="text-sm text-gunmetal/60">
              Packages bundle our most-used combinations. Add any à la carte service to any package.{' '}
              <Link to="/contact" className="text-teal font-medium hover:underline">Get a free audit</Link>{' '}
              and we&rsquo;ll recommend the right mix.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gunmetal/5">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">À la carte</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gunmetal mb-3">Every service we offer.</h2>
            <p className="text-gunmetal/70">Build your own mix or layer onto a package. Each one fixes a different lead leak.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.name} className="group bg-white p-6 rounded-2xl border border-gunmetal/10 hover:border-teal/50 hover:shadow-lg transition-all duration-200 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-teal/10 group-hover:bg-teal/20 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-teal" strokeWidth={2.25} />
                    </div>
                    {svc.addon ? (
                      <span className="px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-bold tracking-wider uppercase rounded">Add-on</span>
                    ) : (
                      <span className="text-xs font-semibold text-gunmetal/40">{svc.number}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gunmetal mb-1">{svc.name}</h3>
                  <p className="text-sm text-teal font-semibold mb-3">{svc.price}</p>
                  <p className="text-sm text-gunmetal/70 leading-relaxed flex-grow">{svc.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-footer text-white">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Not sure where to start?</h2>
            <p className="text-white/70 mb-8 text-lg">
              Get a free audit. We&rsquo;ll show you exactly where your leads are leaking — and which service(s) plug each leak.
            </p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3.5 bg-teal text-white font-semibold text-base rounded-button hover:bg-teal-hover hover:-translate-y-0.5 transition-all duration-200">
              Get my free audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
