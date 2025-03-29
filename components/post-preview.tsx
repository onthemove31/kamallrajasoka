import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import type { Post } from "@/data/posts"

interface PostPreviewProps {
  post: Post
}

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <Card className="h-full overflow-hidden">
      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div>
          <Link href={`/insights/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
            Read more
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

