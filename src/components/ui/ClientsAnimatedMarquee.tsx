"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Award, Building2, Zap, Sparkles } from "lucide-react";
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
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "Ramada Hotel & Suites",
    logo: "https://zcomnetworks.com.pk/assets/logos/ramada.png",
    category: "Hospitality",
    service: "High-Density Managed WiFi & Fiber",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Hotel One",
    logo: "https://zcomnetworks.com.pk/assets/logos/hotel-one.png",
    category: "Hospitality",
    service: "Multi-branch Leased Connectivity",
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
  },
  {
    name: "Zameen.com",
    logo: "https://zcomnetworks.com.pk/assets/logos/zameen-com.png",
    category: "Tech",
    service: "High-Throughput Dedicated Fiber",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "The Trust School",
    logo: "https://zcomnetworks.com.pk/assets/logos/the-trust-school.png",
    category: "Education",
    service: "Campus-Wide Optical Backbone",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Cheezious",
    logo: "https://zcomnetworks.com.pk/assets/logos/cheezious.png",
    category: "Enterprise",
    service: "Low-Latency Point-to-Point VPN",
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
  },
  {
    name: "Lahore Leads University",
    logo: "https://zcomnetworks.com.pk/assets/logos/lahore-leads-university.png",
    category: "Education",
    service: "Gigabit Academic Bandwidth Ring",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Parkview City",
    logo: "https://zcomnetworks.com.pk/assets/logos/parkview-city.png",
    category: "Enterprise",
    service: "GPON Infrastructure & Backhaul",
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "Askari Guards",
    logo: "https://zcomnetworks.com.pk/assets/logos/askari-guards.png",
    category: "Enterprise",
    service: "Ultra-Reliable Surveillance Uplink",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "WebSols Pakistan",
    logo: "https://zcomnetworks.com.pk/assets/logos/websols-pakistan.png",
    category: "Tech",
    service: "Software House Symmetrical Fiber",
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "Medix Medical Billing",
    logo: "https://zcomnetworks.com.pk/assets/logos/medix-medical-billing.png",
    category: "Healthcare",
    service: "US VoIP Low-Jitter Leased Line",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Swiss Pro",
    logo: "https://zcomnetworks.com.pk/assets/logos/swiss-pro.png",
    category: "Enterprise",
    service: "Corporate Optical Fiber Pipe",
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
  },
  {
    name: "Meraki Matrix",
    logo: "https://zcomnetworks.com.pk/assets/logos/meraki-matrix.png",
    category: "Tech",
    service: "Cloud Production Dark Fiber",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Munir Industry",
    logo: "https://zcomnetworks.com.pk/assets/logos/munir-industry.png",
    category: "Enterprise",
    service: "Industrial Plant Metro Ethernet",
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "Hayyat Luxury Apartments",
    logo: "https://zcomnetworks.com.pk/assets/logos/hayyat-luxury-apartments.png",
    category: "Hospitality",
    service: "FTTH Residential Pure Fiber",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Tariq Electric",
    logo: "https://zcomnetworks.com.pk/assets/logos/tariq-electric.png",
    category: "Enterprise",
    service: "High-Bandwidth ERP Connection",
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
  },
  {
    name: "4S Security",
    logo: "https://zcomnetworks.com.pk/assets/logos/4s.png",
    category: "Enterprise",
    service: "Dedicated CCTV Optical Feed",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "Madina Collar",
    logo: "https://zcomnetworks.com.pk/assets/logos/madina-collar.png",
    category: "Enterprise",
    service: "Industrial Fiber Connectivity",
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "OriginNet",
    logo: "https://zcomnetworks.com.pk/assets/logos/originnet.png",
    category: "Tech",
    service: "Carrier Interconnect & Peering",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "FMP",
    logo: "https://zcomnetworks.com.pk/assets/logos/fmp.png",
    category: "Enterprise",
    service: "Corporate Redundant Leased Link",
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-brand-orange/5 to-transparent",
  },
  {
    name: "Naimat Khana",
    logo: "https://zcomnetworks.com.pk/assets/logos/naimat-khana.png",
    category: "Hospitality",
    service: "Fast Commercial Retail Broadband",
    badgeColor: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
  },
  {
    name: "MC Group",
    logo: "https://zcomnetworks.com.pk/assets/logos/mc.png",
    category: "Enterprise",
    service: "Multi-Site Metro Ring",
    badgeColor: "bg-orange-500/10 text-brand-orange dark:text-orange-400 border-orange-500/20",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
  },
];

