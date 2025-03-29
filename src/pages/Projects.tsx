
import { useState } from "react";
import { projectCategories, getProjectsByCategory, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground">
            A collection of things I've built, am building, or abandoned but still love.
          </p>
        </div>

        <Tabs
          defaultValue="all"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full max-w-3xl">
              {projectCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div>
            {projectCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getProjectsByCategory(category.id).map((project: Project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
                {getProjectsByCategory(category.id).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No projects in this category yet. Check back soon!</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
