import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Globe,
  Server,
  Clock,
  ArrowRight,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-gradient-to-b from-[#0C101A] via-[#07090F] to-[#040508] text-slate-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Top glowing accent edge line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent pointer-events-none" />

      {/* Atmospheric ambient mesh lighting glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-brand-orange/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <ScrollReveal variant="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* 4-Column Navigation & Information Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Column 1: Brand & Contact Info */}
            <div className="lg:col-span-4 space-y-5">
              <div className="relative h-11 w-48">
                <Image
                  src="https://zcomnetworks.com.pk/assets/zcom-logo.png?v=2"
                  alt="Z COM Networks Logo"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>

              <p className="text-sm leading-relaxed text-slate-400">
                Z COM Networks Private Limited is a premier licensed Internet Service Provider (ISP)
                delivering enterprise carrier-grade optical connectivity, mission-critical infrastructure, and high-speed dedicated internet. Engineered with
                a <AnimatedCounter from={0} to={1200} suffix="+ km" /> subterranean armored fiber ring, <AnimatedCounter from={0} to={1} prefix="1:" suffix=" symmetrical throughput" />, and contractual{" "}
                <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" /> uptime SLA.
              </p>

              <div className="space-y-2.5 text-xs text-slate-400 pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-white font-medium">
                    7/4, E-3 Main Boulevard, Gulberg-III, Pakistan
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  <a href="tel:+924234511111" className="text-white hover:text-brand-orange font-bold transition-colors">
                    +92 42 345 11 111 (24/7 Hotline)
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <a href="mailto:info@zcomnetworks.com.pk" className="text-white hover:text-brand-orange transition-colors">
                    info@zcomnetworks.com.pk
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61562135909070"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange hover:scale-105 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.8V24C19.6 23.1 24 18.1 24 12.07z" />
                  </svg>
                </a>
                <a
                  href="https://pk.linkedin.com/company/z-com-networks-private-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange hover:scale-105 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 (Left): Company */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-white font-extrabold text-xs tracking-widest uppercase font-heading flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-brand-orange rounded-full" />
                <span>COMPANY</span>
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-slate-300 hover:text-brand-orange hover:translate-x-1.5 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-slate-300 hover:text-brand-orange hover:translate-x-1.5 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/why-us"
                    className="text-slate-300 hover:text-brand-orange hover:translate-x-1.5 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Why Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-slate-300 hover:text-brand-orange hover:translate-x-1.5 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Careers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-300 hover:text-brand-orange hover:translate-x-1.5 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 (Right): Services */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-extrabold text-xs tracking-widest uppercase font-heading flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-brand-orange rounded-full" />
                <span>SERVICES</span>
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/services/corporate-internet"
                    className="text-slate-300 hover:text-brand-orange hover:translate-x-1.5 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Corporate Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-hosting"
                    className="text-slate-300 hover:text-brand-orange hover:translate-x-1.5 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Cloud &amp; Hosting Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/managed-it"
                    className="text-slate-300 hover:text-brand-orange hover:translate-x-1.5 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Managed IT Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cybersecurity"
                    className="text-slate-300 hover:text-brand-orange hover:translate-x-1.5 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Cybersecurity Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/digital-solutions"
                    className="text-slate-300 hover:text-brand-orange hover:translate-x-1.5 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Digital Solutions</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Network Telemetry & Infrastructure Assurance */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-extrabold text-xs tracking-widest uppercase font-heading flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-brand-orange rounded-full" />
                <span>NETWORK ASSURANCE</span>
              </h4>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1 hover:border-brand-orange/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-semibold">Core Availability</span>
                    <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span className="text-lg font-black text-brand-orange font-heading block">
                    <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" /> Uptime
                  </span>
                  <span className="text-[11px] text-slate-400 block">Contractual SLA Guarantee</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1 hover:border-brand-orange/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-semibold">NOC Dispatch SLA</span>
                    <Clock className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span className="text-lg font-black text-white font-heading block">
                    <AnimatedCounter from={0} to={30} prefix="< " suffix=" min" /> MTTR
                  </span>
                  <span className="text-[11px] text-slate-400 block">Dedicated On-Site Field Dispatch</span>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-brand-orange text-white text-xs font-bold transition-all shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:scale-[1.02]"
                >
                  <span>Schedule Site Survey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Tier 3: Bottom Status Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-300">
                All Systems Operational · <AnimatedCounter from={0} to={100} suffix=" Gbps" /> Core Metro Ring Online
              </span>
            </div>

            <div className="text-center sm:text-right">
              <span>
                &copy; {new Date().getFullYear()} Z COM Networks Private Limited. All Rights Reserved.
              </span>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </footer>
  );
}
