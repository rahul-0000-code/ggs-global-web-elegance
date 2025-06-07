
import { useEffect, useRef, useState } from "react";
import { School, MapPin, Globe, Users, Building, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GlobalPresenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElement = sectionRef.current;
    const mapElement = mapRef.current;

    if (sectionElement) observer.observe(sectionElement);
    if (mapElement) observer.observe(mapElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
      if (mapElement) observer.unobserve(mapElement);
    };
  }, []);

const locations = [
  { 
    id: 1,
    region: "North America", 
    x: 20, 
    y: 35, 
    countries: ["USA", "Canada", "Mexico", "Costa Rica", "Jamaica", "Panama", "Dominican Republic"],
    students: "18,000+",
    institutions: 52,
    color: "#00bfa6"
  },
  { 
    id: 2,
    region: "Europe", 
    x: 50, 
    y: 20, 
    countries: ["Germany", "France", "Netherlands", "Italy", "Switzerland", "Sweden", "Norway", "Denmark"],
    students: "25,000+",
    institutions: 78,
    color: "#2d9cdb"
  },
  { 
    id: 9,
    region: "United Kingdom", 
    x: 45, 
    y: 10, 
    countries: ["England", "Scotland", "Wales", "Northern Ireland"],
    color: "#ffcc00",
    students: "N/A",
    institutions: "N/A"
  },
  { 
    id: 3,
    region: "Middle East", 
    x: 60, 
    y: 40, 
    countries: ["Qatar", "UAE", "Saudi Arabia", "Kuwait", "Oman", "Bahrain", "Jordan", "Lebanon", "Egypt"],
    students: "15,000+",
    institutions: 42,
    color: "#f0e6d2"
  },
  { 
    id: 4,
    region: "South Asia", 
    x: 75, 
    y: 45, 
    countries: ["India", "Pakistan", "Nepal", "Bangladesh", "Sri Lanka", "Maldives", "Bhutan"],
    color: "#00bfa6"
  },
  { 
    id: 5,
    region: "East Asia", 
    x: 85, 
    y: 35, 
    countries: ["Singapore", "Malaysia", "Thailand", "Philippines", "Indonesia", "Vietnam", "Hong Kong"],
    color: "#2d9cdb"
  },
  { 
    id: 6,
    region: "Africa", 
    x: 55, 
    y: 55, 
    countries: ["South Africa", "Nigeria", "Kenya", "Ghana", "Morocco", "Tanzania"],
    color: "#ff9f1c"
  },
  { 
    id: 8,
    region: "South America", 
    x: 30, 
    y: 60, 
    countries: ["Brazil", "Argentina", "Chile", "Colombia", "Peru"],
    color: "#662e9b"
  },
  { 
    id: 10,
    region: "Russia", 
    x: 65, 
    y: 15, 
    countries: ["Russia", "Belarus", "Ukraine", "Kazakhstan", "Armenia"],
    color: "#662e9b"
  },
  { 
    id: 11,
    region: "Spain", 
    x: 35, 
    y: 15, 
    countries: ["Spain", "Portugal", "Andorra"],
    color: "#ff9f1c"
  }
];

const flightPaths = [
  { from: { x: 20, y: 35 }, to: { x: 50, y: 25 }, delay: 0 },   
  { from: { x: 50, y: 25 }, to: { x: 75, y: 45 }, delay: 2 },   
  { from: { x: 60, y: 40 }, to: { x: 85, y: 35 }, delay: 4 },   
  { from: { x: 85, y: 35 }, to: { x: 20, y: 35 }, delay: 6 },   
  { from: { x: 75, y: 45 }, to: { x: 60, y: 40 }, delay: 8 },   
  { from: { x: 55, y: 55 }, to: { x: 60, y: 40 }, delay: 10 },   
  { from: { x: 90, y: 60 }, to: { x: 85, y: 35 }, delay: 12 },   
  { from: { x: 30, y: 60 }, to: { x: 20, y: 35 }, delay: 14 },   
  { from: { x: 50, y: 25 }, to: { x: 55, y: 55 }, delay: 16 },   
  { from: { x: 75, y: 45 }, to: { x: 90, y: 60 }, delay: 18 }    
];

