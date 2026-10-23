import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Cpu,
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  Server,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Wrench,
  Radio,
  Sparkles,
  Layers,
  Activity,
  Clock,
  Settings,
  Globe,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Managed IT Solutions & Services | 24/7 NOC & Hardware | Z COM Networks",
  description:
    "End-to-end Managed IT Solutions: 24/7 Managed NOC Monitoring, Server & Hardware Maintenance, Structured Network Cabling, and Emergency Field Engineering.",
};

const SUB_SERVICES = [
  {
    title: "24/7 Managed NOC Monitoring",
    tag: "Proactive Network Telemetry",
    desc: "Continuous round-the-clock surveillance of optical link attenuation, interface saturation, BGP path health, and ping jitter from our Gulberg-III Network Operations Center. We resolve anomalies before users experience disruptions.",
    icon: Activity,
    features: [
      "Real-time SNMP/NetFlow telemetry across all managed network devices",
      "Automated incident alert generation with immediate technician escalation",
      "Monthly SLA compliance reports, bandwidth analytics & trend audits",
      "Direct line to Level-3 network engineers (no tiered call centers)",
    ],
  },
  {
    title: "Enterprise Server & Hardware Maintenance",
    tag: "Preventative & Reactive Care",
    desc: "Scheduled health audits, firmware lifecycle patching, PSU redundancy checks, and rapid hardware component replacements for enterprise server racks, switches, routers, and NAS/SAN appliances.",
    icon: Server,
    features: [
      "Preventative maintenance schedules and thermal dissipation audits",
      "Immediate on-site spare part replacement for critical equipment",
      "Enterprise firmware upgrades with zero-downtime rollover",
      "Switchport configuration, VLAN partitioning & routing optimization",
    ],
  },
  {
    title: "Structured Cabling & Campus Networking",
    tag: "Carrier-Grade Deployment",
    desc: "Turnkey planning, installation, and certification of high-performance CAT6/CAT6A copper and multi-core optical cabling, server rack organization, patch panel labeling, and enterprise campus Wi-Fi deployment.",
    icon: Cpu,
    features: [
      "Fluke-certified CAT6/CAT6A copper and single-mode/multi-mode optical links",
      "Clean server rack layout, patch cord cable management & labeling",
      "High-density Wi-Fi 6 access point engineering for campuses & complexes",
      "Core, distribution, and access layer enterprise switching setups",
    ],
  },
  {
    title: "On-Site Engineering Emergency Dispatch",
    tag: "Sub-30 Minute MTTR",
    desc: "Rapid deployment of certified optical and systems engineers directly to your corporate site. Equipped with precision optical fusion splicers, OTDR fault locators, and replacement hardware modules.",
    icon: Wrench,
    features: [
      "Contractual sub-30 minute emergency on-site response standard",
      "Advanced OTDR conduit anomaly pinpointing and precision splicing",
      "Disaster recovery circuit cutovers and emergency temporary links",
      "Local Gulberg NOC fleet deployed across all metro commercial hubs",
    ],
  },
];

export default function ManagedItPage() {
  return (
    <div className="relative transition-colors duration-300 space-y-16 sm:space-y-24 pb-16">
      
      {/* ============================================================
          1. OUTSTANDING CINEMATIC HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <section className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: High-Res Dedicated Image (100% Full Viewport Width) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/services/managed-it.jpg"
            alt="Managed IT Solutions - Z COM NOC"
            fill
            priority
            unoptimized
            className="object-cover object-center scale-100"
          />
          {/* Subtle Ambient Vignette & Warm Orange Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080D]/95 via-[#07090E]/60 to-[#07090E]/85" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Layer 1: Foreground Content Over Banner */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col justify-between space-y-8">
          
          {/* Top Breadcrumb & Status Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">Services</span>
              <span className="text-slate-500">/</span>
              <span className="text-brand-orange font-bold">Managed IT Solutions &amp; Services</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span className="text-white">PROACTIVE NOC &amp; HARDWARE CARE</span>
            </div>
          </div>

          {/* Center Heading & Value Proposition */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-white">OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight drop-shadow-md">
              Managed IT Solutions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                &amp; Services
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
              Eliminate downtime and empower corporate business operations with 24/7 proactive NOC supervision, enterprise server maintenance, certified structured cabling, and rapid on-site field engineering dispatch.
            </p>

            {/* Quick Action Navigation Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>Request IT Infrastructure Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white border border-white/30 font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>
          </div>

          {/* 4 Floating Telemetry Glassmorphism Metric Hub */}
          <div className="pt-6 sm:pt-8 max-w-5xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-brand-orange/25 text-brand-orange flex items-center justify-center mb-1.5">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={24} suffix="/7/365" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                NOC Supervision
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Continuous Telemetry
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                &lt; <AnimatedCounter from={0} to={30} suffix=" min" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Emergency MTTR
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                On-Site Field Response
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-brand-orange/25 text-brand-orange flex items-center justify-center mb-1.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                Level-3
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Certified Engineers
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Direct Senior Escalation
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                <Settings className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={100} suffix="%" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Proactive Oversight
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Hardware Health Audits
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          2. CORE ARCHITECTURE CAPABILITIES GRID
          ============================================================ */}
      <section id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>MANAGED SERVICES SUITE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Enterprise IT Operations &amp; Support
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From 24/7 centralized NOC monitoring to rapid on-site optical splicing and hardware maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUB_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-orange/60 shadow-xl shadow-slate-200/40 transition-all duration-300 space-y-4 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading group-hover:text-brand-orange transition-colors">
                      {srv.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold shrink-0">
                    {srv.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          3. DIRECT CONTACT STRIP (FROM FLYER)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                DIRECT CORPORATE INQUIRIES
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Ready to Upgrade Your Managed IT Operations?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <a
                href="tel:+924234511111"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Phone:</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-orange transition-colors">
                    +92 42 345 11 111
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@zcomnetworks.com.pk"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-slate-400 block font-semibold">Email:</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-orange transition-colors truncate block">
                    info@zcomnetworks.com.pk
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">NOC Headquarters:</span>
                  <span className="text-xs font-semibold text-white leading-tight block">
                    7/4, E-3 Main Boulevard, Gulberg-III.
                  </span>
                </div>
              </div>

              <a
                href="https://www.zcomnetworks.com.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-slate-400 block font-semibold">Web Portal:</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-orange transition-colors truncate block">
                    www.zcomnetworks.com.pk
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
