"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, Cog, Tags, Truck } from "lucide-react";

const highlights = [
  {
    title: "Premium Quality",
    text: "Materials & Print",
    icon: BadgeCheck,
  },
  {
    title: "Custom Solutions",
    text: "Tailored for You",
    icon: Cog,
  },
  {
    title: "On-Time Delivery",
    text: "Every Commitment",
    icon: Truck,
  },
  {
    title: "Competitive Pricing",
    text: "Best Value Always",
    icon: Tags,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[#f7f8fa]"
    >
      <div className="site-container">

        {/* HERO AREA */}
        <div className="relative">

          {/* Mobile Background Image */}
          <div
            className="
              absolute inset-0
              lg:hidden
              bg-[url('/hero.png')]
              bg-no-repeat
              bg-right-center
              bg-contain
              opacity-[0.06]
              pointer-events-none
            "
          />

          <div className="relative z-10 grid items-center gap-6 py-10 lg:grid-cols-[55%_45%] xl:gap-10">

  {/* LEFT CONTENT */}
  <div className="max-w-[700px]">

    <h1
      className="
        font-extrabold
        uppercase
        leading-[1.05]
        tracking-[-0.03em]
        text-[var(--smrk-ink)]
        max-w-[11ch]
        text-[clamp(2.5rem,5vw,5rem)]
      "
    >
      Packaging That

      <br />

      <span className="text-[var(--smrk-blue)]">
        Elevates Your Brand
      </span>
    </h1>

    <p
      className="
        mt-6
        max-w-[620px]
        text-[clamp(1rem,1.2vw,1.25rem)]
        leading-[1.8]
        text-[var(--smrk-muted)]
      "
    >
      Custom printing, labeling, and packaging solutions
      designed to make every product stand out.
    </p>

    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      ...
    </div>

  </div>

  {/* IMAGE */}
  <div className="hidden lg:flex items-center justify-center">

    <Image
      src="/hero.png"
      alt="SMRK Packaging Products"
      width={1200}
      height={900}
      priority
      className="
        w-full
        max-w-[700px]
        h-auto
        object-contain
      "
    />

  </div>

</div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-8 border-t border-[var(--smrk-line)] py-10 lg:grid-cols-4">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="px-4 text-center lg:border-r lg:border-[var(--smrk-line)] lg:text-left lg:last:border-r-0"
              >
                <Icon
                  size={40}
                  strokeWidth={1.8}
                  className="mx-auto mb-4 text-[var(--smrk-blue)] lg:mx-0"
                />

                <h4 className="text-[15px] font-bold text-[var(--smrk-ink)]">
                  {item.title}
                </h4>

                <p className="mt-2 text-[14px] text-[var(--smrk-muted)]">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}