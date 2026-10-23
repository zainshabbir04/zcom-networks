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
  Award,
  Briefcase,
  TrendingUp,
  Cpu,
  Radio,
  Quote,
  CheckCircle2,
  MapPin,
  Building,
  Zap,
  Clock,
  Layers,
  Activity,
  Check,
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
        <AnimatedCounter from={0} to={24} suffix="/7" /> direct access to Level-
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
    <div className="py-4 sm:py-8 space-y-24 sm:space-y-32 transition-colors duration-300">
      {/* ============================================================
          1. CINEMATIC HERO BANNER (HIGH-IMPACT VISUAL SHOWCASE)
          ============================================================ */}
      <section className="relative -mt-6 sm:-mt-10 pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden rounded-3xl sm:rounded-[3rem] border border-slate-800/80 shadow-2xl mx-4 sm:mx-6 lg:mx-8 bg-[#07090E]">
        {/* Background Banner Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/about/hero-banner.jpg"
            alt="Z COM Enterprise Core Network Infrastructure Banner"
            fill
            priority
            className="object-cover object-center filter brightness-[0.38] contrast-125 scale-105"
          />
        </div>

        {/* Ambient Dark & Light Orange Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/90 via-[#0A0D14]/75 to-[#07090E]/95 -z-10" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-orange/20 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          {/* Official Telemetry Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-brand-orange text-xs font-bold uppercase tracking-wider shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT Z COM NETWORKS PRIVATE LIMITED</span>
          </div>

          {/* Primary Grand Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white font-heading tracking-tight max-w-5xl mx-auto leading-[1.15]">
            Engineering Next-Generation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-300">
              Carrier-Grade Connectivity
            </span>
          </h1>

          {/* Strategic Executive Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Founded on the principle that modern enterprises and mission-critical institutions
            require uncontended, carrier-grade internet without compromise. Today, Z COM powers
            commercial towers, healthcare complexes, educational campuses, and corporate headquarters.
          </p>

          {/* 4 Interactive Telemetry Frosted-Glass Metric Cards */}
          <div className="pt-4 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-white/[0.14] hover:border-brand-orange/60 transition-all duration-300 text-center group">
              <div className="w-10 h-10 mx-auto rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={1200} suffix="+ km" />
              </span>
              <span className="text-xs sm:text-sm text-slate-200 font-bold mt-1.5 block font-heading">
                Subterranean Metro Core
              </span>
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                Armored Ring Infrastructure
              </span>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-white/[0.14] hover:border-brand-orange/60 transition-all duration-300 text-center group">
              <div className="w-10 h-10 mx-auto rounded-xl bg-orange-400/20 text-orange-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" />
              </span>
              <span className="text-xs sm:text-sm text-slate-200 font-bold mt-1.5 block font-heading">
                Contractual Core SLA
              </span>
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                Guaranteed Uptime Delivery
              </span>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-white/[0.14] hover:border-brand-orange/60 transition-all duration-300 text-center group">
              <div className="w-10 h-10 mx-auto rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={500} suffix="+" />
              </span>
              <span className="text-xs sm:text-sm text-slate-200 font-bold mt-1.5 block font-heading">
                Corporate Leased Lines
              </span>
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                1:1 Symmetrical Circuits
              </span>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-white/[0.14] hover:border-brand-orange/60 transition-all duration-300 text-center group">
              <div className="w-10 h-10 mx-auto rounded-xl bg-orange-400/20 text-orange-400 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={24} suffix="/7/365" />
              </span>
              <span className="text-xs sm:text-sm text-slate-200 font-bold mt-1.5 block font-heading">
                Gulberg-III Local NOC
              </span>
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                Level-3 Dedicated Engineers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. COMPANY HERITAGE & MISSION-CRITICAL PROMISE
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* High-Resolution Infrastructure Presentation */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-200/60 group">
            <Image
              src="/images/about/infrastructure.jpg"
              alt="Z COM Core Optical Network Infrastructure"
              fill
              className="object-cover filter brightness-[0.85] contrast-110 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Floating Telemetry Pills */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/20 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span>Metropolitan Enterprise Ring</span>
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider inline-block">
                Carrier-Grade Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Subterranean Conduits &amp; Core Transport
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Engineered for <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" /> uptime,
                zero packet loss, and sub-millisecond local routing.
              </p>
            </div>
          </div>

          {/* Heritage Narrative & Core Guarantees */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 space-y-6 leading-relaxed text-slate-700 text-sm sm:text-base shadow-xl shadow-slate-200/50">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>OUR HERITAGE &amp; PROMISE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading leading-tight tracking-tight">
              Pioneering Unthrottled High-Speed Connectivity
            </h2>

            <p>
              Z COM Networks is a premier licensed internet service provider delivering high-speed,
              uncontended connectivity for corporate enterprises and residential communities. We prioritize customer
              satisfaction through carrier-grade hardware, redundant optical transmission paths, and exceptional
              support &mdash; ensuring zero jitter and uninterrupted browsing, conferencing, and data transfers.
            </p>

            <p>
              Unlike legacy ISPs relying on aging copper lines or congested shared wireless spectrum, Z COM has built
              a proprietary underground optical transmission network. With true{" "}
              <strong className="text-slate-900">
                <AnimatedCounter from={0} to={1} prefix="1:" suffix=" symmetrical throughput" />
              </strong>
              , enterprise clients experience the exact same blazing-fast upload speeds as download speeds, facilitating
              seamless cloud backups, remote development workflows, and high-definition video conferencing.
            </p>

            {/* 3 Pillar Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-100">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="w-7 h-7 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 font-heading">
                  <AnimatedCounter from={0} to={100} suffix="%" /> Non-Shared
                </h4>
                <p className="text-[11px] text-slate-500">Dedicated CIR Bandwidth</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="w-7 h-7 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 font-heading">
                  &lt;<AnimatedCounter from={0} to={50} suffix="ms" /> Failover
                </h4>
                <p className="text-[11px] text-slate-500">Auto-Healing Ring Topology</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="w-7 h-7 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 font-heading">
                  Level-<AnimatedCounter from={0} to={3} /> NOC
                </h4>
                <p className="text-[11px] text-slate-500">24/7/365 Local Engineers</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 pt-1">
              Headquartered at <strong className="text-slate-700">48-E/1, Office #3, 2nd Floor, Commercial Area, Block E 1, Gulberg-III</strong>,
              our Network Operations Center (NOC) continuously monitors every transmission link in real time.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. EXECUTIVE LEADERSHIP: CEO MUDASIR RIAZ & CFO MUBASIR RIAZ
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
          4. INTERACTIVE INFRASTRUCTURE LOOP SLIDER
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
          5. MISSION & VISION DUAL CARDS
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-orange-500/30 space-y-4 shadow-xl shadow-orange-500/5 hover:border-brand-orange transition-colors">
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
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
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
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
          6. 6 GUIDING CORE VALUES
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          7. GLOBAL TECHNOLOGY PARTNERS MARQUEE LOOP
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
          8. BOTTOM CALL TO ACTION
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
