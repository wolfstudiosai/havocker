"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, Instagram, Twitter, Youtube, User } from "lucide-react";

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isLoggedIn?: boolean;
  onLoginClick?: () => void;
  onDashboardClick?: () => void;
}

const NavBar = ({ activeTab, setActiveTab, isLoggedIn, onLoginClick, onDashboardClick }: NavBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "01 // OVERVIEW" },
    { id: "specs", label: "02 // SPECS" },
    { id: "gallery", label: "03 // GALLERY" },
    { id: "order", label: "04 // ORDER" },
    { id: "news", label: "05 // NEWS" },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[60] bg-transparent text-white mix-blend-difference transition-all duration-300 pointer-events-none">
        <div className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 pointer-events-auto">
          {/* Logo / Coordinates */}
          <div className="flex flex-col cursor-pointer" onClick={() => setActiveTab("overview")}>
            <span className="font-bold text-xl sm:text-2xl leading-none tracking-tighter">HAVØK X1</span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] opacity-60 font-bold uppercase">
              L3e /// High Performance Electric
            </span>
          </div>

          {/* Desktop Tabs - Fade out when menu is open */}
          <div className={`hidden lg:flex gap-6 xl:gap-10 items-center transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  text-[10px] xl:text-[11px] font-bold tracking-[0.15em] xl:tracking-[0.2em] transition-all duration-300 relative py-1 cursor-pointer
                  ${activeTab === tab.id ? "text-acid" : "opacity-60 hover:opacity-100"}
                `}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute left-0 -bottom-1 w-full h-0.5 bg-acid shadow-[0_0_8px_#ff3d00]" />
                )}
              </button>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className={`hidden sm:flex items-center gap-2 border-l border-white/20 pl-4 h-6 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] font-bold opacity-60 uppercase">STORE OPEN</span>
            </div>

            {/* Account Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-acid transition-colors focus:outline-none relative z-[70] cursor-pointer lg:hidden"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Side Screen Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-black z-50 flex flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

        <div className="flex-grow flex flex-col justify-center px-8 sm:px-12 relative z-10">
          <div className="flex flex-col gap-6">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-acid transition-colors w-full text-left"
                style={{ transitionDelay: `${isMobileMenuOpen ? index * 50 + 100 : 0}ms` }}
              >
                <span className={`text-3xl sm:text-5xl font-bold tracking-tighter transition-colors uppercase ${activeTab === tab.id ? "text-white" : "text-white/40 group-hover:text-white"}`}>
                  {tab.label.split(" // ")[1]}
                </span>
                <ArrowRight size={24} className="text-acid opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            ))}

            {/* Mobile Login in Menu */}
            <button
              onClick={() => { setIsMobileMenuOpen(false); isLoggedIn ? onDashboardClick?.() : onLoginClick?.(); }}
              className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-acid transition-colors w-full text-left md:hidden"
              style={{ transitionDelay: `${isMobileMenuOpen ? tabs.length * 50 + 100 : 0}ms` }}
            >
              <span className="text-3xl sm:text-5xl font-bold tracking-tighter transition-colors uppercase text-white/40 group-hover:text-white">
                {isLoggedIn ? "DASHBOARD" : "LOGIN"}
              </span>
              <ArrowRight size={24} className="text-acid opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>
          </div>
        </div>

        <div className="p-8 sm:p-12 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-md">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/40 mb-3">Connect</span>
                <div className="flex gap-6">
                  <a href="#" className="text-white hover:text-acid transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="text-white hover:text-acid transition-colors"><Twitter size={20} /></a>
                  <a href="#" className="text-white hover:text-acid transition-colors"><Youtube size={20} /></a>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-[9px] font-bold tracking-[0.4em] text-white/40 uppercase mb-1">Inquiries</span>
                <a href="mailto:sales@havok.com" className="text-sm font-bold text-white hover:text-acid transition-colors tracking-widest">SALES@HAVOK.COM</a>
              </div>
            </div>
            <div className="text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase text-center mt-4">
              HAVØK MOTORS © 2025
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
