import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Code2,
  Check,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Palette,
  Layout,
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
  Layers,
  Activity,
  Cpu,
  Zap,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import InfrastructureLoopSlider from "@/components/ui/InfrastructureLoopSlider";

export const metadata: Metadata = {
  title: "Digital Solutions | Web, Mobile Apps & Graphic Design | Z COM Networks",
  description:
    "Enterprise Digital Solutions: Custom Website Development, Native & Cross-Platform Mobile App Development, and Impactful Corporate Graphic Designing.",
};

const SUB_SERVICES = [
  {
    title: "Website Development",
    tag: "High-Performance Digital Portals",
    desc: "Bespoke full-stack web development engineered with modern architectures (Next.js, React, Tailwind CSS, Node.js). Designed for lightning-fast loading speeds, mobile responsiveness, SEO supremacy, and seamless headless CMS integration.",
    icon: Globe,
    features: [
      "Custom responsive corporate websites, web portals & enterprise platforms",
      "Sub-second page speeds optimized for Google Core Web Vitals",
      "Headless CMS, RESTful API and GraphQL microservice integrations",
      "Continuous vulnerability scanning, SSL encryption & automated backups",
    ],
  },
  {
    title: "App Development",
    tag: "iOS & Android Mobile Software",
    desc: "End-to-end native and cross-platform mobile application development (Flutter, React Native, Swift, Kotlin). Built to automate enterprise workflows, deliver engaging consumer experiences, and scale on cloud backends.",
    icon: Smartphone,
    features: [
      "Cross-platform iOS and Android apps with native 60fps performance",
      "Secure backend cloud architectures with real-time push notifications",
      "Offline-first local caching and seamless payment gateway integration",
      "App Store & Google Play Store release management and maintenance",
    ],
  },
  {
    title: "Graphic Designing & UI/UX",
    tag: "Corporate Brand Identity",
    desc: "Complete visual identity design that establishes immediate market authority and credibility. From brand style guides and vector logos to corporate brochures, presentation decks, and high-fidelity UI/UX design systems.",
    icon: Palette,
    features: [
      "Comprehensive corporate brand style guides, color systems & typography",
      "Vector logo design, business stationery & company profile brochures",
      "Figma UI/UX wireframes, prototypes & responsive design systems",
      "High-impact digital marketing assets & interactive trade presentation decks",
    ],
  },
];

const SPECS = [
  { label: "Core Web Vitals", value: "Sub-Second", desc: "Optimized for 95+ Google Lighthouse scores" },
  { label: "Tech Stack", value: "Next.js / React", desc: "Modern server-side rendering & TypeScript" },
  { label: "Mobile Frameworks", value: "iOS & Android", desc: "Cross-platform Flutter & React Native" },
  { label: "Code Quality", value: "Zero Vulnerability", desc: "Strict automated CI/CD and security scans" },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "Detailed requirements mapping, user journey planning, and database schema specification.",
  },
  {
    step: "02",
    title: "UI/UX System Design",
    desc: "Interactive Figma wireframes and high-fidelity clickable prototypes designed for intuitive workflows.",
  },
  {
    step: "03",
    title: "Full-Stack Engineering",
    desc: "Clean, component-driven frontend coding backed by scalable APIs, microservices, and databases.",
  },
  {
    step: "04",
    title: "Production Launch & SLA",
    desc: "Zero-downtime deployment, DNS provisioning, Google indexing, and ongoing SLA maintenance.",
  },
];

