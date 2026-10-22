"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Cloud,
  Cpu,
  ShieldCheck,
  Code2,
  Check,
  ArrowRight,
  Zap,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import InfrastructureLoopSlider from "@/components/ui/InfrastructureLoopSlider";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const CATEGORIES = [
  { id: "all", name: "All Solutions & Products" },
  { id: "corporate", name: "Corporate Internet" },
  { id: "cloud", name: "Cloud & Hosting" },
  { id: "managed-it", name: "Managed IT Solutions" },
  { id: "cybersecurity", name: "Cybersecurity Services" },
  { id: "digital", name: "Digital Solutions" },
];

const SERVICES_DATA = [
  {
    id: "corporate",
    category: "corporate",
    icon: <Globe className="w-8 h-8 text-brand-orange" />,
    title: "Corporate Internet Solutions",
    tagline: "Dedicated, uncontended enterprise connectivity backed by contractual SLAs.",
    description:
      "Enterprise-grade optical internet connectivity with guaranteed 1:1 symmetrical bandwidth, dedicated subterranean routing, and proactive NOC monitoring for mission-critical operations across Lahore.",
    items: [
      {
        title: "DIA (Dedicated Internet Access)",
        desc: "1:1 Non-shared optical bandwidth with 99.99% core uptime SLA, static IPs, and direct Level-3 engineer support.",
      },
      {
        title: "MPLS Solutions",
        desc: "Multi-Protocol Label Switching for secure, traffic-prioritized corporate multi-branch networks with QoS guarantees.",
      },
      {
        title: "VPN Solutions",
        desc: "Encrypted site-to-site and remote access virtual private network tunnels ensuring seamless intra-office data exchange.",
      },
      {
        title: "Point to Point Fiber Connectivity",
        desc: "Direct private optical links interconnecting corporate headquarters, disaster recovery sites, and branch facilities in Lahore.",
      },
    ],
  },
  {
    id: "cloud",
    category: "cloud",
    icon: <Cloud className="w-8 h-8 text-brand-orange" />,
    title: "Cloud and Hosting Solutions",
    tagline: "Scalable virtual compute, secure data center colocation, and corporate email suites.",
    description:
      "Enterprise-ready cloud infrastructure, tier-3 secure data center colocation, and corporate email hosting engineered for high availability, low latency, and rapid business scaling.",
    items: [
      {
        title: "VMs and VPS",
        desc: "High-performance Virtual Machines and Virtual Private Servers powered by dedicated vCPUs, RAM, and ultra-fast NVMe storage.",
      },
      {
        title: "Co-location Services",
        desc: "Tier-3 secure server rack space in Lahore with redundant UPS power, climate control, biometric access, and multi-carrier cross-connects.",
      },
      {
        title: "Email Hosting",
        desc: "Dedicated corporate email mailboxes on protected IPs with enterprise spam/malware filtering and 99.9% uptime reliability.",
      },
      {
        title: "Web Hosting",
        desc: "High-speed Linux and Windows web hosting with free SSL certificates, automated daily backups, and cPanel/Plesk management.",
      },
    ],
  },
  {
    id: "managed-it",
    category: "managed-it",
    icon: <Cpu className="w-8 h-8 text-brand-orange" />,
    title: "Managed IT Solutions and Services",
    tagline: "24/7 NOC oversight, proactive hardware maintenance, and rapid field dispatch.",
    description:
      "Comprehensive managed IT administration, optical infrastructure operations, preventative hardware servicing, and on-site field engineering to guarantee zero corporate downtime.",
    items: [
      {
        title: "24/7 Managed NOC Monitoring",
        desc: "Continuous real-time oversight of network health, optical attenuation, and packet jitter by certified network engineers.",
      },
      {
        title: "Server & Hardware Maintenance",
        desc: "Preventative and emergency hardware servicing for enterprise switches, routers, firewalls, and server racks.",
      },
      {
        title: "Structured Cabling & Networking",
        desc: "End-to-end CAT6/fiber optic cabling, patch panel termination, switching topology design, and enterprise Wi-Fi deployment.",
      },
      {
        title: "On-Site Engineering Dispatch",
        desc: "Dedicated Lahore-based rapid response field teams equipped with fusion splicers and OTDR diagnostic equipment.",
      },
    ],
  },
  {
    id: "cybersecurity",
    category: "cybersecurity",
    icon: <ShieldCheck className="w-8 h-8 text-brand-orange" />,
    title: "Cybersecurity Services",
    tagline: "Multi-layered perimeter defense, threat detection, and corporate data protection.",
    description:
      "Robust cybersecurity frameworks safeguarding corporate networks, cloud servers, and proprietary corporate databases from sophisticated cyber threats and volumetric disruptions.",
    items: [
      {
        title: "Enterprise Firewall Management",
        desc: "Next-Generation Firewall (NGFW) deployment, granular application filtering, and automated intrusion prevention policies.",
      },
      {
        title: "DDoS Mitigation & Defense",
        desc: "Multi-gigabit traffic scrubbing centers that neutralize volumetric, protocol, and application-layer DDoS attacks before they reach your network.",
      },
      {
        title: "Security Audits & Vulnerability Scans",
        desc: "Routine penetration testing, vulnerability assessments, and regulatory compliance audits to uncover potential entry points.",
      },
      {
        title: "Endpoint Protection & Access Control",
        desc: "Centralized endpoint security, malware detection, automated patch management, and Zero-Trust network access (ZTNA) controls.",
      },
    ],
  },
  {
    id: "digital",
    category: "digital",
    icon: <Code2 className="w-8 h-8 text-brand-orange" />,
    title: "Digital Solutions",
    tagline: "Custom web development, cross-platform mobile apps, and creative brand design.",
    description:
      "Modern digital engineering services combining bespoke web portal development, native and hybrid mobile applications, and impactful visual design to elevate your corporate digital footprint.",
    items: [
      {
        title: "Website Development",
        desc: "High-performance responsive corporate websites, web applications, customer portals, and headless CMS integrations.",
      },
      {
        title: "App Development",
        desc: "Cross-platform and native mobile software for iOS and Android built with scalable cloud backends and smooth user experiences.",
      },
      {
        title: "Graphic Designing",
        desc: "Complete corporate brand identities, logo design, company brochures, marketing collateral, and UI/UX interface systems.",
      },
    ],
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <div className="py-8 sm:py-16 space-y-16 transition-colors duration-300">
      
      {/* ============================================================
          1. PAGE HERO HEADER & MOTTO (MATCHING OFFICIAL FLYER)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl p-8 sm:p-14 text-center bg-slate-900">
          <div className="absolute inset-0 -z-20">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80"
              alt="Optical Fiber Backbone Network"
              fill
              className="object-cover object-center filter brightness-[0.22] contrast-125"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/70 to-transparent -z-10" />

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Our Services &amp; <span className="text-brand-orange">Products</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed">
              Reliable solutions. Smarter connectivity. For a stronger tomorrow.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-102"
                        : "bg-white/15 text-slate-200 hover:text-white hover:bg-white/25 border border-white/15"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. 5 OFFICIAL SERVICES & PRODUCTS CARDS
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 hover:border-brand-orange/60 transition-all duration-300 shadow-xl shadow-slate-200/50 space-y-6"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 shadow-sm">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-brand-orange font-bold mt-0.5">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-brand-orange/25 transition-all shrink-0 w-full sm:w-auto text-center"
              >
                <span>Request Feasibility</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
              {service.description}
            </p>

            {/* Sub-services Grid (Matching Flyer Bullet Points) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {service.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 hover:bg-orange-50/40 border border-slate-200/80 hover:border-orange-200 transition-all space-y-2 group"
                >
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm group-hover:text-brand-orange transition-colors">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-7 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ============================================================
          3. OFFICIAL FLYER CONTACT INFORMATION BANNER
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                DIRECT CORPORATE INQUIRIES
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Connect Directly with Z COM Networks
              </h3>
            </div>

            {/* 4 Official Contact Points from the Flyer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {/* Phone */}
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

              {/* Email */}
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

              {/* Address */}
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

              {/* Web */}
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

      {/* ============================================================
          4. OPTICAL INFRASTRUCTURE ARCHITECTURE LOOP
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>OPTICAL INFRASTRUCTURE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            How We Deliver <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" /> Availability
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From subterranean armored trenches to multi-homed BGP edge routing, explore the hardware
            powering our SLA commitments.
          </p>
        </div>

        <InfrastructureLoopSlider />
      </section>

      {/* ============================================================
          5. BOTTOM CONSULTATION CTA
          ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200 text-center space-y-6 shadow-xl shadow-slate-200/50">
          <div className="w-12 h-12 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Need a Bespoke Topology or Dedicated Circuit?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Our Senior Network Engineers can architect point-to-point dark fiber links, custom BGP
            peering, VMs/VPS hosting, and managed enterprise firewalls for your organization.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              <span>Consult Our Engineering Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
