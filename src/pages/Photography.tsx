
import { useState } from "react";
import { photoTags, getPhotosByTag } from "@/data/photos";
import PhotoCard from "@/components/PhotoCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Photography() {
  const [activeTag, setActiveTag] = useState("All");
  const filteredPhotos = getPhotosByTag(activeTag);

  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="container-custom max-w-6xl">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Photography</h1>
          <p className="text-xl text-muted-foreground">
            I shoot digital with a film soul. Here's how I see the world.
          </p>
        </div>

        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex gap-2">
            {photoTags.map((tag) => (
              <Button
                key={tag}
                variant={activeTag === tag ? "default" : "outline"}
                size="sm"
                className={cn(
                  "rounded-full",
                  activeTag === tag ? "bg-primary text-primary-foreground" : ""
                )}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
        
        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No photos match this filter. Try another tag!</p>
          </div>
        )}
      </div>
    </div>
  );
}
