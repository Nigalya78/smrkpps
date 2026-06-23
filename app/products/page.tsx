"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  Box,
  Briefcase,
  ChevronLeft,
  ChevronRight,
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
    title: "Wedges",
    image: "/products/img2.jpg",
    desc: "Durable packaging solution.",
    icon: Box,
  },
  {
    title: "Eyelets",
    image: "/products/img3.jpg",
    desc: "Premium packaging solution.",
    icon: Package,
  },
  {
    title: "Color Label Stickers",
    image: "/products/img4.jpg",
    desc: "Versatile packaging solution.",
    icon: PackageCheck,
  },
  {
    title: "Magnifier",
    image: "/products/img5.png",
    desc: "Custom packaging solution.",
    icon: Tags,
  },
  {
    title: "Rubber Bands",
    image: "/products/img6.png",
    desc: "Eco-friendly packaging solution.",
    icon: ShoppingBag,
  },
  {
    title: "Rubber Suckers",
    image: "/products/img7.jpg",
    desc: "Retail packaging solution.",
    icon: Briefcase,
  },
  {
    title: "Olfa Cutter",
    image: "/products/img8.jpg",
    desc: "Industrial packaging solution.",
    icon: Cog,
  },
  {
    title: "Stretch Fill",
    image: "/products/img9.jpg",
    desc: "Protective packaging solution.",
    icon: ClipboardList,
  },
  {
    title: "Craft papers",
    image: "/products/img10.jpg",
    desc: "Lightweight packaging solution.",
    icon: Box,
  },
  {
    title: "Grey Board",
    image: "/products/img11.jpg",
    desc: "Custom printed packaging solution.",
    icon: Package,
  },
  {
    title: "Edge Protector",
    image: "/products/img12.jpg",
    desc: "Flexible packaging solution.",
    icon: PackageCheck,
  },
  {
    title: "Squeeze Rubber",
    image: "/products/img13.jpg",
    desc: "Corrugated packaging solution.",
    icon: Tags,
  },
  {
    title: "Olfa Blade",
    image: "/products/img14.jpg",
    desc: "Paper packaging solution.",
    icon: ShoppingBag,
  },
  {
    title: "Teflon Tape",
    image: "/products/img15.jpg",
    desc: "Sustainable packaging solution.",
    icon: Briefcase,
  },
  {
    title: "Viscovita Sponge",
    image: "/products/img16.jpg",
    desc: "Heavy-duty packaging solution.",
    icon: Cog,
  },
  {
    title: "Shopping bag Rope",
    image: "/products/img17.jpg",
    desc: "Premium quality packaging solution.",
    icon: ClipboardList,
  },
  {
    title: "Strapping Roll",
    image: "/products/img18.jpg",
    desc: "Complete packaging solution.",
    icon: Box,
  },
];

export default function ProductsPage() {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Our Products"
        title="Products"
        text="Explore our complete range of high-quality packaging solutions designed to protect, promote, and elevate your brand."
      />

      <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_45%)] pt-8 pb-8 md:pt-10 md:pb-10">
        <div className="site-container px-4 sm:px-0">
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <article
                key={product.title}
                className="group overflow-hidden rounded-xl border border-[var(--smrk-line)] bg-white shadow-[0_4px_20px_rgba(6,27,74,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(6,27,74,0.14)]"
              >
                <div className="relative h-[160px] overflow-hidden md:h-[200px] lg:h-[235px]">
                  <Image src={product.image} alt={product.title} fill className="object-cover object-center transition-transform duration-300 group-hover:scale-105" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="px-4 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5">
                  <h2 className="text-[13px] font-bold leading-tight text-[var(--smrk-navy)] md:text-[15px]">{product.title}</h2>
                  <div className="mt-2 h-[3px] w-8 rounded-full bg-[var(--smrk-blue)]" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[var(--smrk-line)] pt-6 sm:flex-row">
            <div className="flex items-center gap-3 text-[13px] font-medium text-[var(--smrk-ink)]">
              <span>Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                className="min-h-[38px] rounded-[4px] border border-[var(--smrk-line)] bg-white px-3 text-[13px] font-bold text-[var(--smrk-navy)] outline-none focus:border-[var(--smrk-blue)]"
              >
                <option value={8}>8</option>
                <option value={12}>12</option>
                <option value={16}>16</option>
                <option value={24}>24</option>
                <option value={products.length}>All</option>
              </select>
              <span>per page</span>
              <span className="hidden text-[var(--smrk-muted)] sm:inline">|</span>
              <span className="hidden sm:inline">
                Page {currentPage} of {totalPages}
              </span>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-[var(--smrk-line)] bg-white text-[var(--smrk-navy)] transition hover:border-[var(--smrk-blue)] hover:text-[var(--smrk-blue)] disabled:opacity-40 disabled:hover:border-[var(--smrk-line)] disabled:hover:text-[var(--smrk-navy)]"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`inline-flex h-9 min-w-[36px] items-center justify-center rounded-[4px] border px-3 text-[13px] font-bold transition ${
                        page === currentPage
                          ? 'border-[var(--smrk-blue)] bg-[var(--smrk-blue)] text-white'
                          : 'border-[var(--smrk-line)] bg-white text-[var(--smrk-navy)] hover:border-[var(--smrk-blue)] hover:text-[var(--smrk-blue)]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-[var(--smrk-line)] bg-white text-[var(--smrk-navy)] transition hover:border-[var(--smrk-blue)] hover:text-[var(--smrk-blue)] disabled:opacity-40 disabled:hover:border-[var(--smrk-line)] disabled:hover:text-[var(--smrk-navy)]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 md:pb-16">
        <div className="site-container px-4 sm:px-0">
          <div className="relative isolate overflow-hidden rounded-[8px] bg-[linear-gradient(105deg,#edf5ff_0%,#ffffff_58%,#eaf3ff_100%)] px-6 py-10 shadow-[0_12px_32px_rgba(7,20,54,0.06)] md:px-12">
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
                <p className="mt-24 text-[16px] font-bold text-[#f4c76b]">Custom</p>
                <p className="text-[24px] font-bold">Packaging</p>
              </div>
            </div>

            <div className="max-w-[420px] text-left">
              <div className="h-[3px] w-[58px] bg-[var(--smrk-blue)]" />
              <h2 className="mt-6 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[var(--smrk-navy)] md:text-[30px] lg:text-[40px]">
                Need a Custom Packaging Solution?
              </h2>
              <p className="mt-4 text-[14px] font-medium leading-7 text-[var(--smrk-ink)] md:text-[15px]">
                We understand your requirements and create packaging that fits your product perfectly.
              </p>
              <Link href="/contact" className="blue-button mt-7 min-w-[200px] md:min-w-[230px]">
                Get a Custom Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
