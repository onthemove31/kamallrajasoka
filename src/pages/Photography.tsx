import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import Footer from "@/components/footer";

interface Photo {
  id: number;
  title: string;
  src: string;
  tags: string[];
  date: string;
  filmStyle?: string;
  description?: string;
}

const photos: Photo[] = [
  {
    id: 1,
    title: "Urban Shadows",
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    tags: ["Street", "Urban", "Night"],
    date: "2023-04-15",
    filmStyle: "Kodak Portra 400",
    description: "Light and shadows play through an urban alleyway after rainfall."
  },
  {
    id: 2,
    title: "Forest Serenity",
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    tags: ["Nature", "Landscape", "Mountains"],
    date: "2023-05-22",
    filmStyle: "Fujifilm Velvia 50",
    description: "Bird's eye view of misty mountains at dawn."
  },
  {
    id: 3,
    title: "Architectural Lines",
    src: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    tags: ["Architecture", "Monochrome", "Urban"],
    date: "2023-06-10",
    filmStyle: "Ilford HP5 Plus",
    description: "Grayscale study of contemporary architecture and geometric patterns."
  },
  {
    id: 4,
    title: "Classic Facades",
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    tags: ["Architecture", "Heritage", "Street"],
    date: "2023-07-05",
    filmStyle: "Kodak Gold 200",
    description: "White concrete building with traditional architectural elements."
  },
  {
    id: 5,
    title: "Waves of Structure",
    src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    tags: ["Architecture", "Modern", "Abstract"],
    date: "2023-08-18",
    filmStyle: "Fujifilm Pro 400H",
    description: "A building with wavy lines against a clear blue sky."
  },
  {
    id: 6,
    title: "Pasture Motion",
    src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    tags: ["Nature", "Wildlife", "Rural"],
    date: "2023-09-03",
    filmStyle: "Lomography Color Negative 400",
    description: "Herd of sheep running across a green pasture."
  },
  {
    id: 7,
    title: "Feline Repose",
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    tags: ["Portrait", "Pet", "Lifestyle"],
    date: "2023-10-12",
    filmStyle: "Kodak Ektar 100",
    description: "Orange and white tabby cat resting on a patterned textile."
  },
  {
    id: 8,
    title: "Domestic Tranquility",
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    tags: ["Interior", "Lifestyle", "Minimalism"],
    date: "2023-11-25",
    filmStyle: "Cinestill 800T",
    description: "A minimalist living room with balanced composition and natural light."
  }
];

const Photography = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("photography");

  const uniqueTags = Array.from(
    new Set(photos.flatMap((photo) => photo.tags))
  ).sort();

  const filteredPhotos = filter === "all" 
    ? photos 
    : photos.filter((photo) => photo.tags.includes(filter));

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(filteredPhotos.findIndex((p) => p.id === photo.id));
  };

  const handlePrevious = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
      setSelectedPhoto(filteredPhotos[currentPhotoIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentPhotoIndex < filteredPhotos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
      setSelectedPhoto(filteredPhotos[currentPhotoIndex + 1]);
    }
  };

  const scrollToSection = (section: string) => {
    console.log(`Would scroll to ${section} if this was the main page`);
    setActiveSection(section);
  };

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen pt-20 bg-background transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-8">Photography</h1>
        </AnimatedSection>
        
        <div className="sticky top-20 z-10 py-4 bg-background mb-8">
          <div className="flex justify-between items-center">
            <AnimatedSection direction="left">
              <p className="text-lg text-muted-foreground max-w-2xl">
                A collection of my photographic work across various styles and subjects.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[180px] transition-all duration-300 hover:border-primary focus:ring-primary">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent className="bg-background/90 backdrop-blur-md border-primary/20">
                  <SelectItem value="all">All Categories</SelectItem>
                  {uniqueTags.map((tag) => (
                    <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
          {filteredPhotos.map((photo, i) => (
            <AnimatedSection key={photo.id} delay={i * 100} direction={i % 2 === 0 ? "up" : "down"}>
              <div 
                className="aspect-square relative overflow-hidden rounded-md cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:shadow-xl"
                onClick={() => handlePhotoClick(photo)}
              >
                <img 
                  src={photo.src}
                  alt={photo.title}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">{photo.title}</h3>
                  <p className="text-white/80 text-sm transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 transition-delay-100">{photo.filmStyle}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {selectedPhoto && (
          <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
            <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md border-primary/20 animate-in fade-in-90 slide-in-from-bottom-10 duration-300">
              <DialogHeader>
                <DialogTitle>{selectedPhoto.title}</DialogTitle>
                <DialogDescription>
                  {selectedPhoto.date} • {selectedPhoto.filmStyle}
                </DialogDescription>
              </DialogHeader>
              
              <div className="relative mt-4">
                <img 
                  src={selectedPhoto.src} 
                  alt={selectedPhoto.title}
                  className="w-full h-auto rounded-md shadow-md transition-all duration-300"
                />
                
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={handlePrevious}
                    disabled={currentPhotoIndex === 0}
                    className="bg-white/20 backdrop-blur-lg rounded-full h-10 w-10 transition-all duration-300 hover:bg-white/40"
                  >
                    <ChevronLeft className="transition-transform duration-300 transform group-hover:scale-125" />
                  </Button>
                </div>
                
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={handleNext}
                    disabled={currentPhotoIndex === filteredPhotos.length - 1}
                    className="bg-white/20 backdrop-blur-lg rounded-full h-10 w-10 transition-all duration-300 hover:bg-white/40"
                  >
                    <ChevronRight className="transition-transform duration-300 transform group-hover:scale-125" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="mb-4">{selectedPhoto.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPhoto.tags.map((tag, index) => (
                    <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 text-xs rounded-md transition-all duration-300 hover:bg-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="flex items-center gap-2 transition-all duration-300 hover:bg-primary/10 hover:border-primary">
                  <Download size={16} />
                  Download Original
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Photography;
