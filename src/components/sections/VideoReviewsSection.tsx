"use client";

import { useState, useRef, memo, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Star,
  Quote,
  Sparkles,
  Award,
  TrendingUp,
} from "lucide-react";

interface VideoCardProps {
  videoSrc: string;
  thumbnailSrc: string;
  authorName: string;
  authorTitle: string;
  authorRole: string;
  booksPublished: string;
  review: string;
}

const VideoCard = memo(function VideoCard({
  videoSrc,
  thumbnailSrc,
  authorName,
  authorTitle,
  authorRole,
  booksPublished,
  review,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    },
    [isMuted],
  );

  return (
    <div className="group relative">
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
        {/* Video Container */}
        <div
          className="relative aspect-video bg-black overflow-hidden cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={thumbnailSrc}
            loop
            playsInline
            muted={isMuted}
            preload="none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

          {/* Play Button */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-red-600/80 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" fill="white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Review Content */}
        <div className="p-6 lg:p-8 bg-gray-900/50">
          <Quote className="w-12 h-12 text-orange-500/30 mb-4" />

          <p className="text-gray-200 text-lg leading-relaxed mb-4 italic">
            "{review}"
          </p>

          <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-orange-500 text-orange-500"
              />
            ))}
            <span className="ml-2 text-orange-400 font-bold">5.0</span>
          </div>

          <div className="h-px bg-gray-700 mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white/20">
                {authorName.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">{authorName}</h4>
                <p className="text-orange-400 text-sm font-semibold">
                  {authorTitle}
                </p>
                <p className="text-gray-400 text-xs">{authorRole}</p>
              </div>
            </div>

            <div className="px-4 py-2 bg-red-600/20 rounded-full border border-orange-500/30 text-center">
              <div className="text-orange-400 font-black text-lg">
                {booksPublished}
              </div>
              <div className="text-gray-400 text-xs font-semibold">Books</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export function VideoReviewsSection() {
  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden bg-black"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 1000px" }}
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/20 rounded-full border border-orange-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real stories from real authors who transformed their dreams into
            bestsellers
          </p>

          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-orange-500 text-orange-500"
              />
            ))}
            <span className="ml-3 text-white font-bold text-xl">5.0</span>
            <span className="text-gray-400">/ 5 Based on 500+ Reviews</span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <VideoCard
            videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            thumbnailSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop"
            authorName="Sarah Johnson"
            authorTitle="Best Selling Author"
            authorRole="Fiction Writer"
            booksPublished="12+"
            review="Working with TOP SHELF was life-changing! They transformed my manuscript into a bestseller."
          />

          <VideoCard
            videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            thumbnailSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            authorName="Michael Chen"
            authorTitle="Award-Winning Writer"
            authorRole="Non-Fiction Author"
            booksPublished="8+"
            review="Incredible service from start to finish! The ghostwriting team brought my vision to life perfectly."
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            { number: "500+", label: "Happy Clients", icon: Star },
            { number: "1000+", label: "Books Published", icon: TrendingUp },
            { number: "50+", label: "Bestsellers", icon: Award },
            { number: "98%", label: "Satisfaction Rate", icon: Sparkles },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700 hover:-translate-y-1 transition-transform"
              >
                <Icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-semibold text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
