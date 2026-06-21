"use client";

import Image from "next/image";
import { ArrowRight, Cpu, ShieldCheck, Truck } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const cards = [
  {
    title: "Advanced Technology",
    desc: "Modern machines for precision and consistency.",
    image: "/products/img4.jpg",
    icon: Cpu,
  },
  {
    title: "Quality Assurance",
    desc: "Strict quality checks at every stage.",
    image: "/products/img11.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Delivery",
    desc: "Committed to on-time delivery, every time.",
    image: "/products/img9.jpg",
    icon: Truck,
  },
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
      <div className="site-container grid items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-[54px]">
        <div className="text-center lg:text-left">
          <p className={`section-eyebrow transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>About SMRKPPS</p>
          <h2 className={`mt-3 max-w-[390px] text-[28px] font-black leading-[1.15] tracking-[-0.02em] md:text-[33px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Delivering Smarter Packaging Solutions
          </h2>
          <p className={`mt-7 max-w-[410px] text-[14px] font-medium leading-[1.85] text-[var(--smrk-ink)] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            SMRKPPS is a trusted packaging partner delivering high-quality printing, labeling, and packaging
            solutions to businesses across industries. With advanced technology and a customer-first approach,
            we help brands create packaging that protects, promotes, and performs.
          </p>
          <a href="/products" className={`blue-button mt-7 min-w-[278px] transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Explore our Products <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className={`overflow-hidden rounded-[4px] border border-[var(--smrk-line)] bg-white soft-shadow transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                <div className="relative h-[242px]">
                  <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(min-width: 1024px) 280px, 100vw" />
                  <div className="absolute -bottom-8 left-5 grid h-16 w-16 place-items-center rounded-full bg-[var(--smrk-blue)] text-white ring-4 ring-white">
                    <Icon size={30} strokeWidth={1.7} />
                  </div>
                </div>
                <div className="px-5 pb-7 pt-12">
                  <h3 className="text-[16px] font-black">{card.title}</h3>
                  <p className="mt-3 text-[14px] font-medium leading-7 text-[var(--smrk-ink)]">{card.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
