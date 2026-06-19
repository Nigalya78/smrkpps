import { ArrowRight, ClipboardCheck, MessageCircle, PackageCheck, PencilRuler, Truck } from "lucide-react";

const steps = [
  { title: "Consultation", desc: "Understanding your requirements.", icon: MessageCircle },
  { title: "Design", desc: "Creating the perfect packaging design.", icon: PencilRuler },
  { title: "Production", desc: "High-quality manufacturing & printing.", icon: PackageCheck },
  { title: "Quality Check", desc: "Strict quality control at every stage.", icon: ClipboardCheck },
  { title: "Delivery", desc: "Safe & on-time delivery.", icon: Truck },
];

export default function Process() {
  return (
    <section className="navy-gradient py-10 text-white md:py-[33px]">
      <div className="site-container grid items-center gap-8 lg:grid-cols-[285px_1fr]">
        <div>
          <p className="text-[12px] font-black uppercase text-white">Our Process</p>
          <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.02em] md:text-[35px]">
            Simple Steps.
            <span className="block">Perfect Packaging.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative pr-4">
                <Icon size={45} strokeWidth={1.5} />
                <p className="mt-2 text-[18px] font-black leading-none">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 text-[13px] font-black">{step.title}</h3>
                <p className="mt-2 max-w-[145px] text-[12px] font-medium leading-[1.55] text-white/90">{step.desc}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute right-2 top-11 hidden text-white lg:block" size={26} strokeWidth={1.8} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
