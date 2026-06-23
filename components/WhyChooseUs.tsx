"use client";

import { BadgeCheck, Cog, Headphones, Leaf, Tags, Truck } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const features = [
  { title: "Premium Quality", icon: BadgeCheck, desc: "Best materials & advanced printing." },
  { title: "Custom Solutions", icon: Cog, desc: "Tailored packaging that fits your brand." },
  { title: "Sustainable Practices", icon: Leaf, desc: "Eco-friendly materials & responsible production." },
  { title: "Fast Turnaround", icon: Truck, desc: "Efficient processes for quick delivery." },
  { title: "Competitive Pricing", icon: Tags, desc: "Best quality at the right price." },
  { title: "Dedicated Support", icon: Headphones, desc: "We're with you at every step." },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-choose-us" ref={sectionRef} className="bg-[var(--smrk-soft)] py-12 md:py-[34px]">
      <div className="site-container px-4 sm:px-0">
        <p className={`section-eyebrow text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Why Choose Us</p>
        <h2 className={`mt-3 text-left text-[24px] font-bold leading-tight tracking-[-0.02em] md:text-[28px] lg:text-[34px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Built on Quality. Driven by Trust.
        </h2>

        <div className="mt-11 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
          {features.map((f, index) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className={`rounded-2xl bg-white p-4 shadow-[0_4px_16px_rgba(6,27,74,0.08)] sm:p-5 lg:border-r lg:border-[var(--smrk-line)] lg:bg-transparent lg:shadow-none lg:p-4 lg:last:border-r-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--smrk-blue)]/10 sm:h-12 sm:w-12 lg:h-auto lg:w-auto lg:bg-transparent transition-all duration-300 hover:bg-[var(--smrk-blue)]/20">
                    <Icon className="text-[var(--smrk-blue)] h-5 w-5 sm:h-8 sm:w-8 lg:h-10 lg:w-10" strokeWidth={1.65} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[15px] font-bold sm:text-[14px] lg:text-[13px]">{f.title}</h3>
                    <p className="mt-1 text-[13px] text-gray-600 leading-relaxed sm:mt-3 sm:text-[12px] lg:mt-2 lg:max-w-[160px] lg:font-medium lg:leading-[1.65] lg:text-[var(--smrk-ink)]">{f.desc}</p>
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
