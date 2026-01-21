"use client";

import {
  Check,
  Star,
  Sparkles,
  Shield,
  Rocket,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { useState, useEffect, useRef, memo } from "react";

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  popular: boolean;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 1,
    name: "Starter",
    price: "$1,500",
    icon: Sparkles,
    features: [
      "Custom website design",
      "Responsive development",
      "Basic SEO optimization",
      "Contact form integration",
      "Up to 5 pages",
      "1 revision round",
      "Standard support",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    price: "$3,500",
    icon: Shield,
    features: [
      "Everything in Starter",
      "Advanced UI/UX design",
      "Content management system",
      "E-commerce integration",
      "Advanced SEO & analytics",
      "Up to 15 pages",
      "3 revision rounds",
      "Priority support",
      "Performance optimization",
      "Social media integration",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$7,000+",
    icon: Rocket,
    features: [
      "Everything in Professional",
      "Custom feature development",
      "Large-scale e-commerce",
      "API integrations",
      "Dedicated project manager",
      "Unlimited pages",
      "Unlimited revisions",
      "24/7 VIP support",
      "Ongoing maintenance",
      "Advanced security",
      "Custom reporting",
      "Scalability consulting",
    ],
    popular: false,
  },
];

const PricingCard = memo(function PricingCard({
  plan,
  index,
  isVisible,
}: {
  plan: PricingPlan;
  index: number;
  isVisible: boolean;
}) {
  const Icon = plan.icon;

  return (
    <div
      className={`relative transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`flex flex-col h-full bg-gray-900 border-2 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
          plan.popular
            ? "border-red-600 shadow-lg shadow-red-600/20 scale-105 z-10"
            : "border-gray-700 hover:border-red-600/50"
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-full shadow-lg z-20">
            <span className="text-white text-xs font-black tracking-widest uppercase flex items-center gap-1.5">
              <Star className="w-3 h-3 fill-white" /> MOST POPULAR
            </span>
          </div>
        )}

        <div className="mb-8">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:rotate-12 ${
              plan.popular
                ? "bg-gradient-to-br from-red-600 to-orange-600 text-white"
                : "bg-gray-800 text-red-500"
            }`}
          >
            <Icon className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
            {plan.name}
          </h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black text-white">{plan.price}</span>
            <span className="text-gray-400 font-bold uppercase tracking-wider text-xs">
              per project
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-10 flex-grow">
          {plan.features.map((feature, fIndex) => (
            <div key={fIndex} className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-600/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-red-500" />
              </div>
              <span className="text-gray-300 text-sm font-medium leading-tight">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <button
          className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
            plan.popular
              ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg hover:shadow-red-600/30"
              : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
});

export const Pricing = memo(function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "50px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-black overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 900px" }}
    >
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 transition-all duration-500 ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-white text-sm font-black tracking-wider uppercase">
              INVEST IN YOUR FUTURE
            </span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight transition-all duration-500 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Pricing{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent italic">
              Plans
            </span>
          </h2>

          <p
            className={`text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto transition-all duration-500 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Choose the perfect plan for your publishing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
