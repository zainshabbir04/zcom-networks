import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  Lock,
  ShieldAlert,
  FileCheck,
  Fingerprint,
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Sparkles,
  Layers,
  Activity,
  Zap,
  Cpu,
  KeyRound,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import InfrastructureLoopSlider from "@/components/ui/InfrastructureLoopSlider";

export const metadata: Metadata = {
  title: "Cybersecurity Services | Firewalls, DDoS & Audits | Z COM Networks",
  description:
    "Enterprise Cybersecurity Services: Next-Gen Firewall Management, Multi-gigabit DDoS Attack Mitigation, Network Vulnerability Audits, and Zero-Trust Endpoint Protection.",
};

const SUB_SERVICES = [
  {
    title: "Enterprise Firewall Management",
    tag: "Next-Gen Perimeter Defense",
    desc: "Deployment, stateful inspection, and proactive rule optimization for Next-Generation Firewalls (Fortinet, Cisco ASA, Sophos). Protects internal corporate subnets against unauthorized intrusions, botnets, and command-and-control callbacks.",
    icon: Lock,
    features: [
      "Deep Packet Inspection (DPI) with granular application-layer controls",
      "Automated Intrusion Detection & Prevention Systems (IDS/IPS)",
      "Strict network zone segmentation (DMZ, Corporate LAN, Guest Wi-Fi)",
      "Continuous firewall rule updates and monthly threat intelligence reports",
    ],
  },
  {
    title: "DDoS Mitigation & Defense",
    tag: "Multi-Gigabit Scrubbing",
    desc: "High-capacity automated scrubbing architecture designed to filter high-volume SYN floods, UDP amplification, and application-layer HTTP floods before malicious traffic reaches your enterprise gateway.",
    icon: ShieldAlert,
    features: [
      "In-line automated traffic scrubbing with sub-second diversion",
      "Protection against volumetric, state-exhaustion, and Layer-7 attacks",
      "Uninterrupted business uptime during aggressive targeted cyber attacks",
      "Detailed post-attack forensic telemetry and threat vector analysis",
    ],
  },
  {
    title: "Security Audits & Vulnerability Scans",
    tag: "Proactive Risk Assessment",
    desc: "Thorough ethical hacking, penetration testing, internal subnet scanning, and regulatory compliance reviews to expose and remediate vulnerabilities before bad actors exploit them.",
    icon: FileCheck,
    features: [
      "External and internal network vulnerability scanning and mapping",
      "Ethical penetration testing simulating real-world attacker tactics",
      "Actionable executive remediation reports with risk priority scoring",
      "Regulatory & banking standard compliance verification (PCI-DSS / ISO)",
    ],
  },
  {
    title: "Endpoint Protection & Zero-Trust Access",
    tag: "Modern Identity Defense",
    desc: "Unified endpoint detection and response (EDR), Multi-Factor Authentication (MFA), automated patch management, and Zero-Trust Network Access (ZTNA) policies safeguarding enterprise laptops, servers, and remote users.",
    icon: Fingerprint,
    features: [
      "Automated malware detection, behavioral analysis & ransomware rollback",
      "Zero-Trust Network Access (ZTNA) with adaptive identity validation",
      "Centralized device posture verification and USB/removable media controls",
      "Remote workforce endpoint security with encrypted data tunneling",
    ],
  },
];

const SPECS = [
  { label: "Scrubbing Core", value: "100+ Gbps", desc: "Volumetric DDoS scrubbing capacity" },
  { label: "Threat Diversion", value: "< 1 Second", desc: "Automated real-time anomaly rerouting" },
  { label: "Architecture", value: "Zero-Trust (ZTNA)", desc: "Least-privilege network access controls" },
  { label: "SOC Oversight", value: "24/7 Monitoring", desc: "Continuous perimeter telemetry and alerts" },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Vulnerability Assessment",
    desc: "Complete scan of your public IP blocks, firewall port rules, and internal subnet configurations.",
  },
  {
    step: "02",
    title: "Perimeter Hardening",
    desc: "Implementation of granular NGFW policies, DMZ segmentation, and automated IPS/IDS signatures.",
  },
  {
    step: "03",
    title: "Traffic Scrubbing Integration",
    desc: "Automated routing diversion through high-capacity BGP scrubbing centers to shield your gateway.",
  },
  {
    step: "04",
    title: "Continuous SOC Oversight",
    desc: "Real-time threat intelligence feeds, incident containment, and monthly executive security reviews.",
  },
];

export default function CybersecurityPage() {
  return (
    <div className="relative transition-colors duration-300 space-y-16 sm:space-y-24 pb-16">
      
      {/* ============================================================
          1. OUTSTANDING CINEMATIC HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <section className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: High-Res Dedicated Image (100% Full Viewport Width) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/services/cybersecurity.jpg"
            alt="Cybersecurity Services - Z COM Networks"
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
              <span className="text-brand-orange font-bold">Cybersecurity Services</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span className="text-white">ENTERPRISE THREAT DEFENSE</span>
            </div>
          </div>

          {/* Center Heading & Value Proposition */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-white">OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight drop-shadow-md">
              Cybersecurity{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                Services &amp; Defense
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
              Safeguard your corporate perimeter, server racks, and sensitive business databases with Next-Gen firewall management, multi-gigabit DDoS scrubbing, vulnerability assessments, and Zero-Trust access frameworks.
            </p>

            {/* Quick Action Navigation Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>Request Security Audit</span>
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
                <ShieldAlert className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={100} suffix="+ Gbps" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                DDoS Scrubbing
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Multi-Vector Defense
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                <Fingerprint className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                Zero-Trust
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                ZTNA Architecture
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Identity Verification
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-brand-orange/25 text-brand-orange flex items-center justify-center mb-1.5">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                &lt; 1s
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Threat Diversion
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Automated BGP Reroute
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={24} suffix="/7" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                SOC Monitoring
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Certified Defense Team
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
            <span>SECURITY FRAMEWORK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Multi-Layered Enterprise Cyber Defense
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From volumetric DDoS scrubbing to endpoint Zero-Trust validation and penetration audits.
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
                CYBERSECURITY STANDARDS
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Carrier-Grade Defense Infrastructure
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
          4. THREAT RESPONSE WORKFLOW
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            DEFENSE LIFECYCLE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Continuous Threat Mitigation
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Automated perimeter defense with human intelligence and forensic threat tracking.
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
            Hardware Scrubbing &amp; Secure Gateways
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Underground armored ring transport with isolated management channels and encrypted tunnels.
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
                Ready to Secure Your Corporate Perimeter?
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
                  <span className="text-xs text-slate-400 block font-semibold">Security HQ:</span>
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
