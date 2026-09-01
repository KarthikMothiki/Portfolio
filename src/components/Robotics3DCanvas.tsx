import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Cpu, Eye, Radio, RefreshCw, Zap } from 'lucide-react';
import { soundFx } from '../lib/sound';

function RoboticArmModel({ wireframe }: { wireframe: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.8;
      ring1Ref.current.rotation.z += delta * 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.9;
      ring2Ref.current.rotation.x -= delta * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={groupRef} scale={1.2}>
        {/* Core Arm Base */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[1, 1.3, 0.4, 32]} />
          <meshStandardMaterial
            color="#0A192F"
            roughness={0.2}
            metalness={0.9}
            wireframe={wireframe}
            emissive="#00F0FF"
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Joint Shoulder Actuator */}
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial
            color="#0F2847"
            roughness={0.1}
            metalness={0.95}
            wireframe={wireframe}
          />
        </mesh>

        {/* Main Robotic Arm Segment */}
        <mesh position={[0, 0.4, 0]} rotation={[0, 0, Math.PI / 12]}>
          <boxGeometry args={[0.4, 1.6, 0.4]} />
          <meshStandardMaterial
            color="#00F0FF"
            roughness={0.3}
            metalness={0.8}
            wireframe={wireframe}
            emissive="#00F0FF"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Sensor Turret Head */}
        <mesh position={[0.2, 1.4, 0]}>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#FFB800"
            roughness={0.2}
            metalness={0.9}
            wireframe={wireframe}
            emissive="#FFD700"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Outer Laser Gyro Ring 1 */}
        <mesh ref={ring1Ref} position={[0, 0.4, 0]}>
          <torusGeometry args={[1.5, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#00F0FF"
            emissive="#00F0FF"
            emissiveIntensity={1}
            wireframe={wireframe}
          />
        </mesh>

        {/* Outer Laser Gyro Ring 2 */}
        <mesh ref={ring2Ref} position={[0, 0.4, 0]}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#FF007F"
            emissive="#FF007F"
            emissiveIntensity={0.8}
            wireframe={wireframe}
          />
        </mesh>
      </group>
    </Float>
  );
}

export const Robotics3DCanvas: React.FC = () => {
  const [wireframe, setWireframe] = useState(false);
  const [activeJoint, setActiveJoint] = useState('J1 (Base Yaw)');
  const [jointAngle, setJointAngle] = useState(42.5);

  const toggleWireframe = () => {
    soundFx.playClick();
    setWireframe(!wireframe);
  };

  const cycleJoint = () => {
    soundFx.playBeep(950, 0.04);
    const joints = ['J1 (Base Yaw)', 'J2 (Shoulder Pitch)', 'J3 (Elbow Pitch)', 'J4 (Wrist Roll)', 'J5 (Effector Pitch)'];
    const nextIdx = (joints.indexOf(activeJoint) + 1) % joints.length;
    setActiveJoint(joints[nextIdx]);
    setJointAngle(Number((Math.random() * 180 - 90).toFixed(1)));
  };

  return (
    <div className="relative w-full h-[440px] rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl overflow-hidden shadow-[0_0_30px_var(--header-glow)] flex flex-col justify-between p-4">
      {/* HUD Header Bar */}
      <div className="flex items-center justify-between z-10 bg-[var(--inner-box-bg)] p-3 rounded-xl border border-[var(--inner-box-border)] font-tech text-xs">
        <div className="flex items-center gap-2 text-[var(--tech-cyan)]">
          <Cpu className="w-4 h-4 text-[var(--tech-cyan)] animate-pulse" />
          <span className="font-bold tracking-widest">3D ROBOTIC KINEMATICS TELEMETRY</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleWireframe}
            onMouseEnter={() => soundFx.playHover()}
            className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] flex items-center gap-1.5 transition-all cursor-pointer ${
              wireframe
                ? 'bg-[#00F0FF]/20 border-[#00F0FF] text-[#00F0FF] shadow-[0_0_10px_#00F0FF]'
                : 'bg-zinc-900/80 border-zinc-700 text-zinc-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{wireframe ? 'WIREFRAME ON' : 'SOLID SHADED'}</span>
          </button>

          <button
            onClick={cycleJoint}
            onMouseEnter={() => soundFx.playHover()}
            className="px-2.5 py-1 rounded-lg border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFD700] hover:bg-[#FFB800]/20 font-mono text-[11px] flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>CYCLE JOINT</span>
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F0FF" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#FF007F" />
          <directionalLight position={[0, 5, 5]} intensity={1} color="#FFFFFF" />
          <RoboticArmModel wireframe={wireframe} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Live HUD Joint Telemetry Overlay */}
      <div className="z-10 flex flex-wrap items-center justify-between gap-3 bg-black/70 p-3 rounded-xl border border-[#00F0FF]/20 font-tech text-xs text-zinc-300">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-zinc-500 text-[10px] block">ACTIVE JOINT</span>
            <span className="text-[#00F0FF] font-bold">{activeJoint}</span>
          </div>
          <div>
            <span className="text-zinc-500 text-[10px] block">ANGLE POSITION</span>
            <span className="text-[#FFD700] font-bold">{jointAngle}°</span>
          </div>
          <div>
            <span className="text-zinc-500 text-[10px] block">ENCODER FEEDBACK</span>
            <span className="text-[#00FF9D] font-bold">QUAD CLOSED-LOOP</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
          <Radio className="w-3.5 h-3.5 text-[#00FF9D] animate-ping" />
          <span>FOC FREQ: 20 kHz</span>
          <span className="mx-1">|</span>
          <Zap className="w-3.5 h-3.5 text-[#FFB800]" />
          <span>MOTOR BUS: 24.2V</span>
        </div>
      </div>
    </div>
  );
};
