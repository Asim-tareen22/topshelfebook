"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function StickyScroll({ content }: { content: any[] }) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveCard(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll(".scroll-reveal-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative py-20">
      <div className="space-y-40">
        {content.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className="scroll-reveal-item flex flex-col md:flex-row items-center gap-12 min-h-[60vh] py-10"
          >
            <div className={cn(
              "md:w-1/2 transition-all duration-700 transform",
              activeCard === index ? "opacity-100 translate-x-0" : "opacity-30 -translate-x-10"
            )}>
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-[var(--primary)] leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>

            <div className={cn(
              "md:w-1/2 h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-1000 transform border-4 border-white",
              activeCard === index ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-3"
            )}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}