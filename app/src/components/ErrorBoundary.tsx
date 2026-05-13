import { Component, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props { children: ReactNode }
interface State { hasError: boolean; message: string }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message || 'Something went wrong' };
  }

  componentDidCatch(error: Error, info: { componentStack?: string | null }) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught:', error, info);
  }

  reset = () => this.setState({ hasError: false, message: '' });

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-md text-center">
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">Something broke</p>
          <h1 className="text-3xl font-bold text-gunmetal mb-3">Sorry — that didn&rsquo;t work.</h1>
          <p className="text-gunmetal/70 mb-6">
            Refreshing usually fixes it. If it keeps happening, email{' '}
            <a href="mailto:admin@hostitwise.com" className="text-teal font-medium">admin@hostitwise.com</a>.
          </p>
          <div className="flex gap-3 justify-center">
            <button onClick={this.reset} className="px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-button hover:bg-teal-hover transition-colors">
              Try again
            </button>
            <Link to="/" className="px-5 py-2.5 border border-teal text-teal text-sm font-semibold rounded-button hover:bg-teal hover:text-white transition-colors">
              Go home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
