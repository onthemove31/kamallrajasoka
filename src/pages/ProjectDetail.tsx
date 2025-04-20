import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/navbar";
import MarkdownContent from "@/components/MarkdownContent";
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface WordpressPost {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  link: string;
  _embedded?: { [key: string]: any };
}

const fetchWordpressPostBySlug = async (slug: string): Promise<WordpressPost | null> => {
  const response = await fetch(`/api/wordpress?slug=${slug}`);
  if (!response.ok) throw new Error("Failed to fetch post from WordPress");
  const posts = await response.json();
  return posts.length > 0 ? posts[0] : null;
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<WordpressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError('No post slug provided');
      setLoading(false);
      return;
    }
    fetchWordpressPostBySlug(slug)
      .then(setPost)
      .catch(() => setError("Failed to load post from WordPress."))
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    let timeoutId: number;
    if (error && !loading) {
      timeoutId = window.setTimeout(() => {
        navigate('/projects');
      }, 2000);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [error, loading, navigate]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar activeSection="projects" onNavClick={() => {}} />
      <div className="container mx-auto px-4 py-12 pt-28">
        <Button
          variant="ghost"
          className="mb-6 group hover:bg-primary/10 transition-all duration-300"
          onClick={() => navigate('/projects')}
        >
          <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Button>

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center min-h-[400px] text-muted-foreground">
            {error}
          </div>
        ) : post ? (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title.rendered.replace(/<[^>]+>/g, '')}</h1>
            <div className="text-xs text-muted-foreground mb-4">
              {new Date(post.date).toLocaleDateString()}
            </div>
            <MarkdownContent content={post.content.rendered} />
            <div className="mt-8">
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                View on WordPress
              </a>
            </div>
          </div>
        ) : (
          <div>Post not found.</div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;