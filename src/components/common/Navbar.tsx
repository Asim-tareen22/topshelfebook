"use client";

import { useState, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
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
  LucideIcon,
} from "lucide-react";

// Define types
interface Service {
  label: string;
  icon: LucideIcon;
  href: string;
}

interface NavLink {
  label: string;
  icon: LucideIcon;
  href: string;
  hasDropdown?: boolean;
}

// Static data outside component to prevent recreation
const services: Service[] = [
  { label: "Book Cover Design", icon: BookOpen, href: "/services/book-cover" },
  { label: "Marketing Service", icon: TrendingUp, href: "/services/marketing" },
  {
    label: "Article Writing",
    icon: FileText,
    href: "/services/article-writing",
  },
  { label: "Editing Services", icon: Edit3, href: "/services/editing" },
  { label: "Ghostwriting", icon: Pen, href: "/services/ghostwriting" },
  { label: "Web Copywriting", icon: Globe, href: "/services/web-copywriting" },
  {
    label: "Magazine Writing",
    icon: BookMarked,
    href: "/services/magazine-writing",
  },
  { label: "Press Release", icon: Megaphone, href: "/services/press-release" },
  { label: "SEO Writing", icon: Search, href: "/services/seo-writing" },
  { label: "Script Writing", icon: Video, href: "/services/script-writing" },
];

const navLinks: NavLink[] = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Services", icon: Briefcase, href: "/services", hasDropdown: true },
  { label: "About", icon: ImageIcon, href: "/about-us" },
  { label: "Blog", icon: DollarSign, href: "/blog" },
  { label: "Reviews", icon: Star, href: "/reviews" },
  { label: "Contact", icon: Mail, href: "/contact-us" },
];

// Memoized Service Link Component
const ServiceLink = memo(function ServiceLink({
  service,
  onClick,
}: {
  service: Service;
  onClick: () => void;
}) {
  const ServiceIcon = service.icon;
  return (
    <Link href={service.href} onClick={onClick}>
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-red-900/30 transition-colors duration-150">
        <ServiceIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <span className="font-semibold text-sm">{service.label}</span>
      </div>
    </Link>
  );
});

