import { Link } from 'react-router-dom';

const serviceLinks = [
  { label: 'Website Launch', path: '/services' },
  { label: 'Lead Recovery', path: '/services' },
  { label: 'Reputation', path: '/services' },
  { label: 'Local Visibility', path: '/services' },
  { label: 'Google Ads', path: '/services' },
];

const companyLinks = [
  { label: 'About', path: '/about' },
  { label: 'Results', path: '/results' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-dark-footer text-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo Column */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="HostItWise"
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/50" style={{ lineHeight: 1.5 }}>
              Lead systems for local businesses.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <a href="mailto:admin@hostitwise.com" className="block text-sm text-white/50 mb-2 hover:text-white transition-colors">admin@hostitwise.com</a>
            <a href="tel:+17089706113" className="block text-sm text-white/50 mb-4 hover:text-white transition-colors">(708) 970-6113</a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-button hover:bg-teal-hover transition-colors"
            >
              Book Free Audit
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} HostItWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
