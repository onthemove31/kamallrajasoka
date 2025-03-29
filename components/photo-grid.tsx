"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Download, Calendar } from "lucide-react"
import type { Photo } from "@/data/photos"

interface PhotoGridProps {
  photos: Photo[]
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(photo)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={photo.url || "/placeholder.svg"}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-lg bg-card shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="ghost" size="icon" className="absolute right-2 top-2 z-10" onClick={closeLightbox}>
                <X className="h-5 w-5" />
              </Button>
              <div className="relative aspect-[4/3] max-h-[70vh] w-full">
                <img
                  src={selectedPhoto.url || "/placeholder.svg"}
                  alt={selectedPhoto.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-xl font-bold">{selectedPhoto.title}</h3>
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedPhoto.date}</span>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {selectedPhoto.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

