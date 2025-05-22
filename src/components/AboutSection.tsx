
import { useEffect, useRef } from "react";

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
      description: "GGS Global Education was established with a vision to transform education globally."
    },
    {
      year: "2015",
      title: "Middle East Expansion",
      description: "Expanded services to Qatar and UAE, bringing premium educational services to the region."
    },
    {
      year: "2017",
      title: "South Asia Growth",
      description: "Strengthened presence in India and neighboring countries with specialized programs."
    },
    {
      year: "2019",
      title: "Global Partnerships",
      description: "Established strategic partnerships with universities and institutions worldwide."
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Launched virtual learning platforms to reach students across geographic boundaries."
    },
    {
      year: "2023",
      title: "Service Excellence",
      description: "Recognized for excellence in academic coaching and international education consulting."
    }
  ];

  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={aboutRef}
            className="opacity-0 translate-x-[-20px] transition-all duration-1000 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0e6d2] mb-4">About GGS Global Education</h2>
            <div className="h-1 w-20 bg-[#00bfa6] mb-8"></div>
            <p className="text-lg text-[#e0e0e0] mb-6">
              GGS Global Education stands as a premier academic coaching and counseling center with over a decade of experience in guiding students and professionals toward achieving their educational and career goals.
            </p>
            <p className="text-lg text-[#e0e0e0] mb-6">
              Our commitment lies in providing personalized support, expert guidance, and a comprehensive array of educational and developmental services designed to empower our clients to reach their full potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-[#1F1F1F] p-6 rounded-lg border border-[#2d2d2d] hover:border-[#00bfa6] transition-colors group">
                <h3 className="text-xl font-semibold text-[#00bfa6] mb-3 group-hover:translate-y-[-5px] transition-transform">Our Vision</h3>
                <p className="text-[#a0a0a0]">To empower students and professionals by boosting their knowledge and skills, enabling high productivity and excellence.</p>
              </div>
              <div className="bg-[#1F1F1F] p-6 rounded-lg border border-[#2d2d2d] hover:border-[#2d9cdb] transition-colors group">
                <h3 className="text-xl font-semibold text-[#2d9cdb] mb-3 group-hover:translate-y-[-5px] transition-transform">Our Mission</h3>
                <p className="text-[#a0a0a0]">Transform lives through innovative, comprehensive, and tailored educational solutions for optimal growth.</p>
              </div>
              <div className="bg-[#1F1F1F] p-6 rounded-lg border border-[#2d2d2d] hover:border-[#f0e6d2] transition-colors group">
                <h3 className="text-xl font-semibold text-[#f0e6d2] mb-3 group-hover:translate-y-[-5px] transition-transform">Our Values</h3>
                <p className="text-[#a0a0a0]">Excellence, integrity, personalization, innovation, and global perspective in all our educational endeavors.</p>
              </div>
            </div>
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
                      <div className="bg-[#1F1F1F] p-6 rounded-lg border border-[#2d2d2d] hover:border-[#00bfa6] transition-all hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#00bfa6]/10">
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
