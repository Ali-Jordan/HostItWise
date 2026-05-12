import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavHeader } from './NavHeader';
import { Footer } from './Footer';
import type { ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}
