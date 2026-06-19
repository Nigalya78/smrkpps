"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const links = [
  { href: "/#home", label: "Home", active: "/" },
  { href: "/#about", label: "About Us" },
  { href: "/#why-choose-us", label: "Why Choose Us" },
  { href: "/products", label: "Products", active: "/products" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const activePath = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`;

  return (
    <header className="sticky top-0 z-50 bg-[var(--smrk-blue)] text-white shadow-[0_6px_24px_rgba(3,18,55,0.16)]">
      <div className="site-container flex h-[72px] items-center justify-between md:h-[104px]">
        <Link href="/" className="flex items-center shrink-0">
  <Image
    src="/logo.png"
    alt="SMRK"
    width={300}
    height={200}
    priority
    className="
      h-[50px]
      w-auto
      object-contain
      sm:h-[60px]
      md:h-[90px]
    "
  />
</Link>
        <nav className="hidden items-center gap-8 text-[13px] font-black uppercase tracking-[0.01em] xl:gap-11 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.active === activePath
                  ? "nav-link nav-link-active py-10 text-white"
                  : "nav-link py-10 text-white hover:opacity-80 transition"
              }
            >
              <span className="inline-flex items-center gap-1.5">
                {link.label}
                {link.href === "/products" && <ChevronDown size={12} strokeWidth={3} />}
              </span>
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden min-h-[48px] min-w-[186px] items-center justify-center gap-3 rounded-[7px] border-2 border-white bg-transparent px-6 text-[13px] font-black uppercase tracking-[0.01em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[var(--smrk-blue)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] md:inline-flex"
        >
          Get a Quote <ArrowRight size={20} />
        </Link>

        <button
          aria-label={open ? "close menu" : "open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/10 text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#061b4a]/98 px-4 py-4 text-[13px] font-extrabold uppercase shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-[1240px] gap-1">
            {links.map((link) => (
              <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center justify-between rounded-md px-3 text-white transition hover:bg-white/10"
            >
                {link.label}
                {link.href === "/products" && <ChevronDown size={13} strokeWidth={3} />}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-white/35 bg-white/10 px-4"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
