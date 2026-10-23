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
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Corporate Internet Solutions | DIA, MPLS & P2P Fiber | Z COM Networks",
  description:
    "Carrier-grade Corporate Internet Solutions in Lahore: Dedicated Internet Access (DIA), MPLS, VPN Solutions, and Point to Point Fiber Connectivity with 99.99% SLA.",
};

const SUB_SERVICES = [
  {
    title: "DIA (Dedicated Internet Access)",
    tag: "1:1 Contention Ratio",
    desc: "Unshared, symmetric optical fiber bandwidth provisioned directly from our core ring. Backed by a strict 99.99% contractual uptime SLA, static IPv4/IPv6 subnets, and prioritized BGP routing to global tier-1 transit providers.",
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
    features: [
      "Custom Quality of Service (QoS) for voice, video & ERP data",
      "Seamless multi-site branch interconnectivity across Punjab",
      "Sub-50ms self-healing optical ring auto-failover",
      "Centralized traffic shaping and dynamic bandwidth allocation",
    ],
  },
  {
    title: "VPN Solutions",
    tag: "Encrypted Enterprise Tunnels",
    desc: "High-security IPsec and SSL virtual private network tunnels connecting regional branches, remote executive workforces, and cloud environments with hardware-accelerated AES-256 encryption.",
    features: [
      "Hardware-accelerated AES-256 site-to-site tunnels",
      "Zero-latency overhead with high-performance crypto routers",
      "Seamless integration with corporate Active Directory & LDAP",
      "Redundant tunnel failover over dual physical fiber entries",
    ],
  },
  {
    title: "Point to Point Fiber Connectivity",
    tag: "Dedicated Metro Links",
    desc: "Private, dedicated dark and lit optical fiber links connecting your corporate headquarters, primary data centers, and remote facilities throughout Lahore with wire-speed Layer-2 transmission.",
    features: [
      "Sub-millisecond intra-city latency across Lahore metro ring",
      "Completely isolated data transmission outside the public internet",
      "Scalable from 100 Mbps to 100 Gbps dedicated optical waves",
      "Underground armored subterranean conduits with OTDR telemetry",
    ],
  },
];

export default function CorporateInternetPage() {
  return (
    <div className="py-8 sm:py-16 space-y-16 transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-400">Services</span>
          <span>/</span>
          <span className="text-brand-orange font-bold">Corporate Internet Solutions</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Corporate Internet <span className="text-brand-orange">Solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Unrivaled 1:1 dedicated optical connectivity engineered for modern enterprises, financial institutions, and corporate headquarters demanding 99.99% uptime, subterranean fiber resilience, and low-latency global transit.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" />
                </span>
                <span className="text-xs text-slate-500 font-semibold">Core Uptime SLA</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-heading block">
                  1:1 True
                </span>
                <span className="text-xs text-slate-500 font-semibold">Non-Shared Ratio</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center col-span-2 sm:col-span-1">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  &lt; 50ms
                </span>
                <span className="text-xs text-slate-500 font-semibold">Ring Auto-Failover</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>Request Feasibility Survey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/923171118042?text=Hello%20Z%20COM!%20I%20am%20inquiring%20about%20Corporate%20Internet%20Solutions%20(DIA%2C%20MPLS%2C%20P2P%20Fiber)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all border border-slate-200"
              >
                <span>WhatsApp Solutions Desk</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
              </a>
            </div>
          </div>

          {/* Right Image (Image 4: Corporate B2B Handshake & Skyline) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
              <Image
                src="/images/services/corporate-internet.jpg"
                alt="Corporate Internet Solutions - Z COM Networks"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <span className="text-xs font-bold text-brand-orange uppercase block">Enterprise B2B Partner</span>
                <span className="text-sm font-extrabold text-slate-900 block">SLA-Guaranteed Optical Connectivity in Lahore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Services Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            CORE CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Comprehensive Enterprise Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Every solution is delivered with dedicated optical equipment, proactive SLA monitoring, and 24/7 Level-3 engineer support.
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
                DIRECT CORPORATE INQUIRIES
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Ready to Upgrade Your Corporate Internet?
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
