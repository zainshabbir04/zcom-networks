"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Sparkles, Clock } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, mode, isAuto, isDaytime, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 sm:w-auto sm:px-3 sm:py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  // Label text and tooltip based on mode
  let tooltip = "";
  let badgeLabel = "";

  if (isAuto) {
    tooltip = isDaytime
      ? "Auto Day/Night Mode: Daytime Light (6 AM – 7 PM). Click to switch to Dark Mode."
      : "Auto Day/Night Mode: Nighttime Dark (7 PM – 6 AM). Click to switch to Light Mode.";
    badgeLabel = isDaytime ? "Auto · Day" : "Auto · Night";
  } else if (mode === "dark") {
    tooltip = "Manual Dark Mode. Click to switch to Light Mode.";
    badgeLabel = "Dark";
  } else {
    tooltip = "Manual Light Mode. Click to switch to Auto Day/Night Mode.";
    badgeLabel = "Light";
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={tooltip}
      title={tooltip}
      className={`group relative inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold transition-all duration-200 select-none ${
        isDark
          ? "bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-slate-700/80 shadow-inner"
          : "bg-orange-50/90 hover:bg-orange-100 text-brand-orange border border-orange-200/90 shadow-sm"
      } ${className}`}
    >
      {/* Icon with subtle spin animation on theme change */}
      <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-amber-300 fill-amber-300/30 transition-transform duration-300 group-hover:-rotate-12" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-brand-orange fill-amber-400/40 transition-transform duration-300 group-hover:rotate-45" />
        )}
      </div>

      {/* Mode Badge Indicator */}
      <span className="hidden xl:inline-flex items-center gap-1 text-[11px] font-bold tracking-tight">
        {isAuto && (
          <span
            className={`w-1.5 h-1.5 rounded-full animate-pulse ${
              isDaytime ? "bg-amber-500" : "bg-indigo-400"
            }`}
          />
        )}
        <span>{badgeLabel}</span>
      </span>

      {/* For mobile / small screens if showLabel is true */}
      {showLabel && (
        <span className="xl:hidden text-xs font-semibold pr-1">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
}
