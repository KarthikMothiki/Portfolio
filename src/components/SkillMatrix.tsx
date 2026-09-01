import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Brain, Award, Layers, Sparkles } from 'lucide-react';

export const SkillMatrix: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'C++17 / C', status: 'PRODUCTION CORE', detail: 'Modern C++ memory safety, templates, HAL, POSIX' },
        { name: 'Python', status: 'ADVANCED STACK', detail: 'Async services, FastAPI, ROS2 Python nodes, ADK' },
        { name: 'MATLAB / Simulink', status: 'MODEL-BASED', detail: 'Kinematics, dynamics, model-based system design' },
      ],
    },
    {
      title: 'Robotics & Middleware',
      icon: Cpu,
      skills: [
        { name: 'ROS2 / ROS / Managed Nodes', status: 'PRODUCTION CORE', detail: 'Lifecycle nodes, pub/sub, rclcpp, launch' },
        { name: 'Nav2 / SLAM / BehaviorTree.CPP', status: 'AUTONOMOUS NAV', detail: 'Autonomous navigation, state machine trees' },
        { name: 'MoveIt / PCL Surface Segmentation', status: 'PERCEPTION & MOTION', detail: 'Point cloud segmentation, 5-DOF path planning' },
      ],
    },
    {
      title: 'Embedded Systems & Hardware',
      icon: Layers,
      skills: [
        { name: 'Embedded Linux / systemd', status: 'KERNEL & DAEMONS', detail: 'V4L2, GStreamer, POSIX threads, daemons' },
        { name: 'ESP32-S3 / FreeRTOS / UART', status: 'REAL-TIME FIRMWARE', detail: 'Real-time firmware, multithreading task queues' },
        { name: 'FOC Motor Control / ODESC V4.2', status: 'CLOSED-LOOP CONTROL', detail: 'Closed-loop Field-Oriented Control, motor tuning' },
      ],
    },
    {
      title: 'Distributed Systems & AI',
      icon: Brain,
      skills: [
        { name: 'ZeroMQ / 1Gbps Socket IPC', status: 'HIGH-SPEED IPC', detail: 'Heterogeneous inter-process communication' },
        { name: 'Google ADK / Gemini 2.0 / MCP', status: 'MULTI-AGENT ORCHESTRATION', detail: 'Multi-agent orchestration, tool calling' },
        { name: 'GCP Cloud Run / FastAPI', status: 'CLOUD SERVICES', detail: 'Serverless containerized AI microservices' },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 grid-bg relative overflow-hidden" id="skills">
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
            <Award className="w-3.5 h-3.5" />
            <span>COMPETENCY MATRIX</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-zinc-900 dark:text-zinc-100 mb-4">
            Technical Skill Matrix
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base max-w-2xl">
            Core technical proficiencies across low-level C++ embedded systems, ROS2 middleware, high-speed sockets, and AI multi-agent orchestration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="clean-card rounded-[2rem] p-6 sm:p-8 hover:border-amber-500 dark:hover:border-amber-400"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-amber-600 dark:text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 dark:text-zinc-100">{cat.title}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80">
                      <div className="flex flex-wrap justify-between items-center mb-1.5 gap-2">
                        <span className="text-zinc-900 dark:text-zinc-100 font-bold font-heading text-base flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> {s.name}
                        </span>
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-semibold tracking-wider">
                          {s.status}
                        </span>
                      </div>

                      <div className="font-mono text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.detail}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
