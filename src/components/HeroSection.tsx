
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();

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

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookConsultation = () => {
    navigate('/book-consultation');
  };

  const institutes = [
    { name: "Middle East", logo: "🎓", field: "Medicine & Business" },
    { name: "Europe", logo: "🏛️", field: "Liberal Arts & Sciences" },
    { name: "South Asia", logo: "⚗️", field: "Technology & Engineering" },
    { name: "North America", logo: "🌟", field: "Computer Science & Innovation" },
    { name: "Southeast Asis", logo: "🌟", field: "Computer Science & Innovation" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#121212] to-[#1F1F1F] overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover object-center"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-white-lines-moving-through-a-dark-blue-background-48931-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-[#00bfa6]/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-60 h-60 rounded-full bg-[#2d9cdb]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-[#f0e6d2]/10 blur-3xl"></div>
        
        {/* Abstract educational elements */}
        <div className="absolute top-10 left-10 w-16 h-16 border border-[#00bfa6]/30 rounded-md rotate-12 opacity-40"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-[#2d9cdb]/30 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-[#f0e6d2]/30 rotate-45 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 z-20">
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
              className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white text-lg py-6 px-8 group"
              size="lg"
              onClick={handleExploreServices}
            >
              <Video className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Explore Services
            </Button>
            <Button 
              variant="outline" 
              className="border-[#2d9cdb] text-[#2d9cdb] hover:bg-[#2d9cdb]/10 text-lg py-6 px-8"
              size="lg"
              onClick={handleBookConsultation}
            >
              Enroll Now
            </Button>
          </div>
          
          <div className="mt-20">
            <p className="text-[#a0a0a0] mb-8 text-sm uppercase tracking-widest font-semibold">
              Our Students Excel At World's Top Universities And Trusted By
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
  {institutes.map((institute, index) => (
    <div 
      key={index}
      className="group relative bg-gradient-to-br from-[#1F1F1F]/80 to-[#2d2d2d]/60 backdrop-blur-xl rounded-xl p-4 border border-[#00bfa6]/20 hover:border-[#00bfa6]/50 transition-all duration-500 hover:transform hover:scale-[1.03] hover:shadow-lg hover:shadow-[#00bfa6]/15"
      style={{
        animationDelay: `${index * 0.2}s`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#00bfa6]/5 to-[#2d9cdb]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-3xl mb-2 group-hover:animate-bounce">
          {institute.logo}
        </div>
        <h3 className="text-[#f0e6d2] font-bold text-base mb-1 group-hover:text-[#00bfa6] transition-colors duration-300">
          {institute.name}
        </h3>
        <p className="text-[#a0a0a0] text-xs leading-relaxed">
          {institute.field}
        </p>
      </div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00bfa6]/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#2d9cdb]/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  ))}
</div>
            
            {/* Success metrics */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-[#1F1F1F]/50 backdrop-blur-sm rounded-xl px-6 py-4 border border-[#00bfa6]/20">
                <div className="text-2xl font-bold text-[#00bfa6]">98%</div>
                <div className="text-[#a0a0a0] text-sm">Acceptance Rate</div>
              </div>
              <div className="bg-[#1F1F1F]/50 backdrop-blur-sm rounded-xl px-6 py-4 border border-[#2d9cdb]/20">
                <div className="text-2xl font-bold text-[#2d9cdb]">500+</div>
                <div className="text-[#a0a0a0] text-sm">Global Partners</div>
              </div>
              <div className="bg-[#1F1F1F]/50 backdrop-blur-sm rounded-xl px-6 py-4 border border-[#f0e6d2]/20">
                <div className="text-2xl font-bold text-[#f0e6d2]">50K+</div>
                <div className="text-[#a0a0a0] text-sm">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
