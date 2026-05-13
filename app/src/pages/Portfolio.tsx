import { Link } from 'react-router-dom';
import { ExternalLink, Globe } from 'lucide-react';

// ── EDIT THIS ARRAY TO ADD REAL CLIENT SITES ─────────────────────────────
// For each project:
//   imageUrl  — path to screenshot in /public/images/ (leave "" for placeholder)
//   industry  — short tag shown above name
//   name      — project / client name
//   summary   — 1-2 sentence outcome
//   tags      — services delivered (chips)
//   liveUrl   — public live site URL
const portfolio = [
  {
    imageUrl: '',
    industry: 'Roofing',
    name: 'Placeholder Client #1',
    summary: 'Brief description of what we built and the outcome. Replace with real copy.',
    tags: ['Website Launch', 'Local Visibility', 'Reputation'],
    liveUrl: 'https://example.com',
  },
  {
    imageUrl: '',
    industry: 'Irrigation',
    name: 'Placeholder Client #2',
    summary: 'Brief description of what we built and the outcome. Replace with real copy.',
    tags: ['Website Launch', 'Hosting'],
    liveUrl: 'https://example.com',
  },
  {
    imageUrl: '',
    industry: 'Legal',
    name: 'Placeholder Client #3',
    summary: 'Brief description of what we built and the outcome. Replace with real copy.',
    tags: ['Reputation Growth', 'Local Visibility'],
    liveUrl: 'https://example.com',
  },
  {
    imageUrl: '',
    industry: 'Healthcare',
    name: 'Placeholder Client #4',
    summary: 'Brief description of what we built and the outcome. Replace with real copy.',
    tags: ['Website Launch', 'Lead Recovery'],
    liveUrl: 'https://example.com',
  },
  {
    imageUrl: '',
    industry: 'Hospitality',
    name: 'Placeholder Client #5',
    summary: 'Brief description of what we built and the outcome. Replace with real copy.',
    tags: ['Website Launch', 'Content Day'],
    liveUrl: 'https://example.com',
  },
  {
    imageUrl: '',
    industry: 'Home Services',
    name: 'Placeholder Client #6',
    summary: 'Brief description of what we built and the outcome. Replace with real copy.',
    tags: ['Google Ads', 'Landing Pages'],
    liveUrl: 'https://example.com',
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-12">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              Portfolio
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gunmetal mb-6 leading-tight">
              Sites we&rsquo;ve built. Leads they&rsquo;re booking.
            </h1>
            <p className="text-gunmetal/70 text-lg sm:text-xl">
              Real businesses. Real launches. Click any tile to see it live.
            </p>
          </div>
        </div>
      </section>

      {/* ── Portfolio grid ──────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolio.map((project, idx) => (
              <a
                key={idx}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl border border-gunmetal/10 overflow-hidden hover:border-teal/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                {/* Image / placeholder */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-teal/10 via-teal/5 to-gunmetal/5">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-teal/40">
                      <Globe className="w-12 h-12 mb-2" strokeWidth={1.5} />
                      <p className="text-xs font-semibold uppercase tracking-wider">
                        Placeholder
                      </p>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gunmetal">
                    {project.industry}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gunmetal group-hover:text-teal transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink
                      className="w-4 h-4 text-gunmetal/40 group-hover:text-teal flex-shrink-0 mt-1"
                      strokeWidth={2.25}
                    />
                  </div>
                  <p className="text-sm text-gunmetal/70 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-teal/10 text-teal text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-dark-footer text-white">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Want yours next?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              We build sites that turn cold visitors into booked jobs.
              Get a free audit and we&rsquo;ll show you the gaps.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3.5 bg-teal text-white font-semibold text-base rounded-button hover:bg-teal-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              Get my free audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
