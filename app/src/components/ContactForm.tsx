import { useState } from 'react';

const ACCESS_KEY = 'ed4c0686-6f3a-48c9-b18b-4700232d6c61';
const SUBMIT_URL = 'https://api.web3forms.com/submit';

interface ContactFormProps {
  /** subject line for the email Web3Forms will send you */
  subject?: string;
  /** small variant uses fewer fields and tighter spacing */
  compact?: boolean;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm({
  subject = 'New audit request from HostItWise.com',
  compact = false,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    formData.append('access_key', ACCESS_KEY);
    formData.append('subject', subject);
    formData.append('from_name', 'HostItWise Website');

    try {
      const res = await fetch(SUBMIT_URL, { method: 'POST', body: formData });
      const data = await res.json();
      if (data && data.success) {
        setStatus('success');
        formEl.reset();
      } else {
        setStatus('error');
        setError((data && data.message) || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error — please try again or email admin@hostitwise.com directly.');
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8 bg-teal/10 border border-teal/40 rounded-xl text-center">
        <h3 className="text-2xl font-bold text-gunmetal mb-2">Got it.</h3>
        <p className="text-gunmetal/80">
          Your message is in. We&rsquo;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputBase =
    'w-full px-4 py-3 bg-white border border-gunmetal/15 rounded-lg ' +
    'text-gunmetal placeholder-gunmetal/40 ' +
    'focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 ' +
    'transition-colors';

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'space-y-4'}>
      {/* honeypot for spam */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <div>
          <label className="block text-sm font-medium text-gunmetal mb-1.5" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputBase}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gunmetal mb-1.5" htmlFor="business">
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            placeholder="Acme Roofing"
            className={inputBase}
          />
        </div>
      </div>

      <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <div>
          <label className="block text-sm font-medium text-gunmetal mb-1.5" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@business.com"
            className={inputBase}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gunmetal mb-1.5" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 555-5555"
            className={inputBase}
          />
        </div>
      </div>

      {!compact && (
        <div>
          <label className="block text-sm font-medium text-gunmetal mb-1.5" htmlFor="website">
            Current website (if any)
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://yourbusiness.com"
            className={inputBase}
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gunmetal mb-1.5" htmlFor="message">
          What&rsquo;s the lead leak?
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          required
          placeholder="Missed calls? Outdated site? Low review count? Tell us what&rsquo;s costing you leads."
          className={inputBase + ' resize-y'}
        />
      </div>

      {status === 'error' && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={
          'w-full inline-flex items-center justify-center px-6 py-3 ' +
          'bg-teal text-white text-base font-semibold rounded-button ' +
          'hover:bg-teal-hover transition-all duration-200 ' +
          'hover:-translate-y-0.5 ' +
          'disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0'
        }
      >
        {status === 'sending' ? 'Sending…' : 'Get my free audit'}
      </button>

      <p className="text-xs text-gunmetal/50 text-center">
        We&rsquo;ll reply within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
