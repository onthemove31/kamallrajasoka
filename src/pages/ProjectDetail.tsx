import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/navbar';
import MarkdownContent from '@/components/MarkdownContent';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

interface HashnodeArticle {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  coverImage: string | null;
  tags: { name: string }[];
  publishedAt: string;
  contentMarkdown: string;
}

const fetchHashnodeArticleBySlug = async (slug: string): Promise<HashnodeArticle | null> => {
  const query = `{
    publication(host: \"lenslogic.hashnode.dev\") {
      post(slug: \"${slug}\") {
        id
        title
        brief
        slug
        url
        coverImage { url }
        tags { name }
        publishedAt
        content {
          markdown
        }
      }
    }
  }`;
  const response = await fetch("/api/hashnode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });
  const data = await response.json();
  console.log('Hashnode article detail response:', data);
  if (!data || !data.data || !data.data.publication) throw new Error('No publication found');
  if (!data.data.publication.post) throw new Error('No article found for this slug');
  const node = data.data.publication.post;
  return {
    id: node.id,
    title: node.title,
    brief: node.brief,
    slug: node.slug,
    url: node.url,
    coverImage: node.coverImage?.url,
    tags: node.tags,
    publishedAt: node.publishedAt,
    contentMarkdown: node.content.markdown,
  };
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<HashnodeArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      if (!slug) {
        setError('No article slug provided');
        setLoading(false);
        return;
      }
      try {
        const result = await fetchHashnodeArticleBySlug(slug);
        if (!result) {
          throw new Error('Article not found');
        }
        setArticle(result);
        setError(null);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to load article');
      } finally {
        setLoading(false);
      }
    };
    loadContent();
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
        <AnimatedSection direction="left">
          <Button
            variant="ghost"
            className="mb-6 group hover:bg-primary/10 transition-all duration-300"
            onClick={() => navigate('/projects')}
          >
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Button>
        </AnimatedSection>

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center min-h-[400px] text-muted-foreground">
            {error}
          </div>
        ) : article ? (
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              {article.coverImage && (
                <img src={article.coverImage} alt={article.title} className="w-full h-64 object-cover rounded mb-6" />
              )}
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{article.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map(tag => (
                  <span key={tag.name} className="bg-accent px-3 py-1 rounded text-xs font-medium text-muted-foreground">{tag.name}</span>
                ))}
                <span className="text-xs text-muted-foreground ml-auto">{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
              <MarkdownContent content={article.contentMarkdown} />
            </AnimatedSection>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectDetail;