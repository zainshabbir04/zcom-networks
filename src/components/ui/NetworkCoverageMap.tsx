"use client";

import React, { useState } from "react";
import {
  Activity,
  Radio,
  ShieldCheck,
  Zap,
  MapPin,
  ArrowRight,
  Server,
  Layers,
  Sparkles,
  Compass,
  CheckCircle2,
  Eye,
  Maximize2,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export interface CityNode {
  id: string;
  name: string;
  urduName: string;
  coordinates: string;
  elevation: string;
  x: number;
  y: number;
  type: "primary_hub" | "metro_hub" | "regional_pop";
  tier: string;
  capacity: string;
  latency: string;
  redundancy: string;
  fiberRoute: string;
  coverage: string[];
  status: "ONLINE • OPTIMAL" | "ONLINE • ACTIVE";
  connections: string[];
}

const REAL_PUNJAB_CITIES: CityNode[] = [
  {
    id: "lahore",
    name: "Lahore (Provincial Capital & Core NOC)",
    urduName: "لاہور",
    coordinates: "31°31'28\" N, 74°21'43\" E",
    elevation: "217m AMSL",
    x: 520,
    y: 270,
    type: "primary_hub",
    tier: "Tier-1 Central Core & 24/7 Operations NOC",
    capacity: "100 Gbps DWDM Optical Ring",
    latency: "< 1.2 ms",
    redundancy: "Triple Diverse Fiber Ring (Dual Path Auto-Failover)",
    fiberRoute: "Gulberg Central Core Ring & Metropolitan Arteries",
    coverage: ["Gulberg-III HQ", "DHA Phases 1-8", "Johar Town Tech Corridor", "Model Town", "Mall Road", "Sundar Industrial"],
    status: "ONLINE • OPTIMAL",
    connections: ["faisalabad", "gujranwala", "sheikhupura", "kasur", "islamabad"],
  },
  {
    id: "islamabad",
    name: "Rawalpindi / Islamabad",
    urduName: "راولپنڈی / اسلام آباد",
    coordinates: "33°41'24\" N, 73°02'24\" E",
    elevation: "540m AMSL (Potohar)",
    x: 380,
    y: 75,
    type: "metro_hub",
    tier: "Federal Core & Upstream Gateway",
    capacity: "100 Gbps Carrier Optical Trunk",
    latency: "4.8 ms",
    redundancy: "Motorway M-2 + GT Road Dual Redundant Optical Paths",
    fiberRoute: "Direct Inter-City Underground Optical Trench",
    coverage: ["Blue Area Commercial", "I-8 / I-9 Industrial Sectors", "Rawalpindi Saddar", "DHA / Bahria Optical Spur"],
    status: "ONLINE • OPTIMAL",
    connections: ["lahore", "gujranwala"],
  },
  {
    id: "sialkot",
    name: "Sialkot",
    urduName: "سیالکوٹ",
    coordinates: "32°29'38\" N, 74°31'52\" E",
    elevation: "256m AMSL",
    x: 540,
    y: 155,
    type: "metro_hub",
    tier: "Export Triangle High-Bandwidth PoP",
    capacity: "20 Gbps Dedicated Fiber Ring",
    latency: "3.4 ms",
    redundancy: "M-11 Sialkot-Lahore Motorway Optical Backbone",
    fiberRoute: "Protected M-11 Underground Optical Trench",
    coverage: ["Sialkot Export Zone", "Sambrial Dry Port", "Cantt Commercial", "Small Industrial Estate"],
    status: "ONLINE • OPTIMAL",
    connections: ["gujranwala", "lahore"],
  },
  {
    id: "gujranwala",
    name: "Gujranwala",
    urduName: "گوجرانوالہ",
    coordinates: "32°09'24\" N, 74°11'06\" E",
    elevation: "226m AMSL",
    x: 475,
    y: 190,
    type: "metro_hub",
    tier: "Industrial & Manufacturing Node",
    capacity: "20 Gbps Metro Ring",
    latency: "2.4 ms",
    redundancy: "N-5 GT Road Redundant Path",
    fiberRoute: "High-Capacity Underground Optical Fiber",
    coverage: ["GT Road Industrial Belt", "Model Town Commercial", "Wapda Town", "Small Industrial Estate 1 & 2"],
    status: "ONLINE • OPTIMAL",
    connections: ["lahore", "sialkot", "islamabad"],
  },
  {
    id: "sheikhupura",
    name: "Sheikhupura",
    urduName: "شیخوپورہ",
    coordinates: "31°42'47\" N, 73°58'30\" E",
    elevation: "236m AMSL",
    x: 440,
    y: 250,
    type: "regional_pop",
    tier: "Industrial Corridor Node",
    capacity: "10 Gbps Protected Link",
    latency: "1.9 ms",
    redundancy: "Dual Feeder Links via M-2 & Lahore-Sargodha Road",
    fiberRoute: "Direct Lahore Interconnect Ring",
    coverage: ["Quaid-e-Azam Business Park", "Faisalabad Road Industrial", "Civil Lines Commercial"],
    status: "ONLINE • ACTIVE",
    connections: ["lahore", "faisalabad"],
  },
  {
    id: "kasur",
    name: "Kasur",
    urduName: "قصور",
    coordinates: "31°07'00\" N, 74°26'48\" E",
    elevation: "218m AMSL",
    x: 530,
    y: 335,
    type: "regional_pop",
    tier: "South Metropolitan Edge Hub",
    capacity: "10 Gbps Redundant Spur",
    latency: "2.6 ms",
    redundancy: "Ferozepur Road Optical Trunk",
    fiberRoute: "Continuous Metro Optical Extension",
    coverage: ["Raiwind Industrial Corridor", "Ferozepur Road Hubs", "Kasur Commercial Hub"],
    status: "ONLINE • ACTIVE",
    connections: ["lahore"],
  },
  {
    id: "faisalabad",
    name: "Faisalabad",
    urduName: "فیصل آباد",
    coordinates: "31°25'08\" N, 73°04'44\" E",
    elevation: "184m AMSL",
    x: 335,
    y: 280,
    type: "metro_hub",
    tier: "Textile & Industrial Metro Hub",
    capacity: "40 Gbps Aggregation Ring",
    latency: "3.2 ms",
    redundancy: "M-3 / M-4 Motorway Diverse Optical Path",
    fiberRoute: "High-Speed Dual-Fiber Trench Route",
    coverage: ["Millat Industrial Estate", "D-Ground Business Zone", "Sargodha Road", "Peoples Colony"],
    status: "ONLINE • OPTIMAL",
    connections: ["lahore", "multan", "sheikhupura"],
  },
  {
    id: "multan",
    name: "Multan",
    urduName: "ملتان",
    coordinates: "30°11'52\" N, 71°28'11\" E",
    elevation: "122m AMSL",
    x: 175,
    y: 445,
    type: "metro_hub",
    tier: "South Punjab Gateway Hub",
    capacity: "40 Gbps Core Backbone",
    latency: "5.4 ms",
    redundancy: "M-4 Motorway Diverse Redundant Pipeline",
    fiberRoute: "Underground Optical Transmission Trunk",
    coverage: ["Industrial Estate Multan", "Bosan Road Tech Offices", "Cantt Commercial", "Vehari Road"],
    status: "ONLINE • OPTIMAL",
    connections: ["faisalabad", "lahore"],
  },
];

const REAL_LAHORE_AREAS: CityNode[] = [
  {
    id: "lhr-gulberg",
    name: "Gulberg-III (Z COM Core NOC)",
    urduName: "گلبرگ 3",
    coordinates: "31°30'43\" N, 74°20'53\" E",
    elevation: "216m AMSL",
    x: 400,
    y: 260,
    type: "primary_hub",
    tier: "Z COM Operations Core Data Center",
    capacity: "100 Gbps Core Switch Matrix",
    latency: "< 0.8 ms",
    redundancy: "N+1 Redundant UPS, Dual Diesel Generators & Diverse Feeds",
    fiberRoute: "Central Optical Multiplexing Core",
    coverage: ["Main Boulevard", "MM Alam Road", "Liberty Commercial", "Ghalib Market", "Zafar Ali Road"],
    status: "ONLINE • OPTIMAL",
    connections: ["lhr-dha", "lhr-johar", "lhr-mall", "lhr-model"],
  },
  {
    id: "lhr-dha",
    name: "DHA Lahore (Phases 1 - 8)",
    urduName: "ڈی ایچ اے لاہور",
    coordinates: "31°28'40\" N, 74°24'43\" E",
    elevation: "218m AMSL",
    x: 550,
    y: 300,
    type: "metro_hub",
    tier: "High-Density Residential & Corporate Ring",
    capacity: "40 Gbps Metro Loop",
    latency: "< 1.2 ms",
    redundancy: "Dual Ring Resiliency with Sub-50ms Auto-Failover",
    fiberRoute: "Underground Micro-Trench Fiber",
    coverage: ["DHA Phase 1-6 Commercial", "Y Block Sector", "H Block Hub", "DHA Phase 8 Air Avenue"],
    status: "ONLINE • OPTIMAL",
    connections: ["lhr-gulberg", "lhr-model"],
  },
  {
    id: "lhr-johar",
    name: "Johar Town & Tech Corridor",
    urduName: "جوہر ٹاؤن",
    coordinates: "31°28'05\" N, 74°16'44\" E",
    elevation: "214m AMSL",
    x: 300,
    y: 375,
    type: "metro_hub",
    tier: "Software Houses & IT University Hub",
    capacity: "40 Gbps Enterprise PoP",
    latency: "< 1.4 ms",
    redundancy: "Fiber Ring with Bypass Switches",
    fiberRoute: "Multi-Pair Gigabit Optical Backbone",
    coverage: ["Emporium Commercial Zone", "G1-G4 Tech Offices", "Doctor Hospital Link", "Finance & Trade Center"],
    status: "ONLINE • OPTIMAL",
    connections: ["lhr-gulberg", "lhr-model", "lhr-sundar"],
  },
  {
    id: "lhr-model",
    name: "Model Town & Garden Town",
    urduName: "ماڈل ٹاؤن",
    coordinates: "31°29'13\" N, 74°19'16\" E",
    elevation: "215m AMSL",
    x: 390,
    y: 345,
    type: "metro_hub",
    tier: "Commercial & Educational Aggregator",
    capacity: "20 Gbps Protected Link",
    latency: "< 1.1 ms",
    redundancy: "Direct Dark Fiber Connection to Gulberg Core",
    fiberRoute: "Dual Radial Ring Lines",
    coverage: ["Link Road Commercial", "Model Town Circles A-M", "Barkat Market", "Garden Town Corporate"],
    status: "ONLINE • OPTIMAL",
    connections: ["lhr-gulberg", "lhr-dha", "lhr-johar"],
  },
  {
    id: "lhr-mall",
    name: "Mall Road & Financial District",
    urduName: "مال روڈ",
    coordinates: "31°33'29\" N, 74°19'37\" E",
    elevation: "219m AMSL",
    x: 345,
    y: 165,
    type: "metro_hub",
    tier: "Banking & Government Optical Loop",
    capacity: "20 Gbps Enterprise Ring",
    latency: "< 1.3 ms",
    redundancy: "Protected Metro Ethernet Tunnel",
    fiberRoute: "Historical Corridor Protected Optical Duct",
    coverage: ["Lahore Stock Exchange", "Mall Road Commercial", "Civil Secretariat", "Hall Road Tech Hub"],
    status: "ONLINE • OPTIMAL",
    connections: ["lhr-gulberg"],
  },
  {
    id: "lhr-sundar",
    name: "Sundar Industrial Estate (SIE)",
    urduName: "سندر انڈسٹریل اسٹیٹ",
    coordinates: "31°17'06\" N, 74°10'30\" E",
    elevation: "208m AMSL",
    x: 200,
    y: 485,
    type: "regional_pop",
    tier: "Heavy Industry & Manufacturing Zone",
    capacity: "20 Gbps Dedicated DIA & Point-to-Point",
    latency: "< 1.9 ms",
    redundancy: "Raiwind Diverse Trench Path",
    fiberRoute: "Industrial Grade Armored Optical Cable",
    coverage: ["Sundar Industrial Phase 1 & 2", "Heavy Manufacturing Units", "Pharmaceutical Sector"],
    status: "ONLINE • OPTIMAL",
    connections: ["lhr-johar"],
  },
];

export default function NetworkCoverageMap() {
  const [activeTab, setActiveTab] = useState<"punjab" | "lahore">("punjab");
  const [mapMode, setMapMode] = useState<"terrain" | "optical">("terrain");
  const [selectedCityId, setSelectedCityId] = useState<string>("lahore");

  const nodes: CityNode[] = activeTab === "punjab" ? REAL_PUNJAB_CITIES : REAL_LAHORE_AREAS;
  const selectedNode = nodes.find((n) => n.id === selectedCityId) || nodes[0];

  const handleTabChange = (tab: "punjab" | "lahore") => {
    setActiveTab(tab);
    if (tab === "punjab") {
      setSelectedCityId("lahore");
    } else {
      setSelectedCityId("lhr-gulberg");
    }
  };

  const links: { from: CityNode; to: CityNode }[] = [];
  nodes.forEach((source) => {
    source.connections.forEach((targetId) => {
      const target = nodes.find((n) => n.id === targetId);
      if (target && source.id < target.id) {
        links.push({ from: source, to: target });
      }
    });
  });

  return (
    <div className="w-full space-y-6">
      {/* Real Map Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-[#12161F] p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-md">
        {/* Region Switcher */}
        <div className="flex items-center gap-2 w-full sm:w-auto p-1 bg-slate-100 dark:bg-black/50 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
          <button
            onClick={() => handleTabChange("punjab")}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === "punjab"
                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 scale-[1.02]"
                : "text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Punjab Province Real Map</span>
          </button>

          <button
            onClick={() => handleTabChange("lahore")}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === "lahore"
                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 scale-[1.02]"
                : "text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Lahore Metropolitan Grid</span>
          </button>
        </div>

        {/* Real Map Style Switcher (Satellite Terrain vs Optical Vector) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 bg-slate-100 dark:bg-black/40 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs font-bold">
            <button
              onClick={() => setMapMode("terrain")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                mapMode === "terrain"
                  ? "bg-white dark:bg-slate-800 text-brand-orange shadow-sm"
                  : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Satellite Terrain
            </button>
            <button
              onClick={() => setMapMode("optical")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                mapMode === "optical"
                  ? "bg-white dark:bg-slate-800 text-brand-orange shadow-sm"
                  : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Optical GIS Grid
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>GPS: 31.5204° N, 74.3587° E</span>
          </div>
        </div>
      </div>

      {/* Main Map Layout: Real Geographical Map Canvas (8 cols) + Telemetry Card (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Real Map Viewport Canvas */}
        <div className="lg:col-span-8 bg-[#0B0E14] rounded-3xl border border-slate-200/90 dark:border-slate-700/60 p-4 sm:p-7 relative overflow-hidden shadow-2xl text-white">
          {/* Real Satellite / Dark Topographical Background Layer */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              mapMode === "terrain" ? "opacity-90" : "opacity-40"
            }`}
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #1A202C 0%, #11151E 60%, #080A0F 100%)",
            }}
          />

          {/* Terrain Contour & River Mesh Overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#CBD5E1 1px, transparent 1px), radial-gradient(#F05A22 1px, #0B0E14 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Map Top Status Bar */}
          <div className="flex items-center justify-between mb-4 relative z-10 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
                {activeTab === "punjab" ? "PUNJAB OPTICAL HIGHWAY TRUNKS (M-2 / N-5 / M-3 / M-4)" : "LAHORE METROPOLITAN OPTICAL RING"}
              </span>
            </div>

            <div className="text-xs font-mono text-brand-orange font-bold">
              SCALE: 1:500,000 · GIS ACTIVE
            </div>
          </div>

          {/* Vector Map Canvas */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] select-none">
            <svg
              viewBox="0 0 720 530"
              className="w-full h-full drop-shadow-md"
              shapeRendering="geometricPrecision"
              style={{ overflow: "visible" }}
            >
              <defs>
                <filter id="realMapGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F05A22" />
                  <stop offset="50%" stopColor="#FFA26B" />
                  <stop offset="100%" stopColor="#F05A22" />
                </linearGradient>
              </defs>

              {/* Realistic Geography of Punjab: Real Rivers (Indus, Jhelum, Chenab, Ravi, Sutlej) */}
              {activeTab === "punjab" && (
                <g className="opacity-45 pointer-events-none">
                  {/* Indus River (West) */}
                  <path
                    d="M 120,40 Q 140,160 160,260 T 110,480"
                    fill="none"
                    stroke="#0284C7"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <text x="135" y="100" fill="#38BDF8" fontSize="9" fontFamily="monospace">Indus River</text>

                  {/* Jhelum River */}
                  <path
                    d="M 330,40 Q 340,120 300,190 T 260,290 T 220,380"
                    fill="none"
                    stroke="#0284C7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <text x="310" y="130" fill="#38BDF8" fontSize="8" fontFamily="monospace">Jhelum River</text>

                  {/* Chenab River */}
                  <path
                    d="M 440,80 Q 420,160 380,240 T 320,340 T 220,440"
                    fill="none"
                    stroke="#0284C7"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <text x="390" y="180" fill="#38BDF8" fontSize="8" fontFamily="monospace">Chenab River</text>

                  {/* Ravi River (passing through Lahore) */}
                  <path
                    d="M 580,160 Q 530,230 495,280 T 400,340 T 320,400"
                    fill="none"
                    stroke="#0284C7"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <text x="525" y="235" fill="#38BDF8" fontSize="8" fontFamily="monospace">Ravi River</text>
                </g>
              )}

              {/* Real Highway / Motorway Corridors */}
              {activeTab === "punjab" && (
                <g className="opacity-35 pointer-events-none">
                  {/* Motorway M-2: Islamabad to Lahore */}
                  <path
                    d="M 380,75 Q 400,160 440,250 L 520,270"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  <text x="405" y="150" fill="#CBD5E1" fontSize="8" fontFamily="monospace">M-2 Motorway</text>

                  {/* GT Road N-5: Rawalpindi -> Gujranwala -> Lahore */}
                  <path
                    d="M 380,75 L 475,190 L 520,270"
                    fill="none"
                    stroke="#64748B"
                    strokeWidth="1.8"
                  />
                  <text x="445" y="130" fill="#94A3B8" fontSize="8" fontFamily="monospace">N-5 GT Road</text>

                  {/* M-11 Sialkot-Lahore Motorway */}
                  <path
                    d="M 540,155 L 520,270"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <text x="538" y="210" fill="#CBD5E1" fontSize="8" fontFamily="monospace">M-11 Motorway</text>

                  {/* Motorway M-3 / M-4: Lahore -> Faisalabad -> Multan */}
                  <path
                    d="M 520,270 L 335,280 L 175,445"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  <text x="245" y="380" fill="#CBD5E1" fontSize="8" fontFamily="monospace">M-4 Motorway</text>
                </g>
              )}

              {/* 1. Optical Fiber Transmission Cables */}
              {links.map((link, idx) => {
                const isSelected =
                  link.from.id === selectedCityId || link.to.id === selectedCityId;

                return (
                  <g key={`fiber-${idx}`}>
                    {/* Underlying Optical Cable */}
                    <line
                      x1={link.from.x}
                      y1={link.from.y}
                      x2={link.to.x}
                      y2={link.to.y}
                      stroke={isSelected ? "#F05A22" : "rgba(255, 255, 255, 0.25)"}
                      strokeWidth={isSelected ? "3.5" : "1.8"}
                      strokeLinecap="round"
                    />

                    {/* Animated Pulsing Light Photons */}
                    <line
                      x1={link.from.x}
                      y1={link.from.y}
                      x2={link.to.x}
                      y2={link.to.y}
                      stroke="#FFD066"
                      strokeWidth={isSelected ? "4" : "2.2"}
                      strokeLinecap="round"
                      className="animate-optical-pulse pointer-events-none"
                    />
                  </g>
                );
              })}

              {/* 2. City & PoP Markers (Map Pins with Radar Rings) */}
              {nodes.map((node) => {
                const isSelected = node.id === selectedCityId;
                const isPrimary = node.type === "primary_hub";

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedCityId(node.id)}
                  >
                    {/* Concentric Radar Ring */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? "26" : isPrimary ? "20" : "15"}
                      fill="none"
                      stroke="#F05A22"
                      strokeWidth="1.2"
                      className="animate-ping opacity-45"
                    />

                    {/* Active Glow Halo */}
                    {isSelected && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="22"
                        fill="rgba(240, 90, 34, 0.25)"
                        stroke="#F05A22"
                        strokeWidth="2"
                      />
                    )}

                    {/* Outer Pin Body */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isPrimary ? "11" : "8"}
                      fill={isSelected ? "#F05A22" : isPrimary ? "#FF7A38" : "#FFFFFF"}
                      stroke="#F05A22"
                      strokeWidth={isPrimary ? "3" : "2"}
                      filter={isSelected ? "url(#realMapGlow)" : undefined}
                    />

                    {/* Center Core Dot */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isPrimary ? "4.5" : "3"}
                      fill={isSelected ? "#FFFFFF" : isPrimary ? "#FFFFFF" : "#F05A22"}
                    />

                    {/* Realistic Map Label Tag */}
                    <g
                      transform={`translate(${node.x}, ${node.y + (isPrimary ? 26 : 22)})`}
                      className="pointer-events-none"
                    >
                      <rect
                        x="-58"
                        y="-10"
                        width="116"
                        height="20"
                        rx="10"
                        fill={isSelected ? "#F05A22" : "rgba(10, 16, 32, 0.95)"}
                        stroke={isSelected ? "#FFFFFF" : "rgba(255, 255, 255, 0.2)"}
                        strokeWidth="1"
                      />
                      <text
                        x="0"
                        y="4"
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="10"
                        fontWeight="700"
                        fontFamily="var(--font-sora), sans-serif"
                      >
                        {node.name.split(" ")[0]}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Real Map Bottom Legend & Scale */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-3 border-t border-white/10 text-xs">
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-orange border-2 border-white shadow-sm" />
                <span className="font-bold text-white">Tier-1 Core NOC (Lahore)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-white border-2 border-brand-orange" />
                <span className="text-slate-300">Active Metro PoP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-1 bg-brand-orange rounded" />
                <span className="text-slate-300">Protected Underground Fiber</span>
              </div>
            </div>

            {/* Scale Bar */}
            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-300">
              <span>0</span>
              <div className="w-16 h-1 bg-white relative">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-brand-orange" />
              </div>
              <span>100 km</span>
            </div>
          </div>
        </div>

        {/* Selected City Real Telemetry Card (4 cols) */}
        <div className="lg:col-span-4 bg-white dark:bg-[#12161F] rounded-3xl border border-slate-200/90 dark:border-slate-700/60 p-6 sm:p-7 shadow-xl shadow-slate-200/50 dark:shadow-black/60 space-y-6">
          {/* Card Header */}
          <div className="space-y-2 pb-5 border-b border-slate-100 dark:border-slate-700/60">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-orange-100 dark:bg-brand-orange/20 text-brand-orange dark:text-brand-orangeLight border border-orange-200 dark:border-brand-orange/40 flex items-center gap-1">
                <Activity className="w-3 h-3 text-brand-orange" />
                {selectedNode.status}
              </span>
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                PoP: {selectedNode.id.toUpperCase()}
              </span>
            </div>

            <div className="pt-1">
              <h4 className="text-2xl font-black text-slate-900 dark:text-white font-heading tracking-tight">
                {selectedNode.name}
              </h4>
              <p className="text-xs font-semibold text-brand-orange mt-0.5">
                {selectedNode.tier}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>{selectedNode.coordinates} · {selectedNode.elevation}</span>
              </div>
            </div>
          </div>

          {/* Real-time Telemetry Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Measured Latency
              </span>
              <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                <AnimatedCounter value={selectedNode.latency} />
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 block mb-1">
                Node Capacity
              </span>
              <span className="text-xl font-black text-slate-900 dark:text-white font-mono">
                <AnimatedCounter value={`${selectedNode.capacity.split(" ")[0]} ${selectedNode.capacity.split(" ")[1]}`} />
              </span>
            </div>
          </div>

          {/* Infrastructure Specifications */}
          <div className="space-y-3.5 text-xs text-slate-700 dark:text-gray-300">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">
                  Resiliency &amp; Auto-Failover
                </span>
                <span className="text-slate-600 dark:text-gray-400">
                  {selectedNode.redundancy}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Server className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">
                  Transmission Corridor
                </span>
                <span className="text-slate-600 dark:text-gray-400">
                  {selectedNode.fiberRoute}
                </span>
              </div>
            </div>
          </div>

          {/* Covered Commercial & Residential Sectors */}
          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 block">
              Active Optical Zones &amp; Coverage
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedNode.coverage.map((zone, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-white/5"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button: Pre-filled WhatsApp Feasibility Check */}
          <div className="pt-2">
            <a
              href={`https://wa.me/923171118042?text=${encodeURIComponent(
                `Hello Z COM Networks! I want to check optical fiber availability and enterprise leased line pricing for our premises in ${selectedNode.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:-translate-y-0.5"
            >
              <span>Check Feasibility in {selectedNode.name.split(" ")[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 4 Infrastructure Metric Cards with Animated 0 -> Max Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-brand-orange border border-orange-500/20 flex items-center justify-center shrink-0">
            <Radio className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={100} suffix=" Gbps" />
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
              Core Metro Backbone
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" />
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
              Optical SLA Guarantee
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-brand-orange border border-orange-500/20 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={50} prefix="< " suffix=" ms" />
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
              Auto Ring Failover
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 flex items-center justify-center shrink-0">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={24} suffix="/7/365" />
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
              Gulberg NOC Operations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
