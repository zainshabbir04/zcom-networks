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
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Digital Solutions | Web, Mobile Apps & Graphic Design | Z COM Networks",
  description:
    "Enterprise Digital Solutions in Lahore: Custom Website Development, Native & Cross-Platform Mobile App Development, and Impactful Corporate Graphic Designing.",
};

const SUB_SERVICES = [
  {
    title: "Website Development",
    tag: "High-Performance Digital Portals",
    desc: "Bespoke full-stack web development engineered with modern architectures (Next.js, React, Tailwind CSS, Node.js). Designed for lightning-fast loading speeds, mobile responsiveness, SEO supremacy, and seamless headless CMS integration.",
    features: [
      "Custom responsive corporate websites, web portals & eCommerce platforms",
      "Sub-second page speeds optimized for Google Core Web Vitals",
      "Headless CMS, RESTful API and GraphQL microservice integrations",
      "Continuous vulnerability scanning, SSL encryption & automated backups",
    ],
  },
  {
    title: "App Development",
    tag: "iOS & Android Mobile Software",
    desc: "End-to-end native and cross-platform mobile application development (Flutter, React Native, Swift, Kotlin). Built to automate enterprise workflows, deliver engaging consumer experiences, and scale on cloud backends.",
    features: [
      "Cross-platform iOS and Android apps with native 60fps performance",
      "Secure backend cloud architectures with real-time push notifications",
      "Offline-first local caching and seamless payment gateway integration",
      "App Store & Google Play Store release management and maintenance",
    ],
  },
  {
    title: "Graphic Designing",
    tag: "Corporate Brand Identity",
    desc: "Complete visual identity design that establishes immediate market authority and credibility. From brand style guides and vector logos to corporate brochures, presentation decks, and high-fidelity UI/UX design systems.",
    features: [
      "Comprehensive corporate brand style guides, color systems & typography",
      "Vector logo design, business stationery & company profile brochures",
      "Figma UI/UX wireframes, prototypes & responsive design systems",
      "High-impact digital marketing banners, social assets & trade show collateral",
    ],
  },
];

export default function DigitalSolutionsPage() {
  return (
    <div className="py-8 sm:py-16 space-y-16 transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link>
          <span>/</span>
          <span className="text-brand-orange font-bold">Digital Solutions</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL Z COM SERVICES &amp; PRODUCTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Digital <span className="text-brand-orange">Solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Transform your digital footprint with custom high-speed corporate websites, intuitive iOS &amp; Android mobile applications, and authoritative corporate graphic design systems that elevate your market stature.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  100%
                </span>
                <span className="text-xs text-slate-500 font-semibold">Custom Codebase</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-heading block">
                  iOS &amp; Android
                </span>
                <span className="text-xs text-slate-500 font-semibold">Native &amp; Cross-Platform</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center col-span-2 sm:col-span-1">
                <span className="text-xl sm:text-2xl font-black text-brand-orange font-heading block">
                  &lt; 1.0s
                </span>
                <span className="text-xs text-slate-500 font-semibold">Web Page Load Time</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/923171118042?text=Hello%20Z%20COM!%20I%20am%20inquiring%20about%20Digital%20Solutions%20(Website%20Development%2C%20App%20Development%2C%20Graphic%20Design)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all border border-slate-200"
              >
                <span>WhatsApp Digital Team</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
              </a>
            </div>
          </div>

          {/* Right Image (Image 2: Futuristic Digital Telemetry Dashboard & Circuits) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
              <Image
                src="/images/services/digital-solutions.jpg"
                alt="Digital Solutions - Z COM Digital Engineering"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <span className="text-xs font-bold text-brand-orange uppercase block">Full-Stack Digital Studio</span>
                <span className="text-sm font-extrabold text-slate-900 block">Web Development, Mobile Apps &amp; UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Services Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            CORE CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Modern Digital Craftsmanship
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered with modern frameworks, rigorous testing, and human-centered design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUB_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-orange/60 shadow-xl shadow-slate-200/40 transition-all duration-300 space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading group-hover:text-brand-orange transition-colors">
                    {srv.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold">
                    {srv.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>

                <div className="space-y-2 pt-2">
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

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orangeLight transition-colors"
                >
                  <span>Inquire About {srv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Direct Contact Strip (From Flyer) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                DIRECT PROJECT INQUIRIES
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                Ready to Build Your Next Digital Product?
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
                  <span className="text-xs text-slate-400 block font-semibold">Address:</span>
                  <span className="text-xs font-semibold text-white leading-tight block">
                    7/4, E-3 Main Boulevard, Gulberg-III, Lahore.
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
                  <span className="text-xs text-slate-400 block font-semibold">Web:</span>
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
