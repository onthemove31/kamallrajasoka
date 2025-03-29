
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  tags: string[];
  image?: string;
}

export const posts: Post[] = [
  {
    id: 'plex-server-setup',
    title: 'Setting Up a Raspberry Pi Plex Server',
    excerpt: 'How I transformed a Raspberry Pi 4 into a powerful media server for my home entertainment system.',
    date: '2023-06-15',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi euismod, nunc at hendrerit finibus, nulla augue ultricies nisi, ut tincidunt nunc nisl id nisi. Integer auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi. Nullam auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi.',
    tags: ['Raspberry Pi', 'Plex', 'Media Server', 'Tutorial'],
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'learning-japanese',
    title: 'My Japanese Learning Journey',
    excerpt: 'One year into learning Japanese: tools, techniques, and tracking progress through spaced repetition.',
    date: '2023-05-22',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi euismod, nunc at hendrerit finibus, nulla augue ultricies nisi, ut tincidunt nunc nisl id nisi. Integer auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi. Nullam auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi.',
    tags: ['Japanese', 'Learning', 'Language', 'Productivity'],
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'film-emulation-lightroom',
    title: 'Creating Film Emulation Presets in Lightroom',
    excerpt: 'How I recreated the look of classic film stocks by analyzing color profiles and tone curves.',
    date: '2023-04-10',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi euismod, nunc at hendrerit finibus, nulla augue ultricies nisi, ut tincidunt nunc nisl id nisi. Integer auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi. Nullam auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi.',
    tags: ['Photography', 'Lightroom', 'Film', 'Creative'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'devlog-game-tracker',
    title: 'Dev Log: Building a Cross-Platform Game Tracker',
    excerpt: 'Weekly progress updates on my journey to build a game tracking app that works across Steam, Epic, and console platforms.',
    date: '2023-03-18',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi euismod, nunc at hendrerit finibus, nulla augue ultricies nisi, ut tincidunt nunc nisl id nisi. Integer auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi. Nullam auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi.',
    tags: ['Development', 'React', 'API', 'Gaming'],
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'productivity-system',
    title: 'My Minimal Productivity System',
    excerpt: 'How I combined digital and analog tools to create a distraction-free productivity workflow.',
    date: '2023-02-05',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi euismod, nunc at hendrerit finibus, nulla augue ultricies nisi, ut tincidunt nunc nisl id nisi. Integer auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi. Nullam auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi.',
    tags: ['Productivity', 'Minimalism', 'Tools', 'Workflow'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'raspberry-pi-camera',
    title: 'Building an Automated Timelapse Camera with Raspberry Pi',
    excerpt: 'Creating a weatherproof, solar-powered timelapse camera system using a Raspberry Pi Zero and camera module.',
    date: '2023-01-12',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi euismod, nunc at hendrerit finibus, nulla augue ultricies nisi, ut tincidunt nunc nisl id nisi. Integer auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi. Nullam auctor, nunc id ultricies ultricies, nisl lorem ultricies nisi, ut consequat nisi nisl id nisi.',
    tags: ['Raspberry Pi', 'Photography', 'DIY', 'Hardware'],
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=600&q=80'
  }
];

export const postTags = [
  'All',
  'Development',
  'Photography',
  'Raspberry Pi',
  'Productivity',
  'Gaming',
  'Japanese',
  'Tutorial',
  'DIY',
  'Hardware',
  'Creative'
];

export const getPostsByTag = (tag: string) => {
  if (tag === 'All') return posts;
  return posts.filter(post => post.tags.includes(tag));
};
