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
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 sm:top-3 z-50 w-full transition-all duration-300 px-3 sm:px-6 lg:px-8"
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-[#0C0F1D]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-xl shadow-black/10 py-2 sm:py-2.5 px-4 sm:px-6"
            : "bg-white/90 dark:bg-[#0C0F1D]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/5 py-2.5 sm:py-3 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between gap-4 h-11 sm:h-12">
          {/* Logo with Glowing Optical Indicator */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative h-9 sm:h-10 w-36 sm:w-44 transition-transform duration-200 group-hover:scale-102">
              <Image
                src="https://zcomnetworks.com.pk/assets/zcom-logo.png?v=2"
                alt="Z COM Networks - Premier Optical Fiber ISP"
                fill
                className="object-contain object-left"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/90 dark:bg-white/5 backdrop-blur-md p-1 rounded-full border border-slate-200/80 dark:border-white/5 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 font-extrabold"
                      : "text-slate-700 dark:text-gray-200 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-white dark:hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Telemetry + Phone Hotline + Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-2.5 xl:gap-3 shrink-0">
            {/* Live Status Pill */}
            <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-bold text-slate-700 dark:text-gray-200 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-white/10 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Core <AnimatedCounter from={0} to={100} duration={1400} />G: Optimal</span>
            </div>

            {/* 24/7 NOC Hotline */}
            <a
              href="tel:+924234511111"
              className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-white hover:text-brand-orange transition-colors px-2 py-1 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>+92 42 345 11 111</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Check Availability CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orangeLight text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
            >
              <span>Check Availability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-xl text-slate-800 dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Frosted Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-2 rounded-3xl bg-white/90 dark:bg-[#0C0F1D]/90 backdrop-blur-2xl border border-white/30 dark:border-white/10 shadow-2xl p-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-2xl text-base font-bold transition-all ${
                    isActive
                      ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30"
                      : "text-slate-900 dark:text-gray-100 hover:bg-white/30 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>NOC 24/7/365</span>
              </span>
              <span className="font-bold text-slate-900 dark:text-white">
                Gulberg-III, Lahore
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+924234511111"
                className="inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white/40 dark:bg-white/5 text-slate-900 dark:text-white font-bold text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Call NOC</span>
              </a>
              <a
                href="https://wa.me/923171118042"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-brand-orange/30"
            >
              <span>Check Fiber Availability</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
