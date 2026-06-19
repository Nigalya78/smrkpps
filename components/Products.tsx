"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Labels & Stickers",
    image: "/products/img4.jpg",
    desc: "High-quality labels for branding, information & compliance.",
  },
  {
    title: "Corrugated Boxes",
    image: "/products/img13.jpg",
    desc: "Strong, durable & eco-friendly packaging for every need.",
  },
  {
    title: "Custom Printed Packaging",
    image: "/products/img1.png",
    desc: "Eye-catching prints that elevate your brand.",
  },
  {
    title: "Flexible Packaging",
    image: "/products/img15.jpg",
    desc: "Versatile, lightweight & protective packaging.",
  },
  {
    title: "Packaging Materials",
    image: "/products/img18.jpg",
    desc: "Wide range of packaging materials & accessories.",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-14 md:py-[44px]">
      <div className="site-container">
        <p className="section-eyebrow text-center">Our Products</p>
        <h2 className="mt-3 text-center text-[30px] font-black leading-tight tracking-[-0.02em] md:text-[34px]">
          Packaging Solutions for Every Need
        </h2>

        <div className="mt-7 grid gap-[27px] sm:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <article
              key={product.title}
              className="overflow-hidden rounded-[4px] border border-[var(--smrk-line)] bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[168px] bg-[#f8fafc]">
                <Image src={product.image} alt={product.title} fill className="object-contain p-3" sizes="240px" />
              </div>
              <div className="p-5 pt-4">
                <h3 className="text-[14px] font-black">{product.title}</h3>
                <p className="mt-4 min-h-[72px] text-[12px] font-medium leading-[1.75] text-[var(--smrk-ink)]">{product.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/products" className="outline-button min-w-[280px]">
            View All Products <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
