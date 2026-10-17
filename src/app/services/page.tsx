"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  Radio,
  Monitor,
  Smartphone,
  Cloud,
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import InfrastructureLoopSlider from "@/components/ui/InfrastructureLoopSlider";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const CATEGORIES = [
  { id: "all", name: "All Solutions" },
  { id: "corporate", name: "Corporate Internet" },
  { id: "connectivity", name: "Internet Connectivity" },
  { id: "digital", name: "Digital Solutions" },
  { id: "webapp", name: "Web & App Solutions" },
  { id: "beyond", name: "Beyond Connectivity" },
];

const SERVICES_DATA = [
  {
    id: "corporate-1",
    category: "corporate",
    icon: <Briefcase className="w-8 h-8 text-brand-orange" />,
    title: "Corporate Internet Solutions",
    tagline: "Dedicated, uncontended enterprise connectivity backed by contractual SLAs.",
    description:
      "Enterprise-grade internet connectivity with guaranteed symmetrical bandwidth, dedicated routing, and proactive SLA monitoring for uninterrupted operations.",
    items: [
      {
        title: "Dedicated Internet Access (DIA)",
        desc: "1:1 Non-shared optical bandwidth with 99.9% uptime SLA.",
      },
      {
        title: "MPLS & VPN Solutions",
        desc: "Secure multi-site WAN connectivity and private data tunnels.",
      },
      {
        title: "Point-to-Point Fiber Links",
        desc: "Direct dark and lit fiber links between corporate facilities in Lahore.",
      },
    ],
  },
  {
    id: "conn-2",
    category: "connectivity",
    icon: <Radio className="w-8 h-8 text-brand-orange" />,
    title: "Internet Connectivity",
    tagline: "Versatile, high-speed broadband options for SMEs and residential hubs.",
    description:
      "Versatile, high-speed connectivity options designed for small and medium businesses, residential hubs, and local enterprise networks.",
    items: [
      {
        title: "SME Internet Business Solutions",
        desc: "High-priority bandwidth tailored for growing businesses.",
      },
      {
        title: "Wireless & Fiber Connectivity",
        desc: "Hybrid optical and wireless backup for high availability.",
      },
      {
        title: "L2 Services",
        desc: "Layer 2 data link transmission across metropolitan nodes.",
      },
      {
        title: "Networking Services",
        desc: "Structured cabling, switching, routing, and Wi-Fi architecture.",
      },
      {
        title: "Security & Surveillance",
        desc: "Integrated IP surveillance and monitoring network setups.",
      },
    ],
  },
  {
    id: "digital-3",
    category: "digital",
    icon: <Monitor className="w-8 h-8 text-brand-orange" />,
    title: "Digital Solutions",
    tagline: "Strategic digital presence and brand elevation.",
    description:
      "Elevate your digital footprint with creative and strategic services designed to strengthen brand visibility and search presence.",
    items: [
      {
        title: "Web Development",
        desc: "High-performance websites and bespoke digital portals.",
      },
      {
        title: "Search Engine Optimization (SEO)",
        desc: "Search visibility strategies to drive organic client acquisition.",
      },
      {
        title: "Graphic Designing",
        desc: "Impactful brand identity, collateral, and user experience design.",
      },
    ],
  },
  {
    id: "webapp-4",
    category: "webapp",
    icon: <Smartphone className="w-8 h-8 text-brand-orange" />,
    title: "Web & App Solutions",
    tagline: "Engineered web platforms, mobile software, and secure hosting.",
    description:
      "Custom software, mobile application, web hosting, and cybersecurity solutions tailored to accelerate your organization's digital workflow.",
    items: [
      {
        title: "Web Hosting",
        desc: "High-availability Linux and Windows server hosting stacks.",
      },
      {
        title: "Web Development",
        desc: "Full-stack web application engineering and CMS solutions.",
      },
      {
        title: "App Development",
        desc: "Cross-platform mobile applications for iOS and Android.",
      },
      {
        title: "Website Security",
        desc: "SSL certificates, firewall configurations, and malware protection.",
      },
      {
        title: "Website Monetization",
        desc: "Architectural optimization for digital revenue channels.",
      },
    ],
  },
  {
    id: "beyond-5",
    category: "beyond",
    icon: <Cloud className="w-8 h-8 text-brand-orange" />,
    title: "Beyond Connectivity Solutions",
    tagline: "Enterprise cloud, data center, and managed network services.",
    description:
      "Comprehensive ICT, data center infrastructure, and managed network capabilities empowering modern enterprises to scale securely.",
    items: [
      {
        title: "Dedicated Personal / Business Email Hosting",
        desc: "Secure, spam-filtered corporate mailboxes on dedicated IPs.",
      },
      {
        title: "Cloud Services & Hosting",
        desc: "Scalable virtual servers, cloud storage, and backup systems.",
      },
      {
        title: "Data Center & Colocation",
        desc: "Tier-3 secure rack spaces with redundant power and climate control.",
      },
      {
        title: "Managed Network Services",
        desc: "End-to-end NOC monitoring, firewall management, and SD-WAN.",
      },
      {
        title: "Cybersecurity Solutions",
        desc: "DDoS mitigation, endpoint detection, and security audits.",
      },
      {
        title: "ICT & IoT Solutions",
        desc: "Smart facility sensors, telemetry, and automated network nodes.",
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
    <div className="py-12 sm:py-20 space-y-20 transition-colors duration-300">
      {/* Page Header with Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-black/50 p-8 sm:p-14 text-center">
          <div className="absolute inset-0 -z-20">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80"
              alt="Optical Fiber Backbone Network"
              fill
              className="object-cover object-center filter brightness-[0.25] contrast-125"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent -z-10" />

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>PORTFOLIO OF SERVICES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Comprehensive Connectivity &amp; Digital Solutions
            </h1>

            <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
              From mission-critical corporate fiber links to end-to-end digital transformation, explore
              our full spectrum of enterprise and residential services.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                        : "bg-white/15 text-gray-200 hover:text-white hover:bg-white/25 border border-white/15"
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

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white dark:bg-brand-card/70 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-brand-orange/40 transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-black/50 space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-brand-orange/15 border border-orange-200 dark:border-brand-orange/20 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-brand-orange font-semibold mt-0.5">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange-100 dark:bg-brand-orange/20 hover:bg-brand-orange text-brand-orange hover:text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-orange-200 dark:border-brand-orange/30 transition-colors shrink-0"
              >
                <span>Request Feasibility</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed max-w-4xl">
              {service.description}
            </p>

            {/* Sub-services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {service.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-brand-cardDark/70 border border-slate-200/80 dark:border-white/5 space-y-1.5"
                >
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-sm">
                    <div className="w-4 h-4 rounded-full bg-orange-100 dark:bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-gray-400 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Infrastructure Loop Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-brand-orange/15 border border-orange-200 dark:border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>OPTICAL INFRASTRUCTURE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            How We Deliver <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" /> Availability
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400">
            From subterranean armored trenches to multi-homed BGP edge routing, explore the hardware
            powering our SLA commitments.
          </p>
        </div>

        <InfrastructureLoopSlider />
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-brand-card/70 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-white/10 text-center space-y-6 shadow-xl shadow-slate-200/50 dark:shadow-black/50">
          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-brand-orange/15 text-brand-orange flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Need a Bespoke Topology or Dedicated Circuit?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-xl mx-auto">
            Our Senior Network Engineers can architect point-to-point dark fiber links, custom BGP
            peering, and managed enterprise firewalls for your organization.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5"
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
