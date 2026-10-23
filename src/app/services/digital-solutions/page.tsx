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

export default function DigitalSolutionsPage() {
  return (
    <div className="relative transition-colors duration-300 space-y-16 sm:space-y-24 pb-16">
      
      {/* ============================================================
          1. MODERN ASYMMETRIC SPLIT-GRID HERO BANNER
          ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#07090E] border-b border-slate-800">
        {/* Ambient Glows & Tech Grid Background */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-700/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Banner Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Information, Headings, CTAs & Telemetry Dock (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Breadcrumbs & Status Tag */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                <nav className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
                  <span className="text-slate-600">/</span>
                  <span className="text-slate-400">Services</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-brand-orange font-bold">Digital Solutions</span>
                </nav>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-[11px] font-black uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                  <span>FULL-STACK &amp; UI/UX</span>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  <span>OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.1]">
                  Digital Solutions <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-amber-300">
                    &amp; Creative Engineering
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Elevate your corporate brand footprint with high-performance web development, native iOS &amp; Android applications, customer self-service portals, and impactful UI/UX brand identity systems.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5"
                >
                  <span>Start Digital Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>

              {/* Integrated Segmented Telemetry Dock (4 Stats) */}
              <div className="pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                    <div className="flex items-center justify-center gap-1 text-brand-orange mb-1">
                      <Globe className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold uppercase tracking-wider">Display</span>
                    </div>
                    <span className="text-lg sm:text-xl font-black text-white font-heading block">
                      <AnimatedCounter from={0} to={100} suffix="%" />
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium block">All Screen Sizes</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                    <div className="flex items-center justify-center gap-1 text-orange-400 mb-1">
                      <Code2 className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold uppercase tracking-wider">Stack</span>
                    </div>
                    <span className="text-lg sm:text-xl font-black text-white font-heading block">
                      Next.js
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium block">React &amp; TS</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                    <div className="flex items-center justify-center gap-1 text-brand-orange mb-1">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold uppercase tracking-wider">Mobile</span>
                    </div>
                    <span className="text-lg sm:text-xl font-black text-white font-heading block">
                      iOS &amp; Android
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium block">Native &amp; Cross</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                    <div className="flex items-center justify-center gap-1 text-orange-400 mb-1">
                      <Zap className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold uppercase tracking-wider">Speed</span>
                    </div>
                    <span className="text-lg sm:text-xl font-black text-white font-heading block">
                      &lt; 1s
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium block">Core Vitals</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: High-Tech Floating Visual Showcase (5 Cols) */}
            <div className="lg:col-span-5 relative">
              {/* Ambient Glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/30 to-amber-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl group">
                <div className="relative h-[340px] sm:h-[420px] w-full">
                  <Image
                    src="/images/services/digital-solutions.jpg"
                    alt="Digital Solutions & Creative Engineering - Z COM Networks"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/25 text-white text-xs font-bold shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Production-Ready Architecture</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/20 shadow-xl space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-brand-orange uppercase tracking-wider">
                      Agile Engineering
                    </span>
                    <span className="text-white/70 font-semibold text-[11px]">Full-Stack Lifecycle</span>
                  </div>
                  <p className="text-xs text-slate-200 font-medium leading-relaxed">
                    Enterprise web and mobile codebases built with modern frameworks, automated CI/CD pipelines, and high-conversion UI/UX.
                  </p>
                </div>
              </div>
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
          3. DIRECT CONTACT STRIP (FROM FLYER)
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
