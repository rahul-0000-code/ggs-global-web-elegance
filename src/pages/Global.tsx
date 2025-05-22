
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Global = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0]">
      <Navbar />
      
      {/* Global Presence Page Header */}
      <div className="pt-32 pb-16 bg-[#1F1F1F]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0e6d2] mb-6">Global Presence</h1>
            <p className="text-lg text-[#a0a0a0]">
              Discover our worldwide network and international partnerships across continents.
            </p>
          </div>
        </div>
      </div>
      
      <GlobalPresenceSection />
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Global;
