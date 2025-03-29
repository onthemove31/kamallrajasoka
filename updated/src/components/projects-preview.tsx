
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "./animated-section";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: "in-progress" | "shipped" | "ghosted";
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Game Tracker",
    description: "Track your gaming habits and discover patterns in your play style.",
    tags: ["React", "Firebase", "Steam API"],
    status: "in-progress",
  },
  {
    id: 2,
    title: "Photo Organizer",
    description: "AI-powered photo organization tool for photographers.",
    tags: ["Python", "TensorFlow", "Flask"],
    status: "shipped",
  },
  {
    id: 3,
    title: "Pi Weather Station",
    description: "Raspberry Pi-based weather station with custom dashboard.",
    tags: ["Raspberry Pi", "Python", "IoT"],
    status: "shipped",
  },
  {
    id: 4,
    title: "Pixel Art Generator",
    description: "Create pixel art from your photos with customizable styles.",
    tags: ["JavaScript", "Canvas API"],
    status: "ghosted",
  },
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

const ProjectsPreview = () => {
  return (
    <section id="projects" className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of projects I've been working on. Some finished, some abandoned, all learned from.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              delay={100 * index} 
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Card className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <span title={project.status} className="text-xl transform transition-transform group-hover:scale-125">
                      {getStatusEmoji(project.status)}
                    </span>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="transition-all duration-300 hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild
                    className="group hover:bg-primary/10 transition-all duration-300"
                  >
                    <Link to={`/projects/${project.id}`}>
                      View details
                      <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" direction="up">
          <Button 
            asChild
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <Link to="/projects">View All Projects</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsPreview;
