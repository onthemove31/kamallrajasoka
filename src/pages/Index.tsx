
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PartnerLogos from "@/components/partner-logos";
import TerminalDemo from "@/components/terminal-demo";
import Hero from "@/components/hero";
import ProjectsPreview from "@/components/projects-preview";
import PhotographySection from "@/components/photography-section";
import InsightsSection from "@/components/insights-section";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle initial load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Main Navigation */}
      <Navbar />
      
      {/* Main content with padding-top to account for sticky navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <Hero />
        
        {/* Projects Preview Section */}
        <ProjectsPreview />
        
        {/* Photography Section */}
        <PhotographySection />
        
        {/* Insights Section */}
        <InsightsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
