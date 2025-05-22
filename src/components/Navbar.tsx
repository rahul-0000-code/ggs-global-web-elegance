
import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { GraduationCap, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Only update active section based on scroll on home page
      if (isHomePage) {
        const sections = [
          { id: "home", position: 0 },
          { id: "about", position: document.getElementById("about")?.offsetTop || 0 },
          { id: "services", position: document.getElementById("services")?.offsetTop || 0 },
          { id: "trust", position: document.getElementById("trust")?.offsetTop || 0 },
          { id: "global", position: document.getElementById("global")?.offsetTop || 0 },
          { id: "contact", position: document.getElementById("contact")?.offsetTop || 0 }
        ];

        const currentPosition = window.scrollY + 300; // Add offset to make detection more accurate

        for (let i = sections.length - 1; i >= 0; i--) {
          if (currentPosition >= sections[i].position) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Reset active section when route changes
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    } else {
      setActiveSection(location.pathname.substring(1) || "home");
    }
  }, [location.pathname]);

  const handleBookConsultation = () => {
    navigate("/book-consultation");
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/", section: "home" },
    { name: "About Us", path: "/about", section: "about" },
    { name: "Services", path: "/services", section: "services" },
    { name: "Global Presence", path: "/global", section: "global" },
    { name: "Contact", path: "/contact", section: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-3",
        isScrolled
          ? "bg-[#121212]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#00bfa6] rounded-full p-1 group-hover:bg-[#00bfa6]/90 transition-colors">
            <GraduationCap size={24} className="text-[#121212]" />
          </div>
          <span className="text-xl font-bold text-[#f0e6d2]">
            GGS <span className="text-[#00bfa6]">Global</span> Education
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1">
              {navItems.map((item) => {
                const isActive = (isHomePage && item.section === activeSection) || 
                                (!isHomePage && item.path === location.pathname);
                
                return (
                  <NavigationMenuItem key={item.name}>
                    {isHomePage && item.path === "/" ? (
                      <div 
                        onClick={() => scrollToSection(item.section)}
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-all",
                          isActive 
                            ? "text-[#00bfa6] bg-[#00bfa6]/10" 
                            : "text-[#e0e0e0] hover:text-[#00bfa6] hover:bg-[#00bfa6]/5"
                        )}
                      >
                        {item.name}
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive: linkActive }) =>
                          cn(
                            "px-4 py-2 rounded-md inline-block text-sm font-medium transition-all",
                            (linkActive || isActive)
                              ? "text-[#00bfa6] bg-[#00bfa6]/10"
                              : "text-[#e0e0e0] hover:text-[#00bfa6] hover:bg-[#00bfa6]/5"
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </NavigationMenuItem>
                );
              })}
              <NavigationMenuItem>
                <Button 
                  onClick={handleBookConsultation}
                  className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white ml-2"
                >
                  Book Consultation
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden text-[#e0e0e0]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-md absolute top-full left-0 w-full py-4 shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = (isHomePage && item.section === activeSection) || 
                              (!isHomePage && item.path === location.pathname);
              
              return isHomePage && item.path === "/" ? (
                <div 
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={cn(
                    "px-4 py-3 rounded-md flex items-center justify-between transition-all",
                    isActive 
                      ? "text-[#00bfa6] bg-[#00bfa6]/10" 
                      : "text-[#e0e0e0] hover:text-[#00bfa6]"
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && <ChevronRight size={16} />}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive: linkActive }) =>
                    cn(
                      "px-4 py-3 rounded-md flex items-center justify-between transition-all",
                      (linkActive || isActive)
                        ? "text-[#00bfa6] bg-[#00bfa6]/10"
                        : "text-[#e0e0e0] hover:text-[#00bfa6]"
                    )
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {(location.pathname === item.path) && <ChevronRight size={16} />}
                </NavLink>
              );
            })}
            <Button 
              onClick={handleBookConsultation}
              className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white w-full mt-2"
            >
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
