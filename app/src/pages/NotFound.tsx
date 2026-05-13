import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">404</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-gunmetal mb-4 leading-tight">Page not found.</h1>
        <p className="text-gunmetal/70 text-lg mb-8">
          The page you&rsquo;re looking for moved or never existed. Let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="px-6 py-3 bg-teal text-white font-semibold rounded-button hover:bg-teal-hover hover:-translate-y-0.5 transition-all">Home</Link>
          <Link to="/services" className="px-6 py-3 border border-teal text-teal font-semibold rounded-button hover:bg-teal hover:text-white transition-all">Services</Link>
          <Link to="/contact" className="px-6 py-3 border border-gunmetal/20 text-gunmetal font-semibold rounded-button hover:border-gunmetal/50 transition-all">Contact</Link>
        </div>
      </div>
    </div>
  );
}
