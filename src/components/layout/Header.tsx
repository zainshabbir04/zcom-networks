"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  ArrowRight,
  ChevronDown,
  Globe,
  Cloud,
  Server,
  ShieldCheck,
  Code2,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

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
    name: "Corporate Internet Solutions",
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
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  // Track window scroll to prevent transparent text clash when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isHome
            ? scrolled
              ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
              : "bg-transparent border-transparent shadow-none"
            : "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-8 transition-all duration-300">
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

            {/* Desktop Navigation Links: Sleek Segmented Dock Style with Services Dropdown */}
            {!isHome && (
              <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/80 shadow-inner">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.name === "Services" && pathname.startsWith("/services"));

                  if (link.name === "Services") {
                    return (
                      <div
                        key={link.name}
                        className="relative"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button
                          type="button"
                          onClick={() => setServicesDropdownOpen((prev) => !prev)}
                          aria-expanded={servicesDropdownOpen}
                          className={`relative px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                            isActive
                              ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 font-extrabold"
                              : "text-slate-700 hover:text-slate-900 hover:bg-white"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              servicesDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Luxury Solid Floating Services Mega-Dropdown Card */}
                        {servicesDropdownOpen && (
                          <div
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[460px] sm:w-[560px] max-w-[95vw]"
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <div
                              style={{ backgroundColor: "#ffffff" }}
                              className="rounded-3xl bg-white border-2 border-slate-200/95 shadow-[0_30px_90px_rgba(0,0,0,0.4)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-black/10"
                            >
                              {/* Top Gradient Edge Accent */}
                              <div className="h-1.5 w-full bg-gradient-to-r from-brand-orange via-amber-500 to-orange-600" />

                              {/* Dropdown Header */}
                              <div
                                style={{ backgroundColor: "#f8fafc" }}
                                className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between"
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
                                  </span>
                                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                                    Enterprise Services &amp; Products
                                  </span>
                                </div>
                                <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-brand-orange border border-orange-200">
                                  5 Solutions
                                </span>
                              </div>

                              {/* 5 Service Items */}
                              <div
                                style={{ backgroundColor: "#ffffff" }}
                                className="p-3 bg-white space-y-2"
                              >
                                {SERVICES_MENU.map((srv) => {
                                  const Icon = srv.icon;
                                  const isSrvActive = pathname === srv.href;
                                  return (
                                    <Link
                                      key={srv.href}
                                      href={srv.href}
                                      onClick={() => setServicesDropdownOpen(false)}
                                      style={{
                                        backgroundColor: isSrvActive ? "#fff7ed" : "#f8fafc",
                                      }}
                                      className={`flex items-center gap-3.5 p-3 rounded-2xl transition-all duration-200 group border ${
                                        isSrvActive
                                          ? "border-brand-orange shadow-md shadow-brand-orange/15 ring-1 ring-brand-orange/30"
                                          : "border-slate-200 hover:border-brand-orange/60 hover:bg-orange-50/70 hover:shadow-md"
                                      }`}
                                    >
                                      {/* Icon Tile */}
                                      <div
                                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                                          isSrvActive
                                            ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 scale-105"
                                            : "bg-orange-100 text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-orange/25 group-hover:scale-105"
                                        }`}
                                      >
                                        <Icon className="w-5 h-5" />
                                      </div>

                                      {/* Content */}
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                          <div className="flex items-center gap-2 min-w-0">
                                            <span className="text-sm sm:text-[15px] font-extrabold text-slate-900 group-hover:text-brand-orange transition-colors truncate">
                                              {srv.name}
                                            </span>
                                            <span className="hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-brand-orange border border-orange-200/80 shrink-0">
                                              {srv.badge}
                                            </span>
                                          </div>
                                          <div className="w-7 h-7 rounded-full bg-slate-200/80 group-hover:bg-brand-orange text-slate-600 group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-200 group-hover:translate-x-0.5 shadow-sm">
                                            <ArrowRight className="w-3.5 h-3.5" />
                                          </div>
                                        </div>
                                        <p className="text-xs text-slate-600 group-hover:text-slate-800 line-clamp-1 mt-0.5 font-medium">
                                          {srv.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>

                              {/* Dropdown Bottom SLA Ribbon */}
                              <div
                                style={{ backgroundColor: "#f8fafc" }}
                                className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs"
                              >
                                <div className="flex items-center gap-2 text-slate-700 font-bold">
                                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                  <span>Contractual SLA: 99.99% Availability</span>
                                </div>
                                <span className="text-brand-orange font-extrabold">
                                  Direct Support: +92 42 345 11 111
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`relative px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 font-extrabold"
                          : "text-slate-700 hover:text-slate-900 hover:bg-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            )}

            {/* Right Controls: Telemetry Pill & Modern Menu Button (Check Availability removed) */}
            <div className="flex items-center gap-3 shrink-0">
              {!isHome && (
                <div className="hidden xl:flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100/90 px-3.5 py-1.5 rounded-full border border-slate-200/80 whitespace-nowrap shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                  <span>Core <AnimatedCounter from={0} to={100} duration={1400} />G: Optimal</span>
                </div>
              )}

              {/* Stylized Modern Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Navigation Menu"
                className="px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm cursor-pointer group bg-slate-900 hover:bg-brand-orange text-white border border-slate-800 hover:border-brand-orange"
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
          WHITE THEME FULL-SCREEN MENU OVERLAY WITH SERVICES ACCORDION
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
        <div className="min-h-screen flex flex-col justify-between p-6 sm:p-10 max-w-4xl mx-auto text-slate-800">
          
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

          {/* Main Menu Headings with Services Dropdown List */}
          <div className="flex-1 flex flex-col justify-center items-center py-10 sm:py-16">
            <nav className="flex flex-col items-center gap-3 w-full max-w-md">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.name === "Services" && pathname.startsWith("/services"));

                if (link.name === "Services") {
                  return (
                    <div key={link.name} className="w-full flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-expanded={mobileServicesOpen}
                        className={`w-full flex items-center justify-center gap-3 py-2.5 sm:py-3 px-6 rounded-2xl text-2xl sm:text-3xl font-extrabold uppercase font-heading tracking-tight transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "text-brand-orange bg-orange-50 font-black shadow-sm"
                            : "text-slate-800 hover:text-brand-orange hover:bg-slate-100/80"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-6 h-6 transition-transform duration-300 text-brand-orange ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu for Services inside Full Menu */}
                      {mobileServicesOpen && (
                        <div
                          style={{ backgroundColor: "#ffffff" }}
                          className="w-full mt-3 p-3 rounded-2xl bg-white border-2 border-slate-200 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
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
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-center py-2.5 sm:py-3 px-6 rounded-2xl text-2xl sm:text-3xl font-extrabold uppercase font-heading tracking-tight transition-all duration-200 ${
                      isActive
                        ? "text-brand-orange bg-orange-50 font-black shadow-sm"
                        : "text-slate-800 hover:text-brand-orange hover:bg-slate-100/80 hover:scale-105"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Minimal Clean Bottom Identifier */}
          <div className="pt-6 border-t border-slate-200 text-center text-xs text-slate-400 font-semibold tracking-wide">
            Z COM Networks Private Limited
          </div>

        </div>
      </div>
    </>
  );
}
