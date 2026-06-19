"use client";

import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-[var(--smrk-soft)] py-0">
      <div className="site-container grid min-h-[325px] items-center gap-8 lg:grid-cols-[610px_1fr]">
        <div className="relative hidden min-h-[325px] lg:block">
          <div className="absolute bottom-0 left-0 h-[230px] w-[190px] rounded-sm bg-[#c88947] shadow-xl">
              <div className="absolute left-1/2 top-12 grid h-24 w-24 -translate-x-1/2 place-items-center rounded-full bg-[var(--smrk-blue)]">
              <Image src="/logo.png" alt="" width={80} height={37} />
            </div>
          </div>
          <Image src="/products/img4.jpg" alt="Packaging labels" width={260} height={210} className="absolute bottom-8 left-4 h-36 w-48 rounded-sm object-cover shadow-xl" />
          <div className="absolute bottom-5 left-[235px] h-[120px] w-[150px] rounded-sm bg-[#082b72] shadow-xl" />
          <div className="absolute bottom-4 left-[395px] h-[90px] w-[130px] rounded-sm bg-white shadow-xl">
            <Image src="/products/img1.png" alt="" fill className="object-cover" sizes="130px" />
          </div>
        </div>

        <div className="relative py-14 md:py-[50px]">
          <div className="pointer-events-none absolute right-0 top-7 hidden h-48 w-48 border-[12px] border-[#dfe5ee] opacity-45 lg:block" />
          <h2 className="max-w-[530px] text-[28px] font-black uppercase leading-[1.15] tracking-[-0.02em] sm:text-[32px] md:text-[39px]">
            Let&apos;s Build Better Packaging Together
          </h2>
          <div className="mt-5 h-[2px] w-44 bg-[var(--smrk-blue)]" />
          <p className="mt-6 max-w-[450px] text-[14px] font-medium leading-[1.7]">
            Have a packaging requirement? We&apos;re here to help with the right solution for your business.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium">
            <span className="inline-flex items-center gap-3">
              <Phone className="text-[var(--smrk-blue)]" size={24} /> +91 99999 99999
            </span>
            <span className="inline-flex items-center gap-3">
              <Mail className="text-[var(--smrk-blue)]" size={24} /> info@smrkpps.com
            </span>
          </div>

          <a href="/contact" className="blue-button mt-7 min-w-[190px]">
            Get In Touch <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
