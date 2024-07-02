import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";

import forkifyApp from "@/public/forkifyApp.png";
import natoursApp from "@/public/natoursApp.png";
import NatoursCSS from "@/public/NatoursCSS.png";
import nexterApp from "@/public/nexterApp.png";
import trilloApp from "@/public/trilloApp.png";
import wildOasis from "@/public/wildOasis.png";
import spotifyClone from "@/public/spotifyClone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "DevOps Engineer",
    location: "Deutsche Telekom",
    description:
      "Currently working as a DevOps Engineer at Deutsche Telekom, focusing on Azure and GitLab CI/CD pipelines for LLM's chatbots.",
    icon: React.createElement(GrWorkshop),
    date: "Jul 2024 - present",
  },
  {
    title: "DevOps Engineer",
    location: "Future Space S.A",
    description:
      "Worked as a SysAdmin with Linux, Acronis, Azure services, Nginx, Jenkins, and Ansible.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Jun 2024",
  },
  {
    title: "SysAdmin | Cybersecurity Content Creator",
    location: "Seville, Spain",
    description:
      "Internship for 6 months. I worked as a SysAdmin and Cybersecurity Content Creator. I created content for several company's courses.",
    icon: React.createElement(GrWorkshop),
    date: "2023",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "I've been working as a freelance developer for 3 years. I've worked with React, Next.js, TypeScript, Tailwind, Prisma, MongoDB, and more.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;


export const projectsData = [
  {
    title: "Spotify Clone",
    description:
      "A Spotify clone with features like authentication, search, playlists, and more.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Supabase"],
    imageUrl: spotifyClone,
    url: "https://spotify-clone-three-silk.vercel.app/",
  },
  {
    title: "The Wild Oasis",
    description:
      "All-in-one solution for managing cabin check-ins, check-outs, user management, bookings, and more.",
    tags: [
      "React",
      "Supabase",
      "Redux",
      "R.Router",
      "R.Hook Form",
      "R.Query",
      "Auth",
      "Recharts",
    ],
    imageUrl: wildOasis,
    url: "https://the-wild-oasis-kappa-sepia.vercel.app/",
  },
  {
    title: "Natours",
    description:
      "Fully functional app consisting on booking different tours, where users can log in, create reviews on tours, make payments, etc.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Pug templates"],
    imageUrl: natoursApp,
    url: "https://natours-057d.onrender.com/",
  },
  {
    title: "Natours CSS",
    description:
      "Advanced CSS techniques for the frontend of the Natours project. Complex animations, CSS popups, responsive images, etc.",
    tags: ["CSS Grid", "CSS Flexbox", "SASS", "Responsive Design"],
    imageUrl: NatoursCSS,
    url: "https://gabri-natours-app.netlify.app/",
  },
  {
    title: "Trillo App",
    description:
      "Advanced CSS techniques for an app consisting hotel bookings. Built mainly using CSS Flexbox.",
    tags: ["CSS Grid", "CSS Flexbox", "SASS", "Responsive Design"],
    imageUrl: trilloApp,
    url: "https://gabri-trillo-app.netlify.app/",
  },
  {
    title: "Nexter App",
    description:
      "Advanced CSS techniques for an app consisting on luxury homes rental. Built mainly using CSS Grid.",
    tags: ["CSS Grid", "CSS Flexbox", "SASS", "Responsive Design"],
    imageUrl: nexterApp,
    url: "https://gabri-nexter-app.netlify.app/",
  },
  {
    title: "Forkify App",
    description:
      "Modern JavaScript app for searching and creating recipes. Built using the MVC architecture.",
    tags: [
      "MVC",
      "OOP",
      "Geolocation",
      "Leaflet",
      "Async/Await",
      "Error Handling",
    ],
    imageUrl: forkifyApp,
    url: "https://forkify-gabrielrm.netlify.app/",
  },
] as const;

export const skillsData = [
  { name: "HTML", image: "/icons/HTML.svg" },
  { name: "CSS", image: "/icons/CSS.svg" },
  { name: "JavaScript", image: "/icons/JavaScript.svg" },
  { name: "TypeScript", image: "/icons/TypeScript.svg" },
  { name: "React", image: "/icons/React-Light.svg" },
  { name: "Next.js", image: "/icons/NextJS-Light.svg" },
  { name: "Node.js", image: "/icons/NodeJS-Light.svg" },
  { name: "Git", image: "/icons/Git.svg" },
  { name: "Tailwind", image: "/icons/TailwindCSS-Light.svg" },
  { name: "MongoDB", image: "/icons/MongoDB.svg" },
  { name: "Redux", image: "/icons/Redux.svg" },
  { name: "Express", image: "/icons/ExpressJS-Light.svg" },
  { name: "PostgreSQL", image: "/icons/PostgreSQL-Light.svg" },
  { name: "Python", image: "/icons/Python-Light.svg" },
  { name: "Django", image: "/icons/Django.svg" },

  { name: "Supabase", image: "/icons/Supabase-Light.svg" },
  { name: "R", image: "/icons/R-Light.svg" },
] as const;
