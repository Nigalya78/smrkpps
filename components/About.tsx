"use client";

import Image from "next/image";
import { ArrowRight, Cpu, ShieldCheck, Truck } from "lucide-react";

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
  return (
    <section id="about" className="bg-white py-14 md:py-[42px]">
      <div className="site-container grid items-start gap-10 lg:grid-cols-[440px_1fr] lg:gap-[54px]">
        <div>
          <p className="section-eyebrow">About SMRKPPS</p>
          <h2 className="mt-3 max-w-[390px] text-[30px] font-black leading-[1.15] tracking-[-0.02em] md:text-[33px]">
            Delivering Smarter Packaging Solutions
          </h2>
          <p className="mt-7 max-w-[410px] text-[14px] font-medium leading-[1.85] text-[var(--smrk-ink)]">
            SMRKPPS is a trusted packaging partner delivering high-quality printing, labeling, and packaging
            solutions to businesses across industries. With advanced technology and a customer-first approach,
            we help brands create packaging that protects, promotes, and performs.
          </p>
          <a href="/about" className="blue-button mt-7 min-w-[278px]">
            Know More About Us <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="overflow-hidden rounded-[4px] border border-[var(--smrk-line)] bg-white soft-shadow">
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
