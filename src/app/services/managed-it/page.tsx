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
import MinimalistBanner, { BannerImage, BannerBadge, BannerHeadline, BannerSubtext, BannerActions } from "@/components/ui/MinimalistBanner";
import ScrollReveal, { StaggerContainer } from "@/components/ui/ScrollReveal";

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
    <div className="relative transition-colors duration-300 -mt-20 sm:-mt-24 space-y-16 sm:space-y-24 pb-16">
      
      {/* ============================================================
          1. CLEAN FULL-WIDTH HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <MinimalistBanner className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: Full-Width Dedicated Banner Image */}
        <BannerImage className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/services/managed-it.jpg"
            alt="Managed IT Solutions & Services - Z COM Networks"
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
          <div className="max-w-2xl space-y-6">
            
            {/* Breadcrumb & Status Pill */}
            <BannerBadge className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
              <nav className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-300">
                <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
                <span className="text-slate-500">/</span>
                <span className="text-slate-400">Services</span>
                <span className="text-slate-500">/</span>
                <span className="text-brand-orange font-bold">Managed IT Solutions</span>
              </nav>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 backdrop-blur-md border border-brand-orange/40 text-brand-orange text-[11px] font-black uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                <span>24/7 PROACTIVE NOC</span>
              </div>
            </BannerBadge>

            {/* Bold Clear Headline */}
            <BannerHeadline>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.1] drop-shadow-md">
              Managed IT Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                &amp; Services
              </span>
            </h1>
            </BannerHeadline>

            {/* Concise Value Description */}
            <BannerSubtext>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow-sm">
              Eliminate downtime and empower corporate business operations with 24/7 proactive NOC supervision, enterprise server maintenance, and rapid certified engineering dispatch.
            </p>
            </BannerSubtext>

            {/* Service-Tailored Live Counters Strip (Replaces buttons) */}
            <BannerActions className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">NOC Monitoring</span>
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block mt-0.5">
                  <AnimatedCounter from={0} to={24} suffix="/7" />
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">Continuous Care</span>
              </div>

              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Field MTTR</span>
                <span className="text-xl sm:text-2xl font-black text-white font-heading block mt-0.5">
                  &lt; <AnimatedCounter from={0} to={30} suffix="m" />
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">Emergency Dispatch</span>
              </div>

              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Tech Tier</span>
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block mt-0.5">
                  Level-3
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">Certified Engineers</span>
              </div>

              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Health Audits</span>
                <span className="text-xl sm:text-2xl font-black text-white font-heading block mt-0.5">
                  <AnimatedCounter from={0} to={100} suffix="%" />
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">Proactive Maintenance</span>
              </div>
            </BannerActions>

          </div>
        </div>
      </MinimalistBanner>

      {/* ============================================================
          2. CORE ARCHITECTURE CAPABILITIES GRID
          ============================================================ */}
      <ScrollReveal variant="fade-up" as="section" id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
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

        <StaggerContainer staggerMs={100} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUB_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-orange/60 shadow-xl shadow-slate-200/40 transition-all duration-300 space-y-4 group layout-card-hover"
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
        </StaggerContainer>
      </ScrollReveal>

      {/* ============================================================
          3. DIRECT CONTACT STRIP (FROM FLYER)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scale-in">
          <div className="rounded-3xl bg-slate-900 layout-card-hover text-white border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                DIRECT CORPORATE INQUIRIES
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Ready to Upgrade Your Managed IT Operations?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
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
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-slate-400 block font-semibold">Email:</span>
                  <span className="text-[11px] sm:text-xs xl:text-sm font-bold text-white group-hover:text-brand-orange transition-colors block whitespace-nowrap">
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
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-slate-400 block font-semibold">Web Portal:</span>
                  <span className="text-[11px] sm:text-xs xl:text-sm font-bold text-white group-hover:text-brand-orange transition-colors block whitespace-nowrap">
                    www.zcomnetworks.com.pk
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
