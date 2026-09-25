export type Experience = {
  title: string;
  period: string;
  category: string;
  description: string;
  highlights: string[];
  link?: { label: string; href: string };
};

export const experiences: Experience[] = [
  {
    title: "ML for Lightweight IoT Intrusion Detection",
    period: "2026 · YEAR 2 TERM 3",
    category: "RESEARCH",
    description:
      "Systematic literature review (PRISMA-based) on machine learning and deep learning approaches for intrusion detection in resource-constrained IoT environments, supervised by Dr. Cheab Sovuthy for Research Methodology.",
    highlights: [
      "Screened 19,300 records down to 46 studies via a PRISMA-based process",
      "Compared ML, ensemble, deep, hybrid and federated learning across accuracy, scalability and computational cost",
      "Mapped dominant attack vectors (DDoS, Mirai, MitM, XSS/SQLi) and threat taxonomies from the literature",
      "Group project — led by Mr. Svay Monyroth, co-authored with teammates under Dr. Cheab Sovuthy's guidance",
    ],
    link: {
      label: "Read Paper",
      href: "https://drive.google.com/file/d/11xosINcBCk5bIZu8ZkeWp0K5HB4m2t-4/view",
    },
  },
  {
    title: "Next Gen Engagement Program — Trainer",
    period: "2026 · 5 WEEKS",
    category: "VOLUNTEER",
    description:
      "Senior volunteer in the Next Gen Engagement Program (NGEP) — trained juniors in an Algorithms & Data Structures course implemented in C++, guiding and sharing knowledge with the next cohort.",
    highlights: [
      "Delivered an Algorithm & Data Structure course in C++ over 5 weeks",
      "Volunteer — guided and shared knowledge with junior students",
      "Course materials and exercises implemented from scratch in C++",
    ],
  },
  {
    title: "Innovation Challenge — Mentor Assistant",
    period: "2026 · 4 WEEKS",
    category: "VOLUNTEER",
    description:
      "Assisted mentors in the Innovation Challenge (IC) for foundation students — a challenge to find real problems and build tech solutions around a social impact theme.",
    highlights: [
      "Helped out whenever mentors or teams needed assistance",
      "Assisted operations and activities for 4 weeks",
    ],
  },
  {
    title: "TechPreneur Bootcamp 2.0 — Candidate",
    period: "2026 · IN PROGRESS",
    category: "EXTERNAL PROGRAM",
    description:
      "Selected as a candidate for DICHI Academy × ELIX's fully-funded 7-month tech entrepreneurship bootcamp — Full Stack Development track. Currently progressing through the accelerated learning phase.",
    highlights: [
      "Selected as 1 of 60 candidates from over 1,100 applicants",
      "Full Stack Development track — hybrid technical training with industry mentors",
      "2 months in and continuing — moving toward ideation weeks and the MVP hackathon phase",
      "Set to pitch a market-ready MVP at Demo Day",
    ],
  },
  {
    title: "DMIL Framework Challenge",
    period: "2026 · 5 WEEKS · IN PROGRESS",
    category: "EXTERNAL PROJECT",
    description:
      "Cross-department team (Computer Science, Digital Business, Telecom & Networking) working on the DMIL — Digital Media & Information Literacy — framework published by MPTC for digital literacy in Cambodia. Defining one problem drawn from one or more of its pillars.",
    highlights: [
      "Cross-department team — CS, Digital Business, Telecom and Networking",
      "Working with the DMIL framework published by MPTC, Cambodia's digital literacy standard",
      "Defining a problem from one or more DMIL pillars",
      "5-week program — currently progressing the problem",
    ],
  },
];