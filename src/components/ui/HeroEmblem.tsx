"use client";

import React from "react";

export default function HeroEmblem({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-brand-orange/30 rounded-full blur-xl animate-pulse" />

      {/* Emblem SVG: Globe with 3 sweeping fiber optic light streams (inspired by signin screenshot) */}
      <svg
        viewBox="0 0 160 140"
        className="w-20 h-20 sm:w-24 sm:h-24 relative z-10 drop-shadow-[0_0_20px_rgba(240,90,34,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FFA26B" />
            <stop offset="100%" stopColor="#F05A22" />
          </linearGradient>
          <filter id="emblemGlow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central Wireframe Globe */}
        <circle
          cx="80"
          cy="56"
          r="34"
          stroke="url(#emblemGrad)"
          strokeWidth="2.5"
          className="opacity-90"
        />
        {/* Globe Latitude Arcs */}
        <ellipse
          cx="80"
          cy="56"
          rx="34"
          ry="14"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeOpacity="0.8"
        />
        {/* Globe Longitude Line */}
        <ellipse
          cx="80"
          cy="56"
          rx="15"
          ry="34"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeOpacity="0.8"
        />
        <line
          x1="80"
          y1="22"
          x2="80"
          y2="90"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeOpacity="0.8"
        />

        {/* 3 Sweeping Optical Fiber Stream Tails Wrapping Underneath */}
        {/* Stream 1 (Upper) */}
        <path
          d="M 52,68 C 65,85 96,96 128,82"
          stroke="url(#emblemGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          filter="url(#emblemGlow)"
        />
        <circle cx="130" cy="81" r="2.5" fill="#FFFFFF" />

        {/* Stream 2 (Middle) */}
        <path
          d="M 44,80 C 62,106 102,118 140,98"
          stroke="url(#emblemGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#emblemGlow)"
        />
        <circle cx="142" cy="97" r="3" fill="#FFFFFF" />

        {/* Stream 3 (Lower) */}
        <path
          d="M 40,94 C 62,126 112,138 148,114"
          stroke="url(#emblemGrad)"
          strokeWidth="3.8"
          strokeLinecap="round"
          filter="url(#emblemGlow)"
        />
        <circle cx="150" cy="113" r="3.2" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
