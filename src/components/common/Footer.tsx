"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Heart,
  ArrowUp,
  Award,
  Users,
  TrendingUp,
  Check,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Story", href: "/about-us" },
      { label: "Careers", href: "/contact-us" },
      { label: "Press Kit", href: "/blog" },
      { label: "Partners", href: "/contact-us" },
    ],
    services: [
      { label: "Ghostwriting", href: "/services/ghostwriting" },
      { label: "Book Editing", href: "/services/editing" },
      { label: "Publishing", href: "/services" },
      { label: "Marketing", href: "/services/marketing" },
      { label: "Distribution", href: "/services" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/blog" },
      { label: "FAQs", href: "/#faqs" },
      { label: "Support", href: "/contact-us" },
      { label: "Contact", href: "/contact-us" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Refund Policy", href: "#refund" },
      { label: "Disclaimer", href: "#disclaimer" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ];

  const stats = [
    { icon: BookOpen, value: "500+", label: "Books Published" },
    { icon: Users, value: "1000+", label: "Happy Authors" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

  return (
    <footer className="relative bg-[var(--background)]">
      {/* Simple Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary-glow),transparent_50%)] opacity-20" />
      </div>

      {/* Stats Section */}
      <div className="relative border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20">
                  <stat.icon className="w-8 h-8 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-4xl font-black bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent tracking-tighter">
                    {stat.value}
                  </h4>
                  <p className="text-gray-500 text-xs font-black uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-[var(--foreground)] tracking-tight">
                  TOP SHELF
                </h3>
                <p className="text-[10px] text-[var(--primary)] font-black tracking-widest uppercase">
                  PREMIUM BOOKS
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-base font-medium">
              Transform your ideas into bestselling books with our world-class
              ghostwriting, editing, and publishing services trusted by authors
              worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  text: "contact@topshelf.com",
                  href: "mailto:contact@topshelf.com",
                },
                {
                  icon: Phone,
                  text: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                },
                { icon: MapPin, text: "New York, NY 10001, USA", href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 text-gray-400 hover:text-[var(--primary)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--foreground)]/5 border border-[var(--border)] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-tight">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="text-[var(--foreground)] font-black text-xs sm:text-sm mb-6 uppercase tracking-widest relative inline-block">
                {title}
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full" />
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-[var(--primary)] transition-colors text-sm font-bold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="backdrop-blur-sm bg-[var(--foreground)]/5 border border-[var(--border)] p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 border border-[var(--primary)]/40 mb-4">
                  <span className="text-[var(--primary)] font-black text-xs tracking-widest uppercase">
                    JOIN OUR COMMUNITY
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--foreground)] leading-tight tracking-tighter">
                  Get{" "}
                  <span className="bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] bg-clip-text text-transparent">
                    Exclusive Updates
                  </span>
                </h3>
                <p className="text-gray-500 text-lg font-medium">
                  Subscribe to receive publishing tips, author success stories,
                  and exclusive offers
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
                <div className="relative flex items-center gap-2 bg-[var(--foreground)]/5 border-2 border-[var(--border)] rounded-2xl p-2 focus-within:border-[var(--primary)]/50 transition-colors">
                  <Mail className="w-5 h-5 text-gray-400 ml-4" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-4 py-4 bg-transparent text-[var(--foreground)] placeholder:text-gray-500 placeholder:font-bold focus:outline-none font-bold"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] text-white font-black rounded-xl flex items-center gap-2 shadow-lg hover:opacity-90 transition-opacity"
                  >
                    <span>
                      {isSubscribed ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </span>
                    <span className="hidden sm:inline uppercase tracking-widest">
                      {isSubscribed ? "Subscribed!" : "Subscribe"}
                    </span>
                  </button>
                </div>
              </form>

              {isSubscribed && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 text-xs font-black uppercase tracking-widest">
                  <Check className="w-4 h-4" />
                  Thank you for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link
                key={index}
                href={social.href}
                className={`w-14 h-14 rounded-2xl bg-[var(--foreground)]/5 border border-[var(--border)] flex items-center justify-center text-gray-500 hover:text-white ${social.color} transition-colors`}
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </Link>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-xs font-black flex items-center gap-2 uppercase tracking-widest">
              © 2024 <span className="text-[var(--foreground)]">TOP SHELF</span>
              . Crafted with
              <Heart className="w-4 h-4 text-[var(--primary)] fill-current" />
              by our team.
            </p>

            <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
              {["Privacy", "Terms", "Cookies", "Sitemap"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-500 hover:text-[var(--primary)] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] text-white rounded-2xl flex items-center justify-center shadow-lg z-50 hover:opacity-90 transition-opacity"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Simple Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-30" />
    </footer>
  );
}
