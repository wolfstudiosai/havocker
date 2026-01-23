import { ArrowRight, Disc, Zap } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full md:h-screen min-h-[600px] bg-dark overflow-hidden">
      {/* Background with Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 bg-grid-pattern bg-[size:40px_40px] md:bg-[size:60px_60px]" />

      {/* Hero Image - Multi-layered for depth */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt="Havocker Main"
          fill
          priority
          className="w-full h-full object-cover grayscale brightness-110 contrast-75 translate-x-0 md:translate-x-[5%] scale-110 md:scale-105 opacity-60 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 md:via-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      {/* Floating Elements - Restored Technical Layout */}

      {/* Top Right: Technical Spec Cluster */}
      <div className="absolute top-20 md:top-24 right-4 md:right-12 z-20 flex flex-col items-end text-right gap-1 select-none">
        {/* Big Number Background */}
        <div className="text-[6rem] md:text-[12rem] leading-none font-bold text-ink/5 tracking-tighter pointer-events-none select-none">
          21
        </div>

        {/* Overlay Info */}
        <div className="text-2xl md:text-4xl text-ink font-bold -mt-10 md:-mt-14 mr-2 relative">
          KW <span className="text-acid">PEAK</span>
        </div>
        <div className="w-24 md:w-48 h-[2px] md:h-[3px] bg-acid my-2 md:my-4 shadow-[0_0_10px_#00C2FF]" />
        <div className="text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] text-ink/40 uppercase font-bold flex items-center gap-2">
          <span className="hidden sm:inline">INTELLIGENT_VECTOR_CONTROL</span>
          <span className="sm:hidden">INT_VEC_CTRL</span>
          <Zap size={10} className="text-acid fill-acid" />
        </div>
      </div>

      {/* Bottom Left: Main Title */}
      <div className="absolute bottom-20 md:bottom-16 left-4 md:left-12 z-20 pr-4">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
          <div className="px-2 md:px-3 py-1 bg-ink text-white text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
            ACQUISITION_INITIATED
          </div>
          <div className="text-[8px] md:text-[10px] text-ink/40 font-mono font-bold">EST: NOV_2025</div>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[13rem] font-bold tracking-[-0.07em] text-ink leading-[0.75]">
          HAVOCKER
        </h1>

        <p className="max-w-xs sm:max-w-md lg:max-w-lg text-ink/60 text-xs sm:text-sm mt-4 md:mt-8 font-bold leading-relaxed tracking-wider md:tracking-widest uppercase border-l-2 md:border-l-4 border-acid pl-4 md:pl-6">
          PRECISION_ENGINEERED_FOR_VIOLENCE. <br />
          <span className="text-ink">REDESIGNED_FOR_ELECTRIC_DOMINANCE.</span>
        </p>

        <div className="flex flex-wrap gap-4 md:gap-8 mt-6 md:mt-12">
          <button className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-ink hover:text-acid transition-all group uppercase">
            INITIATE_ORDER{" "}
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-acid" />
          </button>
          <button className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-ink/30 hover:text-ink transition-all group uppercase">
            SYSTEM_MANIFEST
          </button>
        </div>
      </div>

      {/* Corner Details */}
      <div className="absolute bottom-12 right-4 md:right-12 z-20 hidden md:flex items-center gap-8">
        <div className="flex flex-col items-end gap-1">
          <div className="text-[9px] text-ink/40 font-mono font-bold tracking-widest">BAT_TEMP_C</div>
          <div className="text-2xl font-bold text-ink leading-none">32.4°</div>
        </div>
        <div className="w-px h-10 bg-black/10" />
        <div className="flex items-center gap-4">
          <Disc size={32} className="text-acid animate-spin-slow opacity-80" strokeWidth={1.5} />
          <div className="text-[9px] leading-tight text-ink/40 font-mono font-bold tracking-widest uppercase">
            SYS_STATUS: OPTIMAL
            <br />
            LINK: 5G_ACTIVE
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
