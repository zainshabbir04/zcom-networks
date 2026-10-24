import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Globe,
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Server,
  Lock,
  Network,
  Sparkles,
  Layers,
  Activity,
  Cpu,
  Clock,
  ChevronRight,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MinimalistBanner, { BannerImage, BannerBadge, BannerHeadline, BannerSubtext, BannerActions } from "@/components/ui/MinimalistBanner";
import ScrollReveal, { StaggerContainer } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Corporate Internet Solutions | DIA, MPLS & Metro Optical | Z COM Networks",
  description:
    "Carrier-grade Corporate Internet Solutions: Dedicated Internet Access (DIA), MPLS, VPN Solutions, and Point to Point Optical Connectivity with 99.99% SLA.",
};

const SUB_SERVICES = [
  {
    title: "DIA (Dedicated Internet Access)",
    tag: "1:1 Contention Ratio",
    desc: "Unshared, symmetric optical bandwidth provisioned directly from our metro transport ring. Backed by a strict 99.99% contractual uptime SLA, static IPv4/IPv6 subnets, and prioritized BGP routing to global tier-1 transit providers.",
    icon: Globe,
    features: [
      "Guaranteed 1:1 symmetrical upload & download throughput",
      "Contractual 99.99% core uptime SLA with direct rebate credits",
      "Low-latency peering to Google, AWS, Microsoft & Cloudflare CDNs",
      "Multiple usable static public IPv4 & IPv6 allocations",
    ],
  },
  {
    title: "MPLS Solutions",
    tag: "Multi-Protocol Label Switching",
    desc: "Enterprise Multi-Protocol Label Switching that consolidates your multi-branch voice, video, and mission-critical ERP traffic over an engineered, private optical network with deterministic QoS priority queues.",
    icon: Network,
    features: [
      "Custom Quality of Service (QoS) for voice, video & ERP data",
      "Seamless multi-site branch interconnectivity across enterprise campuses",
      "Sub-50ms self-healing optical ring auto-failover",
      "Centralized traffic shaping and dynamic bandwidth allocation",
    ],
  },
  {
    title: "VPN Solutions",
    tag: "Encrypted Enterprise Tunnels",
    desc: "High-security IPsec and SSL virtual private network tunnels connecting regional branches, remote executive workforces, and cloud environments with hardware-accelerated AES-256 encryption.",
    icon: Lock,
    features: [
      "Hardware-accelerated AES-256 site-to-site tunnels",
      "Zero-latency overhead with high-performance crypto routing",
      "Seamless integration with corporate Active Directory & LDAP",
      "Redundant tunnel failover over dual physical network entries",
    ],
  },
  {
    title: "Point to Point Optical Connectivity",
    tag: "Dedicated Metro Links",
    desc: "Private, dedicated optical wave links connecting your corporate headquarters, primary data centers, and remote facilities throughout the metro ring with wire-speed Layer-2 transmission.",
    icon: Server,
    features: [
      "Sub-millisecond intra-metro latency across transport ring",
      "Completely isolated data transmission outside the public internet",
      "Scalable from 100 Mbps to 100 Gbps dedicated optical waves",
      "Underground armored subterranean conduits with OTDR telemetry",
    ],
  },
];

export default function CorporateInternetPage() {
  return (
    <div className="relative transition-colors duration-300 -mt-20 sm:-mt-24 space-y-16 sm:space-y-24 pb-16">
      
      {/* ============================================================
          1. CLEAN FULL-WIDTH HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <MinimalistBanner className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: Full-Width Dedicated Banner Image */}
        <BannerImage className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/services/corporate-internet.jpg"
            alt="Corporate Internet Solutions - Z COM Networks"
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
                <span className="text-brand-orange font-bold">Corporate Internet Solutions</span>
              </nav>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 backdrop-blur-md border border-brand-orange/40 text-brand-orange text-[11px] font-black uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                <span>1:1 DEDICATED DIA</span>
              </div>
            </BannerBadge>

            {/* Bold Clear Headline */}
            <BannerHeadline>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.1] drop-shadow-md">
              Corporate Internet <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                Solutions
              </span>
            </h1>
            </BannerHeadline>

            {/* Concise Value Description */}
            <BannerSubtext>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow-sm">
              Unrivaled 1:1 dedicated optical connectivity engineered for modern enterprises, financial institutions, and corporate complexes demanding 99.99% uptime and ultra-low latency.
            </p>
            </BannerSubtext>

            {/* Service-Tailored Live Counters Strip (Replaces buttons) */}
            <BannerActions className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">SLA Uptime</span>
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block mt-0.5">
                  <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" />
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">Contractual SLA</span>
              </div>

              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Bandwidth</span>
                <span className="text-xl sm:text-2xl font-black text-white font-heading block mt-0.5">
                  1:1 True
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">Uncontended DIA</span>
              </div>

              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Ring Failover</span>
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block mt-0.5">
                  &lt; <AnimatedCounter from={0} to={50} suffix="ms" />
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">Self-Healing Ring</span>
              </div>

              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Speed Scale</span>
                <span className="text-xl sm:text-2xl font-black text-white font-heading block mt-0.5">
                  <AnimatedCounter from={0} to={100} suffix="G" />
                </span>
                <span className="text-[10px] text-slate-300 font-medium block">Optical Transport</span>
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
            <span>CORE ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Enterprise Optical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered with carrier-class routing hardware, dedicated subterranean ring transport, and guaranteed SLA contracts.
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
                Ready to Upgrade Your Corporate Connectivity?
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
                  <span className="text-xs text-slate-400 block font-semibold">Headquarters:</span>
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
        </ScrollReveal>
      </section>

    </div>
  );
}
