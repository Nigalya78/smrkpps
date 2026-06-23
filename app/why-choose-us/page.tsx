import { ArrowRight, BadgeCheck, Cog, Headphones, Leaf, Tags, Truck } from "lucide-react";
import Link from "next/link";
import PageHero from "../../components/PageHero";

const features = [
  { title: "Premium Quality", icon: BadgeCheck, desc: "Best materials and advanced printing for consistent results." },
  { title: "Custom Solutions", icon: Cog, desc: "Tailored packaging that fits your brand and product needs." },
  { title: "Sustainable Practices", icon: Leaf, desc: "Eco-friendly materials and responsible production choices." },
  { title: "Fast Turnaround", icon: Truck, desc: "Efficient processes planned around quick, reliable delivery." },
  { title: "Competitive Pricing", icon: Tags, desc: "Strong value without compromising on finish or service." },
  { title: "Dedicated Support", icon: Headphones, desc: "Helpful coordination from consultation through delivery." },
];

const benefits = [
  {
    title: "Quality First",
    text: "Every product goes through strict quality checks to ensure it meets our high standards.",
  },
  {
    title: "On-Time Delivery",
    text: "We understand deadlines and commit to delivering your packaging on schedule.",
  },
  {
    title: "Expert Team",
    text: "Our experienced team provides guidance and support throughout your project.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Why Choose Us"
        title="Built on Quality. Driven by Trust."
        text="Every project is handled with careful material selection, precise production, quality checks, and dependable delivery support."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="site-container px-4 sm:px-0">
          <div className="mb-12 text-left">
            <p className="section-eyebrow">Our Commitment</p>
            <h2 className="mt-3 text-[24px] font-bold leading-tight tracking-[-0.02em] md:text-[28px] lg:text-[34px]">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="rounded-[4px] border border-[var(--smrk-line)] bg-white p-6 soft-shadow md:p-8">
                <div className="flex items-center gap-3 md:block">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--smrk-blue)]/10 md:h-12 md:w-12">
                    <span className="text-[18px] font-bold text-[var(--smrk-blue)] md:text-[24px]">{index + 1}</span>
                  </div>
                  <h3 className="text-[18px] font-bold md:mt-5 md:text-[20px]">{benefit.title}</h3>
                </div>
                <p className="mt-3 text-[14px] font-medium leading-7 text-[var(--smrk-ink)] md:text-[15px]">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--smrk-soft)] py-14 md:py-20">
        <div className="site-container px-4 sm:px-0">
          <div className="mb-12 text-left">
            <p className="section-eyebrow">Our Features</p>
            <h2 className="mt-3 text-[24px] font-bold leading-tight tracking-[-0.02em] md:text-[28px] lg:text-[34px]">
              Why Clients Trust Us
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="overflow-hidden rounded-[4px] border border-[var(--smrk-line)] bg-white soft-shadow">
                  <div className="p-6 md:p-7">
                    <Icon className="text-[var(--smrk-blue)]" size={40} strokeWidth={1.65} />
                    <h3 className="mt-5 text-[17px] font-bold md:text-[18px]">{feature.title}</h3>
                    <p className="mt-3 text-[13px] font-medium leading-7 text-[var(--smrk-ink)] md:text-[14px]">{feature.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="site-container px-4 sm:px-0">
          <div className="rounded-[8px] bg-[var(--smrk-soft)] px-6 py-10 text-left md:px-12 md:py-14">
            <h2 className="text-[24px] font-bold leading-tight tracking-[-0.02em] md:text-[30px] lg:text-[34px]">
              Experience the SMRKPPS Difference
            </h2>
            <p className="mt-4 max-w-[560px] text-[14px] font-medium leading-7 text-[var(--smrk-ink)] md:text-[15px]">
              Partner with us for packaging solutions that combine quality, reliability, and value for your business.
            </p>
            <Link href="/contact" className="blue-button mt-7 min-w-[180px] md:min-w-[200px]">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
