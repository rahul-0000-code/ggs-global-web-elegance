
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TrustSection = () => {
  const trustRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [countersAnimated, setCountersAnimated] = useState(false);

  const stats = [
    { value: 5000, label: "Students Helped", icon: "👨‍🎓", suffix: "+" },
    { value: 10, label: "Years of Experience", icon: "⏱️", suffix: "+" },
    { value: 20, label: "Countries Reached", icon: "🌎", suffix: "+" },
    { value: 95, label: "Success Rate", icon: "📈", suffix: "%" },
  ];

  const testimonials = [
    {
      quote: "GGS Global Education transformed my academic journey. Their personalized approach and expert guidance helped me secure admission to my dream university.",
      name: "Sarah Johnson",
      title: "Medical Student, USA",
      image: "/lovable-uploads/b9a8337f-02d9-4ca4-aa84-433ca93b3bd5.png"
    },
    {
      quote: "The study abroad consultation services at GGS were exceptional. They simplified the complex application process and provided support every step of the way.",
      name: "Mohammed Al-Farsi",
      title: "Engineering Graduate, Qatar",
      image: "/lovable-uploads/6e6f10f5-19a7-4d1b-9b6c-4f05ab4f5c8e.png"
    },
    {
      quote: "The IELTS preparation program gave me the confidence and skills to achieve my target score. The instructors were knowledgeable and supportive.",
      name: "Priya Sharma",
      title: "Masters Student, India",
      image: "/lovable-uploads/0936b0f3-ae34-4f84-a495-1a94de3ba48c.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            if (entry.target === statsRef.current) {
              setCountersAnimated(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [trustRef.current, statsRef.current, testimonialRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Counter animation
  const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!countersAnimated) return;
      
      let startTime: number | null = null;
      let animationFrame: number;
      
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(percentage * end));
        
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };
      
      animationFrame = requestAnimationFrame(updateCount);
      
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, [countersAnimated]);
    
    return <span>{count}{suffix}</span>;
  };

  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div 
          ref={trustRef}
          className="max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0e6d2] mb-4 text-center">Why Trust Us</h2>
          <div className="h-1 w-20 bg-[#00bfa6] mx-auto mb-8"></div>
          <p className="text-lg text-[#e0e0e0] mb-12 text-center max-w-2xl mx-auto">
            With over a decade of experience and thousands of success stories, GGS Global Education has established itself as a trusted partner in educational excellence.
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 opacity-0 scale-95 transition-all duration-1000"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[#1F1F1F] rounded-xl p-6 text-center border border-[#2d2d2d] hover:border-[#00bfa6] transition-all hover:transform hover:translate-y-[-5px]"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#00bfa6] mb-2">
                {countersAnimated ? <Counter end={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
              </h3>
              <p className="text-[#a0a0a0]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div 
          ref={testimonialRef}
          className="opacity-0 translate-y-10 transition-all duration-1000"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#f0e6d2] mb-8 text-center">What Our Students Say</h3>
          
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-[#1F1F1F]/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#2d2d2d]">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/3 mb-6 md:mb-0">
                        <div className="aspect-square h-48 rounded-full overflow-hidden mx-auto border-4 border-[#00bfa6]/30">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <svg className="w-10 h-10 text-[#00bfa6]/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8v6a6 6 0 01-6 6H2v2a8 8 0 008 8v-4a4 4 0 01-4-4v-2h6a2 2 0 002-2v-8a2 2 0 00-2-2H8a2 2 0 00-2 2zm18-2h-6a2 2 0 00-2 2v8a2 2 0 002 2h6v2a4 4 0 01-4 4v4a8 8 0 008-8v-2h-2a6 6 0 01-6-6V8a6 6 0 016-6h2v2a6 6 0 01-6 6z" />
                        </svg>
                        <p className="text-[#e0e0e0] italic mb-6 text-lg">{testimonial.quote}</p>
                        <div>
                          <p className="font-semibold text-[#00bfa6]">{testimonial.name}</p>
                          <p className="text-[#a0a0a0] text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-auto bg-[#1F1F1F] hover:bg-[#2d2d2d] border-[#2d2d2d]" />
              <CarouselNext className="relative inset-auto bg-[#1F1F1F] hover:bg-[#2d2d2d] border-[#2d2d2d]" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
