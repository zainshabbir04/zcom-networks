import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, Sparkles } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

import CoverageForm from "@/components/ui/CoverageForm";
import ContactForm from "@/components/ui/ContactForm";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact Us & Coverage Check | Z COM Networks Private Limited",
  description:
    "Get in touch with Z COM Networks Private Limited. Check fiber coverage in Lahore, request enterprise DIA quotes, or contact our 24/7 support desk.",
};

const CONTACT_INFO = [
  {
    icon: <Phone className="w-5 h-5 text-brand-orange" />,
    label: "Phone Hotline (24/7 NOC)",
    value: "+92 42 345 11 111",
    href: "tel:+924234511111",
  },
  {
    icon: <Mail className="w-5 h-5 text-brand-orange" />,
    label: "Email Inquiries",
    value: "sales@zcomnetworks.com.pk",
    href: "mailto:sales@zcomnetworks.com.pk",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-brand-orange" />,
    label: "WhatsApp Support Desk",
    value: "+92 317 1118042",
    href: "https://wa.me/923171118042",
  },
  {
    icon: <MapPin className="w-5 h-5 text-brand-orange" />,
    label: "Head Office Address",
    value: "7/4, E-3 Main Boulevard, Gulberg-III, Lahore, Punjab, Pakistan",
    href: null,
  },
  {
    icon: <Clock className="w-5 h-5 text-brand-orange" />,
    label: "Operating Hours",
    value: "24 Hours a Day · 7 Days a Week (Always Open)",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="relative transition-colors duration-300 space-y-16 sm:space-y-24 pb-16">
      
      {/* ============================================================
          1. OUTSTANDING CINEMATIC HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <section className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: User-Uploaded Dedicated Banner Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/contact/hero-banner.jpg"
            alt="Contact Z COM Networks - 24/7 Enterprise Support"
            fill
            priority
            unoptimized
            className="object-cover object-center scale-100"
          />
          {/* Cinematic Dark Gradient Overlays for Maximum Legibility & Visual Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Layer 1: Foreground Content Over Banner */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl space-y-6">
            
            {/* Breadcrumb & Status Pill */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
              <nav className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-300">
                <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
                <span className="text-slate-500">/</span>
                <span className="text-brand-orange font-bold">Contact Us</span>
              </nav>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 backdrop-blur-md border border-brand-orange/40 text-brand-orange text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>24/7 DIRECT SUPPORT &amp; NOC</span>
              </div>
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.1] drop-shadow-md">
              Let&apos;s Connect &amp; Power <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                Your Connectivity
              </span>
            </h1>

            {/* Concise Value Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Reach out to our round-the-clock technical operations desk, check dedicated coverage availability, or request a complimentary on-site engineering feasibility survey.
            </p>

            {/* 4 Quick Telemetry Badges / Counters */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <div className="p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all text-center sm:text-left">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  <AnimatedCounter from={0} to={24} suffix="/7/365" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block">Hotline NOC</span>
                <span className="text-[10px] text-slate-400 font-medium block">Always Online</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all text-center sm:text-left">
                <span className="text-xl sm:text-2xl font-black text-white font-heading block">
                  &lt; <AnimatedCounter from={0} to={15} suffix="m" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block">Response MTTR</span>
                <span className="text-[10px] text-slate-400 font-medium block">Priority Care</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all text-center sm:text-left">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  Free
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block">Site Survey</span>
                <span className="text-[10px] text-slate-400 font-medium block">On-Site Audit</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-brand-orange/40 transition-all text-center sm:text-left">
                <span className="text-xl sm:text-2xl font-black text-white font-heading block">
                  <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" />
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block">SLA Uptime</span>
                <span className="text-[10px] text-slate-400 font-medium block">Guaranteed Link</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Coverage Checker Card (Interactive Form) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B0F19] via-[#141B2B] to-[#1A120B] border border-orange-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-orange-500/20">
          {/* Colorful Vibrant Ambient Mesh Lighting */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-brand-orange via-orange-500 to-amber-400 rounded-full blur-[90px] opacity-30 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tl from-orange-600 via-brand-orange to-amber-500 rounded-full blur-[90px] opacity-35 pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span>INSTANT AVAILABILITY CHECK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Is Z COM Dedicated Connectivity Available at Your Location?
              </h2>
              <p className="text-sm text-slate-300">
                Submit your area to verify nearest optical transmission node proximity and
                dispatch our field survey team.
              </p>
            </div>

            <CoverageForm />
          </div>
        </div>
      </section>

      {/* Main Contact Grid (Info + Message Form) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
                DIRECT CONTACT CHANNELS
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading">
                We&apos;re Available 24/7/365
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you need dedicated enterprise DIA or high-speed home fiber, our Lahore
                office is always accessible.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {CONTACT_INFO.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-br from-[#0B0F19] via-[#141B2B] to-[#1A120B] border border-orange-500/35 flex items-start gap-4 hover:border-brand-orange/60 transition-colors shadow-lg shadow-black/40 text-white"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0 mt-0.5 border border-orange-500/30">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm sm:text-base font-bold text-white hover:text-brand-orange transition-colors mt-0.5 block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm sm:text-base font-semibold text-slate-200 mt-0.5">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B0F19] via-[#141B2B] to-[#1A120B] border border-orange-500/40 p-6 sm:p-10 shadow-2xl shadow-orange-500/20 space-y-6">
              {/* Colorful Vibrant Ambient Mesh Lighting */}
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-brand-orange via-orange-500 to-amber-400 rounded-full blur-[90px] opacity-25 pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tl from-orange-600 via-brand-orange to-amber-500 rounded-full blur-[90px] opacity-30 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                    <span>MESSAGE OUR DESK</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading mt-1">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Fill in your requirements below and our commercial sales team will review and
                    respond promptly.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
            ANSWERS &amp; ASSISTANCE
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Frequently Asked Questions
          </h2>
        </div>
        <FaqAccordion />
      </section>
    </div>
  );
}
