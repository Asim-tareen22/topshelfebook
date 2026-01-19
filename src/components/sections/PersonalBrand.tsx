'use client';

import Image from 'next/image';
import { Sparkles, Star, Zap, Award, TrendingUp, ArrowRight } from 'lucide-react';

export function PersonalBrand() {
  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#450a0a20,transparent_70%)]" />

        {/* Rotating Orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-red-900/30 to-red-950/20 rounded-full blur-3xl animate-blob opacity-50" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-red-800/30 to-red-900/20 rounded-full blur-3xl animate-blob-2 opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-full blur-3xl animate-pulse opacity-40" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full shadow-lg animate-particle opacity-0"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] animate-grid opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Animated Badge */}
        <div className="text-center mb-16 scroll-animate visible animate-fade-in-down">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-950/80 to-red-900/80 border-2 border-red-700/60 backdrop-blur-xl animate-glow">
            <Sparkles className="w-5 h-5 text-white animate-spin-slow" />
            <p className="text-sm font-black tracking-widest text-white">WHY CHOOSE US</p>
            <Star className="w-4 h-4 text-white fill-white animate-twinkle" />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 relative z-10 animate-fade-in-left">
            {/* Heading with Animated Underline */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white">
                Build Your{' '}
                <span className="relative inline-block group">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-900">
                    Author Identity
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-900/50 to-red-700/50 blur-sm origin-left animate-scale-pulse" />
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 animate-fade-in delay-300">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We help authors like you create a{' '}
                <span className="text-white font-bold">strong presence</span>{' '}
                in the digital world. Our expert team handles everything —{' '}
                <span className="text-[var(--primary)] font-semibold">writing, editing, publishing, and branding</span>.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Your story deserves to shine. We make sure it reaches the world with{' '}
                <span className="text-white font-semibold">impact, clarity, and style</span>.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="flex gap-8 pt-4 animate-fade-in delay-500">
              {[
                { icon: Award, value: '500+', label: 'Books' },
                { icon: TrendingUp, value: '99%', label: 'Success' },
                { icon: Star, value: '5.0', label: 'Rating' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 group transition-transform hover:-translate-y-2">
                  <div className="p-2 bg-red-900/40 rounded-lg border border-red-700/40 group-hover:bg-red-600/20 transition-colors">
                    <stat.icon className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated Buttons */}
            <div className="flex gap-5 pt-4 animate-fade-in delay-700">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-red-800 to-red-900 text-white font-bold text-lg rounded-xl shadow-2xl overflow-hidden hover:scale-105 transition-all active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700 bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <Zap className="w-5 h-5 fill-white animate-bounce" />
                </span>
              </button>

              <button className="px-10 py-4 border-2 border-white/30 hover:bg-white/10 text-white font-bold text-lg rounded-xl backdrop-blur-xl transition-all hover:border-white">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full flex items-center justify-center animate-fade-in-right delay-300">
            {/* Rotating Glow Rings */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-red-900/30 rounded-full blur-3xl animate-spin-slow opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-l from-red-500/20 via-transparent to-red-800/20 rounded-full blur-2xl animate-spin-reverse opacity-40" />

            {/* Orbiting Stars */}
            <div className="absolute inset-0 pointer-events-none animate-spin-slow" style={{ animationDuration: '30s' }}>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-twinkle"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 60}deg) translateY(-250px) rotate(-${i * 60}deg)`,
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              ))}
            </div>

            {/* Main Image with 3D Effect */}
            <div className="relative z-10 w-full h-[500px] lg:h-[600px] group transition-all duration-500 hover:rotate-2">
              <div className="absolute -inset-6 rounded-3xl bg-red-600/20 blur-3xl animate-pulse-glow group-hover:opacity-100 transition-opacity" />

              <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/Assets/ip-incubation.4307345e.png"
                  alt="Author Identity"
                  fill
                  className="object-contain drop-shadow-[0_0_60px_rgba(239,68,68,0.3)]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-br from-red-600 to-red-900 text-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-white/30 backdrop-blur-xl animate-float">
                <p className="text-3xl font-black">500+</p>
                <p className="text-xs font-bold">Published</p>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-white to-gray-100 text-red-900 px-6 py-4 rounded-2xl shadow-2xl border-2 border-red-500/40 animate-float-slow">
                <p className="text-3xl font-black">99%</p>
                <p className="text-xs font-bold">Success</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}