export interface Photo {
  id: string;
  title: string;
  src: string;
  alt: string;
  date: string;
  tags: string[];
  filter?: string;
  aspectRatio: string;
}

export const photos: Photo[] = [
  {
    id: 'photo1',
    title: 'Urban Exploration',
    src: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=1200',
    alt: 'City skyline at dusk with neon lights',
    date: '2023-02-15',
    tags: ['Street', 'Urban', 'Night'],
    filter: 'Cinematic',
    aspectRatio: '4:3'
  },
  {
    id: 'photo2',
    title: 'Mountain Solitude',
    src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200',
    alt: 'Person standing on mountain peak overlooking valley',
    date: '2023-04-22',
    tags: ['Landscape', 'Mountain', 'Travel'],
    filter: 'Kodak Portra 400',
    aspectRatio: '3:2'
  },
  {
    id: 'photo3',
    title: 'Coffee Contemplation',
    src: 'https://images.unsplash.com/photo-1522012188892-24beb302e3d9?auto=format&fit=crop&w=1200',
    alt: 'Steam rising from coffee cup near window',
    date: '2023-01-08',
    tags: ['Still Life', 'Monochrome'],
    filter: 'Ilford HP5',
    aspectRatio: '1:1'
  },
  {
    id: 'photo4',
    title: 'Tokyo Streets',
    src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200',
    alt: 'Rainy night in Tokyo with reflections on street',
    date: '2022-11-12',
    tags: ['Street', 'Urban', 'Travel', 'Night'],
    filter: 'Cinematic',
    aspectRatio: '16:9'
  },
  {
    id: 'photo5',
    title: 'Autumn Path',
    src: 'https://images.unsplash.com/photo-1541789094913-f3809a8f3ba5?auto=format&fit=crop&w=1200',
    alt: 'Path through forest with autumn leaves',
    date: '2022-10-30',
    tags: ['Landscape', 'Nature', 'Seasons'],
    filter: 'Fuji Velvia',
    aspectRatio: '3:2'
  },
  {
    id: 'photo6',
    title: 'Portrait in Shadow',
    src: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?auto=format&fit=crop&w=1200',
    alt: 'Portrait of person half in shadow',
    date: '2023-03-14',
    tags: ['Portrait', 'Monochrome'],
    filter: 'Tri-X 400',
    aspectRatio: '4:5'
  },
  {
    id: 'photo7',
    title: 'Vintage Car',
    src: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?auto=format&fit=crop&w=1200',
    alt: 'Classic car on empty street',
    date: '2022-08-03',
    tags: ['Street', 'Vintage', 'Urban'],
    filter: 'Kodak Ektar 100',
    aspectRatio: '16:9'
  },
  {
    id: 'photo8',
    title: 'Morning Mist',
    src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200',
    alt: 'Forest covered in morning mist',
    date: '2023-05-19',
    tags: ['Landscape', 'Nature', 'Fog'],
    filter: 'Pro Mist 1/4',
    aspectRatio: '3:2'
  },
  {
    id: 'photo9',
    title: 'Industrial Lines',
    src: 'https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=1200',
    alt: 'Architectural detail of modern building',
    date: '2022-12-05',
    tags: ['Architecture', 'Urban', 'Monochrome'],
    filter: 'Ilford Delta 100',
    aspectRatio: '1:1'
  },
  {
    id: 'photo10',
    title: 'Ocean Waves',
    src: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200',
    alt: 'Long exposure of ocean waves at sunset',
    date: '2023-06-29',
    tags: ['Landscape', 'Ocean', 'Long Exposure'],
    filter: 'Lee Big Stopper',
    aspectRatio: '16:9'
  },
  {
    id: 'photo11',
    title: 'Street Portrait',
    src: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?auto=format&fit=crop&w=1200',
    alt: 'Portrait of stranger on city street',
    date: '2022-09-17',
    tags: ['Portrait', 'Street', 'Urban'],
    filter: 'Portra 800',
    aspectRatio: '4:5'
  },
  {
    id: 'photo12',
    title: 'Minimal Composition',
    src: 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&w=1200',
    alt: 'Minimalist architectural composition with shadows',
    date: '2023-01-23',
    tags: ['Architecture', 'Minimal', 'Abstract'],
    filter: 'High Contrast B&W',
    aspectRatio: '1:1'
  }
];

export const photoTags = [
  'All',
  'Street',
  'Urban',
  'Landscape',
  'Portrait',
  'Monochrome',
  'Nature',
  'Architecture',
  'Travel',
  'Night',
  'Abstract',
  'Minimal'
];

export const getPhotosByTag = (tag: string) => {
  if (tag === 'All') return photos;
  return photos.filter(photo => photo.tags.includes(tag));
};
