'use client';

import { useEffect, useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

export function CardsSpreadSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSpread, setIsSpread] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsSpread(true), 1200);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const books = [
    { id: 1, name: 'The Midnight Library', author: 'Matt Haig', image: '/Assets/1-1-180x300.webp' },
    { id: 2, name: 'Atomic Habits', author: 'James Clear', image: '/Assets/2-1-180x300.webp' },
    { id: 3, name: 'The Silent Patient', author: 'Alex Michaelides', image: '/Assets/3-1-180x300.webp' },
    { id: 4, name: 'Where the Crawdads Sing', author: 'Delia Owens', image: '/Assets/4-1-180x300.webp' },
    { id: 5, name: 'Becoming', author: 'Michelle Obama', image: '/Assets/5-1-180x300.webp' },
    { id: 6, name: 'Educated', author: 'Tara Westover', image: '/Assets/6-1-180x300.webp' },
  ];

  // Wave positions for spread animation
  const getPosition = (index: number) => {
    if (!isSpread) return { x: 0, y: 0, rotate: 0 };

    // Desktop wave pattern
    const positions = [
      { x: -200, y: -160, rotate: -12 },
      { x: -120, y: -80, rotate: -6 },
      { x: -40, y: 0, rotate: -2 },
      { x: 40, y: 40, rotate: 2 },
      { x: 120, y: 100, rotate: 6 },
      { x: 200, y: 180, rotate: 12 },
    ];
    return positions[index] || { x: 0, y: 0, rotate: 0 };
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: '#FFFAE8' }}
    >
      {/* Background Orbs */}
      <div className="absolute top-20 left-10 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-r from-red-200/40 to-orange-200/40 rounded-full blur-3xl animate-scale-pulse" />
      <div className="absolute bottom-20 right-10 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-r from-yellow-200/40 to-red-200/40 rounded-full blur-3xl animate-scale-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 z-10 text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-red-900/80 to-red-950/80 border-2 border-red-800/60 shadow-xl transform transition-all duration-700 ${isVisible ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-180 opacity-0'
                }`}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-spin-slow" />
              <span className="text-white font-black text-xs sm:text-sm tracking-wide">
                FEATURED COLLECTION
              </span>
            </div>

            {/* Heading */}
            <div
              className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-gray-900">Discover Your </span>
                <span className="bg-gradient-to-r from-red-800 via-red-600 to-red-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Next Favorite
                </span>
              </h1>
            </div>

            {/* Description */}
            <div
              className={`space-y-3 sm:space-y-4 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
            >
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                Explore our handpicked collection of bestselling books.
              </p>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                From gripping thrillers to life-changing self-help guides.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-6 sm:gap-8 transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
            >
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-red-900">6</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-semibold">Featured Books</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-red-900">4.9★</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-semibold">Average Rating</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div
              className={`flex items-center gap-3 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
            >
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-red-800 to-red-600 rounded-full transition-all duration-1500 ease-out ${isVisible ? 'w-full' : 'w-0'
                    }`}
                  style={{ transitionDelay: '800ms' }}
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-600">Loading...</span>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center z-10">
            <div className="relative w-full h-full flex items-center justify-center">
              {books.map((book, index) => {
                const pos = getPosition(index);

                return (
                  <div
                    key={book.id}
                    className={`absolute cursor-pointer transition-all duration-700 ease-out group ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-[500px]'
                      }`}
                    style={{
                      transform: isSpread
                        ? `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg)`
                        : 'translate(0, 0) rotate(0deg)',
                      transitionDelay: `${index * 100}ms`,
                      zIndex: isSpread ? 10 + index : 20 - index,
                    }}
                  >
                    <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white overflow-hidden relative group-hover:scale-110 group-hover:-translate-y-4 group-hover:rotate-0 group-hover:z-50 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-300">

                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={book.image}
                          alt={book.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          priority
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />

                        {/* Book Info on Hover */}
                        <div className="absolute inset-0 flex flex-col items-center justify-end p-3 sm:p-5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <h3 className="text-white font-black text-sm sm:text-lg lg:text-xl text-center mb-1 drop-shadow-2xl line-clamp-2">
                            {book.name}
                          </h3>
                          <p className="text-white/90 font-semibold text-xs sm:text-sm text-center">
                            by {book.author}
                          </p>
                        </div>

                        {/* TopShelf Badge */}
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 shadow-lg">
                          <span className="text-red-900 font-black text-[8px] sm:text-xs">TopShelf</span>
                        </div>

                        {/* Rating Badge */}
                        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-gray-900/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center gap-1 shadow-lg">
                          <span className="text-yellow-400 text-xs sm:text-sm">★</span>
                          <span className="text-white font-bold text-[10px] sm:text-xs">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      {isSpread && (
        <div
          className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-center transition-all duration-700 ${isSpread ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          style={{ transitionDelay: '2000ms' }}
        >
          <p className="text-gray-600 text-xs sm:text-sm font-semibold mb-2">Hover to explore</p>
          <div className="animate-bounce-slow text-red-900">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}