export interface Insight {
  id: string
  title: string
  description: string
  value: string | number
  unit: string
  context: string
}

export const insights: Insight[] = [
  {
    id: "gaming-time",
    title: "Gaming Time",
    description: "Total gaming hours this month",
    value: 42,
    unit: "hours",
    context: "Up 15% from last month",
  },
  {
    id: "productivity",
    title: "Coding Streak",
    description: "Longest coding streak",
    value: 14,
    unit: "days",
    context: "Your best streak this year",
  },
  {
    id: "photos",
    title: "Photos Taken",
    description: "Photos taken this month",
    value: 128,
    unit: "photos",
    context: "Down 8% from last month",
  },
  {
    id: "projects",
    title: "Active Projects",
    description: "Currently active projects",
    value: 4,
    unit: "projects",
    context: "2 nearing completion",
  },
  {
    id: "commits",
    title: "GitHub Commits",
    description: "Commits in the last 30 days",
    value: 86,
    unit: "commits",
    context: "Most active on Tuesdays",
  },
  {
    id: "japanese",
    title: "Japanese Progress",
    description: "New words learned",
    value: 35,
    unit: "words",
    context: "Consistent study for 21 days",
  },
]

