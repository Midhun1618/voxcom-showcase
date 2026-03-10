export type ProjectCategory = 'voice-assistant' | 'android' | 'python' | 'java' | 'website';

export interface ProjectReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: ProjectCategory;
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  rating: number;
  downloads?: number;
  version?: string;
  lastUpdated: string;
  features: string[];
  techStack: string[];
  actionType: 'use' | 'download';
  actionUrl: string;
  reviews: ProjectReview[];
  featured?: boolean;
}

export const categoryInfo: Record<ProjectCategory, { label: string; icon: string; color: string }> = {
  'voice-assistant': { label: 'Voice Assistant', icon: 'Mic', color: 'bg-purple-100 text-purple-700' },
  'android': { label: 'Android Apps', icon: 'Smartphone', color: 'bg-green-100 text-green-700' },
  'python': { label: 'Python Apps', icon: 'Terminal', color: 'bg-yellow-100 text-yellow-700' },
  'java': { label: 'Java Apps', icon: 'Coffee', color: 'bg-orange-100 text-orange-700' },
  'website': { label: 'Websites', icon: 'Globe', color: 'bg-blue-100 text-blue-700' },
};

export const projects: Project[] = [
  {
    id: 'vox-assistant',
    title: 'Vox Assistant',
    description: 'An intelligent voice assistant powered by advanced AI that can help you with daily tasks, answer questions, set reminders, and control smart home devices. Built with natural language processing capabilities for seamless conversations.',
    shortDescription: 'AI-powered voice assistant for daily tasks and smart home control.',
    category: 'voice-assistant',
    thumbnail: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    ],
    rating: 4.8,
    downloads: 15000,
    version: '2.1.0',
    lastUpdated: '2024-01-15',
    features: [
      'Natural language processing',
      'Smart home integration',
      'Voice-activated commands',
      'Multi-language support',
      'Offline mode',
    ],
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'WebSocket'],
    actionType: 'download',
    actionUrl: '#',
    reviews: [
      { id: '1', author: 'John D.', rating: 5, comment: 'Amazing voice recognition!', date: '2024-01-10' },
      { id: '2', author: 'Sarah M.', rating: 4, comment: 'Very helpful for daily tasks.', date: '2024-01-08' },
    ],
    featured: true,
  },
  {
    id: 'taskmaster-android',
    title: 'TaskMaster Pro',
    description: 'A comprehensive task management application for Android that helps you organize your work and personal life. Features include project boards, reminders, team collaboration, and detailed analytics to boost your productivity.',
    shortDescription: 'Complete task management with collaboration features.',
    category: 'android',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    ],
    rating: 4.6,
    downloads: 25000,
    version: '3.2.1',
    lastUpdated: '2024-01-20',
    features: [
      'Kanban boards',
      'Team collaboration',
      'Push notifications',
      'Offline sync',
      'Dark mode',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Room', 'Firebase'],
    actionType: 'download',
    actionUrl: '#',
    reviews: [
      { id: '1', author: 'Mike R.', rating: 5, comment: 'Best task app I\'ve used!', date: '2024-01-18' },
    ],
    featured: true,
  },
  {
    id: 'datacrunch-python',
    title: 'DataCrunch Analytics',
    description: 'A powerful Python-based data analytics tool designed for data scientists and analysts. Process large datasets, create visualizations, and generate insights with an intuitive interface and powerful processing capabilities.',
    shortDescription: 'Advanced data analytics and visualization tool.',
    category: 'python',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    rating: 4.9,
    downloads: 8000,
    version: '1.5.0',
    lastUpdated: '2024-01-12',
    features: [
      'Real-time data processing',
      'Interactive visualizations',
      'Export to multiple formats',
      'Machine learning integration',
      'API connectivity',
    ],
    techStack: ['Python', 'Pandas', 'Plotly', 'Scikit-learn'],
    actionType: 'download',
    actionUrl: '#',
    reviews: [
      { id: '1', author: 'Dr. Emily C.', rating: 5, comment: 'Essential for my research!', date: '2024-01-11' },
    ],
    featured: true,
  },
  {
    id: 'reposcope-web',
    title: 'RepoScope',
    description: 'A full-stack repository intelligence platform that analyzes public GitHub repositories using deterministic metrics combined with AI-powered strategic interpretation. It evaluates health, risk exposure, development consistency, and evolution trends to generate actionable maintainability insights.',
    shortDescription: 'AI-powered GitHub repository health & risk analyzer.',
    category: 'website',
    thumbnail: '/thumbnails/repsocope.png',
    images: [
      '/screenshots/reposcope_1.png', '/screenshots/reposcope_2.png', '/screenshots/reposcope_3.png',
    ],
    rating: 4.8,
    downloads: 5400,
    version: '1.0.0',
    lastUpdated: '2026-02-20',
    features: [
      'Repository metadata & commit analytics',
      'Health, Risk, Consistency & Evolution scoring',
      'Bus-factor contributor risk analysis',
      'AI-generated development pattern insights',
      'Interactive Bento-grid dashboard',
      'CI/CD deployment on Render',
    ],
    techStack: [
      'React',
      'Recharts',
      'Framer Motion',
      'Node.js',
      'Express',
      'GitHub REST API',
      'Firebase Realtime Database',
      'LLM Integration (OpenRouter)',
      'Render'
    ],
    actionType: 'use',
    actionUrl: 'https://reposcope-for-dev.onrender.com',
    reviews: [],
  },
  {
    id: 'vox-android',
    title: 'VOX – Android Productivity System',
    description: 'VOX is a voice-enabled productivity system designed to make task management measurable, time-bound, and intelligent. Built with Kotlin and Firebase, VOX allows users to create tasks using voice commands, track productivity using a Focus Index, and manage daily goals through a 24-hour task lifecycle. The app also includes real-time weather updates, reminders with notifications, secure cloud clipboard syncing, and device pairing using a unique code system.',
    shortDescription: 'Voice-powered productivity system with measurable focus tracking.',
    category: 'android',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    ],
    rating: 4.9,
    downloads: 1200,
    version: '1.0.0',
    lastUpdated: '2026-03-10',
    features: [
      'Google Sign-In authentication',
      'Custom username and avatar setup',
      'Unique 6-character device pairing code',
      'Voice-powered task creation',
      '24-hour task expiry model',
      'Focus Index productivity tracking',
      'Real-time weather and time display',
      'Smart reminders with notifications',
      'Secure cloud clipboard syncing',
    ],
    techStack: ['Kotlin', 'Firebase Authentication', 'Firebase Firestore', 'Firebase Cloud Messaging'],
    actionType: 'download',
    actionUrl: 'https://github.com/Midhun1618/VOX-Android/releases/download/v1.1/VOX.apk',
    reviews: [
      {
        id: '1',
        author: 'Alex T.',
        rating: 5,
        comment: 'A very unique productivity system. The Focus Index idea is brilliant!',
        date: '2026-03-05'
      },
      {
        id: '2',
        author: 'Priya K.',
        rating: 4,
        comment: 'Voice task creation makes it super fast to add tasks.',
        date: '2026-03-06'
      }
    ],
    featured: true,
  },
  {
    id: 'portfolio-website',
    title: 'Creative Portfolio',
    description: 'A stunning portfolio website template designed for creatives, featuring smooth animations, gallery layouts, and responsive design. Showcase your work beautifully across all devices.',
    shortDescription: 'Beautiful portfolio template for creatives.',
    category: 'website',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop',
    ],
    rating: 4.7,
    version: '1.2.0',
    lastUpdated: '2024-01-18',
    features: [
      'Responsive design',
      'Smooth animations',
      'SEO optimized',
      'Contact form',
      'Gallery lightbox',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    actionType: 'use',
    actionUrl: '#',
    reviews: [
      { id: '1', author: 'Alex T.', rating: 5, comment: 'Perfect for showcasing my art!', date: '2024-01-17' },
    ],
    featured: true,
  },
  {
  id: 'vox-desktop',
  title: 'VOX – Desktop Productivity Dashboard',
  description: 'VOX Desktop is the companion application to VOX Android, designed to create a synchronized cross-device productivity ecosystem. Built using Java, the desktop application provides a centralized productivity dashboard where users can monitor tasks, track Focus Index metrics, and synchronize data with their Android device in real time. The system also supports wake word detection and speech recognition, allowing users to execute commands and interact with the system hands-free while maintaining a seamless workflow.',
  shortDescription: 'Voice-enabled desktop dashboard with real-time productivity sync.',
  category: 'java',
  thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  ],
  rating: 4.8,
  downloads: 900,
  version: '1.0.0',
  lastUpdated: '2026-03-10',
  features: [
    'Secure pairing with VOX Android using unique code',
    'Real-time task synchronization',
    'Wake word detection for hands-free activation',
    'Speech recognition for command execution',
    'Voice-controlled productivity interactions',
    'Focus Index productivity dashboard',
    'Desktop and mobile cloud clipboard synchronization',
    'Live task updates and activity monitoring',
    'Minimal distraction-free interface'
  ],
  techStack: ['Java', 'Firebase', 'Whisper model', 'Porcupine Wake Word Engine'],
  actionType: 'download',
  actionUrl: 'https://github.com/Midhun1618/VOX-PC/releases/download/v1.0/VOX.exe',
  reviews: [
    {
      id: '1',
      author: 'Daniel R.',
      rating: 5,
      comment: 'Perfect companion for the VOX Android app. Sync works smoothly!',
      date: '2026-03-07'
    },
    {
      id: '2',
      author: 'Nisha P.',
      rating: 4,
      comment: 'Voice commands make it super convenient while working.',
      date: '2026-03-08'
    }
  ],
  featured: true,
},
  {
    id: 'weather-android',
    title: 'SkyView Weather',
    description: 'A beautiful weather application for Android with accurate forecasts, radar maps, and severe weather alerts. Get detailed hourly and weekly forecasts with stunning visualizations.',
    shortDescription: 'Beautiful weather app with accurate forecasts.',
    category: 'android',
    thumbnail: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    ],
    rating: 4.5,
    downloads: 50000,
    version: '4.1.0',
    lastUpdated: '2024-01-22',
    features: [
      'Hourly forecasts',
      'Radar maps',
      'Severe weather alerts',
      'Widget support',
      'Multiple locations',
    ],
    techStack: ['Kotlin', 'Retrofit', 'Room', 'OpenWeather API'],
    actionType: 'download',
    actionUrl: '#',
    reviews: [],
  },
  {
    id: 'automation-python',
    title: 'AutoScript Suite',
    description: 'A collection of Python automation scripts for common tasks like web scraping, file organization, and system maintenance. Save hours of manual work with powerful automation.',
    shortDescription: 'Python automation scripts for common tasks.',
    category: 'python',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    ],
    rating: 4.3,
    downloads: 6000,
    version: '1.0.5',
    lastUpdated: '2024-01-08',
    features: [
      'Web scraping',
      'File automation',
      'Email automation',
      'Scheduled tasks',
      'Easy configuration',
    ],
    techStack: ['Python', 'Selenium', 'Beautiful Soup', 'Schedule'],
    actionType: 'download',
    actionUrl: '#',
    reviews: [],
  },
  {
    id: 'vr-photobooth',
    title: 'VR PhotoBooth',
    description:
      'A retro-styled Android photobooth app that captures a timed photo sequence, applies film grain and contrast effects, and generates a classic photobooth print with a slot-style slide-out animation.',
    shortDescription: 'Retro Android photobooth with film grain and print animation.',
    category: 'android',
    thumbnail: '/thumbnails/vrphotobooth_mockup.png',
    images: ['/screenshots/mockup_1.png', '/screenshots/mockup_2.png'
    ],
    rating: 4.7,
    version: '1.0.0',
    lastUpdated: '2024-02-08',
    features: [
      'Countdown-based photo capture',
      'Film grain & contrast controls',
      'Slot-style slide-out print animation',
      'Automatic photobooth collage',
      'Downloadable final image',
    ],
    techStack: ['Kotlin', 'CameraX', 'Android'],
    actionType: 'download',
    actionUrl: 'https://github.com/Midhun1618/release-file/releases/download/v1.1/VR-Photobooth.apk',
    reviews: [],
  }

];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: ProjectCategory) => projects.filter(p => p.category === category);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
