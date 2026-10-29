"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About Us", href: "/about", hasDropdown: false },
  { name: "Services", href: "/services/corporate-internet", hasDropdown: true },
  { name: "Why Us", href: "/why-us", hasDropdown: false },
  { name: "Careers", href: "/careers", hasDropdown: false },
  { name: "Contact", href: "/contact", hasDropdown: false },
];

const SERVICES_MENU = [
  {
    name: "Corporate Solutions",
    href: "/services/corporate-internet",
  },
  {
    name: "Cloud & Hosting Solutions",
    href: "/services/cloud-hosting",
  },
  {
    name: "Managed IT Solutions",
    href: "/services/managed-it",
  },
  {
    name: "Cybersecurity Services",
    href: "/services/cybersecurity",
  },
  {
    name: "Digital Solutions",
    href: "/services/digital-solutions",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  const handleServicesMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 200);
  };

  const handleOtherNavMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsServicesHovered(false);
  };

  // Lock body scroll when menu is open & reset hover states
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsServicesHovered(false);
      setMobileServicesOpen(false);
    } else {
      document.body.style.overflow = "";
      setIsServicesHovered(false);
    }
    return () => {
      document.body.style.overflow = "";
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesHovered(false);
    setMobileServicesOpen(false);
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
          SIDEBAR OVERLAY MENU (Modeled strictly after gcspvt.com)
          Left: Main Nav (Arrow on Services only) | Center: Separator | Right: Services Menu ONLY (Transparent, Names only)
          ============================================================ */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-out overflow-y-auto bg-slate-950/95 backdrop-blur-2xl ${
          isOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Ambient Animated Mesh Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] bg-orange-600/15 rounded-full blur-[140px] animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-brand-orange/5 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        </div>

        {/* Menu Content Wrapper */}
        <div className="min-h-screen flex flex-col justify-between p-6 sm:p-10 max-w-7xl mx-auto text-white relative z-10">
          
          {/* Header Bar inside Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
              <div className="relative h-9 sm:h-11 w-36 sm:w-48 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="https://zcomnetworks.com.pk/assets/zcom-logo.png?v=2"
                  alt="Z COM Networks"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </Link>

            {/* Close Button with animated hover rotate */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 hover:bg-brand-orange hover:border-brand-orange text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 shadow-lg hover:shadow-orange-500/30 cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Sidebar Grid Content (gcspvt.com layout) */}
          <div className="flex-1 flex flex-col justify-center py-6 sm:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full min-h-[440px]">
              
              {/* ============================================================
                  COLUMN 1 (LEFT): MAIN NAVIGATION
                  Only 'SERVICES' has the arrow and triggers the sub-menu on hover!
                  All other items are direct links with no sub-menu.
                  ============================================================ */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <ul className="flex flex-col gap-2 sm:gap-3 w-full">
                  {NAV_LINKS.map((link, idx) => {
                    const isServices = link.hasDropdown;
                    const isActive =
                      pathname === link.href ||
                      (isServices && pathname.startsWith("/services"));

                    if (isServices) {
                      return (
                        <li
                          key={link.name}
                          className={`w-full ${isOpen ? "animate-menu-slide" : ""}`}
                          style={{ animationDelay: `${idx * 60 + 50}ms` }}
                        >
                          {/* Desktop & Mobile Services Item */}
                          <div className="w-full flex items-center justify-between rounded-2xl transition-all duration-200 group">
                            <Link
                              href={link.href}
                              onMouseEnter={handleServicesMouseEnter}
                              onMouseLeave={handleServicesMouseLeave}
                              onClick={() => setIsOpen(false)}
                              className={`flex-1 flex items-center justify-between py-2 px-3.5 sm:px-4 rounded-xl text-base sm:text-lg lg:text-xl font-bold uppercase font-heading tracking-tight transition-all duration-300 ${
                                isServicesHovered
                                  ? "text-brand-orange bg-white font-extrabold shadow-xl shadow-brand-orange/20 scale-[1.01] ring-2 ring-brand-orange/20"
                                  : isActive
                                  ? "text-brand-orange bg-white/10 font-extrabold shadow-sm"
                                  : "text-white/90 hover:text-brand-orange hover:bg-white/10 hover:translate-x-1"
                              }`}
                            >
                              <span>{link.name}</span>
                              
                              {/* Right Arrow + Active Radar indicator */}
                              <span className="flex items-center gap-2">
                                {isServicesHovered && (
                                  <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
                                  </span>
                                )}
                                <ArrowRight
                                  className={`w-4 h-4 transition-all duration-300 ${
                                    isServicesHovered
                                      ? "text-brand-orange translate-x-1 animate-arrow-nudge"
                                      : "text-white/60 group-hover:text-brand-orange group-hover:translate-x-1"
                                  }`}
                                />
                              </span>
                            </Link>

                            {/* Mobile Toggle Button for Accordion */}
                            <button
                              type="button"
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className="lg:hidden p-3 text-white/70 hover:text-brand-orange"
                              aria-label="Toggle services list"
                            >
                              <ChevronDown
                                className={`w-5 h-5 transition-transform duration-200 ${
                                  mobileServicesOpen ? "rotate-180 text-brand-orange" : ""
                                }`}
                              />
                            </button>
                          </div>

                          {/* Mobile-Only Accordion Dropdown (Transparent background, in points) */}
                          {mobileServicesOpen && (
                            <ul className="lg:hidden mt-3 pl-4 py-2 space-y-2 border-l-2 border-brand-orange/40 bg-transparent">
                              {SERVICES_MENU.map((srv, srvIdx) => {
                                const isSrvActive = pathname === srv.href;
                                return (
                                  <li
                                    key={srv.href}
                                    className="animate-menu-subslide"
                                    style={{ animationDelay: `${srvIdx * 50}ms` }}
                                  >
                                    <Link
                                      href={srv.href}
                                      onClick={() => {
                                        setIsOpen(false);
                                      }}
                                      className={`flex items-center gap-2 py-1 px-2.5 rounded-lg text-sm sm:text-base font-semibold uppercase font-heading tracking-tight transition-all group ${
                                        isSrvActive
                                          ? "text-brand-orange font-bold"
                                          : "text-white/80 hover:text-brand-orange hover:translate-x-1.5"
                                      }`}
                                    >
                                      {/* Visible Bullet Point with Pulse */}
                                      <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
                                        <span className={`w-1.5 h-1.5 rounded-full transition-transform ${
                                          isSrvActive
                                            ? "bg-brand-orange scale-125"
                                            : "bg-brand-orange group-hover:scale-125"
                                        }`} />
                                      </span>
                                      <span>{srv.name}</span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    }

                    // Pure direct link for all other pages (no arrow, no dropdown)
                    return (
                      <li
                        key={link.name}
                        className={`w-full ${isOpen ? "animate-menu-slide" : ""}`}
                        style={{ animationDelay: `${idx * 60 + 50}ms` }}
                      >
                        <Link
                          href={link.href}
                          onMouseEnter={handleOtherNavMouseEnter}
                          onClick={() => setIsOpen(false)}
                          className={`w-full flex items-center py-2 px-3.5 sm:px-4 rounded-xl text-base sm:text-lg lg:text-xl font-bold uppercase font-heading tracking-tight transition-all duration-300 text-left group ${
                            isActive
                              ? "text-brand-orange bg-white/10 font-extrabold shadow-sm"
                              : "text-white/80 hover:text-white hover:bg-white/10 hover:translate-x-2"
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="w-0 group-hover:w-3 h-1 bg-brand-orange rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            <span>{link.name}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* ============================================================
                  SEPARATOR LINE (Middle - gcspvt.com: sidebar-separator)
                  ============================================================ */}
              <div className="hidden lg:flex lg:col-span-1 items-stretch justify-center self-stretch">
                <div className="w-px bg-gradient-to-b from-white/10 via-brand-orange/40 to-white/10 self-stretch my-2 rounded-full relative overflow-hidden">
                  <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-brand-orange to-transparent animate-float-slow" />
                </div>
              </div>

              {/* ============================================================
                  COLUMN 2 (RIGHT): SERVICES MENU ONLY (Transparent background, ONLY service names)
                  Strictly appears when cursor hovers on Services
                  ============================================================ */}
              <div className="hidden lg:flex lg:col-span-6 flex-col justify-center">
                {isServicesHovered ? (
                  <ul
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                    className="flex flex-col gap-2.5 sm:gap-3 w-full bg-transparent"
                  >
                    {SERVICES_MENU.map((srv, srvIdx) => {
                      const isSrvActive = pathname === srv.href;
                      return (
                        <li
                          key={srv.href}
                          className="w-full animate-menu-subslide"
                          style={{ animationDelay: `${srvIdx * 50 + 20}ms` }}
                        >
                          <Link
                            key={srv.href}
                            href={srv.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between py-1.5 sm:py-2 px-3.5 rounded-xl text-sm sm:text-base lg:text-lg font-semibold uppercase font-heading tracking-tight transition-all duration-300 text-left group bg-transparent hover:bg-white/5 ${
                              isSrvActive
                                ? "text-brand-orange font-bold"
                                : "text-white/85 hover:text-brand-orange hover:translate-x-2.5"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {/* Pulsing Radar / Glowing Bullet */}
                              <span className="relative flex items-center justify-center w-3.5 h-3.5 shrink-0">
                                <span
                                  className={`absolute w-3 h-3 rounded-full bg-brand-orange/40 transition-all duration-300 ${
                                    isSrvActive
                                      ? "animate-ping opacity-75"
                                      : "group-hover:animate-ping group-hover:opacity-75 opacity-0"
                                  }`}
                                />
                                <span
                                  className={`w-2 h-2 rounded-full bg-brand-orange transition-all duration-300 shadow-sm ${
                                    isSrvActive
                                      ? "scale-125 ring-2 ring-brand-orange/30 shadow-brand-orange/50"
                                      : "group-hover:scale-125 group-hover:ring-2 group-hover:ring-brand-orange/30 group-hover:shadow-brand-orange/50"
                                  }`}
                                />
                              </span>
                              <span className="transition-colors duration-200 group-hover:text-white">
                                {srv.name}
                              </span>
                            </div>

                            {/* Sleek Slide-in Arrow on Hover */}
                            <ArrowRight className="w-4 h-4 text-brand-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>

            </div>
          </div>

          {/* Bottom Bar: Social Links & Company Footer (gcspvt.com style) */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span className="font-semibold tracking-wide text-center sm:text-left flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Z COM Networks Private Limited · Enterprise Optical Infrastructure</span>
            </span>

            {/* Direct Contact & Social */}
            <div className="flex items-center gap-5">
              <a
                href="tel:+924234511111"
                className="flex items-center gap-2 font-bold text-white hover:text-brand-orange transition-all hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                <span>+92 42 345 11 111</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href="mailto:info@zcomnetworks.com.pk"
                className="flex items-center gap-1.5 hover:text-brand-orange transition-all hover:scale-105 font-medium text-slate-300"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>info@zcomnetworks.com.pk</span>
              </a>
            </div>
          </div>

        </div>
      </div>
</>
  );
}
