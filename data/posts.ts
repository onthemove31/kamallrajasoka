export interface Post {
  id: string
  title: string
  slug: string
  date: string
  excerpt: string
  tags: string[]
}

export const posts: Post[] = [
  {
    id: "post-1",
    title: "Building a Raspberry Pi Weather Station from Scratch",
    slug: "raspberry-pi-weather-station",
    date: "2023-06-15",
    excerpt:
      "A step-by-step guide to building your own weather station using Raspberry Pi, sensors, and a custom dashboard.",
    tags: ["Raspberry Pi", "IoT", "Python", "Tutorial"],
  },
  {
    id: "post-2",
    title: "How I Track My Gaming Habits with a Custom App",
    slug: "gaming-habits-tracker",
    date: "2023-05-22",
    excerpt: "I built a custom app to track my gaming time and habits. Here's what I learned about my gaming patterns.",
    tags: ["React", "Data Viz", "Personal Projects"],
  },
  {
    id: "post-3",
    title: "Film-Inspired Digital Photography: My Process",
    slug: "film-inspired-photography",
    date: "2023-04-10",
    excerpt:
      "How I achieve film-like aesthetics in my digital photography through both shooting techniques and post-processing.",
    tags: ["Photography", "Creative Process", "Tutorial"],
  },
  {
    id: "post-4",
    title: "Setting Up a Plex Media Server on Raspberry Pi",
    slug: "plex-raspberry-pi",
    date: "2023-03-05",
    excerpt: "A complete guide to setting up your own Plex media server using a Raspberry Pi and external storage.",
    tags: ["Raspberry Pi", "Plex", "Tutorial", "Media Server"],
  },
]

