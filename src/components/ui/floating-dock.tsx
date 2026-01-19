'use client';

import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn('relative block md:hidden', className)}>
      <div className={cn(
        "absolute bottom-full mb-4 inset-x-0 flex flex-col gap-3 transition-all duration-500",
        open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
      )}>
        {items.map((item, idx) => (
          <Link
            href={item.href}
            key={item.title}
            className="group relative"
            style={{ transitionDelay: `${idx * 50}ms` }}
            onClick={() => setOpen(false)}
          >
            <div className="h-12 w-12 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-gray-100 text-[#800020] hover:bg-[#800020] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-90">
              <div className="h-6 w-6">{item.icon}</div>
            </div>
            <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-2xl bg-[#800020] text-white flex items-center justify-center shadow-2xl transition-transform active:scale-90"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    <div className={cn(
      'mx-auto hidden md:flex h-20 gap-4 items-center rounded-[2rem] bg-white/20 backdrop-blur-xl border border-white/30 px-6 shadow-2xl',
      className
    )}>
      {items.map((item) => (
        <IconContainer key={item.title} {...item} />
      ))}
    </div>
  );
};

function IconContainer({
  title,
  icon,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className="relative group">
      <div className="h-12 w-12 group-hover:h-16 group-hover:w-16 rounded-full bg-white shadow-lg flex items-center justify-center relative transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-[#800020] hover:text-white group-hover:-translate-y-2">
        <div className="h-6 w-6 group-hover:h-8 group-hover:w-8 transition-all duration-300">
          {icon}
        </div>

        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
          {title}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45" />
        </div>
      </div>
    </Link>
  );
}