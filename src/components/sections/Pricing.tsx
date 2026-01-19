'use client';

import { Check, Star, Sparkles, Shield, Rocket, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const PRICING_PLANS = [
  {
    id: 1,
    name: 'Starter',
    price: '$1,500',
    icon: Sparkles,
    features: [
      'Custom website design',
      'Responsive development',
      'Basic SEO optimization',
      'Contact form integration',
      'Up to 5 pages',
      '1 revision round',
      'Standard support',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: '$3,500',
    icon: Shield,
    features: [
      'Everything in Starter',
      'Advanced UI/UX design',
      'Content management system (CMS)',
      'E-commerce integration (up to 10 products)',
      'Advanced SEO & analytics setup',
      'Up to 15 pages',
      '3 revision rounds',
      'Priority support',
      'Performance optimization',
      'Social media integration',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$7,000+',
    icon: Rocket,
    features: [
      'Everything in Professional',
      'Custom feature development',
      'Large-scale e-commerce solutions',
      'API integrations',
      'Dedicated project manager',
      'Unlimited pages',
      'Unlimited revision rounds',
      '24/7 VIP support',
      'Ongoing maintenance & updates',
      'Advanced security features',
      'Custom reporting dashboards',
      'Scalability consulting',
    ],
    popular: false,
  },
];

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[var(--background)] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-[120px] animate-blob-2" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--foreground)]/5 border border-[var(--border)] mb-6 transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
          >
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-[var(--foreground)] text-sm font-black tracking-wider uppercase">INVEST IN YOUR FUTURE</span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-7xl font-black text-[var(--foreground)] mb-6 tracking-tight transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            Pricing <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent italic">Plans</span>
          </h2>

          <p
            className={`text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            Choose the perfect plan for your publishing journey. Every plan includes our premium support and quality guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`flex flex-col h-full bg-[var(--card-bg)] backdrop-blur-xl border-2 rounded-[var(--radius-2xl)] p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl group ${plan.popular
                    ? 'border-[var(--primary)] shadow-[0_0_40px_var(--primary-glow)] scale-105 z-10'
                    : 'border-[var(--border)] hover:border-[var(--primary)]/50'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full shadow-lg z-20 animate-bounce-slow">
                    <span className="text-white text-sm font-black tracking-widest uppercase flex items-center gap-2">
                      <Star className="w-4 h-4 fill-white" /> MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 duration-500 bg-gradient-to-br ${plan.popular ? 'from-[var(--primary)] to-[var(--secondary)] text-white' : 'from-[var(--foreground)]/10 to-[var(--foreground)]/5 text-[var(--primary)]'
                    }`}>
                    <plan.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-[var(--foreground)] mb-2 uppercase tracking-tight">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[var(--foreground)]">{plan.price}</span>
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-xs">per project</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 group/feat">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--primary)]/10 flex items-center justify-center group-hover/feat:bg-[var(--primary)]/20 transition-colors">
                        <Check className="w-3 h-3 text-[var(--primary)]" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium leading-tight group-hover/feat:text-[var(--foreground)] transition-colors line-clamp-2">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-5 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 relative overflow-hidden group/btn ${plan.popular
                      ? 'bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] text-white shadow-xl shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/40'
                      : 'bg-white/10 text-white hover:bg-white/20 border-2 border-white/10 hover:border-white/20'
                    }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}