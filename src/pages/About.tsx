
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import AnimatedSection from "@/components/animated-section";
import { ArrowRight, Github, Twitter } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const About = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    about: null,
  });

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.history.pushState({}, "", `/${sectionId}`);
      window.location.href = `/${sectionId}`;
    }
  };

  return (
    <div className="min-h-screen transition-opacity duration-700 opacity-100">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      
      {/* Fixed Navbar */}
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      
      <div className="container mx-auto px-4 py-20 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gradient tracking-tight">About Me</h1>
        
        {/* Who I Am Section */}
        <AnimatedSection direction="up" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Who I Am</h2>
          <div className="prose dark:prose-invert prose-p:text-muted-foreground max-w-none">
            <p className="mb-4">
              By day, I'm a frontend engineer working in fintech, crafting user interfaces that make complex financial data accessible and actionable. I specialize in building performant React applications with TypeScript and modern state management solutions. My professional work focuses on creating intuitive experiences that help users navigate the often complex world of finance.
            </p>
            <p className="mb-4">
              When I'm not at work, I'm deeply passionate about side projects and solving interesting problems. I believe the best way to grow as an engineer is through continuous learning and building. Whether it's exploring new frameworks, contributing to open source, or creating tools to improve my own workflow, I'm always working on something outside of my day job.
            </p>
            <p>
              Beyond code, I'm an amateur photographer who loves capturing urban landscapes and natural scenery. I also enjoy diving into spontaneous projects – from building mechanical keyboards to experimenting with home automation. These hobbies complement my technical work by exercising my creative muscles in different ways.
            </p>
          </div>
        </AnimatedSection>

        {/* What I Build Section */}
        <AnimatedSection direction="up" delay={100} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">What I Build</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "⚛️", name: "React" },
              { icon: "🔷", name: "TypeScript" },
              { icon: "🎨", name: "Tailwind CSS" },
              { icon: "📱", name: "React Native" },
              { icon: "🔥", name: "Firebase" },
              { icon: "🐍", name: "Python" },
              { icon: "📊", name: "D3.js" },
              { icon: "🔄", name: "Redux" }
            ].map((skill) => (
              <Card key={skill.name} className="hover-card">
                <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <h3 className="font-medium">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Stuff I'm Into Section */}
        <AnimatedSection direction="up" delay={200} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Stuff I'm Into</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📸", name: "Photography" },
              { icon: "🎮", name: "Gaming" },
              { icon: "⌨️", name: "Mechanical Keyboards" },
              { icon: "🏃", name: "Running" },
              { icon: "🍳", name: "Cooking" },
              { icon: "🎧", name: "Music Production" },
              { icon: "✈️", name: "Travel" },
              { icon: "📚", name: "Reading" }
            ].map((interest) => (
              <Card key={interest.name} className="hover-card bg-accent/10">
                <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                  <div className="text-3xl mb-2">{interest.icon}</div>
                  <h3 className="font-medium">{interest.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Project Timeline Section */}
        <AnimatedSection direction="up" delay={300} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Project Timeline</h2>
          <div className="relative pl-6 border-l-2 border-muted space-y-8">
            {[
              {
                year: "2023",
                title: "Personal Portfolio Redesign",
                status: "✅ Completed",
                statusColor: "text-green-500"
              },
              {
                year: "2022",
                title: "Photography Showcase App",
                status: "✅ Completed",
                statusColor: "text-green-500"
              },
              {
                year: "2022",
                title: "Financial Dashboard",
                status: "🚧 In Progress",
                statusColor: "text-yellow-500"
              },
              {
                year: "2021",
                title: "Open Source Contributions",
                status: "💤 Ongoing",
                statusColor: "text-blue-500"
              },
              {
                year: "2020",
                title: "Data Visualization Library",
                status: "✅ Completed",
                statusColor: "text-green-500"
              }
            ].map((project, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <div className="text-sm text-muted-foreground mb-1">{project.year}</div>
                <h3 className="text-lg font-medium">{project.title}</h3>
                <div className={project.statusColor}>{project.status}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Want to Connect Section */}
        <AnimatedSection direction="up" delay={400} className="text-center">
          <h2 className="text-2xl font-semibold mb-3">Want to Connect?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I'm always open to discussing new projects, opportunities or just chatting about technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="flex items-center gap-2">
              <Github size={18} /> GitHub
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Twitter size={18} /> Twitter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              See My Work <ArrowRight size={18} />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
