import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Home',      path: '/' },
  { label: 'Services',  path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Results',   path: '/results' },
  { label: 'Contact',   path: '/contact' },
];

export function NavHeader() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isScrolled = scrollY > 50;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-nav' : 'bg-transparent'
      }`}
    >
      <div className="container-site flex items-center justify-between h-[88px] pr-2 md:pr-0">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="HostItWise" className="h-16 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-teal font-semibold'
                  : 'text-gunmetal hover:text-teal'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-button hover:bg-teal-hover transition-all duration-200 hover:-translate-y-0.5"
          >
            Free Website Audit
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              aria-label="Open menu"
              className="p-3 mr-4 sm:mr-6 -my-1 text-gunmetal rounded-md hover:bg-gunmetal/5 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[340px] bg-white px-7 py-8">
            <div className="flex flex-col gap-7 mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-teal font-semibold'
                      : 'text-gunmetal hover:text-teal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-teal text-white text-sm font-semibold rounded-button hover:bg-teal-hover transition-colors mt-6 shadow-button"
              >
                Free Website Audit
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