export default function DigitalSolutionsPage() {
  return (
    <div className="relative transition-colors duration-300 space-y-16 sm:space-y-24 pb-16">
      
      {/* ============================================================
          1. OUTSTANDING CINEMATIC HERO BANNER (STARTS DIRECTLY BELOW NAVBAR)
          ============================================================ */}
      <section className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Layer 0: High-Res Dedicated Image (100% Full Viewport Width) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/services/digital-solutions.jpg"
            alt="Digital Solutions - Z COM Networks"
            fill
            priority
            unoptimized
            className="object-cover object-center scale-100"
          />
          {/* Subtle Ambient Vignette & Warm Orange Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080D]/95 via-[#07090E]/60 to-[#07090E]/85" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Layer 1: Foreground Content Over Banner */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col justify-between space-y-8">
          
          {/* Top Breadcrumb & Status Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">Services</span>
              <span className="text-slate-500">/</span>
              <span className="text-brand-orange font-bold">Digital Solutions</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span className="text-white">ENTERPRISE WEB &amp; APP ENGINEERING</span>
            </div>
          </div>

          {/* Center Heading & Value Proposition */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-white">OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight drop-shadow-md">
              Digital Solutions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                &amp; Creative Engineering
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
              Elevate your corporate brand footprint with high-performance web development, native iOS &amp; Android applications, customer self-service portals, and impactful UI/UX brand identity systems.
            </p>

            {/* Quick Action Navigation Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>Start Digital Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white border border-white/30 font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>
          </div>

          {/* 4 Floating Telemetry Glassmorphism Metric Hub */}
          <div className="pt-6 sm:pt-8 max-w-5xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-brand-orange/25 text-brand-orange flex items-center justify-center mb-1.5">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                <AnimatedCounter from={0} to={100} suffix="%" />
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Responsive &amp; Fast
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                All Screen Sizes
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                Next.js
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Modern Framework
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                React &amp; TypeScript
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-brand-orange/25 text-brand-orange flex items-center justify-center mb-1.5">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-brand-orange font-heading block group-hover:scale-105 transition-transform">
                iOS &amp; Android
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Mobile Apps
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                Native &amp; Cross-Platform
              </span>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/20 shadow-xl hover:bg-black/65 hover:border-brand-orange/60 transition-all text-center group">
              <div className="w-8 h-8 mx-auto rounded-lg bg-orange-400/25 text-orange-400 flex items-center justify-center mb-1.5">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block group-hover:scale-105 transition-transform">
                &lt; 1s
              </span>
              <span className="text-xs text-white font-bold mt-0.5 block font-heading">
                Core Web Vitals
              </span>
              <span className="text-[10px] text-slate-300 font-medium block">
                High-Speed SEO
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          2. CORE ARCHITECTURE CAPABILITIES GRID
          ============================================================ */}
      <section id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>DEVELOPMENT CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Enterprise Digital Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From modern responsive web applications to native mobile apps and brand identity systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUB_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-orange/60 shadow-xl shadow-slate-200/40 transition-all duration-300 space-y-4 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold shrink-0">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading group-hover:text-brand-orange transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          3. TECHNICAL SPECIFICATIONS MATRIX
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#090C15] text-white p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                ENGINEERING STANDARDS
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Modern Technology Stacks &amp; Quality Benchmarks
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SPECS.map((spec, sIdx) => (
                <div key={sIdx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs text-slate-400 block">{spec.label}</span>
                  <span className="text-xl font-extrabold text-brand-orange block font-heading">{spec.value}</span>
                  <span className="text-[11px] text-slate-300 block">{spec.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. DEVELOPMENT WORKFLOW
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            PRODUCT LIFECYCLE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Agile Engineering Methodology
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From interactive discovery to wireframing, sprint development, and production rollout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORKFLOW.map((wf, wIdx) => (
            <div
              key={wIdx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-orange/50 shadow-md hover:shadow-lg transition-all space-y-2 relative"
            >
              <span className="text-3xl font-black text-brand-orange/30 font-heading block">{wf.step}</span>
              <h4 className="text-base font-extrabold text-slate-900">{wf.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{wf.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          5. OPTICAL INFRASTRUCTURE ARCHITECTURE LOOP
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>OPTICAL INFRASTRUCTURE ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Hosted On Carrier-Grade Cloud Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            All digital portals and web applications run with direct connectivity to our optical backbone.
          </p>
        </div>

        <InfrastructureLoopSlider />
      </section>

      {/* ============================================================
          6. DIRECT CONTACT STRIP (FROM FLYER)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                DIRECT CORPORATE INQUIRIES
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Ready to Build Your Enterprise Digital Solution?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <a
                href="tel:+924234511111"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Phone:</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-orange transition-colors">
                    +92 42 345 11 111
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@zcomnetworks.com.pk"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-slate-400 block font-semibold">Email:</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-orange transition-colors truncate block">
                    info@zcomnetworks.com.pk
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Design &amp; Dev Studio:</span>
                  <span className="text-xs font-semibold text-white leading-tight block">
                    7/4, E-3 Main Boulevard, Gulberg-III.
                  </span>
                </div>
              </div>

              <a
                href="https://www.zcomnetworks.com.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-slate-400 block font-semibold">Web Portal:</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-orange transition-colors truncate block">
                    www.zcomnetworks.com.pk
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
