import React from "react";
import Link from "next/link";
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
    <div className="py-12 sm:py-20 space-y-24">
      {/* Page Header - Sign In style highlighted pill */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-brand-orange/15 border border-orange-200 dark:border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>THE Z COM ADVANTAGE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
          A WHOLE NEW <span className="text-brand-orange">INTERNET EXPERIENCE</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Discover why hundreds of organizations and thousands of homes in Lahore rely on Z COM
          Networks every single day for mission-critical, unthrottled fiber connectivity.
        </p>

        {/* 4 Core SLA & Performance Benchmark Counters */}
        <div className="pt-6 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm text-center">
            <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block">
              <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" />
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1 block">
              Contractual SLA
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm text-center">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={100} suffix=" Gbps" />
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1 block">
              Backbone Core Ring
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm text-center">
            <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block">
              <AnimatedCounter from={0} to={1} prefix="1:" suffix=" Sym" />
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1 block">
              Zero Bandwidth Throttling
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm text-center">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={24} suffix="/7/365" />
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1 block">
              Gulberg NOC Dispatch
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          NETWORK COVERAGE & TRANSMISSION GRID VIDEO ANIMATION
          ============================================================ */}
      <section id="coverage-map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
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
            <video
              src="/videos/network-map.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
              className="w-full h-auto max-h-[620px] object-contain mx-auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#12161F] p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 space-y-3 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-brand-orange/60 transition-all duration-300"
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
        </div>
      </section>

      {/* Technical Comparison Matrix */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>



      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#12161F] p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 text-center space-y-6 shadow-xl shadow-slate-200/50 dark:shadow-black/50">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Ready to Connect Your Organization?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-xl mx-auto">
            Book a complimentary optical site survey with our network engineering team in Lahore.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              <span>Schedule Free Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
