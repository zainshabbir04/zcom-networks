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
} from "lucide-react";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import InfrastructureLoopSlider from "@/components/ui/InfrastructureLoopSlider";
import PartnersMarquee from "@/components/ui/PartnersMarquee";

export const metadata: Metadata = {
  title: "About Us | Executive Leadership & Optical Infrastructure | Z COM Networks",
  description:
    "Learn about Z COM Networks Private Limited — Lahore's premier optical ISP. Meet CEO Mudasir Riaz, CFO Mubasir Riaz, explore our 1,200+ km metro fiber ring, mission, vision, and 24/7 Gulberg NOC.",
};

const CORE_VALUES = [
  {
    icon: <Star className="w-6 h-6 text-brand-orange" />,
    title: "Customer-First Engineering",
    desc: "We prioritize our clients' mission-critical needs, ensuring 24/7 access to Level-3 network engineers instead of outsourced call centers.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-brand-orange" />,
    title: "Relentless Innovation",
    desc: "We continuously modernize our core with 100G DWDM transmission hardware, native IPv6 dual-stacking, and automated OTDR fiber health telemetry.",
  },
  {
    icon: <LinkIcon className="w-6 h-6 text-brand-orange" />,
    title: "Uncompromising Reliability",
    desc: "Every leased line and residential circuit is provisioned with 1:1 symmetrical throughput and self-healing ring auto-failover in <50ms.",
  },
  {
    icon: <Search className="w-6 h-6 text-brand-orange" />,
    title: "Absolute Transparency",
    desc: "No hidden Fair Usage Policies (FUP), no artificial peak-hour throttling, and clear contractual Service Level Agreements (SLAs).",
  },
  {
    icon: <Users className="w-6 h-6 text-brand-orange" />,
    title: "Local Community Empowerment",
    desc: "Headquartered in Gulberg-III, we actively power Lahore's hospitals, universities, software export hubs, and residential communities.",
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-orange" />,
    title: "Ethical Corporate Governance",
    desc: "We uphold the highest ethical standards in all commercial contracts, data protection policies, and telecom regulatory compliance.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24 transition-colors duration-300">
      {/* ============================================================
          1. PAGE HEADER & ANIMATED TELEMETRY STRIP
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-brand-orange/15 border border-orange-200 dark:border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT Z COM NETWORKS PRIVATE LIMITED</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight max-w-4xl mx-auto">
          Engineering Lahore&apos;s Most Reliable <span className="text-brand-orange">Optical Fiber Fabric</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Founded on the principle that modern enterprises and digital households require
          uncontended, carrier-grade internet without compromises. Today, Z COM powers Lahore&apos;s
          commercial towers, tertiary healthcare facilities, educational campuses, and premier residential hubs.
        </p>

        {/* 4 Animated Metric Badges */}
        <div className="pt-6 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm text-center">
            <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block">
              <AnimatedCounter from={0} to={1200} suffix="+ km" />
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1 block">
              Armored Metro Fiber
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm text-center">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" />
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1 block">
              Contractual Core SLA
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm text-center">
            <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block">
              <AnimatedCounter from={0} to={500} suffix="+" />
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1 block">
              Corporate Leased Lines
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-700/60 shadow-sm text-center">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading block">
              <AnimatedCounter from={0} to={24} suffix="/7/365" />
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1 block">
              Gulberg-III Local NOC
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. COMPANY HERITAGE & MISSION-CRITICAL PROMISE
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* High-Resolution Banner */}
          <div className="lg:col-span-5 relative h-96 sm:h-[500px] rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-700/60 shadow-xl shadow-slate-200/50 dark:shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
              alt="Z COM Optical Fiber Network Infrastructure"
              fill
              className="object-cover filter brightness-[0.85] contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider">
                Lahore Metro Fiber Ring
              </span>
              <h3 className="text-xl font-bold text-white font-heading mt-2">
                Carrier-Grade Architecture
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Engineered for 99.9% uptime, zero packet loss, and sub-millisecond local routing.
              </p>
            </div>
          </div>

          {/* Verified Heritage Paragraphs */}
          <div className="lg:col-span-7 bg-white dark:bg-[#12161F] p-8 sm:p-12 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 space-y-6 leading-relaxed text-slate-700 dark:text-slate-300 text-sm sm:text-base shadow-xl shadow-slate-200/50 dark:shadow-black/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
              <Award className="w-4 h-4" />
              <span>OUR HERITAGE &amp; PROMISE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading leading-tight">
              Pioneering Unthrottled Fiber Broadband in Pakistan
            </h2>

            <p>
              Z COM Networks is a premier licensed internet service provider delivering high-speed,
              reliable connectivity for corporate enterprises and residential sectors. We prioritize customer
              satisfaction through carrier-grade hardware, redundant optical transmission paths, and exceptional
              support &mdash; ensuring zero jitter and uninterrupted browsing, conferencing, and data transfers.
            </p>

            <p>
              Unlike legacy ISPs that rely on aging copper lines or congested shared wireless spectrum, Z COM has built
              a proprietary underground fiber optic network. With 1:1 symmetrical speeds, enterprise clients experience
              the exact same blazing-fast upload speeds as download speeds, facilitating seamless cloud backups,
              remote development workflows, and high-definition video conferencing.
            </p>

            <p>
              Headquartered at <strong>48-E/1, Office #3, 2nd Floor, Commercial Area, Block E 1, Gulberg-III, Lahore</strong>,
              our state-of-the-art Network Operations Center (NOC) monitors every optical node in real time. We are
              proud to be the chosen connectivity partner for Lahore&apos;s leading hospitals, universities, luxury hotels,
              and multinational software houses.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. EXECUTIVE LEADERSHIP: CEO MUDASIR RIAZ & CFO MUBASIR RIAZ
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 dark:bg-brand-orange/15 border border-orange-200 dark:border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>EXECUTIVE LEADERSHIP TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
            Visionary Leadership Driving Innovation
          </h2>

          <p className="text-base text-slate-600 dark:text-gray-300">
            Meet the leaders spearheading Z COM Networks&apos; mission to deliver the fastest,
            most resilient optical fiber infrastructure across Lahore and Punjab.
          </p>
        </div>

        {/* Executive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: CEO Mudasir Riaz */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-700/60 bg-white dark:bg-[#12161F] p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/60 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-brand-orange shadow-lg shrink-0 bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                    alt="Mudasir Riaz - Chief Executive Officer (CEO) Z COM Networks"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 dark:bg-brand-orange/20 text-brand-orange">
                    <Sparkles className="w-3 h-3" />
                    <span>CHIEF EXECUTIVE OFFICER</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                    Mudasir Riaz
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Chief Executive Officer (CEO) &amp; Co-Founder
                  </p>
                  <p className="text-xs text-brand-orange font-bold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Gulberg-III Corporate Headquarters, Lahore</span>
                  </p>
                </div>
              </div>

              {/* Bio & Strategy */}
              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  As Chief Executive Officer and visionary co-founder of Z COM Networks, <strong>Mudasir Riaz</strong> has
                  spearheaded the company&apos;s transformation from a local telecom challenger into one of Lahore&apos;s
                  most trusted carrier-grade optical ISPs.
                </p>
                <p>
                  With extensive background in optical telecommunications engineering, transmission systems, and
                  telecom regulatory governance, Mudasir champions a culture of uncompromising SLA delivery. He has
                  overseen the deployment of more than 1,200 kilometers of subterranean armored fiber conduits across
                  Lahore, establishing critical interconnects along M-2, M-11, and the GT Road corridor.
                </p>
              </div>

              {/* Executive Quote */}
              <div className="relative rounded-2xl bg-orange-50/70 dark:bg-[#0E1118] border border-orange-200/80 dark:border-slate-700/60 p-5">
                <Quote className="w-8 h-8 text-brand-orange/30 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm italic font-medium text-slate-800 dark:text-slate-200 leading-relaxed pr-6">
                  &ldquo;Our foundational promise at Z COM Networks has never wavered: to build a transmission network
                  so resilient and fast that Lahore&apos;s enterprises never have to compromise on bandwidth. Every kilometer
                  of fiber we lay is engineered for future generations.&rdquo;
                </p>
                <div className="mt-2 text-xs font-bold text-brand-orange">
                  &mdash; Mudasir Riaz, CEO
                </div>
              </div>

              {/* Core Executive Focus Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Optical Network Architecture",
                  "100G DWDM Ring Strategy",
                  "PTA Regulatory Compliance",
                  "Enterprise SLA Accountability",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-[#0E1118] text-slate-800 dark:text-slate-300 border border-slate-200/90 dark:border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: CFO Mubasir Riaz */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-700/60 bg-white dark:bg-[#12161F] p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/60 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-brand-orange shadow-lg shrink-0 bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                    alt="Mubasir Riaz - Chief Financial Officer (CFO) Z COM Networks"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 dark:bg-brand-orange/20 text-brand-orange">
                    <TrendingUp className="w-3 h-3" />
                    <span>CHIEF FINANCIAL OFFICER</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                    Mubasir Riaz
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Chief Financial Officer (CFO) &amp; Co-Founder
                  </p>
                  <p className="text-xs text-brand-orange font-bold flex items-center gap-1">
                    <Building className="w-3.5 h-3.5" />
                    <span>Fiscal Governance &amp; Capital Planning</span>
                  </p>
                </div>
              </div>

              {/* Bio & Strategy */}
              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  As Chief Financial Officer and co-founder, <strong>Mubasir Riaz</strong> oversees financial strategy,
                  capital investments in next-generation optical infrastructure, asset stewardship, and commercial
                  risk management at Z COM Networks.
                </p>
                <p>
                  Mubasir has been instrumental in structuring strategic capital allocations that enabled Z COM to acquire
                  tier-1 routing assets from Cisco and Juniper, deploy cutting-edge GPON/XGS-PON subscriber distribution,
                  and maintain a robust, debt-efficient balance sheet. His leadership ensures clients receive competitive,
                  transparent enterprise pricing without hidden surcharges or unpredictable bandwidth billing.
                </p>
              </div>

              {/* Executive Quote */}
              <div className="relative rounded-2xl bg-orange-50/70 dark:bg-[#0E1118] border border-orange-200/80 dark:border-slate-700/60 p-5">
                <Quote className="w-8 h-8 text-brand-orange/30 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm italic font-medium text-slate-800 dark:text-slate-200 leading-relaxed pr-6">
                  &ldquo;Sustainable telecommunications infrastructure demands disciplined capital allocation and long-term
                  vision. At Z COM, our financial strategy is directly aligned with engineering excellence &mdash; ensuring
                  continuous reinvestment into network resilience and local customer support.&rdquo;
                </p>
                <div className="mt-2 text-xs font-bold text-brand-orange">
                  &mdash; Mubasir Riaz, CFO
                </div>
              </div>

              {/* Core Executive Focus Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Capital Infrastructure Investment",
                  "Fiscal Governance & Sustainability",
                  "Optical Asset Procurement",
                  "Transparent Enterprise Pricing",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-[#0E1118] text-slate-800 dark:text-slate-300 border border-slate-200/90 dark:border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-brand-orange/15 border border-orange-200 dark:border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE INFRASTRUCTURE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Behind Our 99.99% Reliability Guarantee
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400">
            Explore the physical optical conduits, carrier-grade DWDM core rings, and 24/7 Gulberg NOC
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
          <div className="bg-white dark:bg-[#12161F] p-8 sm:p-10 rounded-3xl border border-orange-500/30 dark:border-orange-500/30 space-y-4 shadow-lg shadow-orange-500/5">
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
              OUR MISSION
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
              Bridging Distances &amp; Fostering Global Communication
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              Z COM aims to bridge distances and foster global communication with fast, dependable
              fiber internet access. With guaranteed 99.9% uptime SLA, we ensure efficient and seamless
              connectivity for every business and home we serve across Lahore and Punjab.
            </p>
          </div>

          <div className="bg-white dark:bg-[#12161F] p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 space-y-4 shadow-lg shadow-slate-200/50 dark:shadow-black/50">
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
              OUR VISION
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
              Ubiquitous &amp; Empowering High-Speed Connectivity
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              A world where carrier-grade fiber internet is ubiquitous, empowering individuals and
              organizations to innovate without latency or limits &mdash; ensuring 99.9% network
              uptime and 100% customer satisfaction through exceptional optical service.
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
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Our <AnimatedCounter from={0} to={6} /> Guiding Core Values
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Principles that direct every fiber cable we pull, every server we deploy, and every customer
            we support across Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#12161F] p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 space-y-3 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-brand-orange/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 flex items-center justify-center border border-orange-500/20 text-brand-orange">
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                {val.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          7. GLOBAL TECHNOLOGY PARTNERS MARQUEE LOOP
          ============================================================ */}
      <section className="py-12 bg-slate-100/60 dark:bg-[#0E1118]/80 backdrop-blur-md border-y border-slate-200/70 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
            POWERED BY GLOBAL HARDWARE LEADERS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-2">
            Enterprise Optical Routing Partners
          </h2>
        </div>
        <PartnersMarquee />
      </section>

      {/* ============================================================
          8. BOTTOM CALL TO ACTION
          ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#12161F] p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 text-center space-y-6 shadow-xl shadow-slate-200/50 dark:shadow-black/50">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Experience the Z COM Difference Today
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-xl mx-auto">
            Contact our Lahore team for a customized enterprise connectivity proposal or residential
            fiber connection setup.
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
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
