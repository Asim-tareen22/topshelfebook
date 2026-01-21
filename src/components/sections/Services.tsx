"use client";

import { memo } from "react";
import {
  Pen,
  BookText,
  Palette,
  Rocket,
  Users,
  Award,
  Sparkles,
  TrendingUp,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

// Memoized service card to prevent unnecessary re-renders
const ServiceCard = memo(function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <div
      className="group relative"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 400px" }}
    >
      {/* Simple hover border */}
      <div className="absolute -inset-px  rounded-2xl bg-gradient-to-r from-red-600/0 via-red-600/0 to-red-600/0 group-hover:from-red-600/50 group-hover:via-red-500/50 group-hover:to-red-600/50 transition-all duration-300" />

      {/* Main Card */}
      <div className="relative  h-full bg-gray-900 rounded-2xl p-8 overflow-hidden shadow-xl transition-transform duration-300 group-hover:-translate-y-0.3">
        {/* Icon */}
        <div className="relative mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center shadow-lg group-hover:scale-100 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl lg:text-3xl font-black text-white group-hover:text-red-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Learn More */}
        {/* <div className="absolute bottom-8 right-8 flex items-center gap-2 text-red-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn More</span>
          <TrendingUp className="w-5 h-5" />
        </div> */}

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-2xl">
          <div className="h-full w-full bg-gradient-to-r from-red-900 to-red-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
});

const services = [
  {
    id: 1,
    icon: Pen,
    title: "Ghostwriting",
    description:
      "Professional writers bring your story to life with expert craftsmanship and creativity",
  },
  {
    id: 2,
    icon: BookText,
    title: "Book Editing",
    description:
      "Polish your manuscript to perfection with our expert editing team",
  },
  {
    id: 3,
    icon: Palette,
    title: "Cover Design",
    description:
      "Eye-catching book covers that make your book stand out on shelves",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Publishing",
    description:
      "Full-service publishing to get your book into readers hands worldwide",
  },
  {
    id: 5,
    icon: Users,
    title: "Marketing",
    description:
      "Strategic book marketing to maximize your reach and sales potential",
  },
  {
    id: 6,
    icon: Award,
    title: "Consulting",
    description:
      "Expert guidance throughout your entire book publishing journey",
  },
  {
    id: 7,
    icon: Sparkles,
    title: "Formatting",
    description:
      "Professional book formatting for both print and digital editions",
  },
  {
    id: 8,
    icon: TrendingUp,
    title: "Distribution",
    description:
      "Worldwide distribution to major retailers and online platforms",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 overflow-hidden bg-[var(--bg-cream)]"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary-dark) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        {/* Static blobs - no animation */}
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-red-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-red-800/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-950 to-red-800 border-2 border-red-900/60 mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-black text-sm tracking-wide">
              WHAT WE OFFER
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Our Premium{" "}
            <span className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Complete publishing solutions from concept to bestseller
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="px-12 py-6 bg-gradient-to-r from-red-900 to-red-700 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 active:scale-95">
            <span className="flex items-center gap-3">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
