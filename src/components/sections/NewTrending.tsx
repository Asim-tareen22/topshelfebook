"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { BookOpen, Star, MapPin, Globe as GlobeIcon } from "lucide-react";
import Image from "next/image";
import type { GlobeConfig } from "../ui/globe";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

// ==================== TYPES ====================
interface Book {
  id: number;
  title: string;
  author: string;
  rating: string;
  images: string[];
  currentImageIndex: number;
}

interface Location {
  city: string;
  country: string;
  lat: number;
  lng: number;
  flag: string;
}

// ==================== DATA ====================
const BOOK_IMAGES = [
  "/Assets/1e6f4a5a5e88f216c59a63804fd25b882e2166b4.jpg",
  "/Assets/6a421c7d2d8618b272355c7dfb44f869fca74215.jpg",
  "/Assets/7d312b893102d5d55541899b85c5dea7d73f8e4c.jpg",
];

const BOOKS_DATA: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    rating: "4.8",
    images: BOOK_IMAGES,
    currentImageIndex: 0,
  },
  {
    id: 2,
    title: "The Seven Husbands",
    author: "Taylor Jenkins Reid",
    rating: "4.7",
    images: BOOK_IMAGES,
    currentImageIndex: 0,
  },
  {
    id: 3,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    rating: "4.8",
    images: BOOK_IMAGES,
    currentImageIndex: 0,
  },
  {
    id: 4,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    rating: "4.5",
    images: BOOK_IMAGES,
    currentImageIndex: 0,
  },
  {
    id: 5,
    title: "Becoming",
    author: "Michelle Obama",
    rating: "4.9",
    images: BOOK_IMAGES,
    currentImageIndex: 0,
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: "4.6",
    images: BOOK_IMAGES,
    currentImageIndex: 0,
  },
];

const LOCATIONS: Location[] = [
  { city: "New York", country: "USA", lat: 40.7128, lng: -74.006, flag: "🇺🇸" },
  { city: "Los Angeles", country: "USA", lat: 34.0522, lng: -118.2437, flag: "🇺🇸" },
  { city: "London", country: "UK", lat: 51.5072, lng: -0.1276, flag: "🇬🇧" },
  { city: "Paris", country: "France", lat: 48.8566, lng: 2.3522, flag: "🇫🇷" },
  { city: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503, flag: "🇯🇵" },
  { city: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, flag: "🇦🇺" },
  { city: "Dubai", country: "UAE", lat: 25.2048, lng: 55.2708, flag: "🇦🇪" },
  { city: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, flag: "🇸🇬" },
];

const GLOBE_CONFIG: GlobeConfig = {
  pointSize: 8,
  globeColor: "#7f1d1d", // primary-dark fallback
  showAtmosphere: true,
  atmosphereColor: "#991b1b",
  atmosphereAltitude: 0.15,
  emissive: "#7f1d1d",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(127,29,29,0.7)",
  ambientLight: "#991b1b",
  directionalLeftLight: "#dc2626",
  directionalTopLight: "#b91c1c",
  pointLight: "#dc2626",
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 40.7128, lng: -74.006 },
  autoRotate: true,
  autoRotateSpeed: 1,
};

const SAMPLE_ARCS = [
  { order: 1, startLat: 40.7128, startLng: -74.006, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: "#dc2626" },
  { order: 2, startLat: 40.7128, startLng: -74.006, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.35, color: "#b91c1c" },
  { order: 3, startLat: 40.7128, startLng: -74.006, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.5, color: "#991b1b" },
  { order: 4, startLat: 40.7128, startLng: -74.006, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.4, color: "#7f1d1d" },
  { order: 5, startLat: 34.0522, startLng: -118.2437, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.4, color: "#dc2626" },
  { order: 6, startLat: 34.0522, startLng: -118.2437, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.3, color: "#b91c1c" },
  { order: 7, startLat: 34.0522, startLng: -118.2437, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.5, color: "#991b1b" },
  { order: 8, startLat: 51.5072, startLng: -0.1276, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.4, color: "#7f1d1d" },
  { order: 9, startLat: 48.8566, startLng: 2.3522, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.35, color: "#dc2626" },
  { order: 10, startLat: 35.6762, startLng: 139.6503, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.3, color: "#b91c1c" },
];

// ==================== COMPONENTS ====================

