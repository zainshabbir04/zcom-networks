"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Globe,
  Cloud,
  Cpu,
  Code2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface SolutionItem {
  id: string;
  badge: string;
  icon: React.ReactNode;
  image: string;
  href: string;
  title: string;
  target: string;
  description: string;
  features: React.ReactNode[];
  highlight: React.ReactNode;
  whatsappMessage: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "corporate",
    badge: "Corporate Internet",
    icon: <Globe className="w-5 h-5 text-brand-orange" />,
    image: "/images/services/corporate-internet.jpg",
    href: "/services/corporate-internet",
    title: "Corporate Solutions",
    target: "Enterprises, Financial Institutions, Corporate HQs & Campuses",
    description:
      "Enterprise-grade optical connectivity featuring true 1:1 contention, multi-site MPLS routing, encrypted VPN tunnels, and subterranean Point-to-Point fiber links across Lahore.",
    features: [
      <span>DIA (Dedicated Internet Access) with 1:1 symmetrical bandwidth</span>,
      <span>
        Contractual <AnimatedCounter from={0} to={99.99} decimals={2} suffix="%" /> Uptime Service Level Agreement (SLA)
      </span>,
      <span>MPLS &amp; encrypted corporate site-to-site VPN solutions</span>,
      <span>Point to Point subterranean fiber connectivity across Lahore</span>,
      <span>
        Proactive <AnimatedCounter from={0} to={24} suffix="/7" /> NOC monitoring with sub-30 minute MTTR dispatch
      </span>,
    ],
    highlight: <span>1:1 Symmetrical Bandwidth SLA</span>,
    whatsappMessage:
      "Hello Z COM! I am inquiring about Corporate Solutions (DIA, MPLS, P2P Fiber) for our organization in Lahore.",
  },
  {
    id: "cloud",
    badge: "Cloud & Hosting",
    icon: <Cloud className="w-5 h-5 text-brand-orange" />,
    image: "/images/services/cloud-hosting.jpg",
    href: "/services/cloud-hosting",
    title: "Cloud and Hosting Solutions",
    target: "Tech Startups, Enterprises, Digital Teams & Mission-Critical Portals",
    description:
      "Scalable virtual compute, secure data center colocation, dedicated corporate email suites, and high-performance web hosting built for high availability and rapid growth.",
    features: [
      <span>High-performance VMs and VPS with dedicated vCPUs &amp; NVMe SSDs</span>,
      <span>Tier-3 secure server rack co-location in Lahore with redundant UPS</span>,
      <span>Dedicated business email hosting on clean, spam-filtered IPs</span>,
      <span>Ultra-fast Linux and Windows web hosting with free SSL certificates</span>,
      <span>Automated daily off-site backups with <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" /> availability</span>,
    ],
    highlight: <span>Tier-3 Secure Data Center</span>,
    whatsappMessage:
      "Hello Z COM! I am inquiring about Cloud and Hosting Solutions (VMs, VPS, Colocation, Email). Please share details.",
  },
  {
    id: "managed-it",
    badge: "Managed IT Services",
    icon: <Cpu className="w-5 h-5 text-brand-orange" />,
    image: "/images/services/managed-it.jpg",
    href: "/services/managed-it",
    title: "Managed IT Solutions and Services",
    target: "Corporate Campuses, Commercial Facilities, Healthcare & Branch Networks",
    description:
      "End-to-end IT operations management, preventative server and hardware maintenance, structured network cabling, and rapid on-site field engineering dispatch in Lahore.",
    features: [
      <span>Continuous <AnimatedCounter from={0} to={24} suffix="/7" /> NOC network telemetry and health monitoring</span>,
      <span>Preventative and emergency server, switch &amp; router maintenance</span>,
      <span>Structured CAT6/Fiber optic cabling and campus Wi-Fi architecture</span>,
      <span>Dedicated Lahore-based Level-3 field engineering emergency dispatch</span>,
      <span>Proactive OTDR fiber health monitoring and ring auto-failover</span>,
    ],
    highlight: <span>24/7 Managed NOC Engineering</span>,
    whatsappMessage:
      "Hello Z COM! I am inquiring about Managed IT Solutions and NOC Services. Please share technical options.",
  },
  {
    id: "cybersecurity",
    badge: "Cybersecurity Defense",
    icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />,
    image: "/images/services/cybersecurity.jpg",
    href: "/services/cybersecurity",
    title: "Cybersecurity Services",
    target: "Enterprises, Financial Institutions, Healthcare & Sensitive Networks",
    description:
      "Multi-layered defense safeguarding corporate perimeters, cloud servers, and confidential data against sophisticated intrusion, malware, and volumetric DDoS disruptions.",
    features: [
      <span>Next-Generation Firewall (NGFW) deployment and rule administration</span>,
      <span>High-capacity scrubbing centers for volumetric DDoS attack mitigation</span>,
      <span>Routine network vulnerability assessments and security penetration audits</span>,
      <span>Endpoint protection, automated patch deployment, and threat detection</span>,
      <span>Zero-Trust network access (ZTNA) with multi-factor authentication</span>,
    ],
    highlight: <span>Zero-Trust Perimeter Defense</span>,
    whatsappMessage:
      "Hello Z COM! I am inquiring about Cybersecurity Services (Firewalls, DDoS Mitigation, Audits). Please share details.",
  },
  {
    id: "digital",
    badge: "Digital Solutions",
    icon: <Code2 className="w-5 h-5 text-brand-orange" />,
    image: "/images/services/digital-solutions.jpg",
    href: "/services/digital-solutions",
    title: "Digital Solutions",
    target: "Growing Brands, Modern Enterprises, Startups & Commercial Businesses",
    description:
      "Bespoke digital engineering encompassing high-speed responsive web development, native iOS/Android mobile applications, and impactful corporate visual brand design.",
    features: [
      <span>Full-stack responsive corporate website development &amp; web portals</span>,
      <span>Native and cross-platform mobile application development (iOS &amp; Android)</span>,
      <span>Complete corporate graphic designing, branding, and UI/UX systems</span>,
      <span>Headless CMS integrations, custom APIs, and cloud microservices</span>,
      <span>Ongoing technical maintenance, security patches, and SEO optimization</span>,
    ],
    highlight: <span>Full-Stack Digital Engineering</span>,
    whatsappMessage:
      "Hello Z COM! I am inquiring about Digital Solutions (Website Development, Mobile Apps, Graphic Design). Please share details.",
  },
];

