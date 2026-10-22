"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ============================================================================
// 1. Planetary Fiber Dot Matrix (1,000 Points with Shimmer)
// ============================================================================
function FiberDotMatrix({ isDark }: { isDark: boolean }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 900;
  const radius = 2.45;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Golden Spiral Spherical Distribution
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      pos[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      sz[i] = 0.035 + (i % 5 === 0 ? 0.025 : 0);
    }
    return [pos, sz];
  }, [count, radius]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    // Subtle twinkling effect
    const mat = pointsRef.current.material as THREE.PointsMaterial;
    mat.opacity = (isDark ? 0.75 : 0.55) + Math.sin(time * 2) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={isDark ? "#E2E8F0" : "#64748B"}
        transparent
        opacity={isDark ? 0.75 : 0.55}
        sizeAttenuation
      />
    </points>
  );
}

// ============================================================================
// 2. Inter-City Optical Fiber Arcs & Traveling Photons
// ============================================================================
function FiberArcs({ isDark }: { isDark: boolean }) {
  const lineGroup = useMemo(() => {
    const group = new THREE.Group();
    const radius = 2.45;

    // Major Global & Regional Hubs
    const hubs = [
      new THREE.Vector3(1.2, 0.9, 1.8).normalize().multiplyScalar(radius), // Lahore
      new THREE.Vector3(1.5, 0.7, 1.9).normalize().multiplyScalar(radius), // Dubai / Gulf
      new THREE.Vector3(0.3, 1.9, 1.5).normalize().multiplyScalar(radius), // Frankfurt / London
      new THREE.Vector3(2.1, 0.1, 1.3).normalize().multiplyScalar(radius), // Singapore
      new THREE.Vector3(-1.8, 1.4, 1.1).normalize().multiplyScalar(radius), // US East
      new THREE.Vector3(1.7, 1.2, 1.3).normalize().multiplyScalar(radius), // Tokyo
      new THREE.Vector3(0.8, -1.2, 1.9).normalize().multiplyScalar(radius), // Indian Ocean Cable
      new THREE.Vector3(-0.9, 1.8, 1.2).normalize().multiplyScalar(radius), // Amsterdam IX
    ];

    for (let i = 0; i < hubs.length; i++) {
      for (let j = i + 1; j < hubs.length; j++) {
        const p1 = hubs[i];
        const p2 = hubs[j];
        const dist = p1.distanceTo(p2);
        if (dist > 3.8) continue; // Only connect reasonably proximate nodes

        const mid = p1.clone().add(p2).multiplyScalar(0.5);
        mid.setLength(radius + dist * 0.3);

        const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
        const pts = curve.getPoints(40);
        const geom = new THREE.BufferGeometry().setFromPoints(pts);

        const isOrange = (i + j) % 2 === 0;
        const mat = new THREE.LineBasicMaterial({
          color: isOrange ? (isDark ? 0xF05A22 : 0xEA580C) : (isDark ? 0xE2E8F0 : 0x64748B),
          transparent: true,
          opacity: isDark ? 0.45 : 0.35,
          linewidth: 1,
        });

        const line = new THREE.Line(geom, mat);
        group.add(line);
      }
    }
    return group;
  }, [isDark]);

  return <primitive object={lineGroup} />;
}

// ============================================================================
// 3. Orbital Golden & Cyan Optical Ribbon Rings
// ============================================================================
function OrbitalRings({ isDark }: { isDark: boolean }) {
  const ringsGroup = useRef<THREE.Group>(null!);

  const rings = useMemo(() => {
    const list: THREE.Line[] = [];
    const count = 3;
    const baseRadius = 2.85;

    for (let i = 0; i < count; i++) {
      const tilt = Math.PI / 4 + i * 0.22;
      const pts: THREE.Vector3[] = [];
      const segments = 100;
      const rad = baseRadius + i * 0.35;

      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        const x = rad * Math.cos(theta);
        const y = rad * Math.sin(theta) * Math.sin(tilt);
        const z = rad * Math.sin(theta) * Math.cos(tilt);
        pts.push(new THREE.Vector3(x, y, z));
      }

      const geom = new THREE.BufferGeometry().setFromPoints(pts);
      const isOrange = i % 2 === 0;
      const mat = new THREE.LineBasicMaterial({
        color: isOrange ? (isDark ? 0xF05A22 : 0xEA580C) : (isDark ? 0xCBD5E1 : 0x64748B),
        transparent: true,
        opacity: isDark ? 0.4 : 0.25,
      });

      list.push(new THREE.Line(geom, mat));
    }
    return list;
  }, [isDark]);

  useFrame((_, delta) => {
    if (ringsGroup.current) {
      ringsGroup.current.rotation.y += delta * 0.05;
      ringsGroup.current.rotation.x = Math.sin(ringsGroup.current.rotation.y * 0.4) * 0.08;
    }
  });

  return (
    <group ref={ringsGroup}>
      {rings.map((ring, idx) => (
        <primitive key={idx} object={ring} />
      ))}
    </group>
  );
}

