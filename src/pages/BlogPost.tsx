
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export default function BlogPost() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  // Find the post by ID
  const post = posts.find(p => p.id === postId);
  
  // If post not found, redirect to the insights page
  useEffect(() => {
    if (!post) {
      navigate("/insights", { replace: true });
    }
  }, [post, navigate]);
  
  // If post is undefined (not found), return null while redirecting
  if (!post) return null;
  
  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="container-custom max-w-3xl mx-auto">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)} 
            className="mb-8 pl-0 hover:pl-0"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to insights
          </Button>
          
          <div className="flex justify-center mb-6">
            <img 
              src={theme === "dark" 
                ? "/lovable-uploads/8ec6d87b-8fe2-46cf-bedf-b962df735f05.png" 
                : "/lovable-uploads/7c039e29-21b8-472c-892c-d476c2a91de4.png"} 
              alt="Logo" 
              className="h-10 md:h-12"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-muted-foreground">
              {post.date}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal text-xs rounded-full px-2.5 py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {post.image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4 text-lg">{post.excerpt}</p>
          <div className="space-y-4">
            {post.content.split('. ').map((sentence, index) => (
              <p key={index}>{sentence}.</p>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Published on {post.date}
              </span>
              <div className="flex space-x-2">
                <img 
                  src={theme === "dark" 
                    ? "/lovable-uploads/dd8e36c7-07fa-48af-9e62-31c340d327ed.png" 
                    : "/lovable-uploads/fd8c7fe3-0917-4595-a273-3afc1be09a1b.png"} 
                  alt="Signature" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
