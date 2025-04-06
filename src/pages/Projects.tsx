import { useState } from "react";
import Navbar from "@/components/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";
import Footer from "@/components/footer";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  status: "in-progress" | "shipped" | "ghosted";
  category: string;
  github?: string;
  demo?: string;
  image?: string;
}

const projectsData: Project[] = [
  // Game Tracker Category
  {
    id: 1,
    title: "Game Tracker",
    description: "Track your gaming habits and discover patterns in your play style.",
    longDescription: "A comprehensive tool that integrates with Steam, Epic, and other gaming platforms to provide insights into your gaming habits. Features include play time tracking, achievement progress, and personalized recommendations.",
    tags: ["React", "Firebase", "Steam API"],
    status: "in-progress",
    category: "game-tracker",
    github: "https://github.com/example/game-tracker",
    demo: "https://demo.example.com/game-tracker"
  },
  {
    id: 2,
    title: "Achievement Hunter",
    description: "Gamify your gaming with achievement tracking across platforms.",
    longDescription: "Cross-platform achievement tracking application that helps gamers organize and prioritize which achievements to pursue next. Includes statistics, leaderboards, and achievement guides.",
    tags: ["Vue", "Node.js", "MongoDB"],
    status: "shipped",
    category: "game-tracker"
  },
  
  // Photography Projects Category
  {
    id: 3,
    title: "Photo Organizer",
    description: "AI-powered photo organization tool for photographers.",
    longDescription: "An intelligent photo management system that uses machine learning to categorize, tag, and organize your photo library. Features facial recognition, scene detection, and automated album creation.",
    tags: ["Python", "TensorFlow", "Flask"],
    status: "shipped",
    category: "photography"
  },
  {
    id: 4,
    title: "Film Emulation Presets",
    description: "Digital presets that mimic classic film stocks.",
    longDescription: "A collection of meticulously crafted Lightroom and Photoshop presets that accurately simulate the look and feel of vintage film stocks. Includes popular emulsions from Kodak, Fujifilm, and Ilford.",
    tags: ["Lightroom", "Photoshop", "Photography"],
    status: "shipped",
    category: "photography"
  },
  
  // Raspberry Pi Category
  {
    id: 5,
    title: "Pi Weather Station",
    description: "Raspberry Pi-based weather station with custom dashboard.",
    longDescription: "A DIY weather station built on Raspberry Pi that collects temperature, humidity, pressure, and air quality data. Features a web-based dashboard for data visualization and historical trends.",
    tags: ["Raspberry Pi", "Python", "IoT"],
    status: "shipped",
    category: "raspberry-pi"
  },
  {
    id: 6,
    title: "Home Automation Hub",
    description: "Centralized system for controlling smart home devices.",
    longDescription: "A Raspberry Pi-powered hub that integrates various smart home platforms into a single, unified interface. Compatible with Philips Hue, Nest, Sonos, and more.",
    tags: ["Raspberry Pi", "Node.js", "MQTT"],
    status: "in-progress",
    category: "raspberry-pi"
  },
  
  // Web Apps & Games Category
  {
    id: 7,
    title: "Pixel Art Generator",
    description: "Create pixel art from your photos with customizable styles.",
    longDescription: "A web application that transforms regular images into pixel art with adjustable resolution, color palette, and special effects. Ideal for game developers and digital artists.",
    tags: ["JavaScript", "Canvas API"],
    status: "ghosted",
    category: "web-apps"
  },
  {
    id: 8,
    title: "Browser Text Adventure",
    description: "Interactive fiction game built with modern web technologies.",
    longDescription: "A text-based adventure game that runs in the browser with rich narrative branching, inventory system, and dynamic storytelling. Features a custom game engine that allows for complex interactions.",
    tags: ["React", "TypeScript", "Redux"],
    status: "shipped",
    category: "web-apps"
  },
  
  // Analytics Dashboards Category
  {
    id: 9,
    title: "Personal Finance Tracker",
    description: "Visualize and analyze personal spending habits.",
    longDescription: "A comprehensive dashboard for tracking personal finances, including expense categorization, budget planning, and interactive charts showing spending trends over time.",
    tags: ["Vue", "D3.js", "Firebase"],
    status: "in-progress",
    category: "analytics"
  },
  {
    id: 10,
    title: "Fitness Progress Dashboard",
    description: "Track and visualize workout results and body metrics.",
    longDescription: "An analytics platform for fitness enthusiasts to monitor workout performance, body measurements, and nutritional intake. Features goal setting, progress tracking, and predictive modeling.",
    tags: ["React", "Chart.js", "MongoDB"],
    status: "ghosted",
    category: "analytics"
  }
];

const getStatusEmoji = (status: string) => {
  switch (status) {
    case "in-progress":
      return "🚧";
    case "shipped":
      return "✅";
    case "ghosted":
      return "💤";
    default:
      return "";
  }
};

const Projects = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const navigate = useNavigate();

  const scrollToSection = (section: string) => {
    console.log(`Would scroll to ${section} if this was the main page`);
    setActiveSection(section);
  };

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      <div className="container mx-auto px-4 py-12 pt-28">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          A collection of projects I've worked on, ranging from web applications to Raspberry Pi experiments. 
          Some are completed, some are works in progress, and some were lovingly abandoned.
        </p>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="game-tracker">Game Tracker</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
            <TabsTrigger value="raspberry-pi">Raspberry Pi</TabsTrigger>
            <TabsTrigger value="web-apps">Web Apps</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} onSelect={() => handleProjectClick(project)} />
              ))}
            </div>
          </TabsContent>
          
          {["game-tracker", "photography", "raspberry-pi", "web-apps", "analytics"].map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} onSelect={() => handleProjectClick(project)} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

const ProjectCard = ({ project, onSelect }: { project: Project; onSelect: () => void }) => (
  <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onSelect}>
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        {project.title}
        <span className="text-xl ml-2">{getStatusEmoji(project.status)}</span>
      </CardTitle>
      <CardDescription>{project.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex justify-end gap-2">
      {project.github && (
        <Button variant="outline" size="icon" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Github className="h-4 w-4" />
          </a>
        </Button>
      )}
      {project.demo && (
        <Button variant="outline" size="icon" asChild>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      )}
    </CardFooter>
  </Card>
);

export default Projects;
