import { BadgeCheck, Cog, Headphones, Leaf, Tags, Truck } from "lucide-react";
import PageHero from "../../components/PageHero";

const features = [
  { title: "Premium Quality", icon: BadgeCheck, desc: "Best materials and advanced printing for consistent results." },
  { title: "Custom Solutions", icon: Cog, desc: "Tailored packaging that fits your brand and product needs." },
  { title: "Sustainable Practices", icon: Leaf, desc: "Eco-friendly materials and responsible production choices." },
  { title: "Fast Turnaround", icon: Truck, desc: "Efficient processes planned around quick, reliable delivery." },
  { title: "Competitive Pricing", icon: Tags, desc: "Strong value without compromising on finish or service." },
  { title: "Dedicated Support", icon: Headphones, desc: "Helpful coordination from consultation through delivery." },
];

export default function WhyChooseUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Why Choose Us"
        title="Built on Quality. Driven by Trust."
        text="Every project is handled with careful material selection, precise production, quality checks, and dependable delivery support."
      />

      <section className="bg-[var(--smrk-soft)] py-14 md:py-20">
        <div className="site-container">
          <div className="grid gap-y-9 sm:grid-cols-2 lg:grid-cols-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="px-6 text-center lg:border-r lg:border-[var(--smrk-line)] lg:last:border-r-0">
                  <Icon className="mx-auto text-[var(--smrk-blue)]" size={54} strokeWidth={1.65} />
                  <h2 className="mt-6 text-[14px] font-black">{feature.title}</h2>
                  <p className="mx-auto mt-3 max-w-[180px] text-[13px] font-medium leading-[1.75] text-[var(--smrk-ink)]">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="site-container grid gap-5 md:grid-cols-3">
          {features.slice(0, 3).map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="rounded-[4px] border border-[var(--smrk-line)] bg-white p-7 soft-shadow">
                <Icon className="text-[var(--smrk-blue)]" size={48} strokeWidth={1.65} />
                <h3 className="mt-5 text-[18px] font-black">{feature.title}</h3>
                <p className="mt-3 text-[14px] font-medium leading-7 text-[var(--smrk-ink)]">{feature.desc}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
