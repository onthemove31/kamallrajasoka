import { Photo } from "@/data/photos";

const S3_BUCKET_URL = "https://YOUR-BUCKET-NAME.s3.YOUR-REGION.amazonaws.com"; // Replace with your actual S3 bucket URL

export interface S3Photo {
  key: string;
  url: string;
  lastModified: string;
  size: number;
  tags?: string[];
  aspectRatio?: string;
  filter?: string;
}

export async function fetchPhotosFromS3(): Promise<Photo[]> {
  try {
    const response = await fetch(`${S3_BUCKET_URL}/photos.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }
    
    const s3Photos: S3Photo[] = await response.json();
    
    return s3Photos.map(photo => ({
      id: photo.key,
      title: photo.key.split('/').pop()?.split('.')[0] || 'Untitled',
      src: photo.url || `${S3_BUCKET_URL}/${photo.key}`,
      alt: photo.key.split('/').pop()?.split('.')[0] || 'Photo',
      date: new Date(photo.lastModified).toISOString().split('T')[0],
      tags: photo.tags || [],
      filter: photo.filter,
      aspectRatio: photo.aspectRatio || '3:2',
    }));
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
} 