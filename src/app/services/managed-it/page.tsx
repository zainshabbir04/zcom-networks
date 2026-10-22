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
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Managed IT Solutions & Services | 24/7 NOC & Hardware | Z COM Networks",
  description:
    "End-to-end Managed IT Solutions in Lahore: 24/7 Managed NOC Monitoring, Server & Hardware Maintenance, Structured Network Cabling, and Emergency Field Engineering.",
};

const SUB_SERVICES = [
  {
    title: "24/7 Managed NOC Monitoring",
    tag: "Proactive Network Telemetry",
    desc: "Continuous round-the-clock surveillance of optical link attenuation, interface saturation, BGP path health, and ping jitter from our Gulberg-III Network Operations Center. We resolve anomalies before users experience disruptions.",
    features: [
      "Real-time SNMP/NetFlow telemetry across all managed network devices",
      "Automated incident alert generation with immediate technician escalation",
      "Monthly SLA compliance reports, bandwidth analytics & trend audits",
      "Direct line to Level-3 network engineers (no outsourced call centers)",
    ],
  },
  {
    title: "Enterprise Server & Hardware Maintenance",
    tag: "Preventative & Reactive Care",
    desc: "Scheduled health audits, firmware lifecycle patching, PSU redundancy checks, and rapid hardware component replacements for enterprise server racks, switches, routers, and NAS/SAN appliances.",
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
    desc: "Turnkey planning, installation, and certification of high-performance CAT6/CAT6A copper and multi-core fiber optic cabling, server rack organization, patch panel labeling, and enterprise campus Wi-Fi deployment.",
    features: [
      "Fluke-certified CAT6/CAT6A copper and single-mode/multi-mode fiber runs",
      "Clean server rack layout, patch cord cable management & labeling",
      "High-density Wi-Fi 6 access point engineering for campuses & hospitals",
      "Core, distribution, and access layer enterprise switching setups",
    ],
  },
  {
    title: "On-Site Engineering Emergency Dispatch",
    tag: "Sub-30 Minute MTTR",
    desc: "Rapid deployment of certified optical and systems engineers directly to your Lahore corporate site. Equipped with Fujikura optical fusion splicers, OTDR fault locators, and replacement hardware modules.",
    features: [
      "Contractual sub-30 minute emergency on-site response in Lahore",
      "Advanced OTDR fiber break pinpointing and precision splicing",
      "Disaster recovery circuit cutovers and emergency temporary links",
      "Local Gulberg NOC fleet deployed across all Lahore commercial hubs",
    ],
  },
];

export default function ManagedItPage() {
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
          <span className="text-brand-orange font-bold">Managed IT Solutions and Services</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Managed IT Solutions <span className="text-brand-orange">&amp; Services</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Eliminate downtime and empower your business operations with 24/7 NOC oversight, proactive enterprise server maintenance, certified structured cabling, and rapid on-site field engineering across Lahore.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  <AnimatedCounter from={0} to={24} suffix="/7/365" />
                </span>
                <span className="text-xs text-slate-500 font-semibold">Active NOC Monitoring</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-heading block">
                  &lt; 30 min
                </span>
                <span className="text-xs text-slate-500 font-semibold">Emergency MTTR</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center col-span-2 sm:col-span-1">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  Level-3
                </span>
                <span className="text-xs text-slate-500 font-semibold">Certified Engineers</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>Request IT Infrastructure Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/923171118042?text=Hello%20Z%20COM!%20I%20am%20inquiring%20about%20Managed%20IT%20Solutions%20and%20NOC%20Services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all border border-slate-200"
              >
                <span>WhatsApp NOC Desk</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
              </a>
            </div>
          </div>

          {/* Right Image (Image 1: High Density Rack with Patching Cables & Switches) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
              <Image
                src="/images/services/managed-it.jpg"
                alt="Managed IT Solutions and Services - Z COM Hardware Infrastructure"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <span className="text-xs font-bold text-brand-orange uppercase block">Managed Network Operations</span>
                <span className="text-sm font-extrabold text-slate-900 block">Server Maintenance &amp; 24/7 NOC Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Services Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            CORE SERVICES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Managed IT Architecture &amp; Field Support
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Certified technical management designed to relieve internal corporate IT teams while maintaining 100% operational uptime.
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
                DIRECT NOC ESCALATION
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Need Dedicated Enterprise IT Support?
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
                  <Zap className="w-5 h-5" />
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
