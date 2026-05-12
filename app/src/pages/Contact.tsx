import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Calendar } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-soft-section py-20 md:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="Contact"
            headline="Let's find your lead leaks."
            subtext="Book a free audit or send us a message. We'll respond within one business day."
            centered={false}
          />
        </div>
      </section>

      {/* Contact Layout */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Form */}
            <ScrollReveal className="flex-1" direction="left">
              <div className="bg-white rounded-card shadow-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-gunmetal mb-2">Message Sent!</h3>
                    <p className="text-sm text-secondary-text">We'll be in touch within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gunmetal mb-1.5">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-input border border-borders text-sm text-gunmetal focus:outline-none focus:border-teal transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gunmetal mb-1.5">Business Name</label>
                      <input
                        type="text"
                        name="business"
                        required
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-input border border-borders text-sm text-gunmetal focus:outline-none focus:border-teal transition-colors"
                        placeholder="Your business"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gunmetal mb-1.5">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-input border border-borders text-sm text-gunmetal focus:outline-none focus:border-teal transition-colors"
                          placeholder="you@business.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gunmetal mb-1.5">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-input border border-borders text-sm text-gunmetal focus:outline-none focus:border-teal transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gunmetal mb-1.5">Industry</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-input border border-borders text-sm text-gunmetal focus:outline-none focus:border-teal transition-colors bg-white"
                      >
                        <option value="">Select your industry</option>
                        <option value="home-services">Home Services</option>
                        <option value="legal">Legal</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gunmetal mb-1.5">Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-input border border-borders text-sm text-gunmetal focus:outline-none focus:border-teal transition-colors resize-none"
                        placeholder="Tell us about your business and what you need..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 bg-teal text-white text-sm font-semibold rounded-button hover:bg-teal-hover transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal className="md:w-[380px] flex-shrink-0" direction="right">
              <div className="space-y-8 md:pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gunmetal mb-1">Email Us</h4>
                    <p className="text-sm text-secondary-text">hello@hostitwise.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gunmetal mb-1">Call Us</h4>
                    <p className="text-sm text-secondary-text">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gunmetal mb-1">Book an Audit</h4>
                    <p className="text-sm text-secondary-text mb-3">
                      Schedule a 20-minute call to review your website and lead system.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-5 py-2.5 border border-teal text-teal text-sm font-semibold rounded-button hover:bg-teal hover:text-white transition-all duration-200"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
