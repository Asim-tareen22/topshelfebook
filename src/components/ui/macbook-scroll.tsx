"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transforms based on scrollProgress
  const lidRotation = Math.max(-90, -90 + scrollProgress * 90);
  const lidTranslate = Math.min(0, -100 + scrollProgress * 100);
  const lidOpacity = Math.min(1, scrollProgress * 2);

  return (
    <div
      ref={containerRef}
      className="min-h-[150vh] flex flex-col items-center py-20 justify-start [perspective:1000px]"
    >
      <div className="sticky top-40 flex flex-col items-center w-full max-w-5xl mx-auto">
        <div
          className="text-center transition-all duration-500"
          style={{
            opacity: 1 - scrollProgress * 2,
            transform: `translateY(${scrollProgress * 50}px)`
          }}
        >
          {title || <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] mb-10">Experience the Future</h2>}
        </div>

        {/* MacBook Container */}
        <div className="relative w-full aspect-video md:aspect-[16/10] max-w-4xl transform scale-[0.6] md:scale-100 transition-transform duration-500">

          {/* Lid */}
          <div
            className="absolute inset-0 z-20 origin-bottom transition-all duration-100 ease-out"
            style={{
              transform: `rotateX(${lidRotation}deg)`,
              opacity: lidOpacity
            }}
          >
            <div className="absolute inset-0 bg-[#010101] rounded-2xl border-4 border-gray-800 shadow-2xl overflow-hidden p-2">
              <div className="w-full h-full bg-[#272729] rounded-lg relative overflow-hidden">
                <img
                  src={src || "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"}
                  alt="macbook content"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* Base */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gray-300 dark:bg-[#272729] rounded-b-2xl shadow-2xl z-10 border-t border-gray-400">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-black/20 rounded-full mt-1" />
          </div>

          {/* Keyboard Area (Simplified) */}
          <div className="absolute inset-x-4 bottom-10 h-32 bg-[#050505] rounded-xl z-0 p-4 border border-white/5">
            <div className="grid grid-cols-12 gap-1 h-full opacity-30">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="bg-gray-800 rounded-sm" />
              ))}
            </div>
          </div>

          {showGradient && (
            <div className="absolute -inset-20 bg-gradient-radial from-[var(--primary)]/10 to-transparent opacity-50 blur-3xl -z-10" />
          )}

          {badge && <div className="absolute -bottom-10 -right-10 animate-bounce">{badge}</div>}
        </div>
      </div>
    </div>
  );
};