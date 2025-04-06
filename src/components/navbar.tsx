import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
  onNavClick?: (sectionId: string) => void;
}

const Navbar = ({ activeSection, onNavClick }: NavbarProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      // Update scroll state
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = (sectionId: string) => {
    if (onNavClick) {
      onNavClick(sectionId);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-background"
      } ${scrollDirection === 'down' && lastScrollY > 100 ? 'transform -translate-y-full' : 'transform translate-y-0'}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold">KA</span>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/projects" 
            className={`hover:text-foreground transition-colors duration-200 relative ${
              activeSection === "projects" ? "text-foreground" : "text-foreground/80"
            } after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </Link>
          <Link 
            to="/insights" 
            className={`hover:text-foreground transition-colors duration-200 relative ${
              activeSection === "insights" ? "text-foreground" : "text-foreground/80"
            } after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
            onClick={() => handleNavClick("insights")}
          >
            Insights
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-foreground transition-colors duration-200 relative ${
              activeSection === "about" ? "text-foreground" : "text-foreground/80"
            } after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
            onClick={() => handleNavClick("about")}
          >
            About
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" asChild className="hover:bg-primary/10 transition-all duration-300">
            <Link to="/about#contact">Contact</Link>
          </Button>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/projects" 
              className={`hover:text-foreground transition-colors duration-200 ${activeSection === "projects" ? "text-foreground" : "text-foreground/80"}`}
              onClick={() => {
                handleNavClick("projects");
                setIsMobileMenuOpen(false);
              }}
            >
              Projects
            </Link>
            <Link 
              to="/insights" 
              className={`hover:text-foreground transition-colors duration-200 ${activeSection === "insights" ? "text-foreground" : "text-foreground/80"}`}
              onClick={() => {
                handleNavClick("insights");
                setIsMobileMenuOpen(false);
              }}
            >
              Insights
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-foreground transition-colors duration-200 ${activeSection === "about" ? "text-foreground" : "text-foreground/80"}`}
              onClick={() => {
                handleNavClick("about");
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </Link>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
