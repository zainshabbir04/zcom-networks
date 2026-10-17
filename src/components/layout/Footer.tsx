import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Radio,
  Server,
  Sparkles,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#070912] text-slate-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Tier 1: Modern Pre-Footer Quick Action Grid */}
        <div className="rounded-3xl bg-gradient-to-r from-white/5 via-white/[0.07] to-white/5 border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>DIRECT GULBERG-III NOC ESCALATION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Ready to Upgrade to 1:1 Symmetrical Optical Fiber?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Connect with our Lahore solutions engineering team for a complimentary site survey
              and dedicated optical link feasibility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Schedule Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/923171118042"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all border border-white/15 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>WhatsApp NOC</span>
            </a>
          </div>
        </div>

        {/* Tier 2: 5-Column Navigation & Information Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Overview */}
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
              Z COM Networks Private Limited is a top-tier licensed Internet Service Provider (ISP)
              delivering carrier-grade optical connectivity across Lahore and Punjab. Engineered with
              a <AnimatedCounter from={0} to={1200} suffix="+ km" /> subterranean armored fiber ring, <AnimatedCounter from={0} to={1} prefix="1:" suffix=" symmetrical throughput" />, and contractual{" "}
              <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" /> uptime SLA.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>7/4, E-3 Main Boulevard, Gulberg-III, Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:+924234511111" className="text-white hover:text-brand-orange font-bold transition-colors">
                  +92 42 345 11 111 (24/7 Hotline)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:sales@zcomnetworks.com.pk" className="text-white hover:text-brand-orange transition-colors">
                  sales@zcomnetworks.com.pk
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
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all"
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
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-heading flex items-center gap-2">
              <Server className="w-4 h-4 text-brand-orange" />
              <span>Optical Solutions</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-brand-orange transition-colors">
                  Dedicated Internet Access (DIA)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-orange transition-colors">
                  Corporate Point-to-Point Links
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-orange transition-colors">
                  Metro Ethernet Layer-2 Transport
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-orange transition-colors">
                  Dark Fiber Leasing &amp; Core IRU
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-orange transition-colors">
                  Campus High-Density Wi-Fi
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-orange transition-colors">
                  Data Center Colocation &amp; Cross-Connects
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Leadership Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-heading flex items-center gap-2">
              <Globe className="w-4 h-4 text-brand-orange" />
              <span>Company &amp; Team</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">
                  About Z COM Networks
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">
                  CEO Mudasir Riaz (Profile)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">
                  CFO Mubasir Riaz (Profile)
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-brand-orange transition-colors">
                  Why Choose Us (8 Reasons)
                </Link>
              </li>
              <li>
                <Link href="/why-us#coverage-map" className="hover:text-brand-orange transition-colors">
                  Real GIS Punjab Map &amp; PoPs
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-brand-orange transition-colors">
                  Careers &amp; Active Job Openings
                </Link>
              </li>
            </ul>
          </div>

          {/* Telemetry & SLA Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-heading flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>Core SLA</span>
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-slate-400 block font-semibold">Core Availability</span>
                <span className="text-lg font-black text-brand-orange font-heading block">
                  <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" />
                </span>
                <span className="text-slate-400 block">ITU-T G.8032 Auto-Ring</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-slate-400 block font-semibold">NOC Dispatch SLA</span>
                <span className="text-lg font-black text-white font-heading block">
                  <AnimatedCounter from={0} to={30} prefix="< " suffix=" min" />
                </span>
                <span className="text-slate-400 block">Mobile Emergency Fleets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3: Bottom Status Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-400">
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
    </footer>
  );
}
