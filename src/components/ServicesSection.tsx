
import { useState, useEffect, useRef } from "react";
import { Book, School, Users, GraduationCap, Image, Laptop, MessageSquare, Phone } from "lucide-react";

const ServicesSection = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("academic");

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

    const servicesElement = servicesRef.current;
    if (servicesElement) {
      observer.observe(servicesElement);
    }

    return () => {
      if (servicesElement) {
        observer.unobserve(servicesElement);
      }
    };
  }, []);

  const categories = [
    { id: "academic", name: "Academic & Career", icon: <Book className="h-5 w-5" /> },
    { id: "international", name: "International", icon: <School className="h-5 w-5" /> },
    { id: "professional", name: "Professional", icon: <Users className="h-5 w-5" /> },
    { id: "events", name: "Events & Activities", icon: <GraduationCap className="h-5 w-5" /> },
  ];

  const services = {
    academic: [
      {
        title: "Academic Tutoring",
        description: "Personalized tutoring services for 10th-12th students, undergraduates, and postgraduates across various subjects.",
        icon: <Book className="h-6 w-6 text-[#00bfa6]" />,
        image: "/GGS-uploads/a7c6cf4a-9763-4176-83d8-b988b585431d.png"
      },
      {
        title: "Career Counseling",
        description: "Expert guidance to help students discover their aptitudes and align their academic paths with career goals.",
        icon: <Laptop className="h-6 w-6 text-[#00bfa6]" />,
        image: "/GGS-uploads/976e3c4e-f071-4fec-8092-e1d34292223b.png"
      },
      {
        title: "Parental Guidance",
        description: "Support programs for parents to effectively guide their children's educational journey.",
        icon: <Users className="h-6 w-6 text-[#00bfa6]" />,
        image: "/GGS-uploads/9a29b0c9-0013-4aa8-9a7a-5aba13bc4cb4.png"
      },
      {
        title: "Test Preparation (IELTS)",
        description: "Specialized coaching for standardized tests like IELTS, ensuring high scores for academic and immigration purposes.",
        icon: <Book className="h-6 w-6 text-[#00bfa6]" />,
        image: "/GGS-uploads/54a96190-f88d-41c9-a19c-d92f04edd97e.png"
      }
    ],
    international: [
      {
        title: "Study Abroad Consulting",
        description: "Comprehensive guidance on university selection, application process, visa requirements, and cultural preparation.",
        icon: <School className="h-6 w-6 text-[#2d9cdb]" />,
        image: "/GGS-uploads/a489b41b-1978-4ded-b483-8d11364378d5.png"
      },
      {
        title: "International Medical School Admissions",
        description: "Specialized support for students seeking admission to medical schools worldwide.",
        icon: <Image className="h-6 w-6 text-[#2d9cdb]" />,
        image: "/GGS-uploads/6bd1f1ef-3d80-42a2-91fd-867b7ce08f36.png"
      },
      {
        title: "Certificate Embassy Attestation",
        description: "Assistance with document authentication and embassy attestation required for international education.",
        icon: <MessageSquare className="h-6 w-6 text-[#2d9cdb]" />,
        image: "/GGS-uploads/61e0a716-3c53-4b2d-bb5c-a3bc9b2a688c.png"
      }
    ],
    professional: [
      {
        title: "Teacher Training",
        description: "Professional development programs for educators to enhance teaching methodologies and classroom management.",
        icon: <Users className="h-6 w-6 text-[#f0e6d2]" />,
        image: "/GGS-uploads/582c15cb-9bb2-4204-81bd-9ef9064d62bc.png"
      },
      {
        title: "Leadership & Skill Development",
        description: "Workshops and courses to develop essential professional skills and leadership qualities.",
        icon: <GraduationCap className="h-6 w-6 text-[#f0e6d2]" />,
        image: "/GGS-uploads/f820e626-9297-4864-bf62-759ec727782f.png"
      },
      {
        title: "Professional Certification Services",
        description: "Guidance and preparation for industry-recognized professional certifications to enhance career prospects.",
        icon: <Laptop className="h-6 w-6 text-[#f0e6d2]" />,
        image: "/GGS-uploads/c20656c9-507d-4c13-9028-5881dd075030.png"
      }
    ],
    events: [
      {
        title: "Extracurricular Activities Planning",
        description: "Organization of educational activities, competitions, and events that complement academic learning.",
        icon: <School className="h-6 w-6 text-[#2d9cdb]" />,
        image: "/GGS-uploads/8d7b0c6e-c4d8-442d-8752-9b467ec92a62.png"
      },
      {
        title: "Event Organizing",
        description: "Planning and execution of educational conferences, seminars, and workshops for schools and institutions.",
        icon: <Users className="h-6 w-6 text-[#2d9cdb]" />,
        image: "/GGS-uploads/e2265f28-42b0-437c-a699-84c625c23221.png"
      }
    ]
  };

  // @ts-ignore - dynamic key access
  const currentServices = services[activeCategory] || [];

  return (
    <section className="py-20 bg-[#1F1F1F]">
      <div className="container mx-auto px-4">
        <div 
          ref={servicesRef}
          className="max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0e6d2] mb-4 text-center">Our Services</h2>
          <div className="h-1 w-20 bg-[#00bfa6] mx-auto mb-8"></div>
          <p className="text-lg text-[#e0e0e0] mb-12 text-center max-w-2xl mx-auto">
            Comprehensive educational and development services tailored to meet the diverse needs of students and professionals worldwide.
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-[#00bfa6] text-white shadow-lg shadow-[#00bfa6]/20"
                    : "bg-[#2a2a2a] text-[#c0c0c0] hover:bg-[#2d2d2d]"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentServices.map((service, index) => (
              <div 
                key={index}
                className="bg-[#121212]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-[#2d2d2d] hover:border-[#00bfa6] transition-all group hover:shadow-lg hover:shadow-[#00bfa6]/10 hover:translate-y-[-5px]"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-[#1a1a1a] rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#f0e6d2] mb-2">{service.title}</h3>
                      <p className="text-[#a0a0a0]">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
