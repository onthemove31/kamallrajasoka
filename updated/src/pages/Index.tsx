
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import StatusTicker from "@/components/status-ticker";
import ProjectsPreview from "@/components/projects-preview";
import PhotographySection from "@/components/photography-section";
import InsightsSection from "@/components/insights-section";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    home: null,
    projects: null,
    photography: null,
    insights: null,
  });

  // Handle initial load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of Object.keys(sectionsRef.current)) {
        const element = sectionsRef.current[section];
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    if (Object.keys(sectionsRef.current).includes(sectionId)) {
      const section = sectionsRef.current[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to other pages
      window.history.pushState({}, "", `/${sectionId}`);
      window.location.href = `/${sectionId}`;
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      
      {/* Navigation Dots */}
      <div className="nav-dots">
        {["home", "projects", "photography", "insights"].map((section) => (
          <div 
            key={section}
            className={`nav-dot ${activeSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          ></div>
        ))}
      </div>

      {/* Back to Top Button */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${scrollProgress > 20 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Button 
          size="icon" 
          className="rounded-full bg-primary hover:bg-primary/80"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      {/* Fixed Navbar */}
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      
      {/* Home Section */}
      <section 
        ref={(el) => (sectionsRef.current.home = el)} 
        className="section-container"
        id="home"
      >
        <Hero />
        <StatusTicker />
      </section>
      
      {/* Projects Section */}
      <section 
        ref={(el) => (sectionsRef.current.projects = el)} 
        className="section-container bg-background"
        id="projects"
      >
        <AnimatedSection>
          <ProjectsPreview />
        </AnimatedSection>
      </section>
      
      {/* Photography Section */}
      <section 
        ref={(el) => (sectionsRef.current.photography = el)} 
        className="section-container"
        id="photography"
      >
        <AnimatedSection>
          <PhotographySection />
        </AnimatedSection>
      </section>
      
      {/* Insights Section */}
      <section 
        ref={(el) => (sectionsRef.current.insights = el)} 
        className="section-container"
        id="insights"
      >
        <AnimatedSection>
          <InsightsSection />
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Index;
