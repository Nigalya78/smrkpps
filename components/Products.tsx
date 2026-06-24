"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const products = [
  {
    title: "Magnifier",
    image: "/products/img5.png",
    desc: "High-quality packaging solution.",
  },
  {
    title: "Wedges",
    image: "/products/img2.jpg",
    desc: "Durable packaging solution.",
  },
  {
    title: "Eyelets",
    image: "/products/img3.jpg",
    desc: "Premium packaging solution.",
  },
  {
    title: "Olfa Cutter",
    image: "/products/img8.jpg",
    desc: "Versatile packaging solution.",
  },
  
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="bg-white py-14 md:py-[44px]">
      <div className="site-container px-4 sm:px-0">
        <p className={`section-eyebrow text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Our Products</p>
        <h2 className={`mt-3 text-center text-[24px] font-bold leading-tight tracking-[-0.02em] md:text-[28px] lg:text-[34px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Packaging Solutions for Every Need
        </h2>

        <div className="mt-7 grid gap-4 grid-cols-2 md:grid-cols-4 md:gap-6">
          {products.map((product, index) => (
            <article
              key={product.title}
              className={`group overflow-hidden rounded-xl border border-[var(--smrk-line)] bg-white shadow-[0_4px_20px_rgba(6,27,74,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(6,27,74,0.14)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative h-[130px] overflow-hidden md:h-[168px]">
                <Image src={product.image} alt={product.title} fill className="object-cover object-center transition-transform duration-300 group-hover:scale-105" sizes="240px" />
              </div>
              <div className="px-3 pb-3 pt-2 md:px-4 md:pb-4 md:pt-3">
                <h3 className="text-[10px] font-bold leading-tight text-[var(--smrk-navy)] md:text-[12px]">{product.title}</h3>
                <div className="mt-1.5 h-[3px] w-6 rounded-full bg-[var(--smrk-blue)]" />
              </div>
            </article>
          ))}
        </div>

        <div className={`mt-8 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
          <a href="/products" className="outline-button min-w-[200px] md:min-w-[280px]">
            Explore Our Products <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
