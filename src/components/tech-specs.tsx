"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { BIKE_PARTS } from "@/lib/constants";

const HERO_STATS = [
  { value: "21KW", label: "PEAK POWER" },
  { value: "550N·m", label: "MAX TORQUE" },
  { value: "2.1s", label: "0–50KM" },
  { value: "100km/h", label: "TOP SPEED" },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const TechSpecs = () => {
  return (
    <div className="relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery-1.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-surface/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10">
        {/* Stats left + Bike image right (360 visualizer) */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="shrink-0 w-full md:w-[280px] lg:w-[340px] flex flex-row md:flex-col justify-between md:justify-center px-6 md:px-10 lg:px-14 py-8 md:py-12 gap-4 md:gap-10">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tighter leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[7px] md:text-[8px] text-ink/20 font-bold tracking-[0.2em] uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative flex-1 aspect-[16/9] md:aspect-auto min-h-[300px] md:min-h-[500px]">
              <Image
                src="/images/tech-specs.jpg"
                alt="Havocker"
                fill
                className="object-contain p-4 md:p-8 lg:p-12"
              />
            </div>
          </div>
        </Reveal>

        {/* Core Components — 4 across */}
        <div className="px-6 md:px-12 lg:px-16 py-6 md:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-ink/[0.06]">
            {BIKE_PARTS.map((part, idx) => (
              <Reveal key={part.id} delay={idx * 0.06}>
                <div className="py-6 pr-6 border-r border-ink/[0.06] last:border-r-0 h-full">
                  <span className="text-[10px] text-acid font-bold tracking-[0.3em]">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-ink tracking-tight mt-2 mb-1.5">
                    {part.label}
                  </h3>
                  <p className="text-[10px] text-ink/30 leading-relaxed mb-4">
                    {part.description}
                  </p>
                  <div className="flex gap-6">
                    {part.specs.map((spec) => (
                      <div key={spec.label}>
                        <div className="text-base md:text-lg font-bold text-ink tracking-tight leading-none">
                          {spec.value}
                        </div>
                        <div className="text-[7px] text-ink/20 font-bold tracking-[0.12em] uppercase mt-0.5">
                          {spec.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Announcement marquee */}
        <div className="w-full bg-slate py-3 md:py-4 flex items-center overflow-hidden pointer-events-none">
          <div className="whitespace-nowrap flex animate-marquee text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-white/40 uppercase gap-10 md:gap-20">
            <span>LATEST FROM THE BLOG</span>
            <span>ENGINEERING REPORTS</span>
            <span>COMMUNITY FORUM</span>
            <span>HAVØK LIFESTYLE</span>
            <span>FIELD TEST RESULTS</span>
            <span>LATEST FROM THE BLOG</span>
            <span>ENGINEERING REPORTS</span>
            <span>COMMUNITY FORUM</span>
            <span>HAVØK LIFESTYLE</span>
            <span>FIELD TEST RESULTS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSpecs;
