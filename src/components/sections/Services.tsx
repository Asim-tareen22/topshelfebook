'use client';

import {
  Pen,
  BookText,
  Palette,
  Rocket,
  Users,
  Award,
  Sparkles,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export function Services() {
  const services = [
    {
      id: 1,
      icon: Pen,
      title: 'Ghostwriting',
      description: 'Professional writers bring your story to life with expert craftsmanship and creativity',
      gradient: 'from-[#600806] via-[#7f1d1d] to-[#600806]',
    },
    {
      id: 2,
      icon: BookText,
      title: 'Book Editing',
      description: 'Polish your manuscript to perfection with our expert editing team',
      gradient: 'from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d]',
    },
    {
      id: 3,
      icon: Palette,
      title: 'Cover Design',
      description: 'Eye-catching book covers that make your book stand out on shelves',
      gradient: 'from-[#600806] via-[#881414] to-[#600806]',
    },
    {
      id: 4,
      icon: Rocket,
      title: 'Publishing',
      description: 'Full-service publishing to get your book into readers hands worldwide',
      gradient: 'from-[#7f1d1d] via-[#600806] to-[#7f1d1d]',
    },
    {
      id: 5,
      icon: Users,
      title: 'Marketing',
      description: 'Strategic book marketing to maximize your reach and sales potential',
      gradient: 'from-[#600806] via-[#7f1d1d] to-[#600806]',
    },
    {
      id: 6,
      icon: Award,
      title: 'Consulting',
      description: 'Expert guidance throughout your entire book publishing journey',
      gradient: 'from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d]',
    },
    {
      id: 7,
      icon: Sparkles,
      title: 'Formatting',
      description: 'Professional book formatting for both print and digital editions',
      gradient: 'from-[#600806] via-[#881414] to-[#600806]',
    },
    {
      id: 8,
      icon: TrendingUp,
      title: 'Distribution',
      description: 'Worldwide distribution to major retailers and online platforms',
      gradient: 'from-[#7f1d1d] via-[#600806] to-[#7f1d1d]',
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden bg-[var(--bg-cream)]">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary-dark) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl animate-blob opacity-50" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-3xl animate-blob-2 opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 scroll-animate visible">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-950 to-red-800 border-2 border-red-900/60 mb-8 relative overflow-hidden shadow-xl animate-bounce-slow">
            <Sparkles className="w-5 h-5 text-yellow-300 animate-spin-slow" />
            <span className="text-white font-black text-sm tracking-wide relative z-10">WHAT WE OFFER</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 animate-gradient opacity-50 blur-xl" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight animate-fade-in-up">
            Our Premium{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-red-900 via-red-700 to-red-900 bg-clip-text text-transparent">
                Services
              </span>
              <div className="absolute bottom-2 left-0 right-0 h-4 bg-red-900/10 -z-0 blur-sm animate-scale-pulse" />
            </span>
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            Complete publishing solutions from concept to bestseller
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* ANIMATED MOVING BORDER */}
                <div className="absolute -inset-[3px] rounded-2xl overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-gradient bg-[length:200%_100%]" />
                  <div className="absolute inset-0 animate-glow opacity-50" />
                </div>

                {/* Main Card */}
                <div className="relative h-full bg-gradient-to-b from-gray-900 via-gray-900/95 to-black backdrop-blur-2xl rounded-2xl p-8 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  {/* Top Corner Animated Gradient */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-900 to-red-700 opacity-20 blur-3xl animate-pulse delay-${index % 5}00`} />

                  {/* Enhanced Icon */}
                  <div className="relative mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    {/* Icon Outer Ring */}
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-red-900 to-red-600 opacity-30 blur-md animate-spin-slow" />

                    {/* Icon Container */}
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center overflow-hidden shadow-xl">
                      <Icon className="w-8 h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:animate-shine" />
                    </div>

                    {/* Pulsing Glow */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-red-600/20 blur-xl animate-pulse-glow" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-black text-white group-hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Animated Learn More */}
                  <div className="absolute bottom-8 right-8 flex items-center gap-2 text-red-600 font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn More</span>
                    <TrendingUp className="w-5 h-5 animate-bounce-x" />
                  </div>

                  {/* Bottom Animated Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-2xl">
                    <div className="h-full bg-gradient-to-r from-red-900 to-red-600 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-red-900 rounded-full opacity-50 group-hover:opacity-100 animate-twinkle" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-20 animate-fade-in delay-500">
          <button className="relative px-12 py-6 bg-gradient-to-r from-red-950 via-red-800 to-red-950 bg-[length:200%_100%] text-white font-black text-lg rounded-2xl overflow-hidden group shadow-2xl hover:scale-105 active:scale-95 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-600 to-red-900 bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />
            <div className="absolute inset-0 rounded-2xl animate-glow opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-3">
              Get Started Today
              <ArrowRight className="w-5 h-5 animate-bounce-x" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}