"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Shield, Lock, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BASE_PRICE, CONFIG_OPTIONS } from "@/lib/constants";

type Step = 1 | 2 | 3;

const SUPERMOTO = CONFIG_OPTIONS.find((o) => o.id === "supermoto_wheels")!;

const INPUT_CLS =
  "w-full bg-transparent text-sm font-bold text-ink tracking-tight placeholder:text-ink/35 placeholder:font-bold placeholder:tracking-wider placeholder:uppercase placeholder:text-[10px] py-3.5 outline-none";

const DIVIDER = { borderBottom: "1px solid rgba(15,23,42,0.04)" } as const;

const STEP_LABELS = ["Details", "Review & Pay", "Confirmed"] as const;

const slide = {
  initial: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  animate: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function PreOrderPage() {
  const [step, setStep] = useState<Step>(1);
  const [dir, setDir] = useState(1);
  const [addSupermoto, setAddSupermoto] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
  });
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });

  const set =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const setCard_ =
    (key: keyof typeof card) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setCard((c) => ({ ...c, [key]: e.target.value }));

  const totalPrice = useMemo(
    () => BASE_PRICE + (addSupermoto ? SUPERMOTO.price : 0),
    [addSupermoto],
  );

  const canGoToReview = form.firstName && form.lastName && form.email;
  const canConfirm = card.number && card.expiry && card.cvc && card.name;

  const goTo = (next: Step) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  return (
    <div className="bg-surface min-h-screen text-ink">
      {/* Fixed header */}
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md"
        style={{ borderBottom: "1px solid rgba(26,28,32,0.06)" }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-3">
          <Link href="/" className="font-bold text-lg tracking-tighter text-ink">
            HAVØK X1
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            {STEP_LABELS.map((label, i) => {
              const s = (i + 1) as Step;
              const done = step > s;
              const active = step === s;
              return (
                <button
                  key={label}
                  onClick={() => s < step && goTo(s)}
                  disabled={s > step}
                  className={`flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase transition-colors ${
                    active
                      ? "text-ink"
                      : done
                        ? "text-ink/40 hover:text-ink/60 cursor-pointer"
                        : "text-ink/12 cursor-default"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full text-[9px] flex items-center justify-center font-bold transition-colors ${
                      active
                        ? "bg-ink text-white"
                        : done
                          ? "bg-acid/20 text-acid"
                          : "bg-ink/[0.05] text-ink/20"
                    }`}
                  >
                    {done ? <Check size={10} /> : i + 1}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                  {i < STEP_LABELS.length - 1 && (
                    <span className="text-ink/10 mx-1 hidden sm:inline">—</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pt-[56px] flex flex-col lg:flex-row min-h-screen">
        {/* Bike preview — always visible */}
        <div
          className="w-full lg:w-1/2 relative bg-dark min-h-[260px] lg:min-h-0 lg:sticky lg:top-[56px] lg:h-[calc(100vh-56px)]"
          style={{ borderRight: "1px solid rgba(26,28,32,0.06)" }}
        >
          <Image
            src="/images/your-ride.png"
            alt="Havocker"
            fill
            className="object-contain p-8 md:p-16"
          />
        </div>

        {/* Right panel — animated steps */}
        <div className="w-full lg:w-1/2 flex flex-col relative overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            {/* ─── Step 1: Details ─── */}
            {step === 1 && (
              <motion.div
                key="details"
                custom={dir}
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col flex-1"
              >
                <div className="px-6 md:px-10 pt-6 md:pt-8 pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-ink tracking-tight mb-0.5">
                    PRE-ORDER
                  </h2>
                  <p className="text-[10px] text-ink/35 font-bold tracking-[0.12em] uppercase">
                    Secure your Havocker allocation
                  </p>
                </div>

                <div className="px-6 md:px-10 pb-6">
                  <div className="text-[9px] text-ink/35 font-bold tracking-[0.2em] uppercase mb-3">
                    Your details
                  </div>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div style={DIVIDER}>
                      <input type="text" placeholder="First name *" value={form.firstName} onChange={set("firstName")} className={INPUT_CLS} />
                    </div>
                    <div style={DIVIDER}>
                      <input type="text" placeholder="Last name *" value={form.lastName} onChange={set("lastName")} className={INPUT_CLS} />
                    </div>
                  </div>
                  <div style={DIVIDER}>
                    <input type="email" placeholder="Email *" value={form.email} onChange={set("email")} className={INPUT_CLS} />
                  </div>
                  <div style={DIVIDER}>
                    <input type="tel" placeholder="Phone" value={form.phone} onChange={set("phone")} className={INPUT_CLS} />
                  </div>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div style={DIVIDER}>
                      <input type="text" placeholder="City" value={form.city} onChange={set("city")} className={INPUT_CLS} />
                    </div>
                    <div style={DIVIDER}>
                      <input type="text" placeholder="Country" value={form.country} onChange={set("country")} className={INPUT_CLS} />
                    </div>
                  </div>
                </div>

                <div className="px-6 md:px-10 pb-8">
                  <div className="text-[9px] text-ink/35 font-bold tracking-[0.2em] uppercase mb-3">
                    Add-on
                  </div>
                  <button
                    onClick={() => setAddSupermoto((v) => !v)}
                    className="w-full flex items-center justify-between py-3.5 hover:text-ink/40 transition-colors"
                    style={DIVIDER}
                  >
                    <div className="flex items-center gap-3.5 text-left">
                      <div className={`w-4 h-4 border-[1.5px] flex items-center justify-center ${addSupermoto ? "border-ink bg-ink" : "border-ink/8"}`}>
                        {addSupermoto && <Check size={10} className="text-white" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold tracking-wider uppercase text-ink">{SUPERMOTO.label}</span>
                        <span className="text-[8px] tracking-[0.1em] text-ink/25 uppercase">{SUPERMOTO.detail}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold font-mono text-ink/30">+${SUPERMOTO.price}</span>
                  </button>
                </div>

                <div className="mt-auto sticky bottom-0 bg-surface p-5 md:px-10" style={{ borderTop: "1px solid rgba(26,28,32,0.06)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] text-ink/35 font-bold tracking-[0.15em] uppercase">Total</span>
                    <span className="text-lg md:text-xl font-bold text-ink tracking-tight">${totalPrice.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => canGoToReview && goTo(2)}
                    className={`w-full py-3.5 text-[10px] font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-3 group transition-colors ${
                      canGoToReview ? "bg-ink text-white hover:bg-acid hover:text-ink" : "bg-ink/5 text-ink/15 cursor-not-allowed"
                    }`}
                  >
                    CONTINUE
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─── Step 2: Review & Payment ─── */}
            {step === 2 && (
              <motion.div
                key="review"
                custom={dir}
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col flex-1"
              >
                <div className="px-6 md:px-10 pt-6 md:pt-8 pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-ink tracking-tight mb-0.5">
                    REVIEW & PAY
                  </h2>
                  <p className="text-[10px] text-ink/35 font-bold tracking-[0.12em] uppercase">
                    Confirm details and pay $300 deposit
                  </p>
                </div>

                {/* Order summary */}
                <div className="px-6 md:px-10 pb-6">
                  <div className="text-[9px] text-ink/35 font-bold tracking-[0.2em] uppercase mb-3">
                    Order summary
                  </div>
                  <div style={{ borderTop: "1px solid rgba(15,23,42,0.06)" }}>
                    {[
                      { label: "Name", value: `${form.firstName} ${form.lastName}` },
                      { label: "Email", value: form.email },
                      ...(form.phone ? [{ label: "Phone", value: form.phone }] : []),
                      ...(form.city || form.country
                        ? [{ label: "Location", value: [form.city, form.country].filter(Boolean).join(", ") }]
                        : []),
                      { label: "Havocker X1", value: `$${BASE_PRICE.toLocaleString()}` },
                      ...(addSupermoto ? [{ label: SUPERMOTO.label, value: `+$${SUPERMOTO.price}` }] : []),
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center py-3" style={DIVIDER}>
                        <span className="text-[10px] text-ink/35 font-bold tracking-[0.08em] uppercase">{row.label}</span>
                        <span className="text-sm font-bold text-ink">{row.value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-3" style={DIVIDER}>
                      <span className="text-xs text-ink font-bold tracking-[0.06em] uppercase">Total</span>
                      <span className="text-base font-bold text-ink">${totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-[10px] text-ink/35 font-bold tracking-[0.08em] uppercase">Deposit Due Today</span>
                      <span className="text-base font-bold text-acid">$300</span>
                    </div>
                  </div>
                </div>

                {/* Card information */}
                <div className="px-6 md:px-10 pb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard size={14} className="text-ink/25" />
                    <span className="text-[9px] text-ink/35 font-bold tracking-[0.2em] uppercase">
                      Card information
                    </span>
                  </div>
                  <div style={DIVIDER}>
                    <input type="text" placeholder="Name on card *" value={card.name} onChange={setCard_("name")} className={INPUT_CLS} />
                  </div>
                  <div style={DIVIDER}>
                    <input type="text" placeholder="Card number *" value={card.number} onChange={setCard_("number")} className={INPUT_CLS} inputMode="numeric" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div style={DIVIDER}>
                      <input type="text" placeholder="MM / YY *" value={card.expiry} onChange={setCard_("expiry")} className={INPUT_CLS} />
                    </div>
                    <div style={DIVIDER}>
                      <input type="text" placeholder="CVC *" value={card.cvc} onChange={setCard_("cvc")} className={INPUT_CLS} inputMode="numeric" />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto sticky bottom-0 bg-surface p-5 md:px-10" style={{ borderTop: "1px solid rgba(26,28,32,0.06)" }}>
                  <button
                    onClick={() => canConfirm && goTo(3)}
                    className={`w-full py-3.5 text-[10px] font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-3 group transition-colors ${
                      canConfirm ? "bg-ink text-white hover:bg-acid hover:text-ink" : "bg-ink/5 text-ink/15 cursor-not-allowed"
                    }`}
                  >
                    <Lock size={12} />
                    PAY $300 DEPOSIT
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => goTo(1)}
                    className="w-full py-3 text-[10px] font-bold tracking-[0.12em] uppercase text-ink/25 hover:text-ink transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    <ArrowLeft size={14} /> BACK
                  </button>
                  <div className="flex items-center justify-center gap-2 text-[9px] text-ink/20 font-bold tracking-[0.12em] uppercase pt-2">
                    <Shield size={12} className="text-acid" /> SECURE CHECKOUT
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── Step 3: Confirmed ─── */}
            {step === 3 && (
              <motion.div
                key="confirmed"
                custom={dir}
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col flex-1 px-6 md:px-10 pt-10 md:pt-16"
              >
                <div className="w-10 h-10 bg-acid rounded-full flex items-center justify-center mb-6">
                  <Check size={20} className="text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight mb-2">
                  ORDER CONFIRMED
                </h2>
                <p className="text-[10px] text-ink/35 font-bold tracking-[0.2em] uppercase mb-1">
                  ALLOCATION #HVK-{String(Math.floor(Math.random() * 9000 + 1000))}
                </p>
                <p className="text-[11px] text-ink/40 leading-relaxed mb-8">
                  Your Havocker has been reserved. Confirmation details will be sent to {form.email}.
                </p>

                <div className="space-y-3 pt-5" style={{ borderTop: "1px solid rgba(15,23,42,0.06)" }}>
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="text-ink/35 tracking-[0.12em] uppercase">Name</span>
                    <span className="text-ink">{form.firstName} {form.lastName}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="text-ink/35 tracking-[0.12em] uppercase">Add-ons</span>
                    <span className="text-ink">{addSupermoto ? "Supermoto Wheels" : "None"}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold pt-3" style={{ borderTop: "1px solid rgba(15,23,42,0.06)" }}>
                    <span className="text-ink/35 tracking-[0.12em] uppercase text-[10px]">Total</span>
                    <span className="text-ink">${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-ink/35 tracking-[0.12em] uppercase text-[10px]">Deposit Charged</span>
                    <span className="text-acid">$300</span>
                  </div>
                </div>

                <div className="mt-12">
                  <Link
                    href="/"
                    className="text-[10px] font-bold tracking-[0.15em] uppercase text-ink/25 hover:text-acid transition-colors flex items-center gap-2 group"
                  >
                    <ArrowLeft size={14} /> BACK TO HOME
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
