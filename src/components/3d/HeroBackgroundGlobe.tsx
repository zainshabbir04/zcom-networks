"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Golden / Amber Orbital Spiral Ribbon Arcs (matching signin.com.pk hero screenshot)
function GoldenOrbitalRings() {
  const ringsGroup = useMemo(() => {
    const group = new THREE.Group();

    // Create a series of sweeping golden spiral arcs circling around the globe
    const ringsCount = 18;
    for (let i = 0; i < ringsCount; i++) {
      const angleOffset = (i / ringsCount) * Math.PI * 2;
      const tiltAngle = (Math.PI / 4) + (i * 0.05);
      const points: THREE.Vector3[] = [];

      const segments = 64;
      const baseRadius = 2.8 + (i * 0.08);

      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 1.5 + angleOffset;
        const radius = baseRadius + Math.sin(j * 0.2) * 0.2;
        
        // Elliptical inclined orbital path
        const x = radius * Math.cos(theta);
        const y = radius * Math.sin(theta) * Math.sin(tiltAngle) + (Math.sin(theta * 2) * 0.3);
        const z = radius * Math.sin(theta) * Math.cos(tiltAngle);

        points.push(new THREE.Vector3(x, y, z));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const curvePts = curve.getPoints(80);
      const geom = new THREE.BufferGeometry().setFromPoints(curvePts);

      // Golden amber gradient hues
      const colors = [0xF05A22, 0xFFA238, 0xFFC247, 0xFF7A20, 0xFFD466];
      const mat = new THREE.LineBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.25 + (i % 3) * 0.15,
        linewidth: 1,
      });

      const line = new THREE.Line(geom, mat);
      group.add(line);
    }

    return group;
  }, []);

  useFrame((_, delta) => {
    if (ringsGroup) {
      ringsGroup.rotation.y += delta * 0.08;
      ringsGroup.rotation.z = Math.sin(ringsGroup.rotation.y * 0.5) * 0.06;
    }
  });

  return <primitive object={ringsGroup} />;
}

// Glowing Inter-City Fiber Connections on Globe Surface
function GlobeNetworkArcs() {
  const lineGroup = useMemo(() => {
    const group = new THREE.Group();

    // Key points on globe surface
    const points = [
      new THREE.Vector3(1.2, 0.9, 1.8).normalize().multiplyScalar(2.5), // Lahore
      new THREE.Vector3(1.5, 0.7, 1.9).normalize().multiplyScalar(2.5), // Middle East
      new THREE.Vector3(0.3, 1.9, 1.5).normalize().multiplyScalar(2.5), // Europe
      new THREE.Vector3(2.1, 0.1, 1.3).normalize().multiplyScalar(2.5), // Singapore
      new THREE.Vector3(-1.8, 1.4, 1.1).normalize().multiplyScalar(2.5), // Americas
      new THREE.Vector3(1.7, 1.2, 1.3).normalize().multiplyScalar(2.5), // East Asia
      new THREE.Vector3(0.8, -1.2, 1.9).normalize().multiplyScalar(2.5), // Indian Ocean
    ];

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const p1 = points[i];
        const p2 = points[j];
        const mid = p1.clone().add(p2).multiplyScalar(0.5);
        const dist = p1.distanceTo(p2);
        mid.setLength(2.5 + dist * 0.35);

        const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
        const pts = curve.getPoints(36);
        const geom = new THREE.BufferGeometry().setFromPoints(pts);
        const mat = new THREE.LineBasicMaterial({
          color: (i + j) % 2 === 0 ? 0xF05A22 : 0x38BDF8,
          transparent: true,
          opacity: 0.35,
        });
        const line = new THREE.Line(geom, mat);
        group.add(line);
      }
    }
    return group;
  }, []);

  return <primitive object={lineGroup} />;
}

// Traveling Photon Data Packets
function TravelingPhotons() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 45;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const packetData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      theta: Math.random() * Math.PI * 2,
      phi: Math.acos(2 * Math.random() - 1),
      radius: 2.6 + Math.random() * 0.6,
      speed: 0.003 + Math.random() * 0.006,
      t: Math.random(),
    }));
  }, [count]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    packetData.forEach((p, i) => {
      p.t = (p.t + delta * 0.3) % 1;
      p.theta += delta * 0.15;

      const x = p.radius * Math.sin(p.phi) * Math.cos(p.theta);
      const y = p.radius * Math.sin(p.phi) * Math.sin(p.theta);
      const z = p.radius * Math.cos(p.phi);

      dummy.position.set(x, y, z);
      const scale = (Math.sin(p.t * Math.PI) * 0.08) + 0.02;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#FFD466" />
    </instancedMesh>
  );
}

// Main Earth / Planetary Globe with Continent Points & Optical Nodes
function PlanetCore() {
  const groupRef = useRef<THREE.Group>(null!);
  const nodesCount = 650;

  const nodePositions = useMemo(() => {
    const positions = new Float32Array(nodesCount * 3);
    const radius = 2.5;

    for (let i = 0; i < nodesCount; i++) {
      // Golden spiral distribution for continental point array
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
      groupRef.current.rotation.y += delta * 0.09;
      groupRef.current.rotation.x = Math.sin(groupRef.current.rotation.y * 0.4) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dark Spherical Earth Body */}
      <mesh>
        <sphereGeometry args={[2.46, 48, 48]} />
        <meshStandardMaterial
          color="#060913"
          roughness={0.6}
          metalness={0.5}
        />
      </mesh>

      {/* Subtle Atmospheric Glowing Shell */}
      <mesh>
        <sphereGeometry args={[2.49, 32, 32]} />
        <meshBasicMaterial
          color="#1E3A8A"
          transparent
          opacity={0.18}
          wireframe
        />
      </mesh>

      {/* Luminous Optical Fiber Dot Matrix */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#38BDF8"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Surface Arcs & Photons */}
      <GlobeNetworkArcs />
      <TravelingPhotons />
    </group>
  );
}

// Ambient Atmospheric Particle Mist
function AtmosphereMist() {
  const particlesRef = useRef<THREE.Points>(null!);
  const count = 350;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= delta * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#F05A22"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

// Complete 3D Scene
function CinematicGlobeScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 8, 8]} intensity={1.5} color="#FFF5EB" />
      <pointLight position={[-8, -5, -4]} intensity={1.2} color="#F05A22" />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#38BDF8" />

      <PlanetCore />
      <GoldenOrbitalRings />
      <AtmosphereMist />
    </>
  );
}

export default function HeroBackgroundGlobe() {
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
    return <div className="absolute inset-0 bg-[#080B14]" />;
  }

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 bg-[#080B14] overflow-hidden flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent blur-2xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 46 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <CinematicGlobeScene />
      </Canvas>
      {/* Top and Bottom soft fade masks for seamless blending with navbar & next sections */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-50 dark:from-[#060810] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-100 dark:from-[#060810] to-transparent pointer-events-none" />
    </div>
  );
}
