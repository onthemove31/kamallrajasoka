
import { Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="border-t">
      <div className="container-custom py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center">
              <img 
                src={theme === "dark" 
                  ? "/lovable-uploads/8ec6d87b-8fe2-46cf-bedf-b962df735f05.png" 
                  : "/lovable-uploads/7c039e29-21b8-472c-892c-d476c2a91de4.png"} 
                alt="Logo" 
                className="h-8"
              />
              <span className="text-primary ml-1">.</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Developer. Tinkerer. Serial Side-Project Starter.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-8 rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="size-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-8 rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="size-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {currentYear} <img 
                src={theme === "dark" 
                  ? "/lovable-uploads/dd8e36c7-07fa-48af-9e62-31c340d327ed.png" 
                  : "/lovable-uploads/fd8c7fe3-0917-4595-a273-3afc1be09a1b.png"} 
                alt="Signature" 
                className="h-4 inline-block mx-1"
              /> Myers. Built with React + Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
