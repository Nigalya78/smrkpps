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
      <div className="site-container grid min-h-[325px] items-center gap-8 md:grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative hidden min-h-[325px] lg:block overflow-hidden">
          <div className={`absolute bottom-0 left-0 h-[230px] w-[190px] rounded-sm bg-[#c88947] shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <div className="absolute left-1/2 top-12 grid h-24 w-24 -translate-x-1/2 place-items-center rounded-full bg-[var(--smrk-blue)]">
              <Image src="/logo.png" alt="" width={80} height={37} />
            </div>
          </div>
          <Image src="/products/img4.jpg" alt="Packaging labels" width={260} height={210} className={`absolute bottom-8 left-4 h-36 w-48 rounded-sm object-cover shadow-xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
          <div className={`absolute bottom-5 left-[235px] h-[120px] w-[150px] rounded-sm bg-[#082b72] shadow-xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
          <div className={`absolute bottom-4 left-[395px] h-[90px] w-[130px] rounded-sm bg-white shadow-xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <Image src="/products/img1.png" alt="" fill className="object-cover" sizes="130px" />
          </div>
        </div>

        <div className="relative py-14 md:py-[50px] text-center lg:text-left">
          <div className="pointer-events-none absolute right-0 top-7 hidden h-48 w-48 border-[12px] border-[#dfe5ee] opacity-45 lg:block" />
          <h2 className={`max-w-[530px] text-[28px] font-black uppercase leading-[1.15] tracking-[-0.02em] sm:text-[32px] md:text-[39px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Let&apos;s Build Better Packaging Together
          </h2>
          <div className={`mt-5 h-[2px] w-44 bg-[var(--smrk-blue)] mx-auto lg:mx-0 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
          <p className={`mt-6 max-w-[450px] text-[14px] font-medium leading-[1.7] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Have a packaging requirement? We&apos;re here to help with the right solution for your business.
          </p>

          <div className={`mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium justify-center lg:justify-start transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-flex items-center gap-3">
              <Phone className="text-[var(--smrk-blue)]" size={24} /> +91 99999 99999
            </span>
            <span className="inline-flex items-center gap-3">
              <Mail className="text-[var(--smrk-blue)]" size={24} /> info@smrkpps.com
            </span>
          </div>

          <a href="/contact" className={`blue-button mt-7 min-w-[190px] transition-all duration-500 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Get In Touch <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
