"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type Theme = "light" | "dark";
export type ThemeMode = "auto" | "light" | "dark";

interface ThemeContextType {
  theme: Theme; // The active theme applied to DOM ("light" | "dark")
  mode: ThemeMode; // The user preference mode ("auto" | "light" | "dark")
  isAuto: boolean; // True when theme is automatically driven by day/night clock
  isDaytime: boolean; // True when current local time is between 6 AM and 7 PM
  toggleTheme: () => void; // Cycles: auto -> dark -> light -> auto
  setMode: (mode: ThemeMode) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Calculates whether current local time is Day (6:00 AM - 6:59 PM) or Night (7:00 PM - 5:59 AM)
export function getDayNightStatus(): { isDaytime: boolean; theme: Theme } {
  const hour = new Date().getHours();
  // Daytime: 06:00 to 18:59 (6 AM to 7 PM)
  // Nighttime: 19:00 to 05:59 (7 PM to 6 AM)
  const isDaytime = hour >= 6 && hour < 19;
  return {
    isDaytime,
    theme: isDaytime ? "light" : "dark",
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("auto");
  const [theme, setThemeState] = useState<Theme>("light");
  const [isDaytime, setIsDaytime] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  const applyThemeToDOM = useCallback((t: Theme) => {
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const resolveTheme = useCallback((targetMode: ThemeMode): Theme => {
    const dayNight = getDayNightStatus();
    setIsDaytime(dayNight.isDaytime);

    if (targetMode === "dark") return "dark";
    if (targetMode === "light") return "light";
    return dayNight.theme;
  }, []);

  useEffect(() => {
    setMounted(true);

    // Read stored user preference
    const storedMode = localStorage.getItem("zcom_theme_mode") as ThemeMode | null;
    const legacyTheme = localStorage.getItem("zcom_theme");

    let initialMode: ThemeMode = "auto";
    if (storedMode === "light" || storedMode === "dark" || storedMode === "auto") {
      initialMode = storedMode;
    } else if (legacyTheme === "light" || legacyTheme === "dark") {
      // Migrate legacy explicit theme
      initialMode = legacyTheme as ThemeMode;
    }

    setModeState(initialMode);
    const resolved = resolveTheme(initialMode);
    setThemeState(resolved);
    applyThemeToDOM(resolved);

    // Periodically re-check day/night status every 30 seconds
    const interval = setInterval(() => {
      const dayNight = getDayNightStatus();
      setIsDaytime(dayNight.isDaytime);

      setModeState((currentMode) => {
        if (currentMode === "auto") {
          const autoTheme = dayNight.theme;
          setThemeState(autoTheme);
          applyThemeToDOM(autoTheme);
        }
        return currentMode;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [applyThemeToDOM, resolveTheme]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    const resolved = resolveTheme(newMode);
    setThemeState(resolved);
    applyThemeToDOM(resolved);
    localStorage.setItem("zcom_theme_mode", newMode);
    localStorage.setItem("zcom_theme", resolved);
  };

  const setTheme = (newTheme: Theme) => {
    setMode(newTheme);
  };

  const toggleTheme = () => {
    // 3-way toggle cycle:
    // Auto (Day/Night) -> Dark -> Light -> Auto (Day/Night)
    let nextMode: ThemeMode;
    if (mode === "auto") {
      // If currently auto, switch to the opposite of current theme
      nextMode = theme === "light" ? "dark" : "light";
    } else if (mode === "dark") {
      nextMode = "light";
    } else {
      nextMode = "auto";
    }
    setMode(nextMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        isAuto: mode === "auto",
        isDaytime,
        toggleTheme,
        setMode,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
