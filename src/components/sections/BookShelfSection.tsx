"use client";

import React, { memo } from "react";
import { BookOpen, Sparkles, Star, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

export const BookShelfSection = memo(function BookShelfSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden bg-[var(--bg-cream)]">
      {/* Background Gradient Orbs */}
      <div className="absolute top-10 left-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-r from-red-200/30 to-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-r from-yellow-200/30 to-red-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-red-900/80 to-red-950/80 border border-red-800/60 shadow-md">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide uppercase">
                Digital Library
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] text-gray-900">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-red-800 via-red-600 to-red-900 bg-clip-text text-transparent">
                Endless Knowledge
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
              Discover thousands of premium ebooks across all genres. From
              bestselling fiction to cutting-edge technology, your next favorite
              read is just a click away.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              {[
                {
                  icon: BookOpen,
                  value: "1000+",
                  label: "Books",
                  color: "from-red-500 to-red-700",
                },
                {
                  icon: Star,
                  value: "4.9",
                  label: "Rating",
                  color: "from-yellow-500 to-orange-600",
                  fill: true,
                },
                {
                  icon: Zap,
                  value: "24/7",
                  label: "Access",
                  color: "from-blue-500 to-purple-600",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 lg:p-4 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                    <div
                      className={`bg-gradient-to-r ${stat.color} p-1 sm:p-1.5 rounded-md`}
                    >
                      <stat.icon
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill={stat.fill ? "white" : "none"}
                      />
                    </div>
                    <span className="text-base sm:text-xl lg:text-2xl font-black text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-500 text-[10px] sm:text-xs font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {[
                "Instant digital downloads",
                "Multi-device sync support",
                "Regular new releases",
                "Exclusive member discounts",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-red-900 to-red-950 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm lg:text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 lg:py-4 bg-gradient-to-r from-red-900 to-red-950 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all">
                Browse Library
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 lg:py-4 bg-white/80 text-gray-900 font-bold text-sm sm:text-base rounded-xl border-2 border-gray-200 hover:border-red-900/30 active:scale-[0.98] transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Image/Device Mockup */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Mobile & Tablet: Simple Image */}
            <div className="lg:hidden relative w-full max-w-sm mx-auto">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/Assets/WhatsApp Image 2025-11-15 at 04.57.16_185ad9fe.jpg"
                  alt="Digital Library Preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-xl shadow-lg p-2.5 sm:p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">
                      1000+
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Books
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Laptop Mockup */}
            <div className="hidden lg:block relative w-full max-w-lg xl:max-w-xl">
              {/* Laptop Frame */}
              <div className="relative">
                {/* Screen */}
                <div className="relative bg-gray-900 rounded-t-xl p-2">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-gray-800">
                    <Image
                      src="/Assets/WhatsApp Image 2025-11-15 at 04.57.16_185ad9fe.jpg"
                      alt="Digital Library Preview"
                      fill
                      className="object-cover"
                      sizes="50vw"
                      priority
                    />
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="relative h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-400 rounded-b-full" />
                </div>

                {/* Laptop Bottom */}
                <div className="relative h-2 bg-gray-400 rounded-b-xl mx-8" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 xl:-right-8 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" fill="white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      4.9 Rating
                    </p>
                    <p className="text-xs text-gray-500">Top Rated</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 xl:-left-8 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Instant Access
                    </p>
                    <p className="text-xs text-gray-500">Download Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
