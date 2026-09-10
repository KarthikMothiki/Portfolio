import React from 'react';
import { Cpu, Activity, Layers, Bot } from 'lucide-react';

export interface StageData {
  id: string;
  badge: string;
  label: string;
  tagline: string;
  icon: React.ElementType;
  stack: string;
  busInfo: string;
  responsibilities: string[];
  interfaces: string;
  keyDecision: string;
  codeSnippet: string;
  codeLanguage: string;
}

export const stagesData: StageData[] = [
  {
    id: 'hardware',
    badge: 'STAGE 01 / 04',
    label: 'HARDWARE & PHYSICAL HAL',
    tagline: 'The physical boundary: where software meets reality.',
    icon: Cpu,
    stack: 'Sensors, actuators, ESP32-S3, FreeRTOS',
    busInfo: 'BUS: UART / SPI / I2C · 13 DRIVERS',
    responsibilities: [
      'Modular C++17 HAL isolating 13+ sensor/actuator drivers from application logic',
      'ESP32-S3 FreeRTOS firmware with deterministic real-time task scheduling',
      'UART/SPI/I2C bus management with CRC-verified packet state machines',
    ],
    interfaces: 'Physical Sensors/Actuators ↔ ESP32-S3 (FreeRTOS) ↔ POSIX UART/V4L2 ↔ Host IPC',
    keyDecision: 'Hardware abstraction layer over direct register access: reduced sensor integration time from weeks to 2 days.',
    codeLanguage: 'cpp',
    codeSnippet: `// C++17 Hardware Abstraction Layer
class SensorHALInterface {
public:
    virtual ~SensorHALInterface() = default;
    virtual HALStatus readTelemetry(TelemetryPacket& out) = 0;
    virtual HALStatus dispatchCommand(const CommandPacket& cmd) = 0;
};`,
  },
  {
    id: 'embedded',
    badge: 'STAGE 02 / 04',
    label: 'REAL-TIME & EMBEDDED IPC',
    tagline: 'The execution boundary: deterministic low-latency messaging.',
    icon: Activity,
    stack: 'C++17 HAL, FreeRTOS, ZeroMQ, POSIX threads, safety queues',
    busInfo: 'IPC LATENCY: <1ms · ZEROMQ IPC',
    responsibilities: [
      'ZeroMQ middleware IPC framework for inter-process telemetry at <1ms latency',
      'Thread-safe safety execution queues with non-blocking emergency overrides',
      'Priority-based message routing separating safety-critical from telemetry data',
    ],
    interfaces: 'ZeroMQ Pub/Sub ↔ Safety Queue Manager ↔ HAL Command Bus',
    keyDecision: 'ZeroMQ over HTTP REST: eliminated >15ms serialization overhead for real-time sensor streams.',
    codeLanguage: 'cpp',
    codeSnippet: `// Low-Latency ZeroMQ Telemetry Transport
zmq::socket_t publisher(context, zmq::socket_type::pub);
publisher.bind("ipc:///tmp/oro_robot_telemetry.ipc");

void publishTelemetry(const RobotStatePacket& state) {
    zmq::message_t msg(&state, sizeof(RobotStatePacket));
    publisher.send(msg, zmq::send_flags::none);
}`,
  },
  {
    id: 'robotics',
    badge: 'STAGE 03 / 04',
    label: 'ROBOTICS AUTONOMY ENGINE',
    tagline: 'The behavioral layer: navigation, vision docking & planning.',
    icon: Layers,
    stack: 'ROS 2, Nav2, MoveIt, vision docking, SLAM',
    busInfo: 'ORCHESTRATION: ROS 2 / NAV2 / MOVEIT',
    responsibilities: [
      'Autonomous navigation with dynamic obstacle avoidance via costmap layers',
      'Vision-guided docking pipeline using custom fiducial marker detection',
      'Manipulator trajectory planning with safety envelope verification',
    ],
    interfaces: 'ROS2 Topics/Services ↔ Nav2 BT ↔ Vision Pipeline ↔ IPC Layer',
    keyDecision: 'Custom fiducial marker system over ArUco: optimized for rear-docking geometry and variable lighting conditions.',
    codeLanguage: 'cpp',
    codeSnippet: `// ROS 2 Rear Docking Navigator Node
class DockingActionServer : public rclcpp::Node {
public:
    DockingActionServer() : Node("rear_docking_server") {
        cb_group_ = create_callback_group(
            rclcpp::CallbackGroupType::MutuallyExclusive);
    }
};`,
  },
  {
    id: 'intelligence',
    badge: 'STAGE 04 / 04',
    label: 'INTELLIGENCE & CLOUD TOPOLOGY',
    tagline: 'The decision layer: multi-agent AI with human-in-the-loop control.',
    icon: Bot,
    stack: 'Google ADK, Gemini 2.0, MCP, FastAPI, WebSockets',
    busInfo: 'ORCHESTRATION: ADK CREW · <50ms TRACE',
    responsibilities: [
      'Multi-agent delegation topology with deterministic HITL safety gating',
      'WebSocket real-time thought trace broadcasting at <50ms latency',
      'MCP server abstraction decoupling LLM orchestration from SaaS SDKs',
    ],
    interfaces: 'REST/WebSocket API ↔ ADK Session ↔ Agent Crew ↔ MCP Tool Servers',
    keyDecision: 'Hierarchical agent topology over monolithic prompting: prevents context clutter and enables isolated failure recovery.',
    codeLanguage: 'python',
    codeSnippet: `# Google ADK + MCP HITL Gating Engine
@mcp_tool_server.register_tool
async def stage_write_mutation(action: PendingAction) -> ApprovalTicket:
    ticket = await hitl_engine.stage_action(action)
    await ws_manager.broadcast_trace(ticket.summary)
    return ticket`,
  },
];

interface ArchitectureStageProps {
  stageIndex: number;
}

export const ArchitectureStage: React.FC<ArchitectureStageProps> = ({ stageIndex }) => {
  const stage = stagesData[stageIndex] || stagesData[0];
  const Icon = stage.icon;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Badge */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-bold text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/20">
          {stage.badge}
        </span>
        <span className="font-mono text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
          {stage.busInfo}
        </span>
      </div>

      {/* Title & Tagline */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center shrink-0">
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--text-primary)]">
            {stage.label}
          </h3>
        </div>
        <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-medium">
          {stage.tagline}
        </p>
      </div>

      {/* Key Architectural Decision */}
      <div className="p-4 rounded-xl bg-[var(--accent-subtle)]/40 border border-[var(--accent)]/20">
        <div className="font-mono text-[11px] uppercase font-bold text-[var(--accent)] mb-1 tracking-wider">
          Key Decision
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-snug">
          {stage.keyDecision}
        </p>
      </div>

      {/* Responsibilities List */}
      <div>
        <div className="font-mono text-[11px] uppercase font-bold text-[var(--text-tertiary)] mb-2 tracking-wider">
          System Responsibilities
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] list-disc list-inside">
          {stage.responsibilities.map((resp, i) => (
            <li key={i} className="leading-relaxed">
              {resp}
            </li>
          ))}
        </ul>
      </div>

      {/* Verified Code Artifact */}
      <div>
        <div className="font-mono text-[11px] uppercase font-bold text-[var(--text-tertiary)] mb-2 tracking-wider">
          Verified Code Artifact
        </div>
        <div className="font-mono text-xs bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border)] overflow-x-auto text-[var(--text-primary)] shadow-inner">
          <pre className="leading-relaxed">
            <code>{stage.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