const partners = [
  { 
    name: "World Directory of Medical Schools (WDOMS)", 
    region: "Global", 
    type: "Medical Education Authority", 
    logo: "🏥" 
  },
  { 
    name: "World Health Organization (WHO)", 
    region: "Global", 
    type: "United Nations Health Agency", 
    logo: "🌐" 
  },
  { 
    name: "NAAC (A+ Grade)", 
    region: "India", 
    type: "Higher Education Accreditation", 
    logo: "⭐" 
  },
  { 
    name: "AICTE", 
    region: "India", 
    type: "Technical Education Regulator", 
    logo: "⚙️" 
  },
  { 
    name: "PCI (Pharmacy Council of India)", 
    region: "India", 
    type: "Pharmacy Education Authority", 
    logo: "💊" 
  },
  { 
    name: "INC (Indian Nursing Council)", 
    region: "India", 
    type: "Nursing Education Regulator", 
    logo: "🩺" 
  },
  { 
    name: "International Association of Universities - IAU", 
    region: "Global", 
    type: "Higher Education Network", 
    logo: "🎓" 
  },
  { 
    name: "WES (World Education Services)", 
    region: "Global", 
    type: "Credential Evaluation", 
    logo: "📝" 
  },
];

  return (
    <section id="global" className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#1F1F1F] to-[#121212] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[60rem] h-[60rem] rounded-full bg-[#00bfa6]/3 blur-[12rem] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[40rem] h-[40rem] rounded-full bg-[#2d9cdb]/3 blur-[10rem] animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[50%] left-[50%] w-[30rem] h-[30rem] rounded-full bg-[#f0e6d2]/2 blur-[8rem] animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 2}s`
            }}
          >
            <Globe className="w-8 h-8 text-[#00bfa6] animate-float" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-[#121212]/80 backdrop-blur-sm border border-[#00bfa6]/20 rounded-full px-6 py-3 mb-6">
              <Globe className="w-5 h-5 text-[#00bfa6]" />
              <span className="text-[#00bfa6] font-medium">Global Network</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f0e6d2] via-[#00bfa6] to-[#2d9cdb] mb-6 leading-tight">
              Worldwide Excellence
            </h2>
            <div className="h-2 w-32 bg-gradient-to-r from-[#00bfa6] to-[#2d9cdb] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto leading-relaxed">
              Our extensive network spans across continents, connecting students with premier institutions and creating pathways to success through strategic partnerships and localized expertise.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, label: "Students Placed", value: "95,000+", color: "#00bfa6" },
              { icon: Building, label: "Partner Institutions", value: "288", color: "#2d9cdb" },
              { icon: Globe, label: "Countries", value: "45+", color: "#f0e6d2" },
              { icon: MapPin, label: "Cities", value: "150+", color: "#00bfa6" }
            ].map((stat, index) => (
              <Card 
                key={index}
                className="fancy-border group hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8" style={{color: stat.color}} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#f0e6d2] mb-2">{stat.value}</h3>
                  <p className="text-[#a0a0a0] text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive World Map */}
        <div 
          ref={mapRef}
          className="relative h-[500px] md:h-[600px] fancy-highlight-border mb-20 opacity-0 scale-95 transition-all duration-1000"
        >
          <div className="absolute inset-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-xl overflow-hidden">
            {/* World Map Base */}
            <div className="w-full h-full relative">
              {/* Continents with subtle glow */}
              <div className="absolute top-[20%] left-[15%] w-[20%] h-[25%] bg-gradient-to-br from-[#2d2d2d]/40 to-[#1a1a1a]/60 rounded-lg opacity-30 blur-sm"></div>
              <div className="absolute top-[50%] left-[20%] w-[15%] h-[20%] bg-gradient-to-br from-[#2d2d2d]/40 to-[#1a1a1a]/60 rounded-lg opacity-30 blur-sm"></div>
              <div className="absolute top-[25%] left-[45%] w-[15%] h-[15%] bg-gradient-to-br from-[#2d2d2d]/40 to-[#1a1a1a]/60 rounded-lg opacity-30 blur-sm"></div>
              <div className="absolute top-[35%] left-[45%] w-[25%] h-[25%] bg-gradient-to-br from-[#2d2d2d]/40 to-[#1a1a1a]/60 rounded-lg opacity-30 blur-sm"></div>
              <div className="absolute top-[25%] left-[70%] w-[20%] h-[30%] bg-gradient-to-br from-[#2d2d2d]/40 to-[#1a1a1a]/60 rounded-lg opacity-30 blur-sm"></div>
              <div className="absolute top-[65%] left-[80%] w-[15%] h-[15%] bg-gradient-to-br from-[#2d2d2d]/40 to-[#1a1a1a]/60 rounded-lg opacity-30 blur-sm"></div>
              
              {/* Flight Paths */}
              {isVisible && flightPaths.map((path, index) => (
                <svg 
                  key={index}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{animationDelay: `${path.delay}s`}}
                >
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(0, 191, 166, 0)" />
                      <stop offset="50%" stopColor="rgba(0, 191, 166, 0.8)" />
                      <stop offset="100%" stopColor="rgba(45, 156, 219, 0)" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`M ${path.from.x}% ${path.from.y}% Q ${(path.from.x + path.to.x) / 2}% ${Math.min(path.from.y, path.to.y) - 10}% ${path.to.x}% ${path.to.y}%`}
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{
                      strokeDasharray: "5,5",
                      animation: `drawPath 4s infinite ${path.delay}s`
                    }}
                  />
                </svg>
              ))}
              
              {/* Animated Graduation Cap Icons */}
              {isVisible && flightPaths.map((path, index) => (
                <div 
                  key={`graduation-${index}`}
                  className="absolute pointer-events-none z-20"
                  style={{
                    animation: `flyPath${index} 8s infinite linear ${path.delay}s`,
                  }}
                >
                  <GraduationCap 
                    className="w-6 h-6 text-[#00bfa6]" 
                    style={{
                      filter: 'drop-shadow(0 0 8px currentColor)',
                      transform: 'rotate(15deg)'
                    }}
                  />
                </div>
              ))}
              
              {/* Location Pins with Default Visible Names */}
              {isVisible && locations.map((location, index) => (
                <div 
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
                  style={{ 
                    left: `${location.x}%`, 
                    top: `${location.y}%`,
                    animation: `pinAppear 0.8s ease forwards ${index * 0.3}s`
                  }}
                  onMouseEnter={() => setActiveRegion(location.id)}
                  onMouseLeave={() => setActiveRegion(null)}
                >
                  <div className="relative group">
                    <div 
                      className="w-6 h-6 rounded-full shadow-2xl border-2 border-white/20 relative z-10"
                      style={{backgroundColor: location.color}}
                    >
                      <div 
                        className="absolute w-12 h-12 rounded-full -top-3 -left-3 animate-ping opacity-30"
                        style={{backgroundColor: location.color}}
                      ></div>
                      <div 
                        className="absolute w-8 h-8 rounded-full -top-1 -left-1 animate-pulse opacity-50"
                        style={{backgroundColor: location.color}}
                      ></div>
                    </div>
                    
                    {/* Always Visible Region Name */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
                      <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                        <span className="text-white text-xs font-medium">{location.region}</span>
                      </div>
                    </div>
                    
                    {/* Enhanced Tooltip on Hover */}
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-64 transition-all duration-300 ${
                      activeRegion === location.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                    }`}>
                      <div className="fancy-border p-4">
                        <h4 className="font-bold text-[#f0e6d2] text-lg mb-2">{location.region}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#a0a0a0]">Students:</span>
                            <span className="text-[#00bfa6] font-medium">{location.students}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#a0a0a0]">Institutions:</span>
                            <span className="text-[#2d9cdb] font-medium">{location.institutions}</span>
                          </div>
                          <div className="mt-3">
                            <p className="text-[#a0a0a0] text-xs mb-1">Countries:</p>
                            <div className="flex flex-wrap gap-1">
                              {location.countries.map((country, idx) => (
                                <span key={idx} className="px-2 py-1 bg-[#2d2d2d] rounded text-xs text-[#e0e0e0]">
                                  {country}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Partner Institutions Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#f0e6d2] mb-4">Our Premier Partner Accreditations</h3>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Collaborating with world-renowned universities and institutions to provide unparalleled educational opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card 
                key={index}
                className="fancy-border group hover:scale-105 hover:border-[#00bfa6] transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {partner.logo}
                  </div>
                  <h4 className="text-[#f0e6d2] font-bold text-sm mb-2 leading-tight">{partner.name}</h4>
                  <p className="text-[#00bfa6] text-xs mb-1">{partner.region}</p>
                  <p className="text-[#a0a0a0] text-xs">{partner.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

<style>
  {`
    @keyframes pinAppear {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
      }
      70% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.3);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
    
    @keyframes drawPath {
      0% {
        stroke-dashoffset: 100;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
    
    @keyframes flyPath0 {
      0% { left: 20%; top: 35%; }
      100% { left: 50%; top: 25%; }
    }
    
    @keyframes flyPath1 {
      0% { left: 50%; top: 25%; }
      100% { left: 75%; top: 45%; }
    }
    
    @keyframes flyPath2 {
      0% { left: 60%; top: 40%; }
      100% { left: 85%; top: 35%; }
    }
    
    @keyframes flyPath3 {
      0% { left: 85%; top: 35%; }
      100% { left: 20%; top: 35%; }
    }
    
    @keyframes flyPath4 {
      0% { left: 75%; top: 45%; }
      100% { left: 60%; top: 40%; }
    }

    @keyframes flyPath5 {
      0% { left: 55%; top: 55%; }
      100% { left: 60%; top: 40%; }
    }

    @keyframes flyPath6 {
      0% { left: 90%; top: 60%; }
      100% { left: 85%; top: 35%; }
    }

    @keyframes flyPath7 {
      0% { left: 30%; top: 60%; }
      100% { left: 20%; top: 35%; }
    }

    @keyframes flyPath8 {
      0% { left: 50%; top: 25%; }
      100% { left: 55%; top: 55%; }
    }

    @keyframes flyPath9 {
      0% { left: 15%; top: 95%; }
      100% { left: 90%; top: 60%; }
    }

    @keyframes flyPath10 {
      0% { left: 35%; top: 15%; }
      100% { left: 90%; top: 60%; }
    }
  `}
</style>
    </section>
  );
};

export default GlobalPresenceSection;
