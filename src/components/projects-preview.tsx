import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "./animated-section";

interface HashnodeArticle {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  coverImage: string | null;
  tags: { name: string }[];
  dateAdded: string;
}

const fetchHashnodeArticles = async (): Promise<HashnodeArticle[]> => {
  const query = `{
    publication(host: \"lenslogic.hashnode.dev\") {
      posts(page: 1) {
        edges {
          node {
            _id
            title
            brief
            slug
            url
            coverImage
            tags { name }
            dateAdded
          }
        }
      }
    }
  }`;
  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });
  const data = await response.json();
  return data.data.publication.posts.edges.map((edge: any) => ({
    id: edge.node._id,
    title: edge.node.title,
    brief: edge.node.brief,
    slug: edge.node.slug,
    url: edge.node.url,
    coverImage: edge.node.coverImage,
    tags: edge.node.tags,
    dateAdded: edge.node.dateAdded
  }));
};

const ProjectsPreview = () => {
  const [articles, setArticles] = useState<HashnodeArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHashnodeArticles()
      .then(setArticles)
      .catch(() => setError("Failed to load articles from Hashnode."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Blog Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of articles from my Hashnode blog. Some finished, some ongoing, all learned from.
          </p>
        </AnimatedSection>

        {loading ? (
          <div className="text-center text-lg">Loading articles...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {articles.slice(0, 4).map((article, index) => (
              <AnimatedSection
                key={article.id}
                delay={100 * index}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <Card className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                  {article.coverImage && (
                    <img src={article.coverImage} alt={article.title} className="w-full h-48 object-cover rounded-t" />
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {article.title}
                    </CardTitle>
                    <CardDescription>{article.brief}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map(tag => (
                        <Badge key={tag.name} variant="secondary" className="transition-all duration-300 hover:bg-primary/20">
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button variant="outline" size="sm" asChild>
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Read on Hashnode
                      </a>
                    </Button>
                    <span className="text-xs text-muted-foreground">{new Date(article.dateAdded).toLocaleDateString()}</span>
                  </CardFooter>
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
