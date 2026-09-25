export type TimelineTerm = {
  name: string;
  courses: string[];
};

export type TimelineEntry = {
  period: string;
  title: string;
  subtitle: string;
  terms: TimelineTerm[];
};

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  note: string;
  link: string;
};

export const educationTimeline: TimelineEntry[] = [
  {
    period: "2024 — 2025",
    title: "YEAR 1 — FOUNDATION",
    subtitle: "Bachelor of Computer Science — CADT",
    terms: [
      {
        name: "TERM 1",
        courses: [
          "Linear Algebra",
          "IT Essentials",
          "Algorithm & Computational Thinking I",
          "Visual Art",
          "Personal Development & Critical Thinking",
        ],
      },
      {
        name: "TERM 2",
        courses: [
          "Discrete Math",
          "Statistics & Probability",
          "Algorithm & Computational Thinking II",
          "CCNA",
          "Information Literacy",
        ],
      },
    ],
  },
  {
    period: "2025 — 2026",
    title: "YEAR 2 — CORE COMPUTING",
    subtitle: "Bachelor of Computer Science — CADT",
    terms: [
      {
        name: "TERM 1",
        courses: [
          "Basic Robotics",
          "Web Design",
          "Intro to Effective Business Communication",
          "Computer Architecture",
          "Algorithms & Data Structures",
        ],
      },
      {
        name: "TERM 2",
        courses: [
          "Database Analysis & Design",
          "Object-Oriented Programming",
          "Operating System",
          "Frontend Development",
          "Entrepreneurship",
        ],
      },
      {
        name: "TERM 3",
        courses: [
          "Database Administration",
          "Software Engineering",
          "Automata",
          "Research Methodology",
          "Backend Development",
        ],
      },
    ],
  },
  {
    period: "2026 — 2027",
    title: "YEAR 3 — IN PROGRESS",
    subtitle: "Bachelor of Computer Science — CADT",
    terms: [
      {
        name: "TERM 1",
        courses: [
          "Introduction to Cybersecurity",
          "Fundamental of Mobile Development",
          "Project Management",
          "Fundamental of Game Development",
        ],
      },
    ],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Frontend Development with ReactJS",
    issuer: "DICHI Academy",
    year: "2026",
    note: "React with TypeScript and Tailwind — routing, hooks, testing, Supabase CRUD and PWAs.",
    link: "https://drive.google.com/file/d/1bEEt0uFpFzMfo1IF3kMNG3-4dkkxeZ4o/view",
  },
  {
    title: "Project Management & Git",
    issuer: "DICHI Academy",
    year: "2026",
    note: "Git branching and merges, GitHub pull requests, code review and Agile Kanban workflows.",
    link: "https://drive.google.com/file/d/1EgIbhMBfwQHK7IXdsenaAHtIxTUYXldp/view",
  },
  {
    title: "Database and Entity Relation Diagrams",
    issuer: "DICHI Academy",
    year: "2026",
    note: "SQL with SQLite — querying, aggregation, joins, ERD design and normalization.",
    link: "https://drive.google.com/file/d/1LxqDtlSuwCoVDk4sXKzwoLtGa6e8IeuG/view",
  },
  {
    title: "Introduction to JavaScript",
    issuer: "DICHI Academy",
    year: "2026",
    note: "JavaScript fundamentals, data structures, DOM manipulation and asynchronous code.",
    link: "https://drive.google.com/file/d/1_xuFWTrQIR5bQj7N9MHufUBKH37XE4l5/view",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2025",
    note: "CCNA course covering network fundamentals, addressing and routing basics.",
    link: "https://drive.google.com/file/d/1-HgPcFv7Ghs7tpMRXj41fo9iGTQhY9mW/view",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2025",
    note: "Foundations of cybersecurity — threats, vulnerabilities and best practices.",
    link: "https://drive.google.com/file/d/1gObWfbEiM1pfvRkbPD6VvicuRmVlE-8s/view",
  },
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    note: "Python programming fundamentals — data structures, logic and scripting.",
    link: "https://drive.google.com/file/d/14zP8VYxjsWuFZmkx9PqiRi5QpkyKEL14/view",
  },
  {
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    note: "Hardware, software and troubleshooting fundamentals for IT support.",
    link: "https://drive.google.com/file/d/1bENcFnFhejQ1GAnThLTbnPDD7Q-Ht3Qc/view",
  },
  {
    title: "NGEP Batch II",
    issuer: "Next Gen Engagement Program",
    year: "2025",
    note: "Batch II completion — the Next Gen Engagement Program.",
    link: "https://drive.google.com/file/d/1vWmqB_YsHDuVk05edn5gZVy0X6ptNf0e/view",
  },
];
