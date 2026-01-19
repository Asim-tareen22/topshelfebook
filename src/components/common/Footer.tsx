'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
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
  Sparkles,
  Award,
  Users,
  TrendingUp,
  Check
} from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Story', href: '/about-us' },
      { label: 'Careers', href: '/contact-us' },
      { label: 'Press Kit', href: '/blog' },
      { label: 'Partners', href: '/contact-us' },
    ],
    services: [
      { label: 'Ghostwriting', href: '/services/ghostwriting' },
      { label: 'Book Editing', href: '/services/editing' },
      { label: 'Publishing', href: '/services' },
      { label: 'Marketing', href: '/services/marketing' },
      { label: 'Distribution', href: '/services' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/blog' },
      { label: 'FAQs', href: '/#faqs' },
      { label: 'Support', href: '/contact-us' },
      { label: 'Contact', href: '/contact-us' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Refund Policy', href: '#refund' },
      { label: 'Disclaimer', href: '#disclaimer' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'from-blue-600 to-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'from-sky-600 to-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'from-pink-600 to-purple-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'from-blue-700 to-blue-600' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'from-red-600 to-red-500' },
  ];

  const stats = [
    { icon: BookOpen, value: '500+', label: 'Books Published' },
    { icon: Users, value: '1000+', label: 'Happy Authors' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
  ];

  return (
    <footer ref={footerRef} className="relative bg-[var(--background)] overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary-glow),transparent_50%)] opacity-30" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-3xl animate-blob-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 rounded-full blur-3xl animate-scale-pulse" />
      </div>

      {/* Stats Section */}
      <div
        className={`relative border-b border-[var(--border)] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative group transform transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 backdrop-blur-sm relative overflow-hidden group-hover:rotate-12 transition-transform duration-500">
                    <stat.icon className="w-8 h-8 text-[var(--primary)] relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 blur-xl animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-4xl font-black bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent tracking-tighter">
                      {stat.value}
                    </h4>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

          {/* Brand Section - Larger */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl opacity-20 blur-lg animate-spin-slow" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                  <BookOpen className="w-8 h-8 text-white relative z-10 animate-scale-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-shine" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-[var(--foreground)] tracking-tight">TOP SHELF</h3>
                <p className="text-[10px] text-[var(--primary)] font-black tracking-widest uppercase">PREMIUM BOOKS</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-base font-medium">
              Transform your ideas into bestselling books with our world-class ghostwriting, editing, and publishing services trusted by authors worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'contact@topshelf.com', href: 'mailto:contact@topshelf.com' },
                { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: MapPin, text: 'New York, NY 10001, USA', href: '#' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-4 text-gray-400 hover:text-[var(--primary)] transition-all cursor-pointer group transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--foreground)]/5 border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--primary)]/10 group-hover:border-[var(--primary)]/30 transition-all">
                    <item.icon className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-tight">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <div
              key={title}
              className={`lg:col-span-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${sectionIndex * 100 + 300}ms` }}
            >
              <h4 className="text-[var(--foreground)] font-black text-xs sm:text-sm mb-6 uppercase tracking-widest relative inline-block">
                {title}
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full" />
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-[var(--primary)] transition-all text-sm font-bold flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[var(--primary)] transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div
          className={`relative rounded-3xl overflow-hidden mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 via-[var(--secondary)]/10 to-[var(--primary)]/10 opacity-50 animate-glow" />

          <div className="relative backdrop-blur-xl bg-white/5 border border-[var(--border)] p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 border border-[var(--primary)]/40 mb-4 animate-bounce-slow">
                  <Sparkles className="w-5 h-5 text-[var(--primary)] animate-spin-slow" />
                  <span className="text-[var(--primary)] font-black text-xs tracking-widest uppercase">JOIN OUR COMMUNITY</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--foreground)] leading-tight tracking-tighter">
                  Get{' '}
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] bg-clip-text text-transparent">
                      Exclusive Updates
                    </span>
                    <div className="absolute bottom-1 left-0 right-0 h-3 bg-[var(--primary)]/20 blur-sm -z-0" />
                  </span>
                </h3>
                <p className="text-gray-500 text-lg font-medium">Subscribe to receive publishing tips, author success stories, and exclusive offers</p>
              </div>

              <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
                <div className="relative flex items-center gap-2 bg-[var(--foreground)]/5 backdrop-blur-xl border-2 border-[var(--border)] rounded-2xl p-2 focus-within:border-[var(--primary)]/50 transition-all">
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
                    className="px-8 py-4 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] text-white font-black rounded-xl flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-all relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative z-10">
                      {isSubscribed ? <Check className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                    </span>
                    <span className="relative z-10 hidden sm:inline uppercase tracking-widest">
                      {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                    </span>
                  </button>
                </div>
              </form>

              {isSubscribed && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 text-xs font-black uppercase tracking-widest backdrop-blur-sm animate-fade-in">
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
                className={`relative group transform transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
                aria-label={social.label}
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${social.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity animate-pulse`} />

                <div className="relative w-14 h-14 rounded-2xl bg-[var(--foreground)]/5 border border-[var(--border)] flex items-center justify-center text-gray-500 group-hover:text-white transition-all backdrop-blur-sm overflow-hidden">
                  <Icon className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] pt-8 transition-opacity duration-1000" style={{ opacity: isVisible ? 1 : 0 }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-xs font-black flex items-center gap-2 uppercase tracking-widest">
              © 2024 <span className="text-[var(--foreground)]">TOP SHELF</span>. Crafted with
              <Heart className="w-4 h-4 text-[var(--primary)] fill-current animate-scale-pulse" />
              by our team.
            </p>

            <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
              {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((item) => (
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
        className={`fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-[var(--primary)]/30 z-50 group overflow-hidden transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
      >
        <ArrowUp className="w-7 h-7 relative z-10 group-hover:-translate-y-1 transition-transform" />
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 animate-shine" />
        <div className="absolute inset-0 bg-primary rounded-2xl animate-ping opacity-20 pointer-events-none" />
      </button>

      {/* Animated Bottom Border */}
      <div className="relative h-1 overflow-hidden opacity-30">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent animate-glide" />
      </div>
    </footer>
  );
}