"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal" | "both";
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  wheelMultiplier?: number;
  infinite?: boolean;
  autoResize?: boolean;
  lerp?: number;
}

const defaultOptions: LenisOptions = {
  duration: 1.8, // Increased for smoother feel
  easing: (t: number) => {
    // Smoother easing curve - cubic bezier approximation
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  },
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  smoothTouch: false,
  touchMultiplier: 1.5, // Reduced for smoother touch
  wheelMultiplier: 0.8, // Reduced for smoother wheel
  infinite: false,
  autoResize: true,
  lerp: 0.075, // Lower = smoother (0.1 is default, try 0.05-0.08)
};

export function LenisScroll({ options }: { options?: LenisOptions } = {}) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      ...defaultOptions,
      ...options,
    });

    lenisRef.current = lenis;

    // Smoother RAF loop using performance.now for consistency
    let lastTime = performance.now();

    const raf = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Cap delta to prevent jumps after tab switching
      const cappedDelta = Math.min(deltaTime, 100);
      lenis.raf(time);

      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    // Handle visibility change for smoother resume
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        lastTime = performance.now();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return null;
}
