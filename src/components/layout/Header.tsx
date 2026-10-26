"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  ChevronDown,
  Globe,
  Cloud,
  Server,
  ShieldCheck,
  Code2,
  ArrowRight,
  Sparkles,
  Phone,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "#", isDropdown: true },
  { name: "Why Us", href: "/why-us" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const SERVICES_MENU = [
  {
    name: "Corporate Solutions",
    href: "/services/corporate-internet",
    badge: "1:1 DIA",
    desc: "1:1 Symmetrical Dedicated Internet Access (DIA), MPLS & P2P links",
    icon: Globe,
  },
  {
    name: "Cloud & Hosting Solutions",
    href: "/services/cloud-hosting",
    badge: "Cloud & VPS",
    desc: "High-performance VMs, VPS, enterprise email & tier-3 colocation",
    icon: Cloud,
  },
  {
    name: "Managed IT Solutions",
    href: "/services/managed-it",
    badge: "24/7 NOC",
    desc: "Proactive NOC infrastructure, LAN/WAN architecture & Wi-Fi 6",
    icon: Server,
  },
  {
    name: "Cybersecurity Services",
    href: "/services/cybersecurity",
    badge: "DDoS Defense",
    desc: "Next-gen firewalls, multi-vector DDoS defense & endpoint security",
    icon: ShieldCheck,
  },
  {
    name: "Digital Solutions",
    href: "/services/digital-solutions",
    badge: "Web & Apps",
    desc: "Bespoke corporate websites, native mobile apps & UI/UX systems",
    icon: Code2,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string>("Services");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();

  // Lock body scroll when menu is open and initialize hovered nav
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setHoveredNav("Services");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setHoveredNav("Services");
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300 bg-transparent border-transparent shadow-none">
        <div className="max-w-7xl mx-auto py-3 sm:py-3.5 px-4 sm:px-8 transition-all duration-300">
          <div className="flex items-center justify-between gap-4 h-11 sm:h-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative h-9 sm:h-11 w-36 sm:w-48 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="https://zcomnetworks.com.pk/assets/zcom-logo.png?v=2"
                  alt="Z COM Networks - Premier Enterprise Optical ISP"
                  fill
                  className="object-contain object-left drop-shadow-sm"
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Right Controls: Modern Menu Button (On ALL Pages) */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Navigation Menu"
                className="px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 shadow-md cursor-pointer group bg-slate-900/90 hover:bg-brand-orange text-white border border-slate-700/80 hover:border-brand-orange backdrop-blur-md"
                title="Open Navigation Menu"
              >
                <div className="flex flex-col gap-1 w-4">
                  <span className="h-0.5 w-4 bg-white rounded-full transition-transform group-hover:translate-x-0.5"></span>
                  <span className="h-0.5 w-3 bg-brand-orange rounded-full group-hover:w-4 transition-all"></span>
                  <span className="h-0.5 w-4 bg-white rounded-full transition-transform group-hover:-translate-x-0.5"></span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          WHITE THEME FULL-SCREEN MENU OVERLAY WITH SERVICES ON LEFT SIDE
          ============================================================ */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-out overflow-y-auto ${
          isOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Pure White Glass Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-white/98 backdrop-blur-2xl -z-10"
        />

        {/* Menu Content Wrapper */}
        <div className="min-h-screen flex flex-col justify-between p-6 sm:p-10 max-w-6xl mx-auto text-slate-800">
          
          {/* Header Bar inside Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <div className="relative h-9 sm:h-11 w-36 sm:w-48">
                <Image
                  src="https://zcomnetworks.com.pk/assets/zcom-logo.png?v=2"
                  alt="Z COM Networks"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </Link>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-300 hover:bg-brand-orange hover:border-brand-orange text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:rotate-90 shadow-sm cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Main Menu Area: 2-Column Split on Desktop, Single Column on Mobile */}
          <div className="flex-1 flex flex-col justify-center py-6 sm:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
              
              {/* ============================================================
                  LEFT COLUMN (Desktop): SERVICES DROP MENU ON THE LEFT SIDE
                  ============================================================ */}
              <div className="hidden lg:block lg:col-span-7 w-full">
                {hoveredNav === "Services" && (
                  <div
                    style={{ backgroundColor: "#ffffff" }}
                    className="p-5 xl:p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl space-y-3 animate-in fade-in slide-in-from-left-4 duration-300"
                  >
                    <div className="px-2 py-1 flex items-center justify-between text-xs font-black uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2 mb-1">
                      <span className="flex items-center gap-2 text-slate-800">
                        <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                        Specialized Solutions
                      </span>
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-orange-100 text-brand-orange border border-orange-200">
                        5 Services
                      </span>
                    </div>

                    <div className="space-y-2">
                      {SERVICES_MENU.map((srv) => {
                        const Icon = srv.icon;
                        const isSrvActive = pathname === srv.href;
                        return (
                          <Link
                            key={srv.href}
                            href={srv.href}
                            onClick={() => setIsOpen(false)}
                            style={{ backgroundColor: isSrvActive ? "#fff7ed" : "#f8fafc" }}
                            className={`flex items-center gap-3.5 p-3 rounded-2xl transition-all duration-200 border group ${
                              isSrvActive
                                ? "text-brand-orange font-bold shadow-sm border-brand-orange/40 bg-orange-50/60"
                                : "text-slate-900 border-slate-200/80 hover:border-brand-orange/60 hover:bg-orange-50/30 hover:translate-x-1"
                            }`}
                          >
                            <div
                              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                                isSrvActive
                                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30"
                                  : "bg-orange-100 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="text-left flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1.5">
                                <span className="text-sm font-extrabold truncate text-slate-900 group-hover:text-brand-orange transition-colors">
                                  {srv.name}
                                </span>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-brand-orange border border-orange-200/60 shrink-0">
                                  {srv.badge}
                                </span>
                              </div>
                              <div className="text-xs text-slate-600 line-clamp-1 mt-0.5 font-medium">
                                {srv.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* SLA Quality Ribbon */}
                    <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold mt-1">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Contractual SLA: 99.99% Availability
                      </span>
                      <span className="text-brand-orange font-bold">24/7 Dedicated NOC</span>
                    </div>
                  </div>
                )}

                {hoveredNav === "About Us" && (
                  <div className="p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold uppercase tracking-wider">
                      ABOUT Z COM NETWORKS
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 font-heading">
                      Carrier-Grade Optical Backbone
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Engineering uncontended subterranean optical transmission with 1,200+ km metro conduits, 99.99% uptime SLA, and direct Level-3 NOC engineering support.
                    </p>
                    <Link
                      href="/about"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm hover:underline"
                    >
                      Explore Executive Architecture &rarr;
                    </Link>
                  </div>
                )}

                {hoveredNav === "Why Us" && (
                  <div className="p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold uppercase tracking-wider">
                      THE Z COM ADVANTAGE
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 font-heading">
                      Built for Mission-Critical Speed
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      1:1 true symmetrical bandwidth, sub-50ms self-healing optical ring auto-failover, zero Fair Usage Policy throttling, and guaranteed contractual SLAs.
                    </p>
                    <Link
                      href="/why-us"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm hover:underline"
                    >
                      Compare Features &rarr;
                    </Link>
                  </div>
                )}

                {hoveredNav === "Careers" && (
                  <div className="p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold uppercase tracking-wider">
                      JOIN OUR ENGINEERING TEAM
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 font-heading">
                      Shape the Future of Connectivity
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Work directly with enterprise DWDM hardware, Juniper/Cisco routers, and 24/7 network operations at our central headquarters.
                    </p>
                    <Link
                      href="/careers"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm hover:underline"
                    >
                      View Open Positions &rarr;
                    </Link>
                  </div>
                )}

                {hoveredNav === "Contact" && (
                  <div className="p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold uppercase tracking-wider">
                      24/7 ENTERPRISE NOC SUPPORT
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 font-heading">
                      Direct NOC Escalation
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Speak directly with Level-3 network operations engineers. Fast on-site technician dispatch across all metro commercial districts.
                    </p>
                    <div className="text-sm font-bold text-slate-900">
                      NOC Phone: <span className="text-brand-orange">+92 42 345 11 111</span>
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm hover:underline"
                    >
                      Open Contact Desk &rarr;
                    </Link>
                  </div>
                )}

                {hoveredNav === "Home" && (
                  <div className="p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold uppercase tracking-wider">
                      Z COM NETWORKS
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 font-heading">
                      Reliable Solutions. Smarter Connectivity.
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Premier enterprise optical ISP delivering 1:1 dedicated internet, private MPLS rings, secure cloud infrastructure, and 24/7 monitoring.
                    </p>
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm hover:underline"
                    >
                      Visit Home Page &rarr;
                    </Link>
                  </div>
                )}
              </div>

              {/* ============================================================
                  RIGHT COLUMN: MAIN NAVIGATION HEADINGS
                  ============================================================ */}
              <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-start">
                <nav className="flex flex-col items-center lg:items-start gap-2 sm:gap-3 w-full max-w-md">
                  {NAV_LINKS.map((link) => {
                    const isServices = link.name === "Services";
                    const isActive =
                      pathname === link.href ||
                      (isServices && pathname.startsWith("/services"));
                    const isHovered = hoveredNav === link.name;

                    if (isServices) {
                      return (
                        <div key={link.name} className="w-full flex flex-col items-center lg:items-start">
                          <button
                            type="button"
                            onMouseEnter={() => setHoveredNav("Services")}
                            onClick={() => {
                              setHoveredNav("Services");
                              setMobileServicesOpen(!mobileServicesOpen);
                            }}
                            aria-expanded={hoveredNav === "Services" || mobileServicesOpen}
                            className={`w-full flex items-center justify-between py-2.5 sm:py-3 px-6 rounded-2xl text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase font-heading tracking-tight transition-all duration-200 cursor-pointer ${
                              isHovered || isActive
                                ? "text-brand-orange bg-orange-50 font-black shadow-sm"
                                : "text-slate-800 hover:text-brand-orange hover:bg-slate-100/80"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {/* Indicator arrow pointing towards left side services panel on desktop */}
                              <span className="hidden lg:inline-block text-brand-orange text-2xl font-bold transition-transform group-hover:-translate-x-1">
                                &larr;
                              </span>
                              <span>{link.name}</span>
                            </span>

                            {/* Badge showing 5 services on desktop */}
                            <span className="hidden lg:inline-block text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-orange text-white">
                              5 Solutions
                            </span>

                            {/* Mobile chevron */}
                            <ChevronDown
                              className={`lg:hidden w-6 h-6 transition-transform duration-300 text-brand-orange ${
                                mobileServicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Mobile-Only Dropdown Accordion */}
                          {mobileServicesOpen && (
                            <div
                              style={{ backgroundColor: "#ffffff" }}
                              className="lg:hidden w-full mt-3 p-3 rounded-2xl bg-white border-2 border-slate-200 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
                            >
                              <div className="px-2 py-1.5 flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-1.5 mb-1">
                                <span>Specialized Solutions</span>
                                <span className="text-brand-orange font-bold">5 Services</span>
                              </div>
                              {SERVICES_MENU.map((srv) => {
                                const Icon = srv.icon;
                                const isSrvActive = pathname === srv.href;
                                return (
                                  <Link
                                    key={srv.href}
                                    href={srv.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setMobileServicesOpen(false);
                                    }}
                                    style={{ backgroundColor: isSrvActive ? "#fff7ed" : "#f8fafc" }}
                                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 border ${
                                      isSrvActive
                                        ? "text-brand-orange font-bold shadow-sm border-brand-orange/40"
                                        : "text-slate-900 border-slate-200/80 hover:border-brand-orange/50"
                                    }`}
                                  >
                                    <div
                                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                                        isSrvActive
                                          ? "bg-brand-orange text-white shadow-sm"
                                          : "bg-orange-100 text-brand-orange"
                                      }`}
                                    >
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="text-left flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-1">
                                        <span className="text-xs sm:text-sm font-extrabold truncate text-slate-900">
                                          {srv.name}
                                        </span>
                                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-100 text-brand-orange shrink-0">
                                          {srv.badge}
                                        </span>
                                      </div>
                                      <div className="text-[11px] text-slate-600 truncate mt-0.5">
                                        {srv.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onMouseEnter={() => setHoveredNav(link.name)}
                        onClick={() => setIsOpen(false)}
                        className={`w-full text-center lg:text-left py-2.5 sm:py-3 px-6 rounded-2xl text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase font-heading tracking-tight transition-all duration-200 ${
                          isHovered || isActive
                            ? "text-brand-orange bg-orange-50 font-black shadow-sm"
                            : "text-slate-800 hover:text-brand-orange hover:bg-slate-100/80 hover:translate-x-1"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                {/* Direct NOC Hotline Contact Card on desktop */}
                <div className="hidden lg:flex items-center gap-3 mt-6 pt-6 border-t border-slate-200/80 w-full max-w-md">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-500 font-semibold block">24/7 Enterprise NOC Hotline:</span>
                    <a href="tel:+924234511111" className="font-extrabold text-sm text-slate-900 hover:text-brand-orange transition-colors">
                      +92 42 345 11 111
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Minimal Clean Bottom Identifier */}
          <div className="pt-6 border-t border-slate-200 text-center text-xs text-slate-400 font-semibold tracking-wide">
            Z COM Networks Private Limited · Enterprise Optical Infrastructure
          </div>

        </div>
      </div>
    </>
  );
}
