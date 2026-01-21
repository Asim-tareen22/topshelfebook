"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
} from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(null);

  // Throttled mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      if (!heroRef.current) {
        rafRef.current = null;
        return;
      }
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      heroRef.current.style.setProperty("--mouse-x", x.toString());
      heroRef.current.style.setProperty("--mouse-y", y.toString());
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center bg-[var(--background)]"
      style={
        {
          "--mouse-x": "0",
          "--mouse-y": "0",
          contain: "layout style paint",
        } as React.CSSProperties
      }
    >
      {/* Simplified Grid Background - No animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary-dark) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary-dark) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Simplified Blobs - No animation, reduced blur */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-900/15 to-orange-900/15 blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-900/15 to-red-900/15 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Badge - Simplified */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-900/90 to-orange-800/90 rounded-full border-2 border-red-600/50 shadow-lg">
              <Flame className="w-5 h-5 text-orange-400" />
              <span className="text-white font-black text-sm tracking-wider">
                #1 DIGITAL LIBRARY PLATFORM
              </span>
              <Crown className="w-5 h-5 text-yellow-400" />
            </div>

            {/* Heading - Removed complex animations */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none text-white">
                <span className="block">Discover</span>
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    Endless
                  </span>
                  <Sparkles className="inline-block w-6 h-6 text-yellow-400 ml-2" />
                </span>
                <span className="block mt-2">Stories</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 font-semibold max-w-xl">
                Access 10,000+ premium eBooks. Read anywhere, anytime.
              </p>
            </div>

            {/* Stats Row - Simplified hover effects */}
            <div className="flex items-center gap-8 flex-wrap">
              {[
                {
                  value: "10K+",
                  label: "Books",
                  icon: BookOpen,
                  color: "from-red-600 to-orange-600",
                },
                {
                  value: "50K+",
                  label: "Readers",
                  icon: Users,
                  color: "from-orange-600 to-yellow-600",
                },
                {
                  value: "4.9",
                  label: "Rating",
                  icon: Star,
                  color: "from-yellow-600 to-red-600",
                },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-3 group">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg border border-white/20 transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-400 font-semibold">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons - Simplified */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group px-8 py-5 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl font-black text-lg text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-95"
              >
                <span className="flex items-center gap-3">
                  <Rocket className="w-5 h-5" />
                  Start Reading Free
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                  />
                </span>
              </button>

              <button className="px-8 py-5 bg-white/10 border-2 border-white/20 rounded-2xl font-black text-lg text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-3 justify-center">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Badges - Simplified */}
            <div className="flex items-center gap-6 flex-wrap">
              <p className="text-sm text-gray-500 font-semibold">Trusted by:</p>
              {["Amazon", "Google", "Microsoft", "Apple"].map((brand, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="text-gray-400 font-bold text-sm">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Book Display - Simplified */}
          <div className="relative hidden lg:block">
            <div
              className="relative transition-transform duration-500 ease-out"
              style={{
                transform: `
                  translate(calc(var(--mouse-x) * 20px), calc(var(--mouse-y) * 20px))
                  rotateX(calc(var(--mouse-y) * -5deg))
                  rotateY(calc(var(--mouse-x) * 5deg))
                `,
                willChange: "transform",
              }}
            >
              {/* Main Book Card - Simplified shadows */}
              <div className="relative group">
                <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-shadow duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=1200&fit=crop&q=80"
                    alt="Featured Book"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 384px"
                  />

                  {/* Simplified Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />

                  {/* Bestseller Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-5 py-2 rounded-xl text-sm font-black shadow-lg flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>BESTSELLER</span>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-white font-bold bg-yellow-500/90 px-2 py-0.5 rounded-full text-sm">
                        4.9
                      </span>
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2">
                      The Midnight Library
                    </h3>
                    <p className="text-orange-400 font-semibold mb-6">
                      by Matt Haig
                    </p>

                    <button className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl font-black text-white text-lg shadow-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity active:scale-95">
                      <Rocket className="w-5 h-5" />
                      <span>Read Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Simplified */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500 text-sm font-semibold">
            Scroll to explore
          </p>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-2 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
