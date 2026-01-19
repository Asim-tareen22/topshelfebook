'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Star, Quote, Sparkles, Award, TrendingUp } from 'lucide-react';

export function VideoReviewsSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] animate-grid" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/30 rounded-full blur-3xl animate-blob opacity-40 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl animate-blob-2 opacity-40 pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 scroll-animate visible">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full border border-orange-500/30 mb-6 animate-bounce-slow">
            <Sparkles className="w-5 h-5 text-orange-500 animate-spin-slow" />
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up">
            What Our Clients
            <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Are Saying
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in delay-200">
            Real stories from real authors who transformed their dreams into bestsellers
          </p>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-2 mt-6 animate-fade-in delay-300">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-orange-500 text-orange-500 animate-twinkle" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
            <span className="ml-3 text-white font-bold text-xl">5.0</span>
            <span className="text-gray-400">/ 5 Based on 500+ Reviews</span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Video 1 */}
          <VideoReviewCard
            videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            thumbnailSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop"
            authorName="Sarah Johnson"
            authorTitle="Best Selling Author"
            authorRole="Fiction Writer"
            booksPublished="12+"
            review="Working with TOP SHELF was life-changing! They transformed my manuscript into a bestseller. The team's professionalism and creativity exceeded all expectations. I couldn't have done it without them!"
            delay="0s"
          />

          {/* Video 2 */}
          <VideoReviewCard
            videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            thumbnailSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            authorName="Michael Chen"
            authorTitle="Award-Winning Writer"
            authorRole="Non-Fiction Author"
            booksPublished="8+"
            review="Incredible service from start to finish! The ghostwriting and editing team brought my vision to life perfectly. The attention to detail was outstanding. High recommend to any aspiring author!"
            delay="0.2s"
          />
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            { number: '500+', label: 'Happy Clients', icon: Star },
            { number: '1000+', label: 'Books Published', icon: TrendingUp },
            { number: '50+', label: 'Bestsellers', icon: Award },
            { number: '98%', label: 'Satisfaction Rate', icon: Sparkles },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

                <div className="relative text-center p-6 rounded-2xl bg-gradient-to-br from-red-600/10 via-orange-600/10 to-red-600/10 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                  <Icon className="w-8 h-8 text-orange-500 mx-auto mb-3 transition-transform group-hover:rotate-12" />
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2 transition-transform group-hover:scale-110">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-semibold">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Video Review Card Component
function VideoReviewCard({
  videoSrc,
  thumbnailSrc,
  authorName,
  authorTitle,
  authorRole,
  booksPublished,
  review,
  delay = '0s',
}: {
  videoSrc: string;
  thumbnailSrc: string;
  authorName: string;
  authorTitle: string;
  authorRole: string;
  booksPublished: string;
  review: string;
  delay?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="group relative animate-fade-in-up" style={{ animationDelay: delay }}>
      {/* Main Card Container */}
      <div className="relative">
        {/* Animated Border Glow */}
        <div className="absolute -inset-[2px] bg-gradient-to-r from-red-600 via-orange-500 via-red-500 to-orange-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

        {/* Card Content */}
        <div className="relative bg-gradient-to-br from-gray-900 via-red-950/20 to-gray-900 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
          {/* Video Container */}
          <div
            className="relative aspect-video bg-black overflow-hidden cursor-pointer"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onClick={togglePlay}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={thumbnailSrc}
              loop
              playsInline
              muted={isMuted}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/30 to-black/60" />

            {/* Play/Pause Button */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
                }`}
            >
              <div className="relative group/play">
                {/* Glow Ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full blur-xl animate-pulse-glow" />

                {/* Play Button */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-red-600 via-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/30 transition-transform group-hover/play:scale-110 active:scale-95">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>

            {/* Video Controls */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="w-12 h-12 bg-gradient-to-r from-red-600/80 to-orange-600/80 backdrop-blur-xl rounded-full flex items-center justify-center hover:from-red-500 hover:to-orange-500 transition-all border border-white/20 shadow-lg hover:scale-110 active:scale-95"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" fill="white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-red-600/50 transition-all border border-white/20 hover:scale-110 active:scale-95"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFullscreen();
                    }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-red-600/50 transition-all border border-white/20 hover:scale-110 active:scale-95"
                  >
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 w-2 h-2 rounded-full blur-sm animate-particle opacity-0"
                  style={{
                    left: `${Math.random() * 100}%`,
                    background: i % 2 === 0 ? '#dc2626' : '#ea580c',
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Review Content */}
          <div className="p-6 lg:p-8 bg-gradient-to-br from-white/5 to-red-950/10">
            {/* Quote Icon */}
            <div className="relative w-14 h-14 mb-6 animate-scale-in-rotate">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full blur-lg animate-pulse-glow" />
              <div className="relative w-full h-full bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center border-2 border-white/20 shadow-xl">
                <Quote className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-200 text-lg leading-relaxed mb-6 italic font-medium animate-fade-in delay-200">
              "{review}"
            </p>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6 animate-fade-in delay-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500 transition-transform hover:scale-125 hover:rotate-12" />
              ))}
              <span className="ml-2 text-orange-400 font-bold">5.0</span>
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent mb-6" />

            {/* Author Info */}
            <div className="flex items-center justify-between gap-4 animate-fade-in delay-400">
              <div className="flex items-center gap-4">
                {/* Avatar with Glow */}
                <div className="relative">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-full blur-lg animate-pulse-glow" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 via-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-black text-2xl border-2 border-white/30 shadow-xl">
                    {authorName.charAt(0)}
                  </div>
                </div>

                {/* Author Details */}
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">{authorName}</h4>
                  <p className="text-orange-400 text-sm font-semibold mb-1">{authorTitle}</p>
                  <p className="text-gray-400 text-xs">{authorRole}</p>
                </div>
              </div>

              {/* Books Badge */}
              <div className="px-4 py-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full border border-orange-500/30 transition-transform hover:scale-105">
                <div className="text-orange-400 font-black text-lg">{booksPublished}</div>
                <div className="text-gray-400 text-xs font-semibold">Books</div>
              </div>
            </div>
          </div>

          {/* Corner Shine Effect */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/30 via-red-400/20 to-transparent rounded-bl-full pointer-events-none opacity-0 animate-shine" />

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600" />
        </div>
      </div>
    </div>
  );
}