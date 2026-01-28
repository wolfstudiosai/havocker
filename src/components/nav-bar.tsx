"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavBar = ({ activeTab, setActiveTab }: NavBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "01 // Overview" },
    { id: "specs", label: "02 // Specs" },
    { id: "gallery", label: "03 // Gallery" },
    { id: "order", label: "04 // Order" },
    { id: "news", label: "05 // News" },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent text-ink transition-all duration-300">
        <div className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo / Coordinates */}
          <div className="flex flex-col">
            <span className="font-bold text-xl sm:text-2xl leading-none tracking-tighter text-white">HAVØK X1</span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] font-bold uppercase text-[rgba(255,255,255,0.4)]">
              L3e /// High Performance Electric
            </span>
          </div>

          {/* Desktop Tab Line */}
          <div className="hidden lg:flex gap-6 xl:gap-10 items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  text-[10px] xl:text-[11px] font-bold tracking-[0.15em] xl:tracking-[0.2em] transition-all duration-300 relative py-1 cursor-pointer
                  ${activeTab === tab.id ? "text-acid" : "text-[rgba(255,255,255,0.4)] hover:text-white"}
                `}
              >
                {tab.label}
                {/* Underline Indicator */}
                {activeTab === tab.id && (
                  <div className="absolute left-0 -bottom-1 w-full h-0.5 bg-acid shadow-[0_0_8px_#00C2FF]" />
                )}
              </button>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 border-l border-black/10 pl-3 sm:pl-4 h-6">
              <div className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] font-bold opacity-60 uppercase text-[rgba(255,255,255,0.4)]">Store Open</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-acid transition-colors lg:hidden"
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
            <button className="hover:text-acid transition-colors hidden lg:block">
              <Menu size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[280px] sm:w-[320px] h-full bg-white z-50 lg:hidden transform transition-transform duration-300 ease-out shadow-2xl ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-black/5">
          <span className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] text-ink/40 font-bold uppercase">NAVIGATION</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-acid transition-colors"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`
                w-full text-left px-4 sm:px-6 py-4 sm:py-5 border-b border-black/5 transition-all
                ${activeTab === tab.id
                  ? "bg-ink text-white border-l-4 border-l-acid"
                  : "bg-white text-ink/60 hover:bg-gray-50 hover:text-ink"
                }
              `}
            >
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-black/5 bg-dark/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-bold text-ink/60 uppercase">LAB_STATUS: ACTIVE</span>
          </div>
          <span className="text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] text-ink/30 font-bold uppercase">
            © 2025 VELIMOTOR_WORKS
          </span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
