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
      <div className="site-container grid items-center gap-8 lg:grid-cols-[240px_1fr]">
        <div className="text-center lg:text-left">
          <p className={`text-[12px] font-black uppercase text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Our Process</p>
          <h2 className={`mt-3 text-[28px] font-black leading-tight tracking-[-0.02em] md:text-[35px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Simple Steps.
            <span className="block">Perfect Packaging.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className={`relative pr-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                <Icon size={45} strokeWidth={1.5} />
                <p className="mt-2 text-[18px] font-black leading-none">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 text-[13px] font-black">{step.title}</h3>
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
