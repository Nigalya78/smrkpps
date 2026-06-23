import Image from "next/image";
import { ArrowRight, Cpu, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
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
        <div className="site-container px-4 sm:px-0 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="hidden lg:grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-[220px] overflow-hidden rounded-[4px] border border-[var(--smrk-line)] sm:min-h-[280px] md:min-h-[360px]">
              <Image src="/products/img4.jpg" alt="Packaging production" fill className="object-cover" sizes="(min-width: 1024px) 420px, 100vw" />
            </div>
            <div className="grid gap-5">
              <div className="relative min-h-[100px] overflow-hidden rounded-[4px] border border-[var(--smrk-line)] sm:min-h-[130px] md:min-h-[170px]">
                <Image src="/products/img11.jpg" alt="Packaging quality check" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative min-h-[100px] overflow-hidden rounded-[4px] border border-[var(--smrk-line)] sm:min-h-[130px] md:min-h-[170px]">
                <Image src="/products/img9.jpg" alt="Packaging delivery" fill className="object-cover" sizes="300px" />
              </div>
            </div>
          </div>

          <div className="text-left">
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="mt-3 max-w-[620px] text-[24px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[30px] lg:text-[42px]">
              Packaging Solutions Built on Quality
            </h2>
            <p className="mt-6 text-[14px] font-medium leading-7 text-[var(--smrk-ink)] md:text-[15px] md:leading-8">
              SMRK PPS specializes in labels, stickers, corrugated boxes, flexible packaging, and custom printed packaging. Our team combines modern production capability with careful service so every order feels consistent, polished, and dependable.
            </p>
            <p className="mt-4 text-[14px] font-medium leading-7 text-[var(--smrk-ink)] md:text-[15px] md:leading-8">
              From material selection to final delivery, we focus on clean print quality, practical packaging performance, and timelines that help brands move with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--smrk-soft)] py-14 md:py-16">
        <div className="site-container px-4 sm:px-0 grid gap-7 md:grid-cols-3">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="overflow-hidden rounded-[4px] border border-[var(--smrk-line)] bg-white soft-shadow">
                <div className="relative h-[200px] md:h-[230px]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                  <div className="absolute -bottom-8 left-5 grid h-14 w-14 md:h-16 md:w-16 place-items-center rounded-full bg-[var(--smrk-blue)] text-white ring-4 ring-white">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>
                </div>
                <div className="px-4 pb-6 pt-10 md:px-5 md:pb-7 md:pt-12">
                  <h3 className="text-[15px] font-bold md:text-[16px]">{item.title}</h3>
                  <p className="mt-3 text-[13px] font-medium leading-7 text-[var(--smrk-ink)] md:text-[14px]">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="site-container px-4 sm:px-0">
          <div className="rounded-[8px] bg-[var(--smrk-soft)] px-6 py-10 text-left md:px-12 md:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <h2 className="text-[24px] font-bold leading-tight tracking-[-0.02em] md:text-[30px] lg:text-[34px]">
                  Ready to Work Together?
                </h2>
                <p className="mt-4 max-w-[560px] text-[14px] font-medium leading-7 text-[var(--smrk-ink)] md:text-[15px]">
                  Let&apos;s discuss your packaging requirements and create solutions that match your brand and product needs.
                </p>
                <Link href="/contact" className="blue-button mt-7 min-w-[180px] md:min-w-[200px]">
                  Contact Us <ArrowRight size={18} />
                </Link>
              </div>
              <div className="hidden items-center justify-center lg:flex">
                <Image
                  src="/contact.png"
                  alt="Contact SMRK PPS"
                  width={400}
                  height={320}
                  className="h-auto max-h-[240px] w-auto max-w-full object-contain"
                  sizes="(min-width: 1024px) 35vw, 0vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
