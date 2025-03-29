
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Github, Link as LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusMap = {
    'in-progress': { label: '🚧 In Progress', className: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20' },
    'shipped': { label: '✅ Shipped', className: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
    'ghosted': { label: '💤 Ghosted but Loved', className: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card p-5 transition-all hover:shadow-md">
      {project.image && (
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-background/10" />
      )}
      
      {project.image && (
        <div className="absolute inset-0 z-[-1] opacity-20 group-hover:opacity-30 transition-opacity">
          <img 
            src={project.image} 
            alt={project.title} 
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="space-y-2.5 mb-4">
          <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        </div>
        
        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="font-normal">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div 
              className={cn(
                "text-xs border px-2 py-1 rounded-full",
                statusMap[project.status].className
              )}
            >
              {statusMap[project.status].label}
            </div>
            
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-8 rounded-full bg-secondary/50 text-secondary-foreground transition-colors hover:bg-secondary"
                >
                  <Github className="size-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              )}
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-8 rounded-full bg-secondary/50 text-secondary-foreground transition-colors hover:bg-secondary"
                >
                  <LinkIcon className="size-4" />
                  <span className="sr-only">Live Preview</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
