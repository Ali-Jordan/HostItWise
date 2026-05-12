import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem } from '@/components/Stagger';
import { SectionHeader } from '@/components/SectionHeader';

const services = [
  {
    num: '01',
    name: 'Website Launch',
    price: '$250–750 one-time',
    img: '/images/service-website.png',
    problem: 'Your website looks outdated, loads slowly, or doesn\'t work on mobile. Visitors leave before they ever contact you.',
    includes: ['Mobile-responsive design', 'Contact forms that convert', 'Fast loading speeds', 'Basic SEO setup', 'Professional copy'],
    for: 'Businesses with no website or a site older than 3 years.',
  },
  {
    num: '02',
    name: 'Hosting + Maintenance',
    price: '$49–99/mo',
    img: '/images/service-hosting.png',
    problem: 'Your site goes down, updates break things, and you have no one to call when it happens.',
    includes: ['99.9% uptime hosting', 'Monthly updates & backups', 'Security monitoring', 'SSL certificate', 'Priority support'],
    for: 'Businesses that need their website to just work, 24/7.',
  },
  {
    num: '03',
    name: 'Lead Recovery System',
    price: '$49–149/mo',
    img: '/images/service-lead.png',
    problem: 'Missed calls, unreturned voicemails, and form submissions that never get followed up.',
    includes: ['Missed call text-back', 'Form submission alerts', 'Voicemail transcription', 'Lead tracking dashboard', 'Weekly lead reports'],
    for: 'Businesses that miss calls during busy hours or after closing.',
  },
  {
    num: '04',
    name: 'Reputation Growth',
    price: '$49–149/mo',
    img: '/images/service-reputation.png',
    problem: 'You have few reviews, mixed ratings, or no system to collect feedback from happy customers.',
    includes: ['Review request automation', 'Multi-platform monitoring', 'Response templates', 'Rating trend reports', 'Negative review alerts'],
    for: 'Businesses that know reviews matter but have no process to get them.',
  },
  {
    num: '05',
    name: 'Local Visibility Engine',
    price: '$250–500/mo',
    img: '/images/service-visibility.png',
    problem: 'Your business doesn\'t show up on Google Maps or local searches — your competitors do.',
    includes: ['Google Business Profile optimization', 'Local citation building', 'Local SEO content', 'Map ranking tracking', 'Competitor visibility reports'],
    for: 'Businesses that depend on local customers finding them online.',
  },
  {
    num: '06',
    name: 'Google Ads Lead Engine',
    price: '$300–750/mo + ad spend',
    img: '/images/service-ads.png',
    problem: 'You\'ve tried ads before and burned budget with nothing to show. Or you\'ve never run them and don\'t know where to start.',
    includes: ['Campaign setup & management', 'Landing page optimization', 'Conversion tracking', 'A/B testing', 'Monthly performance reports'],
    for: 'Businesses ready to invest in paid lead generation with proper tracking.',
  },
  {
    num: '07',
    name: 'Follow-Up Engine',
    price: '$99–299/mo',
    img: '/images/service-followup.png',
    problem: 'Leads come in but go cold because follow-up is inconsistent or too slow.',
    includes: ['Automated email sequences', 'SMS follow-up campaigns', 'Appointment reminders', 'Lead nurturing workflows', 'CRM integration'],
    for: 'Businesses with leads that aren\'t converting into appointments.',
  },
  {
    num: '08',
    name: 'Content Day',
    price: '$300–800 one-time',
    img: '/images/service-content.png',
    problem: 'Your website and social media have no fresh content. You look inactive online.',
    includes: ['Professional photography', 'Service page content', 'Social media assets', 'Before/after documentation', 'Content calendar'],
    for: 'Businesses that need fresh visual content for their digital presence.',
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="Services"
            headline="Fix the leak. Grow the business."
            subtext="Every service solves a specific problem in your lead system."
            centered={false}
          />
        </div>
      </section>

      {/* Service Detail Cards */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site space-y-6">
          <StaggerContainer stagger={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.num}>
                <div className="bg-white rounded-card p-8 md:p-10 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <p className="text-xs font-medium text-muted-text mb-2">{service.num}</p>
                      <h3 className="text-2xl font-bold text-gunmetal mb-2">{service.name}</h3>
                      <p className="text-2xl font-bold text-teal tracking-tight">{service.price}</p>

                      <div className="border-t border-borders my-6" />

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-base font-semibold text-gunmetal mb-2">Problem Solved</h4>
                          <p className="text-sm text-secondary-text" style={{ lineHeight: 1.6 }}>{service.problem}</p>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold text-gunmetal mb-2">What's Included</h4>
                          <ul className="space-y-2">
                            {service.includes.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm text-secondary-text">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold text-gunmetal mb-2">Who It's For</h4>
                          <p className="text-sm text-secondary-text" style={{ lineHeight: 1.6 }}>{service.for}</p>
                        </div>

                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center px-6 py-3 border border-teal text-teal text-sm font-semibold rounded-button hover:bg-teal hover:text-white transition-all duration-200"
                        >
                          Get This Service
                        </Link>
                      </div>
                    </div>

                    <div className="md:w-[280px] flex-shrink-0">
                      <div className="bg-teal-light rounded-card p-6 flex items-center justify-center h-full min-h-[200px]">
                        <img src={service.img} alt={service.name} className="w-32 h-32 object-contain" />
                      </div>
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
