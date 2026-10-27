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
  Zap,
  Clock,
  Layers,
  Compass,
  Target,
  ChevronRight,
} from "lucide-react";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MinimalistBanner, { BannerImage, BannerBadge, BannerHeadline, BannerSubtext } from "@/components/ui/MinimalistBanner";
import InfrastructureLoopSlider from "@/components/ui/InfrastructureLoopSlider";
import ScrollReveal, { StaggerContainer } from "@/components/ui/ScrollReveal";

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
    <div className="relative transition-colors duration-300 -mt-20 sm:-mt-24 space-y-20 sm:space-y-28 pb-16">
      {/* ============================================================
          1. CLEAN FULL-WIDTH HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <MinimalistBanner className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: Full-Width Dedicated Banner Image */}
        <BannerImage className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/about/hero-banner.jpg"
            alt="About Z COM Networks - Executive Architecture & Carrier-Grade Network Fabric"
            fill
            priority
            unoptimized
            className="object-cover object-center scale-100"
          />
          {/* Cinematic Dark Gradient Overlays for Maximum Legibility & Visual Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
        </BannerImage>

        {/* Layer 1: Minimalist Clean Foreground Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl space-y-6">
            
            {/* Breadcrumb & Status Pill */}
            <BannerBadge className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
              <nav className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-300">
                <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
                <span className="text-slate-500">/</span>
                <span className="text-brand-orange font-bold">About Us</span>
              </nav>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 backdrop-blur-md border border-brand-orange/40 text-brand-orange text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT Z COM NETWORKS</span>
              </div>
            </BannerBadge>

            {/* Bold Clear Headline */}
            <BannerHeadline>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.1] drop-shadow-md">
              Engineering Next-Generation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                Carrier-Grade Connectivity
              </span>
            </h1>
            </BannerHeadline>

            {/* Concise Value Description */}
            <BannerSubtext>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Built on the core principle that modern enterprises and mission-critical institutions require uncontended, carrier-grade optical connectivity without compromise.
            </p>
            </BannerSubtext>

          </div>
        </div>
      </MinimalistBanner>

      {/* ============================================================
          2. MISSION & VISION DUAL CARDS (PLACED DIRECTLY BELOW BANNER)
          ============================================================ */}
      <ScrollReveal variant="fade-up" as="section" id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </ScrollReveal>

      {/* ============================================================
          3. EXECUTIVE LEADERSHIP: CEO MUDASIR RIAZ & CFO MUBASIR RIAZ
          ============================================================ */}
      <ScrollReveal variant="fade-up" as="section" id="leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
          <div className="group relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between space-y-8 layout-card-hover">
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
          <div className="group relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between space-y-8 layout-card-hover">
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
      </ScrollReveal>

      {/* ============================================================
          3. INTERACTIVE INFRASTRUCTURE LOOP SLIDER
          ============================================================ */}
      <ScrollReveal variant="fade-up" as="section" id="infrastructure" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
      </ScrollReveal>

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

        <StaggerContainer staggerMs={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200/90 space-y-3 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-brand-orange/60 transition-all duration-300 layout-card-hover"
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
        </StaggerContainer>
      </section>

      {/* ============================================================
          6. BOTTOM CALL TO ACTION (COLORFUL & VIBRANT GRADIENT)
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
              <span className="text-white">TAKE THE NEXT STEP</span>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Experience the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                Z COM Difference
              </span>{" "}
              Today
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Contact our executive team for a customized enterprise connectivity proposal or dedicated connection setup.
            </p>

            <div className="pt-3 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-brand-orange text-white font-extrabold text-sm sm:text-base py-4 px-10 rounded-2xl transition-all shadow-xl shadow-brand-orange/40 hover:shadow-brand-orange/60 hover:scale-105"
              >
                <span>Get Connected With Us</span>
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
