"use client";

import React, { useEffect, useRef, useState } from "react";

export type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "fade";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  className?: string;
  threshold?: number;
  once?: boolean;
  as?: React.ElementType;
  style?: React.CSSProperties;
  id?: string;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 650,
  className = "",
  threshold = 0.12,
  once = true,
  as: Component = "div",
  style = {},
  id,
  ...rest
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale3d(1, 1, 1)";
    switch (variant) {
      case "fade-up":
        return "translate3d(0, 36px, 0)";
      case "fade-down":
        return "translate3d(0, -36px, 0)";
      case "fade-left":
        return "translate3d(-40px, 0, 0)";
      case "fade-right":
        return "translate3d(40px, 0, 0)";
      case "scale-in":
        return "scale3d(0.92, 0.92, 1)";
      case "fade":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  const dynamicStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: isVisible ? "auto" : "opacity, transform",
    ...style,
  };

  return (
    <Component
      ref={elementRef}
      id={id}
      style={dynamicStyle}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}

/**
 * StaggerContainer provides cascading entrance delays to its direct child elements
 */
interface StaggerContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  staggerMs?: number;
  initialDelay?: number;
  variant?: AnimationVariant;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export function StaggerContainer({
  children,
  staggerMs = 100,
  initialDelay = 0,
  variant = "fade-up",
  className = "",
  as: Component = "div",
  id,
  ...rest
}: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  const childArray = React.Children.toArray(children);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale3d(1, 1, 1)";
    switch (variant) {
      case "fade-up":
        return "translate3d(0, 30px, 0)";
      case "fade-down":
        return "translate3d(0, -30px, 0)";
      case "fade-left":
        return "translate3d(-30px, 0, 0)";
      case "fade-right":
        return "translate3d(30px, 0, 0)";
      case "scale-in":
        return "scale3d(0.92, 0.92, 1)";
      case "fade":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <Component ref={containerRef} id={id} className={className} {...rest}>
      {childArray.map((child, index) => {
        const itemDelay = initialDelay + index * staggerMs;
        const itemStyle: React.CSSProperties = {
          opacity: isVisible ? 1 : 0,
          transform: getTransform(),
          transition: `opacity 650ms cubic-bezier(0.16, 1, 0.3, 1) ${itemDelay}ms, transform 650ms cubic-bezier(0.16, 1, 0.3, 1) ${itemDelay}ms`,
          willChange: isVisible ? "auto" : "opacity, transform",
        };

        return (
          <div key={index} style={itemStyle} className="h-full">
            {child}
          </div>
        );
      })}
    </Component>
  );
}
