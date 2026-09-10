import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';

export const Experience: React.FC = () => {
  // Track open accordion indices (default first experience open)
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleAccordion = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const experiences = [
    {
      period: 'May 2026 - Present',
      role: 'Senior Robotics Engineer',
      company: 'Ogmen Robotics',
      location: 'New Delhi, India',
      scope: 'Lead 3 cross-functional engineering streams (mechanical, electronics/hardware, software) as technical owner for an Intelligent Canine Wellness Station.',
      bullets: [
        'Integrated software, firmware, electronics, and mechanical subsystems into a production robotics platform, driving system-level architecture and cross-functional technical decisions.',
        'Coordinate sprint planning, dependency management, and cross-functional execution across engineering and business teams.',
        'Own evolution of modular C++17 embedded software platform spanning HAL, middleware, and edge computing across 10+ sensors/actuators.',
        'Architected communication and runtime infrastructure integrating embedded firmware, HAL, and Linux services (ZeroMQ, UART, ESP32-S3, systemd, V4L2, GStreamer).',
      ],
    },
    {
      period: 'Oct 2024 - May 2026',
      role: 'Robot Software Engineer',
      company: 'Ogmen Robotics',
      location: 'New Delhi, India',
      scope: 'Engineered core software, hardware abstraction, and autonomous docking pipelines for ORO Buddy, an autonomous Pet Companion Robot.',
      bullets: [
        'Designed Task Management & Safety Execution System with thread-safe priority task queues and safety-monitoring nodes for deterministic scheduling under concurrent load.',
        'Architected middleware-independent C++17 HAL unifying real-time telemetry and control across 13+ sensor and actuator modules.',
        'Owned ESP32-S3/FreeRTOS compute firmware in C++, tuning 20+ sensors & 8+ actuators with low-level FOC motor controller integration (ODESC V4.2) and closed-loop motion tuning.',
        'Implemented processor-to-processor ZeroMQ middleware framework enabling low-latency bi-directional IPC between compute nodes.',
        'Developed vision-guided rear-end autonomous docking pipeline for front-drive mobile robot, boosting docking success.',
      ],
    },
    {
      period: 'Feb 2024 - Oct 2024',
      role: 'Professional Freelancer (Robotics & Control Systems)',
      company: 'My Engineering Buddy',
      location: 'Remote',
      scope: 'Delivered freelance robotics and control systems projects for academic and industry clients.',
      bullets: [
        'Implemented robotics algorithms, model-based system design, and hardware simulation in MATLAB and Simulink.',
        'Provided technical consulting on ROS/ROS2 migration, manipulator kinematics, and control system optimization.',
      ],
    },
    {
      period: 'Nov 2023 - Jan 2024',
      role: 'Project Engineer',
      company: 'Indian Institute of Technology Madras',
      location: 'Chennai, India',
      scope: 'Autonomous ultrasound imaging research for prenatal care using mobile robotic manipulators.',
      bullets: [
        'Developed ROS interface enabling IGUS 5-DOF manipulator for autonomous prenatal ultrasound imaging research.',
        'Integrated MoveIt and Point Cloud Library (PCL) for ToF-camera-based surface segmentation to support robotic ultrasound path planning.',
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 border-t border-[var(--border)] scroll-mt-24" id="experience">
      <Container>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight mb-8">
          Experience
        </h2>

        {/* Accordion List */}
        <div className="space-y-4">
          {experiences.map((exp, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="glass-panel overflow-hidden transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left cursor-pointer hover:bg-[var(--surface-solid)]/10 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 grow">
                    <span className="font-mono text-xs text-[var(--accent)] font-semibold shrink-0 min-w-[130px]">
                      {exp.period}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-[var(--text-tertiary)] font-mono">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="ml-4 p-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-7 sm:px-7 pt-2 border-t border-[var(--border)] bg-[var(--surface-solid)]/20">
                        <p className="text-sm font-medium text-[var(--text-primary)] leading-relaxed mb-4">
                          {exp.scope}
                        </p>
                        <ul className="space-y-2 text-sm text-[var(--text-secondary)] list-disc list-inside">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="leading-relaxed">{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