// Memoized Nav Link Component
const NavItem = memo(function NavItem({
  item,
  isServicesOpen,
  onServicesEnter,
  onServicesLeave,
  onServicesClose,
}: {
  item: NavLink;
  isServicesOpen: boolean;
  onServicesEnter: () => void;
  onServicesLeave: () => void;
  onServicesClose: () => void;
}) {
  const Icon = item.icon;

  if (item.hasDropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={onServicesEnter}
        onMouseLeave={onServicesLeave}
      >
        <div className="px-3 xl:px-5 py-3 cursor-pointer hover:bg-white/5 rounded-xl transition-colors duration-150">
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400" />
            <span className="text-gray-300 hover:text-white font-bold text-sm xl:text-base">
              {item.label}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                isServicesOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {/* Dropdown */}
        <div
          className={`absolute top-full left-0 mt-2 w-72 bg-gray-900/98 rounded-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-200 ${
            isServicesOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }`}
        >
          <div className="p-2 space-y-0.5 max-h-[400px] overflow-y-auto">
            {services.map((service) => (
              <ServiceLink
                key={service.label}
                service={service}
                onClick={onServicesClose}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={item.href}>
      <div className="px-3 xl:px-5 py-3 cursor-pointer hover:bg-white/5 rounded-xl transition-colors duration-150">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400" />
          <span className="text-gray-300 hover:text-white font-bold text-sm xl:text-base transition-colors duration-150">
            {item.label}
          </span>
        </div>
      </div>
    </Link>
  );
});

// Memoized Mobile Nav Item
const MobileNavItem = memo(function MobileNavItem({
  item,
  isServicesOpen,
  onToggleServices,
  onClose,
}: {
  item: NavLink;
  isServicesOpen: boolean;
  onToggleServices: () => void;
  onClose: () => void;
}) {
  const Icon = item.icon;

  if (item.hasDropdown) {
    return (
      <div>
        <button
          onClick={onToggleServices}
          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors duration-150"
        >
          <div className="flex items-center gap-4">
            <Icon className="w-6 h-6 text-gray-400" />
            <span className="font-bold text-lg">{item.label}</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isServicesOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Mobile Services Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isServicesOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="pl-4 mt-2 space-y-1">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Link key={service.label} href={service.href} onClick={onClose}>
                  <div className="flex items-center gap-3 px-5 py-3 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors duration-150">
                    <ServiceIcon className="w-5 h-5" />
                    <span className="font-semibold text-base">
                      {service.label}
                    </span>
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
    <Link href={item.href} onClick={onClose}>
      <div className="flex items-center gap-4 px-5 py-4 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors duration-150">
        <Icon className="w-6 h-6 text-gray-400" />
        <span className="font-bold text-lg">{item.label}</span>
      </div>
    </Link>
  );
});

// Main Navbar Component
export const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Memoized callbacks
  const handleToggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleServicesEnter = useCallback(() => {
    setIsServicesOpen(true);
  }, []);

  const handleServicesLeave = useCallback(() => {
    setIsServicesOpen(false);
  }, []);

  const handleServicesClose = useCallback(() => {
    setIsServicesOpen(false);
  }, []);

  const handleToggleServices = useCallback(() => {
    setIsServicesOpen((prev) => !prev);
  }, []);

  const handleCloseAll = useCallback(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, []);

  return (
    <div className="w-full px-3 sm:px-4 lg:px-6 pt-4 sm:pt-6 pb-4 relative z-50">
      <nav className="relative w-full bg-black/90 rounded-2xl lg:rounded-3xl border border-white/10 shadow-xl overflow-visible">
        {/* Simple Top Border - No animation */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

        <div className="relative px-4 sm:px-6 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            {/* Logo - Simplified */}
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-4 shrink-0 group"
            >
              {/* Logo Container - No glow effect */}
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-red-900 to-red-700 group-hover:scale-105 transition-transform duration-200">
                <div className="relative w-full h-full p-1.5 sm:p-2">
                  <Image
                    src="/Assets/Logo-Png-737x1024 (1).webp"
                    alt="TOP SHELF Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="64px"
                  />
                </div>
              </div>

              {/* Text - Simplified hover */}
              <div className="group-hover:translate-x-0.5 transition-transform duration-200">
                <span className="font-black text-lg sm:text-xl lg:text-2xl xl:text-3xl tracking-tight text-white group-hover:text-red-400 transition-colors duration-200">
                  TOP SHELF
                </span>
                <div>
                  <span className="text-[8px] sm:text-[10px] lg:text-xs font-bold tracking-widest text-red-500">
                    PREMIUM BOOKS
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((item) => (
                <NavItem
                  key={item.label}
                  item={item}
                  isServicesOpen={isServicesOpen}
                  onServicesEnter={handleServicesEnter}
                  onServicesLeave={handleServicesLeave}
                  onServicesClose={handleServicesClose}
                />
              ))}
            </div>

            {/* CTA Button - Simplified */}
            <Link href="/contact-us" className="hidden lg:block">
              <button className="px-6 xl:px-10 py-3 xl:py-4 rounded-xl xl:rounded-2xl font-black text-white text-sm xl:text-base bg-gradient-to-r from-red-600 to-red-700 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200">
                Get Started
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={handleToggleMenu}
              className="lg:hidden p-2.5 text-white rounded-xl bg-red-600 hover:bg-red-700 transition-colors duration-150"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Optimized */}
        <div
          className={`lg:hidden border-t border-white/10 overflow-hidden transition-all duration-200 ${
            isOpen ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <div className="px-4 sm:px-6 py-6 space-y-2">
            {navLinks.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                isServicesOpen={isServicesOpen}
                onToggleServices={handleToggleServices}
                onClose={handleCloseAll}
              />
            ))}

            {/* Mobile CTA */}
            <Link href="/contact-us" onClick={handleCloseAll}>
              <button className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-black rounded-xl shadow-lg text-lg hover:scale-[1.01] active:scale-[0.99] transition-transform duration-150">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
});
