import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Zap,
  ShieldCheck,
  Radio,
  Cpu,
  Clock,
  Layers,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Check,
  X,
  MapPin,
} from "lucide-react";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import NetworkLoopVideo from "@/components/ui/NetworkLoopVideo";
import ScrollReveal, { StaggerContainer } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Why Choose Us | Z COM Networks Private Limited",
  description:
    "Discover why businesses and homeowners across Lahore trust Z COM Networks — animated optical coverage map, blazing fast symmetrical fiber, 99.9% uptime, 24/7 local support, and industry-leading technology.",
};

const REASONS = [
  {
    icon: <Zap className="w-6 h-6 text-brand-orange" />,
    title: "Blazing Fast Speed",
    desc: "Lightning-fast speed for streaming, gaming or working from home with our advanced fiber-optic network.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
    title: "Unbeatable Reliability",
    desc: "Seamless 24/7 connectivity on robust fiber infrastructure, with a 99.9% uptime guarantee.",
  },
  {
    icon: <Radio className="w-6 h-6 text-brand-orange" />,
    title: "Symmetrical Speed",
    desc: "Equal upload and download speeds — perfect for video conferencing, gaming and large file uploads.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-brand-orange" />,
    title: "Future-Proof Technology",
    desc: "Fiber-optic internet is the future of connectivity, ensuring your needs are met for years to come.",
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-orange" />,
    title: "Exceptional Customer Service",
    desc: "A friendly, knowledgeable support team always ready to assist, ensuring an exceptional experience.",
  },
  {
    icon: <Layers className="w-6 h-6 text-brand-orange" />,
    title: "Competitive Pricing",
    desc: "Cutting-edge fiber internet at competitive prices, offering you the best value for your money.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-brand-orange" />,
    title: "Local Support, Global Reach",
    desc: "Reliable, high-speed service wherever you are, backed by our extensive Lahore network.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-brand-orange" />,
    title: "Commitment to Innovation",
    desc: "We continuously invest in new technologies and infrastructure to keep our service ahead of the curve.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Physical Transport Medium",
    zcom: "100% Pure Optical Fiber to the Premises",
    traditional: "Aging copper cables / hybrid shared coax",
  },
  {
    feature: "Upload & Download Speeds",
    zcom: "100% Symmetrical (Equal Upload and Download)",
    traditional: "Asymmetrical (Upload capped at 5-10%)",
  },
  {
    feature: "Data Limits & Fair Usage",
    zcom: "Truly Unlimited — Zero FUP Throttling",
    traditional: "Fair Usage Policies with restrictive throttles",
  },
  {
    feature: "Service Level Agreement (SLA)",
    zcom: "99.9% Contractual Uptime SLA",
    traditional: "Best-effort with no financial SLA commitment",
  },
  {
    feature: "Local NOC & Technical Dispatch",
    zcom: "24/7 Local Lahore NOC & Rapid Field Technicians",
    traditional: "Outsourced call centers & days-long turnaround",
  },
  {
    feature: "Next-Gen Internet Protocol",
    zcom: "Native Dual-Stack IPv6 & IPv4 Enabled",
    traditional: "Carrier-grade NAT & legacy IPv4 only",
  },
  {
    feature: "Site Survey & Installation",
    zcom: "Free On-Site Survey & Free Standard Activation",
    traditional: "Opaque installation and router setup surcharges",
  },
];

