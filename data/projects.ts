export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  status: "Shipped" | "In Progress" | "Ghosted"
  github?: string
  demo?: string
  featured: boolean
  categories: string[]
}

export const projects: Project[] = [
  {
    id: "game-tracker",
    title: "Game Time Tracker",
    description: "Track your gaming habits and visualize your playtime stats.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "SQLite", "Chart.js"],
    status: "Shipped",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    categories: ["games", "analytics", "web"],
  },
  {
    id: "photo-organizer",
    title: "Film Style Photo App",
    description: "Organize and apply film-inspired filters to your photos.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "AWS S3"],
    status: "In Progress",
    github: "https://github.com",
    featured: true,
    categories: ["photography", "web"],
  },
  {
    id: "pi-weather",
    title: "Raspberry Pi Weather Station",
    description: "DIY weather station with real-time data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Raspberry Pi", "Python", "React", "IoT"],
    status: "Shipped",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    categories: ["raspberry-pi", "analytics"],
  },
  {
    id: "japanese-flashcards",
    title: "Japanese Flashcard App",
    description: "Spaced repetition flashcards for learning Japanese.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind", "Supabase"],
    status: "In Progress",
    github: "https://github.com",
    featured: false,
    categories: ["web"],
  },
  {
    id: "personal-dashboard",
    title: "Personal Analytics Dashboard",
    description: "Dashboard for tracking personal metrics and habits.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "D3.js", "Node.js"],
    status: "Shipped",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    categories: ["analytics", "web"],
  },
  {
    id: "pi-media-server",
    title: "Raspberry Pi Media Server",
    description: "Custom media server built on Raspberry Pi.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Raspberry Pi", "Linux", "Plex"],
    status: "Ghosted",
    github: "https://github.com",
    featured: false,
    categories: ["raspberry-pi"],
  },
]

