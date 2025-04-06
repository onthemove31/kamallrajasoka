import { ArrowRight, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border pt-16 pb-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {/* Personal Info */}
          <div className="md:col-span-2">
            <div className="mb-4 font-bold text-2xl">KA</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Developer, photographer, and creator with a passion for building useful tools
              and capturing moments that tell stories.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Footer Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Projects</h3>
            <ul className="space-y-3">
              <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">All Projects</Link></li>
              <li><Link to="/projects?category=featured" className="text-muted-foreground hover:text-foreground">Featured Work</Link></li>
              <li><Link to="/projects?category=side-projects" className="text-muted-foreground hover:text-foreground">Side Projects</Link></li>
              <li><Link to="/projects?category=open-source" className="text-muted-foreground hover:text-foreground">Open Source</Link></li>
              <li><Link to="/projects?category=archive" className="text-muted-foreground hover:text-foreground">Archive</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Photography</h3>
            <ul className="space-y-3">
              <li><Link to="/photography" className="text-muted-foreground hover:text-foreground">Gallery</Link></li>
              <li><Link to="/photography?category=urban" className="text-muted-foreground hover:text-foreground">Urban</Link></li>
              <li><Link to="/photography?category=nature" className="text-muted-foreground hover:text-foreground">Nature</Link></li>
              <li><Link to="/photography?category=travel" className="text-muted-foreground hover:text-foreground">Travel</Link></li>
              <li><Link to="/photography?category=prints" className="text-muted-foreground hover:text-foreground">Prints</Link></li>
            </ul>
          </div>
          
          <div>
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
        
        <Separator className="mb-8" />
        
        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 KA. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link to="/sitemap" className="text-muted-foreground hover:text-foreground">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
