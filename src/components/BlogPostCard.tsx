
import { Post } from "@/data/posts";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

interface BlogPostCardProps {
  post: Post;
  featured?: boolean;
}

export default function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  const { theme } = useTheme();
  
  return (
    <Link
      to={`/insights/${post.id}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-md border bg-card text-card-foreground transition-all hover:shadow-md",
        featured ? "col-span-2 md:col-span-2" : "col-span-2 md:col-span-1"
      )}
    >
      {post.image && (
        <div className={cn(
          "relative overflow-hidden",
          featured ? "h-48 md:h-56" : "h-36"
        )}>
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        </div>
      )}
      
      <div className="flex flex-col h-full p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal text-xs rounded-full px-2.5 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className={cn(
          "font-bold tracking-tight group-hover:text-primary transition-colors",
          featured ? "text-xl md:text-2xl" : "text-lg"
        )}>
          {post.title}
        </h3>
        
        <p className="mt-2 text-muted-foreground line-clamp-3 text-sm">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{post.date}</span>
          <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