export default function WhyUsPage() {
  return (
    <div className="relative transition-colors duration-300 space-y-20 sm:space-y-28 pb-16">
      
      {/* ============================================================
          1. OUTSTANDING CINEMATIC HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <section className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: User-Uploaded Dedicated Banner Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/why-us/hero-banner.jpg"
            alt="Why Choose Z COM Networks - Carrier-Grade Optical Infrastructure"
            fill
            priority
            unoptimized
            className="object-cover object-center scale-100"
          />
          {/* Cinematic Dark Gradient Overlays for Maximum Legibility & Visual Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Layer 1: Foreground Content Over Banner */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl space-y-6">
            
            {/* Breadcrumb & Status Pill */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
              <nav className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-300">
                <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
                <span className="text-slate-500">/</span>
                <span className="text-brand-orange font-bold">Why Choose Us</span>
              </nav>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 backdrop-blur-md border border-brand-orange/40 text-brand-orange text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE Z COM ADVANTAGE</span>
              </div>
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.1] drop-shadow-md">
              A Whole New <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                Internet Experience
              </span>
            </h1>

            {/* Concise Value Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Discover why hundreds of organizations rely on Z COM Networks every single day for mission-critical, unthrottled, carrier-grade optical connectivity.
            </p>

            {/* 4 Core SLA & Benchmark Live Counters */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <div className="p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all text-center sm:text-left">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block">Contractual SLA</span>
                <span className="text-[10px] text-slate-400 font-medium block">Uptime Standard</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all text-center sm:text-left">
                <span className="text-xl sm:text-2xl font-black text-white font-heading block">
                  <AnimatedCounter from={0} to={100} suffix="G" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block">Core Ring</span>
                <span className="text-[10px] text-slate-400 font-medium block">Optical Backbone</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all text-center sm:text-left">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  <AnimatedCounter from={0} to={1} prefix="1:" suffix=" Sym" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block">Zero Throttling</span>
                <span className="text-[10px] text-slate-400 font-medium block">Uncontended DIA</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all text-center sm:text-left">
                <span className="text-xl sm:text-2xl font-black text-white font-heading block">
                  <AnimatedCounter from={0} to={24} suffix="/7/365" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block">NOC Dispatch</span>
                <span className="text-[10px] text-slate-400 font-medium block">Proactive Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          NETWORK COVERAGE & TRANSMISSION GRID VIDEO ANIMATION
          ============================================================ */}
      <ScrollReveal variant="fade-up" as="section" id="coverage-map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>OPTICAL FOOTPRINT &amp; TRANSMISSION GRID</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
            Where Internet is Provided Across Cities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Explore our optical fiber transmission grid across major metropolises and our
            dense metro fiber ring connecting all key business and residential zones.
          </p>
        </div>

        {/* High-Definition Network Animation Video Player */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Ambient Orange Glow behind the video card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/30 via-orange-500/15 to-amber-500/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
          
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-black shadow-2xl">
            <NetworkLoopVideo
              src="/videos/network-map.mp4"
              className="w-full h-auto max-h-[620px] object-contain mx-auto"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* 8 Reasons Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
            <AnimatedCounter from={0} to={8} /> REASONS TO PARTNER WITH US
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Engineered for Maximum Speed &amp; Stability
          </h2>
        </div>

        <StaggerContainer staggerMs={80} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#12161F] p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 space-y-3 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-brand-orange/60 transition-all duration-300 layout-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 flex items-center justify-center border border-orange-500/20 text-brand-orange">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </section>

      {/* Technical Comparison Matrix */}
      <ScrollReveal variant="fade-up" as="section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
            SPECIFICATION BENCHMARK
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Z COM Pure Fiber vs Conventional Broadband
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            A side-by-side comparison illustrating why dedicated optical fiber offers an unmatched
            experience.
          </p>
        </div>

        <div className="bg-white dark:bg-[#12161F] rounded-3xl border border-slate-200/90 dark:border-slate-700/60 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200/90 dark:border-slate-700/60 bg-slate-50 dark:bg-[#0E1118]">
                  <th className="py-5 px-6 font-heading font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wider">
                    Feature / Standard
                  </th>
                  <th className="py-5 px-6 font-heading font-bold text-brand-orange text-xs uppercase tracking-wider bg-orange-500/10 border-x border-orange-500/20">
                    Z COM Networks Fiber
                  </th>
                  <th className="py-5 px-6 font-heading font-bold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                    Conventional Broadband
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-orange-50/30 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-medium text-brand-orange bg-orange-50/40 border-x border-orange-200/60">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-orange shrink-0 stroke-[3]" />
                        <span>{row.zcom}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-slate-400 shrink-0 stroke-[2.5]" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>



      {/* ============================================================
          BOTTOM CALL TO ACTION (MATCHING ABOUT US COLOR SCHEME)
          ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scale-in">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B0F19] via-[#141B2B] to-[#1A120B] border border-orange-500/40 p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-2xl shadow-orange-500/20 layout-card-hover">
          {/* Colorful Vibrant Ambient Mesh Lighting */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-brand-orange via-orange-500 to-amber-400 rounded-full blur-[90px] opacity-35 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tl from-orange-600 via-brand-orange to-amber-500 rounded-full blur-[90px] opacity-40 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-brand-orange/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Card Foreground Content */}
          <div className="relative z-10 space-y-5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-white">DIRECT ENTERPRISE ONBOARDING</span>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Ready to Connect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                Your Organization?
              </span>
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Book a complimentary optical site survey and custom feasibility assessment with our senior certified network engineering team.
            </p>

            <div className="pt-3 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-brand-orange text-white font-extrabold text-sm sm:text-base py-4 px-10 rounded-2xl transition-all shadow-xl shadow-brand-orange/40 hover:shadow-brand-orange/60 hover:scale-105"
              >
                <span>Schedule Free Site Survey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
