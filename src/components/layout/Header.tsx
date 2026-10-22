"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Radio,
  Server,
  Building2,
  Mail,
  ExternalLink,
  Zap,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const NAV_LINKS = [
  { name: "Home", href: "/", num: "01", desc: "Pure Optical Fiber Network & 3D Telemetry" },
  { name: "About Us", href: "/about", num: "02", desc: "Corporate Heritage, CEO & CFO Leadership" },
  { name: "Services", href: "/services", num: "03", desc: "Dedicated DIA, Metro Rings & Dark Fiber" },
  { name: "Why Us", href: "/why-us", num: "04", desc: "8 Core Differentiators & GIS Punjab Map" },
  { name: "Careers", href: "/careers", num: "05", desc: "NOC & Field Engineering Positions" },
  { name: "Contact", href: "/contact", num: "06", desc: "Instant Feasibility & WhatsApp Dispatch" },
];

const SPOTLIGHT_SERVICES = [
  {
    title: "Dedicated Internet Access (DIA)",
    desc: "1:1 uncontended symmetrical bandwidth with 99.99% core SLA guarantee.",
    href: "/services",
    icon: <Radio className="w-4 h-4 text-brand-orange" />,
  },
  {
    title: "Corporate Point-to-Point VPN",
    desc: "Private low-latency optical leased circuits interconnecting multi-site offices.",
    href: "/services",
    icon: <Server className="w-4 h-4 text-brand-orange" />,
  },
  {
    title: "Metro Ethernet Layer-2 Transport",
    desc: "100 Gbps core rings with sub-50ms automated ring healing protocol.",
    href: "/services",
    icon: <Zap className="w-4 h-4 text-brand-orange" />,
  },
  {
    title: "High-Density Campus Wi-Fi",
    desc: "Managed cloud controller and enterprise AP deployment for education & healthcare.",
    href: "/services",
    icon: <Building2 className="w-4 h-4 text-brand-orange" />,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mega menu is open
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
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        <div
          className={`transition-all duration-300 ${
            isHome
              ? scrolled
                ? "max-w-7xl mx-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-md py-2.5 px-4 sm:px-6 mt-2"
                : "max-w-7xl mx-auto bg-transparent border-0 shadow-none py-4 sm:py-6 px-4 sm:px-8"
              : scrolled
                ? "max-w-7xl mx-auto rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-xl border border-slate-200 shadow-md py-2 sm:py-2.5 px-4 sm:px-6 sm:mt-3"
                : "max-w-7xl mx-auto rounded-2xl sm:rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-sm py-2.5 sm:py-3 px-4 sm:px-6 sm:mt-3"
          }`}
        >
          <div className="flex items-center justify-between gap-4 h-11 sm:h-12">
            {/* Logo: Transparent over video on home screen */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative h-9 sm:h-11 w-36 sm:w-48 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="https://zcomnetworks.com.pk/assets/zcom-logo.png?v=2"
                  alt="Z COM Networks - Premier Optical Fiber ISP"
                  fill
                  className="object-contain object-left drop-shadow-md"
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Desktop Navigation Links: Hidden on home screen, only shown in menu or on non-home pages */}
            {!isHome && (
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100 p-1 rounded-full border border-slate-200">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`relative px-3.5 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 font-extrabold"
                          : "text-slate-700 hover:text-brand-orange hover:bg-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            )}

            {/* Right Controls: Only Menu Toggle (No light/dark toggle) */}
            <div className="flex items-center gap-3 shrink-0">
              {!isHome && (
                <>
                  <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Core <AnimatedCounter from={0} to={100} duration={1400} />G: Optimal</span>
                  </div>

                  <Link
                    href="/contact"
                    className="hidden sm:inline-flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orangeLight text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </>
              )}

              {/* GCS-Style Stylized Mega Menu Toggle Button */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Navigation Menu"
                className={`p-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 shadow-lg cursor-pointer group backdrop-blur-md ${
                  isHome && !scrolled
                    ? "bg-black/40 hover:bg-brand-orange text-white border border-white/20 hover:border-brand-orange"
                    : "bg-slate-900 text-white hover:bg-brand-orange border border-slate-700"
                }`}
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
          WHITE THEME FULL-SCREEN SLIDE-IN MEGA MENU OVERLAY
          ============================================================ */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-out overflow-y-auto ${
          isOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Pure White / Platinum Glass Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-white/98 backdrop-blur-2xl -z-10"
        />

        {/* Ambient Subtle Light Orange Glows */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-400/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-slate-300/25 rounded-full blur-[150px] pointer-events-none -z-10" />

        {/* Mega Menu Content Wrapper */}
        <div className="min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 max-w-7xl mx-auto text-slate-800">
          
          {/* Header Bar inside Mega Menu */}
          <div className="flex items-center justify-between pb-8 border-b border-slate-200">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <div className="relative h-10 w-44">
                <Image
                  src="https://zcomnetworks.com.pk/assets/zcom-logo.png?v=2"
                  alt="Z COM Networks"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Gulberg-III Network Operations Center: Online</span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 hover:bg-brand-orange hover:border-brand-orange text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:rotate-90 shadow-md cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main 3-Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-10 my-auto items-start">
            
            {/* Column 1: Primary Navigation with Numbers & Hover Arrows */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                MAIN NAVIGATION
              </span>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li
                      key={link.name}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between py-2.5 px-4 rounded-2xl transition-all duration-200 ${
                          isActive
                            ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30"
                            : "hover:bg-orange-50/70 text-slate-800 hover:text-brand-orange"
                        }`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-xs font-mono text-slate-400 font-semibold">{link.num}</span>
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase font-heading tracking-tight group-hover:translate-x-1.5 transition-transform">
                            {link.name}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange group-hover:text-white" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 2: Spotlight Services */}
            <div className="lg:col-span-4 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-10">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                OPTICAL ARCHITECTURE
              </span>
              <div className="space-y-3">
                {SPOTLIGHT_SERVICES.map((srv, idx) => (
                  <Link
                    key={idx}
                    href={srv.href}
                    onClick={() => setIsOpen(false)}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-orange-50/50 border border-slate-200 hover:border-orange-300 transition-all block group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-orange-100 border border-orange-200">
                        {srv.icon}
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-brand-orange transition-colors">
                        {srv.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 pl-8 leading-relaxed">
                      {srv.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Contact & Direct Dispatch */}
            <div className="lg:col-span-2 space-y-6 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                24/7 HELPDESK
              </span>

              <div className="space-y-4">
                <a
                  href="tel:+924234511111"
                  className="flex items-center gap-2.5 text-xs font-bold text-slate-800 hover:text-brand-orange transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>+92 42 345 11 111</span>
                </a>

                <a
                  href="mailto:sales@zcomnetworks.com.pk"
                  className="flex items-center gap-2.5 text-xs font-bold text-slate-800 hover:text-brand-orange transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-orange" />
                  <span className="truncate">sales@zcomnetworks.com.pk</span>
                </a>

                <a
                  href="https://wa.me/923171118042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all"
                >
                  <span>WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-2 w-full bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md shadow-brand-orange/30 transition-all"
                >
                  <span>Book Site Survey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <span className="text-[11px] font-semibold text-slate-500 block uppercase">Follow Us</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61562135909070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange text-slate-700 hover:text-white transition-all shadow-sm"
                    aria-label="Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.8V24C19.6 23.1 24 18.1 24 12.07z" />
                    </svg>
                  </a>
                  <a
                    href="https://pk.linkedin.com/company/z-com-networks-private-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange text-slate-700 hover:text-white transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Footer inside Mega Menu */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} Z COM Networks Private Limited · All Rights Reserved.</span>
            <span className="text-slate-600">Head Office: 7/4, E-3 Main Boulevard, Gulberg-III, Lahore, Pakistan</span>
          </div>

        </div>
      </div>
    </>
  );
}
