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
      src: "/images/gallery-1.jpg",
      title: "HEAT TESTING",
      tags: ["ENGINEERING", "FIELD_TEST", "MOJAVE"],
      description:
        "Testing the motor under extreme heat in the Mojave. Our cooling systems kept performance optimal even at 45°C. The new airflow design proved essential for consistent power delivery.",
      stat: "EFFICIENCY: 98%",
    },
    {
      id: "LOG_005",
      type: "LAB_REPORT",
      date: "OCT 18, 2025",
      src: "/images/gallery-2.jpg",
      title: "STRUCTURAL_INTEGRITY_REPORT",
      tags: ["MATERIAL_SCIENCE", "QA", "CARBON"],
      description:
        "Micro - fracture analysis of the carbon- alloy weave after 10,000 cycles of vertical stress testing.Zero degradation detected in critical load - bearing nodes.The frame rigidity has exceeded our initial simulations by a factor of 1.4x.",
      stat: "STRESS: NEG",
    },
    {
      id: "LOG_006",
      type: "FIRMWARE_UPDATE",
      date: "OCT 24, 2025",
      src: "/images/gallery-3.jpg",
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
    <div className="w-full bg-black border-t border-white/10 relative overflow-hidden flex flex-col min-h-[600px] h-auto md:h-[90vh] md:min-h-[700px]">
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
        <div className="absolute inset-0 bg-grid-pattern opacity-10 bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none mix-blend-overlay" />
      </div>

      {/* Content Container - Stacked Left */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 md:py-0 flex flex-col justify-center items-start">
        {/* Header / Meta */}
        <div className="mb-4 md:mb-6 flex flex-wrap items-center gap-3 md:gap-6">
          <div className="px-2 md:px-3 py-1 bg-white text-black text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase flex items-center gap-2">
            <Aperture size={12} className="text-acid" /> NEWS // LATEST UPDATES
          </div>
          {/* <div className="h-px w-10 md:w-20 bg-white/20 hidden sm:block" /> */}
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-white/50 uppercase">
            {currentItem.type} /// {currentItem.date}
          </span>
        </div>

        {/* Main Title & Description */}
        <div className="max-w-full sm:max-w-xl md:max-w-3xl relative">
          <h2
            key={currentItem.id}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.85] mb-4 md:mb-8 animate-in fade-in slide-in-from-left-4 duration-500 uppercase drop-shadow-2xl break-words"
          >
            {currentItem.title}
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-8">
            {currentItem.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 md:px-3 py-1 border border-white/20 text-[8px] md:text-[9px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-acid uppercase bg-black/50 backdrop-blur-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 md:gap-8 border-l-2 border-acid pl-4 md:pl-8 py-2">
            <p className="text-xs md:text-sm font-semibold text-white/80 leading-relaxed tracking-wide uppercase max-w-xl line-clamp-4 md:line-clamp-none">
              {currentItem.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <button className="text-white text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] hover:text-acid transition-all uppercase flex items-center gap-2 md:gap-3 group cursor-pointer">
                READ ARTICLE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-white/50 uppercase">
                <Activity size={12} className="text-acid" /> {currentItem.stat}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Mobile: Bottom center, Desktop: Bottom right */}
        <div className="w-full md:w-auto md:absolute md:right-8 lg:right-16 md:bottom-12 flex flex-col items-center md:items-end gap-4 md:gap-6 mt-8 md:mt-0">
          {/* Custom Pagination Dots */}
          <div className="flex gap-2 mb-2 md:mb-4">
            {newsItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(idx);
                }}
                className={`h-1 transition-all duration-300 ${idx === activeIndex ? "w-8 md:w-12 bg-acid" : "w-3 md:w-4 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>

          {/* Control Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => handleManualNav("prev")}
              className="w-10 h-10 md:w-12 md:h-12 border border-white/10 bg-black/50 hover:bg-white hover:text-black flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <ArrowLeft size={16} className="md:w-[18px] md:h-[18px]" />
            </button>
            <button
              onClick={() => handleManualNav("next")}
              className="w-10 h-10 md:w-12 md:h-12 border border-white/10 bg-black/50 hover:bg-white hover:text-black flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
            </button>
          </div>

          {/* Current Index Indicator */}
          <div className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-white/30 font-mono">
            {String(activeIndex + 1).padStart(2, "0")} / {String(newsItems.length).padStart(2, "0")}
          </div>
        </div>

        {/* Decorative Tech Elements */}
        <div className="absolute top-12 right-4 md:right-16 hidden lg:block">
          <div className="text-right">
            <div className="text-[9px] font-bold tracking-[0.3em] text-white/30 mb-1">SYSTEM STATUS</div>
            <div className="flex items-center justify-end gap-2 text-white font-bold text-xs tracking-widest">
              <div className="w-1.5 h-1.5 bg-acid rounded-full animate-pulse" /> ONLINE
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
