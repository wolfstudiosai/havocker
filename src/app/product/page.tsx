"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Truck, RefreshCw, ChevronDown, Play, X } from "lucide-react";
import { HAVOCKER_SPECS, BIKE_PARTS, CHASSIS_SPECS, BASE_PRICE } from "@/lib/constants";

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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const TRUST_ITEMS = [
  { icon: Shield, label: "2-YEAR WARRANTY", detail: "Full coverage" },
  { icon: Truck, label: "FREE SHIPPING", detail: "Mainland delivery" },
  { icon: RefreshCw, label: "30-DAY RETURNS", detail: "No questions asked" },
  { icon: Zap, label: "OTA UPDATES", detail: "Lifetime firmware" },
];

const CONTENT_CARDS = [
  { id: "how-to-1", tagline: "How to", title: "First ride setup", description: "Unboxing, battery install, and first power-on. Get riding in minutes.", image: "/images/gallery-1.jpg" },
  { id: "how-to-2", tagline: "How to", title: "Regen & modes", description: "Switch drive modes and tune regenerative braking for your terrain.", image: "/images/gallery-2.jpg" },
  { id: "tips-1", tagline: "Customization", title: "Grip and peg options", description: "Swap grips and footpegs for comfort and control.", image: "/images/gallery-3.jpg" },
  { id: "tips-2", tagline: "Customization", title: "Lighting and accessories", description: "Add lights, phone mounts, and luggage for your style.", image: "/images/gallery-1.jpg" },
  { id: "upgrade-1", tagline: "Upgrades", title: "Suspension adjustment", description: "Set sag and damping for your weight and riding style.", image: "/images/gallery-2.jpg" },
  { id: "upgrade-2", tagline: "Upgrades", title: "Battery care & range", description: "Maximize range and battery life with best practices.", image: "/images/gallery-3.jpg" },
  { id: "how-to-3", tagline: "How to", title: "OTA update walkthrough", description: "Install firmware updates over the air from the app.", image: "/images/gallery-1.jpg" },
  { id: "upgrade-3", tagline: "Upgrades", title: "Wheel and tire swap", description: "Change wheels and tires for different surfaces.", image: "/images/gallery-2.jpg" },
];

