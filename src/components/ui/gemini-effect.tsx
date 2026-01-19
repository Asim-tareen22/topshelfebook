"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function GoogleGeminiEffect({
  pathLengths,
  className
}: {
  pathLengths: number[];
  className?: string;
}) {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-center pointer-events-none", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 800"
        className="absolute"
      >
        {[
          "M100,400 Q200,200 400,400 T700,400",
          "M150,400 Q250,250 400,400 T650,400",
          "M200,400 Q300,300 400,400 T600,400",
          "M250,400 Q325,350 400,400 T550,400",
          "M300,400 Q350,375 400,400 T500,400"
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeDasharray="1000"
            style={{
              strokeDashoffset: 1000 - (pathLengths[i] || 0) * 1000,
              transition: "stroke-dashoffset 0.5s ease-out"
            }}
          />
        ))}
      </svg>
    </div>
  );
}