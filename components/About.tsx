"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const highlights = [
  "High-quality printing, labeling, and packaging",
  "Advanced technology and modern machinery",
  "Customer-first approach for every project",
  "Reliable delivery and quality assurance",
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="bg-white py-14 md:py-[42px]">
      <div className="site-container px-4 sm:px-0">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-[54px]">
          <div className="text-left">
            <p className={`section-eyebrow transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>About SMRKPPS</p>
            <h2 className={`mt-3 max-w-[390px] text-[22px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[24px] md:max-w-[390px] lg:text-[33px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Delivering Smarter Packaging Solutions
            </h2>
            <p className={`mt-7 max-w-[410px] text-[13px] font-medium leading-[1.85] text-[var(--smrk-ink)] md:text-[14px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              SMRKPPS is a trusted packaging partner delivering high-quality printing, labeling, and packaging
              solutions to businesses across industries. With advanced technology and a customer-first approach,
              we help brands create packaging that protects, promotes, and performs.
            </p>
            <a href="/about" className={`blue-button mt-7 min-w-[180px] md:min-w-[200px] lg:min-w-[278px] transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Know more About us <ArrowRight size={18} />
            </a>
          </div>

          <div className={`hidden lg:grid gap-4 rounded-[4px] border border-[var(--smrk-line)] bg-[var(--smrk-soft)] p-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {highlights.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-[4px] bg-white p-4 shadow-[0_2px_8px_rgba(6,27,74,0.06)]" style={{ animationDelay: `${400 + index * 100}ms` }}>
                <CheckCircle2 className="shrink-0 text-[var(--smrk-blue)]" size={24} strokeWidth={1.7} />
                <span className="text-[13px] font-bold text-[var(--smrk-navy)] md:text-[14px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
