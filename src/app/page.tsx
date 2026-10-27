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
} from "lucide-react";

import HeroSlider from "@/components/ui/HeroSlider";
import PartnersMarquee from "@/components/ui/PartnersMarquee";
import ClientsAnimatedMarquee from "@/components/ui/ClientsAnimatedMarquee";
import FaqAccordion from "@/components/ui/FaqAccordion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal, { StaggerContainer } from "@/components/ui/ScrollReveal";
import { ShimmerBadge } from "@/components/ui/AnimatedText";

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
          <ScrollReveal variant="fade-up" delay={150}>
            <div className="rounded-3xl bg-white/90 dark:bg-[#12161F]/90 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-2xl p-6 sm:p-8">
              <StaggerContainer staggerMs={120} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/60 dark:divide-slate-700/60">
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
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </section>

      {/* ============================================================
          3. ABOUT Z COM NETWORKS (HERITAGE & MISSION / VISION)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story */}
          <ScrollReveal variant="fade-right" className="lg:col-span-6 space-y-6">
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
              for home entertainment, remote work, and mission-critical business operations across the region.
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
          </ScrollReveal>

          {/* Mission & Vision Cards */}
          <ScrollReveal variant="fade-left" className="lg:col-span-6 space-y-5">
            <div className="bg-white dark:bg-[#12161F] p-7 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 hover:border-brand-orange/60 transition-all duration-300 space-y-3 shadow-md layout-card-hover">
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

            <div className="bg-white dark:bg-[#12161F] p-7 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 hover:border-brand-orange/60 transition-all duration-300 space-y-3 shadow-md layout-card-hover">
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
          </ScrollReveal>
        </div>
      </section>



      {/* ============================================================
          7. HARDWARE PARTNERS & CLIENT ORGANIZATIONS MARQUEE LOOPS
          ============================================================ */}
      <ScrollReveal variant="fade-up" className="space-y-16">
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
              Trusted by Leading Organizations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400">
              From tertiary hospitals and luxury hotels to educational campuses and commercial
              towers, our dedicated fiber keeps critical operations connected.
            </p>
          </div>

          <ClientsAnimatedMarquee />
        </div>
      </ScrollReveal>


      {/* ============================================================
          10. FREQUENTLY ASKED QUESTIONS
          ============================================================ */}
      <ScrollReveal variant="fade-up" as="section" className="py-12 bg-white/70 dark:bg-[#0B0E14]/80 backdrop-blur-xl border-t border-slate-200/70 dark:border-slate-800/80">
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
      </ScrollReveal>
      </div>
    </div>
  );
}
