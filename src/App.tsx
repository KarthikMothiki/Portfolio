import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { InteractiveArchitecture } from './components/InteractiveArchitecture';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { TechnicalDomains } from './components/TechnicalDomains';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { LegalModals } from './components/LegalModals';
import { NotFound } from './components/NotFound';
import { ThemeProvider } from './lib/theme';

export const App: React.FC = () => {
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Basic route check for custom 404 page demonstration / pathname handling
    const path = window.location.pathname;
    if (path !== '/' && path !== '' && !path.endsWith('.html') && !path.endsWith('.pdf')) {
      setIs404(true);
    }
  }, []);

  if (is404) {
    return <NotFound />;
  }

  const triggerPrivacy = () => {
    const el = document.querySelector('#legal-triggers button:first-child') as HTMLButtonElement;
    if (el) el.click();
  };

  const triggerTerms = () => {
    const el = document.querySelector('#legal-triggers button:last-child') as HTMLButtonElement;
    if (el) el.click();
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative">
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <CaseStudiesSection />
          <InteractiveArchitecture />
          <Experience />
          <Education />
          <TechnicalDomains />
          <ContactSection />
        </main>
        <Footer onOpenPrivacy={triggerPrivacy} onOpenTerms={triggerTerms} />

        {/* Production Utilities */}
        <CookieBanner />
        <StickyMobileCTA />
        <LegalModals />
      </div>
    </ThemeProvider>
  );
};

export default App;
