"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface BannerContextValue {
  isVisible: boolean;
  reducedMotion: boolean;
}

const MinimalistBannerContext = createContext<BannerContextValue>({
  isVisible: false,
  reducedMotion: false,
});

export function useMinimalistBanner() {
  return useContext(MinimalistBannerContext);
}

export interface MinimalistBannerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * MinimalistBanner: Minimal, refined entrance animations inspired by Jitter "Minimalist Website"
 * Stagger: 100ms, Duration: 700ms, Easing: cubic-bezier(0.22, 1, 0.36, 1)
 */
export default function MinimalistBanner({
  children,
  className = "",
  as: Component = "section",
  ...rest
}: MinimalistBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const bannerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        setReducedMotion(true);
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (bannerRef.current) {
            observer.unobserve(bannerRef.current);
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px",
      }
    );

    const el = bannerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <MinimalistBannerContext.Provider value={{ isVisible, reducedMotion }}>
      <Component ref={bannerRef} className={className} {...rest}>
        {children}
      </Component>
    </MinimalistBannerContext.Provider>
  );
}

// -------------------------------------------------------------
// Sub-components with exact Jitter-inspired timing & easing
// -------------------------------------------------------------

interface MotionSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

/**
 * BannerImage: Slides in from the right with a soft fade
 */
export function BannerImage({
  children,
  className = "",
  delayMs = 0,
  style = {},
  ...rest
}: MotionSlotProps) {
  const { isVisible, reducedMotion } = useMinimalistBanner();

  const dynamicStyle: React.CSSProperties = reducedMotion
    ? style
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(30px, 0, 0)",
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
        ...style,
      };

  return (
    <div style={dynamicStyle} className={className} {...rest}>
      {children}
    </div>
  );
}

/**
 * BannerBadge: Breadcrumb / status indicator (fades in first with subtle upward motion)
 */
export function BannerBadge({
  children,
  className = "",
  delayMs = 0,
  style = {},
  ...rest
}: MotionSlotProps) {
  const { isVisible, reducedMotion } = useMinimalistBanner();

  const dynamicStyle: React.CSSProperties = reducedMotion
    ? style
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
        ...style,
      };

  return (
    <div style={dynamicStyle} className={className} {...rest}>
      {children}
    </div>
  );
}

/**
 * BannerHeadline: Fades in with a 30px upward slide first (delay: 0ms)
 */
export function BannerHeadline({
  children,
  className = "",
  delayMs = 0,
  style = {},
  ...rest
}: MotionSlotProps) {
  const { isVisible, reducedMotion } = useMinimalistBanner();

  const dynamicStyle: React.CSSProperties = reducedMotion
    ? style
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
        ...style,
      };

  return (
    <div style={dynamicStyle} className={className} {...rest}>
      {children}
    </div>
  );
}

/**
 * BannerSubtext: Fades in with a 30px upward slide (stagger 100ms after headline)
 */
export function BannerSubtext({
  children,
  className = "",
  delayMs = 100,
  style = {},
  ...rest
}: MotionSlotProps) {
  const { isVisible, reducedMotion } = useMinimalistBanner();

  const dynamicStyle: React.CSSProperties = reducedMotion
    ? style
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
        ...style,
      };

  return (
    <div style={dynamicStyle} className={className} {...rest}>
      {children}
    </div>
  );
}

/**
 * BannerActions: Fades in with a 30px upward slide (stagger 100ms after subtext, delay: 200ms)
 */
export function BannerActions({
  children,
  className = "",
  delayMs = 200,
  style = {},
  ...rest
}: MotionSlotProps) {
  const { isVisible, reducedMotion } = useMinimalistBanner();

  const dynamicStyle: React.CSSProperties = reducedMotion
    ? style
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
        ...style,
      };

  return (
    <div style={dynamicStyle} className={className} {...rest}>
      {children}
    </div>
  );
}
