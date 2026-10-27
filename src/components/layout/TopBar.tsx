import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Phone, ShieldCheck, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#0B0E14] text-slate-300 text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800/80 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Dynamic Announcement Ticker */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange font-bold uppercase tracking-wider text-[10px] shrink-0 border border-brand-orange/30">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
            <span>METRO BACKBONE</span>
          </span>
          <span className="truncate text-slate-300 font-medium hidden sm:inline">
            100 Gbps DWDM Optical Transmission Grid Active across Regional Enterprise Corridors
          </span>
          <Link
            href="/why-us#coverage-map"
            className="text-brand-orange hover:text-white font-bold transition-colors inline-flex items-center gap-1 shrink-0 ml-1"
          >
            <span>View Real GIS Map</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Right: Quick NOC Telephone & Location */}
        <div className="hidden md:flex items-center gap-4 shrink-0 text-slate-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-brand-orange" />
            <span className="text-slate-300">Gulberg-III Corporate HQ</span>
          </div>
          <div className="h-3 w-px bg-slate-700/80" />
          <div className="flex items-center gap-1.5 text-white font-bold">
            <Phone className="w-3 h-3 text-brand-orange" />
            <a href="tel:+924234511111" className="hover:text-brand-orange transition-colors">
              +92 42 345 11 111
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
