"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";

const BOOKS = [
  {
    id: 1,
    title: "The Art of Ghostwriting",
    author: "John Smith",
    category: "Non-Fiction",
    image: "/Assets/1-1-180x300.webp",
  },
  {
    id: 2,
    title: "Digital Storytelling",
    author: "Jane Doe",
    category: "Education",
    image: "/Assets/2-1-180x300.webp",
  },
  {
    id: 3,
    title: "Modern Publishing",
    author: "Alex Wilson",
    category: "Business",
    image: "/Assets/3-1-180x300.webp",
  },
  {
    id: 4,
    title: "Creative Writing",
    author: "Sarah Parker",
    category: "Literature",
    image: "/Assets/4-1-180x300.webp",
  },
  {
    id: 5,
    title: "Book Marketing 101",
    author: "Mike Taylor",
    category: "Marketing",
    image: "/Assets/5-1-180x300.webp",
  },
  {
    id: 6,
    title: "The Novelist Guide",
    author: "Emily White",
    category: "Fiction",
    image: "/Assets/6-1-180x300.webp",
  },
];

// Minimum swipe distance for navigation
const MIN_SWIPE_DISTANCE = 50;

export function BooksShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchCurrentX = useRef<number>(0);

  // Responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Reset index when items per page changes
  useEffect(() => {
    const maxIndex = Math.max(0, BOOKS.length - itemsPerPage);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, currentIndex]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, BOOKS.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(Math.min(index, maxIndex));
    },
    [maxIndex],
  );

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchCurrentX.current - touchStartX.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = touchCurrentX.current - touchStartX.current;

    if (Math.abs(diff) > MIN_SWIPE_DISTANCE) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setDragOffset(0);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    touchCurrentX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    touchCurrentX.current = e.clientX;
    const diff = touchCurrentX.current - touchStartX.current;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = touchCurrentX.current - touchStartX.current;

    if (Math.abs(diff) > MIN_SWIPE_DISTANCE) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Calculate transform
  const slideWidth = 100 / itemsPerPage;
  const baseTransform = currentIndex * slideWidth;
  const dragTransform = isDragging
    ? (dragOffset / (sectionRef.current?.offsetWidth || 1)) * 100
    : 0;

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--background)] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--primary)]/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--secondary)]/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              {/* Badge */}
              <div
                className={`
                  inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 
                  rounded-full bg-[var(--foreground)]/5 border border-[var(--border)] 
                  backdrop-blur-sm transform transition-all duration-700
                  ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}
                `}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent)]" />
                <span className="text-[var(--foreground)] text-[10px] sm:text-xs font-black tracking-wider sm:tracking-widest uppercase">
                  Featured Gallery
                </span>
              </div>

              {/* Title */}
              <h2
                className={`
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                  font-black text-[var(--foreground)] tracking-tight leading-tight
                  transform transition-all duration-700 delay-100
                  ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                `}
              >
                Explore Our{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent italic">
                  Masterpieces
                </span>
              </h2>
            </div>

            {/* Navigation Buttons - Desktop */}
            <div
              className={`
                hidden sm:flex gap-3 transform transition-all duration-700 delay-200
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
              `}
            >
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="
                  w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 
                  rounded-xl md:rounded-2xl flex items-center justify-center 
                  border-2 border-[var(--border)] text-[var(--foreground)] 
                  hover:bg-[var(--primary)] hover:border-[var(--primary)] 
                  hover:text-white hover:shadow-lg hover:shadow-[var(--primary)]/25
                  active:scale-95 transition-all duration-300 group
                "
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="
                  w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 
                  rounded-xl md:rounded-2xl flex items-center justify-center 
                  border-2 border-[var(--border)] text-[var(--foreground)] 
                  hover:bg-[var(--primary)] hover:border-[var(--primary)] 
                  hover:text-white hover:shadow-lg hover:shadow-[var(--primary)]/25
                  active:scale-95 transition-all duration-300 group
                "
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`
              flex transition-transform select-none
              ${isDragging ? "duration-0 cursor-grabbing" : "duration-500 ease-out cursor-grab"}
            `}
            style={{
              transform: `translateX(calc(-${baseTransform}% + ${dragTransform}%))`,
            }}
          >
            {BOOKS.map((book, index) => (
              <div
                key={book.id}
                className={`
                  flex-shrink-0 p-2 sm:p-3 
                  transition-all duration-500
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{
                  width: `${slideWidth}%`,
                  transitionDelay: `${index * 75}ms`,
                }}
              >
                <div
                  className="
                  group relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden 
                  bg-[var(--card-bg)] border-2 border-[var(--border)] 
                  hover:border-[var(--primary)] transition-all duration-500 
                  hover:shadow-2xl hover:shadow-[var(--primary)]/20 shadow-lg
                  transform hover:-translate-y-1
                "
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                  />

                  {/* Gradient Overlay - Always visible on mobile, hover on desktop */}
                  <div
                    className="
                    absolute inset-0 
                    bg-gradient-to-t from-black/90 via-black/20 to-transparent 
                    sm:opacity-0 sm:group-hover:opacity-100 
                    transition-all duration-500
                  "
                  >
                    <div
                      className="
                      absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6
                      sm:translate-y-4 sm:group-hover:translate-y-0 
                      transition-transform duration-500
                    "
                    >
                      {/* Category Badge */}
                      <div
                        className="
                        inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 
                        rounded-full bg-[var(--primary)] text-white 
                        text-[9px] sm:text-[10px] font-black uppercase tracking-wider mb-2 sm:mb-3
                      "
                      >
                        {book.category}
                      </div>

                      {/* Title */}
                      <h3
                        className="
                        text-base sm:text-lg md:text-xl font-black text-white 
                        mb-0.5 sm:mb-1 line-clamp-2
                      "
                      >
                        {book.title}
                      </h3>

                      {/* Author */}
                      <p className="text-gray-300 text-xs sm:text-sm font-medium">
                        {book.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Indicator */}
          <div
            className="
            sm:hidden absolute inset-x-0 bottom-4 flex justify-center 
            pointer-events-none
          "
          >
            <div
              className="
              px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm
              text-white/80 text-xs font-medium
              animate-pulse
            "
            >
              ← Swipe →
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div
          className={`
            mt-6 sm:mt-8 md:mt-10 lg:mt-12 
            flex flex-col sm:flex-row items-center justify-between gap-4
            transform transition-all duration-700 delay-300
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="
                w-12 h-12 rounded-xl flex items-center justify-center 
                border-2 border-[var(--border)] text-[var(--foreground)] 
                hover:bg-[var(--primary)] hover:border-[var(--primary)] 
                hover:text-white active:scale-95 transition-all duration-300
              "
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="
                w-12 h-12 rounded-xl flex items-center justify-center 
                border-2 border-[var(--border)] text-[var(--foreground)] 
                hover:bg-[var(--primary)] hover:border-[var(--primary)] 
                hover:text-white active:scale-95 transition-all duration-300
              "
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`
                  h-2 sm:h-2.5 rounded-full transition-all duration-500
                  ${
                    currentIndex === i
                      ? "w-8 sm:w-10 md:w-12 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-md shadow-[var(--primary)]/30"
                      : "w-2 sm:w-2.5 bg-[var(--border)] hover:bg-[var(--primary)]/40"
                  }
                `}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="hidden sm:flex items-center gap-2 text-sm text-[var(--foreground)]/60 font-medium">
            <span className="text-[var(--foreground)] font-bold text-lg">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(maxIndex + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
