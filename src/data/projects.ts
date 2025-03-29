
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'in-progress' | 'shipped' | 'ghosted';
  link?: string;
  github?: string;
  image?: string;
  category: 'tracker' | 'photo' | 'raspberry-pi' | 'web' | 'analytics';
}

export const projects: Project[] = [
  {
    id: 'game-tracker-app',
    title: 'Game Tracker Dashboard',
    description: 'A full-stack app to track gaming habits and visualize play patterns over time. Features a React frontend and Node.js backend with MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    status: 'in-progress',
    github: 'https://github.com/username/game-tracker',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
    category: 'tracker'
  },
  {
    id: 'photo-metadata-extractor',
    title: 'Photo Metadata Tool',
    description: 'A tool that extracts EXIF data from photographs and generates insights about shooting habits and favorite settings.',
    tags: ['Python', 'Flask', 'AWS S3', 'ExifTool'],
    status: 'shipped',
    github: 'https://github.com/username/exif-analyzer',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80',
    category: 'photo'
  },
  {
    id: 'pi-weather-station',
    title: 'Raspberry Pi Weather Station',
    description: 'A home weather station built with Raspberry Pi that monitors temperature, humidity, and air quality data with a web dashboard.',
    tags: ['Raspberry Pi', 'Python', 'IoT', 'Sensors'],
    status: 'in-progress',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    category: 'raspberry-pi'
  },
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio',
    description: 'This very website you\'re looking at! Built with React and Tailwind CSS featuring dark mode and smooth animations.',
    tags: ['React', 'Tailwind CSS', 'Responsive Design'],
    status: 'shipped',
    github: 'https://github.com/username/portfolio',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    category: 'web'
  },
  {
    id: 'productivity-analyzer',
    title: 'Productivity Analytics Dashboard',
    description: 'A dashboard that tracks productivity metrics from various sources like GitHub, Todoist, and VS Code to provide insights.',
    tags: ['React', 'TypeScript', 'APIs', 'D3.js'],
    status: 'ghosted',
    github: 'https://github.com/username/productivity-dashboard',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
    category: 'analytics'
  },
  {
    id: 'pi-retro-gaming',
    title: 'Raspberry Pi Retro Gaming Console',
    description: 'A custom retro gaming console built on a Raspberry Pi, complete with 3D-printed case and custom controller setup.',
    tags: ['Raspberry Pi', 'RetroPie', '3D Printing', 'Gaming'],
    status: 'shipped',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80',
    category: 'raspberry-pi'
  },
  {
    id: 'photo-film-emulation',
    title: 'Film Emulation Presets',
    description: 'A collection of Lightroom presets that emulate the look of classic film stocks for digital photography.',
    tags: ['Photography', 'Lightroom', 'Film Emulation'],
    status: 'shipped',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    category: 'photo'
  },
  {
    id: 'web-puzzle-game',
    title: 'Browser Puzzle Game',
    description: 'A minimalist browser-based puzzle game inspired by Japanese box-moving puzzles, built with vanilla JavaScript.',
    tags: ['JavaScript', 'HTML Canvas', 'Game Design'],
    status: 'ghosted',
    github: 'https://github.com/username/puzzle-game',
    image: 'https://images.unsplash.com/photo-1642618215095-3523a9a36893?auto=format&fit=crop&w=600&q=80',
    category: 'web'
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'tracker', label: 'Game Tracker' },
  { id: 'photo', label: 'Photography' },
  { id: 'raspberry-pi', label: 'Raspberry Pi' },
  { id: 'web', label: 'Web Apps & Games' },
  { id: 'analytics', label: 'Analytics' }
];

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};
