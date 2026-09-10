import React from 'react';
import { Container } from './Container';
import { GraduationCap, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const educationList = [
    {
      degree: 'B.Tech in Mechatronics Engineering',
      institution: 'SASTRA Deemed to be University',
      location: 'Thanjavur, Tamil Nadu, India',
      period: '2019 - 2023',
      description: 'Comprehensive study of mechanical design, control systems, embedded C/C++, power electronics, kinematics, and dynamic systems.',
    },
    {
      degree: "Exchange Semester & Bachelor's Thesis",
      institution: 'Örebro Universitet',
      location: 'Örebro, Sweden',
      period: 'Jan - Jun 2023',
      description: 'International exchange program focused on autonomous mobile robotics, sensor fusion, ROS development, and field-tested robotics experiments.',
    },
  ];

  const certifications = [
    { name: 'ASPIRE Leaders Program', issuer: 'Harvard Business School' },
    { name: 'Robotics Software Engineer Nanodegree', issuer: 'Udacity' },
    { name: 'AI Programming with Python Nanodegree', issuer: 'Udacity' },
    { name: 'Matlab Onramp & Simulink Onramp', issuer: 'MathWorks' },
  ];

  return (
    <section className="py-14 md:py-20 border-t border-[var(--border)] scroll-mt-24" id="education">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--accent)] uppercase tracking-widest mb-2">
              Academic Background & Credentials
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight">
              Education & Certification
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-[520px] leading-relaxed">
            Foundational engineering rigor combined with specialized robotics programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Education Cards Column */}
          <div className="lg:col-span-7 space-y-6">
            {educationList.map((edu, idx) => (
              <div key={idx} className="glass-panel p-7 sm:p-8 flex gap-5 items-start">
                <div className="p-3.5 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] shrink-0 hidden sm:block">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="space-y-2.5 grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-xs sm:text-sm text-[var(--accent)] font-bold shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-medium text-[var(--text-primary)]">
                    {edu.institution} <span className="text-[var(--text-secondary)] font-normal">• {edu.location}</span>
                  </div>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pt-1 font-normal">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-7 sm:p-8 space-y-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border)]">
                  <Award className="w-6 h-6 text-[var(--accent)]" />
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                    Selected Certifications
                  </h3>
                </div>

                <div className="space-y-5">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-semibold text-base sm:text-lg text-[var(--text-primary)] leading-snug">
                        {cert.name}
                      </div>
                      <div className="text-xs sm:text-sm text-[var(--text-secondary)] font-mono">
                        {cert.issuer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[var(--border)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Verification credentials available upon request or via resume PDF.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
