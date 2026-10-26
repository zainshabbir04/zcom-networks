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
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About Us", href: "/about", hasDropdown: false },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Why Us", href: "/why-us", hasDropdown: false },
  { name: "Careers", href: "/careers", hasDropdown: false },
  { name: "Contact", href: "/contact", hasDropdown: false },
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
  const [servicesOpen, setServicesOpen] = useState(true);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();

  // Lock body scroll when menu is open and reset states
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setServicesOpen(true);
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
    setServicesOpen(true);
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
          SIDEBAR OVERLAY MENU (Modeled after gcspvt.com)
          Left: Main Nav (Arrow on Services only) | Center: Separator | Right: Services Grid
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
        <div className="min-h-screen flex flex-col justify-between p-6 sm:p-10 max-w-7xl mx-auto text-slate-800">
          
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

          {/* Sidebar Grid Content (gcspvt.com layout) */}
          <div className="flex-1 flex flex-col justify-center py-6 sm:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
              
              {/* ============================================================
                  COLUMN 1 (LEFT): MAIN NAVIGATION
                  Only 'SERVICES' has the arrow and triggers the sub-menu!
                  ============================================================ */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <ul className="flex flex-col gap-2 sm:gap-3 w-full">
                  {NAV_LINKS.map((link) => {
                    const isServices = link.hasDropdown;
                    const isActive =
                      pathname === link.href ||
                      (isServices && pathname.startsWith("/services"));

                    if (isServices) {
                      return (
                        <li key={link.name} className="w-full">
                          <button
                            type="button"
                            onMouseEnter={() => setServicesOpen(true)}
                            onClick={() => {
                              setServicesOpen(true);
                              setMobileServicesOpen(!mobileServicesOpen);
                            }}
                            className={`w-full flex items-center justify-between py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-2xl text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase font-heading tracking-tight transition-all duration-200 group text-left cursor-pointer ${
                              servicesOpen || isActive
                                ? "text-brand-orange bg-orange-50 font-black shadow-sm"
                                : "text-slate-800 hover:text-brand-orange hover:bg-slate-100/80"
                            }`}
                          >
                            <span>{link.name}</span>
                            
                            {/* Right Arrow (gcspvt.com style: nav-arrow on Services) */}
                            <span className="flex items-center gap-2">
                              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-brand-orange hidden sm:inline-block border border-orange-200">
                                5 Solutions
                              </span>
                              <ArrowRight
                                className={`w-6 h-6 transition-transform duration-200 text-brand-orange ${
                                  servicesOpen
                                    ? "translate-x-1.5"
                                    : "group-hover:translate-x-1.5"
                                }`}
                              />
                            </span>
                          </button>

                          {/* Mobile-Only Accordion Dropdown (for small screens where columns stack) */}
                          {mobileServicesOpen && (
                            <div className="lg:hidden mt-3 p-3 rounded-2xl bg-white border-2 border-slate-200 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
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
                        </li>
                      );
                    }

                    // For all other menu items: pure direct link, no arrow, no dropdown! ("only services py ban hai or kisi py nai")
                    return (
                      <li key={link.name} className="w-full">
                        <Link
                          href={link.href}
                          onMouseEnter={() => setServicesOpen(false)}
                          onClick={() => setIsOpen(false)}
                          className={`w-full block py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-2xl text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase font-heading tracking-tight transition-all duration-200 text-left ${
                            isActive
                              ? "text-brand-orange bg-orange-50 font-black shadow-sm"
                              : "text-slate-800 hover:text-brand-orange hover:bg-slate-100/80 hover:translate-x-1"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* ============================================================
                  SEPARATOR LINE (Middle - gcspvt.com: sidebar-separator)
                  ============================================================ */}
              <div className="hidden lg:flex lg:col-span-1 items-center justify-center h-full">
                <div className="h-96 w-px bg-slate-200 rounded-full" />
              </div>

              {/* ============================================================
                  COLUMN 2 (RIGHT): SERVICES GRID (Appears ONLY for Services!)
                  ============================================================ */}
              <div className="hidden lg:flex lg:col-span-6 flex-col justify-center">
                {servicesOpen ? (
                  <div
                    style={{ backgroundColor: "#ffffff" }}
                    className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-2xl space-y-3 animate-in fade-in slide-in-from-left-3 duration-300"
                  >
                    <div className="px-2 py-1 flex items-center justify-between text-xs font-black uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2 mb-1">
                      <span className="flex items-center gap-2 text-slate-800 font-heading">
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
                                : "text-slate-900 border-slate-200/80 hover:border-brand-orange/60 hover:bg-orange-50/40 hover:translate-x-1"
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
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-orange transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom SLA Quality Ribbon */}
                    <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold mt-1">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Contractual SLA: 99.99% Availability
                      </span>
                      <span className="text-brand-orange font-bold">24/7 Dedicated NOC</span>
                    </div>
                  </div>
                ) : (
                  /* Clean welcoming placeholder when hovering over non-dropdown items */
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    className="p-8 rounded-3xl bg-slate-50/70 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-3 cursor-pointer group hover:border-brand-orange/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800">Carrier-Grade Solutions</h4>
                      <p className="text-xs text-slate-500 mt-1 max-w-xs">
                        Hover or click on <span className="text-brand-orange font-bold">SERVICES</span> on the left to view all specialized enterprise connectivity offerings.
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Bottom Bar: Social Links & Company Footer (gcspvt.com style) */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span className="font-semibold tracking-wide text-center sm:text-left">
              Z COM Networks Private Limited · Enterprise Optical Infrastructure
            </span>

            {/* Direct Contact & Social */}
            <div className="flex items-center gap-5">
              <a
                href="tel:+924234511111"
                className="flex items-center gap-2 font-bold text-slate-800 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>+92 42 345 11 111</span>
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="mailto:sales@zcomnetworks.com.pk"
                className="hover:text-brand-orange transition-colors font-medium"
              >
                sales@zcomnetworks.com.pk
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
