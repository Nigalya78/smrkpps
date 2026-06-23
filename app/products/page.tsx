import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  Briefcase,
  ChevronDown,
  ClipboardList,
  Cog,
  Cuboid,
  Package,
  PackageCheck,
  ShoppingBag,
  Tags,
} from "lucide-react";

const products = [
  {
    title: "Product 1",
    image: "/products/img1.png",
    desc: "High-quality packaging solution.",
    icon: ClipboardList,
  },
  {
    title: "Product 2",
    image: "/products/img2.jpg",
    desc: "Durable packaging solution.",
    icon: Box,
  },
  {
    title: "Product 3",
    image: "/products/img3.jpg",
    desc: "Premium packaging solution.",
    icon: Package,
  },
  {
    title: "Product 4",
    image: "/products/img4.jpg",
    desc: "Versatile packaging solution.",
    icon: PackageCheck,
  },
  {
    title: "Product 5",
    image: "/products/img5.png",
    desc: "Custom packaging solution.",
    icon: Tags,
  },
  {
    title: "Product 6",
    image: "/products/img6.png",
    desc: "Eco-friendly packaging solution.",
    icon: ShoppingBag,
  },
  {
    title: "Product 7",
    image: "/products/img7.jpg",
    desc: "Retail packaging solution.",
    icon: Briefcase,
  },
  {
    title: "Product 8",
    image: "/products/img8.jpg",
    desc: "Industrial packaging solution.",
    icon: Cog,
  },
  {
    title: "Product 9",
    image: "/products/img9.jpg",
    desc: "Protective packaging solution.",
    icon: ClipboardList,
  },
  {
    title: "Product 10",
    image: "/products/img10.jpg",
    desc: "Lightweight packaging solution.",
    icon: Box,
  },
  {
    title: "Product 11",
    image: "/products/img11.jpg",
    desc: "Custom printed packaging solution.",
    icon: Package,
  },
  {
    title: "Product 12",
    image: "/products/img12.jpg",
    desc: "Flexible packaging solution.",
    icon: PackageCheck,
  },
  {
    title: "Product 13",
    image: "/products/img13.jpg",
    desc: "Corrugated packaging solution.",
    icon: Tags,
  },
  {
    title: "Product 14",
    image: "/products/img14.jpg",
    desc: "Paper packaging solution.",
    icon: ShoppingBag,
  },
  {
    title: "Product 15",
    image: "/products/img15.jpg",
    desc: "Sustainable packaging solution.",
    icon: Briefcase,
  },
  {
    title: "Product 16",
    image: "/products/img16.jpg",
    desc: "Heavy-duty packaging solution.",
    icon: Cog,
  },
  {
    title: "Product 17",
    image: "/products/img17.jpg",
    desc: "Premium quality packaging solution.",
    icon: ClipboardList,
  },
  {
    title: "Product 18",
    image: "/products/img18.jpg",
    desc: "Complete packaging solution.",
    icon: Box,
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <section className="bg-[linear-gradient(120deg,#ffffff_0%,#f8fbff_55%,#edf4fb_100%)] py-12 md:py-16">
        <div className="site-container">
          <nav className="flex items-center gap-3 text-[13px] font-semibold text-[var(--smrk-ink)]/75">
            <Link href="/#home" className="transition hover:text-[var(--smrk-blue)]">
              Home
            </Link>
            <ChevronDown className="-rotate-90 text-[var(--smrk-ink)]/60" size={14} strokeWidth={2.4} />
            <span className="font-black text-[var(--smrk-blue)]">Products</span>
          </nav>

          <div className="mt-8 max-w-[620px] text-center md:text-left">
            <h1 className="text-[46px] font-black leading-none tracking-[-0.02em] text-[var(--smrk-navy)] md:text-[64px]">
              Products
            </h1>
            <div className="mt-5 h-[3px] w-[58px] bg-[var(--smrk-blue)] mx-auto md:mx-0" />
            <p className="mt-5 text-[16px] font-medium leading-8 text-[var(--smrk-ink)]">
              Explore our complete range of high-quality packaging solutions designed to protect, promote, and elevate your brand.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_45%)] pb-8 md:pb-10">
        <div className="site-container">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.title}
                className="group overflow-hidden rounded-[8px] border border-[var(--smrk-line)] bg-white shadow-[0_10px_30px_rgba(7,20,54,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(7,20,54,0.12)]"
              >
                <div className="relative h-[235px] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fd_100%)]">
                  <Image src={product.image} alt={product.title} fill className="object-contain p-7" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="px-6 pb-6 pt-6">
                  <h2 className="text-[18px] font-black leading-tight text-[var(--smrk-navy)]">{product.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 md:pb-16">
        <div className="site-container">
          <div className="relative isolate overflow-hidden rounded-[8px] bg-[linear-gradient(105deg,#edf5ff_0%,#ffffff_58%,#eaf3ff_100%)] px-8 py-10 shadow-[0_12px_32px_rgba(7,20,54,0.06)] md:px-12">
            <div className="absolute right-0 top-0 -z-10 hidden h-full w-[58%] opacity-90 lg:block">
              <div className="absolute bottom-8 left-[8%] h-[160px] w-[160px] rounded-full bg-white shadow-xl">
                <div className="absolute inset-5 rounded-full border-[42px] border-[#f4f1ec] shadow-inner" />
                <Image src="/products/img4.jpg" alt="" width={230} height={120} className="absolute left-[42%] top-[36%] h-[96px] w-[220px] rounded-[3px] object-cover shadow-lg" />
              </div>
              <div className="absolute bottom-10 left-[36%] h-[190px] w-[220px] rounded-[4px] bg-[#bd8247] shadow-xl">
                <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(135deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute left-1/2 top-[58px] grid h-[78px] w-[118px] -translate-x-1/2 place-items-center rounded-full bg-[var(--smrk-blue)]">
                  <Image src="/logo.png" alt="" width={88} height={42} className="w-[88px]" />
                </div>
              </div>
              <div className="absolute bottom-12 right-[6%] h-[205px] w-[205px] rounded-[4px] bg-[#08245f] p-5 text-white shadow-xl">
                <Cuboid className="absolute right-5 top-5 text-white/45" size={44} strokeWidth={1.3} />
                <p className="mt-24 text-[16px] font-black uppercase text-[#f4c76b]">Custom</p>
                <p className="text-[24px] font-black">Packaging</p>
              </div>
            </div>

            <div className="max-w-[420px]">
              <div className="h-[3px] w-[58px] bg-[var(--smrk-blue)]" />
              <h2 className="mt-6 text-[30px] font-black leading-tight tracking-[-0.02em] text-[var(--smrk-navy)] md:text-[40px]">
                Need a Custom Packaging Solution?
              </h2>
              <p className="mt-4 text-[15px] font-medium leading-7 text-[var(--smrk-ink)]">
                We understand your requirements and create packaging that fits your product perfectly.
              </p>
              <Link href="/#contact" className="blue-button mt-7 min-w-[230px]">
                Get a Custom Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
