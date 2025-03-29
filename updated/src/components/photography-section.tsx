
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, X } from "lucide-react";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    title: "Tokyo Streets",
    category: "Street",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d",
    title: "Mountain Range",
    category: "Landscape",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1519638399535-1b036603ac77",
    title: "Urban Exploration",
    category: "Street",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
    title: "Japan Shrine",
    category: "Travel",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f",
    title: "Sunset Mountains",
    category: "Landscape",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d",
    title: "Urban Life",
    category: "Street",
  },
];

const categories = ["All", "Street", "Landscape", "Travel", "Portrait"];

const PhotographySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  const filteredPhotos = activeCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="py-20 px-4 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-gradient inline-block text-4xl font-bold mb-4">Photography</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Capturing moments and emotions through the lens. A personal collection of visual stories.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className={`transition-all duration-300 ${
              activeCategory === category 
                ? "bg-primary hover:bg-primary/80" 
                : "hover:border-primary/50 hover:text-primary"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg aspect-[4/3] hover-card cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
              <Badge variant="outline" className="bg-black/30 text-white border-white/20 w-fit mt-2">
                {photo.category}
              </Badge>
            </div>
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button 
          className="group glow-effect transition-all duration-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] relative overflow-hidden"
        >
          <Camera className="mr-2 h-4 w-4" />
          <span className="relative z-10">View All Photos</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </Button>
      </div>

      {/* Photo Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-white text-xl font-semibold">{selectedPhoto.title}</h3>
                <Badge variant="outline" className="bg-black/30 text-white border-white/20 mt-1">
                  {selectedPhoto.category}
                </Badge>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10" 
                onClick={() => setSelectedPhoto(null)}
              >
                <X />
              </Button>
            </div>
            <div className="flex-1 overflow-hidden rounded-lg">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographySection;
