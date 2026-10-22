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
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Cybersecurity Services | Firewalls, DDoS & Audits | Z COM Networks",
  description:
    "Enterprise Cybersecurity Services in Lahore: Next-Gen Firewall Management, Multi-gigabit DDoS Attack Mitigation, Network Vulnerability Audits, and Zero-Trust Endpoint Protection.",
};

const SUB_SERVICES = [
  {
    title: "Enterprise Firewall Management",
    tag: "Next-Gen Perimeter Defense",
    desc: "Deployment, stateful inspection, and proactive rule optimization for Next-Generation Firewalls (Fortinet, Cisco ASA, Sophos). Protects internal corporate subnets against unauthorized intrusions, botnets, and command-and-control callbacks.",
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
    desc: "Thorough ethical hacking, penetration testing, internal subnet scanning, and telecom regulatory compliance reviews to expose and remediate vulnerabilities before bad actors exploit them.",
    features: [
      "External and internal network vulnerability scanning and mapping",
      "Ethical penetration testing simulating real-world hacker tactics",
      "Actionable executive remediation reports with risk priority scoring",
      "Regulatory telecom & banking compliance verification (PCI-DSS / ISO)",
    ],
  },
  {
    title: "Endpoint Protection & Zero-Trust Access",
    tag: "Modern Identity Defense",
    desc: "Unified endpoint detection and response (EDR), Multi-Factor Authentication (MFA), automated patch management, and Zero-Trust Network Access (ZTNA) policies safeguarding enterprise laptops, servers, and remote users.",
    features: [
      "Automated malware detection, behavioral analysis & ransomware rollback",
      "Zero-Trust Network Access (ZTNA) with adaptive identity validation",
      "Centralized device posture verification and USB/removable media controls",
      "Remote workforce endpoint security with encrypted data tunneling",
    ],
  },
];

export default function CybersecurityPage() {
  return (
    <div className="py-8 sm:py-16 space-y-16 transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link>
          <span>/</span>
          <span className="text-brand-orange font-bold">Cybersecurity Services</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Cybersecurity <span className="text-brand-orange">Services</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Multi-layered perimeter defense, multi-gigabit DDoS mitigation, vulnerability penetration assessments, and Zero-Trust access architectures safeguarding corporate networks and confidential enterprise assets across Lahore.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  100%
                </span>
                <span className="text-xs text-slate-500 font-semibold">Zero-Trust Framework</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-heading block">
                  Multi-Gbps
                </span>
                <span className="text-xs text-slate-500 font-semibold">DDoS Scrubbing Core</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center col-span-2 sm:col-span-1">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  NGFW
                </span>
                <span className="text-xs text-slate-500 font-semibold">Next-Gen Defense</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>Request Security Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/923171118042?text=Hello%20Z%20COM!%20I%20am%20inquiring%20about%20Cybersecurity%20Services%20(Firewalls%2C%20DDoS%2C%20Audits)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all border border-slate-200"
              >
                <span>WhatsApp Security Desk</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
              </a>
            </div>
          </div>

          {/* Right Image (Image 5: Laptop on Desk with Connected City Network & Shield Icon) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
              <Image
                src="/images/services/cybersecurity.jpg"
                alt="Cybersecurity Services - Z COM Protected Network Infrastructure"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <span className="text-xs font-bold text-brand-orange uppercase block">Protected Cyber Perimeter</span>
                <span className="text-sm font-extrabold text-slate-900 block">Firewall &amp; DDoS Defense Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Services Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            DEFENSE LAYERS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Enterprise Security Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered with deep packet inspection, real-time threat neutralization, and strict access controls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUB_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-orange/60 shadow-xl shadow-slate-200/40 transition-all duration-300 space-y-4 group"
            >
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading group-hover:text-brand-orange transition-colors">
                  {srv.title}
                </h3>
                <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold">
                  {srv.tag}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {srv.desc}
              </p>

              <div className="space-y-2 pt-2">
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
          ))}
        </div>
      </section>

      {/* 3. Direct Contact Strip (From Flyer) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                DIRECT SECURITY INQUIRIES
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Shield Your Corporate Network Today
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
                  <span className="text-xs text-slate-400 block font-semibold">Address:</span>
                  <span className="text-xs font-semibold text-white leading-tight block">
                    7/4, E-3 Main Boulevard, Gulberg-III, Lahore.
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
                  <span className="text-xs text-slate-400 block font-semibold">Web:</span>
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
