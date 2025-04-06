import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    
    // Create animated background lines
    const createLines = () => {
      const lineContainer = heroRef.current;
      if (!lineContainer) return;
      
      // Clear existing lines
      const existingLines = lineContainer.querySelectorAll('.line');
      existingLines.forEach(line => line.remove());
      
      const numLines = 8;
      for (let i = 0; i < numLines; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        line.style.top = `${(i + 0.5) * (100 / numLines)}%`;
        line.style.opacity = `${Math.random() * 0.5 + 0.25}`;
        line.style.animation = `float ${Math.random() * 3 + 5}s ease-in-out infinite`;
        line.style.animationDelay = `${Math.random() * 2}s`;
        lineContainer.appendChild(line);
      }
    };
    
    createLines();
    window.addEventListener('resize', createLines);
    
    return () => {
      window.removeEventListener('resize', createLines);
    };
  }, []);

  const handleExploreClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden"
    >
      <div className="parallax-bg"></div>
      
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-24 h-24 rounded-full bg-primary/10 animate-pulse"></div>
        <div className="absolute top-[60%] left-[80%] w-32 h-32 rounded-full bg-accent/20 animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[80%] left-[20%] w-16 h-16 rounded-full bg-primary/20 animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute top-[30%] left-[70%] w-20 h-20 rounded-full bg-accent/10 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center z-10">
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          Developer. Tinkerer. 
          <span className="relative inline-block ml-2">
            <span className="text-gradient">
              Serial Side-Project Starter.
            </span>
          </span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-foreground/80 mb-8 max-w-xl mx-auto transition-all duration-1000 delay-300 ${
            animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          I build things. Sometimes I even finish them.
        </p>
        
        <div 
          className={`transition-all duration-1000 delay-500 ${
            animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            onClick={handleExploreClick}
            size="lg"
            className="group glow-effect transition-all duration-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] relative overflow-hidden"
          >
            <span className="relative z-10">Explore Projects</span>
            <ArrowDown className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-y-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        animationComplete ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex flex-col items-center">
          <div className="w-[2px] h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0 animate-pulse"></div>
          <span className="mt-2 text-sm text-foreground/50">Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
