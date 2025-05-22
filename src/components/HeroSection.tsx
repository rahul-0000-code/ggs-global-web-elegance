
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const taglineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const taglineElement = taglineRef.current;
    if (taglineElement) {
      observer.observe(taglineElement);
    }

    return () => {
      if (taglineElement) {
        observer.unobserve(taglineElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#121212] to-[#1F1F1F] overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-[#00bfa6]/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-60 h-60 rounded-full bg-[#2d9cdb]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-[#f0e6d2]/5 blur-3xl"></div>
        
        {/* Abstract educational elements */}
        <div className="absolute top-10 left-10 w-16 h-16 border border-[#00bfa6]/20 rounded-md rotate-12 opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-[#2d9cdb]/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-[#f0e6d2]/20 rotate-45 opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={taglineRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f0e6d2] mb-6 opacity-0 transition-all duration-1000 translate-y-10"
          >
            <span className="block mb-2 text-[#00bfa6]">Inspire.</span>
            <span className="block mb-2">Educate.</span>
            <span className="block text-[#2d9cdb]">Excel.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#e0e0e0] mb-8 max-w-2xl mx-auto">
            Premier academic coaching and counseling services to transform your educational journey and career path.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white text-lg py-6 px-8"
              size="lg"
            >
              Explore Services
            </Button>
            <Button 
              variant="outline" 
              className="border-[#2d9cdb] text-[#2d9cdb] hover:bg-[#2d9cdb]/10 text-lg py-6 px-8"
              size="lg"
            >
              Book Consultation
            </Button>
          </div>
          
          <div className="mt-16">
            <p className="text-[#a0a0a0] mb-4 text-sm uppercase tracking-widest">Trusted By</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="w-20 h-12 bg-white/10 rounded-md backdrop-blur-sm flex items-center justify-center">
                <span className="text-[#e0e0e0] font-semibold text-xs">UNIVERSITY 1</span>
              </div>
              <div className="w-20 h-12 bg-white/10 rounded-md backdrop-blur-sm flex items-center justify-center">
                <span className="text-[#e0e0e0] font-semibold text-xs">UNIVERSITY 2</span>
              </div>
              <div className="w-20 h-12 bg-white/10 rounded-md backdrop-blur-sm flex items-center justify-center">
                <span className="text-[#e0e0e0] font-semibold text-xs">INSTITUTE 1</span>
              </div>
              <div className="w-20 h-12 bg-white/10 rounded-md backdrop-blur-sm flex items-center justify-center">
                <span className="text-[#e0e0e0] font-semibold text-xs">INSTITUTE 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero images */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#121212] to-transparent z-10"></div>
      <img 
        src="/lovable-uploads/0936b0f3-ae34-4f84-a495-1a94de3ba48c.png" 
        alt="Graduate students" 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl opacity-30 pointer-events-none"
      />
    </section>
  );
};

export default HeroSection;
