"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Pause,
  Video,
} from "lucide-react";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const BANNER_VIDEOS = [
  { id: "v1", src: "/videos/1.mp4", label: "01 · Metro Fiber Core", duration: 10 },
  { id: "v2", src: "/videos/2.mp4", label: "02 · Enterprise DIA", duration: 6 },
  { id: "v3", src: "/videos/3.mp4", label: "03 · High-Speed Transport", duration: 8 },
];

const STATS = [
  { val: 99.9, decimals: 1, suffix: "%", label: "Contractual SLA" },
  { val: 100, suffix: " Gbps", label: "Metro Backbone Ring" },
  { val: 1, prefix: "1:", suffix: " Sym", label: "Zero Throttle / No FUP" },
  { val: 24, suffix: "/7 NOC", label: "Gulberg-III Support" },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isTransitioningRef = useRef(false);

  const totalVideos = BANNER_VIDEOS.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalVideos);
    setCurrentProgress(0);
  };

  const goToSlide = (index: number) => {
    const targetVideo = videoRefs.current[index % totalVideos];
    if (targetVideo) {
      targetVideo.currentTime = 0;
      targetVideo.play().catch(() => {});
    }
    setCurrentSlide(index);
    setCurrentProgress(0);
  };

  // Active video controller: plays full video without skipping any second
  useEffect(() => {
    const activeIdx = currentSlide % totalVideos;

    BANNER_VIDEOS.forEach((_, idx) => {
      const vid = videoRefs.current[idx];
      if (!vid) return;

      vid.muted = true;
      vid.defaultMuted = true;
      vid.playsInline = true;

      if (idx === activeIdx) {
        if (isPlayingVideo) {
          if (vid.paused) {
            vid.currentTime = 0;
            const p = vid.play();
            if (p !== undefined) p.catch(() => {});
          }
        } else {
          vid.pause();
        }
      } else {
        const timeoutId = setTimeout(() => {
          if (idx !== currentSlide % totalVideos) {
            vid.pause();
            vid.currentTime = 0;
          }
        }, 700);
        return () => clearTimeout(timeoutId);
      }
    });
  }, [currentSlide, isPlayingVideo, totalVideos]);

  // First interaction unlock for strict browser autoplay policies
  useEffect(() => {
    const unlockPlay = () => {
      const activeVid = videoRefs.current[currentSlide % totalVideos];
      if (activeVid && isPlayingVideo && activeVid.paused) {
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
  }, [currentSlide, isPlayingVideo, totalVideos]);

  // Track live playback second-by-second and pre-cue next video seamlessly
  const handleVideoTimeUpdate = (idx: number, e: React.SyntheticEvent<HTMLVideoElement>) => {
    const activeIdx = currentSlide % totalVideos;
    if (idx !== activeIdx) return;
    const vid = e.currentTarget;
    if (vid.duration && !isNaN(vid.duration)) {
      const pct = Math.min(100, (vid.currentTime / vid.duration) * 100);
      setCurrentProgress(pct);

      // Pre-cue next video 0.5s before end so it is pre-buffered with 0ms delay
      const nextIdx = (activeIdx + 1) % totalVideos;
      const nextVid = videoRefs.current[nextIdx];
      if (nextVid && isPlayingVideo && vid.currentTime >= vid.duration - 0.5) {
        if (nextVid.paused) {
          nextVid.currentTime = 0;
          nextVid.play().catch(() => {});
        }
      }
    }
  };

  // Called when video completes 100% of its full duration (no cut off!)
  const handleVideoEnded = (idx: number) => {
    const activeIdx = currentSlide % totalVideos;
    if (idx !== activeIdx) return;
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    nextSlide();
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 800);
  };

  // Video play/pause toggle
  const toggleVideoPlayback = () => {
    const activeVideo = videoRefs.current[currentSlide % totalVideos];
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

  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-end pt-28 pb-14 sm:pb-16 overflow-hidden bg-black text-white transition-colors duration-300">
      {/* ============================================================
          1. BACKGROUND VIDEO LAYER (Clean & Crisp Full-Screen Playback)
          ============================================================ */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {BANNER_VIDEOS.map((vid, idx) => {
          const isActive = idx === (currentSlide % totalVideos);
          return (
            <video
              key={vid.id}
              ref={(el) => {
                videoRefs.current[idx] = el;
                if (el) {
                  el.muted = true;
                  el.defaultMuted = true;
                  el.playsInline = true;
                  if (isActive && isPlayingVideo && el.paused) {
                    el.play().catch(() => {});
                  }
                }
              }}
              src={vid.src}
              autoPlay
              loop={false}
              muted
              playsInline
              preload="auto"
              onTimeUpdate={(e) => handleVideoTimeUpdate(idx, e)}
              onEnded={() => handleVideoEnded(idx)}
              onLoadedData={(e) => {
                const target = e.currentTarget;
                target.muted = true;
                if (isActive && isPlayingVideo && target.paused) {
                  target.play().catch(() => {});
                }
              }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <source src={vid.src} type="video/mp4" />
            </video>
          );
        })}
      </div>

      {/* ============================================================
          2. MINIMAL VIGNETTE OVERLAY (Clear video visibility with subtle bottom gradient)
          ============================================================ */}
      <div className="absolute inset-0 bg-black/15 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-[1] pointer-events-none" />

      {/* ============================================================
          3. HERO BOTTOM CONTROLS & CALL TO ACTION (z-10)
          ============================================================ */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        {/* Action Buttons: Electric Orange Primary + Metallic Silver Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold text-sm sm:text-base px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl transition-all duration-200 shadow-xl shadow-brand-orange/40 hover:shadow-brand-orange/70 hover:-translate-y-0.5 backdrop-blur-md"
          >
            <span>EXPLORE SOLUTIONS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900/85 hover:bg-slate-800 text-slate-100 font-bold text-sm sm:text-base px-7 py-3.5 sm:px-9 sm:py-4 rounded-xl border border-slate-700/80 transition-all duration-200 shadow-lg hover:-translate-y-0.5 backdrop-blur-md"
          >
            <span>CHECK FEASIBILITY</span>
          </Link>
        </div>

        {/* Video Mode Bar & Video Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {BANNER_VIDEOS.map((vid, idx) => {
            const isActive = idx === (currentSlide % totalVideos);
            return (
              <button
                key={vid.id}
                onClick={() => goToSlide(idx)}
                className={`relative overflow-hidden px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 backdrop-blur-md cursor-pointer ${
                  isActive
                    ? "bg-slate-900/90 text-white shadow-lg shadow-brand-orange/30 border border-brand-orange ring-1 ring-brand-orange/50"
                    : "bg-slate-900/70 text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-500"
                }`}
              >
                {/* Live continuous progress bar fill (0% to 100%) */}
                {isActive && (
                  <span
                    className="absolute inset-y-0 left-0 bg-brand-orange/35 transition-[width] duration-150 ease-linear pointer-events-none"
                    style={{ width: `${currentProgress}%` }}
                  />
                )}
                <Video className={`w-3 h-3 relative z-10 ${isActive ? "text-brand-orange" : "text-current"}`} />
                <span className="relative z-10">{vid.label}</span>
                <span className="relative z-10 text-[10px] opacity-75 font-mono px-1 py-0.5 rounded bg-black/40">
                  {vid.duration}s
                </span>
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
        <div className="pt-4 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 border-t border-slate-700/40 text-center">
          {STATS.map((st, i) => (
            <div
              key={i}
              className={`p-2 sm:p-2.5 ${i > 0 ? "sm:border-l sm:border-slate-700/40" : ""}`}
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
    </section>
  );
}
