"use client";

import { BadgeCheck, Cog, Headphones, Leaf, Tags, Truck } from "lucide-react";

const features = [
  { title: "Premium Quality", icon: BadgeCheck, desc: "Best materials & advanced printing." },
  { title: "Custom Solutions", icon: Cog, desc: "Tailored packaging that fits your brand." },
  { title: "Sustainable Practices", icon: Leaf, desc: "Eco-friendly materials & responsible production." },
  { title: "Fast Turnaround", icon: Truck, desc: "Efficient processes for quick delivery." },
  { title: "Competitive Pricing", icon: Tags, desc: "Best quality at the right price." },
  { title: "Dedicated Support", icon: Headphones, desc: "We're with you at every step." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[var(--smrk-soft)] py-12 md:py-[34px]">
      <div className="site-container">
        <p className="section-eyebrow text-center">Why Choose Us</p>
        <h2 className="mt-3 text-center text-[28px] font-black leading-tight tracking-[-0.02em] md:text-[34px]">
          Built on Quality. Driven by Trust.
        </h2>

        <div className="mt-11 grid gap-y-9 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="px-6 text-center lg:border-r lg:border-[var(--smrk-line)] lg:last:border-r-0">
                <Icon className="mx-auto text-[var(--smrk-blue)]" size={51} strokeWidth={1.65} />
                <h3 className="mt-6 text-[13px] font-black">{f.title}</h3>
                <p className="mx-auto mt-3 max-w-[160px] text-[12px] font-medium leading-[1.65] text-[var(--smrk-ink)]">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
