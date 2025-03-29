
import { useState } from "react";
import { Photo } from "@/data/photos";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer transition-all"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
          style={{ aspectRatio: photo.aspectRatio.replace(':', '/') }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <h3 className="text-white font-medium text-lg">{photo.title}</h3>
          <p className="text-white/80 text-sm">{photo.date}</p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-4xl h-auto max-h-[90vh] p-0 overflow-hidden">
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-3/4 bg-black flex items-center justify-center p-2 md:p-4">
              <img
                src={photo.src}
                alt={photo.alt}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="w-full md:w-1/4 p-4 md:p-6 flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold">{photo.title}</h3>
                <p className="text-muted-foreground text-sm">{photo.date}</p>
              </div>
              
              {photo.filter && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-1">Film Style</h4>
                  <p className="text-sm">{photo.filter}</p>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-1">Tags</h4>
                <div className="flex flex-wrap gap-1.5">
                  {photo.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <Button className="w-full gap-2">
                  <Download className="size-4" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
