
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Global Presence", path: "/global" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled
          ? "bg-[#121212]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap size={28} className="text-[#00bfa6]" />
          <span className="text-xl font-bold text-[#f0e6d2]">
            GGS <span className="text-[#00bfa6]">Global</span> Education
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-[#e0e0e0] hover:text-[#00bfa6] transition-colors duration-200 text-sm font-medium",
                  isActive && "text-[#00bfa6]"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Button className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white">
            Book Consultation
          </Button>
        </nav>

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
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-[#e0e0e0] hover:text-[#00bfa6] transition-colors duration-200 text-base font-medium py-2",
                    isActive && "text-[#00bfa6]"
                  )
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <Button className="bg-[#00bfa6] hover:bg-[#00bfa6]/80 text-white w-full">
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
