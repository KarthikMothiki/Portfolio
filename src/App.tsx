import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveArchitecture } from './components/InteractiveArchitecture';
import { EngineeringPrinciples } from './components/EngineeringPrinciples';
import { LeadershipSection } from './components/LeadershipSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { ThemeProvider } from './lib/theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] selection:bg-[#00F0FF] selection:text-black transition-colors duration-300 relative scanlines">
        <ParticleBackground />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <InteractiveArchitecture />
          <EngineeringPrinciples />
          <LeadershipSection />
          <CaseStudiesSection />
          <CapabilitiesSection />
          <ExperienceTimeline />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
