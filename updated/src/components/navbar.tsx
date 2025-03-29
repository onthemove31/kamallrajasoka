
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";

interface NavbarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const Navbar = ({ activeSection, onNavClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavClick("home");
          }}
          className="font-bold text-lg text-foreground hover:text-primary transition-colors"
        >
          <span className="text-gradient">Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { id: "home", label: "Home" },
            { id: "projects", label: "Projects" },
            { id: "photography", label: "Photography" },
            { id: "insights", label: "Insights" },
            { id: "about", label: "About" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(item.id);
              }}
              className={`relative transition-colors duration-300 ${
                activeSection === item.id ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 right-0 bottom-[-4px] h-[2px] bg-primary transform origin-left transition-transform duration-300 ${
                  activeSection === item.id ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
