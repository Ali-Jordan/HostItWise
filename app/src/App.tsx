import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Results from './pages/Results';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
