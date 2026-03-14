"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Instagram,
  Twitter,
  Youtube,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useNav } from "@/context/nav-context";

const SCROLL_TABS = [
  { id: "overview", label: "OVERVIEW" },
  { id: "specs", label: "SPECS" },
  { id: "blog", label: "BLOG" },
];

const NavBar = () => {
  const { activeTab, setActiveTab } = useNav();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isPreOrder = pathname === "/pre-order";
  const isBlog = pathname === "/blog" || pathname.startsWith("/blog/");

  const scrollTo = (tabId: string) => {
    if (pathname !== "/") {
      router.push(`/#${tabId}-section`);
    } else {
      const el = document.getElementById(`${tabId}-section`);
      if (el) {
        window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveTab(tabId);
    }
    setIsMobileMenuOpen(false);
  };

  if (isPreOrder) return null;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 pointer-events-none isolate ${
          isBlog
            ? "bg-surface/98 backdrop-blur-md text-ink border-b border-ink/[0.06]"
            : "bg-transparent text-white mix-blend-difference"
        }`}
      >
        <div className="w-full flex items-center px-4 sm:px-6 py-3 sm:py-4 pointer-events-auto">
          <Link
            href="/"
            className="cursor-pointer shrink-0"
            onClick={() => scrollTo("overview")}
          >
            <span className="font-bold text-xl sm:text-2xl leading-none tracking-tighter">
              HAVØK X1
            </span>
          </Link>

          <div
            className={`hidden lg:flex flex-1 justify-center min-w-0 gap-6 xl:gap-8 items-center transition-opacity duration-300 ${
              isMobileMenuOpen
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          >
            {SCROLL_TABS.map((tab) => {
              const isActive = tab.id === activeTab && pathname === "/";
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollTo(tab.id)}
                  className={`shrink-0 text-[10px] xl:text-[11px] font-bold tracking-[0.15em] transition-all duration-300 relative py-1 cursor-pointer whitespace-nowrap ${
                    isActive ? "text-acid" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <div className="absolute left-0 -bottom-1 w-full h-[1px] bg-acid" />
                  )}
                </button>
              );
            })}

            <div className={`w-px h-4 ${isBlog ? "bg-ink/10" : "bg-white/10"}`} />

            <Link
              href="/product"
              className={`shrink-0 text-[10px] xl:text-[11px] font-bold tracking-[0.15em] transition-all duration-300 relative py-1 whitespace-nowrap ${
                pathname === "/product"
                  ? "text-acid"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              HAVØK X1
              {pathname === "/product" && (
                <div className="absolute left-0 -bottom-1 w-full h-[1px] bg-acid" />
              )}
            </Link>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 shrink-0 ml-auto">
            <Link
              href="/pre-order"
              className="p-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-acid transition-colors focus:outline-none relative z-70 cursor-pointer lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X size={24} strokeWidth={2} />
              ) : (
                <Menu size={24} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isMobileMenuOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-slate z-50 flex flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3a3d44_1px,transparent_1px),linear-gradient(to_bottom,#3a3d44_1px,transparent_1px)] bg-size-[40px_40px] opacity-15 pointer-events-none" />

        <div className="grow flex flex-col justify-center px-8 sm:px-12 relative z-10">
          <div className="flex flex-col gap-6">
            {SCROLL_TABS.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-acid transition-colors w-full text-left"
                style={{
                  transitionDelay: `${isMobileMenuOpen ? i * 50 + 100 : 0}ms`,
                }}
              >
                <span
                  className={`text-3xl sm:text-5xl font-bold tracking-tighter transition-colors uppercase ${
                    pathname === "/" && activeTab === tab.id
                      ? "text-white"
                      : "text-white/40 group-hover:text-white"
                  }`}
                >
                  {tab.label}
                </span>
                <ArrowRight
                  size={24}
                  className="text-acid opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </button>
            ))}

            <Link
              href="/product"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-acid transition-colors w-full text-left"
              style={{
                transitionDelay: `${
                  isMobileMenuOpen ? SCROLL_TABS.length * 50 + 100 : 0
                }ms`,
              }}
            >
              <span
                className={`text-3xl sm:text-5xl font-bold tracking-tighter transition-colors uppercase ${
                  pathname === "/product"
                    ? "text-white"
                    : "text-white/40 group-hover:text-white"
                }`}
              >
                HAVØK X1
              </span>
              <ArrowRight
                size={24}
                className="text-acid opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </Link>
            <Link
              href="/pre-order"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-acid transition-colors w-full text-left"
              style={{
                transitionDelay: `${
                  isMobileMenuOpen ? (SCROLL_TABS.length + 1) * 50 + 100 : 0
                }ms`,
              }}
            >
              <span className="text-3xl sm:text-5xl font-bold tracking-tighter transition-colors uppercase text-white/40 group-hover:text-white">
                CART
              </span>
              <ShoppingBag
                size={24}
                className="text-acid opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </Link>
          </div>
        </div>

        <div className="p-8 sm:p-12 border-t border-white/10 relative z-10 bg-slate/80 backdrop-blur-md">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/40 mb-3">
                  Connect
                </span>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-white hover:text-acid transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-acid transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-acid transition-colors"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-[9px] font-bold tracking-[0.4em] text-white/40 uppercase mb-1">
                  Inquiries
                </span>
                <a
                  href="mailto:sales@havok.com"
                  className="text-sm font-bold text-white hover:text-acid transition-colors tracking-widest"
                >
                  SALES@HAVOK.COM
                </a>
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
