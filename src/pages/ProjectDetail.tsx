import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/navbar';
import MarkdownContent from '@/components/MarkdownContent';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/content/projects/${projectId}.md`);
        if (!response.ok) {
          throw new Error('Project not found');
        }
        const text = await response.text();
        // Check if the response is HTML (error page) instead of markdown
        if (text.includes('<!DOCTYPE html>') || text.includes('<html>')) {
          throw new Error('Invalid content type');
        }
        setContent(text);
      } catch (error) {
        console.error('Failed to load project content:', error);
        navigate('/projects');
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchContent();
    } else {
      navigate('/projects');
    }
  }, [projectId, navigate]);

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
        ) : (
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <MarkdownContent content={content} />
            </AnimatedSection>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail; 