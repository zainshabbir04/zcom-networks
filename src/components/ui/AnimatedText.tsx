"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * AnimatedHeading: Words reveal sequentially with an energetic fade-up
 */
interface AnimatedHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  delayMs?: number;
  wordStaggerMs?: number;
}

export function AnimatedHeading({
  text,
  as: Component = "h2",
  className = "",
  highlightWords = [],
  highlightClassName = "text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-500 to-amber-400 font-extrabold",
  delayMs = 100,
  wordStaggerMs = 40,
}: AnimatedHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (headingRef.current) {
            observer.unobserve(headingRef.current);
          }
        }
      },
      { threshold: 0.15 }
    );

    const el = headingRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const words = text.split(" ");

  return (
    <Component
      ref={headingRef as any}
      className={`inline-block flex-wrap items-baseline gap-x-2 ${className}`}
    >
      {words.map((word, idx) => {
        const isHighlight = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        );

        const wordDelay = delayMs + idx * wordStaggerMs;

        return (
          <span
            key={idx}
            className={`inline-block transition-all duration-500 ease-out mr-1.5 ${
              isHighlight ? highlightClassName : ""
            }`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 14px, 0)",
              transitionDelay: `${wordDelay}ms`,
            }}
          >
            {word}
          </span>
        );
      })}
    </Component>
  );
}

/**
 * TextRotator: Cycles through an array of phrases with a smooth slide-and-fade animation
 */
interface TextRotatorProps {
  phrases: string[];
  intervalMs?: number;
  className?: string;
}

export function TextRotator({
  phrases,
  intervalMs = 3200,
  className = "text-brand-orange font-extrabold",
}: TextRotatorProps) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (phrases.length <= 1) return;

    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setAnimating(false);
      }, 350); // half transition
    }, intervalMs);

    return () => clearInterval(timer);
  }, [phrases.length, intervalMs]);

  return (
    <span
      className={`inline-block transition-all duration-350 ease-in-out ${className} ${
        animating
          ? "opacity-0 -translate-y-2 scale-95"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      {phrases[index]}
    </span>
  );
}

/**
 * ShimmerBadge: Pill badge with an animated gradient pulse and light shimmer
 */
interface ShimmerBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  theme?: "orange" | "silver";
}

export function ShimmerBadge({
  children,
  icon,
  className = "",
  theme = "orange",
}: ShimmerBadgeProps) {
  const themeClasses =
    theme === "orange"
      ? "bg-brand-orange/10 border-brand-orange/30 text-brand-orange hover:border-brand-orange/60"
      : "bg-white/10 border-white/20 text-slate-200 hover:border-white/40";

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md transition-all duration-300 shadow-sm hover:scale-105 ${themeClasses} ${className}`}
    >
      {icon && <span className="animate-pulse">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </span>
  );
}
