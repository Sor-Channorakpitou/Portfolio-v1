export type Milestone = {
  year: string;
  title: string;
  subtitle: string;
  type: "education" | "academic" | "work" | "volunteer" | "external" | "achievement";
  description: string;
};

export const milestones: Milestone[] = [
  {
    year: "2024",
    title: "Started at CADT",
    subtitle: "Foundation Year — Computer Science",
    type: "education",
    description:
      "Began my Bachelor of Computer Science at Cambodia Academy of Digital Technology. Built a strong base in linear algebra, computational thinking, IT essentials, and visual art.",
  },
  {
    year: "2025",
    title: "CCNA & Cisco Certifications",
    subtitle: "Networking & Cybersecurity",
    type: "achievement",
    description:
      "Earned multiple Cisco certifications — CCNA: Introduction to Networks, Introduction to Cybersecurity, Python Essentials, and IT Essentials — building a foundation in networking, security, and scripting.",
  },
  {
    year: "2025",
    title: "NGEP Batch II — Completion",
    subtitle: "Next Gen Engagement Program",
    type: "achievement",
    description:
      "Completed the Next Gen Engagement Program (NGEP) Batch II, a peer-driven program at CADT focused on technical growth and community engagement.",
  },
  {
    year: "2025 — 2026",
    title: "Year 2 — Core Computing",
    subtitle: "Bachelor of Computer Science — CADT",
    type: "education",
    description:
      "Deepened my computing knowledge across three terms — covering Algorithms & Data Structures, OOP, Operating Systems, Database Design, Frontend & Backend Development, and Research Methodology.",
  },
  {
    year: "2026",
    title: "TechPreneur Bootcamp 2.0",
    subtitle: "Full Stack Development Track",
    type: "external",
    description:
      "Selected as 1 of 60 candidates from over 1,100 applicants for DICHI Academy × ELIX's fully-funded 7-month tech entrepreneurship bootcamp. Progressing through the accelerated learning phase toward MVP development.",
  },
  {
    year: "2026",
    title: "ML for IoT Intrusion Detection",
    subtitle: "Research — Systematic Literature Review",
    type: "academic",
    description:
      "Co-authored a PRISMA-based systematic literature review on ML/DL approaches for intrusion detection in resource-constrained IoT environments. Screened 19,300 records down to 46 studies.",
  },
  {
    year: "2026",
    title: "NGEP — Trainer",
    subtitle: "Algorithms & Data Structures in C++",
    type: "volunteer",
    description:
      "Served as a senior volunteer trainer in the Next Gen Engagement Program — designed and delivered an Algorithms & Data Structures course in C++ over 5 weeks to junior students.",
  },
  {
    year: "2026",
    title: "Innovation Challenge — Mentor Assistant",
    subtitle: "Volunteer",
    type: "volunteer",
    description:
      "Assisted mentors and teams in the Innovation Challenge for foundation students — helping them identify real problems and build tech solutions around social impact themes.",
  },
  {
    year: "2026",
    title: "DMIL Framework Challenge",
    subtitle: "Cross-Department Collaboration",
    type: "external",
    description:
      "Working with a cross-department team (CS, Digital Business, Telecom & Networking) on the DMIL framework published by MPTC — defining a problem from Cambodia's digital literacy standard.",
  },
  {
    year: "2026 — 2027",
    title: "Year 3 — Specialization",
    subtitle: "Computer Science — CADT",
    type: "education",
    description:
      "Entering Year 3 with courses in Cybersecurity, Mobile Development, Project Management, and Game Development — moving toward deeper specialization in software engineering.",
  },
];