// Split into two sets for dual-directional continuous loop
const ROW_1 = ALL_CLIENTS.slice(0, 11);
const ROW_2 = ALL_CLIENTS.slice(11);

export default function ClientsAnimatedMarquee() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Healthcare", "Hospitality", "Education", "Tech", "Enterprise"];

  const filteredClients =
    activeCategory === "All"
      ? ALL_CLIENTS
      : ALL_CLIENTS.filter((c) => c.category === activeCategory);

  return (
    <div className="w-full space-y-10">
      {/* Interactive Category Selector Filter */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
              activeCategory === cat
                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                : "bg-white dark:bg-[#12161F] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-700/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* When filtering by a specific category, show a colorful grid; when "All", show the dual infinite looping marquees */}
      {activeCategory === "All" ? (
        <div className="space-y-6 overflow-hidden py-2 relative">
          {/* Subtle edge fade gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] dark:from-[#0B0E14] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] dark:from-[#0B0E14] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Infinite Marquee Scrolling Left */}
          <div className="animate-marquee flex items-center gap-5">
            {[...ROW_1, ...ROW_1].map((client, idx) => (
              <ClientCard key={`row1-${idx}`} client={client} />
            ))}
          </div>

          {/* Row 2: Infinite Marquee Scrolling Right (Reverse) */}
          <div className="animate-marquee-reverse flex items-center gap-5">
            {[...ROW_2, ...ROW_2].map((client, idx) => (
              <ClientCard key={`row2-${idx}`} client={client} />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
          {filteredClients.map((client, idx) => (
            <ClientCard key={`filtered-${idx}`} client={client} fixedWidth={false} />
          ))}
        </div>
      )}

      {/* Colorful Trust & Scale Metrics Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-brand-orange/10 via-orange-500/5 to-transparent bg-white dark:bg-[#12161F] border border-orange-200/80 dark:border-slate-700/60 shadow-sm flex items-center gap-3 sm:gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/30">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={500} suffix="+" duration={1800} />
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Corporate Leased Lines
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-200/60 via-slate-100/40 to-transparent bg-white dark:bg-[#12161F] border border-slate-200 dark:border-slate-700/60 shadow-sm flex items-center gap-3 sm:gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-700 dark:bg-slate-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-slate-700/30">
            <ShieldCheck className="w-5 h-5 text-slate-100" />
          </div>
          <div>
            <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" duration={1800} />
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Guaranteed Contract SLA
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-brand-orange/10 via-orange-500/5 to-transparent bg-white dark:bg-[#12161F] border border-orange-200/80 dark:border-slate-700/60 shadow-sm flex items-center gap-3 sm:gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-brand-orangeLight text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/30">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={30} prefix="< " suffix=" min" duration={1800} />
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Rapid On-Site MTTR
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-200/60 via-slate-100/40 to-transparent bg-white dark:bg-[#12161F] border border-slate-200 dark:border-slate-700/60 shadow-sm flex items-center gap-3 sm:gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-800 dark:bg-slate-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-slate-800/30">
            <Award className="w-5 h-5 text-slate-100" />
          </div>
          <div>
            <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={100} suffix="%" duration={1800} />
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Pure Optical Fiber (No Copper)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientCard({ client, fixedWidth = true }: { client: ClientOrg; fixedWidth?: boolean }) {
  return (
    <div
      className={`group relative p-4 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 hover:border-brand-orange/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 flex flex-col justify-between overflow-hidden ${
        fixedWidth ? "w-64 sm:w-72 shrink-0 h-36" : "w-full h-40"
      }`}
    >
      {/* Background soft colorful gradient glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      {/* Top Header: Logo & Category Badge */}
      <div className="flex items-center justify-between gap-3 relative z-10">
        <div className="relative w-28 h-10 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain object-left"
            unoptimized
          />
        </div>

        <span
          className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider shrink-0 ${client.badgeColor}`}
        >
          {client.category}
        </span>
      </div>

      {/* Bottom Info: Client Name & Service Type */}
      <div className="space-y-1 relative z-10 pt-2 border-t border-slate-100 dark:border-slate-700/60">
        <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-brand-orange transition-colors">
          {client.name}
        </h4>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
          <span className="line-clamp-1 font-medium">{client.service}</span>
        </div>
      </div>
    </div>
  );
}
