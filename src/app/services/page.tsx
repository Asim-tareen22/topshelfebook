'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Palette,
  TrendingUp,
  Pen,
  Edit,
  FileText,
  Globe,
  Newspaper,
  Megaphone,
  Search,
  Film,
  ArrowRight,
  Zap,
  Star,
  Check,
  Award
} from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Ghostwriting',
    slug: 'ghostwriting',
    icon: Pen,
    color: 'from-red-600 to-red-800',
    description: 'Professional ghostwriters who bring your stories to life with compelling narratives and authentic voice.',
    features: ['Fiction & Non-Fiction', 'Biographies', 'Memoirs', 'Business Books'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    popular: true
  },
  {
    id: 2,
    title: 'Book Cover Design',
    slug: 'book-cover',
    icon: Palette,
    color: 'from-purple-600 to-purple-800',
    description: 'Eye-catching book covers that capture attention and reflect your story perfectly.',
    features: ['Custom Designs', 'Print & Digital', '3D Mockups', 'Unlimited Revisions'],
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
  },
  {
    id: 3,
    title: 'Editing Services',
    slug: 'editing',
    icon: Edit,
    color: 'from-blue-600 to-blue-800',
    description: 'Comprehensive editing to polish your manuscript and make it publication-ready.',
    features: ['Developmental Editing', 'Copy Editing', 'Proofreading', 'Line Editing'],
    image: 'https://images.unsplash.com/photo-1455894127589-22f75500213a?w=800&q=80',
  },
  {
    id: 4,
    title: 'Marketing Service',
    slug: 'marketing',
    icon: TrendingUp,
    color: 'from-green-600 to-green-800',
    description: 'Strategic marketing campaigns to boost your book sales and build your author brand.',
    features: ['Social Media', 'Email Marketing', 'Amazon Ads', 'Book Launch'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    popular: true
  },
  {
    id: 5,
    title: 'Article Writing',
    slug: 'article-writing',
    icon: FileText,
    color: 'from-orange-600 to-orange-800',
    description: 'Engaging articles that inform, educate, and captivate your target audience.',
    features: ['Blog Posts', 'News Articles', 'Features', 'How-To Guides'],
    image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80',
  },
  {
    id: 6,
    title: 'Web Copywriting',
    slug: 'web-copywriting',
    icon: Globe,
    color: 'from-teal-600 to-teal-800',
    description: 'Persuasive web copy that converts visitors into customers and boosts conversions.',
    features: ['Landing Pages', 'Product Descriptions', 'About Pages', 'Sales Copy'],
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80',
  },
  {
    id: 7,
    title: 'Magazine Writing',
    slug: 'magazine-writing',
    icon: Newspaper,
    color: 'from-pink-600 to-pink-800',
    description: 'Professional magazine content that engages readers and meets editorial standards.',
    features: ['Feature Articles', 'Interviews', 'Reviews', 'Opinion Pieces'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
  },
  {
    id: 8,
    title: 'Press Release',
    slug: 'press-release',
    icon: Megaphone,
    color: 'from-indigo-600 to-indigo-800',
    description: 'Newsworthy press releases that get media attention and build credibility.',
    features: ['Media Distribution', 'AP Style', 'News Angles', 'Follow-ups'],
    image: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=800&q=80',
  },
  {
    id: 9,
    title: 'SEO Writing',
    slug: 'seo-writing',
    icon: Search,
    color: 'from-yellow-600 to-yellow-800',
    description: 'Search-optimized content that ranks high and drives organic traffic to your site.',
    features: ['Keyword Research', 'Meta Descriptions', 'Content Strategy', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80',
    popular: true
  },
  {
    id: 10,
    title: 'Script Writing',
    slug: 'script-writing',
    icon: Film,
    color: 'from-red-700 to-red-900',
    description: 'Compelling scripts for video, film, podcasts, and multimedia productions.',
    features: ['Video Scripts', 'Screenplays', 'Podcast Scripts', 'YouTube Content'],
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
  },
];

export default function Services() {
  const popularServices = SERVICES.filter(s => s.popular);

  return (
    <main className="bg-background">
      <HeroSection />

      {/* Featured Services */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-[var(--primary)] px-6 py-3 rounded-full font-bold mb-6">
              <Star className="w-5 h-5" />
              <span>Bestselling Solutions</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] mb-6">
              Featured <span className="text-[var(--primary-dark)]">Services</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Expert literary solutions designed to elevate your story and build your global author brand.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {popularServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="group relative">
                  <Link href={`/services/${service.slug}`} className="block">
                    <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-6 left-6 bg-accent text-[var(--primary)] px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
                          MOST POPULAR
                        </div>
                        <div className={`absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl font-black text-[var(--primary)] mb-4 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                              <Check className="w-4 h-4 text-accent" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-[var(--primary)] font-black uppercase tracking-widest text-sm pt-6 border-t border-gray-200 group-hover:gap-4 transition-all">
                          Expert Details <ArrowRight className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-[var(--primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                The Gold Standard in <br /> <span className="text-accent">Literary Excellence</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: '18,000+ Books Written', desc: 'A decade of bringing world-class stories to market.' },
                  { title: '750+ Expert Writers', desc: 'Vetted professionals from top publishing houses.' },
                  { title: '450+ Bestsellers', desc: 'Proven strategies that dominate global charts.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-1">{item.title}</h4>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-2xl p-12 rounded-[3rem] border border-white/10 shadow-2xl">
                <blockquote className="text-3xl font-serif italic mb-8 border-l-4 border-accent pl-8">
                  "TopShelf didn't just write my book; they crafted a legacy. Their team understood my vision better than I did."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-[var(--primary)] font-black">DR</div>
                  <div>
                    <div className="font-black">Dr. Roland Vance</div>
                    <div className="text-white/60 text-sm">3x NYT Bestselling Author</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Services Grid */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)]">Complete Literary Suite</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="group">
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <div className={`h-full p-8 rounded-3xl transition-all duration-300 bg-white border border-gray-100 hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:shadow-2xl hover:-translate-y-2 group`}>
                      <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/5 text-[var(--primary)] flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-black text-[var(--primary)] mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                      <p className="text-gray-500 text-sm group-hover:text-white/80 transition-colors line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Ready to Build Your <span className="text-accent">Empire?</span></h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12">Partner with the industry's finest and turn your creative vision into a global bestseller.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact-us">
              <button className="bg-white text-[var(--primary)] px-12 py-5 rounded-full font-black text-xl hover:shadow-2xl hover:scale-105 transition-all">Start Your Project</button>
            </Link>
            <Link href="/reviews">
              <button className="border-2 border-white px-12 py-5 rounded-full font-black text-xl hover:bg-white/10 hover:scale-105 transition-all">Read Author Stories</button>
            </Link>
          </div>
        </div>
      </section>
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
          <Zap className="w-5 h-5 text-accent" />
          <span className="font-bold uppercase tracking-widest text-sm">Full Literary Suite</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in-up [animation-delay:200ms]">
          Our <span className="text-accent">Services</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-0 animate-fade-in-up [animation-delay:400ms] max-w-3xl mx-auto">
          Comprehensive publishing and writing solutions tailored for world-class authors.
        </p>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
    </section>
  );
}