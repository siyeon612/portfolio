import type { Visibility } from "@/lib/projectStyles";

export type Project = {
  name: string;
  image: string;
  slug: string;
  description: string;
  overview: string;
  visibility: Visibility;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Modun Medical",
    image: "/images/projects/modun-medical.png",
    slug: "modun-medical",
    description:
      "A healthcare ordering platform built around real medical distribution workflows.",
    overview:
      "Modun Medical is a full-stack healthcare ordering platform designed from real operational problems in a medical device distribution business. It simplifies hospital-specific product access, pricing, patient orders, and cart management.",
    visibility: "Private",
    technologies: ["Next.js", "React", "Node.js", "MySQL"],
    features: [
      "Hospital-specific product visibility and pricing",
      "Patient ordering and cart management",
      "Responsive interfaces for caregivers and hospital users",
      "REST API integration with a relational database",
    ],
    githubUrl: "https://github.com/siyeon612/Modun-Medical",
  },
  {
    name: "AI MCQ Generator",
    image: "/images/projects/ai-mcq-generator.png",
    slug: "ai-mcq-generator",
    description:
      "An AI-powered pipeline for generating and evaluating educational multiple-choice questions.",
    overview:
      "This university honours project transformed lecture slides and transcripts into structured glossary entries and multiple-choice questions. GPT-4o generated content, while Gemini 2.5 evaluated question quality across prompt versions.",
    visibility: "Research",
    technologies: ["Python", "GPT-4o", "Gemini 2.5", "JSON"],
    features: [
      "Lecture slide and transcript processing",
      "Automated glossary and MCQ generation",
      "Prompt version comparison using shared datasets",
      "AI-based evaluation and cross-validation workflow",
    ],
  },
  {
    name: "Portfolio",
    image: "/images/projects/portfolio.png",
    slug: "portfolio",
    description:
      "A GitHub-inspired portfolio for presenting my experience and technical work.",
    overview:
      "A responsive portfolio website designed around GitHub repositories and README pages. It presents projects, experience, and skills through a consistent developer-focused interface.",
    visibility: "Public",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "GitHub-inspired repository interface",
      "Responsive desktop and mobile layouts",
      "Custom animated cursor",
      "Interactive project detail panels",
    ],
    githubUrl: "https://github.com/siyeon612/portfolio",
  },
  {
    name: "Test Automation",
    image: "/images/projects/test-automation.png",
    slug: "test-automation",
    description:
      "Reusable automation patterns developed through commercial software testing experience.",
    overview:
      "A collection of reusable Katalon automation approaches created while testing commercial web software. The work includes dynamic table interaction, permission validation, reusable form helpers, and regression workflows.",
    visibility: "Commercial",
    technologies: ["Katalon", "Groovy", "Selenium"],
    features: [
      "Reusable table and form interaction helpers",
      "Role and permission testing",
      "Dynamic date and time validation",
      "Regression workflows for commercial applications",
    ],
  },
];