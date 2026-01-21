"use client";

import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import dynamic from "next/dynamic";
import { BookOpen, Star, MapPin, Globe as GlobeIcon } from "lucide-react";
import Image from "next/image";
import type { GlobeConfig } from "../ui/globe";

// Lazy load Globe - it's very heavy
const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-900/20 rounded-full">
      <div className="text-gray-400">Loading Globe...</div>
    </div>
  ),
});

// ==================== DATA ====================
const BOOK_IMAGES = [
  "/Assets/1e6f4a5a5e88f216c59a63804fd25b882e2166b4.jpg",
  "/Assets/6a421c7d2d8618b272355c7dfb44f869fca74215.jpg",
  "/Assets/7d312b893102d5d55541899b85c5dea7d73f8e4c.jpg",
];

const BOOKS_DATA = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", rating: "4.8" },
  {
    id: 2,
    title: "The Seven Husbands",
    author: "Taylor Jenkins Reid",
    rating: "4.7",
  },
  {
    id: 3,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    rating: "4.8",
  },
  {
    id: 4,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    rating: "4.5",
  },
  { id: 5, title: "Becoming", author: "Michelle Obama", rating: "4.9" },
  { id: 6, title: "The Alchemist", author: "Paulo Coelho", rating: "4.6" },
];

const LOCATIONS = [
  { city: "New York", country: "USA", lat: 40.7128, lng: -74.006, flag: "🇺🇸" },
  { city: "London", country: "UK", lat: 51.5072, lng: -0.1276, flag: "🇬🇧" },
  { city: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503, flag: "🇯🇵" },
  {
    city: "Sydney",
    country: "Australia",
    lat: -33.8688,
    lng: 151.2093,
    flag: "🇦🇺",
  },
];

const GLOBE_CONFIG: GlobeConfig = {
  pointSize: 6,
  globeColor: "#7f1d1d",
  showAtmosphere: true,
  atmosphereColor: "#991b1b",
  atmosphereAltitude: 0.1,
  emissive: "#7f1d1d",
  emissiveIntensity: 0.08,
  shininess: 0.8,
  polygonColor: "rgba(127,29,29,0.6)",
  ambientLight: "#991b1b",
  directionalLeftLight: "#dc2626",
  directionalTopLight: "#b91c1c",
  pointLight: "#dc2626",
  arcTime: 2500,
  arcLength: 0.8,
  rings: 1,
  maxRings: 2,
  initialPosition: { lat: 40.7128, lng: -74.006 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const SAMPLE_ARCS = [
  {
    order: 1,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: "#dc2626",
  },
  {
    order: 2,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.4,
    color: "#991b1b",
  },
  {
    order: 3,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.35,
    color: "#b91c1c",
  },
];

// ==================== MEMOIZED COMPONENTS ====================

interface BookCardProps {
  book: (typeof BOOKS_DATA)[0];
  isSelected: boolean;
  onSelect: () => void;
  imageIndex: number;
}

const BookCard = memo(function BookCard({
  book,
  isSelected,
  onSelect,
  imageIndex,
}: BookCardProps) {
  const currentImage = BOOK_IMAGES[imageIndex % BOOK_IMAGES.length];

  return (
    <button
      onClick={onSelect}
      className={`relative w-full h-56 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        isSelected
          ? "ring-4 ring-red-700 shadow-xl"
          : "ring-2 ring-gray-200 shadow-md hover:ring-red-500/50"
      }`}
    >
      <Image
        src={currentImage}
        alt={book.title}
        fill
        className="object-cover"
        sizes="200px"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-between p-4">
        <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-900 rounded-lg flex items-center justify-center shadow-lg">
          <BookOpen className="w-5 h-5 text-white" />
        </div>

        <div className="text-left">
          <h4 className="text-sm font-black text-white mb-1 line-clamp-2 uppercase tracking-tight">
            {book.title}
          </h4>
          <p className="text-xs text-white/90 truncate font-bold italic">
            {book.author}
          </p>
          <div className="flex items-center mt-2">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-white ml-1 text-xs font-black">
              {book.rating}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
});

const LocationMarker = memo(function LocationMarker({
  location,
  index,
  isHovered,
  onHover,
}: {
  location: (typeof LOCATIONS)[0];
  index: number;
  isHovered: boolean;
  onHover: (city: string | null) => void;
}) {
  const angle = (index / LOCATIONS.length) * 360;
  const radius = 42;
  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className="absolute pointer-events-auto"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => onHover(location.city)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative w-3 h-3 cursor-pointer hover:scale-150 transition-transform">
        <div className="absolute inset-0 bg-red-600 rounded-full shadow-lg" />
      </div>

      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none">
          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-red-500" />
              <div>
                <div className="font-black text-xs flex items-center gap-1">
                  <span>{location.flag}</span>
                  <span>{location.city}</span>
                </div>
                <div className="text-[9px] text-gray-400 font-bold uppercase">
                  {location.country}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        </div>
      )}
    </div>
  );
});

// ==================== MAIN COMPONENT ====================
export const NewTrending = memo(function NewTrending() {
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showGlobe, setShowGlobe] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay globe loading for smoother initial render
          setTimeout(() => setShowGlobe(true), 500);
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Rotate images every 4 seconds (slower for performance)
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % BOOK_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleSelectBook = useCallback((id: number) => {
    setSelectedBook((prev) => (prev === id ? null : id));
  }, []);

  const handleHoverLocation = useCallback((city: string | null) => {
    setHoveredLocation(city);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[var(--bg-cream)] overflow-hidden py-20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 100vh" }}
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary-dark) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Static Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block mb-4 transition-all duration-500 ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-800 to-red-900 rounded-full shadow-lg">
              <GlobeIcon className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-black tracking-wide">
                GLOBAL DISTRIBUTION
              </span>
            </div>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 transition-all duration-500 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <span className="text-gray-900">Trending </span>
            <span className="bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>

          <p
            className={`text-lg text-gray-700 max-w-2xl mx-auto transition-all duration-500 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Our books reach readers across the globe.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT: GLOBE */}
          <div
            className={`relative transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {showGlobe ? (
                <World data={SAMPLE_ARCS} globeConfig={GLOBE_CONFIG} />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-red-900/20 to-red-800/10 animate-pulse" />
                </div>
              )}

              {/* Location Markers */}
              {isVisible && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="relative w-full h-full">
                    {LOCATIONS.map((location, i) => (
                      <LocationMarker
                        key={location.city}
                        location={location}
                        index={i}
                        isHovered={hoveredLocation === location.city}
                        onHover={handleHoverLocation}
                      />
                    ))}
                  </div>
                </div>
              )}
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
                  className={`text-center p-4 bg-white/50 rounded-xl border border-red-900/10 shadow-md transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 400}ms` }}
                >
                  <div className="text-2xl font-black text-red-800">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: BOOK CARDS */}
          <div
            className={`w-full transition-all duration-500 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {BOOKS_DATA.map((book, index) => (
                <div
                  key={book.id}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80 + 200}ms` }}
                >
                  <BookCard
                    book={book}
                    isSelected={selectedBook === book.id}
                    onSelect={() => handleSelectBook(book.id)}
                    imageIndex={imageIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
