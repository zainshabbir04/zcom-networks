"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  category: "Healthcare" | "Hospitality" | "Tech & Software" | "Education" | "Financial";
  avatar: string;
  rating: number;
  uptime: string;
  bandwidth: string;
  verifiedSLA: string;
  quote: string;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "doctors-hospital",
    name: "Dr. Tariq Mahmood",
    title: "Chief of Biomedical Informatics & Systems",
    company: "Doctors Hospital & Medical Center",
    category: "Healthcare",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    uptime: "99.99%",
    bandwidth: "500 Mbps Dedicated DIA",
    verifiedSLA: "Tier-1 Mission Critical",
    highlight: "Zero downtime for PACS Imaging & Telemedicine",
    quote:
      "Z COM Networks delivers our critical ICU telemedicine and multi-gigabyte PACS radiology imaging links with uncompromised 1:1 symmetrical throughput. In over 3 years of continuous operation, their auto-failover protected ring has kept our emergency telemetry 100% online.",
  },
  {
    id: "systems-partner",
    name: "Ahmad Raza Khan",
    title: "VP of Cloud & DevOps Infrastructure",
    company: "Arfa Software Technology Park Enterprise Partner",
    category: "Tech & Software",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    uptime: "99.98%",
    bandwidth: "1 Gbps Symmetrical Leased Line",
    verifiedSLA: "Sub-1.5ms Local Latency",
    highlight: "Ultra-low jitter for 300+ remote engineers",
    quote:
      "When your engineering team is deploying continuous CI/CD pipelines to AWS and Azure, jitter and packet loss kill productivity. Z COM's direct BGP optical routing and sub-1.5ms intra-city ping give us the fastest cloud transit in the region.",
  },
  {
    id: "nishat-hospitality",
    name: "Hina Salman",
    title: "Chief Operating Officer",
    company: "Nishat Hospitality & Luxury Suites",
    category: "Hospitality",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    uptime: "99.95%",
    bandwidth: "300 Mbps Dedicated Fiber",
    verifiedSLA: "High-Density Wi-Fi Backbone",
    highlight: "Flawless coverage across 12 banquet halls",
    quote:
      "High-profile international guests and grand banquets demand bulletproof internet. Z COM Networks engineered a dedicated optical fiber conduit to our premises. Zero complaints, flawless streaming, and exceptional proactive support from their Gulberg team.",
  },
  {
    id: "umt-education",
    name: "Engr. Usman Farooq",
    title: "Director of ICT & Campus Networks",
    company: "University of Management & Technology (UMT)",
    category: "Education",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    uptime: "99.99%",
    bandwidth: "1.2 Gbps Campus Backbone",
    verifiedSLA: "Carrier-Grade Fiber Link",
    highlight: "Powering 14,000+ concurrent students",
    quote:
      "Supplying unthrottled symmetrical bandwidth to 14,000 students, video lecture halls, and research labs is an immense undertaking. Z COM Networks' dark fiber circuits provide rock-solid capacity with 0% fair-usage restrictions.",
  },
  {
    id: "financial-tower",
    name: "Bilal Siddiqui",
    title: "Head of Infrastructure & Security",
    company: "Gulberg Corporate Financial Tower",
    category: "Financial",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    uptime: "99.99%",
    bandwidth: "800 Mbps Redundant Dual-Path",
    verifiedSLA: "Financial Grade Dual Path",
    highlight: "Dedicated Level-3 NOC direct dispatch",
    quote:
      "In fintech, every millisecond counts. With Z COM, we have dual geographically diverse optical feeds. What impresses us most is their Gulberg-III NOC: whenever we call, we talk directly to senior network engineers, not automated queues.",
  },
];

export default function TestimonialsLoopSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide loop every 6 seconds if not hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <div
      className="relative w-full max-w-6xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Slider Navigation & Category Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shrink-0 ${
                activeIndex === idx
                  ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-105"
                  : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10"
              }`}
            >
              <span>{t.company.split(" ")[0]}</span>
              {activeIndex === idx && <Sparkles className="w-3 h-3 animate-spin" />}
            </button>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="w-10 h-10 rounded-full border border-slate-200/90 dark:border-slate-700/60 bg-white dark:bg-[#12161F] text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-200 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="w-10 h-10 rounded-full border border-slate-200/90 dark:border-slate-700/60 bg-white dark:bg-[#12161F] text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-200 shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Animated Card Showcase */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-700/60 bg-white dark:bg-[#12161F] shadow-2xl p-7 sm:p-12 transition-all duration-500">
        {/* Subtle Background Radial Gradient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Author, Company & Verified Telemetry Stats */}
          <div className="lg:col-span-5 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-700/60 pb-6 lg:pb-0 lg:pr-8">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-brand-orange shrink-0 shadow-lg">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-100 dark:bg-brand-orange/20 text-brand-orange">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{current.category}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-heading">
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {current.title}
                </p>
                <p className="text-xs text-brand-orange font-bold flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{current.company}</span>
                </p>
              </div>
            </div>

            {/* Star Rating Strip */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-brand-orange text-brand-orange"
                />
              ))}
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-2">
                <AnimatedCounter from={0} to={5.0} decimals={1} /> / 5.0 SLA Rating
              </span>
            </div>

            {/* Performance Telemetry Strip */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Measured Uptime
                </span>
                <span className="text-base sm:text-lg font-black text-brand-orange font-heading block mt-0.5">
                  <AnimatedCounter value={current.uptime} />
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  {current.verifiedSLA}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Deployed Circuit
                </span>
                <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-heading block mt-0.5">
                  <AnimatedCounter value={`${current.bandwidth.split(" ")[0]} ${current.bandwidth.split(" ")[1]}`} />
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-300 font-medium truncate block">
                  {current.bandwidth.split(" ").slice(2).join(" ")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Highlight & Verified Quote */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-brand-orange text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{current.highlight}</span>
            </div>

            <div className="relative">
              <Quote className="w-10 h-10 text-brand-orange/20 absolute -top-4 -left-4 -z-10" />
              <blockquote className="text-base sm:text-xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-700/60">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-orange" />
                <span>Verified Enterprise Contract · Metro Optical Backbone</span>
              </span>
              <span className="font-semibold text-slate-700 dark:text-gray-300">
                Slide {activeIndex + 1} of {TESTIMONIALS.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators & Auto-Loop Progress Bar */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to testimonial slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "w-8 bg-brand-orange"
                : "w-2.5 bg-slate-300 dark:bg-white/20 hover:bg-brand-orange/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
