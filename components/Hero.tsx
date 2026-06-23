"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Settings, Truck, Tag } from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    subtitle: "Materials & Print",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    subtitle: "Tailored to Needs",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "On-Time Service",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    subtitle: "Best Value",
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      {/* Background Image - only visible on smaller screens */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/hero.png"
          alt="Packaging Products Background"
          fill
          priority
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>

      <div
        className="site-container relative z-10 flex flex-col"
      >
        {/* Main hero content */}
        <div className="flex flex-1 items-start py-8 md:py-8 lg:py-10 lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 xl:gap-16">
          <div className="w-full max-w-3xl mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-0">
            {/* Pre-heading */}
            <p className={`text-[10px] font-semibold uppercase tracking-wider text-gray-600 md:text-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Premium Packaging Solutions
            </p>

            {/* Heading */}
            <h1 className={`mt-3 font-extrabold uppercase leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-black" style={{ fontSize: "clamp(1.25rem, 5vw, 3.5rem)" }}>
                Packaging That
              </span>
              <br />
              <span
                className="text-[var(--smrk-blue)]"
                style={{ fontSize: "clamp(1.25rem, 5vw, 3.5rem)" }}
              >
                Elevates Your Brand
              </span>
            </h1>


            {/* Blue underline */}
            <div className={`mt-4 h-1 w-16 bg-[var(--smrk-blue)] sm:w-20 mx-auto lg:mx-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />

            {/* Description */}
            <p
              className={`mt-4 max-w-sm mx-auto leading-relaxed text-gray-600 transition-all duration-700 delay-300 sm:max-w-xl lg:mx-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}
            >
              Custom printing, labeling, and packaging solutions designed to make every product stand out.
            </p>

            {/* Buttons */}
            <div className={`mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center sm:justify-start transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link
                href="/products"
                className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-3 rounded-lg bg-[var(--smrk-blue)] px-5 text-[11px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(6,27,74,0.3)] sm:min-h-[50px] sm:px-7 sm:text-[13px] whitespace-nowrap"
              >
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-3 rounded-lg border-2 border-[var(--smrk-blue)] bg-white px-5 text-[11px] font-bold uppercase tracking-wide text-[var(--smrk-blue)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--smrk-blue)] hover:text-white sm:min-h-[50px] sm:px-7 sm:text-[13px] whitespace-nowrap"
              >
                Get a Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RIGHT: Hero Image — only visible on large screens */}
          <div className={`hidden lg:flex items-center justify-end transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div
                className="absolute inset-0 -z-10 scale-90 rounded-full blur-3xl opacity-20"
                style={{ background: "radial-gradient(circle, var(--smrk-blue) 0%, transparent 70%)" }}
              />
              <Image
                src="/hero.png"
                alt="SMRK Packaging Products"
                width={620}
                height={520}
                priority
                className="h-auto w-full max-w-[450px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)] xl:max-w-[580px]"
              />
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="pt-4 pb-6 md:pt-5 md:pb-8 lg:pt-6 lg:pb-10">
          <div className={`rounded-2xl bg-white p-4 shadow-[0_8px_32px_rgba(6,27,74,0.08)] md:p-5 lg:p-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 sm:gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--smrk-blue)]/10 transition-all duration-300 hover:bg-[var(--smrk-blue)]/20 sm:h-9 sm:w-9">
                    <feature.icon className="h-3.5 w-3.5 text-[var(--smrk-blue)] sm:h-4 sm:w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[var(--smrk-blue)] text-[10px] leading-tight sm:text-xs md:text-sm">
                      {feature.title}
                    </h3>
                    <p className="mt-0.5 text-[8px] text-gray-600 leading-tight sm:text-[10px] md:text-xs">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
