'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Tag,
  TrendingUp,
  Clock,
  ChevronRight,
  Mail,
  Sparkles,
  BookOpen,
  Newspaper,
  Star,
  Eye
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const CATEGORIES = ["All", "Publishing", "Design", "Marketing", "Author Success", "Ghostwriting", "Literary Trends"];

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Digital Publishing: Trends to Watch in 2024",
    excerpt: "Explore how AI and immersive technologies are reshaping the way we consume and create literature.",
    category: "Publishing",
    author: "Elena Rivers",
    date: "May 15, 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    readTime: "8 min read",
    views: "2.5K",
    featured: true
  },
  {
    id: 2,
    title: "10 Essential Tips for Creating a Bestselling Book Cover",
    excerpt: "First impressions matter. Learn the psychology behind book cover design that converts browsers into readers.",
    category: "Design",
    author: "Marcus Chen",
    date: "May 12, 2024",
    image: "https://images.unsplash.com/photo-1543004218-ee1411045231?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    readTime: "6 min read",
    views: "1.8K",
    featured: false
  },
  {
    id: 3,
    title: "Mastering the Art of Author Branding on Social Media",
    excerpt: "Building an audience is as important as writing. Discover the strategies that top authors use to stay relevant.",
    category: "Marketing",
    author: "Sarah Jenkins",
    date: "May 10, 2024",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    readTime: "10 min read",
    views: "3.2K",
    featured: false
  },
  {
    id: 4,
    title: "Ghostwriting Secrets: How to Maintain an Author's Voice",
    excerpt: "The invisible hand behind the bestsellers. A deep dive into the world of professional ghostwriting.",
    category: "Ghostwriting",
    author: "David Thorne",
    date: "May 8, 2024",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    readTime: "12 min read",
    views: "1.2K",
    featured: false
  },
  {
    id: 5,
    title: "The Rise of Audiobooks: A New Frontier for Storytelling",
    excerpt: "Why more readers are choosing to listen, and how authors can adapt to the growing audio market.",
    category: "Literary Trends",
    author: "Elena Rivers",
    date: "May 5, 2024",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    readTime: "7 min read",
    views: "4.1K",
    featured: true
  },
  {
    id: 6,
    title: "How to Market Your Self-Published Book on a Budget",
    excerpt: "You don't need a massive budget to reach readers. Proven tactics for indie authors.",
    category: "Marketing",
    author: "Sarah Jenkins",
    date: "May 2, 2024",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    readTime: "9 min read",
    views: "2.9K",
    featured: false
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = BLOG_POSTS.filter(p => p.featured);

  return (
    <main className="bg-background min-h-screen">
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Posts Slider/Grid */}
          {activeCategory === "All" && !searchQuery && (
            <div className="mb-24">
              <div className="flex items-center justify-between mb-12">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-[var(--primary)] px-6 py-3 rounded-full font-bold">
                  <Star className="w-5 h-5" />
                  <span>Editor's Picks</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {featuredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                    <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="bg-white/90 backdrop-blur-md text-[var(--primary)] px-6 py-2 rounded-full text-sm font-black shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-10 flex-1 flex flex-col">
                        <div className="flex items-center gap-6 text-sm font-bold text-gray-400 mb-6">
                          <span className="flex items-center gap-2 tracking-widest uppercase"><Calendar className="w-4 h-4" /> {post.date}</span>
                          <span className="flex items-center gap-2 tracking-widest uppercase"><Clock className="w-4 h-4" /> {post.readTime}</span>
                        </div>
                        <h3 className="text-3xl font-black text-[var(--primary)] mb-6 group-hover:text-accent transition-colors leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-black text-xl">
                              {post.author[0]}
                            </div>
                            <div>
                              <div className="font-black text-[var(--primary)]">{post.author}</div>
                              <div className="text-gray-500 text-sm">Post Author</div>
                            </div>
                          </div>
                          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all shadow-md group-hover:rotate-[360deg]">
                            <ArrowRight className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Posts Grid */}
          <div className="mb-12">
            <h2 className="text-4xl font-black text-[var(--primary)] mb-12">
              {searchQuery ? `Search Results for "${searchQuery}"` : activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                >
                  <Link href={`/blog/${post.id}`} className="block h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md text-[var(--primary)] px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                        <Eye className="w-3 h-3" /> {post.views}
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-black text-[var(--primary)] mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[var(--primary)] font-bold text-sm">
                            {post.author[0]}
                          </div>
                          <span className="text-sm font-bold text-gray-700">{post.author}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all transform group-hover:rotate-[360deg]">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-24">
                <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-300" />
                </div>
                <h3 className="text-3xl font-black text-[var(--primary)] mb-2">No results found</h3>
                <p className="text-gray-500">We couldn't find any articles matching your search.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("All") }}
                  className="mt-8 text-accent font-black text-lg hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

// 1. Hero Section - MAROON
function HeroSection({ searchQuery, setSearchQuery, activeCategory, setActiveCategory }: any) {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in-up">
          Insights & <span className="text-accent">Knowledge</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in-up [animation-delay:200ms]">
          Your source for literary excellence and publishing trends.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative animate-fade-in-up [animation-delay:400ms]">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-10 py-6 rounded-full bg-white text-gray-900 text-xl outline-none shadow-2xl focus:ring-8 focus:ring-white/20 transition-all placeholder:text-gray-300"
          />
          <Search className="absolute right-8 top-6 text-accent w-8 h-8" />
        </div>

        {/* Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 animate-fade-in-up [animation-delay:600ms]">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all ${activeCategory === category
                  ? "bg-accent text-[var(--primary)] shadow-xl scale-105"
                  : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. Newsletter Section - MAROON
function NewsletterSection() {
  return (
    <section className="py-24 bg-[var(--primary-dark)] relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-xl p-12 lg:p-24 rounded-[4rem] border border-white/10 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center mx-auto mb-8 transform rotate-12">
              <Mail className="w-10 h-10 text-[var(--primary)]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Get the Latest in <br /> <span className="text-accent">Literary Excellence</span>
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Join 15,000+ authors and readers. Get industry insights, marketing tips, and publishing success stories delivered weekly.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 rounded-[2rem] border border-white/10">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 bg-transparent px-8 py-5 rounded-full outline-none text-xl placeholder:text-white/30"
              />
              <button
                type="submit"
                className="bg-white text-[var(--primary)] px-12 py-5 rounded-full font-black text-xl hover:bg-accent transition-all hover:scale-105 shadow-xl"
              >
                Subscribe Now
              </button>
            </form>

            <p className="mt-8 text-white/40 text-sm">
              No spam, ever. Unsubscribe with one click.
              <Link href="/privacy-policy" className="underline ml-1">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}