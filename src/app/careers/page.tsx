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
  Send,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Careers & Open Positions | Z COM Networks Private Limited",
  description:
    "Join Lahore's leading high-speed fiber ISP. Explore career opportunities in Network Operations (NOC), fiber optical engineering, field deployment, and enterprise B2B sales at Z COM Networks.",
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
    <div className="py-12 sm:py-20 space-y-24 transition-colors duration-300">
      {/* ============================================================
          1. HERO BANNER WITH HIGH-RES OFFICE IMAGERY
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-700/60 shadow-xl shadow-slate-200/50 dark:shadow-black/50 p-8 sm:p-16 text-center">
          {/* Background Image */}
          <div className="absolute inset-0 -z-20">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="Z COM Technology Team Collaboration"
              fill
              className="object-cover object-center filter brightness-[0.25] contrast-125"
              priority
            />
          </div>
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent -z-10" />

          <div className="max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAREERS AT Z COM NETWORKS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.1]">
              Engineer the Future of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orangeLight to-[#FFA26B]">
                High-Speed Connectivity
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              We are expanding our Network Operations Center (NOC), fiber deployment crew, and
              corporate sales teams in Gulberg-III, Lahore. Build your career with Lahore&apos;s
              top-tier fiber internet provider.
            </p>

            <div className="pt-2">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl transition-all shadow-xl shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>View Open Positions (<AnimatedCounter from={0} to={POSITIONS.length} />)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. CULTURE & PERKS GRID
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CULTURE_PERKS.map((perk, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#12161F] p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 space-y-3 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-brand-orange/60 transition-all duration-300"
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
        </div>
      </section>

      {/* ============================================================
          3. PHOTO BANNER: NOC & FIELD CULTURE
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Photo Card with Overlay */}
          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-700/60 shadow-xl shadow-slate-200/50 dark:shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80"
              alt="Fiber Optic Engineering"
              fill
              className="object-cover filter contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider">
                Field &amp; NOC Operations
              </span>
              <h4 className="text-lg font-bold text-white font-heading mt-2">
                Hands-On Optical Infrastructure
              </h4>
              <p className="text-xs text-gray-200 mt-1">
                From high-density fiber splice closures to core ring routing, work on live carrier networks.
              </p>
            </div>
          </div>

          {/* Description & Values */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
              OUR WORK CULTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading leading-tight">
              Empowering Engineers &amp; Leaders to Thrive
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              At Z COM Networks, we believe that world-class connectivity begins with a passionate,
              supported team. Whether you are troubleshooting sub-millisecond latencies in our
              Gulberg-III Network Operations Center or deploying gigabit fiber terminations in the
              field, your contributions directly empower Lahore&apos;s businesses and residents.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60 shadow-sm">
                <div className="text-2xl font-extrabold text-brand-orange font-heading">
                  <AnimatedCounter from={0} to={100} suffix="%" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  Local Lahore Leadership &amp; Support
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60 shadow-sm">
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
                  <AnimatedCounter from={0} to={24} suffix="/7/365" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  Active Network Operations Center
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. OPEN POSITIONS SECTION
          ============================================================ */}
      <section id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
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
              className="bg-white dark:bg-[#12161F] p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 hover:border-brand-orange/60 transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-black/50 space-y-6"
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

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={`mailto:sales@zcomnetworks.com.pk?subject=${encodeURIComponent(
                    `Job Application: ${job.title} - Z COM Networks`
                  )}&body=${encodeURIComponent(
                    `Hello HR / Recruitment Team at Z COM Networks,\n\nI am applying for the position of "${job.title}" at your Gulberg-III, Lahore office.\n\nPlease find my resume attached.\n\nName:\nContact Phone / WhatsApp:\nCurrent Location in Lahore:\nYears of Relevant Experience:\n`
                  )}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-brand-orange/20 w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4" />
                  <span>Apply via Email</span>
                </a>

                <a
                  href={`https://wa.me/923171118042?text=${encodeURIComponent(
                    `Hello Z COM HR Team! I am interested in applying for the position of "${job.title}". Please advise how I can share my resume.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-brand-orange text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-slate-900/20 w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          5. GENERAL RESUME SUBMISSION BANNER
          ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#12161F] p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 text-center space-y-6 shadow-xl shadow-slate-200/50 dark:shadow-black/50">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-brand-orange flex items-center justify-center mx-auto border border-orange-500/20">
            <Mail className="w-7 h-7" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Don&apos;t See Your Exact Role?
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            We are always scouting for exceptional network engineers, fiber technicians, and sales
            talent in Lahore. Send an open application with your CV to our talent acquisition desk.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:sales@zcomnetworks.com.pk?subject=Open%20Career%20Application%20-%20Z%20COM%20Networks"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold py-3.5 px-6 sm:px-8 rounded-xl transition-all shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 w-full sm:w-auto text-center break-words"
            >
              <span>Email Your Resume to sales@zcomnetworks.com.pk</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          <p className="text-xs text-slate-400 dark:text-slate-500">
            Head Office: 7/4, E-3 Main Boulevard, Gulberg-III, Lahore, Punjab, Pakistan
          </p>
        </div>
      </section>
    </div>
  );
}
