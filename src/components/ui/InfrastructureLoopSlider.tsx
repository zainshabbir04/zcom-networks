"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Server,
  Zap,
  ShieldCheck,
  Radio,
  Clock,
  ArrowRight,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface InfraSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  location: string;
  telemetry: {
    label: string;
    value: string;
    sub: string;
  }[];
  features: string[];
}

const INFRA_SLIDES: InfraSlide[] = [
  {
    id: "noc",
    badge: "CORE OPERATIONS CENTER",
    title: "Gulberg-III 24/7 Tier-3 NOC Facility",
    subtitle: "Real-time Telemetry, Optical Monitoring & Instant Level-3 Dispatch",
    description:
      "Our central Network Operations Center in Gulberg-III, Lahore features dual-redundant power backup, multi-screen PRTG optical telemetry, automated fiber cut pinging, and a dedicated team of certified network engineers on duty around the clock.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    location: "Gulberg-III Corporate Headquarters, Lahore",
    telemetry: [
      { label: "Active Monitoring", value: "24/7/365", sub: "Automated PRTG / Zabbix" },
      { label: "Mean Time to Detect", value: "< 15 sec", sub: "Fiber Break Alarm" },
      { label: "Power Redundancy", value: "N+1", sub: "Dual Generators + Online UPS" },
      { label: "Engineer Escalation", value: "Level-3", sub: "Direct NOC Phone Access" },
    ],
    features: [
      "Continuous OTDR real-time reflection analysis",
      "Carrier-grade BGP multihomed path monitoring",
      "Direct WhatsApp dispatch integration for enterprises",
    ],
  },
  {
    id: "trenching",
    badge: "PHYSICAL OPTICAL LAYER",
    title: "1,200+ km Armored Metro Fiber Network",
    subtitle: "Heavy-Duty Subterranean Optical Conduits Spanning Lahore",
    description:
      "Unlike providers relying on fragile aerial cables vulnerable to storms and utility poles, Z COM has built over 1,200 kilometers of deep-trench armored underground fiber conduits connecting Main Boulevard Gulberg, Mall Road, Ferozepur Road, Canal Road, and DHA Phases 1 through 8.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    location: "Subterranean Metropolitan Trenches, Lahore",
    telemetry: [
      { label: "Underground Network", value: "1,200+ km", sub: "Armored Conduit Route" },
      { label: "Core Fiber Count", value: "96 / 144 Core", sub: "Single-Mode G.652D" },
      { label: "Physical Depth", value: "1.5 - 2.0 m", sub: "Protected Trenching" },
      { label: "Aerial Exposure", value: "0%", sub: "Core Ring Underground" },
    ],
    features: [
      "Corning Single-Mode low-water-peak optical glass",
      "Dual geographically independent physical paths",
      "Zero vulnerability to overhead utility wire cuts",
    ],
  },
  {
    id: "dwdm",
    badge: "TRANSMISSION HARDWARE",
    title: "100 Gbps DWDM Multi-Ring Optical Backbone",
    subtitle: "Dense Wavelength Division Multiplexing with <50ms Auto-Failover",
    description:
      "Our core metro distribution runs on multi-lambda DWDM optical transport technology capable of delivering scalable 100 Gbps channels. In the event of a physical fiber severance, the self-healing ring topology redirects packet flows in less than 50 milliseconds without session drops.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    location: "Metro Optical Nodes & Distribution Rings",
    telemetry: [
      { label: "Ring Capacity", value: "100 Gbps", sub: "Scalable DWDM Core" },
      { label: "Auto-Failover", value: "< 50 ms", sub: "Zero TCP Connection Reset" },
      { label: "Packet Loss Rate", value: "0.00%", sub: "Protected Metro Circuits" },
      { label: "Intra-City Latency", value: "< 1.2 ms", sub: "Gulberg to DHA / Johar Town" },
    ],
    features: [
      "Hardware by Cisco, Juniper Networks, and Huawei Optical",
      "Carrier-grade ITU-T G.8032 Ethernet Ring Protection",
      "Native dual-stack IPv4 & IPv6 routing engines",
    ],
  },
  {
    id: "peering",
    badge: "UPSTREAM TRANSIT",
    title: "Multi-Homed Tier-1 Upstream & Direct Peering",
    subtitle: "Direct Interconnections to PIE, Cloudflare, Akamai, Google & AWS",
    description:
      "Z COM Networks connects directly to Pakistan Internet Exchange (PIE) and maintains redundant multi-gigabit upstream feeds through national Tier-1 carriers. Local caching servers and direct BGP peering deliver zero-buffering 4K streaming and instant gaming response.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    location: "Lahore Internet Exchange Points & Edge PoPs",
    telemetry: [
      { label: "Upstream Diversity", value: "Triple Tier-1", sub: "Subsea Cable Outlets" },
      { label: "Direct CDN Peering", value: "Local Edge", sub: "Google, Cloudflare, Meta" },
      { label: "BGP Convergence", value: "< 3 sec", sub: "Multi-AS Autonomous System" },
      { label: "Symmetrical CIR", value: "1:1 Non-Shared", sub: "Zero Fair-Usage Throttling" },
    ],
    features: [
      "BGP-4 dynamic route optimization",
      "In-country cache clusters for low international latency",
      "DDoS mitigation scrubbers at carrier ingress points",
    ],
  },
  {
    id: "field-fleet",
    badge: "RAPID RESPONSE",
    title: "Rapid Optical Fusion Splicing & Field Fleet",
    subtitle: "Mobile Technicians Dispatched in Lahore with <30 Minute MTTR",
    description:
      "When unforeseen municipal construction cuts a feeder fiber, Z COM's dedicated mobile fleet arrives equipped with Fujikura precision core-alignment fusion splicers, EXFO optical time-domain reflectometers (OTDR), and emergency standby fiber rolls.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    location: "Mobile Field Fleets across Lahore Zones",
    telemetry: [
      { label: "Lahore MTTR SLA", value: "< 30 min", sub: "Emergency On-Site Arrival" },
      { label: "Splice Precision", value: "< 0.02 dB", sub: "Fujikura Core Alignment" },
      { label: "Dedicated Fleet", value: "15+ Units", sub: "Equipped Mobile Vans" },
      { label: "Standby Spares", value: "100% In-Stock", sub: "Pre-Terminated Optical Hubs" },
    ],
    features: [
      "GPS-tracked rapid dispatch fleet",
      "24/7 emergency trenching and fiber restoration teams",
      "Live optical power level verification prior to handoff",
    ],
  },
];

