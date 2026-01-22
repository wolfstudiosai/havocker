"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Activity, Aperture } from "lucide-react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsItems = [
    {
      id: "LOG_004",
      type: "VIDEO_LOG",
      date: "OCT 12, 2025",
      src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop",
      title: "THERMAL_RESISTANCE_VALIDATION",
      tags: ["ENGINEERING", "FIELD_TEST", "MOJAVE"],
      description:
        "Detailed analysis of the vector motor under extreme heat conditions in the Mojave sector. Our telemetry indicates 98% efficiency retention at 45°C ambient temperature. The new cooling fins on the controller housing have successfully dissipated peak thermal loads.",
      stat: "EFFICIENCY: 98%",
    },
    {
      id: "LOG_005",
      type: "LAB_REPORT",
      date: "OCT 18, 2025",
      src: "https://images.unsplash.com/photo-1621257125307-e837bd6368d5?q=80&w=2070&auto=format&fit=crop",
      title: "STRUCTURAL_INTEGRITY_REPORT",
      tags: ["MATERIAL_SCIENCE", "QA", "CARBON"],
      description:
        "Micro-fracture analysis of the carbon-alloy weave after 10,000 cycles of vertical stress testing. Zero degradation detected in critical load-bearing nodes. The frame rigidity has exceeded our initial simulations by a factor of 1.4x.",
      stat: "STRESS: NEG",
    },
    {
      id: "LOG_006",
      type: "FIRMWARE_UPDATE",
      date: "OCT 24, 2025",
      src: "https://images.unsplash.com/photo-1557577265-59b37c043fb9?q=80&w=1974&auto=format&fit=crop",
      title: "FIRMWARE_V4.2_RELEASE_NOTES",
      tags: ["SOFTWARE", "OTA", "FLUX_CONTROL"],
      description:
        "Deploying the new sine-wave modulation algorithm to the test fleet. This update provides smoother throttle response curve mapping and a 12% increase in regenerative braking efficiency.",
      stat: "VER: 4.2.0",
    },
  ];

  // Auto-slide logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % newsItems.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, newsItems.length]);

  const handleManualNav = (direction: "next" | "prev") => {
    setIsAutoPlaying(false);
    if (direction === "next") {
      setActiveIndex((current) => (current + 1) % newsItems.length);
    } else {
      setActiveIndex((current) => (current - 1 + newsItems.length) % newsItems.length);
    }
  };

  const currentItem = newsItems[activeIndex];

  return (
    <div className="w-full bg-black border-t border-white/10 relative overflow-hidden flex flex-col h-[90vh] min-h-[700px]">
      {/* Background Image Layer with Heavy Dark Overlay */}
      <div className="absolute inset-0 z-0">
        {newsItems.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <img src={item.src} alt={item.title} className="w-full h-full object-cover grayscale opacity-60" />
            {/* Left-heavy gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          </div>
        ))}
        {/* Subtle Grid on top of darkness */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 bg-[size:40px_40px] pointer-events-none mix-blend-overlay" />
      </div>

      {/* Content Container - Stacked Left */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col justify-center items-start">
        {/* Header / Meta */}
        <div className="mb-6 flex items-center gap-6">
          <div className="px-3 py-1 bg-white text-black text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-2">
            <Aperture size={12} className="text-acid" /> VISUAL_LOG // NEWS_FEED
          </div>
          <div className="h-px w-20 bg-white/20" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">
            {currentItem.type} /// {currentItem.date}
          </span>
        </div>

        {/* Main Title & Description */}
        <div className="max-w-3xl relative">
          <h2
            key={currentItem.id}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.85] mb-8 animate-in fade-in slide-in-from-left-4 duration-500 uppercase drop-shadow-2xl"
          >
            {currentItem.title}
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {currentItem.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-white/20 text-[9px] font-bold tracking-[0.2em] text-acid uppercase bg-black/50 backdrop-blur-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-8 border-l-2 border-acid pl-8 py-2">
            <p className="text-sm font-semibold text-white/80 leading-relaxed tracking-wide uppercase max-w-xl">
              {currentItem.description}
            </p>

            <div className="flex items-center gap-6">
              <button className="text-white border-b border-acid pb-1 text-[10px] font-bold tracking-[0.3em] hover:text-acid transition-all uppercase flex items-center gap-3 group">
                READ_FULL_LOG <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                <Activity size={12} className="text-acid" /> {currentItem.stat}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Navigation & Progress (Absolute positioned to keep main content left) */}
        <div className="absolute right-8 md:right-16 bottom-12 flex flex-col items-end gap-6">
          {/* Custom Pagination Dots */}
          <div className="flex gap-2 mb-4">
            {newsItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(idx);
                }}
                className={`h-1 transition-all duration-300 ${idx === activeIndex ? "w-12 bg-acid" : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>

          {/* Control Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => handleManualNav("prev")}
              className="w-12 h-12 border border-white/10 bg-black/50 hover:bg-white hover:text-black flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => handleManualNav("next")}
              className="w-12 h-12 border border-white/10 bg-black/50 hover:bg-white hover:text-black flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Current Index Indicator */}
          <div className="text-[10px] font-bold tracking-[0.3em] text-white/30 font-mono">
            {String(activeIndex + 1).padStart(2, "0")} / {String(newsItems.length).padStart(2, "0")}
          </div>
        </div>

        {/* Decorative Tech Elements */}
        <div className="absolute top-12 right-16 hidden lg:block">
          <div className="text-right">
            <div className="text-[9px] font-bold tracking-[0.3em] text-white/30 mb-1">UPLINK_STATUS</div>
            <div className="flex items-center justify-end gap-2 text-white font-bold text-xs tracking-widest">
              <div className="w-1.5 h-1.5 bg-acid rounded-full animate-pulse shadow-[0_0_10px_#00C2FF]" /> ONLINE
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar for Auto-Play */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 h-0.5 bg-white/10 w-full">
          <div
            key={activeIndex}
            className="h-full bg-acid w-full origin-left transform shadow-[0_0_10px_#00C2FF]"
            style={{ animation: "grow 8s linear" }}
          />
        </div>
      )}

      <style>{`
        @keyframes grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