function CollapsibleSection({
  number,
  label,
  overview,
  open,
  onToggle,
  children,
}: {
  number: string;
  label: string;
  overview?: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-surface"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 h-px bg-accent"
      />
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 md:px-12 lg:px-16 py-4 md:py-5 flex items-center gap-4 md:gap-6 text-left cursor-pointer hover:opacity-80 transition-opacity"
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
        <div className="flex-1 min-w-0 h-px bg-accent" />
        {!open && overview && (
          <span className="shrink-0 text-[9px] text-ink/40 font-bold tracking-[0.15em] uppercase truncate max-w-[200px] md:max-w-none">
            {overview}
          </span>
        )}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-ink/40 shrink-0"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const SELLING_POINT_POWER = {
  title: "Instant power",
  stat: "2.1s",
  statLabel: "0–50 KM/H",
  body: "21KW peak and 550N·m torque from zero. No clutch, no lag—just throttle and go. Smart traction control keeps you planted in any terrain.",
  media: "/images/gallery-1.jpg",
  mediaAlt: "Havocker power and acceleration",
};

const SELLING_POINT_TERRAIN = {
  title: "Built for any terrain",
  stat: "72V",
  statLabel: "SWAP & GO",
  body: "Removable 72V/58Ah pack for all-day rides or quick swaps. From desert to single-track, the HAVØK X1 is built to go where you do.",
  media: "/images/gallery-2.jpg",
  mediaAlt: "Havocker off-road capability",
};

function SellingBlock({
  title,
  stat,
  statLabel,
  body,
  media,
  mediaAlt,
  mediaLeft,
}: {
  title: string;
  stat: string;
  statLabel: string;
  body: string;
  media: string;
  mediaAlt: string;
  mediaLeft: boolean;
}) {
  const mediaBlock = (
    <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px] overflow-hidden">
      <Image src={media} alt={mediaAlt} fill className="object-cover" />
    </div>
  );
  const copyBlock = (
    <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8 md:py-12">
      <h2 className="text-xl md:text-2xl font-bold text-ink tracking-tight mb-2">
        {title}
      </h2>
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-3xl md:text-4xl font-bold text-acid tracking-tighter">
          {stat}
        </span>
        <span className="text-[8px] text-ink/25 font-bold tracking-[0.2em] uppercase">
          {statLabel}
        </span>
      </div>
      <p className="text-[11px] text-ink/30 leading-relaxed max-w-md">
        {body}
      </p>
    </div>
  );

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 min-h-0 ${
        mediaLeft ? "bg-surface" : "bg-dark"
      }`}
    >
      {mediaLeft ? (
        <>
          {mediaBlock}
          {copyBlock}
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{copyBlock}</div>
          <div className="order-1 md:order-2">{mediaBlock}</div>
        </>
      )}
    </div>
  );
}

const RIDER_INPUT =
  "w-full bg-white/90 border border-ink/10 rounded px-3 py-2.5 text-sm font-bold text-ink placeholder:text-ink/40 placeholder:font-bold placeholder:uppercase placeholder:text-[10px] outline-none focus:border-acid transition-colors";

function RidersForm() {
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    riderInfo: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="relative bg-accent overflow-hidden min-h-[420px]">
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
            RIDERS WANTED
          </h2>
          <p className="text-[11px] text-ink/60 font-bold tracking-wider uppercase max-w-lg leading-relaxed border-l-2 border-acid pl-4 mb-8">
            Be among the first to own the HAVØK X1.{" "}
            <span className="text-ink/80">$300 deposit secures your allocation. Fully refundable.</span>
          </p>

          {!formOpen ? (
            <button
              type="button"
              onClick={() => setFormOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-ink/20 bg-ink text-white font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-acid hover:text-ink hover:border-acid transition-all group"
            >
              JOIN RIDERS
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <AnimatePresence>
              <motion.form
                key="form"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
            <input
              type="text"
              placeholder="Name *"
              value={form.name}
              onChange={set("name")}
              className={RIDER_INPUT}
            />
            <input
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={set("email")}
              className={RIDER_INPUT}
            />
            <input
              type="text"
              placeholder="Instagram"
              value={form.instagram}
              onChange={set("instagram")}
              className={RIDER_INPUT}
            />
            <input
              type="text"
              placeholder="YouTube"
              value={form.youtube}
              onChange={set("youtube")}
              className={RIDER_INPUT}
            />
            <input
              type="text"
              placeholder="TikTok"
              value={form.tiktok}
              onChange={set("tiktok")}
              className={RIDER_INPUT}
            />
            <textarea
              placeholder="Rider info — riding style, terrain, experience..."
              value={form.riderInfo}
              onChange={set("riderInfo")}
              rows={3}
              className={`${RIDER_INPUT} sm:col-span-2 resize-none`}
            />
            <div className="sm:col-span-2 flex items-center gap-4 flex-wrap">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-ink/20 bg-ink text-white font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-acid hover:text-ink hover:border-acid transition-all group"
              >
                SUBMIT
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setFormOpen(false)}
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink/50 hover:text-acid transition-colors"
              >
                Cancel
              </button>
              <Link
                href="/pre-order"
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink/50 hover:text-acid transition-colors"
              >
                Pre-order instead
              </Link>
            </div>
              </motion.form>
            </AnimatePresence>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default function ProductPage() {
  const [specsOpen, setSpecsOpen] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(false);
  const [chassisOpen, setChassisOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const selectedCard = selectedCardId ? CONTENT_CARDS.find((c) => c.id === selectedCardId) : null;

  return (
    <div className="bg-surface min-h-screen text-ink">
      {/* Hero */}
      <div className="relative w-full h-[50vh] md:h-[70vh] bg-slate overflow-hidden">
        <Image
          src="/images/hero-banner.png"
          alt="Havocker"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate from-0% via-slate/25 via-55% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 from-0% via-black/60 via-35% to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-16 z-10">
          <div className="text-[9px] tracking-[0.3em] text-white/40 font-bold uppercase mb-2">
            L3e /// ELECTRIC DIRTBIKE
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.85] mb-3">
            HAVØK X1
          </h1>
          <p className="text-[11px] text-white/35 font-bold tracking-wider uppercase max-w-md leading-relaxed border-l-2 border-acid pl-4">
            PRECISION ENGINEERED FOR ADVENTURE.{" "}
            <span className="text-white/60">REDESIGNED FOR ELECTRIC FREEDOM.</span>
          </p>
          <div className="flex flex-wrap items-baseline gap-4 mt-5">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              ${BASE_PRICE.toLocaleString()}
            </span>
            <span className="text-[8px] text-white/30 font-bold tracking-[0.2em] uppercase">
              OR $300 DEPOSIT
            </span>
            <Link
              href="/pre-order"
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/20 text-white/70 font-bold text-[9px] tracking-[0.2em] uppercase hover:text-acid hover:border-acid/30 transition-all group ml-auto"
            >
              ADD TO CART
              <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform opacity-60" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 w-full py-3 md:py-4 border-t border-white/10 flex items-center overflow-hidden z-20 pointer-events-none">
          <div className="whitespace-nowrap flex animate-marquee text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-white/40 uppercase gap-10 md:gap-20">
            {TRUST_ITEMS.map((item, i) => (
              <span key={`t1-${i}`}>{item.label} • {item.detail}</span>
            ))}
            {TRUST_ITEMS.map((item, i) => (
              <span key={`t2-${i}`}>{item.label} • {item.detail}</span>
            ))}
          </div>
        </div>
      </div>

      <Reveal>
        <div className="border-b border-ink/[0.06]">
          <div className="px-6 md:px-12 lg:px-16 py-5 md:py-6 flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-acid" />
              <span className="text-[9px] text-acid font-bold tracking-[0.3em] uppercase">
                03
              </span>
            </div>
            <span className="text-[10px] md:text-[11px] text-ink font-bold tracking-[0.2em] uppercase">
              Tips & Guides
            </span>
            <div className="flex-1 h-px bg-accent" />
          </div>
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory">
            {CONTENT_CARDS.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                onClick={() => setSelectedCardId(card.id)}
                className={`group relative shrink-0 w-[calc(100%/2.5)] sm:w-[calc(100%/3.5)] lg:w-[20%] snap-start text-left overflow-hidden${
                  idx > 0 ? " border-l border-ink/[0.06]" : ""
                }`}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <span className="text-[8px] text-acid font-bold tracking-[0.2em] uppercase">
                    {card.tagline}
                  </span>
                  <p className="text-[11px] font-bold text-white tracking-tight mt-0.5 line-clamp-2">
                    {card.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="relative w-full aspect-[16/7] bg-dark">
          <Image
            src="/images/your-ride.png"
            alt="Havocker Side View"
            fill
            className="object-contain p-8 md:p-16"
          />
        </div>
      </Reveal>

      <CollapsibleSection
        number="01"
        label="SPECIFICATIONS"
        overview="2.1s • 21KW • 550N·m • 100km/h"
        open={specsOpen}
        onToggle={() => setSpecsOpen((o) => !o)}
      >
        <div className="px-6 md:px-12 lg:px-16 py-6 md:py-8 border-t border-ink/[0.06]">
          <div className="border-t border-ink/[0.06]">
            {HAVOCKER_SPECS.map((spec, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-ink/[0.06] py-3 md:py-3.5"
              >
                <div className="text-[9px] text-ink/25 font-bold tracking-[0.15em] uppercase">
                  {spec.item}
                </div>
                <div
                  className={`text-sm font-bold tracking-tight ${
                    spec.highlight ? "text-acid" : "text-ink"
                  }`}
                >
                  {spec.value}
                </div>
                <div className="text-[9px] text-ink/20 font-bold tracking-[0.1em]">
                  {spec.detail || "—"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        number="02"
        label="CORE COMPONENTS"
        overview="Instant power — 2.1s 0-50"
        open={componentsOpen}
        onToggle={() => setComponentsOpen((o) => !o)}
      >
        <SellingBlock
          title={SELLING_POINT_POWER.title}
          stat={SELLING_POINT_POWER.stat}
          statLabel={SELLING_POINT_POWER.statLabel}
          body={SELLING_POINT_POWER.body}
          media={SELLING_POINT_POWER.media}
          mediaAlt={SELLING_POINT_POWER.mediaAlt}
          mediaLeft
        />
        <div className="px-6 md:px-12 lg:px-16 py-6 md:py-8 border-t border-ink/[0.06]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-0">
            {BIKE_PARTS.map((part, idx) => (
              <div key={part.id} className="py-5 md:py-6 border-t border-ink/[0.06]">
                <span className="text-[10px] text-acid font-bold tracking-[0.3em]">
                  0{idx + 1}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-ink tracking-tight mt-2 mb-1.5">
                  {part.label}
                </h3>
                <p className="text-[11px] text-ink/25 leading-relaxed mb-4">
                  {part.description}
                </p>
                <div className="flex gap-6">
                  {part.specs.map((spec) => (
                    <div key={spec.label}>
                      <div className="text-base font-bold text-ink tracking-tight leading-none">
                        {spec.value}
                      </div>
                      <div className="text-[7px] text-ink/15 font-bold tracking-[0.12em] uppercase mt-0.5">
                        {spec.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        number="03"
        label="CHASSIS & SUSPENSION"
        overview="72V — Swap & go"
        open={chassisOpen}
        onToggle={() => setChassisOpen((o) => !o)}
      >
        <SellingBlock
          title={SELLING_POINT_TERRAIN.title}
          stat={SELLING_POINT_TERRAIN.stat}
          statLabel={SELLING_POINT_TERRAIN.statLabel}
          body={SELLING_POINT_TERRAIN.body}
          media={SELLING_POINT_TERRAIN.media}
          mediaAlt={SELLING_POINT_TERRAIN.mediaAlt}
          mediaLeft={false}
        />
        <div className="px-6 md:px-12 lg:px-16 py-6 md:py-8 border-t border-ink/[0.06]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CHASSIS_SPECS.map((spec) => (
              <div key={spec.label}>
                <div className="text-[8px] text-ink/20 font-bold tracking-[0.15em] uppercase mb-1">
                  {spec.label}
                </div>
                <div className="text-sm font-bold text-ink tracking-tight">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      <RidersForm />

      <AnimatePresence>
        {selectedCard && (
          <>
            <motion.button
              type="button"
              aria-label="Close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCardId(null)}
              className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-lg bg-surface border-l border-ink/10 flex flex-col shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setSelectedCardId(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded border border-ink/10 text-ink/60 hover:text-ink hover:border-ink/20 transition-colors"
              >
                <X size={18} />
              </button>
              <div className="flex-1 flex flex-col min-h-0 overflow-auto">
                <div className="aspect-video bg-dark flex items-center justify-center text-ink/30 shrink-0">
                  <Play size={48} strokeWidth={1.5} />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="text-[9px] tracking-[0.3em] text-ink/40 font-bold uppercase mb-2">
                    {selectedCard.tagline}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight leading-[0.9] mb-3">
                    {selectedCard.title}
                  </h2>
                  <p className="text-[11px] text-ink/60 font-bold tracking-wider uppercase max-w-md leading-relaxed border-l-2 border-acid pl-4">
                    {selectedCard.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
