
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Target } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

    const aboutElement = aboutRef.current;
    const timelineElement = timelineRef.current;

    if (aboutElement) observer.observe(aboutElement);
    if (timelineElement) observer.observe(timelineElement);

    return () => {
      if (aboutElement) observer.unobserve(aboutElement);
      if (timelineElement) observer.unobserve(timelineElement);
    };
  }, []);

  const timelineEvents = [
    {
      year: "2013",
      title: "Foundation",
      description: "GGS Global Education was established with a vision to transform education globally.",
      color: "#00bfa6"
    },
    {
      year: "2015",
      title: "Middle East Expansion",
      description: "Expanded services to Qatar and UAE, bringing premium educational services to the region.",
      color: "#2d9cdb"
    },
    {
      year: "2017",
      title: "South Asia Growth",
      description: "Strengthened presence in India and neighboring countries with specialized programs.",
      color: "#f0e6d2"
    },
    {
      year: "2019",
      title: "Global Partnerships",
      description: "Established strategic partnerships with universities and institutions worldwide.",
      color: "#00bfa6"
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Launched virtual learning platforms to reach students across geographic boundaries.",
      color: "#2d9cdb"
    },
    {
      year: "2023",
      title: "Service Excellence",
      description: "Recognized for excellence in academic coaching and international education consulting.",
      color: "#f0e6d2"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={aboutRef}
            className="opacity-0 translate-x-[-20px] transition-all duration-1000 mb-16"
          >
            <div className="flex items-center mb-4">
              <h2 className="text-3xl md:text-5xl font-bold text-[#f0e6d2] relative z-10">
                About GGS Global Education
                <div className="absolute -z-10 bottom-0 left-0 w-full h-3 bg-[#00bfa6]/20"></div>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
              <div>
                <p className="text-xl text-[#e0e0e0] mb-6 leading-relaxed">
                  GGS Global Education stands as a premier academic coaching and counseling center with <span className="text-[#00bfa6] font-semibold">over a decade of experience</span> in guiding students and professionals toward achieving their educational and career goals.
                </p>
                <p className="text-lg text-[#e0e0e0] mb-8 leading-relaxed">
                  Our commitment lies in providing personalized support, expert guidance, and a comprehensive array of educational and developmental services designed to empower our clients to reach their full potential.
                </p>
                <Link to="/about" className="inline-flex items-center group">
                  <span className="text-[#00bfa6] font-medium mr-2 group-hover:underline">Learn more about our journey</span>
                  <ArrowRight className="h-4 w-4 text-[#00bfa6] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border-[#2d2d2d] hover:border-[#00bfa6] transition-colors duration-300 group overflow-hidden relative">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-[#00bfa6]/5 rounded-full -translate-x-10 -translate-y-10 group-hover:bg-[#00bfa6]/10 transition-colors"></div>
                  <CardContent className="p-6 relative">
                    <div className="bg-[#00bfa6]/10 w-12 h-12 rounded-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Target className="h-6 w-6 text-[#00bfa6]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#00bfa6] mb-3">Our Vision</h3>
                    <p className="text-[#a0a0a0] leading-relaxed">To empower students and professionals by boosting their knowledge and skills, enabling high productivity and excellence in their chosen fields.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border-[#2d2d2d] hover:border-[#2d9cdb] transition-colors duration-300 group overflow-hidden relative">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-[#2d9cdb]/5 rounded-full -translate-x-10 -translate-y-10 group-hover:bg-[#2d9cdb]/10 transition-colors"></div>
                  <CardContent className="p-6 relative">
                    <div className="bg-[#2d9cdb]/10 w-12 h-12 rounded-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Globe className="h-6 w-6 text-[#2d9cdb]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2d9cdb] mb-3">Our Mission</h3>
                    <p className="text-[#a0a0a0] leading-relaxed">Transform lives through innovative, comprehensive, and tailored educational solutions for optimal growth and development.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border-[#2d2d2d] hover:border-[#f0e6d2] transition-colors duration-300 group overflow-hidden relative md:hidden">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-[#f0e6d2]/5 rounded-full -translate-x-10 -translate-y-10 group-hover:bg-[#f0e6d2]/10 transition-colors"></div>
                  <CardContent className="p-6 relative">
                    <div className="bg-[#f0e6d2]/10 w-12 h-12 rounded-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Award className="h-6 w-6 text-[#f0e6d2]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#f0e6d2] mb-3">Our Values</h3>
                    <p className="text-[#a0a0a0] leading-relaxed">Excellence, integrity, personalization, innovation, and global perspective in all our educational endeavors.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border-[#2d2d2d] hover:border-[#f0e6d2] transition-colors duration-300 group overflow-hidden relative mt-8 md:block hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-[#f0e6d2]/5 rounded-full -translate-x-10 -translate-y-10 group-hover:bg-[#f0e6d2]/10 transition-colors"></div>
              <CardContent className="p-6 relative">
                <div className="bg-[#f0e6d2]/10 w-12 h-12 rounded-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-[#f0e6d2]" />
                </div>
                <h3 className="text-xl font-semibold text-[#f0e6d2] mb-3">Our Values</h3>
                <p className="text-[#a0a0a0] leading-relaxed">Excellence, integrity, personalization, innovation, and global perspective in all our educational endeavors. We strive to deliver world-class educational services that transform lives and create lasting impact.</p>
              </CardContent>
            </Card>
          </div>

          <div 
            ref={timelineRef}
            className="opacity-0 translate-y-10 transition-all duration-1000"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#f0e6d2] mb-8 text-center">Our Journey</h3>
            <div className="relative">
              {/* Timeline center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00bfa6] to-[#2d9cdb]"></div>
              
              {/* Timeline events */}
              <div className="space-y-16">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div 
                        className="bg-[#1F1F1F] p-6 rounded-lg border border-[#2d2d2d] hover:border-[#00bfa6] transition-all hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#00bfa6]/10"
                        style={{ borderLeftColor: event.color, borderLeftWidth: index % 2 === 0 ? 1 : 4, borderRightColor: event.color, borderRightWidth: index % 2 === 1 ? 1 : 4 }}
                      >
                        <span className="text-[#00bfa6] font-bold text-xl mb-1 block">{event.year}</span>
                        <h4 className="text-[#f0e6d2] font-semibold text-lg mb-2">{event.title}</h4>
                        <p className="text-[#a0a0a0]">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1F1F1F] border-4 border-[#121212]">
                      <div className="w-3 h-3 rounded-full bg-[#00bfa6]"></div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
