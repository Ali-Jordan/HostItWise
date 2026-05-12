import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              Get Started
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gunmetal mb-4">
              Free website audit.
            </h2>
            <p className="text-gunmetal/70 text-lg">
              Tell us where your leads are leaking. We&rsquo;ll send you a no-fluff plan
              within 24 hours.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gunmetal/10 shadow-sm">
            <ContactForm compact />
          </div>

          <div className="mt-8 text-center text-sm text-gunmetal/60">
            Prefer to talk?{' '}
            <a href="tel:+17089706113" className="text-teal font-medium hover:underline">
              (708) 970-6113
            </a>
            {' '}·{' '}
            <a href="mailto:admin@hostitwise.com" className="text-teal font-medium hover:underline">
              admin@hostitwise.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
