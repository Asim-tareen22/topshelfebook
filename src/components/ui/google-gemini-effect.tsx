'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export const GoogleGeminiEffect = React.forwardRef<
  HTMLDivElement,
  {
    pathLengths: number[];
    className?: string;
  }
>(({ pathLengths, className }, ref) => {
  return (
    <div ref={ref} className={cn('relative w-full h-full pointer-events-none', className)}>
      <svg
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gemini-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--primary-dark)" stopOpacity="0.3" />
          </linearGradient>
          <filter id="gemini-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[
          "M 0,400 Q 300,200 600,150 T 1200,300",
          "M 0,450 Q 300,250 600,200 T 1200,350",
          "M 0,500 Q 300,300 600,250 T 1200,400",
          "M 0,550 Q 300,350 600,300 T 1200,450",
          "M 0,600 Q 300,400 600,350 T 1200,500"
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#gemini-gradient-1)"
            strokeWidth={3 - i * 0.5}
            fill="none"
            strokeLinecap="round"
            filter="url(#gemini-glow)"
            strokeDasharray="1500"
            style={{
              strokeDashoffset: 1500 - (pathLengths[i] || 0) * 1500,
              opacity: 0.8 - i * 0.1,
              transition: "stroke-dashoffset 0.8s cubic-bezier(0.2, 0, 0.2, 1)"
            }}
          />
        ))}

        {/* Animated nodes */}
        <circle
          cx="600"
          cy="150"
          r="8"
          fill="var(--primary)"
          filter="url(#gemini-glow)"
          className="animate-pulse"
        />
        <circle
          cx="1200"
          cy="300"
          r="6"
          fill="var(--primary-dark)"
          filter="url(#gemini-glow)"
          className="animate-pulse delay-500"
        />
      </svg>
    </div>
  );
});

GoogleGeminiEffect.displayName = 'GoogleGeminiEffect';