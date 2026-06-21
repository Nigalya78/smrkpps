"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
  {
    title: "Product 5",
    image: "/products/img5.png",
    desc: "Custom packaging solution.",
  },
  {
    title: "Product 6",
    image: "/products/img6.png",
    desc: "Eco-friendly packaging solution.",
  },
  {
    title: "Product 7",
    image: "/products/img7.jpg",
    desc: "Retail packaging solution.",
  },
  {
    title: "Product 8",
    image: "/products/img8.jpg",
    desc: "Industrial packaging solution.",
  },
  {
    title: "Product 9",
    image: "/products/img9.jpg",
    desc: "Protective packaging solution.",
  },
  {
    title: "Product 10",
    image: "/products/img10.jpg",
    desc: "Lightweight packaging solution.",
  },
  {
    title: "Product 11",
    image: "/products/img11.jpg",
    desc: "Custom printed packaging solution.",
  },
  {
    title: "Product 12",
    image: "/products/img12.jpg",
    desc: "Flexible packaging solution.",
  },
  {
    title: "Product 13",
    image: "/products/img13.jpg",
    desc: "Corrugated packaging solution.",
  },
  {
    title: "Product 14",
    image: "/products/img14.jpg",
    desc: "Paper packaging solution.",
  },
  {
    title: "Product 15",
    image: "/products/img15.jpg",
    desc: "Sustainable packaging solution.",
  },
  {
    title: "Product 16",
    image: "/products/img16.jpg",
    desc: "Heavy-duty packaging solution.",
  },
  {
    title: "Product 17",
    image: "/products/img17.jpg",
    desc: "Premium quality packaging solution.",
  },
  {
    title: "Product 18",
    image: "/products/img18.jpg",
    desc: "Complete packaging solution.",
  },
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width < 640) {
          setItemsPerPage(2);
        } else if (width < 1024) {
          setItemsPerPage(3);
        } else if (width < 1280) {
          setItemsPerPage(4);
        } else {
          setItemsPerPage(5);
        }
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCurrentProducts = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
  };

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

        <div className="relative mt-7">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--smrk-blue)] bg-white text-[var(--smrk-blue)] transition-all duration-300 hover:bg-[var(--smrk-blue)] hover:text-white hover:scale-110 md:-left-4"
            aria-label="Previous products"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Products Grid */}
          <div className="flex gap-[27px] overflow-x-auto pb-4">
            {getCurrentProducts().map((product, index) => (
              <article
                key={product.title}
                className={`flex-shrink-0 overflow-hidden rounded-[4px] border border-[var(--smrk-line)] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${200 + index * 100}ms`, minWidth: '240px' }}
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

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--smrk-blue)] bg-white text-[var(--smrk-blue)] transition-all duration-300 hover:bg-[var(--smrk-blue)] hover:text-white hover:scale-110 md:-right-4"
            aria-label="Next products"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={`mt-6 flex justify-center gap-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[var(--smrk-blue)]' : 'bg-gray-300'}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <div className={`mt-8 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
          <a href="/products" className="outline-button min-w-[280px]">
            View All Products<ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
