"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Server,
  Laptop,
  Building2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Sliders,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface SolutionItem {
  id: string;
  badge: string;
  icon: React.ReactNode;
  title: string;
  target: string;
  description: string;
  features: React.ReactNode[];
  highlight: React.ReactNode;
  whatsappMessage: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "residential",
    badge: "Residential Connectivity",
    icon: <Laptop className="w-5 h-5 text-brand-orange" />,
    title: "High-Speed Home Fiber",
    target: "Home Entertainment, Remote Work, 4K Streaming & Gaming",
    description:
      "Engineered for households requiring buffer-free streaming, competitive low-latency gaming, and reliable simultaneous connections for remote work and study.",
    features: [
      <span>Unlimited Data with Zero Fair Usage Policy (No FUP)</span>,
      <span>
        <AnimatedCounter from={0} to={100} suffix="%" /> Symmetrical Upload and Download Speeds
      </span>,
      <span>Low-ping routing to primary gaming, Zoom, and streaming CDNs</span>,
      <span>Dual-band Gigabit Wi-Fi optical terminal router included</span>,
      <span>Free site survey and standard installation in Lahore</span>,
      <span>
        <AnimatedCounter from={0} to={24} suffix="/7" /> localized WhatsApp &amp; phone technical support
      </span>,
    ],
    highlight: <span>Symmetrical Speed Guaranteed</span>,
    whatsappMessage:
      "Hello Z COM! I am inquiring about Residential Fiber Internet for my home in Lahore. Please share coverage feasibility.",
  },
  {
    id: "sme",
    badge: "SME Solutions",
    icon: <Building2 className="w-5 h-5 text-brand-orange" />,
    title: "SME Internet Business Solutions",
    target: "Commercial Offices, Tech Startups, Branch Locations",
    description:
      "Robust fiber and wireless connectivity built for small and medium businesses needing reliable cloud synchronisation, video conferencing, and priority business routing.",
    features: [
      <span>High-priority business routing for critical cloud apps</span>,
      <span>Low jitter and packet priority for Zoom, Microsoft Teams &amp; VoIP</span>,
      <span>Rapid turnaround on-site technical assistance in Lahore</span>,
      <span>Multiple static IP configurations available upon request</span>,
      <span>Local L2 networking and internal Wi-Fi distribution support</span>,
      <span>Continuous network monitoring with dedicated support channel</span>,
    ],
    highlight: <span>Priority Business Routing</span>,
    whatsappMessage:
      "Hello Z COM! I am inquiring about SME Business Fiber Internet for our office in Lahore. Please share solution details.",
  },
  {
    id: "corporate",
    badge: "Corporate & Enterprise",
    icon: <Server className="w-5 h-5 text-brand-orange" />,
    title: "Dedicated Internet Access (DIA)",
    target: "Enterprises, Financial Institutions, Hospitals, Campuses",
    description:
      "Dedicated 1:1 contention ratio fiber connection with contractual SLA, static IPs, and redundant carrier-grade routing for mission-critical operations.",
    features: [
      <span>
        True <AnimatedCounter from={0} to={1} prefix="1:" suffix=" dedicated" />, unshared optical bandwidth pipe
      </span>,
      <span>
        Contractual <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" /> Uptime Service Level Agreement (SLA)
      </span>,
      <span>
        Proactive <AnimatedCounter from={0} to={24} suffix="/7" /> NOC monitoring with{" "}
        <AnimatedCounter from={0} to={30} prefix="< " suffix="-min" /> MTTR dispatch
      </span>,
      <span>Multiple public IPv4 / IPv6 subnets with BGP routing support</span>,
      <span>Direct low-latency interconnects to major cloud providers</span>,
      <span>Dual-homed fiber path redundancy available on request</span>,
    ],
    highlight: (
      <span>
        <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" /> SLA Contract Guarantee
      </span>
    ),
    whatsappMessage:
      "Hello Z COM! I am inquiring about Dedicated Internet Access (DIA) for our enterprise in Lahore. Please arrange a feasibility survey.",
  },
  {
    id: "data-connectivity",
    badge: "Metro & Dark Fiber",
    icon: <Globe className="w-5 h-5 text-brand-orange" />,
    title: "Point-to-Point & Metro Ethernet",
    target: "Multi-branch Networks, Data Centers, Financial Networks",
    description:
      "Secure, private Layer-2 optical interconnects across Lahore to link your headquarters, branches, and disaster recovery centers with wire-speed throughput.",
    features: [
      <span>Private Layer-2 point-to-point and point-to-multipoint circuits</span>,
      <span>Sub-millisecond intra-city latency across Lahore metro ring</span>,
      <span>Dark fiber leases and leased wavelength options</span>,
      <span>Secure isolated transport outside the public internet</span>,
      <span>
        Scalable from <AnimatedCounter from={0} to={100} suffix=" Mbps" /> to{" "}
        <AnimatedCounter from={0} to={10} suffix=" Gbps" /> on demand
      </span>,
      <span>Fully redundant physical fiber routing options</span>,
    ],
    highlight: <span>Sub-Millisecond Metro Latency</span>,
    whatsappMessage:
      "Hello Z COM! I am inquiring about Metro Ethernet / Point-to-Point connectivity in Lahore. Please share technical options.",
  },
];

