'use client';

import React from 'react';

export function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div className="relative inline-block group">
      <div className="cursor-help">
        {children}
      </div>
      <div className="absolute z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 w-64 p-4 mt-3 text-sm text-white bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl left-1/2 -translate-x-1/2 pointer-events-none border border-white/20 text-center">
        {/* Content */}
        <div className="relative z-10">{content}</div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent rounded-2xl -z-10" />

        {/* Arrow */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 rotate-45 border-t border-l border-white/20" />
      </div>
    </div>
  );
}