"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import PhotoGrid from "@/components/photo-grid"
import { photos, photoCategories } from "@/data/photos"

export default function PhotographyPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPhotos =
    selectedCategory === "all" ? photos : photos.filter((photo) => photo.tags.includes(selectedCategory))

  return (
    <div className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Photography</h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
          I shoot digital with a film soul. Here's how I see the world.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge
            variant={selectedCategory === "all" ? "default" : "outline"}
            className="cursor-pointer text-sm"
            onClick={() => setSelectedCategory("all")}
          >
            All
          </Badge>
          {photoCategories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer text-sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </motion.div>

      <PhotoGrid photos={filteredPhotos} />
    </div>
  )
}

