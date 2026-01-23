"use client";

import { useState } from "react";
import { HAVOCKER_SPECS, BIKE_PARTS } from "@/lib/constants";
import { BikePart } from "@/lib/types";
import { CornerDownRight } from "lucide-react";

const TechSpecs = () => {
  const [activePart, setActivePart] = useState<BikePart>(BIKE_PARTS[0]);

  return (
    <div className="w-full bg-white border-t border-black/5 relative">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[620px]">
        {/* Column 1: Selector */}
        <div className="w-full lg:w-72 border-r border-black/5 flex flex-col bg-dark/50">
          <div className="p-6 border-b border-black/5 bg-white">
            <h3 className="text-[10px] font-bold tracking-[0.4em] text-ink">SYSTEM_MODULES</h3>
          </div>
          <div className="flex-grow overflow-y-auto no-scrollbar">
            {BIKE_PARTS.map((part, idx) => (
              <button
                key={part.id}
                onClick={() => setActivePart(part)}
                className={`
                  w-full text-left p-6 border-b border-black/5 flex items-center justify-between group transition-all
                  ${activePart.id === part.id ? "bg-white border-r-4 border-r-acid shadow-sm" : "hover:bg-white/40"}
                `}
              >
                <span
                  className={`text-xs font-bold tracking-[0.2em] uppercase ${activePart.id === part.id ? "text-ink" : "text-ink/40"
                    }`}
                >
                  [{idx + 1}] {part.label}
                </span>
                {activePart.id === part.id && <CornerDownRight size={14} className="text-acid" />}
              </button>
            ))}
            <div className="p-6 opacity-30 mt-auto">
              <div className="text-[9px] text-ink font-bold tracking-widest mb-1">DIAGNOSTIC: OK</div>
              <div className="text-[9px] text-ink font-bold tracking-widest">MEM_LINK: ACTIVE</div>
            </div>
          </div>
        </div>

        {/* Column 2: Viewport */}
        <div className="flex-grow relative bg-[#FDFDFD] overflow-hidden border-r border-black/5 group">
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-6 left-6 w-10 h-10 border-l border-t border-black/5" />
            <div className="absolute top-6 right-6 w-10 h-10 border-r border-t border-black/5" />
            <div className="absolute bottom-6 left-6 w-10 h-10 border-l border-b border-black/5" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-r border-b border-black/5" />
            <div className="absolute inset-0 bg-grid-pattern opacity-30 bg-[size:40px_40px]" />
          </div>

          <div className="w-full h-full flex items-center justify-center p-12 relative">
            <img
              src="/images/tech-specs.jpg"
              alt="Schematic"
              className="w-full h-full object-contain grayscale opacity-75 contrast-125 transition-all duration-700"
            />

            {/* Target Ring */}
            <div
              className="absolute w-32 h-32 border border-acid/40 rounded-full flex items-center justify-center transition-all duration-500 z-20"
              style={{
                top: `${activePart.coordinates.y}%`,
                left: `${activePart.coordinates.x}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-1.5 h-1.5 bg-acid shadow-[0_0_15px_#00C2FF]" />
              <div className="absolute -top-10 bg-acid text-black text-[9px] px-2 py-0.5 font-bold tracking-widest">
                LOCKED
              </div>
              <div className="absolute w-full h-full border-t-2 border-acid/80 rounded-full animate-spin" />
            </div>
          </div>

          {/* Float Overlay */}
          <div className="absolute top-10 right-10 bg-white border border-black/5 p-6 shadow-xl max-w-[280px] z-20">
            <div className="text-[9px] text-acid mb-2 tracking-[0.4em] font-bold">
              TARGET_ENTITY_0{BIKE_PARTS.indexOf(activePart) + 1}
            </div>
            <div className="text-2xl font-bold text-ink leading-none mb-2 uppercase tracking-tight">
              {activePart.label}
            </div>
            <p className="text-[12px] text-ink/50 leading-relaxed font-bold tracking-wide">
              {activePart.description}
            </p>
          </div>
        </div>

        {/* Column 3: Data */}
        <div className="w-full lg:w-96 bg-white flex flex-col">
          <div className="p-6 border-b border-black/5 bg-dark/20">
            <h3 className="text-[10px] font-bold tracking-[0.4em] text-ink/40">MODULE_TELEMETRY</h3>
          </div>
          <div className="grid grid-cols-1 overflow-y-auto no-scrollbar">
            {activePart.specs.map((spec, i) => (
              <div
                key={i}
                className="flex justify-between items-center px-6 py-5 border-b border-black/5 hover:bg-dark/20 transition-colors group"
              >
                <span className="text-[10px] text-ink/40 uppercase tracking-[0.2em] font-bold group-hover:text-acid">
                  {spec.label}
                </span>
                <span className="text-lg text-ink font-bold tracking-tighter">{spec.value}</span>
              </div>
            ))}
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-ink/40 tracking-widest font-bold uppercase">
                  <span>Thermal_Load</span>
                  <span className="text-ink">38.2%</span>
                </div>
                <div className="w-full h-1.5 bg-dark">
                  <div className="h-full bg-acid w-[38%] shadow-[0_0_8px_#00C2FF]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-ink/40 tracking-widest font-bold uppercase">
                  <span>Power_Efficiency</span>
                  <span className="text-ink">94.8%</span>
                </div>
                <div className="w-full h-1.5 bg-dark">
                  <div className="h-full bg-acid w-[94.8%] shadow-[0_0_8px_#00C2FF]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto p-6 border-t border-black/5 bg-dark/10">
            <button className="w-full py-4 bg-ink text-white text-[11px] font-bold tracking-[0.4em] hover:bg-acid hover:text-black transition-all uppercase shadow-lg">
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
              className="flex-shrink-0 w-40 md:w-auto md:flex-1 p-5 border-r border-black/5 last:border-r-0 hover:bg-dark/40 transition-colors group cursor-default"
            >
              <div className="text-[9px] text-ink/30 uppercase tracking-[0.3em] mb-1 font-bold group-hover:text-acid">
                {spec.item}
              </div>
              <div className={`text-sm font-bold tracking-tight ${spec.highlight ? "text-acid" : "text-ink"}`}>
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
