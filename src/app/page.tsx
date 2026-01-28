"use client";

import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import TechSpecs from "@/components/tech-specs";
import Gallery from "@/components/gallery";
import OrderConfigurator from "@/components/order-configurator";
import { useNav } from "@/context/nav-context";

export default function Home() {
  const { setActiveTab } = useNav();

  // Simple scroll spy logic to update nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const specsSection = document.getElementById("specs-section");
      const gallerySection = document.getElementById("gallery-section");
      const orderSection = document.getElementById("order-section");

      if (specsSection && gallerySection && orderSection) {
        const scrollPos = window.scrollY + 300; // Offset

        if (scrollPos >= orderSection.offsetTop) {
          setActiveTab("order");
        } else if (scrollPos >= gallerySection.offsetTop) {
          setActiveTab("gallery");
        } else if (scrollPos >= specsSection.offsetTop) {
          setActiveTab("specs");
        } else {
          setActiveTab("overview");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveTab]);

  return (
    <div className="bg-dark min-h-screen text-white overflow-x-hidden selection:bg-acid selection:text-dark">
      <main>
        <div id="overview-section">
          <HeroSection />
        </div>

        <div id="specs-section">
          <TechSpecs />
        </div>

        <div id="gallery-section">
          <Gallery />
        </div>

        <div id="order-section">
          <OrderConfigurator />
        </div>
      </main>
    </div>
  );
}
