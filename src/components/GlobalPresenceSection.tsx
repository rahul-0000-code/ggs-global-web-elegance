
import { useEffect, useRef, useState } from "react";
import { School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GlobalPresenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [locationPins, setLocationPins] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            if (entry.target === mapRef.current) {
              setTimeout(() => {
                setLocationPins(true);
              }, 500);
            }
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
    { region: "Middle East", x: 55, y: 35, countries: ["Qatar", "UAE", "Saudi Arabia"] },
    { region: "South Asia", x: 75, y: 40, countries: ["India", "Nepal", "Bangladesh"] },
    { region: "North America", x: 25, y: 30, countries: ["USA", "Canada"] },
    { region: "Europe", x: 45, y: 25, countries: ["UK", "Germany", "France"] },
    { region: "East Asia", x: 85, y: 30, countries: ["Singapore", "Malaysia"] }
  ];

  const partners = [
    { name: "University of Oxford", region: "Europe" },
    { name: "Qatar University", region: "Middle East" },
    { name: "University of Toronto", region: "North America" },
    { name: "Nanyang Technological University", region: "East Asia" },
    { name: "University of Delhi", region: "South Asia" },
    { name: "American University of Sharjah", region: "Middle East" },
    { name: "McGill University", region: "North America" },
    { name: "Technical University of Munich", region: "Europe" }
  ];

  return (
    <section id="global" className="py-20 bg-[#1F1F1F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/cf86f43a-dfc9-45f0-9b64-e278a2bec9b6.png')] opacity-5 bg-cover"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={sectionRef}
          className="max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0e6d2] mb-4 text-center">Global Presence</h2>
          <div className="h-1 w-20 bg-[#00bfa6] mx-auto mb-8"></div>
          <p className="text-lg text-[#e0e0e0] mb-12 text-center max-w-2xl mx-auto">
            Our extensive network spans across continents, allowing us to provide localized expertise with a global perspective.
          </p>
        </div>

        {/* World Map with Locations */}
        <div 
          ref={mapRef}
          className="relative h-[300px] md:h-[400px] bg-[#121212] rounded-xl border border-[#2d2d2d] mb-16 opacity-0 scale-95 transition-all duration-1000"
        >
          {/* Basic world map outlines */}
          <div className="absolute inset-0 p-4 flex items-center justify-center">
            <div className="w-full h-full bg-[#1a1a1a] rounded-lg relative">
              {/* Simple continent outlines */}
              <div className="absolute top-[20%] left-[15%] w-[20%] h-[25%] bg-[#2d2d2d] rounded-full opacity-20"></div> {/* North America */}
              <div className="absolute top-[50%] left-[20%] w-[15%] h-[20%] bg-[#2d2d2d] rounded-full opacity-20"></div> {/* South America */}
              <div className="absolute top-[25%] left-[45%] w-[15%] h-[15%] bg-[#2d2d2d] rounded-full opacity-20"></div> {/* Europe */}
              <div className="absolute top-[35%] left-[45%] w-[25%] h-[25%] bg-[#2d2d2d] rounded-full opacity-20"></div> {/* Africa */}
              <div className="absolute top-[25%] left-[70%] w-[20%] h-[30%] bg-[#2d2d2d] rounded-full opacity-20"></div> {/* Asia */}
              <div className="absolute top-[65%] left-[80%] w-[15%] h-[15%] bg-[#2d2d2d] rounded-full opacity-20"></div> {/* Australia */}
              
              {/* Location Pins */}
              {locationPins && locations.map((location, index) => (
                <div 
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ 
                    left: `${location.x}%`, 
                    top: `${location.y}%`,
                    animation: `pin-appear 0.5s ease forwards ${index * 0.2}s`
                  }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-[#00bfa6] rounded-full shadow-lg shadow-[#00bfa6]/30">
                      <div className="absolute w-8 h-8 bg-[#00bfa6]/30 rounded-full -top-2 -left-2 animate-pulse" 
                        style={{animationDuration: '3s'}}></div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 bg-[#121212] text-[#e0e0e0] text-xs rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#2d2d2d] z-30">
                      <p className="font-semibold text-[#00bfa6] text-center mb-1">{location.region}</p>
                      <ul className="text-center">
                        {location.countries.map((country, idx) => (
                          <li key={idx}>{country}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Partner Institutions */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#f0e6d2] mb-8 text-center">Our Partner Institutions</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card 
                key={index}
                className="bg-[#121212]/80 backdrop-blur-sm border-[#2d2d2d] hover:border-[#00bfa6] transition-all hover:translate-y-[-5px] group"
              >
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                    <School className="h-6 w-6 text-[#00bfa6] group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-[#e0e0e0] font-medium text-sm">{partner.name}</p>
                  <p className="text-[#a0a0a0] text-xs">{partner.region}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
