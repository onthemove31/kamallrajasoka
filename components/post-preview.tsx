"use client"
import { memo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import type { Post } from "@/data/posts"

interface PostPreviewProps {
  post: Post
}

const PostTags = memo(({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <Badge key={tag} variant="outline">
        {tag}
      </Badge>
    ))}
  </div>
));
PostTags.displayName = 'PostTags';

const PostPreview = memo(function PostPreview({ post }: PostPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
        <CardHeader>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="line-clamp-3 text-muted-foreground">
            {post.excerpt}
          </p>
          <PostTags tags={post.tags} />
          <div>
            <Link 
              href={`/insights/${post.slug}`}
              className="inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
              aria-label={`Read more about ${post.title}`}
            >
              Read more
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

PostPreview.displayName = 'PostPreview';
export default PostPreview;

