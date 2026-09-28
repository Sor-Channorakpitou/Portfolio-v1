export type Artifact =
  | { type: "image"; src: string; label: string; caption: string }
  | { type: "terminal"; lines: string[]; label: string; caption: string }
  | { type: "icon"; icon: string; label: string; caption: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  year: string;
  tags: string[];
  category: string;
  image?: string;
  iconVisual?: string;
  repo?: string;
  demo?: string;
  /** Shown in place of the Live Demo button when the project isn't published yet. */
  demoPlaceholder?: string;
  caseStudy: {
    role: string;
    timeline: string;
    stack: string[];
    result: string;
    challengeIntro: string;
    challengeDetail: string;
    solutionIntro: string;
    solutionBullets: string[];
    solutionTags: string[];
    artifacts: Artifact[];
    nextProjectSlug: string;
  };
};

export const projects: Project[] = [
  {
    slug: "seksa",
    demo: "https://seksa.me",
    title: "Seksa",
    description:
      "A bilingual (English/Khmer) scholarship platform for Cambodian students — real eligibility matching, application tracking and deadline reminders, with a Flutter mobile app.",
    longDescription:
      "A FastAPI + React platform that matches Cambodian students to scholarships they actually qualify for, explains what they're missing and guides them through applying — plus a Flutter companion app.",
    year: "2026",
    tags: ["FastAPI", "React", "Flutter"],
    category: "Full Stack",
    iconVisual: "school",
    caseStudy: {
      role: "Full-Stack & Mobile Developer",
      timeline: "2026",
      stack: ["Python", "FastAPI", "React", "PostgreSQL", "Flutter", "Docker", "Render", "Supabase"],
      result: "Live at seksa.me",
      challengeIntro:
        "Scholarship information for Cambodian students is scattered across announcement pages and social posts, and students often can't tell which ones they actually qualify for.",
      challengeDetail:
        "Eligibility rules differ for every scholarship, deadlines are easy to miss, and listings go stale — so students waste time on applications they can't win and miss the ones they can.",
      solutionIntro:
        "Students fill in a profile once; Seksa checks real eligibility rules against every scholarship, explains what they meet and what's missing, and tracks each application to the deadline.",
      solutionBullets: [
        "Offline, rule-based matching and search — no AI service needed to find scholarships.",
        "Admin discovery pipeline: sources are scanned on a schedule and nothing is published until an admin approves it.",
        "Application workspace with documents, tasks, drafts and 30/14/7/3/1-day deadline reminders (in-app, email and .ics).",
        "Full English and Khmer interface, plus a Flutter mobile app sharing the same API and accounts.",
      ],
      solutionTags: ["Full Stack", "Bilingual", "Mobile"],
      artifacts: [
        {
          type: "icon",
          icon: "fact_check",
          label: "Eligibility Matching",
          caption: "Every match shows which requirements are met, not met, or need verification.",
        },
        {
          type: "terminal",
          lines: ["$ docker compose -f docker-compose.dev.yml up", "> postgres   :5432 ✓", "> fastapi    :5000 ✓", "> vite       :5173 ✓"],
          label: "One-Command Dev",
          caption: "Database, API and frontend all boot and hot-reload together in Docker.",
        },
        {
          type: "icon",
          icon: "phone_iphone",
          label: "Flutter App",
          caption: "A mobile client using Provider and the same backend accounts to browse scholarships.",
        },
      ],
      nextProjectSlug: "seksa-for-kids",
    },
  },
  {
    slug: "seksa-for-kids",
    demoPlaceholder: "Live Demo · Coming Soon",
    title: "Seksa for Kids",
    description:
      "A Khmer-first coding platform for kids aged 10–12 — robot puzzles, real Python running in the browser and a Socratic AI mentor that gives hints, not answers.",
    longDescription:
      "A Next.js + Supabase learning platform where Khmer-speaking kids learn to code by building things, with in-browser Python and an AI mentor built to teach rather than tell.",
    year: "2026",
    tags: ["Next.js", "Supabase", "AI"],
    category: "Full Stack",
    iconVisual: "smart_toy",
    caseStudy: {
      role: "Full-Stack Developer",
      timeline: "2026",
      stack: ["Next.js", "TypeScript", "Supabase", "Pyodide", "Claude API", "Vitest"],
      result: "Think → Try → Fail → Hint → Build",
      challengeIntro:
        "Most coding resources are in English and built for older learners, leaving Khmer-speaking kids without an approachable way to start programming.",
      challengeDetail:
        "Kids need to run real code safely, get help without being handed the answer, and have their progress protected — all without exposing personal data to an AI model.",
      solutionIntro:
        "A Khmer-by-default platform with lessons, quests and projects, where Python runs sandboxed in the browser and an AI mentor follows a strict teaching policy.",
      solutionBullets: [
        "Python via Pyodide in a Web Worker with a hard 5-second timeout — student code never runs on the server.",
        "AI mentor with hint/explain/debug modes, a solution-leak guard, privacy scrubbing and an offline fallback.",
        "Pure, deterministic progress engine validated server-side, with Supabase row-level security.",
        "Full Khmer/English parity enforced by tests that run every lesson solution through real Python.",
      ],
      solutionTags: ["EdTech", "AI Mentor", "Khmer-First"],
      artifacts: [
        {
          type: "icon",
          icon: "psychology",
          label: "AI Mentor",
          caption: "Questions → hints → explanations, with disclosure that grows only with real effort.",
        },
        {
          type: "terminal",
          lines: ["$ npm test", "> engine & mentor      :pass ✓", "> km/en parity        :pass ✓", "> lesson solutions    :pass ✓"],
          label: "Tested Content",
          caption: "Every lesson solution in both languages is executed, so a broken exercise can't ship.",
        },
        {
          type: "icon",
          icon: "translate",
          label: "Khmer First",
          caption: "Lessons, errors and the mentor all speak Khmer by default, with an English toggle.",
        },
      ],
      nextProjectSlug: "medflow",
    },
  },
  {
    slug: "medflow",
    repo: "https://github.com/Sor-Channorakpitou/MedFlow",
    title: "MedFlow",
    description:
      "An internal management system for clinic cross-departments, built with Express and React. One shared platform for scheduling, records and inventory.",
    longDescription:
      "A full-stack internal management system connecting clinic departments — scheduling, records and inventory in one shared platform.",
    year: "2026",
    tags: ["React", "Express"],
    category: "Full Stack",
    iconVisual: "medical_services",
    image: "/medflow-logo.jpg",
    caseStudy: {
      role: "Full-Stack Developer",
      timeline: "2026",
      stack: ["React", "Express", "Postgres", "Vercel", "Render"],
      result: "One System, All Departments",
      challengeIntro:
        "Every department in the clinic ran its own tools — appointments in one app, patient records in spreadsheets, inventory in another. Nothing talked to each other.",
      challengeDetail:
        "Handoffs between reception, doctors and admin depended on memory and manual re-typing, so information went stale and cross-department visibility was effectively zero.",
      solutionIntro:
        "A single internal platform where every department shares one source of truth — role-based access, real-time records and clean handoffs between teams.",
      solutionBullets: [
        "Cross-department workflows: scheduling, records and inventory in one app.",
        "Role-based access so each department only sees what it needs.",
        "REST API on Express backed by Postgres, deployed on Vercel + Render.",
      ],
      solutionTags: ["Full Stack", "Internal Tools", "REST API"],
      artifacts: [
        {
          type: "icon",
          icon: "medical_services",
          label: "Cross-Department",
          caption: "One shared system for scheduling, records and inventory across the clinic.",
        },
        {
          type: "terminal",
          lines: ["$ npm run dev", "> express api  :3001 ✓", "> react client :5173 ✓", "> postgres     :connected ✓"],
          label: "Dev Environment",
          caption: "The full stack boots with one command — client, API and database together.",
        },
        {
          type: "icon",
          icon: "database",
          label: "Data Layer",
          caption: "A Postgres schema built around departments, staff and patient records.",
        },
      ],
      nextProjectSlug: "internmatch",
    },
  },
  {
    slug: "internmatch",
    repo: "https://github.com/Sor-Channorakpitou/InternMatch-Project",
    title: "InternMatch",
    description:
      "An internship discovery and recruitment platform where students browse listings, filter by skill and apply — with separate dashboards for students and recruiters.",
    longDescription:
      "A React + Tailwind internship platform connecting students to opportunities — searchable listings, applications and role-based dashboards.",
    year: "2026",
    tags: ["React", "Tailwind"],
    category: "Frontend",
    iconVisual: "work",
    caseStudy: {
      role: "Frontend Developer",
      timeline: "2026",
      stack: ["React", "Tailwind", "React Router", "Vite"],
      result: "From Listing to Application in One Flow",
      challengeIntro:
        "Internship opportunities were scattered across posts and spreadsheets — students had no single place to discover, filter and apply.",
      challengeDetail:
        "Different pages for auth, listings and dashboards made the flow fragmented, and there was no shared state tying applications to a student profile.",
      solutionIntro:
        "A React SPA with context-driven state — searchable listings, an apply flow, and separate student and recruiter dashboards sharing one auth context.",
      solutionBullets: [
        "Searchable internship cards with a filter bar powered by memoized filtering.",
        "Apply modal and saved jobs managed through a global AuthContext.",
        "Separate Student and Recruiter dashboards behind role-based routes.",
      ],
      solutionTags: ["React", "SPA", "Auth Context"],
      artifacts: [
        {
          type: "icon",
          icon: "badge",
          label: "Student & Recruiter",
          caption: "Two dashboards sharing one auth and application state.",
        },
        {
          type: "terminal",
          lines: ["$ npm start", "> internmatch :3000 ✓", "> auth context :ready ✓", "> mock data    :loaded ✓"],
          label: "Quick Start",
          caption: "A CRA + Tailwind setup that boots straight into the platform.",
        },
        {
          type: "icon",
          icon: "filter_alt",
          label: "Filtering",
          caption: "useMemo-driven filters keep the listings instant on every keystroke.",
        },
      ],
      nextProjectSlug: "zoo-feeding-schedule",
    },
  },
  {
    slug: "zoo-feeding-schedule",
    repo: "https://github.com/Sor-Channorakpitou/ZooFeedingSchedule",
    title: "Zoo Management System",
    description:
      "An enterprise Java desktop app for wildlife logistics — role-based access for managers and keepers, automated feeding schedules and MySQL persistence.",
    longDescription:
      "A Java Swing + MySQL desktop application managing zoo staff roles, habitats and automated feeding schedules, built on an N-Tier DAO architecture.",
    year: "2026",
    tags: ["Java", "Swing", "MySQL"],
    category: "Desktop",
    iconVisual: "pets",
    caseStudy: {
      role: "Software Engineer (OOP)",
      timeline: "2026",
      stack: ["Java", "Swing", "MySQL", "JDBC"],
      result: "Every Animal Fed on Time",
      challengeIntro:
        "A modern zoo juggles staff roles, habitats and food inventory — keepers need schedules, managers need oversight, and no one can afford a missed feeding.",
      challengeDetail:
        "Manual scheduling meant feeding times depended on memory, and without role separation any staff member could touch anything.",
      solutionIntro:
        "An N-Tier desktop system with a DAO data layer — inheritance-driven roles, logic-based feeding schedules per habitat and full MySQL persistence.",
      solutionBullets: [
        "RBAC with Manager and Keeper roles built on class inheritance.",
        "Automated feeding schedules derived from animal type and habitat.",
        "Habitat architecture that scales to new environments without breaking logic.",
        "Custom exception layer for professional error handling.",
      ],
      solutionTags: ["Java", "OOP", "DAO Pattern"],
      artifacts: [
        {
          type: "icon",
          icon: "pets",
          label: "Habitat Logic",
          caption: "Abstract Habitat base class extended by Forest, Ocean and Savannah.",
        },
        {
          type: "terminal",
          lines: ["$ javac -d out src/**/*.java", "> ZooLoginGUI      :launched ✓", "> jdbc:mysql://zoo_db :connected ✓"],
          label: "Build & Launch",
          caption: "Compile the modules and launch straight into the login screen.",
        },
        {
          type: "icon",
          icon: "database",
          label: "DAO Layer",
          caption: "All SQL isolated in DAO classes so the UI stays database-agnostic.",
        },
      ],
      nextProjectSlug: "temperature-humidity-web-monitor",
    },
  },
  {
    slug: "temperature-humidity-web-monitor",
    repo: "https://github.com/Sor-Channorakpitou/Temperature-Humidity-WebMonitor",
    title: "Temperature & Humidity Web Monitor",
    description:
      "An ESP32 + DHT22 IoT project that reads temperature and humidity and serves a live web dashboard that auto-refreshes every two seconds.",
    longDescription:
      "A real IoT device — ESP32 with a DHT22 sensor hosting its own web server, streaming live temperature and humidity readings to any browser.",
    year: "2026",
    tags: ["C++", "ESP32", "IoT"],
    category: "IoT",
    iconVisual: "device_thermostat",
    caseStudy: {
      role: "Embedded Developer",
      timeline: "2026",
      stack: ["C++", "ESP32", "DHT22", "PlatformIO", "WiFi"],
      result: "Live Sensor Data in Any Browser",
      challengeIntro:
        "Monitoring room or outdoor conditions usually means dedicated hardware and clunky software — getting a reading in a browser should be instant.",
      challengeDetail:
        "The ESP32 needed to read a DHT22 sensor reliably while simultaneously serving a web page, without delays starving either task.",
      solutionIntro:
        "A single-board web server: the ESP32 reads temperature and humidity, hosts a page on Wi-Fi and auto-refreshes readings every two seconds.",
      solutionBullets: [
        "ESP32 connects to Wi-Fi and hosts its own web dashboard.",
        "DHT22 sensor readings with a 10kΩ pull-up for reliable data.",
        "Auto-refresh every 2 seconds — open the IP in any browser.",
      ],
      solutionTags: ["Embedded", "IoT", "Web Server"],
      artifacts: [
        {
          type: "icon",
          icon: "device_thermostat",
          label: "Sensor Reads",
          caption: "DHT22 feeds live temperature (°C) and humidity (%) into the page.",
        },
        {
          type: "terminal",
          lines: ["$ pio run --target upload", "> esp32        :flashed ✓", "> wifi         :connected ✓", "> http://192.168.x.x :live ✓"],
          label: "Flash & Serve",
          caption: "Upload the sketch, grab the IP from serial and open it in a browser.",
        },
        {
          type: "icon",
          icon: "wifi",
          label: "On-Device Hosting",
          caption: "No cloud needed — the ESP32 serves the dashboard itself.",
        },
      ],
      nextProjectSlug: "web-design-final-project",
    },
  },
  {
    slug: "web-design-final-project",
    repo: "https://github.com/Sor-Channorakpitou/Web-Design_FinalProject",
    title: "Web Design Final Project",
    description:
      "A complete e-commerce site built with vanilla HTML, CSS and JavaScript — product browsing, cart, checkout, accounts and dark mode.",
    longDescription:
      "A multi-page e-commerce storefront in pure HTML/CSS/JS — from product listings to checkout, order history and a dark-mode toggle.",
    year: "2025",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    iconVisual: "storefront",
    caseStudy: {
      role: "Frontend Developer",
      timeline: "2025",
      stack: ["HTML", "CSS", "JavaScript"],
      result: "Full Storefront, Zero Frameworks",
      challengeIntro:
        "Building a believable online store with no frameworks means owning every page, every interaction and every piece of state yourself.",
      challengeDetail:
        "Cart, checkout and account flows span many pages — keeping them coherent without a shared runtime required careful DOM-level state handling.",
      solutionIntro:
        "A multi-page storefront in pure HTML/CSS/JS: products, cart, checkout, order history, login/signup, contact and services — plus dark mode.",
      solutionBullets: [
        "Ten interconnected pages: Home, Products, Cart, Checkout, Account and more.",
        "Cart and order history flows wired with vanilla JavaScript.",
        "A custom Darkmode.js toggle persisted across pages.",
      ],
      solutionTags: ["Vanilla JS", "E-Commerce", "Multi-Page"],
      artifacts: [
        {
          type: "icon",
          icon: "shopping_cart",
          label: "Cart to Checkout",
          caption: "A full purchase journey from adding items to order details.",
        },
        {
          type: "terminal",
          lines: ["$ open Home.html", "> pages        :11 ✓", "> darkmode.js  :toggled ✓", "> frameworks   :zero ✓"],
          label: "Open & Browse",
          caption: "No build step — open the homepage and shop around.",
        },
        {
          type: "icon",
          icon: "dark_mode",
          label: "Dark Mode",
          caption: "A dedicated script flips the whole store into dark theme.",
        },
      ],
      nextProjectSlug: "term2-cinema-project",
    },
  },
  {
    slug: "term2-cinema-project",
    repo: "https://github.com/Sor-Channorakpitou/Term2_Project_By_C",
    title: "Cinema Resource Manager",
    description:
      "A terminal-based cinema resource management system in C — schedules, staff and bookings persisted to CSV files.",
    longDescription:
      "A C console application managing cinema resources — show schedules, staff records and bookings, all persisted to CSV files.",
    year: "2025",
    tags: ["C", "CSV"],
    category: "Console",
    iconVisual: "movie",
    caseStudy: {
      role: "Developer",
      timeline: "2025",
      stack: ["C", "CSV", "File I/O"],
      result: "Cinema Resources, One Terminal",
      challengeIntro:
        "Running a cinema means juggling showtimes, staff shifts and bookings — on paper, that data is impossible to keep consistent.",
      challengeDetail:
        "Three separate concerns — schedules, staff and booked seats — had to stay in sync with nothing but plain files as the backing store.",
      solutionIntro:
        "A C console app that manages schedules, staff and bookings in one program, with every change persisted to structured CSV files.",
      solutionBullets: [
        "Schedule, staff and booking management in a single C program.",
        "CSV persistence — Booked.csv, Schedule.csv and Staff.csv.",
        "Resource tracking so seats and shifts never double-book.",
      ],
      solutionTags: ["C", "CSV", "File Persistence"],
      artifacts: [
        {
          type: "icon",
          icon: "movie",
          label: "Bookings",
          caption: "Every reservation written to Booked.csv as it happens.",
        },
        {
          type: "terminal",
          lines: ["$ gcc Cinema_Resource-Project.c -o cinema", "> schedule.csv   :loaded ✓", "> staff.csv      :loaded ✓", "> booked.csv     :loaded ✓"],
          label: "Build & Run",
          caption: "One gcc command compiles the whole manager.",
        },
        {
          type: "icon",
          icon: "calendar_month",
          label: "Schedules",
          caption: "Showtimes and staff shifts managed side by side.",
        },
      ],
      nextProjectSlug: "seksa",
    },
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length];
}

export const workProjects = projects.filter((p) =>
  ["seksa", "seksa-for-kids", "medflow", "internmatch", "zoo-feeding-schedule", "temperature-humidity-web-monitor", "web-design-final-project", "term2-cinema-project"].includes(p.slug),
);

export const featuredProjects = projects.filter((p) =>
  ["seksa", "seksa-for-kids", "medflow"].includes(p.slug),
);