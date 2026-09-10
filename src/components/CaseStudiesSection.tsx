import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';

interface Project {
  id: string;
  title: string;
  role: string;
  timeline?: string;
  summary: string;
  image: string;
  tags: string[];
  theProblem: string;
  theSystem: string;
  theHardPart: string;
  theDecision: string[];
  theFailure: string[];
  theResult: string[];
  engineeringNote: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 'oro-base',
    title: 'Intelligent Canine Wellness Station',
    role: 'Senior Robotics Engineer',
    timeline: 'May 2026 - Present',
    summary:
      'Technical owner of ORo Base, a modular edge-computing platform integrating heterogeneous sensors, actuators, embedded controllers, vision/audio pipelines, inference services, and cloud-connected telemetry through a low-latency C++17/ZeroMQ architecture.',
    image: '',
    tags: [
      'C++17',
      'ZeroMQ',
      'ESP32-S3',
      'FreeRTOS',
      'Embedded Systems',
      'Edge AI',
      'Robotics Middleware',
      'PostgreSQL',
      'HAL Architecture'
    ],
    theProblem:
      'Architect and integrate a compute-constrained robotic wellness station that combines embedded hardware, heterogeneous sensors and actuators, real-time control, edge inference, and persistent telemetry while maintaining low-latency communication and reliable operation across independently running subsystems.',
    theSystem:
      'Sensors / Actuators ↔ ESP32-S3 / Linux Hardware Interfaces ↔ C++17 HAL & Middleware ↔ ZeroMQ IPC ↔ Edge Inference & Control Services ↔ PostgreSQL ↔ Cloud Sync',
    theHardPart:
      'Designing the system boundary between real-time embedded control and Linux-based edge computing while coordinating multiple concurrent C++ services, sensor pipelines, inference workloads, database persistence, and command execution under constrained CPU, memory, and latency budgets.',
    theDecision: [
      'Designed a modular C++17 hardware abstraction and middleware architecture separating hardware interfaces, transport, inference, and application-level logic',
      'Established ZeroMQ-based inter-process communication for low-latency telemetry and command exchange between embedded controllers, Linux services, and edge-processing components',
      'Designed thread-safe priority-based task execution and command handling to coordinate concurrent hardware operations while preserving deterministic execution ordering',
      'Integrated sensor, actuator, camera, audio, and thermal data pipelines into a unified edge architecture with persistent signal and event telemetry',
      'Established a Storage Handoff layer between C++ edge services and PostgreSQL to decouple inference logic from persistence and downstream cloud synchronization'
    ],
    theFailure: [
      'UART packet corruption: implemented CRC validation and an auto-recovering packet state machine with safe fallback behavior for corrupted or incomplete serial frames',
      'Concurrent subsystem execution: validated priority task ordering and synchronization under simulated concurrent load to eliminate deadlock scenarios',
      'Hardware/service availability: designed subsystem boundaries so individual services can recover independently without unnecessarily taking down the complete edge stack'
    ],
    theResult: [
      'Architecture · Integrated embedded control, Linux hardware interfaces, edge inference, middleware, persistence, and cloud synchronization into a modular robotics platform',
      'Performance · Validated ZeroMQ inter-process communication with measured latency below 8 ms in laboratory testing',
      'Reliability · Validated priority task ordering and zero deadlocks under simulated concurrent execution',
      'Integration · Established a common signal persistence path through Storage Handoff and PostgreSQL for edge-generated observations',
      'System ownership · Technical owner coordinating mechanical, electronics/hardware, and software workstreams from architecture through system integration'
    ],
    engineeringNote:
      'The next architectural evolution would be a more standardized observation and discovery layer for heterogeneous sensors, reducing integration effort as the platform scales to additional hardware and inference capabilities.',
    githubUrl: 'https://github.com/KarthikMothiki'
  },
  {
    id: 'oro-buddy',
    title: 'Autonomous Pet Companion Robot',
    role: 'Robotics Systems Engineer / Lead Firmware Architect',
    timeline: 'Oct 2024 - May 2026',
    summary: 'End-to-end robotics systems engineering for an autonomous mobile pet companion, owning the firmware architecture, task management system, motor-controller tuning, and low-latency integration from sensor-level hardware through middleware and ROS2 Nav2.',
    image: '',
    tags: [
      'C++17',
      'ROS2',
      'FreeRTOS',
      'ESP32-S3',
      'Nav2',
      'ODESC V4.2',
      'Robotics Middleware',
      'Embedded Systems'
    ],
    theProblem: 'Build and integrate the embedded and robotics software stack for an autonomous mobile companion robot, bridging heterogeneous sensors and actuators with the ROS2 navigation stack while maintaining low-latency communication, deterministic task execution, and reliable hardware control.',
    theSystem: '20+ Sensors / 8+ Actuators ↔ ESP32-S3 FreeRTOS Firmware ↔ POSIX UART / Hardware Interfaces ↔ Robotics Middleware ↔ ROS2 Nav2 ↔ Autonomous Robot Behaviors',
    theHardPart: 'Building a reliable boundary between real-time embedded firmware and the higher-level ROS2 autonomy stack while coordinating sensor acquisition, actuator control, motor feedback, task scheduling, and autonomous behaviors across heterogeneous hardware.',
    theDecision: [
      'Owned the end-to-end firmware architecture and implementation on ESP32-S3, establishing the sensor-to-middleware interface used by the higher-level robotics stack',
      'Designed and implemented a thread-safe Task Management & Execution System with priority-based queues for deterministic coordination of concurrent robot operations',
      'Built the low-latency FW-to-middleware integration layer carrying sensor and actuator data from the embedded hardware level through to ROS2/Nav2',
      'Owned motor-controller commissioning and tuning for dual ODESC V4.2 drives, including velocity limits, feedback behavior, acceleration/deceleration response, and motion stability under varying payload conditions',
      'Implemented closed-loop motor control and hardware interfaces on the ESP32-S3, integrating motor feedback, command execution, and safety handling with the higher-level robotics stack',
      'Developed patent-pending mechanism firmware for integrated robot features including camera rotation, treat dispensing, and ball throwing',
      'Engineered front-drive, rear-ended autonomous docking to enable reliable docking despite the robot’s physical drive configuration and constrained docking geometry',
      'Designed and assembled robot wiring, cable conduits, and harnesses; interpreted KiCad schematics to integrate electrical subsystems and performed SMD soldering during hardware bring-up'
    ],
    theFailure: [
      'UART communication faults: implemented packet validation and CRC-based recovery with safety-stop handling',
      'Concurrent task contention: designed synchronized priority queues and execution control to prevent race conditions and deadlocks',
      'Docking fiducial occlusion: incorporated motion-estimation / odometry fallback to maintain trajectory continuity',
      'Motor stall / overcurrent: implemented current limiting and emergency shutdown handling within the firmware safety state machine'
    ],
    theResult: [
      'Built · End-to-end FW-to-middleware pipeline connecting embedded sensors and actuators with the ROS2 autonomy stack at low latency',
      'Production · Established a reusable task management and execution framework for coordinating concurrent robot behaviors',
      'Production · Integrated 20+ sensors and 8+ actuators across the mobile robot platform',
      'Engineering · Delivered firmware for multiple patent-pending robotic mechanisms and supported complete electrical/hardware integration from schematic to assembled robot'
    ],
    engineeringNote: 'Next iteration will focus on deeper integration with the ROS2 Nav2 stack, particularly tighter coordination between the robot’s task management layer, navigation behaviors, docking workflows, and low-level motion control.',
    githubUrl: 'https://github.com/KarthikMothiki'
  },
  {
    id: 'sutradhara',
    title: 'Sūtradhāra: Autonomous Multi-Agent Orchestrator',
    role: 'Lead AI Systems & Backend Architect',
    timeline: '2025',
    summary: 'Deterministic multi-agent AI orchestrator using Google ADK, Gemini 2.0, and MCP with FastAPI, WebSockets, and stateful HITL approval workflows.',
    image: '/assets/img/sutradhara_ai_orchestrator.png',
    tags: ['Python', 'Google ADK', 'Gemini 2.0', 'MCP', 'FastAPI', 'WebSockets', 'GCP Cloud Run'],
    theProblem: 'Automate complex multi-step workflows across Google Workspace & developer tools without hallucination risks or unauthorized state mutation.',
    theSystem: 'User Input ↔ FastAPI REST/WS ↔ Google ADK Session ↔ Root Manager Agent ↔ Sub-Agent Crew ↔ MCP Tools ↔ PendingAction Staging ↔ HITL Approval ↔ Cloud Run',
    theHardPart: 'Maintaining a WebSocket latency budget <50ms for real-time thought trace broadcasting while running a stateless GCP Cloud Run deployment (1 vCPU, 512MB RAM) and ensuring zero unauthorized write mutations.',
    theDecision: [
      'Multi-agent delegation topology via Google ADK manager architecture',
      'MCP (Model Context Protocol) server abstraction decoupling LLM orchestration from SaaS SDKs',
      'Mandatory HITL approval workflow engine with atomic state rollback',
      'Rejected: Monolithic single-agent prompting (rejected due to context clutter and tool hallucination)',
      'Rejected: Hardcoded sequential chains (Zapier) (rejected due to lack of dynamic delegation)'
    ],
    theFailure: [
      'Tool execution failure: automatic agent retry loop with state rollback staging'
    ],
    theResult: [
      'Lab validation · WebSocket latency: <50ms real-time event delivery',
      'Production · 100% protection against unauthorized mutations via HITL approval engine',
      'Automated multi-step cross-application planning with zero unauthorized database writes.'
    ],
    engineeringNote: 'Future architectures should focus on bi-directional Gemini Live streaming API and deeper enterprise MCP integrations for seamless state management.',
    githubUrl: 'https://github.com/KarthikMothiki/sutradhara'
  },
  {
    id: 'cppsentry',
    title: 'CppSentry: C++ Code Analyzer Agent',
    role: 'Creator & Lead Developer',
    timeline: '2025',
    summary: 'AI-assisted C++17 static analysis platform combining deterministic AST analysis with LLM reasoning to evaluate memory safety, complexity, and modern C++ compliance.',
    image: '/assets/img/cppsentry_static_analyzer.png',
    tags: ['C++17', 'Static Analysis', 'AST Parsing', 'LLM Reasoning', 'FastAPI', 'GCP Cloud Run'],
    theProblem: 'Automate static safety enforcement for C++17 codebase rules: memory leaks, uninitialized pointers, non-deterministic dynamic allocations in real-time loops.',
    theSystem: 'C++ Source ↔ AST Parser ↔ Static Rule Analyzer ↔ LLM Reasoner ↔ FastAPI REST API / CLI ↔ Cloud Run',
    theHardPart: 'Achieving zero false positive target on critical real-time code patterns while ensuring fast execution for pre-commit static analysis and CI/CD pipelines.',
    theDecision: [
      'Combined deterministic AST parsing with LLM diagnostic reasoning',
      'Developed secure REST APIs, structured reporting, and containerized deployment on GCP Cloud Run',
      'Rejected: Pure regex matching (rejected due to inability to resolve C++ AST scopes)'
    ],
    theFailure: [
      'Syntax parse errors: fault-tolerant AST recovery maintaining partial file scan'
    ],
    theResult: [
      'Lab validation · 100% catching rate on dynamic memory allocation inside HAL real-time loops',
      'Prevented non-deterministic dynamic allocations and pointer safety issues from entering production firmware.'
    ],
    engineeringNote: 'A natural next step would be adding automated code refactoring patches for detected C++ compliance violations directly into the developer workflow.',
    githubUrl: 'https://github.com/KarthikMothiki/cppsentry'
  },
  {
    id: 'hv100-ros',
    title: 'ROS Modernization of Harvest Automation HV-100 Robot',
    role: 'Mechatronics & ROS Systems Engineer',
    timeline: '2021 - 2023',
    summary: 'Modernized ROS software stack of commercial Harvest Automation HV-100 agricultural robot by resolving EOL package failures, driver conflicts, and OEM communication faults.',
    image: '/assets/img/hv100_agricultural_robot.png',
    tags: ['ROS/ROS2', 'Raspberry Pi', 'MoveIt', 'Manipulators', 'Embedded Linux', 'Differential Drive'],
    theProblem: 'Restore full functionality to a commercial Harvest Automation HV-100 agricultural robot suffering from ROS Melodic end-of-life failures, sensor calibration issues, and OEM communication faults.',
    theSystem: 'ROS Stack ↔ Raspberry Pi ROS Bridge ↔ Proprietary OEM Controller',
    theHardPart: 'Reverse-engineering and integrating with a proprietary OEM controller communication protocol in a rugged outdoor agricultural environment deployment.',
    theDecision: [
      'Designed and deployed a Raspberry Pi-based ROS Bridge control architecture',
      'Enabled teleoperation, differential-drive mobility, manipulator control, and ROS-native OEM communication'
    ],
    theFailure: [
      'No critical failures encountered in current deployment.'
    ],
    theResult: [
      'Field trial · Restored 100% robot functionality and differential-drive mobility in agricultural trials',
      'Successfully revived commercial hardware platform for autonomous agricultural operations.'
    ],
    engineeringNote: 'Migrating the ROS bridge architecture to native ROS2 Humble would further modernize the stack and improve real-time determinism.',
    githubUrl: 'https://github.com/KarthikMothiki'
  },
  {
    id: 'mobile-manipulator',
    title: 'Autonomous Navigation using KUKA youBot Mobile Manipulator',
    role: 'Robotics Engineer',
    timeline: '2022',
    summary: 'Developed a mobile manipulator simulation using KUKA youBot, implementing autonomous navigation with dynamic obstacle avoidance in ROS and CoppeliaSim.',
    image: '/assets/img/kuka_youbot_simulation.png',
    tags: ['ROS', 'KUKA youBot', 'CoppeliaSim', 'MoveIt', 'Dynamic Obstacle Avoidance', 'Navigation'],
    theProblem: 'Implement real-time trajectory planning and dynamic obstacle avoidance for a mobile manipulator in complex indoor environments.',
    theSystem: 'ROS Navigation Stack ↔ MoveIt ↔ CoppeliaSim ↔ KUKA youBot Model',
    theHardPart: 'Coordinating base and manipulator trajectory planning while simultaneously avoiding dynamic obstacles in complex indoor environments.',
    theDecision: [
      'MoveIt trajectory planning for base and manipulator coordination',
      'ROS costmap layers for real-time dynamic obstacle avoidance in CoppeliaSim'
    ],
    theFailure: [
      'No critical failures encountered in current deployment.'
    ],
    theResult: [
      'Simulation · Zero collision events in CoppeliaSim indoor obstacle benchmarks',
      'Validated mobile manipulator trajectory algorithms prior to physical deployment.'
    ],
    engineeringNote: 'Upgrading the simulation environment to Gazebo Ignition with ROS2 Control would provide better physics fidelity and modern tooling.',
    githubUrl: 'https://github.com/KarthikMothiki'
  },
  {
    id: 'ultrasound-manipulator',
    title: 'Robotic Prenatal Ultrasound Manipulator Interface (IIT Madras)',
    role: 'Project Engineer',
    timeline: 'Nov 2023 - Jan 2024',
    summary: 'Developed a ROS interface enabling an IGUS 5-DOF manipulator for autonomous ultrasound imaging research for prenatal care.',
    image: '/assets/img/igus.png',
    tags: ['ROS', 'MoveIt', 'PCL (Point Cloud Library)', 'ToF Camera', 'IGUS 5-DOF Manipulator'],
    theProblem: 'Automate ultrasound sensor probe trajectory along anatomical surface contours for non-invasive prenatal ultrasound research.',
    theSystem: 'ToF Camera ↔ PCL ↔ MoveIt ↔ ROS ↔ IGUS 5-DOF Manipulator',
    theHardPart: 'Maintaining strict force and position safety bounds during tissue contact while performing real-time surface point cloud processing from the ToF camera sensor.',
    theDecision: [
      'Developed ROS interface driver for IGUS 5-DOF robotic arm',
      'Integrated MoveIt and Point Cloud Library (PCL) for ToF-camera-based surface segmentation to support path planning'
    ],
    theFailure: [
      'No critical failures encountered in current deployment.'
    ],
    theResult: [
      'Lab validation · Successful surface tracking trajectory generation from ToF point cloud segmentation',
      'Accelerated robotic prenatal healthcare research at IIT Madras.'
    ],
    engineeringNote: 'Incorporating real-time force/torque sensor feedback into the MoveIt compliance loop would significantly improve patient safety and scan quality.',
    githubUrl: 'https://github.com/KarthikMothiki'
  }
];

export const CaseStudiesSection: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeId, setActiveId] = useState<string>(projects[0].id);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id.replace('project-', ''));
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -40% 0px' }
    );

    projects.forEach((p) => {
      const el = document.getElementById(`project-${p.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    modalRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  const scrollToProject = (id: string) => {
    const el = document.getElementById(`project-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 md:py-16 border-t border-[var(--border)] scroll-mt-24" id="selected-work">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Sticky Project Index Sidebar */}
          <div className="lg:col-span-4 sticky top-28 h-fit space-y-6">
            <div>
              <div className="font-sans font-semibold text-xs sm:text-sm text-[var(--accent)] uppercase tracking-widest mb-2">
                7 Systems · 2021 - Present
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
                Selected work
              </h2>
            </div>

            {/* Interactive Index List of 7 Projects */}
            <nav className="flex flex-col space-y-1 font-sans text-sm font-medium pt-4 border-t border-[var(--border)]">
              {projects.map((p, idx) => {
                const isActive = activeId === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => scrollToProject(p.id)}
                    className={`text-left py-2 px-3 rounded-lg transition-all cursor-pointer flex items-center justify-between ${isActive
                      ? 'bg-[var(--accent-subtle)] text-[var(--accent)] font-bold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]'
                      }`}
                  >
                    <span className="truncate pr-2">
                      0{idx + 1} · {p.title.split(':')[0].trim()}
                    </span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Column: Unfolded Editorial Engineering Stories for All 7 Projects */}
          <div className="lg:col-span-8 space-y-24">
            {projects.map((p, index) => (
              <div
                key={p.id}
                id={`project-${p.id}`}
                className="scroll-mt-28 space-y-6 pt-4 first:pt-0"
              >
                {/* Header */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs text-[var(--text-tertiary)]">
                    <span className="text-[var(--accent)] font-semibold uppercase tracking-wider">0{index + 1} / SYSTEM</span>
                    <span>{p.timeline}</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
                    {p.title}
                  </h3>
                  <div className="text-sm font-medium text-[var(--text-secondary)] font-mono mt-1">
                    {p.role}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                  {p.summary}
                </p>

                {/* Image (if provided) */}
                {p.image && (
                  <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-solid)]/40 aspect-video max-h-[360px]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.slice(0, 6).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                  {p.tags.length > 6 && (
                    <span className="px-2 py-1 text-xs font-mono text-[var(--text-tertiary)]">
                      +{p.tags.length - 6} more
                    </span>
                  )}
                </div>

                {/* Concise Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] space-y-1.5">
                    <div className="font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                      Core Challenge
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                      {p.theProblem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] space-y-1.5">
                    <div className="font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                      Key Results
                    </div>
                    <ul className="space-y-1 text-[var(--text-secondary)] list-disc list-inside">
                      {p.theResult.slice(0, 2).map((res, i) => (
                        <li key={i} className="leading-tight truncate">{res}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Trigger Modal Overlay Button */}
                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => setSelected(p)}
                    className="px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    FULL TECHNICAL SPECIFICATION <ArrowUpRight size={14} />
                  </button>

                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-mono transition-all flex items-center gap-1.5"
                    >
                      <ExternalLink size={14} /> Repository
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Technical Specification Overlay Modal */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <div
              ref={modalRef}
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--surface-solid)] border border-[var(--border-strong)] rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative outline-none cursor-default"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[var(--surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-2">
                FULL SYSTEM SPECIFICATION
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--text-primary)] mb-2">
                {selected.title}
              </h3>
              <p className="text-xs font-mono text-[var(--text-tertiary)] mb-6">
                {selected.role} · {selected.timeline}
              </p>

              <div className="space-y-6 text-sm text-[var(--text-secondary)]">
                <div>
                  <h4 className="font-heading font-semibold text-base text-[var(--text-primary)] mb-2">01. Problem & Architecture Scope</h4>
                  <p className="leading-relaxed">{selected.theProblem}</p>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-base text-[var(--text-primary)] mb-2">02. System Boundary Topology</h4>
                  <div className="font-mono text-xs bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border)] leading-relaxed">
                    {selected.theSystem}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-base text-[var(--text-primary)] mb-2">03. The Hard Engineering Challenge</h4>
                  <p className="leading-relaxed">{selected.theHardPart}</p>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-base text-[var(--text-primary)] mb-2">04. Key Architectural Decisions</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {selected.theDecision.map((dec, i) => (
                      <li key={i} className="leading-relaxed">{dec}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-base text-[var(--text-primary)] mb-2">05. Measured Results & Validation</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {selected.theResult.map((res, i) => (
                      <li key={i} className="leading-relaxed">{res}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-base text-[var(--text-primary)] mb-2">06. Engineering Takeaway & Roadmap</h4>
                  <p className="leading-relaxed p-4 rounded-xl bg-[var(--accent-subtle)]/40 border border-[var(--accent)]/20">
                    {selected.engineeringNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
