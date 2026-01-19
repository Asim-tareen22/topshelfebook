'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'maroon' | 'glass';
}

export function Card({ children, className, hover = false, variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-[var(--background)] border-[var(--border)] text-[var(--foreground)]',
    maroon: 'bg-white border-red-900/10 text-gray-900',
    glass: 'bg-white/5 backdrop-blur-md border-white/10 text-white'
  };

  return (
    <div
      className={cn(
        'p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden group',
        variants[variant],
        hover && 'hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--primary)]/30 hover:-translate-y-2',
        className
      )}
    >
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--primary)]/5 to-transparent -mr-16 -mt-16 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}