'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  Target,
  Eye,
  Users,
  CheckCircle2,
  MessageSquare,
  Globe,
  Award,
  BookOpen,
  Sparkles,
  Zap,
  Shield,
  Heart,
  Lightbulb,
  Trophy
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-background">
      <HeroSection />
      <StorySection />
      <MissionSection />
      <WhyUsSection />
      <StatsSection />
      <ValuesSection />
      <CTASection />
    </main>
  );
}

// 1. Hero Section - MAROON
function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] text-white">

      {/* Floating Elements */}
      <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-20 -right-20 animate-pulse" />
      <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -bottom-20 -left-20 animate-pulse [animation-delay:2s]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in-up">
          About <span className="text-accent">TopShelf</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in-up [animation-delay:200ms]">
          Your Gateway to Unlimited Knowledge & Literary Excellence
        </p>

        <div className="animate-fade-in-up [animation-delay:400ms]">
          <a
            href="#story"
            className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
          >
            Discover Our Story
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

// 2. Story Section - WHITE
function StorySection() {
  return (
    <section id="story" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative group">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Our Story"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[var(--primary)]/10 rounded-full blur-3xl -z-0" />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center">
                  <BookOpen className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[var(--primary)]">10,000+</div>
                  <div className="text-sm text-gray-600">Books Published</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>The Beginning</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-8 leading-tight">
              From a Passion for Books to a <span className="text-[var(--primary-dark)]">Global Platform</span>
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Founded in 2015, TopShelf was born out of a simple yet powerful idea: that every story deserves to be told, and every author deserves the best possible tools to share it.
              </p>
              <p>
                What started as a small team of book lovers and editors in a tiny office has grown into a world-class literary platform. We've helped thousands of authors navigate the complex world of publishing, design, and marketing.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in the literary world, combining traditional excellence with cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all group">
                <Globe className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-[var(--primary)] mb-1">Global Reach</h4>
                <p className="text-sm text-gray-600">Authors from 50+ countries</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all group">
                <Shield className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-[var(--primary)] mb-1">Quality Guaranteed</h4>
                <p className="text-sm text-gray-600">Top 1% industry standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. Mission & Vision - MAROON
function MissionSection() {
  return (
    <section className="py-24 bg-[var(--primary)] relative overflow-hidden text-white">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-white p-12 rounded-[2rem] shadow-2xl hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mb-8">
              <Target className="w-10 h-10 text-[var(--primary)]" />
            </div>
            <h3 className="text-3xl font-black text-[var(--primary)] mb-6">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower authors worldwide by providing world-class publishing, design, and marketing services that transform creative visions into literary masterpieces, making quality publishing accessible to everyone.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[2rem] shadow-2xl hover:-translate-y-2 transition-transform duration-500 md:mt-12">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
              <Eye className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-3xl font-black text-[var(--primary)] mb-6">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the world's most trusted partner for authors, fostering a global community where creativity thrives and impactful stories reach their full potential through innovation and uncompromising excellence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// 4. Why Chosen Us - WHITE
function WhyUsSection() {
  const reasons = [
    {
      icon: Users,
      title: 'Expert Team',
      desc: 'Industry veterans with decades of collective experience in the publishing world.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      desc: 'Hundreds of bestsellers and thousands of successful book launches globally.'
    },
    {
      icon: MessageSquare,
      title: 'Author-First',
      desc: 'Dedicated support at every step of your creative and publishing journey.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      desc: 'Leveraging the latest technology to give your book a competitive edge.'
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-6">
            Why Authors <span className="text-[var(--primary-dark)]">Partner With Us</span>
          </h2>
          <div className="w-24 h-2 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gray-50 border-2 border-transparent hover:border-[var(--primary)] hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--primary)] text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[var(--primary)] mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 5. Stats Section - MAROON
function StatsSection() {
  const stats = [
    { value: '10K+', label: 'Books Published', icon: BookOpen },
    { value: '500+', label: 'Bestsellers', icon: Trophy },
    { value: '50+', label: 'Countries', icon: Globe },
    { value: '98%', label: 'Author Satisfaction', icon: Heart }
  ];

  return (
    <section className="py-24 bg-[var(--primary)] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 text-accent mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                  <Icon className="w-10 h-10" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-white/70 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 6. Values Section - WHITE
function ValuesSection() {
  const values = [
    {
      title: 'Excellence',
      icon: Award,
      desc: 'We strive for perfection in every project, ensuring the highest standards of quality.'
    },
    {
      title: 'Integrity',
      icon: Shield,
      desc: 'Transparency and honesty are the foundations of our relationships with authors.'
    },
    {
      title: 'Creativity',
      icon: Lightbulb,
      desc: 'We embrace bold ideas and innovative solutions to tell impactful stories.'
    },
    {
      title: 'Collaboration',
      icon: Users,
      desc: 'We work closely with authors as partners to bring their unique visions to life.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-6">
            Our Core <span className="text-[var(--primary-dark)]">Values</span>
          </h2>
          <div className="w-24 h-2 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-50 text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-sm group-hover:shadow-xl">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[var(--primary)] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 7. CTA Section - MAROON
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] relative overflow-hidden text-white">

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          Ready to Start Your <span className="text-accent">Success Story?</span>
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join thousands of authors who have transformed their creative dreams into literary bestsellers.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/contact-us">
            <button className="bg-white text-[var(--primary)] px-12 py-5 rounded-full font-black text-xl hover:shadow-2xl transition-all hover:scale-105 shadow-xl">
              Partner With Us
            </button>
          </Link>
          <Link href="/services">
            <button className="border-2 border-white text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white/10 transition-all hover:scale-105">
              Explore Our Services
            </button>
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 font-bold uppercase tracking-widest text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>Trusted Worldwide</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>Expert Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}