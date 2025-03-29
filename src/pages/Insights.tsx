
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { insightCategories, getInsightsByCategory } from "@/data/insights";
import { posts, getPostsByTag, postTags } from "@/data/posts";
import InsightCard from "@/components/InsightCard";
import BlogPostCard from "@/components/BlogPostCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

export default function Insights() {
  const [activeInsightCategory, setActiveInsightCategory] = useState("all");
  const [activePostTag, setActivePostTag] = useState("All");
  const { theme } = useTheme();
  
  const filteredInsights = getInsightsByCategory(activeInsightCategory);
  const filteredPosts = getPostsByTag(activePostTag);

  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src={theme === "dark" 
                ? "/lovable-uploads/8ec6d87b-8fe2-46cf-bedf-b962df735f05.png" 
                : "/lovable-uploads/7c039e29-21b8-472c-892c-d476c2a91de4.png"} 
              alt="Logo" 
              className="h-14 md:h-16"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Insights & Blog</h1>
          <p className="text-xl text-muted-foreground">
            Data-driven insights from my projects and thoughts on development, photography, and more.
          </p>
        </div>

        {/* Automated Insights Section */}
        <section className="mb-16 md:mb-24">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Automated Insights</h2>
            <Tabs
              value={activeInsightCategory}
              onValueChange={setActiveInsightCategory}
              className="w-auto"
            >
              <TabsList>
                {insightCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {filteredInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4 mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight">Blog Posts</h2>
              <img 
                src={theme === "dark" 
                  ? "/lovable-uploads/dd8e36c7-07fa-48af-9e62-31c340d327ed.png" 
                  : "/lovable-uploads/fd8c7fe3-0917-4595-a273-3afc1be09a1b.png"} 
                alt="Signature" 
                className="h-6 md:h-8"
              />
            </div>
            <div className="overflow-x-auto w-full md:w-auto pb-2">
              <div className="flex gap-2">
                {postTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={activePostTag === tag ? "default" : "outline"}
                    size="sm"
                    className={cn(
                      "rounded-full whitespace-nowrap text-xs",
                      activePostTag === tag ? "bg-primary text-primary-foreground" : ""
                    )}
                    onClick={() => setActivePostTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogPostCard 
                key={post.id} 
                post={post}
                featured={index === 0 && activePostTag === "All"} 
              />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts match this filter. Try another tag!</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
