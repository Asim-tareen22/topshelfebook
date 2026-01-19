'use client';

import React from 'react';
import Link from 'next/link';
import {
  Pen,
  BookOpen,
  Check,
  Star,
  Users,
  Award,
  Zap,
  ArrowRight,
  ShieldCheck,
  Clock,
  MessageCircle,
  Trophy
} from 'lucide-react';
import Image from 'next/image';

const FEATURES = [
  { icon: BookOpen, title: 'Fiction & Non-Fiction', desc: 'Expert writers for all genres, from thrilling mysteries to insightful biographies.' },
  { icon: Users, title: 'Biographies & Memoirs', desc: 'Your life story, professionally told with your unique voice and personality.' },
  { icon: Award, title: 'Business Books', desc: 'Establish your authority and share your professional expertise with the world.' },
  { icon: Star, title: 'Self-Help & Motivational', desc: 'Inspire and empower readers with your transformative message and insights.' },
];

const PACKAGES = [
  {
    name: 'Starter Package',
    price: '$2,999',
    description: 'Perfect for short books and specific projects.',
    features: [
      'Up to 20,000 words',
      'Basic Topic Research',
      '2 Rounds of Revisions',
      'Professional Proofreading',
      '30-Day Delivery Cycle'
    ],
    color: 'bg-white'
  },
  {
    name: 'Professional Suite',
    price: '$7,999',
    description: 'Our most popular choice for bestselling quality.',
    features: [
      'Up to 50,000 words',
      'In-depth Industry Research',
      'Unlimited Story Revisions',
      'Full Editorial Suite',
      '60-Day Delivery Cycle',
      'Author Branding Session'
    ],
    color: 'bg-[var(--primary)] text-white',
    popular: true
  },
  {
    name: 'Mastery Edition',
    price: '$15,999',
    description: 'The ultimate literary experience for global impact.',
    features: [
      'Up to 100,000 words',
      'Extensive Global Research',
      'Unlimited Revisions',
      'Ghostwriting & Publishing',
      '90-Day Priority Cycle',
      'Marketing Strategy Prep',
      'Press Release Creation'
    ],
    color: 'bg-white'
  },
];

export default function Ghostwriting() {
  return (
    <main className="bg-background">
      <HeroSection />

      {/* Features Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] mb-6">
              What We <span className="text-accent underline decoration-4">Master</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Regardless of your industry or genre, our elite ghostwriters have the expertise to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="group p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/5 text-[var(--primary)] flex items-center justify-center mb-8 group-hover:bg-white group-hover:scale-110 transition-all">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-[var(--primary)] mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/80 transition-colors leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secret Sauce / Why Us */}
      <section className="py-24 bg-[var(--primary-dark)] text-white relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-[4rem] blur-3xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
                  alt="Ghostwriting Mastery"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-3 rounded-full font-bold mb-8">
                <ShieldCheck className="w-5 h-5" />
                <span>Total Confidentiality</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Your Voice, <br /> <span className="text-accent underline decoration-4">Our Craftsmanship.</span>
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                The most successful authors in the world share a secret: they don't do it alone. Our ghostwriting process is designed to extract your brilliance while saving you thousands of hours.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Clock, title: 'Efficiency', desc: 'Books completed in weeks, not years.' },
                  { icon: Trophy, title: 'Excellence', desc: 'Bestseller-quality prose and structure.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)]">Sovereign <span className="text-accent">Packages</span></h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {PACKAGES.map((pkg, i) => (
              <div key={i} className={`relative flex flex-col p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-4 ${pkg.color}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-[var(--primary)] px-8 py-3 rounded-full font-black text-sm shadow-xl z-10">
                    EXPERT'S CHOICE
                  </div>
                )}

                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{pkg.name}</h3>
                <p className={`text-sm mb-10 ${pkg.popular ? 'text-white/60' : 'text-gray-400'}`}>{pkg.description}</p>

                <div className="mb-10">
                  <span className="text-5xl font-black leading-none">{pkg.price}</span>
                  <span className={`text-lg ml-2 ${pkg.popular ? 'text-white/60' : 'text-gray-400'}`}>/ book</span>
                </div>

                <div className="flex-1 space-y-6 mb-12">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${pkg.popular ? 'bg-white/10 text-accent' : 'bg-accent/10 text-[var(--primary)]'}`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="font-bold opacity-90">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact-us" className="block">
                  <button className={`w-full py-5 rounded-2xl font-black text-xl transition-all shadow-xl active:scale-[0.98] ${pkg.popular ? 'bg-white text-[var(--primary)] hover:bg-accent' : 'bg-[var(--primary)] text-white hover:bg-black'}`}>
                    Select Package
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-gray-400 font-bold uppercase tracking-[0.4em] mb-12">Trusted by Global Visionaries</h3>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all">
            <div className="text-3xl font-black text-[var(--primary)]">FORBES</div>
            <div className="text-3xl font-black text-[var(--primary)]">WSJ</div>
            <div className="text-3xl font-black text-[var(--primary)]">BLOOMBERG</div>
            <div className="text-3xl font-black text-[var(--primary)]">PENGUIN</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl rotate-12">
            <Pen className="w-10 h-10 text-[var(--primary)]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Your Legacy <br /><span className="text-accent underline decoration-4">Starts Here.</span></h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12">Don't let your story stay trapped inside. Let's build your bestselling future together.</p>
          <div className="flex justify-center">
            <Link href="/contact-us">
              <button className="bg-white text-[var(--primary)] px-16 py-6 rounded-full font-black text-2xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl flex items-center gap-4">
                Claim Your Author Identity <ArrowRight className="w-8 h-8" />
              </button>
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
          <span className="font-bold uppercase tracking-widest text-sm">Bestseller Incubation</span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black mb-6 animate-fade-in-up [animation-delay:200ms]">
          Ghost<span className="text-accent">writing</span>
        </h1>

        <p className="text-xl md:text-3xl text-white/90 mb-0 animate-fade-in-up [animation-delay:400ms] max-w-3xl mx-auto font-serif italic">
          We provide the words. You provide the vision. Together, we create excellence.
        </p>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute top-1/4 left-1/4 animate-pulse"><Star className="w-8 h-8 text-accent/40" /></div>
      <div className="absolute bottom-1/4 right-1/4 animate-pulse [animation-delay:1s]"><Star className="w-12 h-12 text-accent/30" /></div>
    </section>
  );
}