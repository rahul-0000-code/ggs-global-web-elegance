
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
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-outfit">
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[#121212]">
        {/* Abstract background with 3D-like depth effect */}
        <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] rounded-full bg-[#00bfa6]/5 blur-[8rem]"></div>
          <div className="absolute top-[40%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-[#2d9cdb]/5 blur-[6rem]"></div>
          <div className="absolute bottom-[10%] left-[30%] w-[25rem] h-[25rem] rounded-full bg-[#f0e6d2]/5 blur-[5rem]"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/cf86f43a-dfc9-45f0-9b64-e278a2bec9b6.png')] opacity-5 bg-repeat"></div>
      </div>
      
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
