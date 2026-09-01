import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, Trash2 } from 'lucide-react';
import { soundFx } from '../lib/sound';

interface LogEntry {
  id: string;
  type: 'cmd' | 'output' | 'success' | 'warn' | 'error';
  text: string;
}

export const CyberTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: '1', type: 'output', text: 'K-ROBOTICS C++17 HAL & ROS2 CLI TELEMETRY SYSTEM v4.2' },
    { id: '2', type: 'output', text: 'Type "help" or click command pills below to execute system diagnostics.' },
    { id: '3', type: 'success', text: '[OK] 13 Sensor Channels & 8 Actuators Online. Baud rate: 921600' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const executeCommand = (cmdStr: string) => {
    soundFx.playClick();
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    const newLogs: LogEntry[] = [
      ...logs,
      { id: Date.now().toString(), type: 'cmd', text: `karthik@robotics-core:~$ ${cmdStr}` },
    ];

    if (cleanCmd === 'help') {
      newLogs.push(
        { id: (Date.now() + 1).toString(), type: 'output', text: 'Available commands:' },
        { id: (Date.now() + 2).toString(), type: 'output', text: '  ros2 node list  - List active ROS2 daemons' },
        { id: (Date.now() + 3).toString(), type: 'output', text: '  hal status      - Query C++17 Hardware Abstraction Layer' },
        { id: (Date.now() + 4).toString(), type: 'output', text: '  dock --run      - Execute Vision-Guided Docking Trial' },
        { id: (Date.now() + 5).toString(), type: 'output', text: '  metrics         - Print production reliability statistics' },
        { id: (Date.now() + 6).toString(), type: 'output', text: '  skills          - Output technical stack matrix' },
        { id: (Date.now() + 7).toString(), type: 'output', text: '  clear           - Clear terminal screen' }
      );
    } else if (cleanCmd === 'ros2 node list') {
      newLogs.push(
        { id: (Date.now() + 1).toString(), type: 'success', text: '/oro_hal/telemetry_daemon [100 Hz] - ACTIVE' },
        { id: (Date.now() + 2).toString(), type: 'success', text: '/nav2/vision_docking_node [30 FPS] - ACTIVE' },
        { id: (Date.now() + 3).toString(), type: 'success', text: '/safety/priority_scheduler [1000 Hz] - ACTIVE' },
        { id: (Date.now() + 4).toString(), type: 'success', text: '/can_bus/odrive_foc_controller [20 kHz] - ACTIVE' }
      );
    } else if (cleanCmd === 'hal status') {
      newLogs.push(
        { id: (Date.now() + 1).toString(), type: 'output', text: '--- C++17 HAL SYSTEM DIAGNOSTICS ---' },
        { id: (Date.now() + 2).toString(), type: 'success', text: '[CPU] ESP32-S3 Dual-Core FreeRTOS @ 240MHz' },
        { id: (Date.now() + 3).toString(), type: 'success', text: '[IPC] Heterogeneous Socket Bridge @ 1.0 Gbps' },
        { id: (Date.now() + 4).toString(), type: 'success', text: '[HAL LATENCY] Real-time task jitter < 2.5 ms' }
      );
    } else if (cleanCmd === 'dock --run') {
      newLogs.push(
        { id: (Date.now() + 1).toString(), type: 'warn', text: '[INIT] Starting Rear Autonomous Vision Docking Sequence...' },
        { id: (Date.now() + 2).toString(), type: 'output', text: '[V4L2] Camera Stream Opened 1080p @ 60 FPS' },
        { id: (Date.now() + 3).toString(), type: 'output', text: '[NAV2] Visual Feature Lock Acquired. Distance: 1.42m' },
        { id: (Date.now() + 4).toString(), type: 'success', text: '[DOCK SUCCESS] Target docked safely. Offset: ±3.8mm (Trial 78/100 PASSED)' }
      );
    } else if (cleanCmd === 'metrics') {
      newLogs.push(
        { id: (Date.now() + 1).toString(), type: 'output', text: '--- PRODUCTION METRICS ---' },
        { id: (Date.now() + 2).toString(), type: 'success', text: '• Docking Reliability: 78% Success Rate in Field Conditions' },
        { id: (Date.now() + 3).toString(), type: 'success', text: '• Hardware Channels: 13 Sensors & 8 Actuators Integrated' },
        { id: (Date.now() + 4).toString(), type: 'success', text: '• Priority Task Queue: 1,000 req/sec Zero Deadlocks' }
      );
    } else if (cleanCmd === 'skills') {
      newLogs.push(
        { id: (Date.now() + 1).toString(), type: 'output', text: 'CORE STACK: C++17, ROS2, ESP32-S3, FreeRTOS, Linux Kernel/HAL, OpenCV, Python, MoveIt, Gazebo, BehaviorTree.CPP' }
      );
    } else if (cleanCmd === 'clear') {
      setLogs([]);
      setInput('');
      return;
    } else {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'error',
        text: `Command not recognized: "${cmdStr}". Type "help" for command list.`,
      });
    }

    setLogs(newLogs);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl overflow-hidden shadow-[0_0_35px_var(--header-glow)] font-tech">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--inner-box-bg)] border-b border-[var(--inner-box-border)]">
        <div className="flex items-center gap-2 text-xs text-[var(--tech-cyan)]">
          <TerminalIcon className="w-4 h-4 text-[var(--tech-cyan)]" />
          <span className="font-bold tracking-wider">ROS2 / HAL INTERACTIVE CYBER CLI</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundFx.playClick();
              setLogs([]);
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-[#FF007F] transition-colors cursor-pointer"
            title="Clear Terminal"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="text-[10px] text-emerald-400">ONLINE</span>
          </div>
        </div>
      </div>

      {/* Terminal log output */}
      <div className="p-4 h-60 overflow-y-auto font-tech text-xs flex flex-col gap-1.5 scrollbar-thin">
        {logs.map((log) => (
          <div
            key={log.id}
            className={`leading-relaxed ${
              log.type === 'cmd'
                ? 'text-[#00F0FF] font-bold'
                : log.type === 'success'
                ? 'text-[#00FF9D]'
                : log.type === 'warn'
                ? 'text-[#FFD700]'
                : log.type === 'error'
                ? 'text-[#FF007F]'
                : 'text-zinc-300'
            }`}
          >
            {log.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Interactive Command Pills */}
      <div className="px-4 py-2 bg-black/50 border-t border-[#00F0FF]/15 flex flex-wrap gap-2 text-[11px]">
        <span className="text-zinc-500 self-center">QUICK RUN:</span>
        {['ros2 node list', 'hal status', 'dock --run', 'metrics', 'skills'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            onMouseEnter={() => soundFx.playHover()}
            className="px-2 py-0.5 rounded bg-[#00F0FF]/10 hover:bg-[#00F0FF]/25 border border-[#00F0FF]/30 text-[#00F0FF] hover:text-white transition-all cursor-pointer"
          >
            $ {cmd}
          </button>
        ))}
      </div>

      {/* CLI Input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 bg-black/80 border-t border-[#00F0FF]/20">
        <span className="text-[#00F0FF] text-xs font-bold">karthik@robotics:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command ('help', 'dock --run')..."
          className="flex-1 bg-transparent text-xs text-white focus:outline-none font-tech placeholder:text-zinc-600"
        />
        <button
          type="submit"
          onMouseEnter={() => soundFx.playHover()}
          className="px-3 py-1 rounded bg-[#00F0FF] hover:bg-[#00c8d4] text-black font-bold text-xs flex items-center gap-1 transition-all cursor-pointer"
        >
          <Play className="w-3 h-3 fill-current" /> RUN
        </button>
      </form>
    </div>
  );
};
