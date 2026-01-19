'use client';

import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { BookOpen, Sparkles, Star, Zap, Book, ArrowRight } from "lucide-react";

export function BookShelfSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-[var(--bg-cream)]">

      {/* Animated Floating Books */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <Book className="w-6 h-6 sm:w-8 sm:h-8 text-red-900" style={{ transform: `rotate(${Math.random() * 20 - 10}deg)` }} />
          </div>
        ))}
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-red-900/20 rounded-full animate-particle opacity-0"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-gradient-to-r from-red-200/40 to-orange-200/40 rounded-full blur-3xl pointer-events-none animate-blob opacity-40" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-gradient-to-r from-yellow-200/40 to-red-200/40 rounded-full blur-3xl pointer-events-none animate-blob-2 opacity-40" />

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Content */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 lg:pr-4 xl:pr-8 z-10 animate-fade-in-left order-2 lg:order-1">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-red-900/80 to-red-950/80 border-2 border-red-800/60 shadow-xl animate-bounce-slow">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-spin-slow" />
              <span className="text-white font-black text-xs sm:text-sm tracking-wide">
                DIGITAL LIBRARY
              </span>
            </div>

            {/* Main Heading */}
            <div className="animate-fade-in-up delay-200">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-900">
                Your Gateway to{' '}
                <span className="bg-gradient-to-r from-red-800 via-red-600 to-red-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Endless Knowledge
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed animate-fade-in delay-300 max-w-xl">
              Discover thousands of premium ebooks across all genres. From bestselling fiction to cutting-edge technology, your next favorite read is just a click away.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 animate-fade-in delay-500">
              {[
                { icon: BookOpen, value: '1000+', label: 'Books', color: 'from-red-500 to-red-700' },
                { icon: Star, value: '4.9', label: 'Rating', color: 'from-yellow-500 to-orange-600' },
                { icon: Zap, value: '24/7', label: 'Access', color: 'from-blue-500 to-purple-600' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg border border-gray-200 transition-all hover:-translate-y-2 hover:rotate-3"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div className={`bg-gradient-to-r ${stat.color} p-1.5 sm:p-2 rounded-lg animate-pulse`}>
                      <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill={stat.label === 'Rating' ? 'white' : 'none'} />
                    </div>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900">{stat.value}</h3>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 animate-fade-in delay-700">
              {[
                'Instant digital downloads',
                'Multi-device sync support',
                'Regular new releases',
                'Exclusive member discounts'
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 group cursor-pointer transition-transform hover:translate-x-2"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-red-900 to-red-950 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-[360deg] transition-transform duration-500">
                    <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 text-sm sm:text-base lg:text-lg font-semibold group-hover:text-red-900 transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in delay-900 pt-2">
              <button className="relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-red-900 to-red-950 text-white font-black text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group hover:scale-105 transition-all animate-glow active:scale-95 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Browse Library
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce-x" />
                </span>
              </button>

              <button className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white/60 backdrop-blur-sm text-gray-900 font-black text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl border-2 border-gray-900/20 shadow-xl hover:border-red-900 hover:bg-white/80 transition-all w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - MacbookScroll */}
          <div className="relative z-10 flex items-center justify-center pt-8 sm:pt-12 lg:pt-[300px] xl:pt-[400px] animate-fade-in-right delay-500 order-1 lg:order-2">
            {/* Glow Effect Behind Laptop */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-yellow-400/20 to-orange-400/20 blur-3xl rounded-full animate-pulse opacity-50" />

            <div className="scale-50 sm:scale-60 md:scale-75 lg:scale-90 xl:scale-100 transition-transform hover:scale-[1.05] duration-500 origin-center">
              <MacbookScroll
                src={`/Assets/WhatsApp Image 2025-11-15 at 04.57.16_185ad9fe.jpg`}
                showGradient={false}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-10">
        <svg viewBox="0 0 1440 120" className="w-full h-12 sm:h-16 lg:h-24 fill-red-900">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>

    </section>
  );
}