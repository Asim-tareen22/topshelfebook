"use client";

import { memo } from "react";
import Image from "next/image";
import { Sparkles, Star, Zap, Award, TrendingUp } from "lucide-react";

// Memoize stats to prevent recreation
const stats = [
  { icon: Award, value: "500+", label: "Books" },
  { icon: TrendingUp, value: "99%", label: "Success" },
  { icon: Star, value: "5.0", label: "Rating" },
] as const;

export const PersonalBrand = memo(function PersonalBrand() {
  return (
    <section
      className="relative bg-black py-20 lg:py-32 overflow-hidden"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "0 800px",
        contain: "layout style paint",
      }}
    >
      {/* STATIC BACKGROUND - No animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Single gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#450a0a15,transparent_70%)]" />

        {/* Static orbs - NO blur-3xl, NO animations */}
        <div
          className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #7f1d1d 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #991b1b 0%, transparent 70%)",
          }}
        />

        {/* Static grid - No animation */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Badge - Static */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-950 to-red-900 border border-red-800/50">
            <Sparkles className="w-5 h-5 text-red-400" />
            <p className="text-sm font-black tracking-widest text-white">
              WHY CHOOSE US
            </p>
            <Star className="w-4 h-4 text-red-400 fill-red-400" />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8 relative z-10">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white">
              Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
                Author Identity
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We help authors like you create a{" "}
                <span className="text-white font-semibold">
                  strong presence
                </span>{" "}
                in the digital world. Our expert team handles everything —{" "}
                <span className="text-red-400 font-semibold">
                  writing, editing, publishing, and branding
                </span>
                .
              </p>

              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                Your story deserves to shine. We make sure it reaches the world
                with{" "}
                <span className="text-white font-medium">
                  impact, clarity, and style
                </span>
                .
              </p>
            </div>

            {/* Stats - Static */}
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="p-2.5 bg-red-900/50 rounded-xl border border-red-800/50 group-hover:bg-red-800/50 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500 font-semibold">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons - Simplified */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white font-bold text-base rounded-xl shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 active:scale-[0.98]">
                <span className="flex items-center gap-2">
                  Get Started
                  <Zap className="w-5 h-5" />
                </span>
              </button>

              <button className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold text-base rounded-xl transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE - Simplified */}
          <div className="relative flex items-center justify-center">
            {/* Simple glow - No animation */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(239, 68, 68, 0.15) 0%, transparent 60%)",
              }}
            />

            {/* Main Image */}
            <div className="relative z-10 w-full h-[400px] sm:h-[500px] lg:h-[550px]">
              <Image
                src="/Assets/ip-incubation.4307345e.png"
                alt="Author Identity"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Static Floating Badges */}
              <div className="absolute -top-4 -right-4 sm:top-0 sm:right-0 bg-gradient-to-br from-red-600 to-red-800 text-white px-4 py-3 rounded-xl shadow-xl">
                <p className="text-2xl font-black">500+</p>
                <p className="text-[10px] font-bold text-red-200">Published</p>
              </div>

              <div className="absolute -bottom-4 -left-4 sm:bottom-0 sm:left-0 bg-white text-red-800 px-4 py-3 rounded-xl shadow-xl">
                <p className="text-2xl font-black">99%</p>
                <p className="text-[10px] font-bold text-red-600">Success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
