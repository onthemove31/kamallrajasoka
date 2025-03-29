"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"

interface ProjectsSectionProps {
  featured?: boolean
  category?: string
}

export default function ProjectsSection({ featured = false, category = "all" }: ProjectsSectionProps) {
  let filteredProjects = projects

  if (featured) {
    filteredProjects = projects.filter((project) => project.featured)
  } else if (category !== "all") {
    filteredProjects = projects.filter((project) => project.categories.includes(category))
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full overflow-hidden">
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <Badge
                  variant={
                    project.status === "Shipped"
                      ? "default"
                      : project.status === "In Progress"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {project.status === "Shipped" && "✅ "}
                  {project.status === "In Progress" && "🚧 "}
                  {project.status === "Ghosted" && "💤 "}
                  {project.status}
                </Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {project.github && (
                <Button variant="outline" size="icon" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span>View Demo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

