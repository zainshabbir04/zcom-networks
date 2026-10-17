"use client";

import React, { useEffect, useRef, useState } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colorType: "orange" | "cyan" | "amber" | "slate";
  pulsePhase: number;
}

interface FiberRibbon {
  baseYFactor: number;
  amplitude: number;
  wavelength: number;
  speed: number;
  phase: number;
  color: string;
  width: number;
  packets: {
    x: number;
    speed: number;
    size: number;
    length: number;
  }[];
}

export default function HeroFiberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    // Check initial dark mode state
    const checkTheme = () => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDark(dark);
    };

    checkTheme();

    // Observe theme toggle class changes on <html>
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initElements();
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates for interactive repulsion
    let mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Dynamic Fiber Cables / Wave Ribbons
    let ribbons: FiberRibbon[] = [];
    // Network Nodes & Mesh
    let nodes: NodePoint[] = [];

    const initElements = () => {
      const darkTheme = document.documentElement.classList.contains("dark");

      // 4 Flowing Fiber Optic Stream Wave Ribbons
      ribbons = [
        {
          baseYFactor: 0.38,
          amplitude: 45,
          wavelength: 0.0022,
          speed: 0.016,
          phase: 0,
          color: darkTheme ? "rgba(240, 90, 34, 0.45)" : "rgba(240, 90, 34, 0.28)",
          width: 2.5,
          packets: [
            { x: 0.1, speed: 0.003, size: 3.5, length: 70 },
            { x: 0.6, speed: 0.0038, size: 4, length: 90 },
          ],
        },
        {
          baseYFactor: 0.52,
          amplitude: 55,
          wavelength: 0.0018,
          speed: -0.012,
          phase: Math.PI / 3,
          color: darkTheme ? "rgba(56, 189, 248, 0.40)" : "rgba(2, 132, 199, 0.24)",
          width: 2.0,
          packets: [
            { x: 0.25, speed: 0.0025, size: 3, length: 60 },
            { x: 0.75, speed: 0.0032, size: 3.5, length: 80 },
          ],
        },
        {
          baseYFactor: 0.64,
          amplitude: 40,
          wavelength: 0.0026,
          speed: 0.019,
          phase: Math.PI * 0.75,
          color: darkTheme ? "rgba(255, 162, 56, 0.38)" : "rgba(217, 119, 6, 0.22)",
          width: 2.0,
          packets: [
            { x: 0.4, speed: 0.004, size: 3, length: 50 },
            { x: 0.9, speed: 0.0035, size: 3.5, length: 65 },
          ],
        },
        {
          baseYFactor: 0.78,
          amplitude: 35,
          wavelength: 0.002,
          speed: -0.015,
          phase: Math.PI * 1.2,
          color: darkTheme ? "rgba(129, 140, 248, 0.35)" : "rgba(99, 102, 241, 0.20)",
          width: 1.8,
          packets: [
            { x: 0.15, speed: 0.0028, size: 3, length: 55 },
            { x: 0.55, speed: 0.0036, size: 3.5, length: 75 },
          ],
        },
      ];

      // Generate 55 Nodes (Metro Nodes & Exchange Points)
      const count = width < 768 ? 32 : 55;
      nodes = [];
      const colorTypes: ("orange" | "cyan" | "amber" | "slate")[] = [
        "orange",
        "cyan",
        "amber",
        "slate",
      ];

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: 1.5 + Math.random() * 2.2,
          colorType: colorTypes[Math.floor(Math.random() * colorTypes.length)],
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initElements();

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const darkTheme = document.documentElement.classList.contains("dark");

      // 1. Draw Fiber Cable Waves (Sinusoidal Laser Data Streams)
      ribbons.forEach((ribbon) => {
        ribbon.phase += ribbon.speed;
        const baseY = height * ribbon.baseYFactor;

        // Draw Ribbon Path
        ctx.beginPath();
        for (let x = 0; x <= width; x += 6) {
          const y =
            baseY +
            Math.sin(x * ribbon.wavelength + ribbon.phase) * ribbon.amplitude +
            Math.cos(x * 0.0012 + ribbon.phase * 0.5) * 12;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = ribbon.color;
        ctx.lineWidth = ribbon.width;
        ctx.stroke();

        // Draw High-Speed Laser Data Packets (Photons) racing along ribbon
        ribbon.packets.forEach((pkt) => {
          pkt.x = (pkt.x + pkt.speed) % 1.15;
          const currentX = pkt.x * width;
          const currentY =
            baseY +
            Math.sin(currentX * ribbon.wavelength + ribbon.phase) * ribbon.amplitude +
            Math.cos(currentX * 0.0012 + ribbon.phase * 0.5) * 12;

          // Packet trailing beam
          const trailGradient = ctx.createLinearGradient(
            currentX - pkt.length,
            currentY,
            currentX,
            currentY
          );
          trailGradient.addColorStop(0, "transparent");
          trailGradient.addColorStop(
            1,
            darkTheme ? "rgba(255, 255, 255, 0.95)" : "rgba(240, 90, 34, 0.85)"
          );

          ctx.beginPath();
          ctx.moveTo(Math.max(0, currentX - pkt.length), currentY);
          ctx.lineTo(currentX, currentY);
          ctx.strokeStyle = trailGradient;
          ctx.lineWidth = ribbon.width + 1.2;
          ctx.stroke();

          // Packet Head Glow
          ctx.beginPath();
          ctx.arc(currentX, currentY, pkt.size, 0, Math.PI * 2);
          ctx.fillStyle = darkTheme ? "#FFFFFF" : "#F05A22";
          ctx.shadowColor = darkTheme ? "#F05A22" : "#FFA238";
          ctx.shadowBlur = darkTheme ? 10 : 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      });

      // 2. Draw Network Nodes & Mesh Interconnections
      const maxConnectDist = width < 768 ? 95 : 130;

      // Update Node positions & Gentle Mouse Repulsion
      nodes.forEach((node) => {
        node.pulsePhase += 0.03;
        node.x += node.vx;
        node.y += node.vy;

        // Bounce boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            node.x += (dx / dist) * force * 1.5;
            node.y += (dy / dist) * force * 1.5;
          }
        }
      });

      // Draw Proximity Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * (darkTheme ? 0.22 : 0.12);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle =
              n1.colorType === "orange" || n2.colorType === "orange"
                ? `rgba(240, 90, 34, ${alpha})`
                : darkTheme
                ? `rgba(56, 189, 248, ${alpha})`
                : `rgba(100, 116, 139, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 1;
        const radius = node.radius * (0.85 + pulse * 0.2);

        let fillCol = "";
        if (node.colorType === "orange") {
          fillCol = darkTheme ? "#F05A22" : "#EA580C";
        } else if (node.colorType === "cyan") {
          fillCol = darkTheme ? "#38BDF8" : "#0284C7";
        } else if (node.colorType === "amber") {
          fillCol = darkTheme ? "#FBBF24" : "#D97706";
        } else {
          fillCol = darkTheme ? "#94A3B8" : "#64748B";
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fillCol;
        ctx.globalAlpha = darkTheme ? 0.65 : 0.45;
        ctx.fill();

        // Pulsing Outer Beacon Aura for larger nodes
        if (node.radius > 2.5) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = fillCol;
          ctx.globalAlpha = (darkTheme ? 0.25 : 0.15) * (1 - (pulse - 1));
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
      {/* 1. Ambient Optical Glow Flares (Stripe / Linear Inspired Depth) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-orange/15 dark:bg-brand-orange/20 blur-[110px] pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[30rem] h-[30rem] rounded-full bg-sky-400/10 dark:bg-sky-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-[26rem] h-[26rem] rounded-full bg-amber-400/10 dark:bg-amber-500/15 blur-[100px] pointer-events-none" />

      {/* 2. Micro Cyber Perspective Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? "#ffffff" : "#0f172a"} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? "#ffffff" : "#0f172a"} 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at 50% 50%, transparent 20%, black 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, transparent 20%, black 85%)",
        }}
      />

      {/* 3. Dynamic Interactive Fiber Optic Waves & Photon Nodes Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 4. Top & Bottom Smooth Transition Masks */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-slate-50 dark:from-[#060810] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-slate-100 dark:from-[#060810] to-transparent pointer-events-none" />
    </div>
  );
}
