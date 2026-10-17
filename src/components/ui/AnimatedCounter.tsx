"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

interface AnimatedCounterProps {
  from?: number;
  to?: number;
  value?: string | number;
  duration?: number; // milliseconds
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  value,
  duration = 1800,
  decimals,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  // Parse target number, prefix, suffix, and decimals from props or `value`
  const parsed = useMemo(() => {
    if (to !== undefined) {
      return {
        isNumeric: true,
        target: to,
        prefix,
        suffix,
        decimals: decimals !== undefined ? decimals : 0,
        rawText: "",
      };
    }

    if (value !== undefined) {
      if (typeof value === "number") {
        return {
          isNumeric: true,
          target: value,
          prefix,
          suffix,
          decimals: decimals !== undefined ? decimals : 0,
          rawText: "",
        };
      }

      const match = value.match(/^([^0-9]*?)([\d,]+(?:\.\d+)?)(.*)$/);
      if (match) {
        const numStr = match[2].replace(/,/g, "");
        const targetVal = parseFloat(numStr);
        const hasDec = numStr.includes(".");
        const autoDecimals = hasDec ? numStr.split(".")[1].length : 0;

        return {
          isNumeric: true,
          target: isNaN(targetVal) ? 0 : targetVal,
          prefix: prefix || match[1],
          suffix: (suffix || "") + match[3],
          decimals: decimals !== undefined ? decimals : autoDecimals,
          rawText: "",
        };
      }

      return {
        isNumeric: false,
        target: 0,
        prefix: "",
        suffix: "",
        decimals: 0,
        rawText: value,
      };
    }

    return {
      isNumeric: true,
      target: 0,
      prefix,
      suffix,
      decimals: decimals !== undefined ? decimals : 0,
      rawText: "",
    };
  }, [to, value, prefix, suffix, decimals]);

  const [currentValue, setCurrentValue] = useState(from);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isVisible = useRef(false);
  const animFrameRef = useRef<number | null>(null);

  const startAnimation = (targetVal: number) => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    const startTime = performance.now();
    const startVal = from;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const val = startVal + (targetVal - startVal) * easeProgress;

      setCurrentValue(val);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setCurrentValue(targetVal);
        animFrameRef.current = null;
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          isVisible.current = true;
          if (parsed.isNumeric) {
            startAnimation(parsed.target);
          }
        } else {
          isVisible.current = false;
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [duration, from, parsed.isNumeric]);

  // When target changes and element is visible, re-animate
  useEffect(() => {
    if (isVisible.current && parsed.isNumeric) {
      startAnimation(parsed.target);
    }
  }, [parsed.target, parsed.isNumeric]);

  if (!parsed.isNumeric) {
    return <span className={className}>{parsed.rawText}</span>;
  }

  const formatted =
    parsed.decimals > 0
      ? currentValue.toFixed(parsed.decimals)
      : Math.round(currentValue).toLocaleString();

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {parsed.prefix}
      {formatted}
      {parsed.suffix}
    </span>
  );
}
