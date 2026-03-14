import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black min-h-[35vh] relative overflow-hidden flex flex-col rounded-t-2xl md:rounded-t-3xl">
      <div className="grow flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 sm:px-8 md:px-12 py-10 md:py-14 gap-10 md:gap-12">
        {/* Brand + links */}
        <div className="flex flex-col w-full lg:w-auto">
          <span className="font-bold text-2xl sm:text-3xl md:text-4xl leading-none tracking-tighter text-white">
            HAVØK X1
          </span>
          <span className="text-[9px] sm:text-[11px] tracking-[0.4em] sm:tracking-[0.5em] text-white/25 font-bold uppercase mt-1">
            L3e /// High Performance Electric
          </span>

          {/* Page links */}
          <div className="mt-8 flex flex-wrap items-center gap-5 md:gap-7">
            <Link
              href="/product"
              className="text-[10px] text-white/30 font-bold tracking-[0.25em] uppercase hover:text-acid transition-colors"
            >
              PRODUCT
            </Link>
            <Link
              href="/pre-order"
              className="text-[10px] text-white/30 font-bold tracking-[0.25em] uppercase hover:text-acid transition-colors"
            >
              PRE-ORDER
            </Link>
            <Link
              href="/blog"
              className="text-[10px] text-white/30 font-bold tracking-[0.25em] uppercase hover:text-acid transition-colors"
            >
              BLOG
            </Link>
          </div>

          {/* Legal links */}
          <div className="mt-4 flex flex-wrap items-center gap-5 md:gap-7">
            <a
              href="#"
              className="text-[9px] text-white/15 font-bold tracking-[0.2em] uppercase hover:text-acid transition-colors"
            >
              SAFETY
            </a>
            <a
              href="#"
              className="text-[9px] text-white/15 font-bold tracking-[0.2em] uppercase hover:text-acid transition-colors"
            >
              SPECS
            </a>
            <a
              href="#"
              className="text-[9px] text-white/15 font-bold tracking-[0.2em] uppercase hover:text-acid transition-colors"
            >
              CORPORATE
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full lg:max-w-xl">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <Activity size={14} className="text-acid animate-pulse" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] text-white font-bold uppercase">
              JOIN THE COMMUNITY
            </span>
          </div>
          <div className="relative group">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-4 sm:py-5 text-white font-bold tracking-wider sm:tracking-widest placeholder:text-white/15 focus:outline-none focus:border-acid transition-all pr-28 sm:pr-36 uppercase text-xs sm:text-sm"
            />
            <button className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 bg-acid text-ink px-3 sm:px-6 rounded-md font-bold text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] hover:bg-white transition-all uppercase flex items-center gap-1 sm:gap-2">
              <span className="hidden sm:inline">SUBSCRIBE</span>
              <span className="sm:hidden">GO</span>
              <ArrowRight size={14} />
            </button>
          </div>
          <p className="mt-3 md:mt-4 text-[8px] sm:text-[9px] text-white/15 font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase max-w-xs">
            By subscribing, you agree to receive updates, news, and exclusive offers.
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="px-6 sm:px-8 md:px-12 py-4 border-t border-white/5">
        <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.3em] text-white/10 uppercase">
          © 2025 HAVØK MOTORS. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
