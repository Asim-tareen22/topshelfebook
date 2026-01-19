'use client';

import {
  BookOpen,
  CheckCircle,
  Star,
  Palette,
  Download,
  Clock,
  Users,
  Award,
  Zap,
  Eye,
  TrendingUp,
  Heart,
  Shield,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function BookCoverDesign() {
  return (
    <main className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <PortfolioSection />
      <PackagesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}

// 1. Hero Section - 600px - MAROON
function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)]">

      {/* Animated Particles - Only on Client */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-up"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                opacity: 0,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Icons */}
      <div className="absolute top-20 left-20 text-white/10 text-8xl animate-float pointer-events-none">
        <BookOpen size={96} />
      </div>

      <div className="absolute bottom-20 right-20 text-white/10 text-8xl animate-float-delayed pointer-events-none">
        <Palette size={96} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20 animate-fade-in-up">
          <Award className="w-5 h-5 text-yellow-300" />
          <span className="text-white font-bold">Premium Book Cover Design</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 animate-fade-in-up [animation-delay:200ms]">
          Your Book Deserves a <span className="text-accent">Stunning Cover</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up [animation-delay:400ms]">
          Professional book cover designs that capture attention and drive sales
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:600ms]">
          <Link href="/contact-us">
            <button className="bg-white text-[var(--primary)] px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105">
              Get Your Cover Designed
            </button>
          </Link>
          <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[var(--primary)] transition-all hover:scale-105">
            View Portfolio
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12 animate-fade-in-up [animation-delay:800ms]">
          {[
            { number: '5,000+', label: 'Covers Created' },
            { number: '98%', label: 'Satisfaction' },
            { number: '24hr', label: 'Rush Delivery' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-accent mb-2">{stat.number}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. Features Section - WHITE
function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: 'Custom Designs',
      description: 'Unique, eye-catching covers tailored to your book genre and story',
    },
    {
      icon: Sparkles,
      title: 'Professional Quality',
      description: 'Print-ready high-resolution designs with unlimited revisions',
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Get your stunning book cover in just 3-5 business days',
    },
    {
      icon: Shield,
      title: 'Industry Standards',
      description: 'Covers that meet all major publishing platform requirements',
    },
    {
      icon: Users,
      title: 'Expert Designers',
      description: '10+ years of experience in book cover design',
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Designs that have helped books become bestsellers',
    },
  ];

  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-[var(--primary)] mb-6">
            Why Choose Our <span className="text-[var(--primary-dark)]">Designs?</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Professional book covers that make readers stop, look, and click "Buy Now"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-[var(--primary)] border-2 border-[var(--primary)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:rotate-[360deg] transition-transform duration-700">
                  <Icon className="w-8 h-8 text-[var(--primary)]" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-white/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 3. Process Section - MAROON
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your book\'s genre, target audience, and design preferences',
      icon: Users,
    },
    {
      number: '02',
      title: 'Concept Creation',
      description: 'Our designers create 3 unique cover concepts for you to choose from',
      icon: Palette,
    },
    {
      number: '03',
      title: 'Refinement',
      description: 'Unlimited revisions until you\'re 100% satisfied with the design',
      icon: TrendingUp,
    },
    {
      number: '04',
      title: 'Final Delivery',
      description: 'Receive print-ready files in all required formats (JPEG, PNG, PDF)',
      icon: Download,
    },
  ];

  return (
    <section className="relative py-32 bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Our Design <span className="text-accent">Process</span>
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            From concept to completion in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-white/20 -translate-x-1/2 z-0" />
                )}

                <div className="relative bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 group">
                  {/* Number Badge */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-[var(--primary)] font-black text-2xl shadow-lg">
                    {step.number}
                  </div>

                  <div className="mt-6">
                    <div className="text-5xl text-[var(--primary)] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-12 h-12" />
                    </div>

                    <h3 className="text-2xl font-black text-[var(--primary)] mb-3 text-center">
                      {step.title}
                    </h3>

                    <p className="text-gray-700 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 4. Portfolio Section - WHITE
function PortfolioSection() {
  const portfolioItems = [
    { id: 1, image: '/Assets/1-1-180x300.webp', title: 'The Silent Echo', category: 'Fiction' },
    { id: 2, image: '/Assets/2-1-180x300.webp', title: 'Love Story', category: 'Romance' },
    { id: 3, image: '/Assets/3-1-180x300.webp', title: 'Dark Secrets', category: 'Thriller' },
    { id: 4, image: '/Assets/4-1-180x300.webp', title: 'Success Guide', category: 'Business' },
    { id: 5, image: '/Assets/5-1-180x300.webp', title: 'Space Wars', category: 'Sci-Fi' },
    { id: 6, image: '/Assets/6-1-180x300.webp', title: 'Mystery Novel', category: 'Mystery' },
  ];

  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-[var(--primary)] mb-6">
            Our <span className="text-[var(--primary-dark)]">Portfolio</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Award-winning book covers that have helped authors achieve bestseller status
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-[500px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="font-black text-xl mb-1">{item.title}</h4>
                  <p className="text-sm text-white/90">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. Packages Section - MAROON
function PackagesSection() {
  const packages = [
    {
      name: 'Basic',
      price: '$199',
      features: [
        '1 Custom Cover Design',
        '2 Revisions',
        'Basic Typography',
        'JPEG & PNG Files',
        '3-5 Day Delivery',
        'Email Support',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$399',
      features: [
        '3 Custom Cover Concepts',
        'Unlimited Revisions',
        'Professional Typography',
        'All File Formats',
        '2-3 Day Delivery',
        'Priority Support',
        '3D Mockups',
        'Source Files',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '$599',
      features: [
        '5 Custom Cover Concepts',
        'Unlimited Revisions',
        'Premium Typography',
        'All Formats + Print-Ready',
        '24 Hour Delivery',
        '24/7 VIP Support',
        '3D Mockups + Marketing',
        'Complete Brand Package',
      ],
      popular: false,
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Choose Your <span className="text-accent">Package</span>
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Flexible pricing options to fit your budget and needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${pkg.popular ? 'ring-4 ring-accent scale-105 z-10' : 'opacity-90 hover:opacity-100'
                }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-accent to-orange-500 text-[var(--primary)] px-6 py-2 rounded-bl-2xl font-bold flex items-center gap-2">
                  <Award className="w-4 h-4" /> POPULAR
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? 'bg-[var(--primary)] text-white' : 'bg-gray-100 text-[var(--primary)]'}`}>
                <h3 className="text-3xl font-black mb-2">
                  {pkg.name}
                </h3>
                <div className="text-5xl font-black mb-2">
                  {pkg.price}
                </div>
                <p className={pkg.popular ? 'text-white/80' : 'text-gray-600'}>
                  Per Cover Design
                </p>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact-us">
                  <button
                    className={`w-full py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg ${pkg.popular
                      ? 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. Testimonials Section - WHITE
function TestimonialsSection() {
  const testimonials = [
    {
      text: 'The book cover they designed was absolutely stunning! Sales increased by 200%!',
      author: 'Sarah Mitchell',
      title: 'Fiction Author',
    },
    {
      text: 'Professional, creative, and responsive. Exceeded all my expectations!',
      author: 'James Rodriguez',
      title: 'Business Author',
    },
    {
      text: 'My book became a bestseller thanks to their eye-catching design!',
      author: 'Emily Chen',
      title: 'Romance Author',
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-[var(--primary)] mb-6">
            Author Success <span className="text-[var(--primary-dark)]">Stories</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-[var(--primary)] border-2 border-[var(--primary)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                ))}
              </div>

              <p className="text-white/90 italic text-lg leading-relaxed mb-6 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="border-t border-white/20 pt-4">
                <h4 className="font-black text-white text-lg">{testimonial.author}</h4>
                <p className="text-white/70 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. CTA Section - MAROON
function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] overflow-hidden">

      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center mb-8 animate-bounce">
          <BookOpen className="w-10 h-10 text-[var(--primary)]" />
        </div>

        <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">
          Ready to Design Your <span className="text-accent">Bestselling Cover?</span>
        </h2>

        <p className="text-white/90 text-2xl mb-12">
          Join thousands of successful authors today and transform your vision into reality
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/contact-us">
            <button className="bg-white text-[var(--primary)] px-12 py-5 rounded-full font-black text-xl hover:shadow-2xl transition-all hover:scale-105">
              Get Started Today
            </button>
          </Link>
          <Link href="/services">
            <button className="border-2 border-white text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white/10 transition-all hover:scale-105">
              View All Services
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-12">
          {[
            'No credit card required',
            'Cancel anytime',
            'Instant access',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}