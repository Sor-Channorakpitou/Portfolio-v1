import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";

type Skill = { name: string; level: number };
type SkillGroup = { category: string; skills: Skill[] };

const TECH_STACK: SkillGroup[] = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "TypeScript", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "Java", level: 2 },
      { name: "C++", level: 2 },
      { name: "C", level: 2 },
      { name: "SQL", level: 3 },
    ],
  },
  {
    category: "FRONTEND",
    skills: [
      { name: "React", level: 3 },
      { name: "Tailwind CSS", level: 3 },
    ],
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Node / Express", level: 3 },
      { name: "REST APIs", level: 3 },
    ],
  },
  {
    category: "DATABASES",
    skills: [
      { name: "PostgreSQL", level: 3 },
      { name: "MySQL", level: 3 },
      { name: "MongoDB", level: 2 },
    ],
  },
  {
    category: "TOOLS & HARDWARE",
    skills: [
      { name: "Git", level: 3 },
      { name: "Vercel / Render", level: 2 },
      { name: "ESP32 / PlatformIO", level: 2 },
      { name: "Figma", level: 2 },
    ],
  },
];

const SOFT_SKILLS: SkillGroup[] = [
  {
    category: "SOFT SKILLS",
    skills: [
      { name: "Communication", level: 4 },
      { name: "Teamwork & Collaboration", level: 4 },
      { name: "Teaching & Mentoring", level: 3 },
      { name: "Problem Solving", level: 3 },
      { name: "Research & Analysis", level: 3 },
      { name: "Leadership", level: 3 },
      { name: "Entrepreneurship", level: 3 },
      { name: "Time Management", level: 3 },
    ],
  },
];

const ACHIEVEMENTS = [
  {
    title: "TechPreneur Bootcamp 2.0 — Selected",
    year: "2026",
    description:
      "Selected as 1 of 60 candidates from over 1,100 applicants for DICHI Academy × ELIX's fully-funded tech entrepreneurship bootcamp — Full Stack Development track.",
  },
  {
    title: "DICHI Academy — 4 Certificates",
    year: "2026",
    description:
      "Introduction to JavaScript, Database and Entity Relation Diagrams, Project Management & Git and Frontend Development with ReactJS.",
  },
  {
    title: "NGEP Batch II — Completed",
    year: "2025",
    description:
      "Completed the Next Gen Engagement Program Batch II at CADT — a peer-driven program focused on technical growth and community engagement.",
  },
  {
    title: "Cisco Networking Academy — 4 Certificates",
    year: "2025",
    description:
      "CCNA: Introduction to Networks, Introduction to Cybersecurity, Python Essentials and IT Essentials.",
  },
];

