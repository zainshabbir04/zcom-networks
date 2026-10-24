"use client";

import React, { useEffect, useRef } from "react";

interface NetworkLoopVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function NetworkLoopVideo({
  src,
  className = "",
  poster,
}: NetworkLoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure audio is permanently muted so all modern browsers permit uninterrupted autoplay
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const attemptPlay = () => {
      if (video && video.paused) {
        video.play().catch(() => {
          // Autoplay policy fallback
        });
      }
    };

    attemptPlay();

    // Re-trigger play on pause to ensure endless continuous playback without pauses
    const handlePause = () => {
      attemptPlay();
    };

    // Re-trigger play when browser tab becomes active again
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        attemptPlay();
      }
    };

    video.addEventListener("pause", handlePause);
    video.addEventListener("loadeddata", attemptPlay);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("loadeddata", attemptPlay);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden select-none bg-black"
      onContextMenu={(e) => e.preventDefault()}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        className={`pointer-events-none select-none w-full h-auto max-h-[640px] object-contain mx-auto ${className}`}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
