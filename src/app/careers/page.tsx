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
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

const POSITIONS: JobPosition[] = [
  {
    id: "noc-engineer",
    title: "NOC Network Engineer (L1 / L2)",
    department: "Network Operations Center",
    location: "Gulberg-III, Lahore",
    type: "Full-Time · Shift Rotations (24/7 NOC)",
    experience: "1–3 Years",
    description:
      "Responsible for real-time monitoring of metropolitan optical rings, proactive link fault isolation, BGP/OSPF routing diagnostics, and maintaining our 99.9% uptime SLA.",
    responsibilities: [
      "Continuously monitor core fiber backbone links and enterprise customer DIA circuits.",
      "Diagnose latency spikes, packet loss, and routing anomalies via carrier monitoring tools.",
      "Coordinate immediate escalation with field splicing teams for physical cable cuts.",
      "Document root-cause analyses and configuration changes in network change logs.",
    ],
    qualifications: [
      "BS in Telecommunication, Computer Systems, or Electrical Engineering.",
      "Hands-on experience with Cisco / Juniper CLI and Layer 2 / Layer 3 switching.",
      "CCNA or JNCIA certification is highly preferred.",
    ],
  },
  {
    id: "fiber-technician",
    title: "Fiber Optic Splicing & Field Technician",
    department: "Field Deployment & Maintenance",
    location: "Lahore Metropolitan Area",
    type: "Full-Time · On-Site",
    experience: "1–4 Years",
    description:
      "Hands-on deployment of aerial and underground optical fiber cables, core fusion splicing, OTDR loss characterization, and customer premises ONT activations across Lahore.",
    responsibilities: [
      "Perform precision fusion splicing on ribbon and loose-tube optical fiber cables.",
      "Operate OTDR, visual fault locators (VFL), and optical power meters for link validation.",
      "Execute rapid fiber restoration during emergency breaks and civil works outages.",
      "Install and commission optical fiber patch panels (ODF) and customer ONTs.",
    ],
    qualifications: [
      "DAE in Electronics, Electrical, or Telecommunication diploma.",
      "Demonstrated experience with Fujikura / Sumitomo fusion splicers and OTDR testing.",
      "Valid motorcycle / vehicle license for mobile dispatch across Lahore.",
    ],
  },
  {
    id: "enterprise-sales",
    title: "Enterprise B2B Account Manager",
    department: "Corporate Sales & Business Development",
    location: "Gulberg-III, Lahore",
    type: "Full-Time",
    experience: "2–5 Years",
    description:
      "Drive acquisition of dedicated enterprise internet (DIA), dark fiber leases, and metro ethernet accounts across commercial towers, universities, and industrial zones.",
    responsibilities: [
      "Identify corporate prospects in Lahore including software houses, financial institutions, and hospitals.",
      "Deliver technical connectivity proposals alongside our senior solutions architects.",
      "Lead contract negotiations and service level agreement (SLA) sign-offs.",
      "Maintain ongoing client relationship management to secure renewals and upsells.",
    ],
    qualifications: [
      "BBA / MBA / BS in Marketing, IT, or Business Administration.",
      "Proven B2B sales track record in Pakistan's telecom or IT sector.",
      "Strong communication, presentation, and executive negotiation skills.",
    ],
  },
  {
    id: "support-specialist",
    title: "Technical Customer Support Specialist",
    department: "Customer Operations & Helpdesk",
    location: "Gulberg-III, Lahore",
    type: "Full-Time · Rotational Shifts",
    experience: "1–2 Years",
    description:
      "First line of technical support for residential and enterprise clients, diagnosing router configurations, DNS issues, and coordinating with NOC engineers.",
    responsibilities: [
      "Provide real-time omnichannel support via telephone, WhatsApp business, and ticketing portals.",
      "Guide clients through ONT reboots, Wi-Fi channel configurations, and LAN troubleshooting.",
      "Log ticket lifecycles and ensure resolution within contractual MTTR targets.",
      "Gather customer feedback to improve support operations and technical workflows.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, IT, or related field.",
      "Exceptional verbal and written communication in English and Urdu.",
      "Customer-centric demeanor with strong patience and analytical ability.",
    ],
  },
  {
    id: "core-architect",
    title: "Senior Core Network Architect",
    department: "Network Engineering & Architecture",
    location: "Gulberg-III, Lahore",
    type: "Full-Time",
    experience: "5+ Years",
    description:
      "Lead the expansion of Z COM's DWDM optical rings, upstream peering with Tier-1 carriers, transit capacity upgrades, and IPv6 dual-stack infrastructure.",
    responsibilities: [
      "Architect and scale multi-gigabit routing topology utilizing Juniper MX / Cisco ASR routers.",
      "Optimize BGP peering policies with local internet exchanges (PKIX) and upstream carriers.",
      "Deploy robust DDoS mitigation scrubbing centers and automated traffic engineering.",
      "Mentor junior NOC engineers and formulate network security hardening policies.",
    ],
    qualifications: [
      "BS / MS in Network Engineering, Computer Science, or Electrical Engineering.",
      "CCNP / CCIE or JNCIP / JNCIE certifications required.",
      "Deep expertise in BGP, OSPF, MPLS, DWDM, and carrier-grade NAT.",
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
    title: "Central Lahore Headquarters",
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
          {/* NOC & Culture Wide Showcase Image */}
          <Image
            src="/images/careers/noc-work-culture.jpg"
            alt="Z COM Networks - State-of-the-Art NOC & Modern Engineering Workplace"
            fill
            unoptimized
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Subtle Ambient Vignette & Gradient for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

          {/* Top-Left Corner: Official Company Logo */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
            <div className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl border border-white/60 dark:border-slate-700/80 shadow-xl flex items-center gap-2">
              <div className="relative h-7 sm:h-8 w-28 sm:w-36">
                <Image
                  src="https://zcomnetworks.com.pk/assets/zcom-logo.png?v=2"
                  alt="Z COM Networks Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
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
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700/60">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-orange uppercase tracking-wider mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{job.department}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
                    {job.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#0E1118] px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-slate-700/60">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#0E1118] px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-slate-700/60">
                    <Clock className="w-3.5 h-3.5 text-brand-orange" />
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
                    `Job Application: ${job.title} - Z COM Networks`
                  )}&body=${encodeURIComponent(
                    `Hello HR / Recruitment Team at Z COM Networks,\n\nI am applying for the position of "${job.title}" at your Gulberg-III, Lahore office.\n\nPlease find my resume attached.\n\nName:\nContact Phone / WhatsApp:\nCurrent Location in Lahore:\nYears of Relevant Experience:\n`
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
