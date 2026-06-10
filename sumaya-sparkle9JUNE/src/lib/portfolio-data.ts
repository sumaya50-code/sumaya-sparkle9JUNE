export const stats = [
  { label: "Years of Experience", value: "02+" },
  { label: "Completed Projects", value: "40+" },
  { label: "Companies Worked", value: "3+" },
];

export type Skill = { name: string; level: "Advanced" | "Intermediate" };

export const backendSkills: Skill[] = [
  { name: "PHP", level: "Advanced" },
  { name: "Laravel Framework", level: "Advanced" },
  { name: "NodeJS", level: "Advanced" },
  { name: "RESTful API Development", level: "Advanced" },
  { name: "FastAPI", level: "Advanced" },
  { name: "API Integration", level: "Advanced" },
  { name: "MVC Architecture", level: "Advanced" },
  { name: "Backend System Design", level: "Advanced" },
  { name: "Authentication & Authorization", level: "Advanced" },
  { name: "SEO Implementation", level: "Advanced" },
  { name: "Django", level: "Intermediate" },
];

export const frontendSkills: Skill[] = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Vue.js", level: "Advanced" },
  { name: "Bootstrap", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "AJAX", level: "Advanced" },
  { name: "Figma", level: "Advanced" },
  {name: "Axios", level: "Advanced" },
  {name: "Fetch API", level: "Advanced" },
  {name: "Context API", level: "Advanced" },
  {name: "Redux", level: "Advanced" },

];

export const databaseSkills: Skill[] = [
  { name: "MySQL", level: "Advanced" },
  { name: "PostgreSQL", level: "Advanced" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Database Design", level: "Advanced" },
  { name: "Query Optimization", level: "Advanced" },
  { name: "Data Management", level: "Advanced" },
  { name: "LocalWP", level: "Advanced" },
];

export const paymentSkills: Skill[] = [
  { name: "SSLCommerz", level: "Advanced" },
  { name: "PayPal", level: "Advanced" },
];

export const toolsSkills: Skill[] = [
  { name: "Git", level: "Advanced" },
  { name: "GitHub", level: "Advanced" },
  { name: "Postman", level: "Advanced" },
  { name: "Google Maps API", level: "Intermediate" },
  { name: "VS Code", level: "Advanced" },
  { name: "cPanel", level: "Advanced" },
  { name: "Cursor", level: "Advanced" },
  { name: "GitHub Copilot", level: "Advanced" },
  { name: "Perplexity", level: "Advanced" },
  { name: "Framer Motion", level: "Advanced" },
  
  
];

export const education = [
  {
    title: "B.Sc. in Computer Science and Engineering",
    place: "International University of Business Agriculture and Technology (IUBAT)",
    period: "2020 – 2024",
    detail: "CGPA: 3.53 / 4.00",
  },
  {
    title: "Diploma in Computer Science",
    place: "Patuakhali Polytechnic Institute",
    period: "2020",
    detail: "CGPA: 3.51 / 4.00",
  },
  {
    title: "Secondary School Certificate",
    place: "Subidkhali Govt Rahman Ishaque Pilot High School",
    period: "2015",
    detail: "GPA: 4.61 / 5.00",
  },
];

export const work = [
  {
    title: "Software Engineer (Backend Developer)",
    place: "Time Research & Innovation",
    period: "Nov 2025 – Present",
    detail:
      "Building and maintaining scalable Laravel/PHP backends, REST APIs, and React UIs. Managing cPanel hosting, domains, SSL, DNS, backups, and SEO across production systems.",
  },
  {
    title: "IT Admin Officer",
    place: "Zone Sparks Limited",
    period: "Dec 2024 – Nov 2025",
    detail:
      "Maintained IT infrastructure, networks, servers, and user systems. Managed domain, hosting, email, courier-integrated order fulfillment, video ad production, backups, cybersecurity, and vendor coordination.",
  },
  {
    title: "PHP Web Developer (Intern)",
    place: "BARCODETECH AUTOMATION",
    period: "Feb 2024 – May 2024",
    detail:
      "Built and maintained PHP web applications, implemented responsive cross-browser UIs, and participated in code reviews with cross-functional teams.",
  },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, accessible, and visually polished interfaces with React, Tailwind, and modern tooling — pixel-perfect and seamlessly interactive.",
    points: ["React & Tailwind", "Responsive design", "UI/UX from Figma"],
  },
  {
    title: "Backend Development",
    description:
      "Building robust, scalable server-side systems with Laravel, PHP, and Node.js — REST APIs, database design, authentication, and performance.",
    points: ["Laravel & PHP", "REST APIs", "MySQL & MongoDB"],
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "End-to-end product delivery — from data modeling to deployment. Management systems, e-commerce, and dashboards built to last.",
    points: ["Architecture", "Auth & roles", "Deployment"],
  },
];

