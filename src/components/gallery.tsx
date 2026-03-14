"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Mojave field test" },
  { src: "/images/gallery-2.jpg", alt: "Structural analysis" },
  { src: "/images/gallery-3.jpg", alt: "Firmware deployment" },
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
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Gallery = () => {
  return (
    <div className="bg-white">
      {/* Lead image — full bleed */}
      <Reveal>
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={IMAGES[0].src}
            alt={IMAGES[0].alt}
            fill
            className="object-cover"
          />
        </div>
      </Reveal>

      {/* Two-up — staggered with gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
        <Reveal delay={0.05}>
          <div className="relative aspect-[4/3]">
            <Image
              src={IMAGES[1].src}
              alt={IMAGES[1].alt}
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative aspect-[4/3]">
            <Image
              src={IMAGES[2].src}
              alt={IMAGES[2].alt}
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Gallery;
