"use client"
import { useState, useCallback, memo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Download, Calendar } from "lucide-react"
import type { Photo } from "@/data/photos"

interface PhotoGridProps {
  photos: Photo[]
}

const PhotoCard = memo(({ photo, onClick }: { 
  photo: Photo; 
  onClick: (photo: Photo) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group cursor-pointer overflow-hidden rounded-lg"
    onClick={() => onClick(photo)}
  >
    <div className="relative aspect-square overflow-hidden">
      <Image
        src={photo.url || "/placeholder.svg"}
        alt={photo.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  </motion.div>
));
PhotoCard.displayName = 'PhotoCard';

const Lightbox = memo(({ photo, onClose }: { 
  photo: Photo; 
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-lg bg-card shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-2 top-2 z-10" 
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </Button>
      
      <div className="relative aspect-[4/3] max-h-[70vh] w-full">
        <Image
          src={photo.url || "/placeholder.svg"}
          alt={photo.title}
          fill
          sizes="(max-width: 1536px) 100vw, 1536px"
          className="object-contain"
          quality={90}
          priority
        />
      </div>
      
      <div className="p-4">
        <h3 className="mb-1 text-xl font-bold">{photo.title}</h3>
        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={photo.date}>{photo.date}</time>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {photo.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-end">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.open(photo.url, '_blank');
            }}
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
        </div>
      </div>
    </motion.div>
  </motion.div>
));
Lightbox.displayName = 'Lightbox';

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openLightbox = useCallback((photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedPhoto(null);
    document.body.style.overflow = "auto";
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo) => (
          <PhotoCard 
            key={photo.id} 
            photo={photo} 
            onClick={openLightbox}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <Lightbox 
            photo={selectedPhoto} 
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}

