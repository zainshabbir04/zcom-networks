import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Radio,
  TrendingUp,
  Sparkles,
  Briefcase,
  Users,
  Award,
} from "lucide-react";

import HeroSlider from "@/components/ui/HeroSlider";
import SolutionExplorer from "@/components/ui/SolutionExplorer";
import PartnersMarquee from "@/components/ui/PartnersMarquee";
import ClientsAnimatedMarquee from "@/components/ui/ClientsAnimatedMarquee";
import FaqAccordion from "@/components/ui/FaqAccordion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TestimonialsLoopSlider from "@/components/ui/TestimonialsLoopSlider";

export default function HomePage() {
  return (
    <div className="relative transition-colors duration-300 -mt-20 sm:-mt-24">
      {/* Main Page Sections Content Layer */}
      <div className="relative z-10 space-y-24 sm:space-y-32">
        {/* ============================================================
            1. CINEMATIC HERO VIDEO BANNER
            ============================================================ */}
        <HeroSlider />

        {/* ============================================================
            2. MODERN CAPABILITIES TICKER BAR (FLOATING GLASS PILL)
            ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-20">
          <div className="rounded-3xl bg-white/90 dark:bg-[#12161F]/90 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/60 dark:divide-slate-700/60">
            <div className="flex items-center gap-3 pt-2 sm:pt-0">
              <div className="w-11 h-11 rounded-2xl bg-orange-100 dark:bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                  <AnimatedCounter from={0} to={100} suffix="%" /> Pure Optical Fiber
                </h4>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  Subterranean FTTP to premises
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 sm:pt-0 sm:pl-4 lg:pl-6">
              <div className="w-11 h-11 rounded-2xl bg-orange-100 dark:bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                  <AnimatedCounter from={0} to={1} prefix="1:" suffix=" Symmetrical Bandwidth" />
                </h4>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  Equal upload &amp; download speeds
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 sm:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-2xl bg-orange-100 dark:bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                  Zero FUP Throttling
                </h4>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  Truly unlimited data volume
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 sm:pt-0 sm:pl-4 lg:pl-6">
              <div className="w-11 h-11 rounded-2xl bg-orange-100 dark:bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                  <AnimatedCounter from={0} to={24} suffix="/7/365" /> Local NOC
                </h4>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  Gulberg-III Level-3 engineers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. ABOUT Z COM NETWORKS (HERITAGE & MISSION / VISION)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
              <Sparkles className="w-4 h-4" />
              <span>ABOUT Z COM NETWORKS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight leading-tight">
              Your trusted partner in the digital age.
            </h2>

            <p className="text-base text-slate-700 dark:text-gray-300 leading-relaxed font-medium">
              Z COM is a top-tier internet service provider, delivering reliable and high-speed
              connectivity for corporate and residential sectors. We prioritize customer
              satisfaction with cutting-edge technology and exceptional service, ensuring
              uninterrupted connectivity and smooth browsing experiences.
            </p>

            <p className="text-base text-slate-600 dark:text-gray-400 leading-relaxed">
              Renowned for excellence and innovation, Z COM provides robust broadband solutions
              for home entertainment, remote work, and mission-critical business operations across Lahore.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm hover:text-brand-orangeLight transition-colors group"
              >
                <span>Learn more about our company story &amp; leadership</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-white dark:bg-[#12161F] p-7 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 hover:border-brand-orange/60 transition-all duration-300 space-y-3 shadow-md hover:shadow-xl hover:shadow-orange-500/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                  Our Mission
                </span>
                <Radio className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                Bridge Distances &amp; Foster Global Communication
              </h3>
              <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                Z COM aims to bridge distances and foster global communication with fast,
                reliable internet access. With <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" /> uptime, we ensure efficient and seamless
                connectivity for everyone we serve.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12161F] p-7 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 hover:border-brand-orange/60 transition-all duration-300 space-y-3 shadow-md hover:shadow-xl hover:shadow-orange-500/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                  Our Vision
                </span>
                <TrendingUp className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                Ubiquitous, Empowering High-Speed Connectivity
              </h3>
              <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                A world where high-speed internet is ubiquitous, empowering individuals and
                communities to thrive and innovate &mdash; ensuring <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" /> network uptime and a{" "}
                <AnimatedCounter from={0} to={100} suffix="%" /> customer satisfaction rate through seamless connectivity and exceptional
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. INTERACTIVE SOLUTION EXPLORER & PACKAGE CALCULATOR
          ============================================================ */}
      <section className="py-12 bg-white/70 dark:bg-[#0B0E14]/80 backdrop-blur-xl border-y border-slate-200/70 dark:border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
              OUR SERVICES &amp; PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
              Reliable Solutions. Smarter Connectivity.
            </h2>
            <p className="text-base text-slate-600">
              Explore our 5 official service pillars: Corporate Internet, Cloud &amp; Hosting, Managed IT, Cybersecurity, and Digital Solutions.
            </p>
          </div>

          <SolutionExplorer />
        </div>
      </section>


      {/* ============================================================
          7. HARDWARE PARTNERS & CLIENT ORGANIZATIONS MARQUEE LOOPS
          ============================================================ */}
      <section className="space-y-16">
        {/* Hardware Partners */}
        <div className="py-12 bg-slate-100/60 dark:bg-[#0E1118]/80 backdrop-blur-md border-y border-slate-200/70 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
              CARRIER-GRADE COLLABORATION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading mt-1">
              Global Hardware &amp; Optical Routing Partners
            </h3>
          </div>
          <PartnersMarquee />
        </div>

        {/* Client Organizations */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
              PROVEN TRACK RECORD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
              Trusted by Lahore&apos;s Leading Organizations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400">
              From tertiary hospitals and luxury hotels to educational campuses and commercial
              towers, our dedicated fiber keeps Lahore connected.
            </p>
          </div>

          <ClientsAnimatedMarquee />
        </div>
      </section>

      {/* ============================================================
          8. VERIFIED ENTERPRISE TESTIMONIALS LOOP SLIDER
          ============================================================ */}
      <section className="py-24 bg-slate-50/65 dark:bg-[#0B0E14]/80 backdrop-blur-xl border-y border-slate-200/70 dark:border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 dark:bg-brand-orange/15 border border-orange-200 dark:border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>REAL CLIENT FEEDBACK · LAHORE METROPOLITAN AREA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
              What Lahore&apos;s Enterprise Leaders Say
            </h2>
            <p className="text-base text-slate-600 dark:text-gray-300">
              Verified testimonials from chief medical officers, VP engineering leads, and IT directors
              relying on Z COM dedicated optical circuits every single day.
            </p>
          </div>

          <TestimonialsLoopSlider />
        </div>
      </section>

      {/* ============================================================
          9. CAREERS & TEAM SPOTLIGHT BANNER
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-700/60 shadow-2xl p-6 sm:p-10 lg:p-14 bg-[#0B0E14]">
          <div className="absolute inset-0 -z-20">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="Z COM Technology Team Collaboration"
              fill
              className="object-cover object-center filter brightness-[0.25] contrast-125"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>WE ARE HIRING IN LAHORE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Grow Your Career in Telecommunications &amp; Network Engineering
              </h2>

              <p className="text-sm sm:text-base text-gray-200 max-w-2xl leading-relaxed">
                Join our fast-expanding team in Gulberg-III, Lahore. We offer competitive salaries,
                career advancement, cutting-edge carrier-grade equipment, and a collaborative NOC culture.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-orange" />
                  <span>Competitive Compensation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-orange" />
                  <span>Senior Mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  <span>Gulberg-III Headquarters</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3 w-full">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-brand-orange/30 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Explore Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-gray-300 font-medium text-left lg:text-right">
                <AnimatedCounter from={0} to={5} /> Active Openings · Direct Application
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          10. FREQUENTLY ASKED QUESTIONS
          ============================================================ */}
      <section className="py-12 bg-white/70 dark:bg-[#0B0E14]/80 backdrop-blur-xl border-t border-slate-200/70 dark:border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-medium">
              Clear answers about our optical infrastructure, coverage, and contractual SLAs.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* ============================================================
          11. FINAL BOTTOM CALL TO ACTION (LIGHT FROSTED GLASS ISLAND)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative rounded-3xl overflow-hidden border border-orange-200/80 dark:border-slate-700/60 bg-gradient-to-br from-orange-50/70 via-white/85 to-slate-100/60 dark:from-[#161B26]/90 dark:via-[#12161F]/95 dark:to-[#0E1118]/90 backdrop-blur-2xl p-6 sm:p-10 lg:p-16 text-center space-y-6 shadow-2xl shadow-orange-500/5 dark:shadow-black/60">
          {/* Ambient Optical Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#F05A22 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 space-y-5 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GET CONNECTED IN LAHORE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Ready for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orangeLight to-orange-500">
                lightning-fast fiber
              </span>{" "}
              connectivity?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Contact our Lahore engineering desk today for a free optical site survey, feasibility inspection, and custom enterprise quote.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl transition-all shadow-xl shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Schedule Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/923171118042"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-brand-orange text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Micro Guarantees Trust Strip */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600 font-semibold text-left sm:text-center">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Free On-Site Survey</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>24-48h Rapid Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>
                  <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" /> Contractual SLA
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Zero FUP Throttling</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
