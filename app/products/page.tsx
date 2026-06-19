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
  Search,
  Settings2,
  ShoppingBag,
  Tags,
} from "lucide-react";

const products = [
  {
    title: "Labels & Stickers",
    image: "/products/img4.jpg",
    desc: "High-quality labels for branding, information & compliance.",
    icon: ClipboardList,
  },
  {
    title: "Corrugated Boxes",
    image: "/products/img13.jpg",
    desc: "Strong, durable & eco-friendly packaging for every need.",
    icon: Box,
  },
  {
    title: "Mono Cartons",
    image: "/products/img5.png",
    desc: "Premium cartons for pharma, cosmetics & retail products.",
    icon: Package,
  },
  {
    title: "Flexible Packaging",
    image: "/products/img15.jpg",
    desc: "Versatile, lightweight & protective packaging.",
    icon: PackageCheck,
  },
  {
    title: "Custom Printed Packaging",
    image: "/products/img1.png",
    desc: "Eye-catching prints that elevate your brand identity.",
    icon: Tags,
  },
  {
    title: "Paper Bags",
    image: "/products/img18.jpg",
    desc: "Eco-friendly paper bags for retail & gifting.",
    icon: ShoppingBag,
  },
  {
    title: "Retail Packaging",
    image: "/products/img6.png",
    desc: "Attractive & functional packaging for retail products.",
    icon: Briefcase,
  },
  {
    title: "Industrial Packaging",
    image: "/products/img9.jpg",
    desc: "Heavy-duty packaging solutions for industrial applications.",
    icon: Cog,
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

          <div className="mt-8 max-w-[620px]">
            <h1 className="text-[46px] font-black leading-none tracking-[-0.02em] text-[var(--smrk-navy)] md:text-[64px]">
              Products
            </h1>
            <div className="mt-5 h-[3px] w-[58px] bg-[var(--smrk-blue)]" />
            <p className="mt-5 text-[16px] font-medium leading-8 text-[var(--smrk-ink)]">
              Explore our complete range of high-quality packaging solutions designed to protect, promote, and elevate your brand.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <label className="flex min-h-[58px] w-full max-w-[560px] items-center gap-4 rounded-[7px] border border-[var(--smrk-line)] bg-white px-5 text-[14px] font-medium text-[var(--smrk-muted)] shadow-[0_8px_24px_rgba(7,20,54,0.04)]">
              <Search size={21} className="text-[var(--smrk-navy)]" strokeWidth={1.8} />
              <input
                type="search"
                aria-label="Search products"
                placeholder="Search products..."
                className="w-full bg-transparent outline-none placeholder:text-[var(--smrk-muted)]"
              />
            </label>
            <button className="flex min-h-[58px] w-full items-center justify-between gap-5 rounded-[7px] border border-[var(--smrk-line)] bg-white px-5 text-[14px] font-semibold text-[var(--smrk-ink)] shadow-[0_8px_24px_rgba(7,20,54,0.04)] md:w-[200px]">
              <span className="inline-flex items-center gap-3">
                <Settings2 size={19} className="text-[var(--smrk-blue)]" strokeWidth={1.8} />
                All Categories
              </span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_45%)] pb-8 md:pb-10">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <article
                  key={product.title}
                  className="group overflow-hidden rounded-[8px] border border-[var(--smrk-line)] bg-white shadow-[0_10px_30px_rgba(7,20,54,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(7,20,54,0.12)]"
                >
                  <div className="relative h-[235px] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fd_100%)]">
                    <Image src={product.image} alt={product.title} fill className="object-contain p-7" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
                  </div>
                  <div className="relative px-6 pb-7 pt-8">
                    <div className="absolute -top-8 left-6 grid h-[54px] w-[54px] place-items-center rounded-full border border-[var(--smrk-line)] bg-white text-[var(--smrk-blue)] shadow-[0_8px_18px_rgba(7,20,54,0.08)]">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>
                    <h2 className="text-[18px] font-black leading-tight text-[var(--smrk-navy)]">{product.title}</h2>
                    <p className="mt-4 min-h-[56px] text-[14px] font-medium leading-7 text-[var(--smrk-ink)]">{product.desc}</p>
                    <Link href="/#contact" className="mt-4 inline-flex items-center gap-2 text-[13px] font-black text-[var(--smrk-blue)]">
                      View Products <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
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
