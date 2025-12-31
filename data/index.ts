import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Creative stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Creative designer with a passion for visual storytelling.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Passionate about bringing visuals to life through motion.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/image/new5.webp",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Toyota Supra – Automotive Poster",
    des: "High-impact automotive poster designed for social media marketing,focused on bold typography, color contrast, and visual storytelling.",
    img: "/image/new1.png",
    iconLists: ["/image/canva.png","/image/pre.png"],
    link: "https://www.canva.com/design/DAGt6HeaPJo/HmKNzk75rqrtmIUAN9XfWQ/view?utm_content=DAGt6HeaPJo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4c9e63d63a",
    sourceCode: "https://www.canva.com/design/DAGt6HeaPJo/HmKNzk75rqrtmIUAN9XfWQ/view?utm_content=DAGt6HeaPJo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4c9e63d63a",
  },
  {
    id: 2,
    title: "BMW M5 · Sheer Driving Pleasure",
    des: "A bold automotive poster celebrating BMW M5’s power and elegance through dramatic visuals, strong contrast, and expressive typography.",
    img: "/image/new2.png",
    iconLists: ["/image/canva.png","/image/pre.png"],
    link: "https://www.canva.com/design/DAGt6HeaPJo/HmKNzk75rqrtmIUAN9XfWQ/view?utm_content=DAGt6HeaPJo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4c9e63d63a",
    sourceCode: "https://www.canva.com/design/DAGt6HeaPJo/HmKNzk75rqrtmIUAN9XfWQ/view?utm_content=DAGt6HeaPJo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4c9e63d63a",
  },
  {
    id: 3,
    title: "Monkey D. Luffy · One Piece Fan Art",
    des: "High-impact fan art poster showcasing Monkey D. Luffy with a dark red aesthetic, dynamic motion, and powerful visual storytelling.",
    img: "/image/new3.png",
    iconLists: ["/image/canva.png","/image/pre.png"],
    link: "https://www.canva.com/design/DAGs9q8N5dE/oCWJtS-yp8JJJxzRkHOtgA/view?utm_content=DAGs9q8N5dE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc52474a498",
    sourceCode: "https://www.canva.com/design/DAGs9q8N5dE/oCWJtS-yp8JJJxzRkHOtgA/view?utm_content=DAGs9q8N5dE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc52474a498",
  },
  {
    id: 4,
    title: "Divine India — Mythology Travel Poster",
    des: "A vibrant poster celebrating India’s spiritual heritage and cultural landmarks through bold silhouettes, symbolic elements, and the tricolor-inspired palette.",
    img: "/image/new4.png",
    iconLists: ["/image/canva.png","/image/pre.png"],
    link: "https://www.canva.com/design/DAG9FqDkWP4/8QvPRqyev1q4AyugGWkTew/view?utm_content=DAG9FqDkWP4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he178112252",
    sourceCode: "https://www.canva.com/design/DAG9FqDkWP4/8QvPRqyev1q4AyugGWkTew/view?utm_content=DAG9FqDkWP4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he178112252",
  },
] as const;


export const workExperience = [
  {
    id: 1,
    title: "Graphic Designer Intern (Platoon Leader)",
    desc: "Started as a Graphic Designer Intern, creating impactful visual content and supporting multiple design projects. Quickly advanced to Assistant Squad Leader through strong performance and creative problem-solving. Later promoted to Platoon Leader, leading a team of interns, managing workflows, and ensuring timely, high-quality project delivery.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  }
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/sanidhyy",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanidhyy",
  },
] as const;

export const techStack = {
  stack1: ["Canva", "Adobe Photoshop", "Canva"],
  stack2: ["Figma", "Typography", "Brand Identity"],
} as const;

