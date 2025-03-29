"use client"
import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface NavItem {
  href: string;
  label: string;
}

const navItems: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/photography", label: "Photography" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/lab", label: "Lab" },
] as const;

const NavLink = memo(({ href, label, pathname, onClick }: {
  href: string;
  label: string;
  pathname: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      "relative text-sm font-medium transition-colors hover:text-primary",
      pathname === href ? "text-primary" : "text-muted-foreground",
    )}
  >
    {label}
    {pathname === href && (
      <motion.span
        layoutId="navbar-indicator"
        className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
        transition={{ duration: 0.3 }}
      />
    )}
  </Link>
));
NavLink.displayName = 'NavLink';

const MobileMenu = memo(({ isOpen, items, pathname, closeMenu }: {
  isOpen: boolean;
  items: readonly NavItem[];
  pathname: string;
  closeMenu: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 right-0 top-16 z-20 bg-background/95 backdrop-blur-md"
      >
        <nav className="container flex flex-col py-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "py-3 text-lg transition-colors hover:text-primary",
                pathname === item.href ? "font-medium text-primary" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center justify-between">
            <ThemeToggle />
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
));
MobileMenu.displayName = 'MobileMenu';

export default function Navbar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const shouldBeScrolled = window.scrollY > 10;
    if (scrolled !== shouldBeScrolled) {
      setScrolled(shouldBeScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            dev<span className="text-primary">folio</span>
          </motion.span>
        </Link>
        
        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <MobileMenu
              isOpen={isOpen}
              items={navItems}
              pathname={pathname}
              closeMenu={closeMenu}
            />
          </>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  pathname={pathname}
                />
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

