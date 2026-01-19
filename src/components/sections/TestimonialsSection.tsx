'use client';

import { useEffect, useState, useRef } from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: 'TopShelf eBook has completely transformed my reading habits! The vast collection keeps me engaged every day.',
      name: 'Sarah Johnson',
      title: 'Book Enthusiast',
      image: '/Assets/1-1-180x300.webp',
      color: 'from-pink-500 to-rose-500',
    },
    {
      quote: "I've been using TopShelf for over a year now. The quality of content is amazing and always up-to-date.",
      name: 'Michael Chen',
      title: 'Digital Reader',
      image: '/Assets/2-1-180x300.webp',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      quote: 'As an avid reader, TopShelf stands out from the rest. The curated collections are absolutely perfect.',
      name: 'Emily Rodriguez',
      title: 'Literature Professor',
      image: '/Assets/3-1-180x300.webp',
      color: 'from-purple-500 to-violet-500',
    },
    {
      quote: 'Exceptional customer service and seamless reading experience across all my devices. Highly recommended!',
      name: 'David Thompson',
      title: 'Tech Professional',
      image: '/Assets/4-1-180x300.webp',
      color: 'from-orange-500 to-amber-500',
    },
    {
      quote: 'The variety is mind-blowing! From self-help to fiction, everything I need is here in one place.',
      name: 'Jennifer Martinez',
      title: 'Content Writer',
      image: '/Assets/5-1-180x300.webp',
      color: 'from-green-500 to-emerald-500',
    },
    {
      quote: 'Discovered TopShelf last month and already hooked! The recommendations are always spot-on.',
      name: 'Robert Williams',
      title: 'Business Owner',
      image: '/Assets/6-1-180x300.webp',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-dark)] overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[var(--primary)]/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[var(--secondary)]/20 rounded-full blur-3xl animate-blob-2" />

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 mb-6 sm:mb-8 backdrop-blur-sm transform transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
        >
          <Sparkles className="w-4 h-4 text-[var(--accent)]" />
          <span className="text-[var(--foreground)] font-black text-xs sm:text-sm tracking-wide">
            READER TESTIMONIALS
          </span>
        </div>

        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[var(--foreground)] mb-4 sm:mb-6 tracking-tight transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
          What Our{' '}
          <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
            Readers Say
          </span>
        </h2>

        <p
          className={`text-gray-300 text-base sm:text-lg max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
          Join thousands of satisfied readers
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[var(--primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[var(--primary)] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 sm:gap-6 animate-scroll-infinite">
            {/* Duplicate for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[400px] bg-gradient-to-br from-[var(--primary-dark)]/60 to-[var(--primary)]/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--border)] shadow-2xl hover:shadow-[var(--accent)]/20 hover:border-[var(--accent)]/30 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Image Area */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Stars Badge */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="flex gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 fill-[var(--accent)] text-[var(--accent)]"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-4 sm:p-6">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--accent)]/30 mb-2 sm:mb-3" />
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4 border-t border-[var(--border)] pt-4">
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-[var(--foreground)]">
                        {testimonial.name}
                      </h4>
                      <p className="text-[var(--accent)] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            { number: '50K+', label: 'Happy Readers' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '10K+', label: 'Books Available' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-default transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-yellow-400 mb-1 sm:mb-2 animate-scale-pulse">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for infinite scroll */}
      <style jsx > {`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style >
    </section >
  );
}