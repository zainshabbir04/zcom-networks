"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Award, Building2, Zap, Sparkles, Check, ArrowRight, Radio } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface ClientOrg {
  name: string;
  logo: string;
  category: "Healthcare" | "Hospitality" | "Education" | "Enterprise" | "Tech";
  service: string;
  badgeColor: string;
  gradient: string;
}

const ALL_CLIENTS: ClientOrg[] = [
  {
    name: "Ghurki Trust Hospital",
    logo: "https://zcomnetworks.com.pk/assets/logos/ghurki-trust-hospital.png",
    category: "Healthcare",
    service: "1 Gbps Mission-Critical DIA",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "Ramada Hotel & Suites",
    logo: "https://zcomnetworks.com.pk/assets/logos/ramada.png",
    category: "Hospitality",
    service: "High-Density Managed WiFi & Fiber",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Hotel One",
    logo: "https://zcomnetworks.com.pk/assets/logos/hotel-one.png",
    category: "Hospitality",
    service: "Multi-branch Leased Connectivity",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
  },
  {
    name: "Zameen.com",
    logo: "https://zcomnetworks.com.pk/assets/logos/zameen-com.png",
    category: "Tech",
    service: "High-Throughput Dedicated Fiber",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "The Trust School",
    logo: "https://zcomnetworks.com.pk/assets/logos/the-trust-school.png",
    category: "Education",
    service: "Campus-Wide Optical Backbone",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Cheezious",
    logo: "https://zcomnetworks.com.pk/assets/logos/cheezious.png",
    category: "Enterprise",
    service: "Low-Latency Point-to-Point VPN",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
  },
  {
    name: "Lahore Leads University",
    logo: "https://zcomnetworks.com.pk/assets/logos/lahore-leads-university.png",
    category: "Education",
    service: "Gigabit Academic Bandwidth Ring",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Parkview City",
    logo: "https://zcomnetworks.com.pk/assets/logos/parkview-city.png",
    category: "Enterprise",
    service: "GPON Infrastructure & Backhaul",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "Askari Guards",
    logo: "https://zcomnetworks.com.pk/assets/logos/askari-guards.png",
    category: "Enterprise",
    service: "Ultra-Reliable Surveillance Uplink",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "WebSols Pakistan",
    logo: "https://zcomnetworks.com.pk/assets/logos/websols-pakistan.png",
    category: "Tech",
    service: "Software House Symmetrical Fiber",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "Medix Medical Billing",
    logo: "https://zcomnetworks.com.pk/assets/logos/medix-medical-billing.png",
    category: "Healthcare",
    service: "US VoIP Low-Jitter Leased Line",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Swiss Pro",
    logo: "https://zcomnetworks.com.pk/assets/logos/swiss-pro.png",
    category: "Enterprise",
    service: "Corporate Optical Fiber Pipe",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
  },
  {
    name: "Meraki Matrix",
    logo: "https://zcomnetworks.com.pk/assets/logos/meraki-matrix.png",
    category: "Tech",
    service: "Cloud Production Dark Fiber",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Munir Industry",
    logo: "https://zcomnetworks.com.pk/assets/logos/munir-industry.png",
    category: "Enterprise",
    service: "Industrial Plant Metro Ethernet",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "Hayyat Luxury Apartments",
    logo: "https://zcomnetworks.com.pk/assets/logos/hayyat-luxury-apartments.png",
    category: "Hospitality",
    service: "FTTH Residential Pure Fiber",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Tariq Electric",
    logo: "https://zcomnetworks.com.pk/assets/logos/tariq-electric.png",
    category: "Enterprise",
    service: "High-Bandwidth ERP Connection",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
  },
  {
    name: "4S Security",
    logo: "https://zcomnetworks.com.pk/assets/logos/4s.png",
    category: "Enterprise",
    service: "Dedicated CCTV Optical Feed",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Madina Collar",
    logo: "https://zcomnetworks.com.pk/assets/logos/madina-collar.png",
    category: "Enterprise",
    service: "Industrial Fiber Connectivity",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "OriginNet",
    logo: "https://zcomnetworks.com.pk/assets/logos/originnet.png",
    category: "Tech",
    service: "Carrier Interconnect & Peering",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "FMP",
    logo: "https://zcomnetworks.com.pk/assets/logos/fmp.png",
    category: "Enterprise",
    service: "Corporate Redundant Leased Link",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "Naimat Khana",
    logo: "https://zcomnetworks.com.pk/assets/logos/naimat-khana.png",
    category: "Hospitality",
    service: "Fast Commercial Retail Broadband",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "MC Group",
    logo: "https://zcomnetworks.com.pk/assets/logos/mc.png",
    category: "Enterprise",
    service: "Multi-Site Metro Ring",
    badgeColor: "bg-orange-50 text-brand-orange border-orange-200",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
  },
];