export default function SolutionExplorer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = SOLUTIONS.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-play loop every 6 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  // Touch Swipe Support for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="space-y-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Interactive Slider Tabs Track */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
        {SOLUTIONS.map((s, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-bold transition-all duration-300 border cursor-pointer ${
                isActive
                  ? "bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/30 scale-102"
                  : "bg-white text-slate-700 border-slate-200 hover:border-orange-300 hover:bg-orange-50/50"
              }`}
            >
              {s.icon}
              <span>{s.badge}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Slider Main Card with Horizontal Sliding Track */}
      <div className="relative group">
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Solution"
          className="hidden sm:flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white hover:bg-brand-orange hover:text-white text-slate-800 border border-slate-200 shadow-xl items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Solution"
          className="hidden sm:flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white hover:bg-brand-orange hover:text-white text-slate-800 border border-slate-200 shadow-xl items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Viewport Frame */}
        <div
          className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 bg-white relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Ambient Subtle Orange Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Horizontal Slide Strip */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="w-full shrink-0 p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
              >
                {/* Left: Solution Specifications */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold tracking-wide uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{sol.badge}</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-500">
                    <span className="text-brand-orange font-bold uppercase text-[11px] tracking-wider block sm:inline sm:mr-2">
                      Target Deployment:
                    </span>
                    {sol.target}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2.5 pt-1">
                    {sol.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <Link
                      href={sol.href}
                      className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-md shadow-brand-orange/30 hover:-translate-y-0.5"
                    >
                      <span>Explore Dedicated Service Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={`https://wa.me/923171118042?text=${encodeURIComponent(sol.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl transition-all border border-slate-200"
                    >
                      <span>Inquire via WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
                    </a>
                  </div>
                </div>

                {/* Right: Technical Spec Card with Dedicated Image */}
                <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-center relative overflow-hidden shadow-inner">
                  {/* Service Visual Preview */}
                  <Link href={sol.href} className="block group">
                    <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden border border-slate-200 shadow-md">
                      <Image
                        src={sol.image}
                        alt={sol.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3 text-left">
                        <span className="text-[10px] font-bold text-orange-300 block uppercase">Dedicated Architecture</span>
                        <span className="text-xs sm:text-sm font-bold text-white block truncate">{sol.title} &rarr;</span>
                      </div>
                    </div>
                  </Link>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      ARCHITECTURAL HIGHLIGHT
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 font-heading mt-0.5">
                      {sol.highlight}
                    </h4>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-left space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Network SLA:</span>
                      <span className="font-extrabold text-brand-orange">99.99% Core</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Head Office:</span>
                      <span className="font-semibold text-slate-800">Gulberg-III, Lahore</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Support:</span>
                      <span className="font-bold text-slate-800">24/7/365 Direct NOC</span>
                    </div>
                  </div>

                  <Link
                    href={sol.href}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orangeLight transition-colors w-full"
                  >
                    <span>View Detailed Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Slider Dots & Indicator */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {SOLUTIONS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide ? "w-8 bg-brand-orange" : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
