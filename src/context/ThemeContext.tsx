"use client";

import React, { createContext, useContext, useEffect } from "react";

export type Theme = "light";
export type ThemeMode = "light";

interface ThemeContextType {
  theme: "light";
  mode: "light";
  isAuto: false;
  isDaytime: true;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  mode: "light",
  isAuto: false,
  isDaytime: true,
  toggleTheme: () => {},
  setMode: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("zcom_theme_mode");
    localStorage.removeItem("zcom_theme");
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: "light",
        mode: "light",
        isAuto: false,
        isDaytime: true,
        toggleTheme: () => {},
        setMode: () => {},
        setTheme: () => {},
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
