"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="navy-gradient text-white">
      <div className="site-container grid gap-9 py-8 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.75fr_1fr_1.35fr]">
        <div>
          <Image src="/logo.png" alt="SMRK" width={130} height={60} className="h-[58px] w-auto" />
          <p className="mt-4 max-w-[290px] text-[13px] font-medium leading-6 text-white/85">
            Your trusted partner for premium packaging, printing & labeling solutions that bring your brand to life.
          </p>
          <div className="mt-5 flex gap-5 text-[18px] font-bold leading-none">
            <span>f</span>
            <span>in</span>
            <span>ig</span>
          </div>
        </div>

        <div>
          <h4 className="text-[13px] font-black uppercase">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-[13px] font-medium text-white/85">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/why-choose-us">Why Choose Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] font-black uppercase">Our Products</h4>
          <ul className="mt-4 space-y-2 text-[13px] font-medium text-white/85">
            <li>Labels & Stickers</li>
            <li>Corrugated Boxes</li>
            <li>Custom Printed Packaging</li>
            <li>Flexible Packaging</li>
            <li>Packaging Materials</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] font-black uppercase">Contact Us</h4>
          <div className="mt-4 space-y-4 text-[13px] font-medium leading-6 text-white/85">
            <div className="flex gap-3"><MapPin className="shrink-0 text-white" size={18} /> Plot No. 22, Industrial Area, Meerut, Uttar Pradesh, India</div>
            <div className="flex gap-3"><Phone className="shrink-0 text-white" size={18} /> +91 99999 99999</div>
            <div className="flex gap-3"><Mail className="shrink-0 text-white" size={18} /> info@smrkpps.com</div>
          </div>
        </div>
      </div>

      <div className="site-container flex flex-col justify-between gap-3 border-t border-white/10 py-4 text-[12px] font-medium text-white/75 sm:flex-row">
        <p>&copy; 2024 SMRKPPS. All Rights Reserved.</p>
        <p>Privacy Policy <span className="px-5">|</span> Terms & Conditions</p>
      </div>
    </footer>
  );
}
