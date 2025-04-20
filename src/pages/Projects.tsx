import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function decodeHtmlEntities(str: string) {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}

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

const Projects = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const [posts, setPosts] = useState<WordpressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWordpressPosts()
      .then(setPosts)
      .catch(() => setError("Failed to load articles from WordPress."))
      .finally(() => setLoading(false));
  }, []);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">Projects & Blog</h1>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <Link to={`/projects/${post.slug}`} className="block">
                  <CardHeader>
                    <CardTitle>{decodeHtmlEntities(post.title.rendered.replace(/<[^>]+>/g, ''))}</CardTitle>
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
