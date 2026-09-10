import React from 'react';

interface ArchitectureDiagramProps {
  activeStage: number; // 0: Hardware, 1: Embedded, 2: Robotics, 3: Intelligence
  progress: number;    // 0 to 1 scroll progress inside section
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ activeStage, progress }) => {
  // Layer visibility & accumulation logic
  const isHardwareActive = activeStage === 0;
  const isEmbeddedActive = activeStage === 1;
  const isRoboticsActive = activeStage === 2;
  const isIntelligenceActive = activeStage === 3;

  const isEmbeddedVisible = activeStage >= 1;
  const isRoboticsVisible = activeStage >= 2;
  const isIntelligenceVisible = activeStage >= 3;

  // Calculate smooth signal pulse position along vertical axis (Y: 450 to 50)
  const pulseY = 450 - progress * 400;

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[540px] flex items-center justify-center p-2">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full max-w-[700px] drop-shadow-xl select-none transition-all duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="layerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* ── Layer 01: HARDWARE (Physical HAL) ── */}
        <g
          className="transition-all duration-500 ease-out"
          style={{
            transform: 'translateY(0px)',
            opacity: 1,
          }}
        >
          <rect
            x="50"
            y="450"
            width="700"
            height="110"
            rx="14"
            className={`transition-all duration-300 ${
              isHardwareActive
                ? 'stroke-[var(--accent)] fill-[var(--surface-solid)] shadow-lg'
                : 'stroke-[var(--border-strong)] fill-[var(--surface)]'
            }`}
            strokeWidth={isHardwareActive ? '2.5' : '1'}
          />
          <text x="75" y="480" className="font-mono text-xs font-bold fill-[var(--accent)] tracking-wider">
            LAYER 01 / HARDWARE & PHYSICAL HAL
          </text>
          <text x="75" y="505" className="font-sans text-sm font-semibold fill-[var(--text-primary)]">
            ESP32-S3 FreeRTOS Firmware · Sensors & Actuators · HAL Drivers
          </text>
          <text x="75" y="530" className="font-mono text-xs fill-[var(--text-tertiary)]">
            BUS: UART / SPI / I2C · 13 Drivers · Priority Task Scheduling
          </text>

          <g transform="translate(540, 470)">
            <rect x="0" y="0" width="85" height="32" rx="6" className="fill-[var(--surface)] stroke-[var(--border)]" />
            <text x="12" y="20" className="font-mono text-[10px] font-bold fill-[var(--text-secondary)]">ESP32-S3</text>

            <rect x="95" y="0" width="85" height="32" rx="6" className="fill-[var(--surface)] stroke-[var(--border)]" />
            <text x="107" y="20" className="font-mono text-[10px] font-bold fill-[var(--text-secondary)]">FOC Motors</text>
          </g>
        </g>

        {/* Signal Flow Line 1 -> 2 */}
        <path
          d="M 400 450 L 400 400"
          stroke={isEmbeddedVisible ? 'var(--accent)' : 'var(--border)'}
          strokeWidth="2"
          strokeDasharray="6 4"
          className="transition-colors duration-500"
        />

        {/* ── Layer 02: REAL-TIME / EMBEDDED (Deterministic IPC) ── */}
        <g
          className="transition-all duration-500 ease-out"
          style={{
            opacity: isEmbeddedVisible ? 1 : 0.2,
            transform: isEmbeddedVisible ? 'translateY(0px)' : 'translateY(16px)',
          }}
        >
          <rect
            x="50"
            y="310"
            width="700"
            height="110"
            rx="14"
            className={`transition-all duration-300 ${
              isEmbeddedActive
                ? 'stroke-[var(--accent)] fill-[var(--surface-solid)] shadow-lg'
                : 'stroke-[var(--border-strong)] fill-[var(--surface)]'
            }`}
            strokeWidth={isEmbeddedActive ? '2.5' : '1'}
          />
          <text x="75" y="340" className="font-mono text-xs font-bold fill-[var(--accent)] tracking-wider">
            LAYER 02 / REAL-TIME & EMBEDDED IPC
          </text>
          <text x="75" y="365" className="font-sans text-sm font-semibold fill-[var(--text-primary)]">
            ZeroMQ Middleware IPC · C++17 HAL · Safety Queues
          </text>
          <text x="75" y="390" className="font-mono text-xs fill-[var(--text-tertiary)]">
            LATENCY: &lt;1ms · Pub/Sub Telemetry · Non-blocking Overrides
          </text>

          <g transform="translate(540, 330)">
            <rect x="0" y="0" width="85" height="32" rx="6" className="fill-[var(--surface)] stroke-[var(--border)]" />
            <text x="14" y="20" className="font-mono text-[10px] font-bold fill-[var(--text-secondary)]">ZeroMQ IPC</text>

            <rect x="95" y="0" width="85" height="32" rx="6" className="fill-[var(--surface)] stroke-[var(--border)]" />
            <text x="107" y="20" className="font-mono text-[10px] font-bold fill-[var(--text-secondary)]">POSIX TH</text>
          </g>
        </g>

        {/* Signal Flow Line 2 -> 3 */}
        <path
          d="M 400 310 L 400 260"
          stroke={isRoboticsVisible ? 'var(--accent)' : 'var(--border)'}
          strokeWidth="2"
          strokeDasharray="6 4"
          className="transition-colors duration-500"
        />

        {/* ── Layer 03: ROBOTICS SOFTWARE (Autonomy Engine) ── */}
        <g
          className="transition-all duration-500 ease-out"
          style={{
            opacity: isRoboticsVisible ? 1 : 0.2,
            transform: isRoboticsVisible ? 'translateY(0px)' : 'translateY(16px)',
          }}
        >
          <rect
            x="50"
            y="170"
            width="700"
            height="110"
            rx="14"
            className={`transition-all duration-300 ${
              isRoboticsActive
                ? 'stroke-[var(--accent)] fill-[var(--surface-solid)] shadow-lg'
                : 'stroke-[var(--border-strong)] fill-[var(--surface)]'
            }`}
            strokeWidth={isRoboticsActive ? '2.5' : '1'}
          />
          <text x="75" y="200" className="font-mono text-xs font-bold fill-[var(--accent)] tracking-wider">
            LAYER 03 / ROBOTICS AUTONOMY ENGINE
          </text>
          <text x="75" y="225" className="font-sans text-sm font-semibold fill-[var(--text-primary)]">
            ROS 2 · Nav2 Autonomy · MoveIt Manipulation · Vision Docking
          </text>
          <text x="75" y="250" className="font-mono text-xs fill-[var(--text-tertiary)]">
            ORCHESTRATION: Nav2 BT · Fiducial Marker Pipeline · Costmap Layers
          </text>

          <g transform="translate(540, 190)">
            <rect x="0" y="0" width="85" height="32" rx="6" className="fill-[var(--surface)] stroke-[var(--border)]" />
            <text x="18" y="20" className="font-mono text-[10px] font-bold fill-[var(--text-secondary)]">ROS 2 Nav2</text>

            <rect x="95" y="0" width="85" height="32" rx="6" className="fill-[var(--surface)] stroke-[var(--border)]" />
            <text x="110" y="20" className="font-mono text-[10px] font-bold fill-[var(--text-secondary)]">Vision AI</text>
          </g>
        </g>

        {/* Signal Flow Line 3 -> 4 */}
        <path
          d="M 400 170 L 400 120"
          stroke={isIntelligenceVisible ? 'var(--accent)' : 'var(--border)'}
          strokeWidth="2"
          strokeDasharray="6 4"
          className="transition-colors duration-500"
        />

        {/* ── Layer 04: INTELLIGENCE & CLOUD (Agent Topology) ── */}
        <g
          className="transition-all duration-500 ease-out"
          style={{
            opacity: isIntelligenceVisible ? 1 : 0.2,
            transform: isIntelligenceVisible ? 'translateY(0px)' : 'translateY(16px)',
          }}
        >
          <rect
            x="50"
            y="30"
            width="700"
            height="100"
            rx="14"
            className={`transition-all duration-300 ${
              isIntelligenceActive
                ? 'stroke-[var(--accent)] fill-[var(--surface-solid)] shadow-lg'
                : 'stroke-[var(--border-strong)] fill-[var(--surface)]'
            }`}
            strokeWidth={isIntelligenceActive ? '2.5' : '1'}
          />
          <text x="75" y="60" className="font-mono text-xs font-bold fill-[var(--accent)] tracking-wider">
            LAYER 04 / INTELLIGENCE & CLOUD TOPOLOGY
          </text>
          <text x="75" y="83" className="font-sans text-sm font-semibold fill-[var(--text-primary)]">
            Google ADK · Gemini 2.0 · Model Context Protocol (MCP) · FastAPI
          </text>
          <text x="75" y="105" className="font-mono text-xs fill-[var(--text-tertiary)]">
            SAFETY GATING: HITL PendingAction Engine · WebSocket &lt;50ms Trace
          </text>

          <g transform="translate(540, 48)">
            <rect x="0" y="0" width="85" height="32" rx="6" className="fill-[var(--surface)] stroke-[var(--border)]" />
            <text x="16" y="20" className="font-mono text-[10px] font-bold fill-[var(--text-secondary)]">Google ADK</text>

            <rect x="95" y="0" width="85" height="32" rx="6" className="fill-[var(--surface)] stroke-[var(--border)]" />
            <text x="110" y="20" className="font-mono text-[10px] font-bold fill-[var(--text-secondary)]">MCP Server</text>
          </g>
        </g>
        {/* Continuous Dataflow Pulse Dot */}
        <circle cx="400" cy={pulseY} r="5" fill="var(--accent)" className="transition-all duration-75 drop-shadow-[0_0_8px_var(--accent)]" />
      </svg>
    </div>
  );
};
