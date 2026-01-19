'use client';

import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Sparkles,
  Star,
  Flame,
  Crown,
  Rocket,
  Play,
  Users,
  BookOpen,
  Target,
  Award,
  Heart,
  Bookmark,
  Share2,
  Eye,
  Zap,
  Gift
} from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      heroRef.current.style.setProperty('--mouse-x', x.toString());
      heroRef.current.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center bg-[var(--background)]"
      style={{ '--mouse-x': '0', '--mouse-y': '0' } as React.CSSProperties}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0 animate-grid"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary-dark) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary-dark) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Particles - OPTIMIZED */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full animate-particle opacity-0
              ${i % 3 === 0 ? 'bg-red-500' : i % 3 === 1 ? 'bg-orange-500' : 'bg-yellow-500'}`}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
              width: Math.random() > 0.5 ? '8px' : '4px',
              height: Math.random() > 0.5 ? '8px' : '4px',
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Morphing Blobs - OPTIMIZED */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-900/20 to-orange-900/20 blur-2xl pointer-events-none opacity-40" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-900/20 to-red-900/20 blur-2xl pointer-events-none opacity-40" />



      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in-left">

            {/* Floating Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-900/90 to-orange-800/90 backdrop-blur-xl rounded-full border-2 border-red-600/50 shadow-2xl relative overflow-hidden animate-bounce-slow">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 bg-[length:200%_100%] animate-gradient opacity-50" />
              <Flame className="w-5 h-5 text-orange-400 relative z-10 animate-pulse" />
              <span className="text-white font-black text-sm tracking-wider relative z-10">
                #1 DIGITAL LIBRARY PLATFORM
              </span>
              <Crown className="w-5 h-5 text-yellow-400 relative z-10 animate-bounce" />
            </div>

            {/* Animated Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none text-white overflow-hidden">
                <span className="block animate-fade-in-down delay-100">Discover</span>
                <span className="block mt-2 relative animate-fade-in-down delay-200">
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" style={{ textShadow: '0 0 80px rgba(249,115,22,0.3)' }}>
                    Endless
                  </span>
                  <div className="absolute top-0 right-0 pointer-events-none">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-twinkle" />
                  </div>
                </span>
                <span className="block mt-2 animate-fade-in-down delay-300">Stories</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 font-semibold max-w-xl animate-fade-in delay-500">
                Access 10,000+ premium eBooks. Read anywhere, anytime.
                <span className="inline-block ml-1 w-0.5 h-6 bg-red-500 animate-cursor align-middle" />
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 flex-wrap animate-fade-in delay-700">
              {[
                { value: '10K+', label: 'Books', icon: BookOpen, color: 'from-red-600 to-orange-600' },
                { value: '50K+', label: 'Readers', icon: Users, color: 'from-orange-600 to-yellow-600' },
                { value: '4.9', label: 'Rating', icon: Star, color: 'from-yellow-600 to-red-600' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-3 relative group transition-all duration-300 hover:-translate-y-2">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity rounded-2xl`} />
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-2xl border-2 border-white/20 transition-transform group-hover:rotate-12`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-white group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
                      <p className="text-sm text-gray-400 font-semibold">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-900">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative px-8 py-5 bg-gradient-to-r from-red-900 to-orange-800 rounded-2xl font-black text-lg text-white overflow-hidden shadow-2xl border-2 border-red-700/50 hover:scale-105 transition-all active:scale-95"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-[length:200%_100%] transition-all duration-500 ${isHovered ? 'animate-gradient' : ''}`} />
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className={`w-5 h-5 transition-transform duration-500 ${isHovered ? 'rotate-[360deg]' : ''}`} />
                  Start Reading Free
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:animate-shine" />
              </button>

              <button className="px-8 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl font-black text-lg text-white hover:bg-white/20 transition-all shadow-xl flex items-center gap-3 justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Play className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Watch Demo</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 flex-wrap animate-fade-in delay-1000">
              <p className="text-sm text-gray-500 font-semibold flex items-center gap-2">
                <Target className="w-4 h-4 text-orange-500" />
                Trusted by:
              </p>
              {['Amazon', 'Google', 'Microsoft', 'Apple'].map((brand, i) => (
                <div key={i} className="px-4 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 relative overflow-hidden group hover:scale-110 hover:-translate-y-1 transition-all">
                  <span className="text-gray-400 font-bold text-sm relative z-10 transition-colors group-hover:text-white">{brand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Book Display */}
          <div className="relative animate-fade-in-right delay-500 group/book-container">
            <div
              className="relative transition-transform duration-300 ease-out animate-float"
              style={{
                transform: `
                  translate(calc(var(--mouse-x) * 30px), calc(var(--mouse-y) * 30px))
                  rotateX(calc(var(--mouse-y) * -10deg))
                  rotateY(calc(var(--mouse-x) * 10deg))
                `
              }}
            >
              {/* Glow Effect - SIMPLIFIED */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl rounded-full opacity-30" />

              {/* Main Book Card */}
              <div className="relative group/book">
                <div
                  className="relative w-96 h-[550px] rounded-3xl overflow-hidden transition-all duration-500 shadow-[0_60px_120px_rgba(0,0,0,0.9)] hover:scale-105 hover:rotate-2 group-hover/book:shadow-[0_80px_150px_rgba(239,68,68,0.3)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=1200&fit=crop&q=100"
                    alt="Featured Book"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                  />

                  {/* Premium Animated Border */}
                  <div className="absolute -inset-[3px] rounded-3xl -z-10 blur-sm bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-50 group-hover/book:opacity-100 transition-opacity animate-gradient" />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover/book:opacity-80 transition-opacity" />

                  {/* Top Action Buttons */}
                  <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover/book:opacity-100 translate-y-[-20px] group-hover/book:translate-y-0 transition-all duration-500 delay-100">
                    {[
                      { icon: Heart, color: 'from-pink-500 to-red-500' },
                      { icon: Bookmark, color: 'from-blue-500 to-purple-500' },
                      { icon: Share2, color: 'from-green-500 to-teal-500' },
                    ].map((item, i) => (
                      <button key={i} className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl backdrop-blur-xl border-2 border-white/30 hover:scale-125 transition-transform`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </button>
                    ))}
                  </div>

                  {/* Bestseller Badge */}
                  <div className="absolute top-6 left-6 animate-fade-in delay-1000">
                    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-6 py-3 rounded-2xl text-sm font-black shadow-2xl flex items-center gap-2 border-2 border-yellow-300 relative overflow-hidden group/badge">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shine" />
                      <Award className="w-5 h-5 animate-spin-slow" />
                      <span>BESTSELLER</span>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover/book:translate-y-[-10px] transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-twinkle" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                      </div>
                      <span className="text-white text-lg font-black bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full animate-pulse">4.9</span>
                      <span className="text-gray-300 text-sm">(2.5k reviews)</span>
                    </div>

                    <h3 className="text-4xl font-black text-white mb-2" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}>
                      The Midnight Library
                    </h3>
                    <p className="text-orange-400 text-lg font-semibold mb-6">by Matt Haig</p>

                    <div className="flex items-center gap-6 mb-6 flex-wrap">
                      {[
                        { icon: Users, label: '125K readers', color: 'text-blue-400' },
                        { icon: BookOpen, label: '304 pages', color: 'text-green-400' },
                        { icon: Eye, label: '1.2M views', color: 'text-purple-400' },
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-3 py-2 rounded-lg border border-white/20 hover:scale-110 transition-transform">
                          <stat.icon className={`w-5 h-5 ${stat.color}`} />
                          <span className="text-white text-sm font-bold">{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full py-5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-2xl font-black text-white text-lg shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden group/btn border-2 border-white/20 active:scale-95 transition-all">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-red-500 bg-[length:200%_100%] animate-gradient opacity-90" />
                      <Rocket className="w-5 h-5 relative z-10 group-hover/btn:translate-y-[-5px] group-hover/btn:translate-x-[5px] transition-transform" />
                      <span className="relative z-10">Read Now</span>
                      <ArrowRight className="w-5 h-5 relative z-10 animate-bounce-x" />
                    </button>
                  </div>
                </div>

                {/* Shadow Books Behind */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute top-0 left-0 w-96 h-[550px] bg-gradient-to-br from-red-900 via-gray-900 to-orange-900 rounded-3xl border-2 border-white/10 transition-all duration-700 opacity-0 group-hover/book-container:opacity-100"
                    style={{
                      zIndex: -i,
                      transform: `translate(calc(${i * -15}px), calc(${i * 15}px)) rotateY(calc(${i * -5}deg))`,
                      opacity: 0.6 - i * 0.15
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up delay-[2.5s]">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500 text-sm font-semibold">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2 animate-glow">
            <div className="w-1.5 h-2 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
}