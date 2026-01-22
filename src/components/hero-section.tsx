import { ArrowRight, Disc, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-dark overflow-hidden">
      {/* Background with Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 bg-grid-pattern bg-[size:60px_60px]" />

      {/* Hero Image - Multi-layered for depth */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop"
          alt="Havocker Main"
          className="w-full h-full object-cover grayscale brightness-110 contrast-75 translate-x-[5%] scale-105 opacity-60 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      {/* Floating Elements - Restored Technical Layout */}

      {/* Top Right: Technical Spec Cluster */}
      <div className="absolute top-24 right-4 md:right-12 z-20 flex flex-col items-end text-right gap-1 select-none">
        {/* Big Number Background */}
        <div className="text-[12rem] leading-none font-bold text-ink/5 tracking-tighter pointer-events-none select-none">
          21
        </div>

        {/* Overlay Info */}
        <div className="text-4xl text-ink font-bold -mt-14 mr-2 relative">
          KW <span className="text-acid">PEAK</span>
        </div>
        <div className="w-48 h-[3px] bg-acid my-4 shadow-[0_0_10px_#00C2FF]" />
        <div className="text-[10px] tracking-[0.4em] text-ink/40 uppercase font-bold flex items-center gap-2">
          INTELLIGENT_VECTOR_CONTROL <Zap size={10} className="text-acid fill-acid" />
        </div>
      </div>

      {/* Bottom Left: Main Title */}
      <div className="absolute bottom-16 left-4 md:left-12 z-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-1 bg-ink text-white text-[10px] font-bold tracking-[0.3em] uppercase">
            ACQUISITION_PROTOCOL_INITIATED
          </div>
          <div className="text-[10px] text-ink/40 font-mono font-bold">EST: NOV_2025</div>
        </div>

        <h1 className="text-9xl md:text-[13rem] font-bold tracking-[-0.07em] text-ink leading-[0.75]">
          HAVOCKER
        </h1>

        <p className="max-w-lg text-ink/60 text-sm mt-8 font-bold leading-relaxed tracking-widest uppercase border-l-4 border-acid pl-6">
          PRECISION_ENGINEERED_FOR_VIOLENCE. <br />
          <span className="text-ink">REDESIGNED_FOR_ELECTRIC_DOMINANCE.</span>
        </p>

        <div className="flex gap-8 mt-12">
          <button className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-ink hover:text-acid transition-all group uppercase">
            INITIATE_ORDER{" "}
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-acid" />
          </button>
          <button className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-ink/30 hover:text-ink transition-all group uppercase">
            SYSTEM_MANIFEST
          </button>
        </div>
      </div>

      {/* Corner Details */}
      <div className="absolute bottom-12 right-12 z-20 hidden md:flex items-center gap-8">
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
