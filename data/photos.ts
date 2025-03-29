export interface Photo {
  id: string
  title: string
  url: string
  date: string
  tags: string[]
}

export const photoCategories = ["Street", "Portrait", "Landscape", "Architecture", "Monochrome"]

export const photos: Photo[] = [
  {
    id: "photo-1",
    title: "Urban Reflections",
    url: "/placeholder.svg?height=800&width=800",
    date: "2023-05-15",
    tags: ["Street", "Architecture"],
  },
  {
    id: "photo-2",
    title: "Mountain Sunrise",
    url: "/placeholder.svg?height=800&width=800",
    date: "2023-04-22",
    tags: ["Landscape"],
  },
  {
    id: "photo-3",
    title: "City Lights",
    url: "/placeholder.svg?height=800&width=800",
    date: "2023-03-10",
    tags: ["Street", "Monochrome"],
  },
  {
    id: "photo-4",
    title: "Portrait in Shadow",
    url: "/placeholder.svg?height=800&width=800",
    date: "2023-02-28",
    tags: ["Portrait", "Monochrome"],
  },
  {
    id: "photo-5",
    title: "Geometric Patterns",
    url: "/placeholder.svg?height=800&width=800",
    date: "2023-01-15",
    tags: ["Architecture"],
  },
  {
    id: "photo-6",
    title: "Foggy Forest",
    url: "/placeholder.svg?height=800&width=800",
    date: "2022-12-05",
    tags: ["Landscape"],
  },
  {
    id: "photo-7",
    title: "Street Corner",
    url: "/placeholder.svg?height=800&width=800",
    date: "2022-11-20",
    tags: ["Street"],
  },
  {
    id: "photo-8",
    title: "Portrait Study",
    url: "/placeholder.svg?height=800&width=800",
    date: "2022-10-12",
    tags: ["Portrait"],
  },
]