export default function InfrastructureLoopSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance loop every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % INFRA_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = INFRA_SLIDES[activeSlide];

  return (
    <div
      className="relative w-full max-w-7xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Tab Bar: Allows Quick Navigation Across All 5 Infrastructure Assets */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {INFRA_SLIDES.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveSlide(idx)}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 shrink-0 ${
              activeSlide === idx
                ? "bg-brand-orange text-white shadow-xl shadow-orange-500/20 scale-102"
                : "bg-white dark:bg-[#12161F] text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-700/60 hover:border-brand-orange/40"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                activeSlide === idx ? "bg-white animate-ping" : "bg-slate-400 dark:bg-slate-600"
              }`}
            />
            <span>{item.badge}</span>
          </button>
        ))}
      </div>

      {/* Main Slide Card Container */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-700/60 bg-white dark:bg-[#12161F] shadow-2xl transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Left Column: Visual Banner with Overlay */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover filter brightness-[0.8] contrast-115 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Badge & Location pill */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                {slide.badge}
              </span>
              <span className="text-xs font-bold text-white/80 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                0{activeSlide + 1} / 0{INFRA_SLIDES.length}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-orange-400 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{slide.location}</span>
              </div>
              <h4 className="text-lg font-bold text-white font-heading">
                {slide.title}
              </h4>
            </div>
          </div>

          {/* Right Column: In-depth Technical Telemetry & Features */}
          <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CARRIER-GRADE OPTICAL ARCHITECTURE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading leading-tight">
                {slide.title}
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-brand-orange">
                {slide.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                {slide.description}
              </p>

              {/* 4 Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                {slide.telemetry.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60"
                  >
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      {metric.label}
                    </span>
                    <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-heading block mt-0.5">
                      <AnimatedCounter value={metric.value} />
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 block truncate">
                      {metric.sub}
                    </span>
                  </div>
                ))}
              </div>

              {/* Architectural Highlights List */}
              <div className="space-y-2 pt-2">
                {slide.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Bottom Controls & Action Link */}
            <div className="pt-4 border-t border-slate-200/90 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/why-us#coverage-map"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-orange hover:text-brand-orangeLight transition-colors"
              >
                <span>View GIS Network Map &amp; PoPs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActiveSlide(
                      (prev) => (prev - 1 + INFRA_SLIDES.length) % INFRA_SLIDES.length
                    )
                  }
                  aria-label="Previous Infrastructure Slide"
                  className="w-9 h-9 rounded-full border border-slate-200/90 dark:border-slate-700/60 bg-slate-100 dark:bg-[#0E1118] text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveSlide((prev) => (prev + 1) % INFRA_SLIDES.length)
                  }
                  aria-label="Next Infrastructure Slide"
                  className="w-9 h-9 rounded-full border border-slate-200/90 dark:border-slate-700/60 bg-slate-100 dark:bg-[#0E1118] text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
