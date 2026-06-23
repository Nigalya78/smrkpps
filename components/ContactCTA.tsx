"use client";

import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function ContactCTA() {
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
    <section id="contact" ref={sectionRef} className="relative bg-[var(--smrk-soft)] py-0">
      <div className="site-container px-4 sm:px-0 grid min-h-[325px] items-center gap-8 md:grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative hidden min-h-[325px] items-center justify-center lg:flex overflow-hidden">
          <Image
            src="/contact.png"
            alt="Contact SMRK PPS"
            width={400}
            height={325}
            className={`h-auto max-h-[280px] w-auto max-w-full object-contain transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            sizes="(min-width: 1024px) 40vw, 0vw"
          />
        </div>

        <div className="relative py-14 md:py-[50px] text-left">
          <div className="pointer-events-none absolute right-0 top-7 hidden h-48 w-48 border-[12px] border-[#dfe5ee] opacity-45 lg:block" />
          <h2 className={`max-w-[530px] text-[24px] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[28px] md:text-[32px] lg:text-[39px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Let&apos;s Build Better Packaging Together
          </h2>
          <div className={`mt-5 h-[2px] w-44 bg-[var(--smrk-blue)] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
          <p className={`mt-6 max-w-[450px] text-[13px] font-medium leading-[1.7] md:text-[14px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Have a packaging requirement? We&apos;re here to help with the right solution for your business.
          </p>

          <div className={`mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium justify-start transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-flex items-center gap-3">
              <Phone className="text-[var(--smrk-blue)]" size={24} /> +97 1555886130
            </span>
            <span className="inline-flex items-center gap-3">
              <Mail className="text-[var(--smrk-blue)]" size={24} /> sales@smrkpps.com
            </span>
          </div>

          <a href="/contact" className={`blue-button mt-7 min-w-[180px] md:min-w-[190px] transition-all duration-500 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Get In Touch <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
