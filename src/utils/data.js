import { BookOpen, BriefcaseBusinessIcon, Cloud, Code2, Coffee, Database, GraduationCapIcon, Heart, Mail, MapPin, RocketIcon, Server, Users2 } from 'lucide-react'
import PROJECT_IMG_1 from '../assets/project1.jpeg'
import PROJECT_IMG_2 from '../assets/project2.jpeg'
import PROJECT_IMG_3 from '../assets/project3.jpeg'
import PROJECT_IMG_4 from '../assets/project4.jpeg'
import PROJECT_IMG_5 from '../assets/project5.jpeg'
import PROJECT_IMG_6 from '../assets/project6.jpeg'
import { col, title } from 'framer-motion/client'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            {name: "React", level: 95, color: "bg-green-500"},
            {name: "TypeScript", level: 80, color: "bg-blue-600"},
            {name: "Next.js", level: 83, color: "bg-orange-500"},
            {name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},
            {name: "ShadCN UI", level: 90, color: "bg-pink-500"}
        ]
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            {name: "Node.js", level: 95, color: "bg-purple-500"},
            {name: "Express.js", level: 93, color: "bg-cyan-600"},
            {name: "REST APIs", level: 90, color: "bg-pink-500"},
            {name: "JWT", level: 92, color: "bg-blue-500"},
            {name: "Multer", level: 90, color: "bg-green-600"}
        ]
    },
    {
        title: "Database",
        icon: Database,
        description: "Managing and optimizing data storage",
        skills: [
            {name: "MongoDB", level: 95, color: "bg-pink-500"},
            {name: "PostgreSQL", level: 90, color: "bg-blue-600"},
            {name: "MySQL", level: 92, color: "bg-purple-500"},
            {name: "Prisma", level: 85, color: "bg-orange-500"},
            {name: "Supabase", level: 86, color: "bg-cyan-500"}
        ]
    },
    {
        title: "Devops",
        icon: Cloud,
        description: "Deploying and scaling applications",
        skills: [
            {name: "AWS", level: 80, color: "bg-orange-500"},
            {name: "Docker", level: 85, color: "bg-blue-500"},
            {name: "Vercel", level: 90, color: "bg-pink-500"},
            {name: "Git", level: 95, color: "bg-green-500"},
            {name: "CI/CD", level: 80, color: "bg-cyan-500"}
        ]
    },
];

export const TECH_STACK = [
    "Javascript",
    "HTML5",
    "CSS3",
    "Vite",
    "Framer Motion",
    "Redux Toolkit",
    "NeonDB",
    "Postman",
    "Figma",
    "Clerk"
];

export const STATS = [
    {number: "10+", label: "Projects Completed"},
    {number: "2+", label: "Years Experience Building Full Stack Applications"},
    {number: "20+", label: "Technologies"},
];

