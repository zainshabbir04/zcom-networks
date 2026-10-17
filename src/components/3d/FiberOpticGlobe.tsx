"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Glowing Network Arcs between points on the globe
function NetworkArcs() {
  const lineGroup = useMemo(() => {
    const group = new THREE.Group();
    const points = [
      // Lahore coordinates (~31.5°N, 74.3°E)
      new THREE.Vector3(1.2, 0.9, 1.8).normalize().multiplyScalar(2.5),
      // Middle East / Dubai
      new THREE.Vector3(1.5, 0.7, 1.9).normalize().multiplyScalar(2.5),
      // Europe / London
      new THREE.Vector3(0.3, 1.9, 1.5).normalize().multiplyScalar(2.5),
      // East Asia / Singapore
      new THREE.Vector3(2.1, 0.1, 1.3).normalize().multiplyScalar(2.5),
      // North America
      new THREE.Vector3(-1.8, 1.4, 1.1).normalize().multiplyScalar(2.5),
      // Japan / Tokyo
      new THREE.Vector3(1.7, 1.2, 1.3).normalize().multiplyScalar(2.5),
    ];

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const p1 = points[i];
        const p2 = points[j];
        const mid = p1.clone().add(p2).multiplyScalar(0.5);
        const distance = p1.distanceTo(p2);
        mid.setLength(2.5 + distance * 0.35);

        const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
        const pts = curve.getPoints(36);
        const geom = new THREE.BufferGeometry().setFromPoints(pts);
        const mat = new THREE.LineBasicMaterial({
          color: (i + j) % 2 === 0 ? 0xEF5A20 : 0xFF8A4C,
          transparent: true,
          opacity: 0.38,
        });
        const line = new THREE.Line(geom, mat);
        group.add(line);
      }
    }
    return group;
  }, []);

  return <primitive object={lineGroup} />;
}


// Data Packets traveling along arcs
function DataPackets() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 30;

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Pre-generate particle speeds and offsets
  const packetData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      t: Math.random(),
      speed: 0.003 + Math.random() * 0.005,
      radius: 2.5 + Math.random() * 0.4,
      theta: Math.random() * Math.PI * 2,
      phi: Math.acos(2 * Math.random() - 1),
    }));
  }, [count]);

  useFrame(() => {
    if (!meshRef.current) return;
    packetData.forEach((p, i) => {
      p.t = (p.t + p.speed) % 1;
      p.theta += 0.004;

      const x = p.radius * Math.sin(p.phi) * Math.cos(p.theta);
      const y = p.radius * Math.sin(p.phi) * Math.sin(p.theta);
      const z = p.radius * Math.cos(p.phi);

      dummy.position.set(x, y, z);
      const scale = (Math.sin(p.t * Math.PI) * 0.07) + 0.03;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#FFB089" />
    </instancedMesh>
  );
}

// Glowing Core Globe with latitude/longitude nodes
function GlobeCore() {
  const groupRef = useRef<THREE.Group>(null!);
  const nodesCount = 480;

  const nodePositions = useMemo(() => {
    const positions = new Float32Array(nodesCount * 3);
    const radius = 2.5;
    for (let i = 0; i < nodesCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodesCount);
      const theta = Math.sqrt(nodesCount * Math.PI) * phi;

      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [nodesCount]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(groupRef.current.rotation.y * 0.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Translucent holographic inner sphere */}
      <mesh>
        <sphereGeometry args={[2.46, 32, 32]} />
        <meshStandardMaterial
          color="#F05A22"
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Wireframe lattice */}
      <mesh>
        <sphereGeometry args={[2.48, 24, 24]} />
        <meshBasicMaterial
          color="#F05A22"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Fiber optic nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#EF5A20"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      {/* Arcs and Packets inside rotated group */}
      <NetworkArcs />
      <DataPackets />
    </group>
  );
}

// Floating Ambient Network Particle Field
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null!);
  const count = 300;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= delta * 0.03;
      particlesRef.current.rotation.x -= delta * 0.015;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#FF8A4C"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

// Main Interactive R3F Fiber Scene with Mouse Parallax
function GlobeScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#FFF0E8" />
      <pointLight position={[-10, -5, -5]} intensity={0.5} color="#EF5A20" />
      <GlobeCore />
      <ParticleField />
    </>
  );
}

// Wrapper with WebGL detection and Graceful Fallback
export default function FiberOpticGlobe() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[420px] flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-brand-orange/20 animate-pulse bg-brand-orange/5" />
      </div>
    );
  }

  if (!hasWebGL) {
    // Beautiful lightweight CSS fallback for devices without WebGL
    return (
      <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
        <div className="w-72 h-72 rounded-full border-2 border-brand-orange/30 animate-pulse-glow flex items-center justify-center shadow-2xl shadow-brand-orange/20">
          <div className="w-56 h-56 rounded-full border border-brand-orange/20 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full bg-brand-orange/10 backdrop-blur-md flex items-center justify-center text-center p-4">
              <span className="text-xs font-bold text-brand-orange">
                Z COM HIGH-SPEED FIBER GRID
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[600px] select-none">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <GlobeScene />
      </Canvas>
      {/* Subtle radial glow underlay */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-brand-orange/15 via-transparent to-transparent -z-10" />
    </div>
  );
}
