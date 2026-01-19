'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const BOOKS = [
  {
    id: 1,
    title: 'The Art of Ghostwriting',
    author: 'John Smith',
    category: 'Non-Fiction',
    image: '/Assets/1-1-180x300.webp',
  },
  {
    id: 2,
    title: 'Digital Storytelling',
    author: 'Jane Doe',
    category: 'Education',
    image: '/Assets/2-1-180x300.webp',
  },
  {
    id: 3,
    title: 'Modern Publishing',
    author: 'Alex Wilson',
    category: 'Business',
    image: '/Assets/3-1-180x300.webp',
  },
  {
    id: 4,
    title: 'Creative Writing',
    author: 'Sarah Parker',
    category: 'Literature',
    image: '/Assets/4-1-180x300.webp',
  },
  {
    id: 5,
    title: 'Book Marketing 101',
    author: 'Mike Taylor',
    category: 'Marketing',
    image: '/Assets/5-1-180x300.webp',
  },
  {
    id: 6,
    title: 'The Novelist Guide',
    author: 'Emily White',
    category: 'Fiction',
    image: '/Assets/6-1-180x300.webp',
  },
];

export function BooksShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 3;

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (BOOKS.length - itemsPerPage + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (BOOKS.length - itemsPerPage + 1)) % (BOOKS.length - itemsPerPage + 1));
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-[var(--background)] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--primary)]/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--secondary)]/5 rounded-full blur-[120px] animate-blob-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--foreground)]/5 border border-[var(--border)] backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-[var(--foreground)] text-xs font-black tracking-widest uppercase">FEATURED GALLERY</span>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tight transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Explore Our <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent italic">Masterpieces</span>
            </h2>
          </div>

          <div className={`flex gap-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:shadow-[0_0_20px_var(--primary-glow)] transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:shadow-[0_0_20px_var(--primary-glow)] transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden group/carousel">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {BOOKS.map((book, index) => (
              <div
                key={book.id}
                className={`flex-shrink-0 px-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ width: `${100 / itemsPerPage}%`, transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative aspect-[3/4] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--card-bg)] border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/20 shadow-xl overflow-hidden">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)] text-white text-[10px] font-black uppercase tracking-widest mb-3">
                        {book.category}
                      </div>
                      <h3 className="text-xl font-black text-white mb-1">{book.title}</h3>
                      <p className="text-gray-300 text-xs font-bold">{book.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-12 flex justify-center gap-3 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {[...Array(Math.max(0, BOOKS.length - itemsPerPage + 1))].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${currentIndex === i
                  ? 'w-12 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-[0_0_10px_var(--primary-glow)]'
                  : 'w-2 bg-[var(--border)] hover:bg-[var(--primary)]/30'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}