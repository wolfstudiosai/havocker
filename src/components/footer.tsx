import { ArrowRight, Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white h-[35vh] border-t border-black/5 relative overflow-hidden flex flex-col">
      {/* Newsletter Logic Section */}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-between px-10 py-10">
        {/* Brand Identifier (matches top) */}
        <div className="flex flex-col mb-10 md:mb-0">
          <span className="font-bold text-4xl leading-none tracking-tighter text-ink">HAVOCKER</span>
          <span className="text-[11px] tracking-[0.5em] text-ink/40 font-bold uppercase mt-1">
            L3e /// High Performance Lab
          </span>

          <div className="mt-8 flex items-center gap-6 text-[10px] text-ink/30 font-bold tracking-[0.3em] uppercase">
            <a href="#" className="hover:text-acid transition-colors">
              SAFETY_DATA
            </a>
            <a href="#" className="hover:text-acid transition-colors">
              CORE_SPECS
            </a>
            <a href="#" className="hover:text-acid transition-colors">
              FLEET_SALES
            </a>
          </div>
        </div>

        {/* Newsletter Input Box */}
        <div className="w-full max-w-xl">
          <div className="flex items-center gap-4 mb-4">
            <Activity size={14} className="text-acid animate-pulse" />
            <span className="text-[11px] tracking-[0.4em] text-ink font-bold uppercase">
              JOIN_THE_MANIFEST_UPLINK
            </span>
          </div>
          <div className="relative group">
            <input
              type="email"
              placeholder="OPERATOR_EMAIL_ADDRESS"
              className="w-full bg-dark/20 border border-black/5 px-6 py-5 text-ink font-bold tracking-widest placeholder:text-ink/20 focus:outline-none focus:border-acid transition-all pr-32 uppercase text-sm"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-ink text-white px-6 font-bold text-[10px] tracking-[0.3em] hover:bg-acid hover:text-black transition-all uppercase flex items-center gap-2">
              SUBSCRIBE <ArrowRight size={14} />
            </button>
          </div>
          <p className="mt-4 text-[9px] text-ink/30 font-bold tracking-[0.2em] uppercase max-w-xs">
            By subscribing, you agree to receive technical updates, production logs, and deployment notifications.
          </p>
        </div>
      </div>

      {/* Bottom Marquee Line */}
      <div className="w-full bg-dark py-3 border-t border-black/5 flex items-center overflow-hidden">
        <div className="whitespace-nowrap flex animate-marquee text-[10px] font-bold tracking-[0.4em] text-ink/20 uppercase gap-20">
          <span>STATUS: ALL_SYSTEMS_GO</span>
          <span>VELIMOTOR_HAVOCKER_V2.5</span>
          <span>HIGH_VOLTAGE_WARNING</span>
          <span>CARBON_FIBER_CHASSIS_CONFIRMED</span>
          <span>21KW_PEAK_OUTPUT</span>
          <span>0-50_IN_2.1S</span>
          <span>STATUS: ALL_SYSTEMS_GO</span>
          <span>VELIMOTOR_HAVOCKER_V2.5</span>
          <span>HIGH_VOLTAGE_WARNING</span>
          <span>CARBON_FIBER_CHASSIS_CONFIRMED</span>
          <span>21KW_PEAK_OUTPUT</span>
          <span>0-50_IN_2.1S</span>
        </div>
      </div>

      {/* Final Legal Copyright */}
      <div className="bg-white border-t border-black/5 px-10 py-4 flex justify-between items-center">
        <span className="text-[9px] text-ink/20 font-bold tracking-widest uppercase">
          © 2025 VELIMOTOR_WORKS /// ALL_RIGHTS_RESERVED
        </span>
        <span className="text-[9px] text-ink/20 font-bold tracking-widest uppercase">
          ENCRYPTED_SESSION: {Math.random().toString(36).substring(7).toUpperCase()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
