import { ArrowRight, Disc, Zap } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onPreOrder?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onPreOrder }) => {
  return (
    <section className="relative w-full md:h-screen min-h-[600px] bg-dark overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero_image.png"
          alt="Havocker Main"
          fill
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      <div className="absolute top-20 md:top-24 right-4 md:right-12 z-20 flex flex-col items-end text-right gap-1 select-none">
        <div className="text-[6rem] md:text-[12rem] leading-none font-bold text-white/5 tracking-tighter pointer-events-none select-none">
          21
        </div>

        {/* Overlay Info */}
        <div className="text-2xl md:text-4xl text-white font-bold -mt-10 md:-mt-14 mr-2 relative">
          KW <span className="text-acid">PEAK</span>
        </div>
        <div className="w-24 md:w-48 h-[2px] md:h-[3px] bg-acid my-2 md:my-4" />
        <div className="text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] text-white/40 uppercase font-bold flex items-center gap-2">
          <span className="hidden sm:inline">SMART TRACTION CONTROL</span>
          <span className="sm:hidden">SMART CTRL</span>
          <Zap size={10} className="text-acid fill-acid" />
        </div>
      </div>

      {/* Bottom Left: Main Title */}
      <div className="absolute bottom-24 md:bottom-32 left-4 md:left-12 z-20 pr-4">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
          <div className="px-2 md:px-3 py-1 bg-white text-ink text-[8px] md:text-[10px] font-semibold tracking-[0.3em] uppercase">
            PRE-ORDER AVAILABLE NOW
          </div>
          <div className="text-[8px] md:text-[10px] text-[rgba(255,255,255,0.4)] font-mono font-bold">EST: NOV_2025</div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-[10rem] font-medium tracking-[-0.07em] text-white leading-[0.75]">
          HAVØK X1
        </h1>

        <p className="max-w-xs sm:max-w-md lg:max-w-lg text-[rgba(255,255,255,0.4)] text-xs sm:text-sm mt-4 md:mt-8 font-bold leading-relaxed tracking-wider md:tracking-widest uppercase border-l-2 md:border-l-4 border-acid pl-4 md:pl-6 drop-shadow-md">
          PRECISION ENGINEERED FOR ADVENTURE. <br />
          <span className="text-white">REDESIGNED FOR ELECTRIC FREEDOM.</span>
        </p>

        <div className="flex flex-wrap gap-4 md:gap-8 mt-6 md:mt-12">
          <button
            onClick={onPreOrder}
            className="flex items-center gap-2 md:gap-3 text-sm md:text-lg lg:text-xl font-bold tracking-[0.2em] md:tracking-[0.3em] text-white hover:text-acid transition-all group uppercase"
          >
            PRE-ORDER NOW{" "}
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform text-acid" />
          </button>
          <button className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-[rgba(255,255,255,0.4)] hover:text-white transition-all group uppercase">
            VIEW DETAILS
          </button>
        </div>
      </div>

      {/* Corner Details */}
      <div className="absolute bottom-24 right-4 md:right-12 z-20 hidden md:flex items-center gap-8">
        <div className="flex flex-col items-end gap-1">
          <div className="text-[9px] text-white/80 font-mono font-bold tracking-widest">BATTERY TEMP</div>
          <div className="text-2xl font-bold text-white leading-none">32.4°</div>
        </div>
        <div className="w-px h-10 bg-ink/10" />
        <div className="flex items-center gap-4">
          <Disc size={32} className="text-acid animate-spin-slow opacity-80" strokeWidth={1.5} />
          <div className="text-[9px] leading-tight text-white/80 font-mono font-bold tracking-widest uppercase">
            STATUS: ONLINE
            <br />
            LINK: CONNECTED
          </div>
        </div>
      </div>

      {/* Bottom Ticker: Transparent Background */}
      <div className="absolute bottom-0 w-full py-3 md:py-4 border-t border-ink/10 flex items-center overflow-hidden z-20 pointer-events-none">
        <div className="whitespace-nowrap flex animate-marquee text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-[rgba(255,255,255,0.4)] uppercase gap-10 md:gap-20">
          <span>LIMITED FOUNDERS EDITION</span>
          <span>RESERVE YOUR ALLOCATION</span>
          <span>HAVOCKER /// 21KW</span>
          <span>INTELLIGENT VECTOR CONTROL</span>
          <span>LIMITED FOUNDERS EDITION</span>
          <span>RESERVE YOUR ALLOCATION</span>
          <span>HAVOCKER /// 21KW</span>
          <span>INTELLIGENT VECTOR CONTROL</span>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
