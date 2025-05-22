
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0]">
      <Navbar />
      
      {/* About Page Header */}
      <div className="pt-32 pb-16 bg-[#1F1F1F]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0e6d2] mb-6">About Us</h1>
            <p className="text-lg text-[#a0a0a0]">
              Learn more about our journey, vision, and the team behind GGS Global Education.
            </p>
          </div>
        </div>
      </div>
      
      <AboutSection />
      <TrustSection />
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default About;
