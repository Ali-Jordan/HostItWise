import { ContactForm } from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-12">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              Contact
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gunmetal mb-6">
              Let&rsquo;s fix your lead leak.
            </h1>
            <p className="text-gunmetal/70 text-lg sm:text-xl">
              Tell us a bit about your business and where leads are falling through.
              We&rsquo;ll send a free audit within 24 hours — no sales call required.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            <div className="lg:col-span-3">
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-gunmetal/10 shadow-sm">
                <ContactForm subject="New contact request from HostItWise.com /contact" />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gunmetal mb-3">
                  Direct line
                </h3>
                <a
                  href="tel:+17089706113"
                  className="text-2xl font-bold text-teal hover:underline"
                >
                  (708) 970-6113
                </a>
                <p className="text-sm text-gunmetal/60 mt-1">
                  Mon&ndash;Fri, 9a&ndash;6p CT
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gunmetal mb-3">
                  Email
                </h3>
                <a
                  href="mailto:admin@hostitwise.com"
                  className="text-lg text-teal hover:underline break-all"
                >
                  admin@hostitwise.com
                </a>
              </div>

              <div className="p-5 bg-teal/5 border border-teal/20 rounded-xl">
                <h3 className="text-sm font-semibold text-gunmetal mb-2">
                  What happens next
                </h3>
                <ol className="space-y-2 text-sm text-gunmetal/80 list-decimal list-inside">
                  <li>You submit the form (or call).</li>
                  <li>We audit your site, reviews, and visibility.</li>
                  <li>You get a plain-English plan in your inbox within 24 hours.</li>
                  <li>If it&rsquo;s a fit, we talk. If not, no pressure.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
