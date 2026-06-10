// ── SHARED ──────────────────────────────────────────────
export const owner = {
  fullName: "ARGHYADIP CHATTERJEE",
  initials: "AC",
  email: "arghyadip@email.com",
  phone: "+91 XXXXX XXXXX",
  location: "West Bengal, India",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/arghyadip",
    linkedin: "https://linkedin.com/in/arghyadip",
    instagram: "#",
    twitter: "#",
  },
};

// ── BUILDER DATA ─────────────────────────────────────────
export const skills = [
  { name: "React", category: "Frontend", level: 88, color: "#61dafb" },
  { name: "TypeScript", category: "Frontend", level: 82, color: "#3178c6" },
  { name: "Tailwind CSS", category: "Frontend", level: 92, color: "#38bdf8" },
  { name: "Vue.js", category: "Frontend", level: 75, color: "#42b883" },
  { name: "Framer Motion", category: "Frontend", level: 78, color: "#ff0055" },
  { name: "Node.js", category: "Backend", level: 80, color: "#68a063" },
  { name: "Firebase", category: "Backend", level: 75, color: "#ffa611" },
  { name: "Python", category: "Backend", level: 72, color: "#ffd43b" },
  { name: "MongoDB", category: "Backend", level: 70, color: "#4db33d" },
  { name: "Vite", category: "Tools", level: 85, color: "#646cff" },
  { name: "Git", category: "Tools", level: 90, color: "#f54d27" },
  { name: "Figma", category: "Tools", level: 70, color: "#f24e1e" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured store with payment integration",
    tech: ["React", "Node", "MongoDB"],
    github: "#",
    live: "#",
    category: "Web",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Fitness Tracker App",
    description: "Mobile-first workout planning and tracking tool.",
    tech: ["React Native", "Firebase", "Redux"],
    github: "#",
    live: "#",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1526502900305-bd84ec4e3d16?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AI Content Generator",
    description: "Generates high-quality blog posts using GPT-4 API.",
    tech: ["Python", "OpenAI API", "React"],
    github: "#",
    live: "#",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking and portfolio analysis.",
    tech: ["React", "Chart.js", "Web3"],
    github: "#",
    live: "#",
    category: "Web",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates.",
    tech: ["React", "Express", "PostgreSQL"],
    github: "#",
    live: "#",
    category: "Web",
    image: "https://images.unsplash.com/photo-1507925922837-326f46a5c1f1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and virtual tour booking system.",
    tech: ["Next.js", "Prisma", "Tailwind"],
    github: "#",
    live: "#",
    category: "Web",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
  },
];

export const mcaJourney = [
  { period: "1st Year, 2023", title: "Foundations", highlights: ["C++ Programming", "Data Structures", "Web Basics"] },
  { period: "2nd Year, 2024", title: "Specialization", highlights: ["React JS", "Node.js", "Database Systems"] },
  { period: "3rd Year, 2025", title: "Mastery", highlights: ["Cloud Computing", "AI/ML", "Capstone Project"] },
];

export const certifications = [
  { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: 2024, credentialUrl: "#" },
];

// ── OBSERVER DATA ─────────────────────────────────────────
export const photographs = [
  {
    title: "Mountain at Dusk",
    category: "Landscape",
    gradient: "linear-gradient(135deg, #2c1810, #8b4513, #d4783a)",
    span: "col-span-2",
  },
  {
    title: "Golden Portrait",
    category: "Portrait",
    gradient: "linear-gradient(180deg, #1a0f05, #8b6914, #d4a017)",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Urban Waterfall",
    category: "Cityscape",
    gradient: "linear-gradient(135deg, #051923, #006494, #247ba0)",
    span: "col-span-1",
  },
  {
    title: "Street Shadows",
    category: "Street",
    gradient: "linear-gradient(135deg, #1a1a1a, #333333, #666666)",
    span: "col-span-2",
  },
  {
    title: "Wildlife Silence",
    category: "Wildlife",
    gradient: "linear-gradient(135deg, #2e3b32, #4a5d23, #8f9779)",
    span: "col-span-1",
  },
];

export const blogPosts = [
  {
    title: "Chasing the Golden Hour",
    excerpt: "Tips and tricks for capturing the perfect warm light...",
    category: "Photography",
    date: "2025-03-10",
    readTime: 5,
  },
  {
    title: "Urban Exploration Photography",
    excerpt: "How to find beauty in concrete jungles and abandoned spaces.",
    category: "Editorial",
    date: "2025-02-15",
    readTime: 7,
  },
];

// ── NARRATOR DATA ─────────────────────────────────────────
export const writingWork = [
  { title: "Content Writer", platform: "Medium", period: "2023 - Present" },
  { title: "Technical Blogger", platform: "Dev.to", period: "2022 - Present" },
  { title: "Short Story Author", platform: "Self-published", period: "2021 - Present" },
];

export const stories = [
  {
    title: "The Last Algorithm",
    genre: "Sci-Fi",
    excerpt: "A world where code dreams...",
    readTime: 8,
    slug: "last-algorithm",
    date: "Dec 10, 2024",
  },
  {
    title: "Echoes of the Web",
    genre: "Tech-Thriller",
    excerpt: "An abandoned forum holds secrets...",
    readTime: 12,
    slug: "echoes-web",
    date: "Jan 15, 2025",
  },
  {
    title: "Pixel Perfect",
    genre: "Creative Non-Fiction",
    excerpt: "My journey through CSS art and design.",
    readTime: 5,
    slug: "pixel-perfect",
    date: "Feb 20, 2025",
  },
];

export const contentTools = [
  { name: "Notion", icon: "N", color: "#fff" },
  { name: "WordPress", icon: "W", color: "#21759b" },
  { name: "Canva", icon: "C", color: "#00c4cc" },
  { name: "Grammarly", icon: "G", color: "#15c39a" },
  { name: "Lightroom", icon: "Lr", color: "#001e36" },
  { name: "Capcut", icon: "CC", color: "#000" },
];