export default function SolutionExplorer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = SOLUTIONS.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-play loop every 6 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  // Touch Swipe Support for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="space-y-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Interactive Slider Tabs Track */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
        {SOLUTIONS.map((s, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-sm font-bold transition-all duration-300 border ${
                isActive
                  ? "bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/30 scale-[1.02] sm:scale-[1.03]"
                  : "bg-white dark:bg-white/5 text-slate-700 dark:text-gray-300 border-slate-200/90 dark:border-white/10 hover:border-brand-orange/40 hover:bg-orange-50/50 dark:hover:bg-white/10"
              }`}
            >
              {s.icon}
              <span>{s.badge}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Slider Main Card with Horizontal Sliding Track */}
      <div className="relative group">
        {/* Left Arrow Button (Hidden on tiny screens to prevent side overflow; swipe gesture enabled) */}
        <button
          onClick={prevSlide}
          aria-label="Previous Solution"
          className="hidden sm:flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 dark:bg-[#121624]/95 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange text-slate-800 dark:text-white border border-slate-200/90 dark:border-white/10 shadow-xl items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button (Hidden on tiny screens to prevent side overflow; swipe gesture enabled) */}
        <button
          onClick={nextSlide}
          aria-label="Next Solution"
          className="hidden sm:flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 dark:bg-[#121624]/95 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange text-slate-800 dark:text-white border border-slate-200/90 dark:border-white/10 shadow-xl items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Viewport Frame */}
        <div
          className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white dark:bg-brand-card/70 relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Horizontal Slide Strip */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="w-full shrink-0 p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
              >
                {/* Left: Solution Specifications */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-brand-orange/15 border border-orange-200 dark:border-brand-orange/30 text-brand-orange text-xs font-bold tracking-wide uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{sol.badge}</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-brand-orange">
                    Recommended for: {sol.target}
                  </p>

                  <p className="text-xs sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Feature checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2 sm:pt-3">
                    {sol.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-gray-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Action Box */}
                <div className="lg:col-span-5">
                  <div className="p-5 sm:p-8 rounded-2xl bg-slate-50 dark:bg-brand-cardDark/90 border border-slate-200 dark:border-white/10 text-center space-y-5 sm:space-y-6 relative overflow-hidden shadow-lg">
                    <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-brand-orange/15 text-brand-orange mx-auto flex items-center justify-center border border-orange-200 dark:border-brand-orange/30">
                      {sol.icon}
                    </div>

                    <div>
                      <span className="text-xs uppercase font-bold text-slate-500 dark:text-gray-400 tracking-wider">
                        Specification Standard
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                        {sol.highlight}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-gray-400 mt-2">
                        Free on-site optical feasibility survey across Lahore. Fast 24-48h activation.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <a
                        href={`https://wa.me/923171118042?text=${encodeURIComponent(
                          sol.whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md shadow-[#25D366]/25 hover:-translate-y-0.5"
                      >
                        <span>Inquire on WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 bg-white dark:bg-white/5 hover:bg-orange-50 dark:hover:bg-white/10 text-slate-800 dark:text-white text-xs font-semibold py-3 px-6 rounded-xl border border-slate-300 dark:border-white/10 transition-colors"
                      >
                        <span>Request Custom Quote &amp; Survey</span>
                      </Link>
                    </div>

                    <div className="text-[11px] text-slate-400 dark:text-gray-500 pt-1">
                      Official Hotline:{" "}
                      <a
                        href="tel:+924234511111"
                        className="text-brand-orange underline font-semibold"
                      >
                        +92 42 345 11 111
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Slider Pagination & Progress Indicator */}
      <div className="flex items-center justify-between px-2 pt-1 text-xs text-slate-500 dark:text-gray-400">
        <div className="flex items-center gap-2 font-mono font-bold">
          <span className="text-brand-orange">0{currentSlide + 1}</span>
          <span>/</span>
          <span>0{totalSlides}</span>
        </div>

        {/* Clickable Pagination Bar */}
        <div className="flex items-center gap-2">
          {SOLUTIONS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "w-8 bg-brand-orange shadow-sm shadow-brand-orange/50"
                  : "w-2.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-medium">
          <span
            className={`w-2 h-2 rounded-full ${
              isPaused ? "bg-amber-400" : "bg-emerald-500 animate-pulse"
            }`}
          />
          <span>{isPaused ? "Paused" : "Auto-looping"}</span>
        </div>
      </div>
    </div>
  );
}
