"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <Image
            src="/logo.png"
            alt="SMRK"
            width={120}
            height={40}
            className="h-20 w-auto animate-bounce object-contain"
          />
        </div>
        <div className="flex gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-[var(--smrk-blue)] [animation-delay:0ms]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-[var(--smrk-blue)] [animation-delay:150ms]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-[var(--smrk-blue)] [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
