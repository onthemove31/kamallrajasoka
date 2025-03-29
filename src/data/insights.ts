
export interface Insight {
  id: string;
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  category: 'gaming' | 'development' | 'photography' | 'learning';
  icon?: string;
}

export const insights: Insight[] = [
  {
    id: 'gaming-hours',
    title: 'Gaming Hours This Week',
    value: '12.5',
    change: '+2.3',
    trend: 'up',
    category: 'gaming',
    icon: 'GameController'
  },
  {
    id: 'most-played',
    title: 'Most Played Game',
    value: 'Elden Ring',
    category: 'gaming',
    icon: 'Trophy'
  },
  {
    id: 'code-commits',
    title: 'GitHub Commits',
    value: 47,
    change: '+12',
    trend: 'up',
    category: 'development',
    icon: 'Code'
  },
  {
    id: 'productive-day',
    title: 'Most Productive Day',
    value: 'Tuesday',
    category: 'development',
    icon: 'LineChart'
  },
  {
    id: 'photos-taken',
    title: 'Photos Taken',
    value: 86,
    change: '-12',
    trend: 'down',
    category: 'photography',
    icon: 'Camera'
  },
  {
    id: 'favorite-lens',
    title: 'Most Used Lens',
    value: '35mm f/1.8',
    category: 'photography',
    icon: 'Aperture'
  },
  {
    id: 'japanese-streak',
    title: 'Japanese Learning Streak',
    value: '42 days',
    change: '+7',
    trend: 'up',
    category: 'learning',
    icon: 'Languages'
  },
  {
    id: 'words-learned',
    title: 'New Words Learned',
    value: 24,
    change: '+5',
    trend: 'up',
    category: 'learning',
    icon: 'BookOpen'
  }
];

export const insightCategories = [
  { id: 'all', label: 'All Insights' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'development', label: 'Development' },
  { id: 'photography', label: 'Photography' },
  { id: 'learning', label: 'Learning Japanese' }
];

export const getInsightsByCategory = (category: string) => {
  if (category === 'all') return insights;
  return insights.filter(insight => insight.category === category);
};