export const PROJECTS = [
    {
        id: 1,
        title: "Zapp AI",
        description: "ZAPP-AI is an AI-powered SaaS platform offering tools to generate content, edit images, and review resumes with secure authentication and subscription management via Clerk.",
        image: PROJECT_IMG_1,
        tags: ["React.js","PostgreSQL","Gemini API"],
        liveUrl: "https://zapp-ai-zeta.vercel.app/ai",
        githubUrl: "https://github.com/lipika1911/ZappAI",
        featured: true,
        category: "AI + Full Stack",
    },
    {
        id: 2,
        title: "Commun",
        description: "Commun is a modern social media app where users can share posts with images, follow others, like and comment, and receive notifications — all built with Next.js, Clerk, Prisma, and Tailwind CSS.",
        image: PROJECT_IMG_2,
        tags: ["Next.js","ShadCN","PostgreSQL","Prisma"],
        liveUrl: "https://commun-social.vercel.app/",
        githubUrl: "https://github.com/lipika1911/Commun",
        featured: true,
        category: "Modern Full Stack",
    },
    {
        id: 3,
        title: "Bloggr",
        description: "Bloggr is an AI-powered blogging platform where users can write, manage, and publish blogs, generate content using AI, and engage through comments — all built with the MERN stack and modern tooling.",
        image: PROJECT_IMG_3,
        tags: ["React","MongoDB","Gemini API", "Node.js"],
        liveUrl: "https://bloggr-hub.vercel.app/",
        githubUrl: "https://github.com/lipika1911/bloggr",
        featured: true,
        category: "AI + Mern Stack",
    },
    {
        id: 4,
        title: "Modern Landing Page",
        description: "A sleek and responsive landing page built using v0.dev’s AI-powered interface and Vercel’s fast hosting, automatically synced for a smooth, hassle-free development workflow.",
        image: PROJECT_IMG_4,
        tags: ["Next.js", "Vibe Coding"],
        liveUrl: "https://v0-modern-landing-page-design-eight-wheat.vercel.app/",
        githubUrl: "https://github.com/lipika1911/modern-landing-page",
        featured: false,
        category: "Vibe Coding",
    },
    {
        id: 5,
        title: "Mini-Link",
        description: "Mini-Link is a URL shortener app that lets you create short links, generate QR codes, and track real-time analytics like clicks, device types, and locations.Built using React + Vite, Supabase, and Tailwind CSS",
        image: PROJECT_IMG_5,
        tags: ["React","Supabase","Tailwind CSS"],
        liveUrl: "https://miny-link.vercel.app/",
        githubUrl: "https://github.com/lipika1911/mini-link",
        featured: false,
        category: "React+Supabase",
    },
    {
        id: 6,
        title: "Mini Web Projects",
        description: "A collection of simple and beginner-friendly HTML, CSS, and JavaScript projects to strengthen frontend development skills. Perfect for practicing fundamentals and building a solid foundation in web development.",
        image: PROJECT_IMG_6,
        tags: ["HTML", "CSS", "Javascript"],
        liveUrl: "https://lipika1911.github.io/mini-web-projects/",
        githubUrl: "https://github.com/lipika1911/mini-web-projects",
        featured: false,
        category: "Basics",
    },
]

export const JOURNEY_STEPS = [
  {
    id: 1,
    year: "2021",
    title: "B.Tech in Information Technology",
    company: "Maharaja Surajmal Institute of Technology",
    description: "Started undergraduate studies in Information Technology. Built a strong foundation in programming, data structures, and core computer science subjects.",
    icon: GraduationCapIcon,
    color: "bg-blue-500",
  },
  {
    id: 2,
    year: "2023",
    title: "Event Manager - TEDxMSIT",
    company: "TEDx Maharaja Surajmal Institute of Technology",
    description: "Organized the first TEDx event post-COVID, collaborating with 50+ members to coordinate speakers, logistics, and event execution.",
    icon: Users2,
    color: "bg-pink-500",
  },
  {
    id: 3,
    year: "2024",
    title: "Student Organiser - International Conference on AI & Applications",
    company: "Maharaja Surajmal Institute of Technology",
    description: "Managed paper presentations in the sessions committee and coordinated technical support as part of the stage committee.",
    icon: Users2,
    color: "bg-green-500",
  },
  {
    id: 4,
    year: "2024",
    title: "IT Intern",
    company: "Food Safety and Standards Authority of India",
    description: "Developed UI components for FSSAI portals using React.js & Tailwind CSS, optimized event timelines, and improved accessibility with interactive features.",
    icon: BriefcaseBusinessIcon,
    color: "bg-yellow-500",
  },
  {
    id: 5,
    year: "2025",
    title: "Completed Graduation - B.Tech IT",
    company: "Maharaja Surajmal Institute of Technology",
    description: "Graduated with a CGPA of 8.3, completing a four-year degree in Information Technology with strong academic and project experience.",
    icon: GraduationCapIcon,
    color: "bg-indigo-500",
  },
  {
    id: 6,
    year: "2025",
    title: "Project Launches",
    company: "Personal Development",
    description: "Built multiple full-stack projects including Commun, ZAPP-AI, and Bloggr using modern frameworks and AI integrations.",
    icon: RocketIcon,
    color: "bg-purple-500",
  },
];


export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning Complex challenges into elegant solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices",
    }
]

export const SOCIAL_LINKS = [
    {
        name: "Github",
        icon: FiGithub,
        url: "https://github.com/lipika1911",
        color: "hover:text-purple-400",
        bgColor: "hover:bg-purple-500/10"
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/lipika-arya-a6767824b/",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10"
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:lipikaarya1723@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10"
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Delhi, India"
    },
    {
        icon: Mail,
        label: "Email",
        value: "lipikaarya1723@gmail.com"
    },
]

