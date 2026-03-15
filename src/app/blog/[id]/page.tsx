"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Activity } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

function Divider({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 md:gap-6 py-5 md:py-6">
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
    </div>
  );
}

function ArticleContent({ post }: { post: (typeof BLOG_POSTS)[0] }) {
  return (
    <div className="px-6 md:px-12 lg:px-16 py-8 md:py-12">
      {/* ── Summary ── */}
      <div className="py-2 md:py-3 mb-1" style={{ borderBottom: "1px solid rgba(15,23,42,0.06)" }}>
        <div className="flex items-center gap-2 mb-2">
          <Activity size={10} className="text-acid" />
          <span className="text-[9px] text-acid font-bold tracking-[0.3em] uppercase">
            Summary
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          <div>
            <div className="text-[8px] text-ink/25 font-bold tracking-[0.15em] uppercase mb-0.5">Category</div>
            <div className="text-sm font-bold text-ink tracking-tight">{post.category}</div>
          </div>
          <div>
            <div className="text-[8px] text-ink/25 font-bold tracking-[0.15em] uppercase mb-0.5">Published</div>
            <div className="text-sm font-bold text-ink tracking-tight">{post.date}</div>
          </div>
          <div>
            <div className="text-[8px] text-ink/25 font-bold tracking-[0.15em] uppercase mb-0.5">Read Time</div>
            <div className="text-sm font-bold text-ink tracking-tight">6 Min</div>
          </div>
          <div>
            <div className="text-[8px] text-ink/25 font-bold tracking-[0.15em] uppercase mb-0.5">Topics</div>
            <div className="text-sm font-bold text-ink tracking-tight">Motor, Chassis, OTA</div>
          </div>
          <div>
            <div className="text-[8px] text-ink/25 font-bold tracking-[0.15em] uppercase mb-0.5">Status</div>
            <div className="text-sm font-bold text-acid tracking-tight">Active</div>
          </div>
        </div>
      </div>

      {/* ── Gallery ── */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
        {["/images/gallery-1.jpg", "/images/gallery-2.jpg", "/images/gallery-3.jpg"].map(
          (src, i) => (
            <div key={i} className="relative aspect-[4/3] bg-dark overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ),
        )}
      </div>

      {/* ── 01 Overview ── */}
      <Divider number="01" label="Overview" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-10" style={{ borderBottom: "1px solid rgba(15,23,42,0.06)" }}>
        <div>
          <p className="text-xs md:text-sm text-ink/50 leading-relaxed">
            The initial telemetry data from our Mojave test runs has exceeded all projected parameters.
            The new 21KW brushless motor maintained a thermal efficiency of 94% even when ambient
            temperatures surpassed 45°C (113°F). This marks a critical milestone in the development
            cycle — confirming the HAVØK X1 can operate at full power across a wider temperature
            envelope than any competing electric platform.
          </p>
          <p className="text-xs md:text-sm text-ink/50 leading-relaxed mt-4">
            Our engineering team focused heavily on the airflow dynamics around the battery casing.
            By redesigning the intake vents using generative design algorithms, we achieved a
            30% increase in passive cooling. Combined with the active liquid-cooling loop, the
            thermal management system now dissipates heat 40% faster than our first-generation
            prototype — enabling sustained high-output riding on even the hottest desert trails.
          </p>
        </div>
        <div className="relative aspect-[4/3] bg-dark overflow-hidden">
          <Image
            src="/images/gallery-2.jpg"
            alt="Mojave endurance run"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4">
            <span className="text-[8px] text-white/40 font-bold tracking-[0.2em] uppercase">
              Mojave Endurance Run /// Day 3
            </span>
          </div>
        </div>
      </div>

      {/* ── 02 The Carbon Advantage ── */}
      <Divider number="02" label="The Carbon Advantage" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-10" style={{ borderBottom: "1px solid rgba(15,23,42,0.06)" }}>
        <div className="relative aspect-[4/3] bg-dark overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/gallery-3.jpg"
            alt="Carbon subframe"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4">
            <span className="text-[8px] text-white/40 font-bold tracking-[0.2em] uppercase">
              Carbon-Alloy Subframe /// Detail
            </span>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs md:text-sm text-ink/50 leading-relaxed">
            Switching to the custom carbon-alloy weave for the subframe has shaved off 4.2kg
            while increasing torsional rigidity by 18%. This isn&apos;t just about weight — it&apos;s about
            ride feel. The feedback through the chassis is now instantaneous, giving the rider
            complete confidence in technical terrain.
          </p>
          <p className="text-xs md:text-sm text-ink/50 leading-relaxed mt-4">
            The HAVØK X1 sustains peak power output for extended durations without hitting
            thermal throttling limits — allowing riders to push harder and longer in every condition.
            The new layup pattern was developed in collaboration with aerospace composites engineers,
            resulting in a structure that flexes predictably under load while remaining rigid at the
            steering head and swingarm pivot.
          </p>

          {/* Quote */}
          <div className="mt-6 border-l-2 border-acid pl-4">
            <p className="text-xs md:text-sm text-ink/70 leading-relaxed italic">
              &ldquo;The bike feels less like a machine and more like an extension of the body.
              The response time is practically zero.&rdquo;
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-4 h-px bg-acid" />
              <span className="text-[9px] font-bold uppercase text-ink/40 tracking-[0.15em]">
                CMDR. Anderson, Lead Test Rider
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 03 Firmware Outlook ── */}
      <Divider number="03" label="Firmware Outlook" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-10" style={{ borderBottom: "1px solid rgba(15,23,42,0.06)" }}>
        <div>
          <p className="text-xs md:text-sm text-ink/50 leading-relaxed">
            We are currently finalizing the firmware map for the Sport Mode update, which will
            unlock the final 5% of torque availability at low RPMs. Expect this OTA update to
            hit your dashboard by mid-November. The calibration work has been extensive — over
            200 individual throttle maps were tested across varying terrain and temperature profiles
            before the final curve was locked.
          </p>
          <p className="text-xs md:text-sm text-ink/50 leading-relaxed mt-4">
            The regen braking curves have also been re-tuned based on rider feedback from over
            12,000km of field testing. Smoother deceleration on steep descents and more energy
            recovery in stop-and-go urban conditions. The new algorithm factors in gradient, speed,
            and battery state-of-charge to dynamically adjust regen intensity in real-time.
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-acid" />
            <span className="text-[9px] text-acid font-bold tracking-[0.3em] uppercase">
              Update Roadmap
            </span>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-bold text-ink tracking-tight">Sport Mode v2.1</h4>
            <p className="text-xs md:text-sm text-ink/50 leading-relaxed mt-1">
              Full torque map unlock at low RPM. Riders will gain access to the remaining 5%
              of peak torque that was previously software-limited during the beta phase. The
              update also refines throttle response curves for smoother power delivery.
            </p>
            <span className="inline-block mt-2 text-[9px] font-bold text-acid tracking-[0.15em] uppercase">In Progress — Nov 2025</span>
          </div>

          <div className="h-px bg-ink/[0.06]" />

          <div>
            <h4 className="text-sm md:text-base font-bold text-ink tracking-tight">Regen Curve Patch</h4>
            <p className="text-xs md:text-sm text-ink/50 leading-relaxed mt-1">
              Dynamic gradient-aware braking that adapts regen intensity based on slope angle,
              speed, and battery state-of-charge. Field-tested across 12,000km of mixed terrain
              with measurably smoother deceleration on steep descents.
            </p>
            <span className="inline-block mt-2 text-[9px] font-bold text-acid tracking-[0.15em] uppercase">Testing — Nov 2025</span>
          </div>

          <div className="h-px bg-ink/[0.06]" />

          <div>
            <h4 className="text-sm md:text-base font-bold text-ink tracking-tight">Dashboard Telemetry</h4>
            <p className="text-xs md:text-sm text-ink/50 leading-relaxed mt-1">
              Live thermal and power analytics displayed directly on the rider dashboard.
              Real-time motor temperature, battery delta, regen efficiency, and energy
              consumption per kilometre — all at a glance.
            </p>
            <span className="inline-block mt-2 text-[9px] font-bold text-ink/30 tracking-[0.15em] uppercase">Development — Dec 2025</span>
          </div>

          <div className="h-px bg-ink/[0.06]" />

          <div>
            <h4 className="text-sm md:text-base font-bold text-ink tracking-tight">Terrain Mapping</h4>
            <p className="text-xs md:text-sm text-ink/50 leading-relaxed mt-1">
              GPS-linked ride mode switching that automatically adjusts power and traction
              maps based on terrain type. Trail, sand, urban, and highway profiles will
              activate seamlessly as riding conditions change.
            </p>
            <span className="inline-block mt-2 text-[9px] font-bold text-ink/30 tracking-[0.15em] uppercase">Planned — Q1 2026</span>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-8" style={{ borderTop: "1px solid rgba(15,23,42,0.06)" }}>
        <div>
          <div className="text-[9px] text-ink/30 font-bold tracking-[0.3em] uppercase mb-1">
            Continue Reading
          </div>
          <span className="text-sm font-bold text-ink tracking-tight">
            More from {post.category}
          </span>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded border border-ink/10 text-ink/60 font-bold text-[9px] tracking-[0.2em] uppercase hover:text-acid hover:border-acid/30 transition-all group"
        >
          ALL ENTRIES
          <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform opacity-60" />
        </Link>
      </div>
    </div>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const post = BLOG_POSTS.find((p) => String(p.id) === id) ?? null;

  if (!post) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <p className="text-ink/50 font-bold uppercase tracking-wider mb-4">Post not found</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-acid font-bold text-[10px] tracking-[0.2em] uppercase hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-ink">
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-ink/[0.06]">
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-ink/50 hover:text-acid transition-colors"
          >
            <ArrowLeft size={14} /> Back
          </Link>
          <span className="text-[9px] text-ink/30 font-bold tracking-[0.25em] uppercase hidden sm:inline">
            {post.category} /// {post.date}
          </span>
          <Link href="/" className="font-bold text-lg tracking-tighter text-ink">
            HAVØK X1
          </Link>
        </div>
      </header>

      <article className="pt-[72px]">
        {/* Hero — compact */}
        <div className="relative w-full h-[40vh] md:h-[50vh] shrink-0 bg-slate overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate from-0% via-slate/30 via-40% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:px-12 lg:px-16 pb-10">
            <span className="inline-block px-3 py-1 bg-acid text-black text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[0.9] uppercase max-w-3xl mb-2">
              {post.title}
            </h1>
            <p className="text-[11px] text-white/40 font-bold tracking-wider uppercase max-w-lg leading-relaxed border-l-2 border-acid pl-4">
              {post.subtitle}
            </p>
          </div>
        </div>

        <div className="bg-surface">
          <ArticleContent post={post} />
        </div>
      </article>
    </div>
  );
}
