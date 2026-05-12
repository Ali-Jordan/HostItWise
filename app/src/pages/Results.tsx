import { StaggerContainer, StaggerItem } from '@/components/Stagger';
import { SectionHeader } from '@/components/SectionHeader';

const results = [
  {
    category: 'Website Redesign',
    title: 'Roofing Company Website Overhaul',
    desc: 'Replaced a 6-year-old template site with a fast, mobile-first design focused on quote requests.',
    metrics: [
      { num: '+180%', label: 'Lead Volume' },
      { num: '-40%', label: 'Bounce Rate' },
    ],
    img: '/images/result-website.png',
  },
  {
    category: 'Review Growth',
    title: 'Family Law Firm Reputation Build',
    desc: 'Implemented review request automation and response workflows across Google and Avvo.',
    metrics: [
      { num: '+312', label: 'New Reviews' },
      { num: '4.2→4.8', label: 'Star Rating' },
    ],
    img: '/images/result-reviews.png',
  },
  {
    category: 'Call Tracking',
    title: 'Plumbing Company Missed Call Recovery',
    desc: 'Set up missed call text-back and after-hours voicemail transcription with instant alerts.',
    metrics: [
      { num: '+67%', label: 'Call Answer Rate' },
      { num: '-45%', label: 'Missed Calls' },
    ],
    img: '/images/result-calls.png',
  },
  {
    category: 'Google Ads',
    title: 'HVAC Seasonal Campaign',
    desc: 'Built targeted local search campaigns with landing pages and conversion tracking.',
    metrics: [
      { num: '-35%', label: 'Cost Per Lead' },
      { num: '+92%', label: 'Conversion Rate' },
    ],
    img: '/images/result-ads.png',
  },
  {
    category: 'Local Visibility',
    title: 'Med Spa Map Ranking Boost',
    desc: 'Optimized Google Business Profile, built local citations, and added location-specific content.',
    metrics: [
      { num: 'Top 3', label: 'Map Pack' },
      { num: '+210%', label: 'Local Search Views' },
    ],
    img: '/images/result-local.png',
  },
  {
    category: 'Follow-Up System',
    title: 'Contractor Lead Nurturing',
    desc: 'Automated email and SMS sequences for leads that didn\'t book on first contact.',
    metrics: [
      { num: '+58%', label: 'Lead Conversion' },
      { num: '-30%', label: 'Response Time' },
    ],
    img: '/images/result-followup.png',
  },
];

export default function Results() {
  return (
    <div>
      {/* Header */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="Results"
            headline="Proof that fixing leaks works."
            subtext="Website redesigns, review growth, call tracking, and ad performance — no fake testimonials, just real numbers."
            centered={false}
          />
        </div>
      </section>

      {/* Results Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {results.map((result) => (
              <StaggerItem key={result.title}>
                <div className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="h-48 bg-soft-section overflow-hidden">
                    <img src={result.img} alt={result.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-teal mb-2">{result.category}</p>
                    <h4 className="text-lg font-semibold text-gunmetal mb-2">{result.title}</h4>
                    <p className="text-sm text-secondary-text mb-4" style={{ lineHeight: 1.5 }}>{result.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {result.metrics.map((m) => (
                        <div key={m.label} className="bg-teal-light rounded-small px-3 py-2">
                          <p className="text-base font-bold text-teal">{m.num}</p>
                          <p className="text-xs text-muted-text">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
