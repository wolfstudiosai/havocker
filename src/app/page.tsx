"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/nav-bar";
import HeroSection from "@/components/hero-section";
import TechSpecs from "@/components/tech-specs";
import Gallery from "@/components/gallery";
import OrderConfigurator from "@/components/order-configurator";
import Footer from "@/components/footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

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
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const section = document.getElementById(`${id}-section`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-dark min-h-screen text-white overflow-x-hidden selection:bg-acid selection:text-dark">
      <NavBar activeTab={activeTab} setActiveTab={scrollToSection} />

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

      <Footer />
    </div>
  );
}
