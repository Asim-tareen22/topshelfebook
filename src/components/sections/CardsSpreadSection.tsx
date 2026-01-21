'use client';

import { useEffect, useState, useRef, memo } from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

const books = [
  { id: 1, name: 'The Midnight Library', author: 'Matt Haig', image: '/Assets/1-1-180x300.webp' },
  { id: 2, name: 'Atomic Habits', author: 'James Clear', image: '/Assets/2-1-180x300.webp' },
  { id: 3, name: 'The Silent Patient', author: 'Alex Michaelides', image: '/Assets/3-1-180x300.webp' },
  { id: 4, name: 'Where the Crawdads Sing', author: 'Delia Owens', image: '/Assets/4-1-180x300.webp' },
  { id: 5, name: 'Becoming', author: 'Michelle Obama', image: '/Assets/5-1-180x300.webp' },
  { id: 6, name: 'Educated', author: 'Tara Westover', image: '/Assets/6-1-180x300.webp' },
];

const positions = [
  { x: -200, y: -160, rotate: -12 },
  { x: -120, y: -80, rotate: -6 },
  { x: -40, y: 0, rotate: -2 },
  { x: 40, y: 40, rotate: 2 },
  { x: 120, y: 100, rotate: 6 },
  { x: 200, y: 180, rotate: 12 },
];

const BookCard = memo(function BookCard({ 
  book, 
  index, 
  isSpread, 
  isVisible 
}: { 
  book: typeof books[0]; 
  index: number; 
  isSpread: boolean;
  isVisible: boolean;
}) {
  const pos = isSpread ? positions[index] : { x: 0, y: 0, rotate: 0 };

  return (
    <div
      className={`absolute cursor-pointer transition-all duration-700 ease-out group ${
        isVisible ? 'opacity-100' : 'opacity-0 -translate-y-20'
      }`}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg)`,
        transitionDelay: `${index * 80}ms`,
        zIndex: isSpread ? 10 + index : 20 - index,
      }}
    >
      <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white overflow-hidden relative group-hover:scale-110 group-hover:-translate-y-4 group-hover:z-50 transition-all duration-300">
        <div className="relative w-full h-full">
          <Image
            src={book.image}
            alt={book.name}
            fill
            className="object-cover"
            sizes="256px"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-end p-3 sm:p-5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="text-white font-black text-sm sm:text-lg lg:text-xl text-center mb-1 line-clamp-2">
              {book.name}
            </h3>
            <p className="text-white/90 font-semibold text-xs sm:text-sm text-center">
              by {book.author}
            </p>
          </div>

          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/95 rounded-full px-2 sm:px-3 py-1 shadow-lg">
            <span className="text-red-900 font-black text-[8px] sm:text-xs">TopShelf</span>
          </div>

          <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-gray-900/90 rounded-full px-2 sm:px-3 py-1 flex items-center gap-1 shadow-lg">
            <span className="text-yellow-400 text-xs sm:text-sm">★</span>
            <span className="text-white font-bold text-[10px] sm:text-xs">4.9</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export function CardsSpreadSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSpread, setIsSpread] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsSpread(true), 800);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: '#FFFAE8', contentVisibility: 'auto', containIntrinsicSize: '0 100vh' }}
    >
      {/* Static Background */}
      <div className="absolute top-20 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-red-200/30 to-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-yellow-200/30 to-red-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 z-10 text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-900/80 to-red-950/80 border-2 border-red-800/60 shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
              <span className="text-white font-black text-xs sm:text-sm tracking-wide">
                FEATURED COLLECTION
              </span>
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-gray-900">Discover Your </span>
              <span className="bg-gradient-to-r from-red-800 via-red-600 to-red-900 bg-clip-text text-transparent">
                Next Favorite
              </span>
            </h1>

            <div
              className={`space-y-3 transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                Explore our handpicked collection of bestselling books.
              </p>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                From gripping thrillers to life-changing self-help guides.
              </p>
            </div>

            <div
              className={`flex items-center justify-center lg:justify-start gap-6 sm:gap-8 transition-all duration-500 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
          </div>

          {/* Right - Cards */}
          <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center z-10">
            <div className="relative w-full h-full flex items-center justify-center">
              {books.map((book, index) => (
                <BookCard
                  key={book.id}
                  book={book}
                  index={index}
                  isSpread={isSpread}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}