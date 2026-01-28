import { ArrowRight, Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white min-h-[35vh] border-t border-black/5 relative overflow-hidden flex flex-col">
      {/* Newsletter Logic Section */}
      <div className="grow flex flex-col md:flex-row items-start md:items-center justify-between px-4 sm:px-6 md:px-10 py-8 md:py-10 gap-8 md:gap-10">
        {/* Brand Identifier (matches top) */}
        <div className="flex flex-col w-full md:w-auto">
          <span className="font-bold text-2xl sm:text-3xl md:text-4xl leading-none tracking-tighter text-ink">HAVØK X1</span>
          <span className="text-[9px] sm:text-[11px] tracking-[0.4em] sm:tracking-[0.5em] text-ink/40 font-bold uppercase mt-1">
            L3e /// High Performance Electric
          </span>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-4 md:gap-6 text-[9px] sm:text-[10px] text-ink/30 font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            <a href="#" className="hover:text-acid transition-colors">
              SAFETY
            </a>
            <a href="#" className="hover:text-acid transition-colors">
              SPECS
            </a>
            <a href="#" className="hover:text-acid transition-colors">
              CORPORATE
            </a>
          </div>
        </div>

        {/* Newsletter Input Box */}
        <div className="w-full md:max-w-xl">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <Activity size={14} className="text-acid animate-pulse" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] text-ink font-bold uppercase">
              JOIN THE COMMUNITY
            </span>
          </div>
          <div className="relative group">
            <input
              type="email"
              placeholder="OPERATOR_EMAIL"
              className="w-full bg-dark/20 border border-black/5 px-4 sm:px-6 py-4 sm:py-5 text-ink font-bold tracking-wider sm:tracking-widest placeholder:text-ink/20 focus:outline-none focus:border-acid transition-all pr-28 sm:pr-32 uppercase text-xs sm:text-sm"
            />
            <button className="absolute right-1 sm:right-2 top-1 sm:top-2 bottom-1 sm:bottom-2 bg-ink text-white px-3 sm:px-6 font-bold text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] hover:bg-acid hover:text-black transition-all uppercase flex items-center gap-1 sm:gap-2">
              <span className="hidden sm:inline">SUBSCRIBE</span>
              <span className="sm:hidden">GO</span>
              <ArrowRight size={14} />
            </button>
          </div>
          <p className="mt-3 md:mt-4 text-[8px] sm:text-[9px] text-ink/30 font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase max-w-xs">
            By subscribing, you agree to receive updates, news, and exclusive offers.
          </p>
        </div>
      </div>

      {/* Bottom Marquee Line */}
      <div className="w-full bg-dark py-2 sm:py-3 border-t border-black/5 flex items-center overflow-hidden">
        <div className="whitespace-nowrap flex animate-marquee text-[8px] sm:text-[10px] font-bold tracking-[0.3em] sm:tracking-[0.4em] text-ink/20 uppercase gap-10 sm:gap-20">
          <span>PURE ELECTRIC POWER</span>
          <span>CARBON FIBER CHASSIS</span>
          <span>0-50 IN 2.1S</span>
          <span>21KW PEAK OUTPUT</span>
          <span>RIDE THE FUTURE</span>
          <span>HAVØK X1</span>
          <span>PURE ELECTRIC POWER</span>
          <span>CARBON FIBER CHASSIS</span>
          <span>0-50 IN 2.1S</span>
          <span>21KW PEAK OUTPUT</span>
          <span>RIDE THE FUTURE</span>
          <span>HAVØK X1</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
