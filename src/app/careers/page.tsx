import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Award,
  ChevronRight,
  Sparkles,
  HeartHandshake,
  Cpu,
  Mail,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MinimalistBanner, { BannerImage, BannerBadge, BannerHeadline, BannerSubtext, BannerActions } from "@/components/ui/MinimalistBanner";
import ScrollReveal, { StaggerContainer } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers & Open Positions | Z COM Networks Private Limited",
  description:
    "Join our high-speed optical fiber ISP network. Explore career opportunities in Network Operations (NOC), fiber optical engineering, field deployment, and enterprise B2B sales at Z COM Networks.",
};

interface JobPosition {
  id: string;
  title: string;
  badge?: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  emailSubject?: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

const POSITIONS: JobPosition[] = [
  {
    id: "inventory-management-executive",
    title: "Inventory Management Executive",
    department: "Operations & Supply Chain",
    location: "Corporate HQ Lahore, Pakistan",
    type: "Full-Time",
    experience: "2–3 Years",
    emailSubject: "Application – Inventory Management Executive",
    description:
      "Responsible for maintaining accurate inventory records, monitoring stock movements, asset accountability, and coordinating with procurement and operations departments to ensure seamless supply chain workflows.",
    responsibilities: [
      "Maintain accurate inventory records and update stock movements.",
      "Monitor stock levels, material issuance, receipts, and returns.",
      "Conduct regular physical stock counts and reconcile discrepancies.",
      "Manage inventory documentation and maintain proper records.",
      "Coordinate with procurement, operations, and other relevant departments.",
      "Ensure proper storage, tracking, and accountability of company assets and equipment.",
      "Prepare inventory reports and support stock audits.",
    ],
    qualifications: [
      "Bachelor's degree in Business Administration, Supply Chain Management, or a relevant field.",
      "2–3 years of relevant experience in inventory or stock management.",
      "Proficiency in MS Excel and inventory management systems.",
      "Strong organizational, analytical, and record-keeping skills.",
      "High attention to detail and the ability to manage multiple tasks efficiently.",
    ],
  },
  {
    id: "corporate-sales-executive",
    title: "Corporate Sales Executive",
    badge: "Target-Based Role",
    department: "Corporate Sales & Enterprise B2B",
    location: "Corporate HQ Lahore, Pakistan",
    type: "Full-Time · Target-Based Role",
    experience: "2+ Years",
    emailSubject: "Corporate Sales Executive Application",
    description:
      "Drive B2B enterprise connectivity sales, generate qualified corporate leads, negotiate proposals, and achieve monthly sales targets across corporate and enterprise client accounts.",
    responsibilities: [
      "Drive B2B sales of internet and connectivity solutions.",
      "Identify corporate leads and build a strong sales pipeline.",
      "Meet monthly sales targets and revenue goals.",
      "Prepare proposals, negotiate, and close deals.",
      "Maintain client relationships and coordinate with internal teams.",
    ],
    qualifications: [
      "2+ years of sales experience in an ISP environment.",
      "Proven corporate / B2B sales experience.",
      "BS Computer Science or BS IT preferred.",
      "Strong communication, presentation, and negotiation skills.",
      "Target-driven, proactive, and comfortable with field visits.",
    ],
  },
];

const CULTURE_PERKS = [
  {
    icon: <Zap className="w-6 h-6 text-brand-orange" />,
    title: "Accelerated Career Growth",
    desc: "Clear progression ladders with hands-on exposure to carrier-grade core routers and enterprise fiber loops.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-brand-orange" />,
    title: "Tier-1 Infrastructure Access",
    desc: "Work directly on cutting-edge hardware from Cisco, Juniper, Huawei, and high-precision Fujikura splicing rigs.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-brand-orange" />,
    title: "Health & Wellness Coverage",
    desc: "Comprehensive health insurance support for our full-time staff and their families.",
  },
  {
    icon: <Award className="w-6 h-6 text-brand-orange" />,
    title: "Certification Sponsorships",
    desc: "We sponsor CCNA, CCNP, JNCIA, and optical fiber engineering accreditations for dedicated team members.",
  },
  {
    icon: <Users className="w-6 h-6 text-brand-orange" />,
    title: "Collaborative NOC Culture",
    desc: "A high-support, collaborative team atmosphere where knowledge-sharing is celebrated every single day.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
    title: "Central Corporate Headquarters",
    desc: "Modern office located on Main Boulevard, Gulberg-III, with convenient transport and dining access.",
  },
];

export default function CareersPage() {
  return (
    <div className="relative transition-colors duration-300 -mt-20 sm:-mt-24 space-y-16 sm:space-y-24 pb-16">
      {/* ============================================================
          1. OUTSTANDING CINEMATIC HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <MinimalistBanner className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: User-Uploaded Dedicated Banner Image */}
        <BannerImage className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/careers/hero-banner.jpg"
            alt="Careers at Z COM Networks - Engineering the Future of High-Speed Connectivity"
            fill
            priority
            unoptimized
            className="object-cover object-center scale-100"
          />
          {/* Cinematic Dark Gradient Overlays for Maximum Legibility & Visual Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
        </BannerImage>

        {/* Layer 1: Foreground Content Over Banner */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:py-24">
          <div className="max-w-3xl space-y-6">
            
            {/* Breadcrumb & Status Pill */}
            <BannerBadge className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
              <nav className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-300">
                <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
                <span className="text-slate-500">/</span>
                <span className="text-brand-orange font-bold">Careers</span>
              </nav>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 backdrop-blur-md border border-brand-orange/40 text-brand-orange text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CAREERS AT Z COM NETWORKS</span>
              </div>
            </BannerBadge>

            {/* Bold Headline */}
            <BannerHeadline>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.1] drop-shadow-md">
              Engineer the Future of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                High-Speed Connectivity
              </span>
            </h1>
            </BannerHeadline>

            {/* Concise Value Description */}
            <BannerSubtext>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Join our expanding Network Operations Center (NOC), optical infrastructure teams, and corporate technology professionals. Build a rewarding career with an industry-leading enterprise connectivity provider.
            </p>
            </BannerSubtext>

            <BannerActions className="space-y-4">
            {/* Action CTA & Stats */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full btn-minimal-lift"
              >
                <span>View Open Positions (<AnimatedCounter from={0} to={POSITIONS.length} />)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#culture"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full btn-minimal-lift"
              >
                <span>Why Join Us</span>
              </a>
            </div>

            {/* Open Roles Telemetry Stat */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-4 p-3 px-5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading">
                  <AnimatedCounter from={0} to={POSITIONS.length} />
                </span>
                <div className="border-l border-white/15 pl-3.5 text-left">
                  <span className="text-xs text-white font-bold block">Open Roles</span>
                  <span className="text-[10px] text-slate-400 font-medium block">Actively Hiring</span>
                </div>
              </div>
            </div>
            </BannerActions>

          </div>
        </div>
      </MinimalistBanner>

      {/* ============================================================
          2. CULTURE & PERKS GRID
          ============================================================ */}
      <section id="culture" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
            WHY JOIN Z COM?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
            An Environment Built for Technical Growth
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            We value technical rigor, proactive problem-solving, and continuous learning.
          </p>
        </div>

        <StaggerContainer staggerMs={90} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CULTURE_PERKS.map((perk, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#12161F] p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 space-y-3 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-brand-orange/60 transition-all duration-300 layout-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 flex items-center justify-center border border-orange-500/20 text-brand-orange">
                {perk.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                {perk.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </section>

      {/* ============================================================
          3. PHOTO BANNER: STATE-OF-THE-ART NOC & WORK CULTURE
          ============================================================ */}
      <ScrollReveal variant="fade-up" as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-700/60 shadow-2xl shadow-slate-200/50 dark:shadow-black/60 group bg-slate-950 aspect-[16/9] sm:aspect-[21/9] max-h-[560px]">
          {/* NOC & Culture Wide Showcase Image (Subtly Blurred) */}
          <Image
            src="/images/careers/noc-work-culture.jpg"
            alt="Z COM Networks - State-of-the-Art NOC & Modern Engineering Workplace"
            fill
            unoptimized
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center w-full h-full filter blur-[2.5px] scale-[1.03] transition-transform duration-700 group-hover:scale-[1.06]"
          />

          {/* Subtle Ambient Vignette & Gradient for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

          {/* Top-Left Corner: Official Company Logo (Enlarged & 100% Transparent) */}
          <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-10">
            <div className="relative h-12 sm:h-14 lg:h-16 w-44 sm:w-56 lg:w-64 transition-transform duration-300 hover:scale-105">
              <Image
                src="https://zcomnetworks.com.pk/assets/zcom-logo.png?v=2"
                alt="Z COM Networks Logo"
                fill
                unoptimized
                priority
                className="object-contain object-left drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ============================================================
          4. OPEN POSITIONS SECTION
          ============================================================ */}
      <ScrollReveal variant="fade-up" as="section" id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
            CURRENT JOB OPENINGS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
            Explore Your Next Career Move
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Review the positions below and submit your resume directly to our recruitment desk.
          </p>
        </div>

        <div className="space-y-6">
          {POSITIONS.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-[#12161F] p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 hover:border-brand-orange/60 transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-black/50 space-y-6 layout-card-hover"
            >
              {/* Job Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700/60">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange uppercase tracking-wider">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{job.department}</span>
                    </span>
                    {job.badge && (
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                        {job.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
                    {job.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#0E1118] px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-slate-700/60 font-medium">
                    <Clock className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#0E1118] px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-slate-700/60 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#0E1118] px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-slate-700/60 font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                {job.description}
              </p>

              {/* Responsibilities & Qualifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-gray-200 uppercase tracking-wider font-heading">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-orange font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-gray-200 uppercase tracking-wider font-heading">
                    Required Qualifications:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                    {job.qualifications.map((q, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-orange font-bold">✓</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex items-center">
                <a
                  href={`mailto:hr@zcomnetworks.com.pk?subject=${encodeURIComponent(
                    job.emailSubject || `Application – ${job.title}`
                  )}&body=${encodeURIComponent(
                    `Hello HR / Recruitment Team at Z COM Networks,\n\nI am applying for the position of "${job.title}".\n\nPlease find my resume attached.\n\nName:\nContact Phone:\nCurrent Location:\nYears of Relevant Experience:\n`
                  )}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-brand-orange/20 w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4" />
                  <span>Apply via Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ============================================================
          5. GENERAL RESUME SUBMISSION CTA CARD
          ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scale-in">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B0F19] via-[#141B2B] to-[#1A120B] border border-orange-500/40 p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-2xl shadow-orange-500/20 layout-card-hover">
          {/* Colorful Vibrant Ambient Mesh Lighting */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-brand-orange via-orange-500 to-amber-400 rounded-full blur-[90px] opacity-35 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tl from-orange-600 via-brand-orange to-amber-500 rounded-full blur-[90px] opacity-40 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-brand-orange/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 space-y-5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>TALENT ACQUISITION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Don&apos;t See Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                Exact Role?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              We are always scouting for exceptional network engineers, optical infrastructure technicians, and corporate technology professionals. Send an open application with your CV to our talent acquisition desk.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hr@zcomnetworks.com.pk?subject=Open%20Career%20Application%20-%20Z%20COM%20Networks"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-brand-orange text-white font-extrabold text-sm sm:text-base py-4 px-10 rounded-2xl transition-all shadow-xl shadow-brand-orange/40 hover:shadow-brand-orange/60 hover:scale-105"
              >
                <span>Email Resume to hr@zcomnetworks.com.pk</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              Corporate Headquarters: 7/4, E-3 Main Boulevard, Gulberg-III
            </p>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