// Inner Orbit Ring (8 Clients)
const INNER_ORBIT_CLIENTS = ALL_CLIENTS.slice(0, 8);

// Outer Orbit Ring (14 Clients)
const OUTER_ORBIT_CLIENTS = ALL_CLIENTS.slice(8);

function ClientLogoBadge({ client }: { client: ClientOrg }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const initials = client.name
      .split(" ")
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 3)
      .join("");

    return (
      <div className="w-full h-full rounded-full bg-orange-50 flex flex-col items-center justify-center p-1 text-center">
        <span className="text-[11px] sm:text-xs font-black text-brand-orange leading-none">
          {initials}
        </span>
        <span className="text-[9px] font-bold text-slate-600 truncate max-w-full leading-tight mt-0.5">
          {client.name.split(" ")[0]}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full p-2 flex items-center justify-center">
      <Image
        src={client.logo}
        alt={client.name}
        fill
        className="object-contain p-2 filter contrast-110"
        unoptimized
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default function ClientsAnimatedMarquee() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isPaused, setIsPaused] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ClientOrg>(ALL_CLIENTS[0]);

  const categories = ["All", "Healthcare", "Hospitality", "Education", "Tech", "Enterprise"];

  return (
    <div className="w-full space-y-8 select-none">
      
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/25 scale-105"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-orange-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ============================================================
          CIRCULAR ORBIT SYSTEM (CENTER LOGO + CIRCULAR CLIENT LOOPS)
          ============================================================ */}
      <div
        className="relative w-full max-w-4xl mx-auto h-[520px] sm:h-[640px] md:h-[700px] flex items-center justify-center overflow-visible my-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Responsive scaling wrapper to guarantee 100% mobile fit */}
        <div className="relative w-[500px] h-[500px] sm:w-[620px] sm:h-[620px] md:w-[680px] md:h-[680px] flex items-center justify-center scale-[0.62] xs:scale-[0.75] sm:scale-[0.9] md:scale-100 transition-transform">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* 1. Orbit Visual Track Rings (Dashed Circles) */}
          {/* Outer Track Ring */}
          <div className="absolute w-[460px] h-[460px] sm:w-[560px] sm:h-[560px] rounded-full border border-dashed border-slate-300/80 pointer-events-none" />
          
          {/* Inner Track Ring */}
          <div className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-orange-200/90 pointer-events-none" />

          {/* Core Pulse Ring */}
          <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border border-orange-300/40 animate-ping pointer-events-none" style={{ animationDuration: "3.5s" }} />

          {/* ============================================================
              CENTER LOGO HUB (Z COM NETWORKS CORE)
              ============================================================ */}
          <div className="relative z-30 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white border-2 border-brand-orange shadow-2xl p-4 flex flex-col items-center justify-center transition-transform hover:scale-105 group cursor-pointer">
            {/* Ambient orange core aura */}
            <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-xl -z-10 group-hover:bg-orange-500/20 transition-all" />

            <div className="relative w-24 h-12 sm:w-28 sm:h-14">
              <Image
                src="https://zcomnetworks.com.pk/assets/zcom-logo.png?v=2"
                alt="Z COM Networks Core"
                fill
                className="object-contain"
                unoptimized
                priority
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>Core Ring</span>
            </div>
          </div>

          {/* ============================================================
              2. INNER ORBIT RING (Clockwise Loop - 8 Clients)
              ============================================================ */}
          <div
            className={`absolute inset-0 flex items-center justify-center animate-orbit-spin ${
              isPaused ? "pause-orbit" : ""
            }`}
          >
            {INNER_ORBIT_CLIENTS.map((client, idx) => {
              const total = INNER_ORBIT_CLIENTS.length;
              const angle = (360 / total) * idx;
              const radius = 175; // px distance from center for inner ring

              const isMatch = activeCategory === "All" || client.category === activeCategory;
              const isSelected = selectedClient.name === client.name;

              return (
                <div
                  key={client.name}
                  className="absolute pointer-events-auto"
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  }}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setSelectedClient(client);
                  }}
                  onClick={() => setSelectedClient(client)}
                >
                  <div
                    className={`animate-orbit-counter ${isPaused ? "pause-orbit" : ""}`}
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-brand-orange ring-4 ring-orange-200 scale-125 z-40 shadow-xl"
                          : isMatch
                          ? "border-slate-200 hover:border-brand-orange hover:scale-120 hover:shadow-lg opacity-100"
                          : "border-slate-200 opacity-25 hover:opacity-100"
                      }`}
                      title={`${client.name} (${client.category})`}
                    >
                      <ClientLogoBadge client={client} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ============================================================
              3. OUTER ORBIT RING (Counter-Clockwise Loop - 14 Clients)
              ============================================================ */}
          <div
            className={`absolute inset-0 flex items-center justify-center animate-orbit-spin-reverse ${
              isPaused ? "pause-orbit" : ""
            }`}
          >
            {OUTER_ORBIT_CLIENTS.map((client, idx) => {
              const total = OUTER_ORBIT_CLIENTS.length;
              const angle = (360 / total) * idx;
              const radius = 280; // px distance from center for outer ring

              const isMatch = activeCategory === "All" || client.category === activeCategory;
              const isSelected = selectedClient.name === client.name;

              return (
                <div
                  key={client.name}
                  className="absolute pointer-events-auto"
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  }}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setSelectedClient(client);
                  }}
                  onClick={() => setSelectedClient(client)}
                >
                  <div
                    className={`animate-orbit-counter-reverse ${isPaused ? "pause-orbit" : ""}`}
                  >
                    <div
                      className={`w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white border shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-brand-orange ring-4 ring-orange-200 scale-125 z-40 shadow-xl"
                          : isMatch
                          ? "border-slate-200 hover:border-brand-orange hover:scale-120 hover:shadow-lg opacity-100"
                          : "border-slate-200 opacity-25 hover:opacity-100"
                      }`}
                      title={`${client.name} (${client.category})`}
                    >
                      <ClientLogoBadge client={client} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ============================================================
          INTERACTIVE SPOTLIGHT DETAIL CARD (Updates on Hover / Tap)
          ============================================================ */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300">
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Logo box */}
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0 shadow-inner">
              <ClientLogoBadge client={selectedClient} />
            </div>

            {/* Client info */}
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">
                  {selectedClient.name}
                </h4>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-orange-50 text-brand-orange border border-orange-200 uppercase">
                  {selectedClient.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                <span className="text-brand-orange font-bold mr-1">Deployed:</span>
                {selectedClient.service}
              </p>
            </div>
          </div>

          {/* Operational badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 shrink-0">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span>Active on 100G Lahore Ring</span>
          </div>
        </div>
      </div>

    </div>
  );
}
