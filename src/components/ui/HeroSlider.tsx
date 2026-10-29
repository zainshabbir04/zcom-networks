"use client";

import React, { useState, useEffect, useRef } from "react";

const BANNER_VIDEOS = [
  { id: "v1", src: "/videos/1.mp4", duration: 10 },
  { id: "v2", src: "/videos/2.mp4", duration: 6 },
  { id: "v3", src: "/videos/3.mp4", duration: 4 },
  { id: "v4", src: "/videos/4.mp4", duration: 8 },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isTransitioningRef = useRef(false);

  const totalVideos = BANNER_VIDEOS.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalVideos);
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
        if (vid.paused) {
          vid.currentTime = 0;
          const p = vid.play();
          if (p !== undefined) p.catch(() => {});
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
  }, [currentSlide, totalVideos]);

  // First interaction unlock for strict browser autoplay policies
  useEffect(() => {
    const unlockPlay = () => {
      const activeVid = videoRefs.current[currentSlide % totalVideos];
      if (activeVid && activeVid.paused) {
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
  }, [currentSlide, totalVideos]);

  // Pre-cue next video 0.5s before active video ends for 100% gapless dissolve
  const handleVideoTimeUpdate = (idx: number, e: React.SyntheticEvent<HTMLVideoElement>) => {
    const activeIdx = currentSlide % totalVideos;
    if (idx !== activeIdx) return;
    const vid = e.currentTarget;
    if (vid.duration && !isNaN(vid.duration)) {
      const nextIdx = (activeIdx + 1) % totalVideos;
      const nextVid = videoRefs.current[nextIdx];
      if (nextVid && vid.currentTime >= vid.duration - 0.5) {
        if (nextVid.paused) {
          nextVid.currentTime = 0;
          nextVid.play().catch(() => {});
        }
      }
    }
  };

  // Called when video completes 100% of its full duration (no seconds skipped!)
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

  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-black">
      {/* ============================================================
          1. BACKGROUND VIDEO LAYER (Pure Full-Screen Video Banner - 100% Viewport Fit)
          ============================================================ */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
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
                  if (isActive && el.paused) {
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
                if (isActive && target.paused) {
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
    </section>
  );
}
