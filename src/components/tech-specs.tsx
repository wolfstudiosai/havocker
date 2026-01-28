"use client";

import { useState } from "react";
import { HAVOCKER_SPECS, BIKE_PARTS } from "@/lib/constants";
import { BikePart } from "@/lib/types";
import { CornerDownRight } from "lucide-react";

const TechSpecs = () => {
  const [activePart, setActivePart] = useState<BikePart>(BIKE_PARTS[0]);

  return (
    <div className="w-full bg-white border-t border-black/5 relative">
      {/* top stripe */}
      <div className="w-full border-b border-black/5 bg-transparent overflow-x-auto no-scrollbar">
        <div className="flex w-max lg:w-full">
          {HAVOCKER_SPECS.slice(8, 12).concat(HAVOCKER_SPECS.slice(0, 4)).map((spec, i) => (
            <div key={`top-${i}`} className="shrink-0 w-40 md:w-auto md:flex-1 p-4 border-r border-black/5 last:border-r-0 hover:bg-dark/40 transition-colors group cursor-default">
              <div className="text-[8px] text-ink/30 uppercase tracking-[0.3em] mb-1 font-bold group-hover:text-acid">{spec.item}</div>
              <div className={`text-xs font-bold tracking-tight ${spec.highlight ? 'text-acid' : 'text-ink'}`}>{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[620px]">
        {/* Column 1: Selector */}
        <div className="w-full lg:w-72 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col bg-dark/50">
          <div className="p-4 md:p-6 border-b border-black/5 bg-white">
            <h3 className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-ink">COMPONENTS</h3>
          </div>
          <div className="grow overflow-x-auto lg:overflow-x-visible overflow-y-auto no-scrollbar">
            {/* Mobile: Horizontal scroll, Desktop: Vertical list */}
            <div className="flex lg:flex-col min-w-max lg:min-w-0">
              {BIKE_PARTS.map((part, idx) => (
                <button
                  key={part.id}
                  onClick={() => setActivePart(part)}
                  className={`
                    text-left p-4 md:p-6 border-b lg:border-b border-r lg:border-r-0 border-black/5 flex items-center justify-between gap-4 group transition-all whitespace-nowrap lg:whitespace-normal min-w-[140px] lg:min-w-0 w-auto lg:w-full
                    ${activePart.id === part.id ? "bg-white border-b-4 lg:border-b-0 lg:border-r-4 border-b-acid lg:border-r-acid shadow-sm" : "hover:bg-white/40"}
                  `}
                >
                  <span
                    className={`text-[10px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase ${activePart.id === part.id ? "text-ink" : "text-ink/40"
                      }`}
                  >
                    [{idx + 1}] {part.label}
                  </span>
                  {activePart.id === part.id && <CornerDownRight size={14} className="text-acid hidden lg:block" />}
                </button>
              ))}
            </div>
            <div className="p-4 md:p-6 opacity-30 mt-auto hidden lg:block">
              <div className="text-[9px] text-ink font-bold tracking-widest mb-1">SYSTEM: CHECKED </div>
              <div className="text-[9px] text-ink font-bold tracking-widest">LINK: ONLINE</div>
            </div>
          </div>
        </div>

        {/* Column 2: Viewport */}
        <div className="grow relative bg-[#FDFDFD] overflow-hidden border-b lg:border-b-0 lg:border-r border-black/5 group min-h-[300px] lg:min-h-0">
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-4 md:top-6 left-4 md:left-6 w-8 md:w-10 h-8 md:h-10 border-l border-t border-black/5" />
            <div className="absolute top-4 md:top-6 right-4 md:right-6 w-8 md:w-10 h-8 md:h-10 border-r border-t border-black/5" />
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 w-8 md:w-10 h-8 md:h-10 border-l border-b border-black/5" />
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-8 md:w-10 h-8 md:h-10 border-r border-b border-black/5" />
            <div className="absolute inset-0 bg-grid-pattern opacity-30 bg-size-[30px_30px] md:bg-size-[40px_40px]" />
          </div>

          <div className="w-full h-full flex items-center justify-center p-6 md:p-12 relative">
            <img
              src="/images/tech-specs.jpg"
              alt="Schematic"
              className="w-full h-full object-contain grayscale opacity-75 contrast-125 transition-all duration-700"
            />

            {/* Target Ring - Hidden on mobile for cleaner look */}
            <div
              className="absolute w-20 md:w-32 h-20 md:h-32 border border-acid/40 rounded-full hidden sm:flex items-center justify-center transition-all duration-500 z-20"
              style={{
                top: `${activePart.coordinates.y}%`,
                left: `${activePart.coordinates.x}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-acid shadow-[0_0_15px_#00C2FF]" />
              <div className="absolute -top-8 md:-top-10 bg-acid text-black text-[8px] md:text-[9px] px-2 py-0.5 font-bold tracking-widest">
                LOCKED
              </div>
              <div className="absolute w-full h-full border-t-2 border-acid/80 rounded-full animate-spin" />
            </div>
          </div>

          {/* Float Overlay - Repositioned for mobile */}
          <div className="absolute top-4 md:top-10 right-4 md:right-10 bg-white border border-black/5 p-4 md:p-6 shadow-xl max-w-[200px] md:max-w-[280px] z-20">
            <div className="text-[8px] md:text-[9px] text-acid mb-1 md:mb-2 tracking-[0.3em] md:tracking-[0.4em] font-bold">
              PART_0{BIKE_PARTS.indexOf(activePart) + 1}
            </div>
            <div className="text-lg md:text-2xl font-bold text-ink leading-none mb-1 md:mb-2 uppercase tracking-tight">
              {activePart.label}
            </div>
            <p className="text-[10px] md:text-[12px] text-ink/50 leading-relaxed font-bold tracking-wide line-clamp-3 md:line-clamp-none">
              {activePart.description}
            </p>
          </div>
        </div>

        {/* Column 3: Data */}
        <div className="w-full lg:w-96 bg-white flex flex-col">
          <div className="p-4 md:p-6 border-b border-black/5 bg-dark/20">
            <h3 className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-ink/40">PERFORMANCE STATS</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 overflow-y-auto no-scrollbar">
            {activePart.specs.map((spec, i) => (
              <div
                key={i}
                className="flex justify-between items-center px-4 md:px-6 py-3 md:py-5 border-b border-r lg:border-r-0 border-black/5 hover:bg-dark/20 transition-colors group"
              >
                <span className="text-[9px] md:text-[10px] text-ink/40 uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold group-hover:text-acid">
                  {spec.label}
                </span>
                <span className="text-sm md:text-lg text-ink font-semibold tracking-tighter">{spec.value}</span>
              </div>
            ))}
            <div className="p-4 md:p-8 space-y-4 md:space-y-6 col-span-2 lg:col-span-1">
              <div className="space-y-2">
                <div className="flex justify-between text-[9px] md:text-[10px] text-ink/40 tracking-widest font-bold uppercase">
                  <span>Thermal_Load</span>
                  <span className="text-ink">38.2%</span>
                </div>
                <div className="w-full h-1 md:h-1.5 bg-dark">
                  <div className="h-full bg-acid w-[38%] " />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[9px] md:text-[10px] text-ink/40 tracking-widest font-bold uppercase">
                  <span>Power_Efficiency</span>
                  <span className="text-ink">94.8%</span>
                </div>
                <div className="w-full h-1 md:h-1.5 bg-dark">
                  <div className="h-full bg-acid w-[94.8%] " />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto p-4 md:p-6 border-t border-black/5 bg-dark/10">
            <button className="w-full py-3 md:py-4 bg-ink text-white text-[10px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] hover:bg-acid hover:text-black transition-all uppercase shadow-lg">
              DEPLOY_CONFIGURATION
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Strip */}
      <div className="w-full border-t border-black/5 bg-white overflow-x-auto no-scrollbar">
        <div className="flex w-max lg:w-full">
          {HAVOCKER_SPECS.slice(0, 8).map((spec, i) => (
            <div
              key={i}
              className="shrink-0 w-32 md:w-40 lg:w-auto lg:flex-1 p-3 md:p-5 border-r border-black/5 last:border-r-0 hover:bg-dark/40 transition-colors group cursor-default"
            >
              <div className="text-[8px] md:text-[9px] text-ink/30 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 font-bold group-hover:text-acid truncate">
                {spec.item}
              </div>
              <div className={`text-xs md:text-sm font-bold tracking-tight ${spec.highlight ? "text-acid" : "text-ink"}`}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSpecs;
