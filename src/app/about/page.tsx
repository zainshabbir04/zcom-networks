import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ShieldCheck,
  Star,
  Lightbulb,
  Link as LinkIcon,
  Search,
  Users,
  Shield,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Quote,
  MapPin,
  Building,
  Zap,
  Clock,
  Layers,
  Compass,
  Target,
  ChevronRight,
} from "lucide-react";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import InfrastructureLoopSlider from "@/components/ui/InfrastructureLoopSlider";
import PartnersMarquee from "@/components/ui/PartnersMarquee";

export const metadata: Metadata = {
  title: "About Us | Executive Leadership & Optical Infrastructure | Z COM Networks",
  description:
    "Learn about Z COM Networks Private Limited — premier enterprise optical ISP. Meet CEO Mudasir Riaz, CFO Mubasir Riaz, explore our metro network backbone, mission, vision, and 24/7 Gulberg NOC.",
};

const CORE_VALUES: { icon: React.ReactNode; title: string; desc: React.ReactNode }[] = [
  {
    icon: <Star className="w-6 h-6 text-brand-orange" />,
    title: "Customer-First Engineering",
    desc: (
      <>
        We prioritize our clients&apos; mission-critical operations, ensuring{" "}
        <AnimatedCounter from={0} to={24} suffix="/7" /> direct escalation to Level-
        <AnimatedCounter from={0} to={3} /> certified network engineers rather than tiered call center scripts.
      </>
    ),
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-brand-orange" />,
    title: "Relentless Innovation",
    desc: (
      <>
        We continuously modernize our core transmission transport with scalable{" "}
        <AnimatedCounter from={0} to={100} suffix="G" /> DWDM hardware, native IPv
        <AnimatedCounter from={0} to={6} /> dual-stacking, and automated OTDR network reflection telemetry.
      </>
    ),
  },
  {
    icon: <LinkIcon className="w-6 h-6 text-brand-orange" />,
    title: "Uncompromising Reliability",
    desc: (
      <>
        Every corporate leased line and enterprise circuit is provisioned with true{" "}
        <AnimatedCounter from={0} to={1} prefix="1:" suffix=" symmetrical throughput" /> and
        self-healing ring auto-failover in &lt;
        <AnimatedCounter from={0} to={50} suffix="ms" />.
      </>
    ),
  },
  {
    icon: <Search className="w-6 h-6 text-brand-orange" />,
    title: "Absolute Transparency",
    desc: "Zero hidden Fair Usage Policies (FUP), no artificial peak-hour throttling, and contractual Service Level Agreements (SLAs) enforced 24/7.",
  },
  {
    icon: <Users className="w-6 h-6 text-brand-orange" />,
    title: "Institutional Empowerment",
    desc: "Headquartered in Gulberg-III, we actively power premier tertiary hospitals, universities, software export hubs, and enterprise complexes.",
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-orange" />,
    title: "Ethical Corporate Governance",
    desc: "We uphold the highest ethical standards in all commercial contracts, data sovereignty policies, and telecom regulatory compliance.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-16 space-y-20 sm:space-y-28 transition-colors duration-300">
      {/* ============================================================
          1. OUTSTANDING CINEMATIC HERO BANNER
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-slate-800 shadow-2xl">
          {/* Layer 0: User-Uploaded Majestic Architecture Image (Guaranteed 100% Visible) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/about/hero-banner.jpg"
              alt="Z COM Executive Architecture and Carrier-Grade Network Fabric"
              fill
              priority
              unoptimized
              className="object-cover object-center scale-100"
            />
            {/* Subtle Ambient Vignette & Warm Orange Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080D]/95 via-[#07090E]/40 to-[#07090E]/75" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
          </div>

          {/* Layer 1: Foreground Content Over Banner (Compact & Balanced Height) */}
          <div className="relative z-10 min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] w-full flex flex-col justify-between p-5 sm:p-8 lg:p-10">
            {/* Top Telemetry Header Block */}
            <div className="pt-8 sm:pt-12 max-w-4xl mx-auto text-center space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-2xl border border-white/25 text-brand-orange text-xs font-bold uppercase tracking-wider shadow-xl">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span className="text-white">ABOUT Z COM NETWORKS PRIVATE LIMITED</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight drop-shadow-md">
                Engineering Next-Generation{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                  Carrier-Grade Connectivity
                </span>
              </h1>

              <p className="text-xs sm:text-sm lg:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
                Built on the core principle that modern enterprises and mission-critical institutions
                require uncontended, carrier-grade internet without compromise. Today, Z COM powers
                commercial towers, healthcare complexes, educational campuses, and corporate headquarters.
              </p>

              {/* Quick Action Navigation Buttons */}
              <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#leadership"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
                >
                  <span>Executive Leadership</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href="#infrastructure"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white border border-white/30 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5"
                >
                  <span>Infrastructure Showcase</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white border border-white/30 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>

            {/* 4 Floating Telemetry Glassmorphism Metric Hub */}
            <div className="pt-8 sm:pt-10 max-w-5xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
              <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all duration-300 text-center group">
                <div className="w-8 h-8 mx-auto rounded-lg bg-brand-orange/25 text-brand-orange flex items-center justify-center mb-1.5">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                  <AnimatedCounter from={0} to={1200} suffix="+ km" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                  Subterranean Metro Core
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">
                  Armored Ring Conduits
                </span>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all duration-300 text-center group">
                <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                  <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                  Contractual Core SLA
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">
                  Zero Packet Loss Standard
                </span>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all duration-300 text-center group">
                <div className="w-8 h-8 mx-auto rounded-lg bg-brand-orange/25 text-brand-orange flex items-center justify-center mb-1.5">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                  <AnimatedCounter from={0} to={500} suffix="+" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                  Corporate Leased Lines
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">
                  1:1 Symmetrical Bandwidth
                </span>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all duration-300 text-center group">
                <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                  <AnimatedCounter from={0} to={24} suffix="/7/365" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                  Gulberg-III Local NOC
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">
                  Level-3 Dedicated Engineers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. EXECUTIVE LEADERSHIP: CEO MUDASIR RIAZ & CFO MUBASIR RIAZ
          ============================================================ */}
      <section id="leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>EXECUTIVE LEADERSHIP TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Visionary Leadership Driving Innovation
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Meet the leaders spearheading Z COM Networks&apos; mission to deliver the fastest,
            most resilient carrier-grade optical infrastructure across enterprise corridors.
          </p>
        </div>

        {/* Executive Cards Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: CEO Mudasir Riaz */}
          <div className="group relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Header with Large Portrait & Primary Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Executive Portrait Frame */}
                <div className="relative w-48 sm:w-52 lg:w-56 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md p-2 group-hover:border-brand-orange/50 transition-colors">
                    <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-white">
                      <Image
                        src="/images/leadership/mudasir-riaz-ceo.jpg"
                        alt="Mudasir Riaz - Chief Executive Officer (CEO) & Co-Founder Z COM Networks"
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 200px, 250px"
                        className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </div>
                    {/* Status Pill */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/90 shadow-sm flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                      <span>Executive Board</span>
                    </div>
                  </div>
                </div>

                {/* Executive Credentials & Titles */}
                <div className="space-y-2.5 text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 border border-brand-orange/30 text-brand-orange">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CHIEF EXECUTIVE OFFICER</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                    Mudasir Riaz
                  </h3>

                  <p className="text-sm font-semibold text-slate-700">
                    Chief Executive Officer (CEO) &amp; Co-Founder
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-brand-orange font-semibold pt-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>Gulberg-III Corporate Headquarters</span>
                  </div>

                  {/* Highlights Bar */}
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center sm:text-left">
                      <span className="text-xs font-bold text-slate-900 block font-heading">
                        <AnimatedCounter from={0} to={1200} suffix="+ km" />
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        Metro Optical Conduits
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center sm:text-left">
                      <span className="text-xs font-bold text-slate-900 block font-heading">
                        <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" /> SLA
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        Core Uptime Guarantee
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Track Record */}
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-5">
                <p>
                  As Chief Executive Officer and visionary co-founder of Z COM Networks, <strong>Mudasir Riaz</strong> has
                  spearheaded the company&apos;s transformation from a local telecom challenger into one of the region&apos;s
                  most trusted carrier-grade optical ISPs.
                </p>
                <p>
                  With extensive background in optical telecommunications engineering, transmission systems, and
                  telecom regulatory governance, Mudasir champions a culture of uncompromising SLA delivery. He has
                  overseen the deployment of more than <AnimatedCounter from={0} to={1200} suffix="+" /> kilometers of
                  subterranean armored conduits across regional business sectors, establishing critical interconnects
                  along M-<AnimatedCounter from={0} to={2} />, M-<AnimatedCounter from={0} to={11} />, and the GT Road corridor.
                </p>
              </div>

              {/* Quote Block */}
              <div className="relative rounded-2xl bg-gradient-to-r from-orange-50/70 via-slate-50/60 to-white border-l-4 border-brand-orange border border-slate-200/80 p-5 space-y-2">
                <Quote className="w-5 h-5 text-brand-orange/60" />
                <p className="text-xs sm:text-sm italic font-medium text-slate-800 leading-relaxed">
                  &ldquo;Our foundational promise at Z COM Networks has never wavered: to build a transmission network
                  so resilient and fast that modern enterprises never have to compromise on bandwidth. Every kilometer
                  of network infrastructure we lay is engineered for future generations.&rdquo;
                </p>
                <div className="text-xs font-bold text-brand-orange">
                  &mdash; Mudasir Riaz, CEO
                </div>
              </div>

              {/* Competencies Badges */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Strategic Domain Focus
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Optical Network Architecture",
                    "DWDM Core Strategy",
                    "Telecom Regulatory Compliance",
                    "Enterprise SLA Accountability",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100/80 text-slate-800 border border-slate-200/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: CFO Mubasir Riaz */}
          <div className="group relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Header with Large Portrait & Primary Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Executive Portrait Frame */}
                <div className="relative w-48 sm:w-52 lg:w-56 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md p-2 group-hover:border-brand-orange/50 transition-colors">
                    <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-white">
                      <Image
                        src="/images/leadership/mubasir-riaz-cfo.jpg"
                        alt="Mubasir Riaz - Chief Financial Officer (CFO) & Co-Founder Z COM Networks"
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 200px, 250px"
                        className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </div>
                    {/* Status Pill */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/90 shadow-sm flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                      <span>Executive Board</span>
                    </div>
                  </div>
                </div>

                {/* Executive Credentials & Titles */}
                <div className="space-y-2.5 text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 border border-brand-orange/30 text-brand-orange">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>CHIEF FINANCIAL OFFICER</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                    Mubasir Riaz
                  </h3>

                  <p className="text-sm font-semibold text-slate-700">
                    Chief Financial Officer (CFO) &amp; Co-Founder
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-brand-orange font-semibold pt-1">
                    <Building className="w-3.5 h-3.5 shrink-0" />
                    <span>Fiscal Governance &amp; Capital Planning</span>
                  </div>

                  {/* Highlights Bar */}
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center sm:text-left">
                      <span className="text-xs font-bold text-slate-900 block font-heading">
                        <AnimatedCounter from={0} to={100} suffix="%" /> Debt-Free
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        Core Ring Infrastructure
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center sm:text-left">
                      <span className="text-xs font-bold text-slate-900 block font-heading">
                        Tier-<AnimatedCounter from={0} to={1} /> Assets
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        Cisco &amp; Juniper Routing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Track Record */}
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-5">
                <p>
                  As Chief Financial Officer and co-founder, <strong>Mubasir Riaz</strong> oversees financial strategy,
                  capital investments in next-generation optical infrastructure, asset stewardship, and commercial
                  risk management at Z COM Networks.
                </p>
                <p>
                  Mubasir has been instrumental in structuring strategic capital allocations that enabled Z COM to acquire
                  Tier-<AnimatedCounter from={0} to={1} /> routing assets from Cisco and Juniper, deploy cutting-edge
                  subscriber distribution, and maintain a robust, debt-efficient balance sheet. His leadership ensures
                  clients receive competitive, transparent enterprise pricing without hidden surcharges or unpredictable bandwidth billing.
                </p>
              </div>

              {/* Quote Block */}
              <div className="relative rounded-2xl bg-gradient-to-r from-orange-50/70 via-slate-50/60 to-white border-l-4 border-brand-orange border border-slate-200/80 p-5 space-y-2">
                <Quote className="w-5 h-5 text-brand-orange/60" />
                <p className="text-xs sm:text-sm italic font-medium text-slate-800 leading-relaxed">
                  &ldquo;Sustainable telecommunications infrastructure demands disciplined capital allocation and long-term
                  vision. At Z COM, our financial strategy is directly aligned with engineering excellence &mdash; ensuring
                  continuous reinvestment into network resilience and local customer support.&rdquo;
                </p>
                <div className="text-xs font-bold text-brand-orange">
                  &mdash; Mubasir Riaz, CFO
                </div>
              </div>

              {/* Competencies Badges */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Strategic Domain Focus
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Capital Infrastructure Investment",
                    "Fiscal Governance & Sustainability",
                    "Optical Asset Procurement",
                    "Transparent Enterprise Pricing",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100/80 text-slate-800 border border-slate-200/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. INTERACTIVE INFRASTRUCTURE LOOP SLIDER
          ============================================================ */}
      <section id="infrastructure" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE INFRASTRUCTURE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Behind Our <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" /> Reliability Guarantee
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Explore the physical optical conduits, carrier-grade <AnimatedCounter from={0} to={100} suffix="G" /> DWDM core rings, and <AnimatedCounter from={0} to={24} suffix="/7" /> Gulberg NOC
            that power our uninterrupted connectivity.
          </p>
        </div>

        <InfrastructureLoopSlider />
      </section>

      {/* ============================================================
          4. MISSION & VISION DUAL CARDS
          ============================================================ */}
      <section id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-orange-500/30 space-y-4 shadow-xl shadow-orange-500/5 hover:border-brand-orange transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 text-brand-orange flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block">
              OUR MISSION
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Bridging Distances &amp; Fostering Global Communication
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              Z COM aims to bridge distances and foster global communication with fast, dependable
              high-speed internet access. With guaranteed <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" /> uptime SLA, we ensure efficient and seamless
              connectivity for every business and home we serve across commercial and enterprise sectors.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 space-y-4 shadow-xl shadow-slate-200/50 hover:border-brand-orange/60 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-brand-orange flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block">
              OUR VISION
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Ubiquitous &amp; Empowering High-Speed Connectivity
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              A world where carrier-grade high-speed internet is ubiquitous, empowering individuals and
              organizations to innovate without latency or limits &mdash; ensuring <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" /> network
              uptime and <AnimatedCounter from={0} to={100} suffix="%" /> customer satisfaction through exceptional optical service.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. 6 GUIDING CORE VALUES
          ============================================================ */}
      <section id="values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
            HOW WE OPERATE
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
            Our <AnimatedCounter from={0} to={6} /> Guiding Core Values
          </h2>
          <p className="text-sm text-slate-600">
            Principles that direct every transmission link we commission, every server we deploy, and every enterprise client we support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200/90 space-y-3 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-brand-orange/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 text-brand-orange">
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                {val.title}
              </h3>
              <div className="text-sm text-slate-600 leading-relaxed">
                {val.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          6. GLOBAL TECHNOLOGY PARTNERS MARQUEE LOOP
          ============================================================ */}
      <section className="py-12 bg-slate-100/60 backdrop-blur-md border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
            POWERED BY GLOBAL HARDWARE LEADERS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
            Enterprise Optical Routing Partners
          </h2>
        </div>
        <PartnersMarquee />
      </section>

      {/* ============================================================
          7. BOTTOM CALL TO ACTION
          ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 text-center space-y-6 shadow-xl shadow-slate-200/50">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Experience the Z COM Difference Today
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Contact our executive team for a customized enterprise connectivity proposal or dedicated connection setup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Get Connected With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/923171118042"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-brand-orange text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