const BookCard: React.FC<{
  book: Book;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
  currentImage: string;
  isVisible: boolean;
}> = ({ book, isSelected, onSelect, index, currentImage, isVisible }) => (
  <div
    className={`relative transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100 rotate-0" : "-translate-y-20 opacity-0 -rotate-10"
      }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <button
      onClick={onSelect}
      className={`relative w-full h-56 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${isSelected
          ? "ring-4 ring-[var(--primary-dark)] shadow-2xl"
          : "ring-2 ring-[var(--border)] shadow-lg"
        } bg-[var(--card-bg)]`}
    >
      <div className="absolute inset-0">
        <Image
          src={currentImage}
          alt={book.title}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-between p-4">
        <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
          <BookOpen className="w-5 h-5 text-white" />
        </div>

        <div className="text-left">
          <h4 className="text-sm font-black text-white mb-1 line-clamp-2 drop-shadow-lg uppercase tracking-tight">
            {book.title}
          </h4>
          <p className="text-xs text-white/90 truncate drop-shadow font-bold italic">{book.author}</p>
          <div className="flex items-center mt-2">
            <Star className="w-3 h-3 text-[var(--accent)] fill-current" />
            <span className="text-white ml-1 text-xs font-black">{book.rating}</span>
          </div>
        </div>
      </div>

      {isSelected && (
        <div className="absolute -inset-1 ring-4 ring-[var(--primary)] rounded-xl animate-pulse" />
      )}
    </button>

    {/* Tooltip */}
    <div
      className={`absolute -top-16 left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-[var(--background)] px-4 py-2 rounded-lg text-xs font-black whitespace-nowrap shadow-2xl z-50 transition-all duration-300 ${isSelected ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4 pointer-events-none"
        }`}
    >
      {book.title}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--foreground)] rotate-45" />
    </div>
  </div>
);

// ==================== MAIN COMPONENT ====================
export function NewTrending() {
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const [books, setBooks] = useState(BOOKS_DATA);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
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

  // Rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBooks((prevBooks) =>
        prevBooks.map((book) => ({
          ...book,
          currentImageIndex: (book.currentImageIndex + 1) % book.images.length,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[var(--bg-cream)] overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary-dark) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--primary)]/10 rounded-full blur-3xl animate-blob-2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SINGLE CENTERED HEADING */}
        <div className="text-center mb-16">
          <div
            className={`inline-block mb-4 transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] rounded-full shadow-lg">
              <GlobeIcon className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-white text-sm font-black tracking-wide">
                GLOBAL DISTRIBUTION
              </span>
            </div>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <span className="text-gray-900">Trending </span>
            <span className="bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-dark)] bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>

          <p
            className={`text-lg text-gray-700 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            Our books reach readers across the globe. Explore connections from USA to major cities worldwide.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT: GLOBE */}
          <div
            className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
          >
            {/* Globe Container */}
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <World data={SAMPLE_ARCS} globeConfig={GLOBE_CONFIG} />

              {/* Location Tooltips - Floating around globe */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="relative w-full h-full">
                  {LOCATIONS.map((location, i) => {
                    const angle = (i / LOCATIONS.length) * 360;
                    const radius = 45; // percentage from center
                    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                    return (
                      <div
                        key={location.city}
                        className={`absolute pointer-events-auto transition-all duration-1000`}
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          transitionDelay: `${i * 100 + 500}ms`,
                          opacity: isVisible ? 1 : 0,
                          scale: isVisible ? 1 : 0,
                        } as any}
                        onMouseEnter={() => setHoveredLocation(location.city)}
                        onMouseLeave={() => setHoveredLocation(null)}
                      >
                        {/* Marker Dot */}
                        <div
                          className="relative w-4 h-4 cursor-pointer hover:scale-150 transition-transform"
                        >
                          <div className="absolute inset-0 bg-[var(--primary)] rounded-full shadow-lg" />
                          <div
                            className="absolute inset-0 bg-[var(--primary)] rounded-full animate-ping opacity-75"
                          />
                        </div>

                        {/* Tooltip */}
                        <div
                          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none transition-all duration-300 ${hoveredLocation === location.city ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4"
                            }`}
                        >
                          <div className="bg-gray-900 text-white px-4 py-2.5 rounded-lg shadow-2xl whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-[var(--primary)]" />
                              <div>
                                <div className="font-black text-sm flex items-center gap-1.5 uppercase tracking-tight">
                                  <span className="text-lg">{location.flag}</span>
                                  <span>{location.city}</span>
                                </div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                  {location.country}
                                </div>
                              </div>
                            </div>
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: "Countries", value: "50+" },
                { label: "Readers", value: "1M+" },
                { label: "Books", value: "10K+" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 bg-white/50 backdrop-blur rounded-xl border border-[var(--primary-dark)]/10 shadow-lg transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  style={{ transitionDelay: `${i * 100 + 800}ms` }}
                >
                  <div className="text-2xl font-black text-[var(--primary-dark)] tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: BOOK CARDS */}
          <div
            className={`w-full transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {books.map((book, index) => (
                <BookCard
                  key={book.id}
                  book={book}
                  isSelected={selectedBook === book.id}
                  onSelect={() =>
                    setSelectedBook((prev) => (prev === book.id ? null : book.id))
                  }
                  index={index}
                  currentImage={book.images[book.currentImageIndex]}
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