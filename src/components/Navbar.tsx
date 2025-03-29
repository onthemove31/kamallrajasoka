
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

const routes = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/photography", label: "Photography" },
  { path: "/insights", label: "Insights" },
  { path: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img 
            src={theme === "dark" 
              ? "/lovable-uploads/8ec6d87b-8fe2-46cf-bedf-b962df735f05.png" 
              : "/lovable-uploads/7c039e29-21b8-472c-892c-d476c2a91de4.png"} 
            alt="Logo" 
            className="h-8 md:h-9"
          />
          <span className="text-primary ml-1">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 lg:gap-2">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium transition-colors hover:text-primary hover-underline",
                  location.pathname === route.path && "text-primary active-link"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-9 rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-9 rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="size-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-full"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col justify-center z-40 transition-all duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-8 px-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                location.pathname === route.path && "text-primary"
              )}
              onClick={closeMenu}
            >
              {route.label}
            </Link>
          ))}
          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-10 rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-10 rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="size-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
