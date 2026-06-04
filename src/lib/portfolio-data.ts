import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export const profile = {
  name: "Alex Rahman",
  title: "Front-End Developer & Software Engineer",
  intro:
    "I craft fast, accessible, and beautifully animated web experiences. Specialized in React, Next.js, and TypeScript — turning complex problems into elegant interfaces used by thousands.",
  email: "hello@alexrahman.dev",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  resumeUrl: "#",
  socials: [
    { label: "GitHub", href: "https://github.com", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { label: "Facebook", href: "https://facebook.com", icon: Facebook },
    { label: "Email", href: "mailto:hello@alexrahman.dev", icon: Mail },
  ],
};

export const techStack = {
  Frontend: [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "React", "Next.js", "Tailwind CSS", "Redux",
  ],
  Backend: ["Node.js", "Express.js", "MongoDB", "Firebase"],
  Tools: ["Git", "GitHub", "VS Code", "Figma"],
};

export const experience = [
  {
    company: "Linear Labs",
    position: "Senior Front-End Engineer",
    duration: "2023 — Present",
    achievements: [
      "Led the redesign of the dashboard, improving Lighthouse score from 62 → 98.",
      "Built a reusable design system adopted across 6 product teams.",
      "Mentored 4 junior engineers and ran weekly architecture reviews.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "tRPC"],
  },
  {
    company: "Stripeline",
    position: "Front-End Developer",
    duration: "2021 — 2023",
    achievements: [
      "Shipped checkout flow used by 200k+ monthly users.",
      "Reduced bundle size by 38% through code-splitting and lazy loading.",
      "Introduced E2E testing with Playwright, cutting regressions by 70%.",
    ],
    tech: ["React", "Redux", "Node.js", "GraphQL"],
  },
  {
    company: "Pixelcraft Studio",
    position: "Junior Web Developer",
    duration: "2020 — 2021",
    achievements: [
      "Delivered 20+ client websites with custom CMS integrations.",
      "Implemented animation system reused across all projects.",
    ],
    tech: ["JavaScript", "Firebase", "GSAP"],
  },
];

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product filtering, shopping cart, payment integration, and admin dashboard. Built with Next.js and TypeScript for optimal performance.",
    image: project1,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Includes dark mode and responsive design.",
    image: project2,
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation with templates",
    image: project3,
    tech: ["Next.js", "OpenAI API", "TypeScript"],
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics with data visualization",
    image: project1,
    tech: ["React", "Chart.js"],
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Social Media App",
    description: "Social networking platform with real-time features",
    image: project2,
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Design System",
    description: "Comprehensive design system with 100+ components",
    image: project3,
    tech: ["React", "Storybook", "Tailwind CSS"],
    demo: "#",
    github: "#",
    featured: false,
  },

];

export const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of California, Berkeley",
    duration: "2016 — 2020",
    coursework: ["Algorithms", "Distributed Systems", "Human-Computer Interaction", "Machine Learning"],
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Lambda School",
    duration: "2020",
    coursework: ["React", "Node.js", "System Design", "Agile"],
  },
];

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 60, suffix: "+" },
  { label: "Technologies Used", value: 25, suffix: "" },
  { label: "Problems Solved", value: 800, suffix: "+" },
];
