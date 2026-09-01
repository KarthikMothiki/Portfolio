import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences = [
    {
      role: 'Senior Robotics Engineer',
      company: 'Ogmen Robotics',
      location: 'New Delhi, India',
      period: 'May 2026 – Present',
      highlight: 'Technical Owner for ORo Base (Intelligent Canine Wellness Station)',
      summary:
        'Leading 3 cross-functional engineering streams (mechanical, electronics/hardware, software) driving system-level architecture and platform execution.',
      bullets: [
        'Technical owner for ORo Base, leading cross-functional streams across mechanical, hardware, and software engineering.',
        'Own evolution of a modular C++17 embedded software platform spanning HAL, middleware, and edge computing across 10+ sensors/actuators.',
        'Architected runtime communication infrastructure integrating embedded firmware, HAL, and Linux services (ZeroMQ, UART, ESP32-S3, systemd, V4L2, GStreamer).',
        'Coordinate sprint planning, dependency management, and technical progress translation into business execution decisions.',
      ],
      skills: ['C++17', 'ZeroMQ', 'UART', 'ESP32-S3', 'systemd', 'V4L2', 'GStreamer', 'Cross-Functional Leadership'],
    },
    {
      role: 'Robot Software Engineer',
      company: 'Ogmen Robotics',
      location: 'New Delhi, India',
      period: 'Oct 2024 – May 2026',
      highlight: 'C++17 HAL & Safety Execution System Architect',
      summary:
        'Designed deterministic task scheduler, 1Gbps IPC socket framework, and 78% vision-guided rear docking pipeline for ORO Buddy.',
      bullets: [
        'Designed Task Management & Safety Execution System with thread-safe priority task queues and safety-monitoring nodes.',
        'Architected modular C++17 HAL independent of middleware, unifying telemetry and control across 13+ sensor and 8+ actuator modules.',
        'Owned ESP32-S3 FreeRTOS firmware tuning for 20+ sensors and 8+ actuators including low-level closed-loop FOC motor control.',
        'Implemented 1 Gbps heterogeneous socket IPC for low-latency processor-to-processor bi-directional data exchange.',
        'Developed vision-guided rear autonomous docking pipeline for uneven load mobile robot, raising success rate to 78% (evaluated for patent filing).',
      ],
      skills: ['C++17', 'FreeRTOS', 'FOC Motor Control', 'Socket Programming (1Gbps)', 'Nav2 Docking', 'Thread-Safe Queues'],
    },
    {
      role: 'Professional Freelancer',
      company: 'My Engineering Buddy',
      location: 'Remote',
      period: 'Feb 2024 – Oct 2024',
      highlight: 'MATLAB, Simulink & Control Systems Engineer',
      summary:
        'Delivered freelance robotics and control systems projects involving MATLAB, Simulink algorithms, and model-based design.',
      bullets: [
        'Delivered robotics and control system engineering projects for academic and industry clients globally.',
        'Applied MATLAB & Simulink model-based system design for kinematics, dynamics, and control loop tuning.',
      ],
      skills: ['MATLAB', 'Simulink', 'Robotics Algorithms', 'Control Systems', 'Model-Based Design'],
    },
    {
      role: 'Project Engineer',
      company: 'Indian Institute of Technology Madras',
      location: 'Chennai, India',
      period: 'Nov 2023 – Jan 2024',
      highlight: 'ROS & 3D Point Cloud Surface Segmentation Engineer',
      summary:
        'Developed ROS interface enabling an IGUS 5-DOF manipulator for autonomous ultrasound imaging research in prenatal care.',
      bullets: [
        'Developed ROS driver interface enabling IGUS 5-DOF manipulator teleoperation and automated trajectory planning.',
        'Integrated MoveIt and Point Cloud Library (PCL) for ToF-camera-based 3D surface segmentation for prenatal ultrasound path planning.',
      ],
      skills: ['ROS', 'MoveIt', 'Point Cloud Library (PCL)', 'ToF Camera', 'IGUS 5-DOF', 'Ultrasound Guidance'],
    },
  ];

  return (
    <section className="py-20 md:py-28 grid-bg relative overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRODUCTION TRACK RECORD</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-zinc-900 dark:text-zinc-100 mb-4">
            Engineering Experience
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base max-w-2xl">
            Demonstrated engineering leadership driving system-level decisions across software, electronics, and mechanical streams.
          </p>
        </motion.div>

        {/* Timeline Stream */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`clean-card rounded-[2rem] overflow-hidden ${
                  isExpanded
                    ? 'border-zinc-300 dark:border-zinc-700 shadow-xl'
                    : 'hover:border-amber-500 dark:hover:border-amber-400'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full p-6 sm:p-8 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-amber-600 dark:text-amber-400 shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-zinc-900 dark:text-zinc-100">
                        {exp.role}
                      </h3>
                      <div className="font-mono text-sm text-amber-600 dark:text-amber-400 flex items-center gap-3 mt-1 font-semibold">
                        <span>{exp.company}</span>
                        <span className="text-zinc-400">•</span>
                        <span className="text-zinc-500 dark:text-zinc-400 text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-500" /> {exp.period}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-90 text-amber-500' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 sm:px-8 pb-8 pt-2 border-t border-zinc-200 dark:border-zinc-800"
                  >
                    <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-xl font-mono text-xs text-amber-700 dark:text-amber-300 mb-6">
                      <strong>HIGHLIGHT:</strong> {exp.highlight}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-3 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      {exp.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono text-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
