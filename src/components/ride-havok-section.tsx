"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function RideHavokSection() {
  return (
    <div className="relative bg-accent overflow-hidden min-h-[320px]">
      <Image
        src="/images/hero-banner.png"
        alt=""
        fill
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-accent/80" />
      <Reveal className="relative px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="max-w-2xl">
          <div className="text-[9px] tracking-[0.3em] text-ink/50 font-bold uppercase mb-3">
            Join the movement
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ink tracking-tight leading-[0.85] mb-4">
            RIDE HAVØK
          </h2>
          <p className="text-[11px] text-ink/60 font-bold tracking-wider uppercase max-w-lg leading-relaxed border-l-2 border-acid pl-4 mb-8">
            Be among the first to own the HAVØK X1.{" "}
            <span className="text-ink/80">$300 deposit secures your allocation. Fully refundable.</span>
          </p>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-ink/20 bg-ink text-white font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-acid hover:text-ink hover:border-acid transition-all group"
          >
            JOIN RIDERS
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
