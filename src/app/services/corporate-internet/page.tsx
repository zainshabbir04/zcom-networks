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
import InfrastructureLoopSlider from "@/components/ui/InfrastructureLoopSlider";

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

const SPECS = [
  { label: "Throughput Ratio", value: "1:1 Symmetrical", desc: "Completely uncontended upstream & downstream" },
  { label: "Core Availability", value: "99.99% SLA", desc: "Contractually committed high availability" },
  { label: "Ring Auto-Failover", value: "< 50ms", desc: "Sub-second dynamic path switching" },
  { label: "NOC Escalation", value: "24/7 Level-3", desc: "Direct access to senior network architects" },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Optical Path Feasibility",
    desc: "Our GIS engineering team surveys nearest splice chambers and subterranean duct routes for optimal entry.",
  },
  {
    step: "02",
    title: "Dual Conduit Provisioning",
    desc: "Armored optical cable deployed through dedicated subterranean conduits with dual-path physical redundancy.",
  },
  {
    step: "03",
    title: "Hardware & BERT Certification",
    desc: "Carrier-grade switch commissioning with comprehensive RFC 2544 and BERT latency/throughput verification.",
  },
  {
    step: "04",
    title: "Live NOC Telemetry",
    desc: "Circuit integrated into 24/7 NOC monitoring with real-time packet loss, jitter, and optical power tracking.",
  },
];

export default function CorporateInternetPage() {
  return (
    <div className="relative transition-colors duration-300 space-y-16 sm:space-y-24 pb-16">
      
      {/* ============================================================
          1. OUTSTANDING CINEMATIC HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <section className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: High-Res Dedicated Image (100% Full Viewport Width) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/services/corporate-internet.jpg"
            alt="Corporate Internet Solutions - Z COM Networks"
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
              <span className="text-brand-orange font-bold">Corporate Internet Solutions</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span className="text-white">DEDICATED ENTERPRISE DIA</span>
            </div>
          </div>

          {/* Center Heading & Value Proposition */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-white">OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight drop-shadow-md">
              Corporate Internet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                Solutions
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
              Unrivaled 1:1 dedicated optical connectivity engineered for modern enterprises, financial institutions, and corporate complexes demanding 99.99% uptime, subterranean network resilience, and ultra-low latency global transit.
            </p>

            {/* Quick Action Navigation Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>Request Feasibility Survey</span>
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
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Core Uptime SLA
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Contractual Guarantee
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                1:1 True
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Symmetrical Ratio
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Zero Contention
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-brand-orange/25 text-brand-orange flex items-center justify-center mb-1.5">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                &lt; <AnimatedCounter from={0} to={50} suffix="ms" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Auto-Failover
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Self-Healing Ring
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={24} suffix="/7" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Level-3 NOC
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Continuous Oversight
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
            <span>CORE ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Enterprise Optical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered with carrier-class routing hardware, dedicated subterranean ring transport, and guaranteed SLA contracts.
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
          3. TECHNICAL SPECIFICATIONS MATRIX
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#090C15] text-white p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                TECHNICAL BENCHMARKS
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Guaranteed Optical Transport Standards
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SPECS.map((spec, sIdx) => (
                <div key={sIdx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs text-slate-400 block">{spec.label}</span>
                  <span className="text-xl font-extrabold text-brand-orange block font-heading">{spec.value}</span>
                  <span className="text-[11px] text-slate-300 block">{spec.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. TURNKEY PROVISIONING WORKFLOW
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            DEPLOYMENT PROCESS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Rapid Turnkey Circuit Commissioning
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From optical path feasibility to active NOC telemetry in 4 systematic milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORKFLOW.map((wf, wIdx) => (
            <div
              key={wIdx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-orange/50 shadow-md hover:shadow-lg transition-all space-y-2 relative"
            >
              <span className="text-3xl font-black text-brand-orange/30 font-heading block">{wf.step}</span>
              <h4 className="text-base font-extrabold text-slate-900">{wf.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{wf.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          5. OPTICAL INFRASTRUCTURE ARCHITECTURE LOOP
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>OPTICAL INFRASTRUCTURE ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Engineered For Zero Packet Loss
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Explore the subterranean armored ring and carrier hardware powering our corporate circuits.
          </p>
        </div>

        <InfrastructureLoopSlider />
      </section>

      {/* ============================================================
          6. DIRECT CONTACT STRIP (FROM FLYER)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
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
      </section>

    </div>
  );
}
