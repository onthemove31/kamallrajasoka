import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="bg-background py-12 mt-20 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Personal Info */}
          <div className="md:col-span-6">
            <div className="mb-6">
              <img 
                src={theme === 'dark' ? '/images/logo_dark.png' : '/images/logo_light.png'} 
                alt="Kamallraj Asoka"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Developer, photographer, and creator with a passion for building useful tools
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Footer Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Projects</h3>
            <ul className="space-y-3">
              <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">All Projects</Link></li>
              <li><Link to="/projects?category=featured" className="text-muted-foreground hover:text-foreground">Featured Work</Link></li>
              <li><Link to="/projects?category=side-projects" className="text-muted-foreground hover:text-foreground">Side Projects</Link></li>
              <li><Link to="/projects?category=open-source" className="text-muted-foreground hover:text-foreground">Open Source</Link></li>
              <li><Link to="/projects?category=archive" className="text-muted-foreground hover:text-foreground">Archive</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/about#contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link to="/insights" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link to="/about#uses" className="text-muted-foreground hover:text-foreground">Uses</Link></li>
              <li><Link to="/about#newsletter" className="text-muted-foreground hover:text-foreground">Newsletter</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Kamallraj Asoka. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
