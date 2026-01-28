"use client";

import { BASE_PRICE, CONFIG_OPTIONS } from "@/lib/constants";
import { ArrowRight, Circle, Shield } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const OrderConfigurator = () => {
  const [selectedLivery, setSelectedLivery] = useState<string>("stealth_black");
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let price = BASE_PRICE;
    const livery = CONFIG_OPTIONS.find((o) => o.id === selectedLivery);
    if (livery) price += livery.price;

    selectedUpgrades.forEach((id) => {
      const upgrade = CONFIG_OPTIONS.find((o) => o.id === id);
      if (upgrade) price += upgrade.price;
    });

    setTotalPrice(price);
  }, [selectedLivery, selectedUpgrades]);

  const toggleUpgrade = (id: string) => {
    setSelectedUpgrades((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const handleLiveryChange = (id: string) => {
    setIsAnimating(true);
    setSelectedLivery(id);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentLivery = CONFIG_OPTIONS.find((o) => o.id === selectedLivery);

  return (
    <div className="w-full min-h-screen bg-white border-t border-black/10 flex flex-col lg:flex-row relative overflow-hidden">
      {/* LEFT PANEL: VISUALIZER */}
      <div className="w-full lg:w-[60%] relative border-b lg:border-b-0 lg:border-r border-black/5 bg-[#F0F2F5] min-h-[300px] sm:min-h-[400px] lg:min-h-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 bg-[size:40px_40px] md:bg-[size:60px_60px] pointer-events-none mix-blend-multiply" />

        <div
          className={`w-full h-full transition-all duration-500 ${isAnimating ? "opacity-80 blur-[2px] scale-[1.02]" : "opacity-100 scale-100"
            }`}
        >
          <Image
            src="/images/configurator.jpg"
            alt="Havocker Config"
            height={500}
            width={500}
            className={`w-full h-full object-contain grayscale brightness-110 contrast-100 transition-all duration-700
              ${selectedLivery === "ion_blue" ? "sepia-[0.3] hue-rotate-[170deg] saturate-[5] brightness-110" : ""}
              ${selectedLivery === "arctic_camo" ? "contrast-125 brightness-125 saturate-[0]" : ""}
            `}
          />

          {/* Overlay Header */}
          <div className="absolute top-0 left-0 p-4 sm:p-6 lg:p-12 pointer-events-none">
            <div className="flex items-center gap-2 sm:gap-4 mb-3">
              <Circle size={8} className="text-acid fill-acid animate-pulse shadow-[0_0_12px_#00C2FF] sm:w-[10px] sm:h-[10px]" />
              <span className="text-[9px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.5em] text-ink font-bold uppercase drop-shadow-md">
                LIVE_RENDER_V4.0
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Strip Overlay */}
        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 border-t border-black/5 bg-white/80 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            <span className="block text-[9px] sm:text-[10px] text-ink/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">
              ORDER STATUS
            </span>
            <span className="text-xs sm:text-sm font-bold text-ink tracking-tight uppercase">IN STOCK</span>
          </div>
          <div className="text-left sm:text-right flex flex-col gap-1">
            <span className="block text-[9px] sm:text-[10px] text-ink/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">WEIGHT</span>
            <span className="text-xs sm:text-sm font-bold text-ink tracking-tighter">
              89.4 KG <span className="text-acid ml-1 text-[9px] sm:text-[10px]">UNIT: LAB_01</span>
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: CONFIGURATION MATRIX */}
      <div className="w-full lg:w-[40%] flex flex-col bg-white lg:h-screen lg:max-h-screen overflow-hidden">
        <div className="p-6 sm:p-8 lg:p-10 border-b border-black/5 shrink-0">
          <span className="text-[10px] sm:text-[11px] tracking-[0.4em] sm:tracking-[0.5em] text-acid font-bold uppercase block mb-2 sm:mb-3">
            04 // Order_Config
          </span>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-none tracking-tighter text-ink">DESIGN YOUR RIDE</h2>
        </div>

        <div className="grow overflow-y-auto no-scrollbar">
          {/* Livery Section */}
          <div className="border-b border-black/5">
            <div className="px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-ink/30 font-bold block mb-3 sm:mb-4">
                SELECT COLOR
              </span>
              <div className="flex flex-col gap-0">
                {CONFIG_OPTIONS.filter((o) => o.type === "livery").map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleLiveryChange(option.id)}
                    className={`
                      w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border border-black/5 -mb-px transition-all group relative
                      ${selectedLivery === option.id ? "bg-ink text-white z-10" : "bg-white hover:bg-gray-50 text-ink/60"}
                    `}
                  >
                    <div className="text-left">
                      <span className="block text-xs sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase">{option.label}</span>
                      <span
                        className={`text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold ${selectedLivery === option.id ? "text-acid" : "text-ink/30"
                          }`}
                      >
                        {option.detail}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-6">
                      <span className="text-[10px] sm:text-xs font-bold font-mono tracking-wider">
                        {option.price > 0 ? `+$${option.price}` : "INCL"}
                      </span>
                      {/* Radio Circle */}
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedLivery === option.id ? "border-acid bg-acid" : "border-black/10"
                          }`}
                      >
                        {selectedLivery === option.id && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Section */}
          <div className="border-b border-black/5">
            <div className="px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-ink/30 font-bold block mb-3 sm:mb-4">
                ADD-ONS
              </span>
              <div className="flex flex-col gap-0">
                {CONFIG_OPTIONS.filter((o) => o.type === "upgrade").map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleUpgrade(option.id)}
                    className={`
                      w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border border-transparent border-b-black/5 hover:bg-gray-50 transition-all group
                    `}
                  >
                    <div className="text-left flex items-center gap-4 sm:gap-6">
                      {/* Checkbox Square */}
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 border-2 flex items-center justify-center transition-all ${selectedUpgrades.includes(option.id) ? "border-ink bg-transparent" : "border-black/10 bg-white"
                          }`}
                      >
                        {selectedUpgrades.includes(option.id) && <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-ink" />}
                      </div>
                      <div>
                        <span className="block text-xs sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase text-ink">
                          {option.label}
                        </span>
                        <span className="text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold text-ink/40">
                          {option.detail}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold font-mono text-ink">+$ {option.price}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="mt-auto border-t border-black/10 bg-white p-4 sm:p-6 lg:p-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <span className="text-[9px] sm:text-[10px] text-ink/30 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">STARTING PRICE</span>
            <span className="text-xs sm:text-sm font-bold font-mono text-ink/30">$ {BASE_PRICE}</span>
          </div>

          <div className="flex items-end justify-between mb-4 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] text-ink/30 uppercase block mb-1 sm:mb-2 font-bold">
                Total Price
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tighter leading-none">
                $ {totalPrice.toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] text-ink/30 uppercase block mb-1 sm:mb-2 font-bold">
                DEPOSIT
              </span>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold font-mono text-ink/40">$ 500.00</span>
            </div>
          </div>

          <button className="w-full bg-ink text-white py-4 sm:py-5 lg:py-6 font-bold text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase hover:bg-acid hover:text-black transition-all flex items-center justify-center gap-3 sm:gap-5 group shadow-xl hover:shadow-2xl">
            continue to checkout <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-2 transition-transform" />
          </button>
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] text-ink/30 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">
            <Shield size={12} className="text-acid" />
            <span className="hidden sm:inline">SECURE CHECKOUT</span>
            <span className="sm:hidden">SECURE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfigurator;
