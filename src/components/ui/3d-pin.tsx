"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function PinContainer({
  title,
  href,
  children,
  className,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative group/pin z-50 cursor-pointer", className)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative transition-transform duration-500 group-hover/pin:scale-[1.02] active:scale-95"
      >
        <div className="relative h-80 w-72 overflow-hidden rounded-3xl border border-white/20 bg-black/5 backdrop-blur-md p-6 shadow-2xl transition-all duration-500 group-hover/pin:shadow-[var(--primary)]/20 group-hover/pin:border-[var(--primary)]/30">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)]/80 via-[var(--primary)]/90 to-[var(--primary-dark)] opacity-40 group-hover/pin:opacity-70 transition-opacity duration-500" />

          <div className="relative z-10 h-full w-full flex flex-col justify-between">
            {children}

            {/* Title floating over */}
            <div className="absolute -bottom-2 -left-2 right-0 p-4 transition-all duration-500 group-hover/pin:translate-y-0 translate-y-2 opacity-0 group-hover/pin:opacity-100">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold border border-white/20">
                {title}
              </span>
            </div>
          </div>
        </div>

        {/* 3D Perspective Effect on Hover */}
        <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl bg-[var(--primary)] opacity-0 group-hover/pin:opacity-20 transition-opacity duration-500" />
      </a>

      {/* Floating Indicator */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover/pin:opacity-100 group-hover/pin:-bottom-10 pointer-events-none">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center text-[var(--primary)] animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>
          <div className="h-20 w-[1px] bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </div>
  );
}