"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const links = [
  { href: "/#home", label: "Home", active: "/" },
  { href: "/#about", label: "About Us", page: "/about", active: "/about" },
  { href: "/#why-choose-us", label: "Why Choose Us", page: "/why-choose-us", active: "/why-choose-us" },
  { href: "/products", label: "Products", active: "/products" },
  { href: "/#contact", label: "Contact Us", page: "/contact", active: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const activePath = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('/#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const isHomePage = pathname === '/';

  return (
    <header className="sticky top-0 z-50 navy-gradient text-white shadow-[0_6px_24px_rgba(3,18,55,0.16)]">
      <div className="site-container flex h-[72px] items-center justify-between md:h-[104px]">
        <Link href="/" className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105">
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
      transition-transform duration-300
    "
  />
</Link>
        <nav className="hidden items-center gap-8 text-[13px] font-semibold tracking-[0.01em] xl:gap-11 lg:flex">
          {links.map((link) => {
            const isHashLink = link.href.startsWith('/#');
            return isHashLink ? (
              isHomePage ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={
                    link.active === activePath
                      ? "nav-link nav-link-active py-10 text-white"
                      : "nav-link py-10 text-white hover:opacity-80 transition-all duration-300"
                  }
                >
                  <span className="inline-flex items-center gap-1.5">
                    {link.label}
                    {link.href === "/products" && <ChevronDown size={12} strokeWidth={3} className="transition-transform duration-300" />}
                  </span>
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.page || "/"}
                  onClick={() => setOpen(false)}
                  className={
                    link.active === activePath
                      ? "nav-link nav-link-active py-10 text-white"
                      : "nav-link py-10 text-white hover:opacity-80 transition-all duration-300"
                  }
                >
                  <span className="inline-flex items-center gap-1.5">
                    {link.label}
                    {link.href === "/products" && <ChevronDown size={12} strokeWidth={3} className="transition-transform duration-300" />}
                  </span>
                </Link>
              )
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  link.active === activePath
                    ? "nav-link nav-link-active py-10 text-white"
                    : "nav-link py-10 text-white hover:opacity-80 transition-all duration-300"
                }
              >
                <span className="inline-flex items-center gap-1.5">
                  {link.label}
                  {link.href === "/products" && <ChevronDown size={12} strokeWidth={3} className="transition-transform duration-300" />}
                </span>
              </Link>
            );
          })}
        </nav>

        {isHomePage ? (
          <a
            href="/#contact"
            onClick={(e) => handleScroll(e, '/#contact')}
            className="hidden lg:inline-flex min-h-[48px] min-w-[186px] items-center justify-center gap-3 rounded-[7px] border-2 border-white bg-transparent px-6 text-[13px] font-black uppercase tracking-[0.01em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#061b4a] hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]"
          >
            Get a Quote <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        ) : (
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hidden lg:inline-flex min-h-[48px] min-w-[186px] items-center justify-center gap-3 rounded-[7px] border-2 border-white bg-transparent px-6 text-[13px] font-black uppercase tracking-[0.01em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#061b4a] hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]"
          >
            Get a Quote <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        )}

        <button
          aria-label={open ? "close menu" : "open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="text-white transition-opacity duration-300 hover:opacity-80 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden animate-in fade-in duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[280px] bg-white shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="SMRK"
                width={80}
                height={27}
                className="h-8 w-auto object-contain"
              />
              <span className="text-[16px] font-black uppercase tracking-wider text-[#061b4a]">SMRKPPS</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-black transition-opacity duration-300 hover:opacity-70"
              aria-label="close menu"
            >
              <X size={24} className="transition-transform duration-300" />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {links.map((link, index) => {
              const isHashLink = link.href.startsWith('/#');
              return isHashLink ? (
                isHomePage ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`flex min-h-12 items-center justify-between rounded-md px-4 text-[14px] font-semibold transition-all duration-300 hover:bg-gray-100 ${
                      link.active === activePath
                        ? 'bg-[var(--smrk-blue)]/10 text-[var(--smrk-blue)]'
                        : 'text-gray-800'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                    {link.href === "/products" && <ChevronDown size={13} strokeWidth={3} />}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.page || "/"}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-12 items-center justify-between rounded-md px-4 text-[14px] font-semibold transition-all duration-300 hover:bg-gray-100 ${
                      link.active === activePath
                        ? 'bg-[var(--smrk-blue)]/10 text-[var(--smrk-blue)]'
                        : 'text-gray-800'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                    {link.href === "/products" && <ChevronDown size={13} strokeWidth={3} />}
                  </Link>
                )
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-12 items-center justify-between rounded-md px-4 text-[14px] font-semibold transition-all duration-300 hover:bg-gray-100 ${
                    link.active === activePath
                      ? 'bg-[var(--smrk-blue)]/10 text-[var(--smrk-blue)]'
                      : 'text-gray-800'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                  {link.href === "/products" && <ChevronDown size={13} strokeWidth={3} />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto">
            {isHomePage ? (
              <a
                href="/#contact"
                onClick={(e) => handleScroll(e, '/#contact')}
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border-2 bg-[var(--smrk-blue)] bg-[var(--smrk-blue)] px-4 text-[14px] font-black uppercase text-white transition-all duration-300 hover:bg-[#061b4a]/90"
              >
                Get a Quote <ArrowRight size={16} />
              </a>
            ) : (
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border-2 bg-[var(--smrk-blue)] bg-[var(--smrk-blue)] px-4 text-[14px] font-black uppercase text-white transition-all duration-300 hover:bg-[#061b4a]/90"
              >
                Get a Quote <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
