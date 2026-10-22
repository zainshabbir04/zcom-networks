"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Radio,
  Server,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Video,
} from "lucide-react";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface SlideData {
  id: string;
  videoSrc: string;
  videoLabel: string;
  pillBadge: string;
  pillIcon: React.ReactNode;
  subtitle: string;
  rotatingKeyword: string;
  titleLight: string;
  titleBold: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  stats: {
    val: number;
    decimals?: number;
    prefix?: string;
    suffix: string;
    label: string;
  }[];
}

const BANNER_VIDEOS = [
  { id: "v1", src: "/videos/1.mp4", label: "01 · Metro Fiber Core" },
  { id: "v2", src: "/videos/2.mp4", label: "02 · Enterprise DIA" },
  { id: "v3", src: "/videos/3.mp4", label: "03 · High-Speed Transport" },
];

const ROTATING_WORDS = [
  "Pure Optical Fiber",
  "1:1 Dedicated DIA",
  "100G Metro Backbone",
  "Sub-ms Peering",
];

const SLIDES: SlideData[] = [
  {
    id: "internet-experience",
    videoSrc: "/videos/1.mp4",
    videoLabel: "01 · Metro Fiber Core",
    pillBadge: "Z COM NETWORKS · LAHORE'S TOP-TIER CARRIER ISP",
    pillIcon: <Radio className="w-3.5 h-3.5 text-brand-orange" />,
    subtitle: "PIONEERING CARRIER-GRADE OPTICAL FIBER CONNECTIVITY",
    rotatingKeyword: "Pure Optical Fiber",
    titleLight: "WE POWER LAHORE WITH",
    titleBold: "INTERNET EXCELLENCE",
    description:
      "Dedicated 1:1 symmetrical bandwidth, unshared enterprise optical links, and buffer-free residential fiber connectivity across Lahore with guaranteed 99.9% uptime SLA.",
    primaryButtonText: "EXPLORE SOLUTIONS",
    primaryButtonHref: "/services",
    secondaryButtonText: "CHECK FEASIBILITY",
    secondaryButtonHref: "/contact",
    stats: [
      { val: 99.9, decimals: 1, suffix: "%", label: "Contractual SLA" },
      { val: 100, suffix: " Gbps", label: "Metro Backbone Ring" },
      { val: 1, prefix: "1:", suffix: " Sym", label: "Zero Throttle / No FUP" },
      { val: 24, suffix: "/7 NOC", label: "Gulberg-III Support" },
    ],
  },
  {
    id: "dedicated-internet",
    videoSrc: "/videos/2.mp4",
    videoLabel: "02 · Enterprise DIA",
    pillBadge: "CORPORATE & ENTERPRISE CONNECTIVITY",
    pillIcon: <Server className="w-3.5 h-3.5 text-brand-orange" />,
    subtitle: "MISSION-CRITICAL BANDWIDTH WITH CONTRACTUAL SLA",
    rotatingKeyword: "1:1 Dedicated DIA",
    titleLight: "GUARANTEED 1:1",
    titleBold: "DEDICATED INTERNET",
    description:
      "Enterprise-class DIA delivering uncontended symmetrical throughput, static IPv4/IPv6 BGP subnets, and direct peering to major cloud exchanges for banks, hospitals, and software houses.",
    primaryButtonText: "EXPLORE DIA SOLUTIONS",
    primaryButtonHref: "/services",
    secondaryButtonText: "REQUEST FEASIBILITY",
    secondaryButtonHref: "/contact",
    stats: [
      { val: 500, prefix: "", suffix: "+", label: "Corporate Leased Lines" },
      { val: 99.99, decimals: 2, suffix: "%", label: "Optical Core Availability" },
      { val: 30, prefix: "< ", suffix: " min", label: "On-Site MTTR Dispatch" },
      { val: 0, suffix: "% Loss", label: "Zero Jitter Packet Flow" },
    ],
  },
  {
    id: "data-connectivity",
    videoSrc: "/videos/3.mp4",
    videoLabel: "03 · High-Speed Transport",
    pillBadge: "METRO ETHERNET & DARK FIBER",
    pillIcon: <Zap className="w-3.5 h-3.5 text-brand-orange" />,
    subtitle: "PRIVATE SECURE OPTICAL TRANSMISSION ACROSS LAHORE",
    rotatingKeyword: "100G Metro Backbone",
    titleLight: "HIGH-CAPACITY",
    titleBold: "DATA CONNECTIVITY",
    description:
      "Interconnect your corporate headquarters, multi-branch operations, campus sites, and disaster recovery data centers across Lahore with sub-millisecond private Layer-2 optical circuits.",
    primaryButtonText: "METRO ETHERNET SPECS",
    primaryButtonHref: "/services",
    secondaryButtonText: "CONTACT ENGINEERING",
    secondaryButtonHref: "/contact",
    stats: [
      { val: 1.2, decimals: 1, prefix: "< ", suffix: " ms", label: "Intra-City Metro Latency" },
      { val: 40, suffix: " Gbps", label: "Protected Ring Links" },
      { val: 50, prefix: "< ", suffix: " ms", label: "Auto Ring Failover" },
      { val: 100, suffix: "% Fiber", label: "Pure Underground Optical" },
    ],
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const totalSlides = SLIDES.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Guarantee active video playback across all modern browsers
  useEffect(() => {
    BANNER_VIDEOS.forEach((_, idx) => {
      const vid = videoRefs.current[idx];
      if (vid) {
        vid.muted = true;
        vid.defaultMuted = true;
        vid.playsInline = true;
        if (idx === currentSlide % BANNER_VIDEOS.length) {
          if (isPlayingVideo) {
            const playPromise = vid.play();
            if (playPromise !== undefined) {
              playPromise.catch((err) => {
                console.warn("Video play prevented by browser policy:", err);
              });
            }
          } else {
            vid.pause();
          }
        } else {
          vid.pause();
        }
      }
    });
  }, [currentSlide, isPlayingVideo]);

  // First interaction unlock (click, touch, scroll) for strict browser autoplay policies
  useEffect(() => {
    const unlockPlay = () => {
      const activeVid = videoRefs.current[currentSlide % BANNER_VIDEOS.length];
      if (activeVid && isPlayingVideo) {
        activeVid.muted = true;
        activeVid.play().catch(() => {});
      }
    };

    window.addEventListener("click", unlockPlay, { once: true });
    window.addEventListener("touchstart", unlockPlay, { once: true });
    window.addEventListener("scroll", unlockPlay, { once: true });

    return () => {
      window.removeEventListener("click", unlockPlay);
      window.removeEventListener("touchstart", unlockPlay);
      window.removeEventListener("scroll", unlockPlay);
    };
  }, [currentSlide, isPlayingVideo]);

  // Rotating kinetic words loop (like gcspvt.com)
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);

    return () => clearInterval(wordInterval);
  }, []);

  // Slide Auto-play timer (rotates every 7 seconds if not paused)
  useEffect(() => {
    if (isPaused) return;

    slideTimerRef.current = setTimeout(() => {
      nextSlide();
    }, 7000);

    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  // Video play/pause toggle
  const toggleVideoPlayback = () => {
    const activeVideo = videoRefs.current[currentSlide % BANNER_VIDEOS.length];
    if (activeVideo) {
      if (isPlayingVideo) {
        activeVideo.pause();
        setIsPlayingVideo(false);
      } else {
        activeVideo.muted = true;
        activeVideo.play().catch(() => {});
        setIsPlayingVideo(true);
      }
    }
  };

  const slide = SLIDES[currentSlide];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-20 sm:pt-28 lg:pt-32 lg:pb-24 overflow-hidden bg-black text-white transition-colors duration-300"
    >
      {/* ============================================================
          1. BACKGROUND VIDEO LAYER (Triple-Buffered Cross-Fade)
          ============================================================ */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {BANNER_VIDEOS.map((vid, idx) => {
          const isActive = idx === (currentSlide % BANNER_VIDEOS.length);
          return (
            <video
              key={vid.id}
              ref={(el) => {
                videoRefs.current[idx] = el;
                if (el) {
                  el.muted = true;
                  el.defaultMuted = true;
                  if (isActive && isPlayingVideo) {
                    el.play().catch(() => {});
                  }
                }
              }}
              src={vid.src}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={(e) => {
                const target = e.currentTarget;
                target.muted = true;
                if (isActive && isPlayingVideo) {
                  target.play().catch(() => {});
                }
              }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <source src={vid.src} type="video/mp4" />
            </video>
          );
        })}
      </div>

      {/* ============================================================
          2. CINEMATIC VIDEO OVERLAY (Carefully balanced for video clarity + crisp typography)
          ============================================================ */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-black/25 to-black/60 z-[1] pointer-events-none" />

      {/* Subtle Electric Orange Ambient Glows in corners */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-orange/20 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-400/10 rounded-full blur-[140px] pointer-events-none z-[1]" />

      {/* ============================================================
          3. MAIN HERO CONTENT CONTAINER (z-10, always in front)
          ============================================================ */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-7">
        
        {/* Top Floating Badge with Pulse */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-orange-400 text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-xl shadow-lg shadow-black/40 max-w-full">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping shrink-0" />
          <span className="truncate">{slide.pillBadge}</span>
        </div>

        {/* Dynamic Kinetic "WE POWER" Rotating Headline (Inspired by GCS) */}
        <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-xl sm:text-3xl lg:text-4xl font-extralight tracking-[0.2em] uppercase font-heading text-slate-300">
              WE POWER
            </span>
            <div className="relative h-9 sm:h-12 overflow-hidden flex items-center min-w-[240px] sm:min-w-[340px] justify-center sm:justify-start">
              {ROTATING_WORDS.map((word, idx) => (
                <span
                  key={word}
                  className={`absolute font-black tracking-tight text-xl sm:text-3xl lg:text-4xl uppercase font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orangeLight to-[#FFA26B] transition-all duration-500 ease-out whitespace-nowrap ${
                    idx === rotatingIndex
                      ? "opacity-100 translate-y-0 filter blur-0"
                      : "opacity-0 -translate-y-6 filter blur-sm pointer-events-none"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Main Cinematic Heading */}
          <div key={slide.id} className="space-y-1 animate-in fade-in zoom-in-95 duration-500">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-200 tracking-[0.18em] uppercase font-heading drop-shadow-md">
              {slide.titleLight}
            </h1>
            <h2 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight uppercase font-heading drop-shadow-2xl">
              {slide.titleBold.split(" ")[0]}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orangeLight to-[#FFA26B]">
                {slide.titleBold.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </div>
        </div>

        {/* 0.5s Continuous Speed Loop Badge */}
        <div className="flex justify-center pt-0.5">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-brand-orange/30 via-slate-900/60 to-brand-orange/30 border border-brand-orange/80 text-white shadow-xl shadow-brand-orange/20 backdrop-blur-md animate-speed-loop-half max-w-full">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orangeLight fill-brand-orangeLight animate-pulse shrink-0" />
            <span className="text-[11px] xs:text-xs sm:text-sm font-black tracking-[0.15em] sm:tracking-[0.25em] uppercase text-white font-heading drop-shadow-md truncate">
              GET THE SPEED YOU NEED
            </span>
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orangeLight fill-brand-orangeLight animate-pulse shrink-0" />
          </div>
        </div>

        {/* Description Text */}
        <p className="text-sm sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-sans px-2 sm:px-0 drop-shadow">
          {slide.description}
        </p>

        {/* Action Buttons: Electric Orange Primary + Metallic Silver Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-sm sm:max-w-none mx-auto">
          <Link
            href={slide.primaryButtonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-sm sm:text-base px-7 py-3.5 sm:px-9 sm:py-4 rounded-xl transition-all duration-200 shadow-xl shadow-brand-orange/35 hover:shadow-brand-orange/60 hover:-translate-y-0.5"
          >
            <span>{slide.primaryButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={slide.secondaryButtonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl border border-slate-700/80 transition-all duration-200 shadow-lg hover:-translate-y-0.5 backdrop-blur-md"
          >
            <span>{slide.secondaryButtonText}</span>
          </Link>
        </div>

        {/* Video Mode Bar & Video Switcher (GCS Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {BANNER_VIDEOS.map((vid, idx) => {
            const isActive = idx === (currentSlide % BANNER_VIDEOS.length);
            return (
              <button
                key={vid.id}
                onClick={() => goToSlide(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 backdrop-blur-md cursor-pointer ${
                  isActive
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-102 border border-brand-orange"
                    : "bg-slate-900/70 text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-500"
                }`}
              >
                <Video className="w-3 h-3 text-current" />
                <span>{vid.label}</span>
              </button>
            );
          })}

          {/* Pause / Play Toggle */}
          <button
            onClick={toggleVideoPlayback}
            aria-label={isPlayingVideo ? "Pause Background Video" : "Play Background Video"}
            className="px-2.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900/70 hover:bg-slate-800 text-slate-300 border border-slate-700/60 backdrop-blur-md flex items-center gap-1.5 cursor-pointer"
            title={isPlayingVideo ? "Pause Video" : "Play Video"}
          >
            {isPlayingVideo ? (
              <>
                <Pause className="w-3 h-3 text-orange-400" />
                <span className="hidden sm:inline text-[11px]">Pause Video</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-emerald-400" />
                <span className="hidden sm:inline text-[11px]">Play Video</span>
              </>
            )}
          </button>
        </div>

        {/* Real-time Animated Number Counters */}
        <div className="pt-6 sm:pt-8 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 border-t border-slate-700/60 text-center">
          {slide.stats.map((st, i) => (
            <div
              key={i}
              className={`p-2 sm:p-2.5 ${i > 0 ? "sm:border-l sm:border-slate-700/60" : ""}`}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-heading">
                <AnimatedCounter
                  from={0}
                  to={st.val}
                  decimals={st.decimals || 0}
                  prefix={st.prefix || ""}
                  suffix={st.suffix}
                  duration={1800}
                />
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-semibold mt-1">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================
          4. SLIDE & VIDEO NAVIGATION CONTROLS
          ============================================================ */}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide & Video"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-brand-orange text-white items-center justify-center border border-slate-700/80 shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide & Video"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-brand-orange text-white items-center justify-center border border-slate-700/80 shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Vertical Pagination Dots on the Right Side */}
      <div className="hidden lg:flex flex-col gap-3 absolute right-6 top-1/2 -translate-y-1/2 z-20">
        {SLIDES.map((s, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer ${
                isActive
                  ? "w-3.5 h-3.5 bg-brand-orange ring-4 ring-brand-orange/30 shadow-lg shadow-brand-orange/50"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white"
              }`}
            />
          );
        })}
      </div>

      {/* Horizontal Dots for Mobile / Tablet */}
      <div className="flex lg:hidden items-center justify-center gap-2 absolute bottom-4 inset-x-0 z-20">
        {SLIDES.map((s, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive ? "w-6 h-2 bg-brand-orange" : "w-2 h-2 bg-white/40 hover:bg-white"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