function SkillCard({ title, groups }: { title: string; groups: SkillGroup[] }) {
  return (
    <div className="border-2 border-on-background bg-surface-container-lowest p-stack-lg shadow-brutal">
      <h2 className="mb-stack-md font-headline text-headline-md uppercase text-on-background">
        {title}
      </h2>
      <div className="flex flex-col gap-stack-lg">
        {groups.map((group) => (
          <div key={group.category}>
            <p className="mb-stack-sm border-b-2 border-on-background pb-1 font-mono text-label-bold uppercase text-primary">
              {group.category}
            </p>
            <ul className="flex flex-col gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between gap-4 font-mono text-code-sm"
                >
                  <span className="uppercase text-on-background">{skill.name}</span>
                  <span className="flex gap-1" aria-label={`${skill.level} of 5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        className={`h-3 w-3 border-2 border-on-background ${
                          n <= skill.level
                            ? "bg-electric-cyan dark:bg-primary-fixed"
                            : "bg-surface-container-lowest"
                        }`}
                      />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

const CONTACT_CHANNELS = [
  { icon: "mail", label: "pitousorchannorak14@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=pitousorchannorak14@gmail.com" },
  { icon: "link", label: "github.com/Sor-Channorakpitou", href: "https://github.com/Sor-Channorakpitou" },
  { icon: "share", label: "linkedin.com/in/sor-channorakpitou-03496a385", href: "https://www.linkedin.com/in/sor-channorakpitou-03496a385" },
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-page flex-grow px-margin-mobile py-section-gap md:px-gutter">
      <div className="grid grid-cols-1 items-start gap-gutter md:grid-cols-2">
        {/* Left: Bio & Skills */}
        <div className="flex flex-col gap-stack-lg">
          <div>
            <p className="mb-stack-sm font-mono text-label-bold uppercase tracking-widest text-primary">
              Sor Channorakpitou // Full-Stack Software Engineer
            </p>
            <h1 className="mb-stack-md font-headline text-headline-xl-mobile uppercase tracking-tighter text-on-background md:text-headline-xl">
              HELLO WORLD
            </h1>
            <div className="mb-stack-md h-2 w-full max-w-115 border-2  border-on-background bg-electric-cyan" />
            <p className="text-body-lg text-on-surface">
              I am a third-year software engineering student at CADT. I am a curious and
              detail-oriented person who loves learning and growing — in class, on campus,
              and out in the world. I value consistency, honesty, and giving back, and I try
              to bring that energy to everything I do.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-stack-lg md:grid-cols-2">
            <SkillCard title="TECH STACK" groups={TECH_STACK} />
            <SkillCard title="SOFT SKILLS" groups={SOFT_SKILLS} />
          </div>

          <div className="border-2 border-on-background bg-surface-container-lowest p-stack-lg shadow-brutal">
            <h2 className="mb-stack-md flex items-center gap-3 font-headline text-headline-md uppercase text-on-background">
              <Icon name="workspace_premium" filled className="text-3xl text-primary" />
              ACHIEVEMENTS
            </h2>
            <ul className="space-y-stack-md">
              {ACHIEVEMENTS.map((award) => (
                <li key={award.title} className="border-l-4 border-electric-cyan pl-4">
                  <p className="font-mono text-label-bold uppercase text-primary">{award.year}</p>
                  <h3 className="font-headline text-headline-md uppercase text-on-background">
                    {award.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">{award.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <nav className="flex flex-col gap-4 font-mono text-label-bold uppercase">
            {CONTACT_CHANNELS.map((channel) => {
              const external = channel.href.startsWith("http");
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex w-max items-center gap-4 border-2 border-transparent p-3 text-on-background transition-all hover:border-on-background hover:bg-electric-cyan dark:hover:text-on-primary-container"
                >
                  <Icon name={channel.icon} className="text-2xl" />
                  {channel.label}
                </a>
              );
            })}
          </nav>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-max items-center gap-2 border-2 border-on-background bg-electric-cyan px-6 py-3 font-mono text-label-bold uppercase text-on-background shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:text-on-primary-container"
          >
            View CV <Icon name="visibility" />
          </a>
        </div>

{/* Right: Transmission form */}
        <div
          id="contact"
          className="border-2 border-on-background bg-surface-container-lowest shadow-brutal"
        >
          <div className="flex items-center justify-between gap-4 border-b-2 border-on-background bg-electric-cyan p-4 dark:bg-electric-cyan">
            <div className="flex items-center gap-4">
              <Icon
                name="terminal"
                filled
                className="text-[40px] text-on-background dark:text-on-primary-fixed"
              />
              <h2 className="font-headline text-headline-lg uppercase tracking-tighter text-on-background dark:text-on-primary-fixed">
                TRANSMISSION
              </h2>
            </div>
            <span className="hidden bg-badge-shadow px-2 py-1 font-mono text-label-bold uppercase text-primary-fixed dark:text-primary-fixed shadow-[4px_4px_0px_0px_var(--color-on-background)] md:block dark:bg-background dark:shadow-[4px_4px_0px_0px_#ffffff]">
              Status: Open
            </span>
          </div>
          <div className="p-stack-lg">
            <ContactForm />
            <p className="mt-stack-md font-mono text-code-sm uppercase text-on-surface-variant">
              Response time: within 24h // No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}