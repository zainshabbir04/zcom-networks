"use client";

import React, { useState, useEffect, useRef } from "react";

const SLIDE_DURATION_SECONDS = 16; // Equal 16-second display duration for all clips
const SLIDE_DURATION_MS = SLIDE_DURATION_SECONDS * 1000;
const FADE_TRANSITION_MS = 700;

const BANNER_VIDEOS = [
  { id: "v1", src: "/videos/1.mp4", duration: SLIDE_DURATION_SECONDS },
  { id: "v2", src: "/videos/2.mp4", duration: SLIDE_DURATION_SECONDS },
  { id: "v3", src: "/videos/3.mp4", duration: SLIDE_DURATION_SECONDS },
  { id: "v4", src: "/videos/4.mp4", duration: SLIDE_DURATION_SECONDS },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const totalVideos = BANNER_VIDEOS.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalVideos);
  };

  // Synchronized 16-second timer across all clips with pre-cueing for gapless crossfade
  useEffect(() => {
    const activeIdx = currentSlide % totalVideos;
    const nextIdx = (activeIdx + 1) % totalVideos;

    const activeVid = videoRefs.current[activeIdx];
    if (activeVid) {
      activeVid.muted = true;
      activeVid.defaultMuted = true;
      activeVid.playsInline = true;
      if (activeVid.paused) {
        activeVid.currentTime = 0;
        activeVid.play().catch(() => {});
      }
    }

    // Pre-cue next video 700ms before 16s ends so both overlap during the fade
    const precueTimer = setTimeout(() => {
      const nextVid = videoRefs.current[nextIdx];
      if (nextVid) {
        nextVid.muted = true;
        nextVid.defaultMuted = true;
        nextVid.playsInline = true;
        nextVid.currentTime = 0;
        nextVid.play().catch(() => {});
      }
    }, SLIDE_DURATION_MS - FADE_TRANSITION_MS);

    // Advance to next clip at exactly 16 seconds
    const slideTimer = setTimeout(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);

    return () => {
      clearTimeout(precueTimer);
      clearTimeout(slideTimer);
    };
  }, [currentSlide, totalVideos]);

  // Clean up non-active videos after crossfade finishes
  useEffect(() => {
    const activeIdx = currentSlide % totalVideos;
    const cleanupTimer = setTimeout(() => {
      BANNER_VIDEOS.forEach((_, idx) => {
        if (idx !== activeIdx) {
          const vid = videoRefs.current[idx];
          if (vid && !vid.paused) {
            vid.pause();
            vid.currentTime = 0;
          }
        }
      });
    }, FADE_TRANSITION_MS + 50);

    return () => clearTimeout(cleanupTimer);
  }, [currentSlide, totalVideos]);

  // First interaction unlock for strict mobile & browser autoplay policies
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
              loop={true}
              muted
              playsInline
              preload="auto"
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
