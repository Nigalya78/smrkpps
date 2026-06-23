"use client";

import { ArrowRight, ClipboardCheck, MessageCircle, PackageCheck, PencilRuler, Truck } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const steps = [
  { title: "Consultation", desc: "Understanding your requirements.", icon: MessageCircle },
  { title: "Design", desc: "Creating the perfect packaging design.", icon: PencilRuler },
  { title: "Production", desc: "High-quality manufacturing & printing.", icon: PackageCheck },
  { title: "Quality Check", desc: "Strict quality control at every stage.", icon: ClipboardCheck },
  { title: "Delivery", desc: "Safe & on-time delivery.", icon: Truck },
];

export default function Process() {
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
    <section ref={sectionRef} className="navy-gradient py-10 text-white md:py-[33px]">
      <div className="site-container grid items-center gap-8 lg:grid-cols-[240px_1fr] px-4 sm:px-0">
        <div className="text-left">
          <p className={`text-[12px] font-semibold text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Our Process</p>
          <h2 className={`mt-3 text-[22px] font-bold leading-tight tracking-[-0.02em] md:text-[28px] lg:text-[35px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Simple Steps.
            <span className="block">Perfect Packaging.</span>
          </h2>
        </div>

        <div className="flex justify-start gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:pb-0 max-w-full lg:max-w-none lg:mx-0 snap-x snap-mandatory">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className={`relative flex-shrink-0 w-[180px] rounded-[4px] bg-white/5 p-5 transition-all duration-500 snap-start lg:w-auto lg:bg-transparent lg:p-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 lg:bg-transparent lg:h-auto lg:w-auto lg:justify-start">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-[18px] font-bold leading-none lg:mt-2">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 text-[14px] font-bold lg:text-[13px]">{step.title}</h3>
                <p className="mt-2 max-w-[145px] text-[12px] font-medium leading-[1.55] text-white/90">{step.desc}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute right-2 top-11 hidden text-white lg:block" size={26} strokeWidth={1.8} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
