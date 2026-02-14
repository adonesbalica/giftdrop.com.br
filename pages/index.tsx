"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Gift, ArrowRight, Sparkles, PartyPopper, Clock } from "lucide-react";

function AnimatedDot({ delay }: { delay: number }) {
  return (
    <span
      className="mx-0.5 inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-[#F97316]"
      style={{ animationDelay: `${delay}ms`, animationDuration: "1s" }}
    />
  );
}

function FloatingIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  // Corrigido: adicionado as chaves e crases corretamente
  return (
    <div className={`absolute opacity-[0.06] ${className}`} aria-hidden="true">
      {children}
    </div>
  );
}

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#1C1917] px-4 text-white">
      {/* Floating background icons */}
      {mounted && (
        <>
          <FloatingIcon className="left-[8%] top-[15%] animate-pulse">
            <Gift className="h-20 w-20 text-[#F97316]" />
          </FloatingIcon>

          <FloatingIcon className="right-[10%] top-[18%] animate-pulse [animation-delay:600ms]">
            <PartyPopper className="h-24 w-24 text-[#FB7185]" />
          </FloatingIcon>

          <FloatingIcon className="left-[12%] bottom-[18%] animate-pulse [animation-delay:1200ms]">
            <Sparkles className="h-20 w-20 text-[#F97316]" />
          </FloatingIcon>

          <FloatingIcon className="right-[8%] bottom-[22%] animate-pulse [animation-delay:1800ms]">
            <Gift className="h-16 w-16 text-[#FB7185]" />
          </FloatingIcon>
        </>
      )}

      {/* Main content */}
      <div
        className={`relative z-10 flex max-w-lg flex-col items-center gap-8 text-center transition-all duration-700 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F97316] shadow-lg shadow-[#F97316]/30">
            <Gift className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            GiftDrop
          </h1>
        </div>

        {/* Status badge */}
        <div className="flex items-center gap-2 rounded-full border border-[#3A332F] bg-[#2A2421] px-4 py-2">
          <Clock className="h-3.5 w-3.5 text-[#F97316]" />
          <span className="text-sm font-medium text-[#A8A29E]">
            Currently building
          </span>
          <div className="flex">
            <AnimatedDot delay={0} />
            <AnimatedDot delay={200} />
            <AnimatedDot delay={400} />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-3">
          <p className="text-lg leading-relaxed text-[#D6D3D1] sm:text-xl">
            Your birthday wishlist, made simple.
          </p>
          <p className="text-sm leading-relaxed text-[#A8A29E]/80">
            Create wishlists, share them with friends and family, and make sure
            you always get what you really want.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#F97316]/25 transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Try the Preview
            <ArrowRight className="h-4 w-4" />
          </Link>

          <p className="text-xs text-[#A8A29E]/50">
            Early access — things may change
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {["Wishlists", "Shareable Links", "Priority Levels", "Plans"].map(
            (feature) => (
              <span
                key={feature}
                className="rounded-full border border-[#3A332F] bg-[#2A2421] px-3 py-1 text-xs font-medium text-[#A8A29E]"
              >
                {feature}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-xs text-[#A8A29E]/40">
        GiftDrop {new Date().getFullYear()}
      </p>
    </div>
  );
}
