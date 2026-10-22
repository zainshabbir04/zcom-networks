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
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Cloud & Hosting Solutions | VMs, Colocation, Email & Web | Z COM Networks",
  description:
    "Enterprise Cloud and Hosting Solutions in Lahore: Virtual Machines (VMs), VPS, Tier-3 Data Center Colocation, Corporate Email Hosting, and High-Speed Web Hosting.",
};

const SUB_SERVICES = [
  {
    title: "VMs and VPS",
    tag: "High-Performance Compute",
    desc: "Scalable Virtual Machines (VMs) and Virtual Private Servers (VPS) engineered on enterprise hypervisors with guaranteed vCPU allocations, ECC DDR4/DDR5 RAM, and high-IOPS NVMe SSD storage pools.",
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
    desc: "Host your mission-critical server hardware, SAN storage, and networking appliances inside Z COM's Tier-3 secure colocation facility located in Gulberg-III, Lahore. Features N+1 redundant UPS, precision HVAC, and carrier cross-connects.",
    features: [
      "Quarter, half, and full 42U server rack space allocations",
      "Dual A+B conditioned power feeds backed by Cummins diesel generators",
      "Biometric access control, 24/7 CCTV surveillance & physical cage locks",
      "Direct cross-connects to Z COM's 100G metro optical fiber core",
    ],
  },
  {
    title: "Email Hosting",
    tag: "Corporate Email Suites",
    desc: "Secure, business-class email hosting on clean, dedicated IPs. Features enterprise spam filtering, malware scanning, TLS encryption, and 99.9% mailbox availability with cross-device IMAP/POP3 and webmail access.",
    features: [
      "Custom domain corporate mailboxes (e.g., user@yourcompany.com)",
      "Multi-layered AI-driven anti-spam and anti-phishing defense",
      "DKIM, SPF, and DMARC authentication protocols pre-configured",
      "Seamless integration with Microsoft Outlook, Apple Mail & mobile clients",
    ],
  },
  {
    title: "Web Hosting",
    tag: "Fast & Reliable Stacks",
    desc: "Enterprise web hosting platforms optimized for ultra-fast load times, continuous uptime, and seamless WordPress, Node.js, and PHP application execution with free SSL certificates and automated daily backups.",
    features: [
      "High-speed NVMe web storage with LiteSpeed / Nginx web servers",
      "Free Let's Encrypt SSL certificates with automated renewal",
      "Intuitive cPanel or Plesk control panel with 1-click app installers",
      "Unmetered monthly bandwidth and automated off-site daily backups",
    ],
  },
];

export default function CloudHostingPage() {
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
          <span className="text-brand-orange font-bold">Cloud &amp; Hosting Solutions</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Cloud and Hosting <span className="text-brand-orange">Solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Power your enterprise workloads with resilient cloud infrastructure, Tier-3 data center colocation in Lahore, corporate email suites, and high-availability web hosting backed by enterprise SLAs.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" />
                </span>
                <span className="text-xs text-slate-500 font-semibold">Hosting Uptime SLA</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-heading block">
                  Tier-3
                </span>
                <span className="text-xs text-slate-500 font-semibold">Gulberg Data Center</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center col-span-2 sm:col-span-1">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  NVMe Gen4
                </span>
                <span className="text-xs text-slate-500 font-semibold">Ultra-Fast Storage</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>Deploy Server / Inquire Space</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/923171118042?text=Hello%20Z%20COM!%20I%20am%20inquiring%20about%20Cloud%20and%20Hosting%20Solutions%20(VMs%2C%20VPS%2C%20Colocation%2C%20Email)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all border border-slate-200"
              >
                <span>WhatsApp Cloud Desk</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
              </a>
            </div>
          </div>

          {/* Right Image (Image 3: Tier-3 Data Center Colocation Facility Corridor) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
              <Image
                src="/images/services/cloud-hosting.jpg"
                alt="Cloud and Hosting Solutions - Z COM Data Center"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <span className="text-xs font-bold text-brand-orange uppercase block">Gulberg-III Data Center</span>
                <span className="text-sm font-extrabold text-slate-900 block">Tier-3 Colocation &amp; Cloud Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Services Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            CLOUD &amp; HOSTING STACK
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Enterprise Infrastructure Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered with enterprise-grade hypervisors, redundant power, climate control, and low-latency optical interconnects.
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
                DIRECT HOSTING INQUIRIES
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Ready to Provision Your Cloud &amp; Hosting Solution?
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
