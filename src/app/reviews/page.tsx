'use client';

import React, { useState, useEffect } from 'react';
import {
  Star,
  Quote,
  ThumbsUp,
  MessageCircle,
  TrendingUp,
  Award,
  Users,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle,
  Trophy,
  Heart,
  Globe
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bestselling Author",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    date: "2 days ago",
    review: "TopShelf transformed my manuscript into a stunning ebook! The team was professional, responsive, and delivered beyond my expectations. My book sales increased by 300% within the first month!",
    verified: true,
    helpful: 124
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Fiction Writer",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    date: "1 week ago",
    review: "Absolutely incredible service! From formatting to distribution, everything was handled seamlessly. The marketing support they provided was outstanding. Highly recommend to all authors!",
    verified: true,
    helpful: 98
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Non-Fiction Author",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    date: "2 weeks ago",
    review: "Best investment I've made for my writing career. The ebook looks professional, loads fast, and readers love it. Customer support is exceptional - they answered all my questions promptly.",
    verified: true,
    helpful: 156
  }
];

const STATS = [
  { icon: Users, value: "10K+", label: "Happy Authors", color: "text-blue-500" },
  { icon: BookOpen, value: "50K+", label: "Books Published", color: "text-purple-500" },
  { icon: Trophy, value: "4.9/5", label: "Average Rating", color: "text-orange-500" },
  { icon: Globe, value: "98%", label: "Success Rate", color: "text-green-500" }
];

const RATING_BREAKDOWN = [
  { stars: 5, percentage: 94 },
  { stars: 4, percentage: 4 },
  { stars: 3, percentage: 1 },
  { stars: 2, percentage: 0.5 },
  { stars: 1, percentage: 0.5 }
];

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextReview = () => setActiveReview((prev) => (prev + 1) % REVIEWS.length);
  const prevReview = () => setActiveReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <main className="bg-background">
      <HeroSection />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-black text-[var(--primary)] mb-1">{stat.value}</div>
                  <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Rating Breakdown */}
            <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-black text-[var(--primary)] mb-10">Rating Breakdown</h2>
              <div className="space-y-6">
                {RATING_BREAKDOWN.map((item) => (
                  <div key={item.stars} className="flex items-center gap-6">
                    <div className="flex items-center gap-2 w-16">
                      <span className="font-bold text-gray-700">{item.stars}</span>
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    </div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--primary)] to-accent rounded-full transition-all duration-1000"
                        style={{ width: mounted ? `${item.percentage}%` : '0%' }}
                      />
                    </div>
                    <div className="w-16 text-right font-black text-[var(--primary)]">{item.percentage}%</div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-100 text-center">
                <div className="text-5xl font-black text-[var(--primary)] mb-2">4.9</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-accent text-accent" />)}
                </div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">Overall Excellence</div>
              </div>
            </div>

            {/* Testimonial Slider */}
            <div className="relative">
              <div className="bg-[var(--primary)] text-white p-12 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <Quote className="absolute top-10 right-10 w-32 h-32 text-white/5" />

                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="relative w-20 h-20">
                      <Image
                        src={REVIEWS[activeReview].image}
                        alt={REVIEWS[activeReview].name}
                        fill
                        className="rounded-full object-cover border-4 border-white/20"
                      />
                      {REVIEWS[activeReview].verified && (
                        <div className="absolute -bottom-1 -right-1 bg-green-500 p-1 rounded-full border-2 border-[var(--primary)]">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black">{REVIEWS[activeReview].name}</h4>
                      <p className="text-white/70 font-bold">{REVIEWS[activeReview].role}</p>
                    </div>
                  </div>

                  <p className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed">
                    "{REVIEWS[activeReview].review}"
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-white/10">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={prevReview}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all active:scale-95"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextReview}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all active:scale-95"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <ReviewForm selectedRating={selectedRating} setSelectedRating={setSelectedRating} hoveredStar={hoveredStar} setHoveredStar={setHoveredStar} />

      <CTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8 animate-fade-in-up">
          <Award className="w-5 h-5 text-accent" />
          <span className="font-bold">Author Choice Awards 2024</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in-up [animation-delay:200ms]">
          Real Stories, <span className="text-accent">Real Success</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-0 animate-fade-in-up [animation-delay:400ms] max-w-3xl mx-auto">
          Discover why 10,000+ authors trust TopShelf to bring their creative visions to life and reach global audiences.
        </p>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute top-1/4 left-10 animate-pulse"><Sparkles className="w-8 h-8 text-accent/40" /></div>
      <div className="absolute bottom-1/4 right-10 animate-pulse [animation-delay:1s]"><Sparkles className="w-12 h-12 text-accent/30" /></div>
    </section>
  );
}

function ReviewForm({ selectedRating, setSelectedRating, hoveredStar, setHoveredStar }: any) {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-6">Leave Your <span className="text-accent">Review</span></h2>
              <p className="text-gray-500 text-lg">Your feedback helps us continue to provide world-class service to authors worldwide.</p>
            </div>

            <form className="space-y-10">
              <div className="flex flex-col items-center gap-6 p-8 bg-gray-50 rounded-3xl">
                <label className="text-xl font-black text-[var(--primary)] uppercase tracking-widest">Rate Your Experience</label>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setSelectedRating(star)}
                      className="transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`w-12 h-12 transition-all duration-300 ${star <= (hoveredStar || selectedRating)
                            ? 'fill-accent text-accent'
                            : 'text-gray-300'
                          }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-gray-500 uppercase tracking-widest ml-1">Your Story</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your publishing journey..."
                  className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all placeholder:text-gray-300 resize-none"
                />
              </div>

              <button className="w-full bg-[var(--primary)] text-white py-6 rounded-2xl font-black text-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-[0.98] flex items-center justify-center gap-4">
                <MessageCircle className="w-8 h-8" />
                Submit My Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-[var(--primary-dark)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Ready to Write Your <span className="text-accent">Success Story?</span></h2>
        <p className="text-xl md:text-2xl text-white/80 mb-12">Join the thousands of authors who have transformed their creative dreams into literary bestsellers with TopShelf.</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/contact-us">
            <button className="bg-white text-[var(--primary)] px-12 py-5 rounded-full font-black text-xl hover:shadow-2xl hover:scale-105 transition-all">Get Started Today</button>
          </Link>
          <Link href="/services">
            <button className="border-2 border-white px-12 py-5 rounded-full font-black text-xl hover:bg-white/10 hover:scale-105 transition-all">Explore Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
}