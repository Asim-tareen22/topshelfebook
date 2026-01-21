"use client";

import { useEffect, useState, useRef, memo } from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "TopShelf eBook has completely transformed my reading habits!",
    name: "Sarah Johnson",
    title: "Book Enthusiast",
    image: "/Assets/1-1-180x300.webp",
  },
  {
    quote: "I've been using TopShelf for over a year now. Amazing quality!",
    name: "Michael Chen",
    title: "Digital Reader",
    image: "/Assets/2-1-180x300.webp",
  },
  {
    quote: "As an avid reader, TopShelf stands out from the rest.",
    name: "Emily Rodriguez",
    title: "Literature Professor",
    image: "/Assets/3-1-180x300.webp",
  },
  {
    quote: "Exceptional customer service and seamless reading experience.",
    name: "David Thompson",
    title: "Tech Professional",
    image: "/Assets/4-1-180x300.webp",
  },
  {
    quote: "The variety is mind-blowing! Everything I need is here.",
    name: "Jennifer Martinez",
    title: "Content Writer",
    image: "/Assets/5-1-180x300.webp",
  },
  {
    quote: "Discovered TopShelf last month and already hooked!",
    name: "Robert Williams",
    title: "Business Owner",
    image: "/Assets/6-1-180x300.webp",
  },
];

const TestimonialCard = memo(function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[400px] bg-gray-900/60 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-700 shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="400px"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
          <div className="flex gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-500 text-orange-500"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500/30 mb-2 sm:mb-3" />
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="text-sm sm:text-base font-black text-white">
            {testimonial.name}
          </h4>
          <p className="text-orange-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
});

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "100px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 via-red-950/20 to-gray-900 overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 800px" }}
    >
      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/20 mb-6 sm:mb-8 transition-all duration-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-white font-black text-xs sm:text-sm tracking-wide">
            READER TESTIMONIALS
          </span>
        </div>

        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 transition-all duration-500 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Readers Say
          </span>
        </h2>

        <p
          className={`text-gray-300 text-base sm:text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Join thousands of satisfied readers
        </p>
      </div>

      {/* Scrolling Cards - CSS Animation only when visible */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div
            className={`flex gap-4 sm:gap-6 ${isVisible ? "animate-scroll-testimonials" : ""}`}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            { number: "50K+", label: "Happy Readers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "10K+", label: "Books Available" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-yellow-400 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-testimonials {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-testimonials {
          animation: scroll-testimonials 40s linear infinite;
        }
        .animate-scroll-testimonials:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
