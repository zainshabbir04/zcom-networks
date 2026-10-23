"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Us", href: "/why-us" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
            : "bg-transparent border-transparent shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto bg-transparent border-0 shadow-none py-3.5 sm:py-5 px-4 sm:px-8 transition-all duration-300">
          <div className="flex items-center justify-between gap-4 h-11 sm:h-12">
            {/* Logo: 100% Transparent on complete site */}
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

            {/* Desktop Navigation Links: Transparent across the complete site */}
            {!isHome && (
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-transparent p-1 border-0">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`relative px-3.5 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 font-extrabold"
                          : "text-slate-700 hover:text-brand-orange hover:bg-orange-50/70"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            )}

            {/* Right Controls: Only Menu Toggle & Transparent Status */}
            <div className="flex items-center gap-3 shrink-0">
              {!isHome && (
                <>
                  <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 whitespace-nowrap shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
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

              {/* Stylized Menu Toggle Button - Floating Transparent Pill */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Navigation Menu"
                className="p-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 shadow-lg cursor-pointer group bg-black/40 hover:bg-brand-orange text-white border border-white/20 hover:border-brand-orange backdrop-blur-md"
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
          WHITE THEME FULL-SCREEN MENU OVERLAY (ONLY MAIN MENU HEADINGS)
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

          {/* Main Menu Headings Only */}
          <div className="flex-1 flex flex-col justify-center items-center py-10 sm:py-16">
            <nav className="flex flex-col items-center gap-3 sm:gap-4 w-full max-w-md">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-center py-3 sm:py-4 px-6 rounded-2xl text-2xl sm:text-4xl font-extrabold uppercase font-heading tracking-tight transition-all duration-200 ${
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
