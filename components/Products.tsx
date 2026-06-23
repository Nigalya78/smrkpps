"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const products = [
  {
    title: "Product 1",
    image: "/products/img1.png",
    desc: "High-quality packaging solution.",
  },
  {
    title: "Product 2",
    image: "/products/img2.jpg",
    desc: "Durable packaging solution.",
  },
  {
    title: "Product 3",
    image: "/products/img3.jpg",
    desc: "Premium packaging solution.",
  },
  {
    title: "Product 4",
    image: "/products/img4.jpg",
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
      <div className="site-container">
        <p className={`section-eyebrow text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Our Products</p>
        <h2 className={`mt-3 text-center text-[30px] font-black leading-tight tracking-[-0.02em] md:text-[34px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Packaging Solutions for Every Need
        </h2>

        <div className="mt-7 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product, index) => (
            <article
              key={product.title}
              className={`overflow-hidden rounded-[4px] border border-[var(--smrk-line)] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative h-[168px] bg-[#f8fafc]">
                <Image src={product.image} alt={product.title} fill className="object-contain p-3" sizes="240px" />
              </div>
              <div className="p-5 pt-4 flex flex-col items-center justify-center text-center">
                <h3 className="text-[14px] font-black">{product.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className={`mt-8 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
          <a href="/products" className="outline-button min-w-[280px]">
            Explore Our Products <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
