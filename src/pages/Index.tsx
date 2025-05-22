
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "../styles/animations.css";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="trust">
        <TrustSection />
      </div>
      <GlobalPresenceSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
