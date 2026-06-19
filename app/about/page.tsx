import Image from "next/image";
import { Cpu, ShieldCheck, Truck } from "lucide-react";
import PageHero from "../../components/PageHero";

const strengths = [
  {
    title: "Advanced Technology",
    text: "Modern machines for precision and consistency.",
    image: "/products/img4.jpg",
    icon: Cpu,
  },
  {
    title: "Quality Assurance",
    text: "Strict quality checks at every stage.",
    image: "/products/img11.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Delivery",
    text: "Committed to on-time delivery, every time.",
    image: "/products/img9.jpg",
    icon: Truck,
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About SMRKPPS"
        title="Delivering Smarter Packaging Solutions"
        text="We help brands create packaging that protects, promotes, and performs with reliable printing, labeling, and custom packaging support."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden rounded-[4px] border border-[var(--smrk-line)]">
              <Image src="/products/img4.jpg" alt="Packaging production" fill className="object-cover" sizes="(min-width: 1024px) 420px, 100vw" />
            </div>
            <div className="grid gap-5">
              <div className="relative min-h-[170px] overflow-hidden rounded-[4px] border border-[var(--smrk-line)]">
                <Image src="/products/img11.jpg" alt="Packaging quality check" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative min-h-[170px] overflow-hidden rounded-[4px] border border-[var(--smrk-line)]">
                <Image src="/products/img9.jpg" alt="Packaging delivery" fill className="object-cover" sizes="300px" />
              </div>
            </div>
          </div>

          <div>
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="mt-3 max-w-[620px] text-[30px] font-black leading-[1.15] tracking-[-0.02em] md:text-[42px]">
              Packaging Solutions Built on Quality
            </h2>
            <p className="mt-6 text-[15px] font-medium leading-8 text-[var(--smrk-ink)]">
              SMRK PPS specializes in labels, stickers, corrugated boxes, flexible packaging, and custom printed packaging. Our team combines modern production capability with careful service so every order feels consistent, polished, and dependable.
            </p>
            <p className="mt-4 text-[15px] font-medium leading-8 text-[var(--smrk-ink)]">
              From material selection to final delivery, we focus on clean print quality, practical packaging performance, and timelines that help brands move with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--smrk-soft)] py-14 md:py-16">
        <div className="site-container grid gap-7 md:grid-cols-3">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="overflow-hidden rounded-[4px] border border-[var(--smrk-line)] bg-white soft-shadow">
                <div className="relative h-[230px]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                  <div className="absolute -bottom-8 left-5 grid h-16 w-16 place-items-center rounded-full bg-[var(--smrk-blue)] text-white ring-4 ring-white">
                    <Icon size={30} strokeWidth={1.7} />
                  </div>
                </div>
                <div className="px-5 pb-7 pt-12">
                  <h3 className="text-[16px] font-black">{item.title}</h3>
                  <p className="mt-3 text-[14px] font-medium leading-7 text-[var(--smrk-ink)]">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
