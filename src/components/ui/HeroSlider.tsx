"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Radio,
  Server,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Layers,
  Award,
  Users,
} from "lucide-react";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface SlideData {
  id: string;
  pillBadge: string;
  pillIcon: React.ReactNode;
  subtitle: string;
  titleLight: string;
  titleBold: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  stats: {
    val: number;
    decimals?: number;
    prefix?: string;
    suffix: string;
    label: string;
  }[];
}

const SLIDES: SlideData[] = [
  {
    id: "internet-experience",
    pillBadge: "Z COM NETWORKS · LAHORE'S TOP-TIER ISP",
    pillIcon: <Radio className="w-3.5 h-3.5 text-brand-orange" />,
    subtitle: "PIONEERING CARRIER-GRADE OPTICAL FIBER CONNECTIVITY",
    titleLight: "A WHOLE NEW",
    titleBold: "INTERNET EXPERIENCE",
    description:
      "Dedicated 1:1 symmetrical bandwidth, unshared enterprise optical links, and buffer-free residential fiber connectivity across Lahore with guaranteed 99.9% uptime SLA.",
    primaryButtonText: "LEARN MORE",
    primaryButtonHref: "/about",
    secondaryButtonText: "CHECK AVAILABILITY",
    secondaryButtonHref: "/contact",
    stats: [
      { val: 99.9, decimals: 1, suffix: "%", label: "Contractual SLA" },
      { val: 100, suffix: " Gbps", label: "Metro Backbone Ring" },
      { val: 1, prefix: "1:", suffix: " Sym", label: "Zero Throttle / No FUP" },
      { val: 24, suffix: "/7 NOC", label: "Gulberg-III Support" },
    ],
  },
  {
    id: "dedicated-internet",
    pillBadge: "CORPORATE & ENTERPRISE CONNECTIVITY",
    pillIcon: <Server className="w-3.5 h-3.5 text-brand-orange" />,
    subtitle: "MISSION-CRITICAL BANDWIDTH WITH CONTRACTUAL SLA",
    titleLight: "GUARANTEED 1:1",
    titleBold: "DEDICATED INTERNET",
    description:
      "Enterprise-class DIA delivering uncontended symmetrical throughput, static IPv4/IPv6 BGP subnets, and direct peering to major cloud exchanges for banks, hospitals, and software houses.",
    primaryButtonText: "EXPLORE DIA SOLUTIONS",
    primaryButtonHref: "/services",
    secondaryButtonText: "REQUEST FEASIBILITY",
    secondaryButtonHref: "/contact",
    stats: [
      { val: 500, prefix: "", suffix: "+", label: "Corporate Leased Lines" },
      { val: 99.99, decimals: 2, suffix: "%", label: "Optical Core Availability" },
      { val: 30, prefix: "< ", suffix: " min", label: "On-Site MTTR Dispatch" },
      { val: 0, suffix: "% Loss", label: "Zero Jitter Packet Flow" },
    ],
  },
  {
    id: "data-connectivity",
    pillBadge: "METRO ETHERNET & DARK FIBER",
    pillIcon: <Zap className="w-3.5 h-3.5 text-brand-orange" />,
    subtitle: "PRIVATE SECURE OPTICAL TRANSMISSION ACROSS LAHORE",
    titleLight: "HIGH-CAPACITY",
    titleBold: "DATA CONNECTIVITY",
    description:
      "Interconnect your corporate headquarters, multi-branch operations, campus sites, and disaster recovery data centers across Lahore with sub-millisecond private Layer-2 optical circuits.",
    primaryButtonText: "METRO ETHERNET SPECS",
    primaryButtonHref: "/services",
    secondaryButtonText: "CONTACT ENGINEERING",
    secondaryButtonHref: "/contact",
    stats: [
      { val: 1.2, decimals: 1, prefix: "< ", suffix: " ms", label: "Intra-City Metro Latency" },
      { val: 40, suffix: " Gbps", label: "Protected Ring Links" },
      { val: 50, prefix: "< ", suffix: " ms", label: "Auto Ring Failover" },
      { val: 100, suffix: "% Fiber", label: "Pure Underground Optical" },
    ],
  },
  {
    id: "careers-spotlight",
    pillBadge: "WE ARE HIRING IN GULBERG-III, LAHORE",
    pillIcon: <Briefcase className="w-3.5 h-3.5 text-brand-orange" />,
    subtitle: "GROW YOUR CAREER IN TELECOMMUNICATIONS & NETWORK ENGINEERING",
    titleLight: "BUILD THE FUTURE AT",
    titleBold: "Z COM NETWORKS",
    description:
      "Join our fast-expanding team in Lahore. We are hiring NOC Network Engineers (L1/L2), Fiber Optic Splicing Technicians, Enterprise B2B Account Managers, and Customer Support Specialists.",
    primaryButtonText: "EXPLORE OPEN POSITIONS",
    primaryButtonHref: "/careers",
    secondaryButtonText: "SEND RESUME VIA EMAIL",
    secondaryButtonHref: "mailto:sales@zcomnetworks.com.pk?subject=Job%20Application%20-%20Z%20COM%20Networks",
    stats: [
      { val: 5, suffix: " Openings", label: "Active Job Positions" },
      { val: 100, suffix: "%", label: "Competitive Salaries" },
      { val: 1, suffix: " Prime HQ", label: "Main Blvd Gulberg-III" },
      { val: 365, suffix: " Days", label: "Continuous Career Growth" },
    ],
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = SLIDES.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play timer (rotates every 6 seconds if not hovered)
  useEffect(() => {
    if (isPaused) return;

    slideTimerRef.current = setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  const slide = SLIDES[currentSlide];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 sm:pt-24 lg:pt-28 lg:pb-20 overflow-hidden bg-transparent text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Soft Radial Mask for crisp text contrast over the sticky 3D background */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-100/30 dark:from-black/10 dark:via-black/30 dark:to-[#060810]/50 pointer-events-none -z-10" />

      {/* Slide Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7">
        {/* Dynamic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-orange-500/10">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
          <span>{slide.pillBadge}</span>
        </div>

        {/* 0.5s Continuous Speed Loop Badge: "GET THE SPEED YOU NEED" */}
        <div className="flex justify-center pt-0.5">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-600/40 via-brand-orange/50 to-amber-500/40 border-2 border-brand-orange text-white shadow-xl shadow-brand-orange/30 backdrop-blur-md animate-speed-loop-half">
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-white font-heading drop-shadow-md">
              GET THE SPEED YOU NEED
            </span>
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse shrink-0" />
          </div>
        </div>

        {/* Main Cinematic Heading (Stacked Layout from screenshot) */}
        <div key={slide.id} className="space-y-1 sm:space-y-2 animate-in fade-in zoom-in-95 duration-500">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-slate-800 dark:text-white tracking-[0.22em] uppercase font-heading drop-shadow-sm">
            {slide.titleLight}
          </h1>
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tight uppercase font-heading drop-shadow-md">
            {slide.titleBold.split(" ")[0]}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 dark:from-white dark:via-orange-200 dark:to-brand-orange">
              {slide.titleBold.split(" ").slice(1).join(" ")}
            </span>
          </h2>
        </div>

        {/* Description Text (high-contrast text) */}
        <p className="text-base sm:text-xl text-slate-600 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed font-sans">
          {slide.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href={slide.primaryButtonHref}
            className="inline-flex items-center gap-2.5 bg-[#0070F3] hover:bg-[#005fd2] text-white font-bold text-sm sm:text-base px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
          >
            <span>{slide.primaryButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={slide.secondaryButtonHref}
            className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-sm sm:text-base px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl transition-all duration-200 shadow-xl shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:-translate-y-0.5"
          >
            <span>{slide.secondaryButtonText}</span>
          </Link>
        </div>

        {/* Real-time Animated Number Counters (Count up from 0 to max upon view) */}
        <div className="pt-8 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 dark:border-white/10 text-center">
          {slide.stats.map((st, i) => (
            <div key={i} className={`p-2.5 ${i > 0 ? "sm:border-l sm:border-slate-200 dark:sm:border-white/10" : ""}`}>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading">
                <AnimatedCounter
                  from={0}
                  to={st.val}
                  decimals={st.decimals || 0}
                  prefix={st.prefix || ""}
                  suffix={st.suffix}
                  duration={1800}
                />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-300 font-semibold mt-1">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Navigation Controls */}

      {/* 1. Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 dark:bg-black/40 hover:bg-brand-orange dark:hover:bg-brand-orange text-slate-800 dark:text-white hover:text-white dark:hover:text-white items-center justify-center border border-slate-200 dark:border-white/10 shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* 2. Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 dark:bg-black/40 hover:bg-brand-orange dark:hover:bg-brand-orange text-slate-800 dark:text-white hover:text-white dark:hover:text-white items-center justify-center border border-slate-200 dark:border-white/10 shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 3. Vertical Pagination Dot Indicators on the Right Side */}
      <div className="hidden lg:flex flex-col gap-3 absolute right-6 top-1/2 -translate-y-1/2 z-20">
        {SLIDES.map((s, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                isActive
                  ? "w-3.5 h-3.5 bg-brand-orange ring-4 ring-brand-orange/20 shadow-lg shadow-brand-orange/50"
                  : "w-2.5 h-2.5 bg-slate-300 dark:bg-white/40 hover:bg-slate-400 dark:hover:bg-white"
              }`}
            />
          );
        })}
      </div>

      {/* 4. Horizontal Dots for Mobile / Tablet */}
      <div className="flex lg:hidden items-center justify-center gap-2 absolute bottom-5 inset-x-0 z-20">
        {SLIDES.map((s, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? "w-6 h-2 bg-brand-orange"
                  : "w-2 h-2 bg-slate-300 dark:bg-white/40 hover:bg-slate-400 dark:hover:bg-white"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
