
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusTicker from "@/components/StatusTicker";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import BlogPostCard from "@/components/BlogPostCard";
import { posts } from "@/data/posts";

export default function Home() {
  // Get featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);
  // Get most recent blog posts (first 3)
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
              Developer. Tinkerer.
              <br />
              <span className="text-primary">Serial Side-Project Starter.</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
              I build things. Sometimes I even finish them.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in [animation-delay:400ms]">
              <Button asChild size="lg" className="gap-2">
                <a href="#projects">
                  Explore Projects <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 max-w-lg mx-auto animate-fade-in [animation-delay:600ms]">
            <StatusTicker />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-muted/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="mt-2 text-muted-foreground">
                A selection of my recent work and ongoing experiments.
              </p>
            </div>
            <Button asChild variant="outline" className="gap-1">
              <Link to="/projects">
                View All <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
              <p className="mt-2 text-muted-foreground">
                Thoughts, tutorials, and development logs.
              </p>
            </div>
            <Button asChild variant="outline" className="gap-1">
              <Link to="/insights">
                View All <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <BlogPostCard post={recentPosts[0]} featured />
            <div className="col-span-2 md:col-span-1 grid grid-cols-1 gap-6">
              <BlogPostCard post={recentPosts[1]} />
              <BlogPostCard post={recentPosts[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-t border-b">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Want to see more?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Check out my photography work, get insights from my tracker apps, or learn more about who I am and what I build.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="default" size="lg">
              <Link to="/photography">View Photography</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/insights">See Insights</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
