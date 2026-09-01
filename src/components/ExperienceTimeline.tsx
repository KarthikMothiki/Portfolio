import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SciFiContainer } from './SciFiContainer';
import { soundFx } from '../lib/sound';

export const ExperienceTimeline: React.FC = () => {
  const experiences = [
    {
      role: 'Senior Robotics Engineer / Technical Owner (ORo Base)',
      company: 'Ogmen Robotics',
      location: 'Delhi, India',
      period: '2022 — PRESENT',
      bullets: [
        'Technical Owner for ORo Base (Intelligent Canine Wellness Station); leading 3 cross-functional engineering streams across mechanical, hardware/electronics, and software teams.',
        'Architected modular C++17 Hardware Abstraction Layer (HAL) unifying 13+ sensors/actuators and non-blocking safety execution queues.',
        'Designed high-throughput 1Gbps Unix domain socket IPC communication layer for real-time inter-process telemetry.',
        'Engineered vision-guided rear autonomous docking control system achieving 78% field trial success rate (78/100 trials).',
      ],
    },
    {
      role: 'Senior Technical Consultant & Robotics Mentor',
      company: 'My Engineering Buddy',
      location: 'Remote',
      period: '2021 — 2022',
      bullets: [
        'Advised 50+ engineering professionals and researchers on ROS2 migration, C++17 system design, MoveIt kinematics, and embedded control.',
        'Designed custom hardware-in-the-loop (HIL) test suites for real-time motor controller validation and sensor telemetry verification.',
      ],
    },
    {
      role: 'Robotics Engineering Fellow & Hardware Specialist',
      company: 'IIT Madras',
      location: 'Chennai, India',
      period: '2019 — 2021',
      bullets: [
        'Engineered 5-DOF manipulator kinematics and ROS trajectory controllers for mobile agricultural robotics platforms.',
        'Executed physical field testing across outdoor agricultural environments, validating obstacle avoidance and payload limits.',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 grid-blueprint border-t border-[var(--border-color)] relative" id="timeline">
      <SciFiContainer>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--tech-cyan)]/10 border border-[var(--border-color)] text-[var(--tech-cyan)] font-tech text-xs font-bold mb-3 tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER CHRONOLOGY</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            PROFESSIONAL LEADERSHIP & EXPERIENCE
          </h2>
          <p className="text-slate-700 dark:text-zinc-300 text-sm max-w-2xl mt-2 font-normal">
            A track record of robotics platform ownership, C++ firmware/HAL development, and cross-functional engineering execution.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="clean-card p-6 sm:p-8 cyber-bracket"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-[var(--border-color)] pb-4">
                <div>
                  <h3 className="font-orbitron font-extrabold text-xl text-slate-900 dark:text-white">{exp.role}</h3>
                  <div className="font-tech text-xs text-[var(--tech-cyan)] font-bold tracking-wider">{exp.company}</div>
                </div>

                <div className="flex items-center gap-4 text-xs font-tech text-slate-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5 bg-[var(--inner-box-bg)] px-2.5 py-1 rounded border border-[var(--inner-box-border)]">
                    <Calendar className="w-3.5 h-3.5 text-[var(--tech-amber)]" />
                    <span className="text-[var(--tech-amber)] font-bold">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[var(--inner-box-bg)] px-2.5 py-1 rounded border border-[var(--inner-box-border)]">
                    <MapPin className="w-3.5 h-3.5 text-[var(--tech-emerald)]" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-tech">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--tech-emerald)] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SciFiContainer>
    </section>
  );
};
