'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Home,
  Briefcase,
  Image as ImageIcon,
  DollarSign,
  Mail,
  Star,
  Menu,
  X,
  ChevronDown,
  Pen,
  TrendingUp,
  FileText,
  Edit3,
  Globe,
  BookMarked,
  Megaphone,
  Search,
  Video,
} from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { label: 'Book Cover Design', icon: BookOpen, href: '/services/book-cover' },
    { label: 'Marketing Service', icon: TrendingUp, href: '/services/market ing' },
    { label: 'Article Writing', icon: FileText, href: '/services/article-writing' },
    { label: 'Editing Services', icon: Edit3, href: '/services/editing' },
    { label: 'Ghostwriting', icon: Pen, href: '/services/ghostwriting' },
    { label: 'Web Copywriting', icon: Globe, href: '/services/web-copywriting' },
    { label: 'Magazine Writing', icon: BookMarked, href: '/services/magazine-writing' },
    { label: 'Press Release', icon: Megaphone, href: '/services/press-release' },
    { label: 'SEO Writing', icon: Search, href: '/services/seo-writing' },
    { label: 'Script Writing', icon: Video, href: '/services/script-writing' },
  ];

  const navLinks = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'Services', icon: Briefcase, href: '/services', hasDropdown: true },
    { label: 'About', icon: ImageIcon, href: '/about-us' },
    { label: 'Blog', icon: DollarSign, href: '/blog' },
    { label: 'Reviews', icon: Star, href: '/reviews' },
    { label: 'Contact', icon: Mail, href: '/contact-us' },
  ];

  return (
    <div className="w-full px-3 sm:px-4 lg:px-6 pt-4 sm:pt-6 pb-4 relative z-50 animate-fade-in">
      <nav className="relative w-full bg-black/80 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/10 shadow-xl overflow-visible transition-all duration-300 hover:border-white/20">
        {/* Subtle Animated Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent overflow-hidden">
          <div className="h-full w-1/3 bg-white/50 animate-shine" />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            {/* Logo - Animated */}
            <Link href="/" className="flex items-center gap-3 sm:gap-4 shrink-0 group">
              <div className="relative">
                {/* Glow on hover */}
                <div className="absolute -inset-2 bg-red-600/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Logo Container */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-600/50 bg-gradient-to-br from-red-900 to-red-700">
                  <div className="relative w-full h-full p-1.5 sm:p-2">
                    <Image
                      src="/Assets/Logo-Png-737x1024 (1).webp"
                      alt="TOP SHELF Logo"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
              </div>

              {/* Text with animation */}
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <span className="font-black text-lg sm:text-xl lg:text-2xl xl:text-3xl tracking-tight text-white transition-colors duration-300 group-hover:text-red-400">
                  TOP SHELF
                </span>
                <div className="relative overflow-hidden">
                  <span className="text-[8px] sm:text-[10px] lg:text-xs font-bold tracking-widest text-red-500 transition-colors duration-300 group-hover:text-red-400">
                    PREMIUM BOOKS
                  </span>
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-4">
              {navLinks.map((item) => {
                const Icon = item.icon;

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="relative px-3 xl:px-5 py-3 group cursor-pointer transition-colors hover:bg-white/5 rounded-xl">
                        <div className="relative flex items-center gap-2">
                          <Icon className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                          <span className="text-gray-300 group-hover:text-white font-bold text-sm xl:text-base transition-colors">
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-gray-400 group-hover:text-red-500 transition-all duration-200 ${isServicesOpen ? 'rotate-180' : ''
                              }`}
                          />
                        </div>
                      </div>

                      {/* Dropdown - Optimized */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-200 ${isServicesOpen
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                          }`}
                      >
                        <div className="p-2 space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
                          {services.map((service) => {
                            const ServiceIcon = service.icon;
                            return (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-red-900/20 transition-all duration-150">
                                  <ServiceIcon className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors flex-shrink-0" />
                                  <span className="font-semibold text-sm">{service.label}</span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link key={item.label} href={item.href}>
                    <div className="relative px-3 xl:px-5 py-3 group cursor-pointer transition-colors hover:bg-white/5 rounded-xl">
                      <div className="relative flex items-center gap-2">
                        <Icon className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                        <span className="text-gray-300 group-hover:text-white font-bold text-sm xl:text-base transition-colors">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button - Animated */}
            <Link href="/contact-us">
              <button className="hidden lg:block relative px-6 xl:px-10 py-3 xl:py-4 rounded-xl xl:rounded-2xl font-black text-white text-sm xl:text-base flex-shrink-0 bg-gradient-to-r from-red-600 to-red-700 shadow-lg hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden group">
                {/* Animated shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Get Started</span>
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2.5 text-white rounded-xl bg-red-600 hover:bg-red-700 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Optimized */}
        <div
          className={`lg:hidden border-t border-white/10 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-4 sm:px-6 py-6 space-y-2">
            {navLinks.map((item) => {
              const Icon = item.icon;

              if (item.hasDropdown) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="w-6 h-6 text-gray-400" />
                        <span className="font-bold text-lg">{item.label}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    {/* Mobile Services Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="pl-4 mt-2 space-y-1">
                        {services.map((service) => {
                          const ServiceIcon = service.icon;
                          return (
                            <Link
                              key={service.label}
                              href={service.href}
                              onClick={() => {
                                setIsOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              <div className="flex items-center gap-3 px-5 py-3 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                                <ServiceIcon className="w-5 h-5" />
                                <span className="font-semibold text-base">{service.label}</span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                  <div className="flex items-center gap-4 px-5 py-4 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                    <Icon className="w-6 h-6 text-gray-400" />
                    <span className="font-bold text-lg">{item.label}</span>
                  </div>
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link href="/contact-us" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-black rounded-xl shadow-lg text-lg hover:scale-[1.02] transition-transform">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #dc2626, #7f1d1d);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}