// ============================================================================
// 4. Ambient 3D Starfield / Floating Optical Photons
// ============================================================================
function StarfieldPhotons({ isDark }: { isDark: boolean }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 450;

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return [pos];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={isDark ? "#FFFFFF" : "#64748B"}
        transparent
        opacity={isDark ? 0.35 : 0.22}
        sizeAttenuation
      />
    </points>
  );
}

// ============================================================================
// 5. Main Rotating 3D Scene with Scroll-Reactive Interpolation
// ============================================================================
function RotatingScene({
  isDark,
  scrollProgress,
}: {
  isDark: boolean;
  scrollProgress: number;
}) {
  const mainGroupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (!mainGroupRef.current) return;

    // Steady time rotation + scroll driven rotation
    const autoY = state.clock.getElapsedTime() * 0.06;
    const targetY = autoY + scrollProgress * Math.PI * 1.8;
    const targetX = 0.15 + Math.sin(scrollProgress * Math.PI) * 0.35;
    const targetZ = Math.sin(scrollProgress * Math.PI * 2) * 0.1;

    // Smooth lerp
    mainGroupRef.current.rotation.y += (targetY - mainGroupRef.current.rotation.y) * 0.08;
    mainGroupRef.current.rotation.x += (targetX - mainGroupRef.current.rotation.x) * 0.08;
    mainGroupRef.current.rotation.z += (targetZ - mainGroupRef.current.rotation.z) * 0.08;

    // Slight position shift for dynamic 3D depth as user travels down the page
    const targetPosY = (scrollProgress - 0.5) * -0.6;
    mainGroupRef.current.position.y += (targetPosY - mainGroupRef.current.position.y) * 0.05;
  });

  return (
    <group ref={mainGroupRef} position={[0, 0, 0]}>
      {/* Soft translucent inner core */}
      <mesh>
        <sphereGeometry args={[2.42, 36, 36]} />
        <meshBasicMaterial
          color={isDark ? "#080A0F" : "#F8FAFC"}
          transparent
          opacity={isDark ? 0.75 : 0.45}
        />
      </mesh>

      {/* Atmospheric metallic wireframe shell */}
      <mesh>
        <sphereGeometry args={[2.46, 28, 28]} />
        <meshBasicMaterial
          color={isDark ? "#334155" : "#CBD5E1"}
          wireframe
          transparent
          opacity={isDark ? 0.18 : 0.25}
        />
      </mesh>

      <FiberDotMatrix isDark={isDark} />
      <FiberArcs isDark={isDark} />
      <OrbitalRings isDark={isDark} />
      <StarfieldPhotons isDark={isDark} />
    </group>
  );
}

// ============================================================================
// 6. Sticky 3D Background Component
// ============================================================================
export default function StickyBackground3D() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Track scroll progress from top of document down to footer
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
      {/* Ambient optical gradient glow orbs behind 3D canvas (Orange & Silver Gray) */}
      <div className="absolute top-1/4 -left-40 w-[32rem] h-[32rem] rounded-full bg-brand-orange/12 dark:bg-brand-orange/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 -right-40 w-[34rem] h-[34rem] rounded-full bg-slate-300/15 dark:bg-slate-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[28rem] h-[28rem] rounded-full bg-orange-400/8 dark:bg-brand-orange/10 blur-[110px] pointer-events-none" />

      {/* Subtle background cyber grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? "#ffffff" : "#0f172a"} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? "#ffffff" : "#0f172a"} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* 3D WebGL Canvas */}
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 5.8], fov: 48 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={isDark ? 0.75 : 0.95} />
          <pointLight
            position={[10, 10, 10]}
            intensity={isDark ? 0.9 : 1.1}
            color="#FF7A1A"
          />
          <pointLight
            position={[-10, -10, -10]}
            intensity={isDark ? 0.45 : 0.65}
            color="#E2E8F0"
          />
          <RotatingScene isDark={isDark} scrollProgress={scrollProgress} />
        </Canvas>
      )}

      {/* Top and Bottom soft fade masks */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-slate-50 dark:from-[#0B0E14] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-100 dark:from-[#0B0E14] to-transparent pointer-events-none" />
    </div>
  );
}
