import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, GitBranch } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & Orchestration', 'C++ & Embedded', 'Robotics & ROS'];

  const projects = [
    {
      id: 'sutradhara',
      title: 'Sūtradhāra — Multi-Agent Productivity Orchestrator',
      category: 'AI & Orchestration',
      img: 'assets/img/sutradhara_ui.png',
      desc: 'Architected a multi-agent AI orchestration platform using Google ADK, Gemini 2.0, and MCP with FastAPI, WebSockets, and async services for workflow automation. Deployed on GCP Cloud Run.',
      tags: ['Google ADK', 'Gemini 2.0', 'MCP', 'FastAPI', 'Cloud Run', 'Async Python'],
      github: 'https://github.com/KarthikMothiki',
      highlights: ['HITL Approval Workflows', 'Rollback & Observability', 'Google Workspace MCP Tools'],
    },
    {
      id: 'cppsentry',
      title: 'CppSentry — C++ Code Analyzer Agent',
      category: 'C++ & Embedded',
      img: 'assets/img/cppsentry_ui.png',
      desc: 'AI-assisted C++17 static analysis platform combining deterministic analysis with LLM reasoning to evaluate memory safety, complexity, and modern C++ compliance.',
      tags: ['C++17', 'Static Analysis', 'LLM Reasoning', 'FastAPI', 'GCP Cloud Run'],
      github: 'https://github.com/KarthikMothiki',
      highlights: ['Memory Safety Checkers', 'C++17 Standard Adherence', 'Structured JSON Reporting'],
    },
    {
      id: 'hv100',
      title: 'ROS Modernization of HV-100 Agricultural Robot',
      category: 'Robotics & ROS',
      img: 'assets/img/robotics_hal.png',
      desc: 'Modernized the ROS software stack of a commercial Harvest Automation HV-100 agricultural robot. Designed Raspberry Pi ROS Bridge for differential-drive teleoperation and OEM controller restoration.',
      tags: ['ROS / ROS2', 'Raspberry Pi', 'Differential Drive', 'OEM Controller', 'C++ / Python'],
      github: 'https://github.com/KarthikMothiki',
      highlights: ['OEM Protocol Restoration', 'Raspberry Pi ROS Bridge', 'Differential Mobility'],
    },
    {
      id: 'mobile-manipulator',
      title: 'Autonomous Navigation using Mobile Manipulator',
      category: 'Robotics & ROS',
      img: 'assets/img/robotics_hal.png',
      desc: 'Developed a mobile manipulator simulation using KUKA youBot, implementing autonomous navigation with dynamic obstacle avoidance in ROS and CoppeliaSim.',
      tags: ['ROS', 'KUKA youBot', 'CoppeliaSim', 'MoveIt', 'Dynamic Obstacle Avoidance'],
      github: 'https://github.com/KarthikMothiki',
      highlights: ['KUKA youBot Simulation', 'CoppeliaSim Engine', 'Trajectory Generation'],
    },
    {
      id: 'flower-classifier',
      title: 'Flower Categorization using Deep Learning',
      category: 'AI & Orchestration',
      img: 'assets/img/sutradhara_ui.png',
      desc: 'Built and trained an Image Classifier predicting top 5 flower classes using PyTorch pre-trained VGG16 model with 78.09% accuracy alongside command-line prediction interface.',
      tags: ['PyTorch', 'VGG16', 'Deep Learning', 'Matplotlib', 'CLI Tool'],
      github: 'https://github.com/KarthikMothiki',
      highlights: ['78.09% Accuracy', 'VGG16 Pre-trained Model', 'Python Command Line App'],
    },
  ];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 md:py-28 grid-bg relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-mono text-xs mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED REPOSITORIES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-zinc-900 dark:text-zinc-100 mb-4">
            Systems & AI Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base max-w-2xl">
            Autonomous mobile robotics stacks, multi-agent AI orchestrators, and C++ static code analysis engines.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
                filter === cat
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold shadow-md'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="clean-card rounded-[2rem] overflow-hidden hover:border-amber-500 dark:hover:border-amber-400 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full font-mono text-[10px] text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                      {p.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-3 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300 text-xs leading-relaxed mb-4">{p.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[10px] border border-zinc-200 dark:border-zinc-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 border-t border-zinc-200/80 dark:border-zinc-800/80 mt-auto">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <GitBranch className="w-4 h-4 text-amber-500" /> View GitHub Repository
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
