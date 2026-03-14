"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/hero-section";
import TechSpecs from "@/components/tech-specs";
import RideHavokSection from "@/components/ride-havok-section";
import BlogSection from "@/components/blog-section";
import { useNav } from "@/context/nav-context";

function SectionDivider({
  number,
  label,
  cta,
  href,
}: {
  number: string;
  label: string;
  cta?: string;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative px-6 md:px-12 lg:px-16 py-5 md:py-6 flex items-center gap-4 md:gap-6 bg-surface rounded-t-2xl md:rounded-t-3xl -mt-6 md:-mt-8 z-10"
    >
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-acid" />
        <span className="text-[9px] text-acid font-bold tracking-[0.3em] uppercase">
          {number}
        </span>
      </div>

      <span className="text-[10px] md:text-[11px] text-ink font-bold tracking-[0.2em] uppercase">
        {label}
      </span>

      <div className="flex-1 h-px bg-accent" />

      {href && cta ? (
        <Link
          href={href}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-ink/10 text-ink/60 font-bold text-[9px] tracking-[0.2em] uppercase hover:text-acid hover:border-acid/30 transition-all group"
        >
          {cta}
          <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform opacity-60" />
        </Link>
      ) : null}
    </motion.div>
  );
}

export default function Home() {
  const { setActiveTab } = useNav();

  useEffect(() => {
    const handleScroll = () => {
      const specs = document.getElementById("specs-section");
      const blog = document.getElementById("blog-section");

      if (specs && blog) {
        const scrollPos = window.scrollY + 300;
        if (scrollPos >= blog.offsetTop) setActiveTab("blog");
        else if (scrollPos >= specs.offsetTop) setActiveTab("specs");
        else setActiveTab("overview");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveTab]);

  return (
    <div className="bg-surface min-h-screen overflow-x-hidden selection:bg-acid selection:text-white">
      <main>
        <div id="overview-section" className="pb-8 md:pb-10 bg-slate">
          <HeroSection />
        </div>

        <SectionDivider
          number="01"
          label="TECHNOLOGY"
          cta="View Full Specs"
          href="/product"
        />

        <div id="specs-section" className="pb-8 md:pb-10 bg-slate">
          <TechSpecs />
        </div>

        <SectionDivider
          number="02"
          label="RIDE HAVØK"
          cta="Join Riders"
          href="/product"
        />

        <div id="ride-section" className="pb-8 md:pb-10 bg-slate">
          <RideHavokSection />
        </div>

        <SectionDivider
          number="03"
          label="COMMUNITY"
          cta="View Full Blog"
          href="/blog"
        />

        <div id="blog-section">
          <BlogSection />
        </div>
      </main>
    </div>
  );
}
