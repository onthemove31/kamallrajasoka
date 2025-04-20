import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./animated-section";

interface WordpressPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  link: string;
  _embedded?: { [key: string]: any };
}

const fetchWordpressPosts = async (): Promise<WordpressPost[]> => {
  const response = await fetch("/api/wordpress");
  if (!response.ok) throw new Error("Failed to fetch from WordPress");
  return await response.json();
};

const ProjectsPreview = () => {
  const [posts, setPosts] = useState<WordpressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWordpressPosts()
      .then(posts => setPosts(posts.slice(0, 4)))
      .catch(() => setError("Failed to load articles from WordPress."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recent Blog Posts</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of articles from my WordPress blog.
          </p>
        </AnimatedSection>

        {loading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {posts.map(post => (
              <AnimatedSection key={post.id} delay={100 * posts.indexOf(post)} direction={posts.indexOf(post) % 2 === 0 ? "left" : "right"}>
                <Card className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                  <Link to={`/projects/${post.slug}`} className="block">
                    <CardHeader>
                      <CardTitle>{post.title.rendered.replace(/<[^>]+>/g, '')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div
                        className="text-muted-foreground mb-4"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
                      <Button asChild size="sm" variant="outline">
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                          Read on WordPress <ExternalLink className="inline w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Link>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        )}

        <AnimatedSection className="text-center mt-12" direction="up">
          <Button
            asChild
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <a href="https://lenslogic.hashnode.dev" target="_blank" rel="noopener noreferrer">View All Articles</a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsPreview;
