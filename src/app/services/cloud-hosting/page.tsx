import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Cloud,
  Check,
  ArrowRight,
  ShieldCheck,
  Server,
  Mail,
  Globe,
  Database,
  Phone,
  MapPin,
  ExternalLink,
  Sparkles,
  Layers,
  Activity,
  Cpu,
  Lock,
  Zap,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Cloud & Hosting Solutions | VMs, Colocation, Email & Web | Z COM Networks",
  description:
    "Enterprise Cloud and Hosting Solutions: Virtual Machines (VMs), VPS, Tier-3 Data Center Colocation, Corporate Email Hosting, and High-Speed Web Hosting with 99.9% SLA.",
};

const SUB_SERVICES = [
  {
    title: "VMs and VPS",
    tag: "High-Performance Compute",
    desc: "Scalable Virtual Machines (VMs) and Virtual Private Servers (VPS) engineered on enterprise hypervisors with guaranteed vCPU allocations, ECC DDR4/DDR5 RAM, and high-IOPS NVMe SSD storage pools.",
    icon: Cpu,
    features: [
      "Dedicated compute resources with zero noisy-neighbor contention",
      "Instant vertical and horizontal scaling with 1-click provisioning",
      "Automated snapshot backups and point-in-time disaster recovery",
      "Native root SSH and full administrator access with multi-OS support",
    ],
  },
  {
    title: "Co-location Services",
    tag: "Tier-3 Secure Data Center",
    desc: "Host your mission-critical server hardware, SAN storage, and networking appliances inside Z COM's Tier-3 secure colocation facility located in Gulberg-III. Features N+1 redundant UPS, precision HVAC, and carrier cross-connects.",
    icon: Server,
    features: [
      "Quarter, half, and full 42U server rack space allocations",
      "Dual A+B conditioned power feeds backed by industrial diesel generators",
      "Biometric access control, 24/7 CCTV surveillance & physical cage locks",
      "Direct cross-connects to Z COM's 100G metro optical transport core",
    ],
  },
  {
    title: "Corporate Email Hosting",
    tag: "Enterprise Email Suites",
    desc: "Secure, business-class email hosting on clean, dedicated IPs. Features enterprise spam filtering, malware scanning, TLS encryption, and 99.9% mailbox availability with cross-device IMAP/POP3 and webmail access.",
    icon: Mail,
    features: [
      "Custom domain corporate mailboxes with centralized administration",
      "Multi-layered AI-driven anti-spam and anti-phishing defense",
      "DKIM, SPF, and DMARC authentication protocols pre-configured",
      "Seamless integration with Microsoft Outlook, Apple Mail & mobile devices",
    ],
  },
  {
    title: "High-Speed Web Hosting",
    tag: "Fast & Reliable Stacks",
    desc: "Enterprise web hosting platforms optimized for ultra-fast load times, continuous uptime, and seamless WordPress, Node.js, and modern application execution with free SSL certificates and automated daily backups.",
    icon: Globe,
    features: [
      "High-speed NVMe web storage with LiteSpeed / Nginx web servers",
      "Free TLS/SSL certificates with automated 90-day renewal cycles",
      "Intuitive cPanel or Plesk control panel with 1-click application installers",
      "Unmetered monthly bandwidth and automated off-site daily backups",
    ],
  },
];

export default function CloudHostingPage() {
  return (
    <div className="relative transition-colors duration-300 space-y-16 sm:space-y-24 pb-16">
      
      {/* ============================================================
          1. OUTSTANDING CINEMATIC HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <section className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: High-Res Dedicated Image (100% Full Viewport Width) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/services/cloud-hosting.jpg"
            alt="Cloud and Hosting Solutions - Z COM Data Center"
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
              <span className="text-brand-orange font-bold">Cloud &amp; Hosting Solutions</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span className="text-white">TIER-3 COLOCATION &amp; COMPUTE</span>
            </div>
          </div>

          {/* Center Heading & Value Proposition */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-white">OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight drop-shadow-md">
              Cloud &amp; Hosting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                Solutions
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
              Power your enterprise workloads with resilient cloud infrastructure, Tier-3 data center colocation, corporate email suites, and high-availability hosting backed by contractual SLAs.
            </p>

            {/* Quick Action Navigation Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>Deploy Server / Inquire Space</span>
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
                <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Compute Uptime SLA
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Contractual Guarantee
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                <Server className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                Tier-3
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Secure Data Center
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                N+1 Redundancy
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-brand-orange/25 text-brand-orange flex items-center justify-center mb-1.5">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                NVMe Gen4
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Ultra-Fast I/O
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Sub-Millisecond Read
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={100} suffix="G" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Core Optical Link
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Direct Metro Cross-Connect
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
            <span>CLOUD &amp; HOSTING INFRASTRUCTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Enterprise Cloud Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered with high-availability hypervisors, Tier-3 physical colocation, and carrier-grade cross-connects.
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
                Ready to Migrate Your Corporate Workloads?
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
                  <span className="text-xs text-slate-400 block font-semibold">Data Center Facility:</span>
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
