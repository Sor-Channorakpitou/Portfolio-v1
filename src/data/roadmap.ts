export type RoadmapEntry = {
  year: string;
  role: string;
  subtitle: string;
  description: string;
  status: "current" | "next" | "future";
  icon: "code" | "shield" | "hub" | "stadia_controller" | "psychology" | "terminal" | "database" | "cloud";
};

export const careerRoadmap: RoadmapEntry[] = [
  {
    year: "2026 — 2027",
    role: "Software Engineering Intern",
    subtitle: "SWE / Infosec",
    description:
      "Seeking an internship to apply full-stack and research skills in a real-world engineering team — building, shipping, and learning production-grade systems.",
    status: "current",
    icon: "code",
  },
  {
    year: "2027 — 2028",
    role: "Junior Engineer",
    subtitle: "Entry-Level Developer",
    description:
      "Transitioning into a full-time engineering role, deepening expertise in backend systems, security practices, and collaborative development workflows.",
    status: "next",
    icon: "terminal",
  },
  {
    year: "2028 — 2029",
    role: "Mid-Level Engineer",
    subtitle: "Growing Impact",
    description:
      "Taking ownership of larger features, mentoring juniors, and contributing to architectural decisions — while continuing to specialise in security or infrastructure.",
    status: "future",
    icon: "hub",
  },
  {
    year: "2029 →",
    role: "Senior Engineer",
    subtitle: "Lead by Example",
    description:
      "Driving technical direction, leading cross-team initiatives, and shaping engineering culture — with a focus on secure, scalable, and maintainable systems.",
    status: "future",
    icon: "shield",
  },
];