import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface HashnodeArticle {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  coverImage: string | null;
  tags: { name: string }[];
  publishedAt: string;
}

const fetchHashnodeArticles = async (): Promise<HashnodeArticle[]> => {
  const query = `{
    publication(host: \"lenslogic.hashnode.dev\") {
      posts(first: 10) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            coverImage { url }
            tags { name }
            publishedAt
          }
        }
      }
    }
  }`;

  console.log("Hashnode GraphQL Query:", query); // Debug: log the query

  const response = await fetch("/api/hashnode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });
  const data = await response.json();
  console.log("Hashnode API response:", data); // Debug: log full response
  if (data?.data?.publication?.posts?.edges) {
    console.log(`Number of articles returned: ${data.data.publication.posts.edges.length}`);
    data.data.publication.posts.edges.forEach((edge: any, i: number) => {
      console.log(`Article #${i+1}: ID=${edge.node.id}, Title=\"${edge.node.title}\"`);
    });
  } else {
    console.warn("No articles returned or unexpected response structure.", data);
  }
  return data.data.publication.posts.edges.map((edge: any) => ({
    id: edge.node.id,
    title: edge.node.title,
    brief: edge.node.brief,
    slug: edge.node.slug,
    url: edge.node.url,
    coverImage: edge.node.coverImage?.url,
    tags: edge.node.tags,
    publishedAt: edge.node.publishedAt
  }));
};

const Projects = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const [articles, setArticles] = useState<HashnodeArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHashnodeArticles()
      .then(setArticles)
      .catch(() => setError("Failed to load articles from Hashnode."))
      .finally(() => setLoading(false));
  }, []);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      <div className="container mx-auto px-4 py-12 pt-28">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog Projects</h1>
        {loading ? (
          <div className="text-center text-lg">Loading articles...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link to={`/projects/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                        <Badge key={tag.name} variant="secondary">{tag.name}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
