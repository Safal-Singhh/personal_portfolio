import { Github, Linkedin, Twitter } from "lucide-react";

export const personalInfo = {
  name: "Safal Singh",
  role: "Frontend Developer",
  bio: "Hey, I’m Safal — a frontend developer who loves turning ideas into interactive digital experiences. I’m currently diving deep into the MERN stack to master full-stack development and sharpen my problem-solving edge through Data Structures and Algorithms. Always curious, always building. 🚀",
  email: "safalsingh999@gmail.com",
  location: "Asia/Delhi",
};

export const projects = [
  { id: 1, link: "https://ai-resumee-analyzerr.vercel.app" },
  { id: 2, link: "https://github-repo-analyzerr.vercel.app" },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/safal-singhh",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/safal-singh",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://x.com/Safal_singh_",
    color: "hover:text-sky-400",
  },
  // {
  //   name: "Leetcode",
  //   icon: Leetcode,
  //   link: "#",
  //   color: "hover:text-red-400",
  // },
];

// export const experiences = [
//   {
//     title: "Frontend Developer",
//     company: "Freelance",
//     period: "2023 — Present",
//     desc: "Building fast, accessible, and visually engaging web apps using React, Next.js, and Tailwind CSS. Collaborating with clients to turn design ideas into responsive, high-performance websites.",
//     color: "violet",
//   },
//   {
//     title: "Web Developer Intern",
//     company: "Freelance",
//     period: "2021 — 2023",
//     desc: "Developed internal dashboards and small-scale SaaS tools with React and Node.js. Improved UI performance and introduced reusable component systems for faster development.",
//     color: "cyan",
//   },
//   {
//     title: "UI/UX Designer",
//     company: "Freelance",
//     period: "2019 — 2021",
//     desc: "Designed intuitive, minimal interfaces with a focus on motion and user experience. Helped startups and small businesses bring their brand and web presence to life.",
//     color: "pink",
//   },
// ];

export const tools = [
  "VS Code – Code Editor",
  "Tailwind CSS - Modern Utility-First Styling",
  "Puter.js - Free, Serverless Cloud and AI",
  "Git & GitHub – Version Control",
  "Vercel / Netlify - Deployment",
];

export const goals = [
  "Mastering the MERN Stack",
  "Sharpening problem-solving with DSA",
  "Getting a strong start in my career journey",
  "Building a strong personal brand and portfolio",
];

// export const achievements = [
//   {
//     title: "Projects Completed",
//     value: "50+",
//     desc: "Developed 50+ interactive motion and web projects for enterprise clients.",
//     color: "yellow",
//   },
//   {
//     title: "Open Source Contributions",
//     value: "1.2k+",
//     desc: "Contributed to popular open-source projects, including motion and UI libraries.",
//     color: "cyan",
//   },
//   {
//     title: "Speaker Engagements",
//     value: "10+",
//     desc: "Presented at international conferences like Adobe MAX and UXDX.",
//     color: "pink",
//   },
//   {
//     title: "Awards & Recognition",
//     value: "5",
//     desc: "Won multiple awards for innovative motion design and interactive experiences.",
//     color: "violet",
//   },
// ];

export const skills = [
  {
    category: "Programming Languages",
    skills: ["C++", "JavaScript"],
  },
  {
    category: "Frontend",
    skills: [
      "React / Next.js",
      "Tailwind CSS / CSS Animations",
      "Framer Motion",
      "HTML / CSS / JS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Data Structures and Algorithms",
    skills: [
      "Arrays",
      "Strings",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Binary Trees / Binary Search Trees",
    ],
  },
];

export const certificates = [
  "ReactJS: Infosys Springboard",
  "GenAI in Data Analytics: Meta",
  "Networking Essentials: Cisco Networking Academy",
  "Exploring Networking with Cisco Packet Tracer",
];
export const education = [
  {
    year: "2023 - 2027",
    degree: "Bachelor’s Degree",
    institution: "Noida Institute of Engineering and Technology",
    cgpa: "8.82",
  },
  {
    year: "2022",
    degree: "Class 12th",
    institution: "BSS Education Centre, Kakadeo, Kanpur",
    percentage: "89.83%",
  },
  {
    year: "2020",
    degree: "Class 10th",
    institution: "BSS Education Centre, Kakadeo, Kanpur",
    percentage: "88.66%",
  },
];

export const animatedBlobs = [
  {
    className:
      "top-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 opacity-40 blur-[180px]",
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360],
    },
    duration: 20,
  },
  {
    className:
      "bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-600 opacity-50 blur-[160px]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 90, -70, 0],
      scale: [1, 0.85, 1.15, 1],
      rotate: [360, 270, 180, 0],
    },
    duration: 25,
  },
  {
    className:
      "top-[10%] left-[80%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-35 blur-[200px]",
    animate: {
      x: [0, 80, -120, 0],
      y: [0, -60, 80, 0],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, -90, -180, -360],
    },
    duration: 22,
  },
  {
    className:
      "top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500 via-teal-500 to-cyan-600 opacity-30 blur-[190px]",
    animate: {
      x: [0, -70, 110, 0],
      y: [0, 100, -50, 0],
      scale: [1, 0.9, 1.2, 1],
      rotate: [0, 120, 240, 360],
    },
    duration: 18,
  },
  {
    className:
      "bottom-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500 via-yellow-500 to-lime-500 opacity-25 blur-[210px]",
    animate: {
      x: [0, 130, -90, 0],
      y: [0, -70, 90, 0],
      scale: [1, 1.15, 0.88, 1],
      rotate: [0, -120, -240, -360],
    },
    duration: 28,
  },
];
