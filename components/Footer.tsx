"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="navy-gradient text-white">
      <div className="site-container grid gap-9 px-4 py-8 sm:grid-cols-2 sm:px-0 lg:grid-cols-[1.45fr_0.75fr_1fr_1.35fr]">
        <div>
          <Image src="/logo.png" alt="SMRK" width={130} height={60} className="h-[58px] w-auto" />
          <p className="mt-4 max-w-[290px] text-[13px] font-medium leading-6 text-white/85">
            Your trusted partner for premium packaging, printing & labeling solutions that bring your brand to life.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#061b4a]">f</a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#061b4a]">in</a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#061b4a]">ig</a>
          </div>
        </div>

        <div>
          <h4 className="text-[13px] font-bold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-[13px] font-medium text-white/85">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/why-choose-us">Why Choose Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] font-bold">Our Products</h4>
          <ul className="mt-4 space-y-2 text-[13px] font-medium text-white/85">
            <li>Labels & Stickers</li>
            <li>Corrugated Boxes</li>
            <li>Custom Printed Packaging</li>
            <li>Flexible Packaging</li>
            <li>Packaging Materials</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] font-bold">Contact Us</h4>
          <div className="mt-4 space-y-4 text-[13px] font-medium leading-6 text-white/85">
            <div className="flex items-start gap-3"><MapPin className="mt-1 shrink-0 text-white" size={18} /> FDRK2273, Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates.</div>
            <div className="flex items-start gap-3"><Phone className="mt-1 shrink-0 text-white" size={18} /> +97 1555886130</div>
            <div className="flex items-start gap-3"><Mail className="mt-1 shrink-0 text-white" size={18} /> sales@smrkpps.com</div>
          </div>
        </div>
      </div>

      <div className="site-container flex flex-col justify-between gap-3 border-t border-white/10 px-4 py-4 text-[11px] font-medium text-white/75 sm:flex-row sm:px-0 sm:text-[12px]">
        <p className="whitespace-nowrap">&copy; 2024 SMRKPPS. All Rights Reserved.</p>

      </div>
    </footer>
  );
}
