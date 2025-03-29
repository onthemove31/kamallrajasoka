"use client"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InsightCard from "@/components/insight-card"
import PostPreview from "@/components/post-preview"
import { insights } from "@/data/insights"
import { posts } from "@/data/posts"

export default function InsightsPage() {
  return (
    <div className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Insights & Blog</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Data-driven insights from my projects and thoughts on tech, productivity, and more.
        </p>
      </motion.div>

      <Tabs defaultValue="insights" className="mb-12">
        <TabsList className="mx-auto flex justify-center">
          <TabsTrigger value="insights">Automated Insights</TabsTrigger>
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="insights">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="blog">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <PostPreview key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