export type Project = {
  title: string;
  category:
    | "Management"
    | "E-commerce"
    | "Portfolio"
    | "Apps"
    | "Educations"
    | "Career & Productivity";
  tags: string[];
  image?: string;
};

export const projects: Project[] = [
  { title: "3D Portfolio Website", category: "Portfolio", tags: ["React.js", "Styled-components", "HTML"] ,image: "3d-portfolio.png"},
  { title: "Personal Portfolio Website", category: "Portfolio", tags: ["HTML", "CSS", "JavaScript"] ,image: "personal-portfolio.png"},
  { title: "Document Management System (DMS)", category: "Management", tags: ["Laravel 11", "PHP", "MySQL", "Bootstrap"], image: "document_management.png" },
  { title: "Hotel Booking System (Labish)", category: "Management", tags: ["Laravel 11", "PHP", "MySQL", "JS"], image: "Hotel management.jpg" },
  {
    title: "Modern E-Commerce Frontend System",
    category: "E-commerce",
    tags: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Context API",
      "JSON Server",
      "Framer Motion",
    ],
    image: "ecommerce-frontend.png",
  },
  {
    title: "E-Commerce — Furnifrenzy",
    category: "E-commerce",
    tags: ["PHP", "MySQL", "Bootstrap", "JS"],
    image: "ecommerce_furniture.jpg",
  },
  {
    title: "E-Commerce — Food",
    category: "E-commerce",
    tags: ["Laravel 11", "PHP", "MySQL", "Bootstrap", "JS", "Stripe"],
    image: "ecommerce_food.png",
  },

  { title: "GitHub Profiles Search App", category: "Apps", tags: ["JavaScript", "Fetch API", "CSS"], image: "GitHub Profiles.jpg" },
  { title: "English Dictionary App", category: "Apps", tags: ["JavaScript", "Fetch API", "CSS"], image: "English Dictionary.png" },
  { title: "Food Search App", category: "Apps", tags: ["React.js", "Styled-components", "Fetch API"], image: "Food Search App.jpg" },
  { title: "Currency Converter", category: "Apps", tags: ["JavaScript", "Fetch API", "CSS"], image: "Currency Converter.png" },
  { title: "Countdown Timer", category: "Apps", tags: ["JavaScript", "CSS", "HTML"], image: "Countdown Timer.png" },
 

  // Education-related (added for the “Educations” filter)
 

  {
    title: "Shomiti Management System",
    category: "Management",
    tags: ["Laravel 11", "PHP 8.2", "MySQL", "Bootstrap 5", "JavaScript", "Node.js", "Composer", "Authentication", "Role Management", "Responsive Design"],
    image: "shomiti-management-system.png",
  },
  {
    title: "AI Resume Builder",
    category: "Career & Productivity",
    tags: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "AI Integration",
      "PDF Export",
      "ATS Optimization",
      "TanStack Router",
    ],
    image: "Resumebuilder.png",
  },
  {
    title: "SmartMeal Backend API",
    category: "Management",
    tags: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Swagger API",
      "REST API",
      "SQLAlchemy",
    ],
    image: "SmartMeal.png",
  },
  {
    title: "LearnHub — Online Learning Platform",
    category: "Educations",
    tags: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "JWT Auth",
      "Stripe",
      "Context API",
      "TanStack Query",
      "Framer Motion",
    ],
    image: "learnHub.png",
  },
  {
    title: "MediCore — Full-Stack Hospital Management System",
    category: "Management",
    tags: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel 12",
      "JWT Auth",
      "PostgreSQL",
      "OpenAI",
    ],
  },
  {
    title: "SwapHub — Value Exchange Marketplace",
    category: "E-commerce",
    tags: ["React", "TypeScript", "Tailwind CSS", "Marketplace"],
  },
  {
    title: "HireFlow — AI-powered Applicant Tracking System",
    category: "Career & Productivity",
    tags: [
      "React 19",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "JWT Auth",
      "WebSocket",
      "SSE",
      "Celery",
      "Tailwind CSS",
      "OpenAI",
    ],
  },



  
];

export const testimonials = [
  {
    quote:
      "Sumaya delivered an exceptional application for our business. Her attention to detail, creative solutions, and commitment to deadlines made the process seamless and enjoyable.",
    name: "Emily Grace",
    role: "CEO, Tech Corp",
  },
  {
    quote:
      "I was amazed by Sumaya's ability to translate complex ideas into a functional and beautiful product. Her dedication and professionalism throughout were truly impressive.",
    name: "David Brooks",
    role: "Entrepreneur",
  },
  {
    quote:
      "Collaborating with Sumaya was fantastic. Her expertise in full-stack development helped us launch our platform on time with clear communication every step of the way.",
    name: "Sophia Anderson",
    role: "Project Manager, Digital Startups",
  },
];
