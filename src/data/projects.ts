export type Artifact =
  | { type: "image"; src: string; label: string; caption: string }
  | { type: "terminal"; lines: string[]; label: string; caption: string }
  | { type: "code"; file: string; lines: string[]; label: string; caption: string }
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
  // "logo" images are shown uncropped on a white panel instead of filling the frame
  imageFit?: "cover" | "logo";
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
      "A clinic management system that moves every patient from reception through triage, doctor, pharmacy and billing — with five role dashboards kept in sync in real time.",
    longDescription:
      "A full-stack clinic workflow platform — an Express 5 + Prisma API, React 19 dashboards for five staff roles, and live updates over Socket.IO.",
    year: "2026",
    tags: ["React", "Express"],
    category: "Full Stack",
    iconVisual: "medical_services",
    image: "/medflow-logo.jpg",
    caseStudy: {
      role: "Full-Stack Developer",
      timeline: "2026",
      stack: ["React", "Express", "TypeScript", "Prisma", "PostgreSQL", "Socket.IO", "Vercel", "Render"],
      result: "One Pipeline, Five Roles",
      challengeIntro:
        "A patient visit crosses many hands — reception, triage, the doctor, the pharmacy and billing — and each desk usually works from its own tools.",
      challengeDetail:
        "Handoffs depended on paper and re-typing, so the next station never knew a patient was ready and nobody could see where a visit was stuck.",
      solutionIntro:
        "One shared patient pipeline — Reception → Triage → Doctor → Laboratory → Pharmacy → Billing — where every stage change is recorded and pushed live to the right dashboard.",
      solutionBullets: [
        "Five role dashboards — receptionist, nurse, doctor, pharmacist and admin — behind JWT auth and role middleware.",
        "Socket.IO events update each queue the moment the previous station finishes, with no page refresh.",
        "Express 5 REST API with Zod validation and Prisma on PostgreSQL, documented with Swagger at /api/docs.",
        "Every stage transition saved to a QueueHistory table for a full audit trail.",
      ],
      solutionTags: ["Full Stack", "Real-Time", "REST API"],
      artifacts: [
        {
          type: "code",
          file: "Backend/src/controllers/consultationController.ts",
          lines: [
            "const result = await consultService.logNewConsultation(validatedData, doctorId);",
            "",
            'const io = req.app.get("io");',
            'io?.to("DOCTOR").emit(SOCKET_EVENTS.DIAGNOSIS_ADDED, { record: result.record });',
            'io?.to("DOCTOR").emit(SOCKET_EVENTS.QUEUE_UPDATED, { record: result.record });',
            "",
            'if (result.nextStage === "PHARMACY") {',
            '  io?.to("PHARMACIST").emit(SOCKET_EVENTS.PRESCRIPTION_CREATED, { record: result.record });',
            "} else {",
            '  io?.to("RECEPTIONIST").emit(SOCKET_EVENTS.PATIENT_MOVED_STAGE, { record: result.record });',
            "}",
          ],
          label: "Real-Time Handoff",
          caption:
            "When a doctor logs a consultation, the next station's dashboard is notified instantly — the pharmacist if there's a prescription, reception otherwise.",
        },
        {
          type: "code",
          file: "Backend/prisma/schema.prisma",
          lines: [
            "enum Stage {",
            "  RECEPTION",
            "  TRIAGE",
            "  DOCTOR",
            "  LABORATORY",
            "  PHARMACY",
            "  BILLING",
            "  COMPLETED",
            "}",
          ],
          label: "Pipeline Stages",
          caption: "The patient journey modelled as a Prisma enum — the single source of truth for every queue.",
        },
        {
          type: "code",
          file: "Backend/src/middlewares/roleMiddleware.ts",
          lines: [
            "export const authorize = (roles: string[]) =>",
            "  (req: Request, res: Response, next: NextFunction) => {",
            "    const user = req.user as { id: number; role: string } | undefined;",
            "",
            '    if (!user) return res.status(401).json({ message: "Unauthorized" });',
            '    if (!roles.includes(user.role)) return res.status(403).json({ message: "Forbidden" });',
            "",
            "    next();",
            "  };",
          ],
          label: "Role-Based Access",
          caption: "Every API route declares which roles may call it, so each department only reaches its own data.",
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
    image: "/InternMatch-logo.png",
    imageFit: "logo",
    caseStudy: {
      role: "Frontend Developer",
      timeline: "2026",
      stack: ["React", "Tailwind CSS", "React Router", "Vite", "Lucide"],
      result: "From Listing to Application in One Flow",
      challengeIntro:
        "Internship opportunities were scattered across posts and spreadsheets — students had no single place to discover, filter and apply.",
      challengeDetail:
        "Different pages for auth, listings and dashboards made the flow fragmented, and there was no shared state tying applications to a student profile.",
      solutionIntro:
        "A React SPA with context-driven state — searchable listings, an apply flow, and separate student and recruiter dashboards sharing one auth context.",
      solutionBullets: [
        "Search across title, company, skills and industry, plus industry and location filters — all memoized with useMemo.",
        "Apply modal, applications and saved jobs managed through a global AuthContext.",
        "One /dashboard route that serves the Student or Recruiter dashboard based on the signed-in role.",
      ],
      solutionTags: ["React", "SPA", "Auth Context"],
      artifacts: [
        {
          type: "code",
          file: "src/pages/HomePage.jsx",
          lines: [
            "const filtered = useMemo(() => {",
            "  let filteredInternships = MOCK_INTERNSHIPS.filter(internship => {",
            "    const searchLower = search.toLowerCase();",
            '    const matchSearch = search === "" ||',
            "      internship.title.toLowerCase().includes(searchLower) ||",
            "      internship.company.toLowerCase().includes(searchLower) ||",
            "      internship.skills.some(skill => skill.toLowerCase().includes(searchLower)) ||",
            "      internship.industry.toLowerCase().includes(searchLower);",
            "",
            '    const matchIndustry = industry === "All Industries" || internship.industry === industry;',
            '    const matchLocation = location === "All Locations" || internship.location === location;',
          ],
          label: "Memoized Filtering",
          caption: "One search box matches title, company, skills and industry; results only recompute when a filter changes.",
        },
        {
          type: "code",
          file: "src/App.jsx",
          lines: [
            "function ProtectedRoute() {",
            "  const { user, role } = useAuth();",
            "",
            '  if (!user) return <Navigate to="/login" replace />;',
            '  if (role === "recruiter") return <RecruiterDashboard />;',
            "  return <StudentDashboard />;",
            "}",
          ],
          label: "Role-Based Routing",
          caption: "Signed-out visitors go to login; signed-in users land on the dashboard for their role.",
        },
        {
          type: "terminal",
          lines: [
            "$ git clone https://github.com/Sor-Channorakpitou/InternMatch-Project.git",
            "$ cd InternMatch-Project",
            "$ npm install",
            "$ npm run dev",
          ],
          label: "Run Locally",
          caption: "A Vite + Tailwind CSS 4 project — install and start the dev server.",
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
    image: "/ZMS-logo.png",
    imageFit: "logo",
    caseStudy: {
      role: "Software Engineer (OOP)",
      timeline: "2026",
      stack: ["Java 17", "Swing", "MySQL", "JDBC"],
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
          type: "code",
          file: "models/habitat_types/Ocean.java",
          lines: [
            "public class Ocean extends Habitat {",
            "",
            "    @Override",
            "    public boolean canHouse(Animal animal) {",
            "        String species = animal.getSpecies().toLowerCase();",
            '        return species.contains("fish") ||',
            '               species.contains("shark") ||',
            '               species.contains("penguin") ||',
            '               species.contains("turtle") ||',
            '               species.contains("octopus");',
            "    }",
            "}",
          ],
          label: "Habitat Logic",
          caption: "Each habitat — Forest, Ocean, Savannah — extends an abstract Habitat and decides which animals it can house.",
        },
        {
          type: "code",
          file: "models/habitat_types/Habitat.java",
          lines: [
            "public abstract class Habitat implements IHabitat {",
            "",
            "    private int capacity;",
            "    private Food food;",
            "    protected List<Schedule> feedingTimes = new ArrayList<>();",
            "    protected List<Animal> animals;",
            "",
            "    protected Habitat(List<Schedule> feedingTimes, Food food) {",
            "        this.feedingTimes = (feedingTimes != null)",
            "            ? new ArrayList<>(feedingTimes) : new ArrayList<>();",
            "        this.food = food;",
            "        this.animals = new ArrayList<>();",
            "    }",
          ],
          label: "Abstract Base",
          caption: "Shared state and feeding times live in one abstract class, so new habitats plug in without touching existing logic.",
        },
        {
          type: "code",
          file: "dao/ScheduleDAO.java",
          lines: [
            'String sql = "SELECT fs.schedule_id, fs.habitat_id, fs.staff_id, fs.food_id, " +',
            '        "fs.feeding_time, fs.quantity_kg, fs.notes, fs.completed, " +',
            '        "st.first_name, st.last_name, st.email " +',
            '        "FROM feeding_schedule fs " +',
            '        "JOIN staff st ON fs.staff_id = st.staff_id";',
            "",
            "try (Connection conn = getConnection();",
            "     Statement stmt = conn.createStatement();",
            "     ResultSet rs = stmt.executeQuery(sql)) {",
          ],
          label: "DAO Layer",
          caption: "All SQL is isolated in DAO classes, so the Swing UI never talks to the database directly.",
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
    image: "/temp-humidity-monitor.png",
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
        "DHT22 on GPIO 4, with a 10kΩ pull-up between VCC and DATA for reliable reads.",
        "Auto-refresh every 2 seconds — open the IP in any browser.",
      ],
      solutionTags: ["Embedded", "IoT", "Web Server"],
      artifacts: [
        {
          type: "code",
          file: "src/main.cpp",
          lines: [
            "#define DHTPIN 4",
            "#define DHTTYPE DHT22",
            "",
            "DHT dht(DHTPIN, DHTTYPE);",
            "WebServer server(80);",
            "",
            "void handleRoot() {",
            "  float temp = dht.readTemperature();",
            "  float hum  = dht.readHumidity();",
            "",
            "  if (isnan(temp) || isnan(hum)) {",
            "    temp = 0;",
            "    hum  = 0;",
            "  }",
          ],
          label: "Sensor Reads",
          caption: "Each page request takes a fresh DHT22 reading, falling back to zero if the sensor misses a read.",
        },
        {
          type: "terminal",
          lines: [
            "$ pio run --target upload",
            "$ pio device monitor -b 115200",
            "Connecting to WiFi...",
            "Connected!",
            "IP Address: 192.168.x.x",
          ],
          label: "Flash & Serve",
          caption: "Upload the firmware, then read the board's IP from the serial monitor and open it in a browser.",
        },
        {
          type: "code",
          file: "platformio.ini",
          lines: [
            "[env:esp32dev]",
            "platform = espressif32",
            "board = esp32dev",
            "framework = arduino",
            "monitor_speed = 115200",
            "",
            "lib_deps = adafruit/DHT sensor library",
          ],
          label: "Build Config",
          caption: "A PlatformIO project targeting the ESP32 dev board with the Arduino framework.",
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
      "A complete e-commerce site built with HTML, Tailwind CSS and vanilla JavaScript — product browsing, cart, checkout, accounts and dark mode.",
    longDescription:
      "A multi-page gaming-accessories storefront in HTML, Tailwind and vanilla JS — from product listings to checkout, order history and a dark-mode toggle.",
    year: "2025",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    iconVisual: "storefront",
    image: "/web-design-storefront.png",
    caseStudy: {
      role: "Frontend Developer",
      timeline: "2025",
      stack: ["HTML", "Tailwind CSS", "JavaScript"],
      result: "Full Storefront, No Build Step",
      challengeIntro:
        "Building a believable online store without a JavaScript framework means owning every page, every interaction and every piece of state yourself.",
      challengeDetail:
        "Cart, checkout and account flows span many pages — keeping them coherent without a shared runtime required careful DOM-level state handling.",
      solutionIntro:
        "A multi-page storefront: products, cart, checkout, order history, login/signup, contact and services — plus dark mode.",
      solutionBullets: [
        "Ten interconnected pages: Home, Products, Cart, Checkout, Account and more.",
        "Cart and order history flows wired with vanilla JavaScript.",
        "A custom Darkmode.js toggle persisted across pages.",
      ],
      solutionTags: ["Vanilla JS", "E-Commerce", "Multi-Page"],
      artifacts: [
        {
          type: "image",
          src: "/web-design-products.png",
          label: "Products",
          caption: "The product catalogue — a featured banner over a grid of rated accessories.",
        },
        {
          type: "image",
          src: "/web-design-cart.png",
          label: "Cart",
          caption: "Quantity controls per item with a live order summary and checkout button.",
        },
        {
          type: "code",
          file: "Darkmode.js",
          lines: [
            'const btn = document.getElementById("themeToggle");',
            "const html = document.documentElement;",
            "",
            'if (localStorage.getItem("theme") === "dark") {',
            '    html.classList.add("dark");',
            "}",
            "",
            "btn.onclick = () => {",
            '    html.classList.toggle("dark");',
            '    localStorage.setItem("theme",',
            '        html.classList.contains("dark") ? "dark" : "light");',
            "};",
          ],
          label: "Dark Mode",
          caption: "One shared script flips the whole store into dark theme and remembers the choice across pages.",
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
    image: "/cinema-terminal.png",
    caseStudy: {
      role: "Developer",
      timeline: "2025",
      stack: ["C", "CSV", "File I/O"],
      result: "Cinema Resources, One Terminal",
      challengeIntro:
        "Running a cinema means juggling showtimes, staff and bookings — on paper, that data is impossible to keep consistent.",
      challengeDetail:
        "Three separate concerns — schedules, staff and booked seats — had to stay in sync with nothing but plain files as the backing store.",
      solutionIntro:
        "A C console app that manages schedules, staff and bookings in one program, with every change persisted to structured CSV files.",
      solutionBullets: [
        "Schedule, booking, staff and profit views from a single menu.",
        "CSV persistence — Booked.csv, Schedule.csv and Staff.csv.",
        "Every booking is checked against Booked.csv so a seat can't be sold twice in the same hall.",
      ],
      solutionTags: ["C", "CSV", "File Persistence"],
      artifacts: [
        {
          type: "terminal",
          lines: [
            "$ gcc Cinema_Resource-Project.c -o cinema && ./cinema",
            "Input the option: 4",
            "=======================================",
            "| Hall   | Tickets Sold  | Profit($)  |",
            "=======================================",
            "| 1      | 4             | $20        |",
            "| 2      | 3             | $15        |",
            "| 3      | 3             | $15        |",
            "| 4      | 5             | $31        |",
            "| 5      | 5             | $25        |",
            "=======================================",
            "| Total Profit           | $106       |",
            "=======================================",
          ],
          label: "Total Profits",
          caption: "Real output from the profits report — ticket counts and revenue per hall, summed from Booked.csv.",
        },
        {
          type: "code",
          file: "Cinema_Resource-Project.c",
          lines: [
            "printf(\"Choose the seat row: \");",
            "scanf(\"%d\", &row);",
            "printf(\"Choose the seat column: \");",
            "scanf(\"%d\", &col);",
            "",
            "rewind(file);",
            "taken = Check_Seat(row, col, file, book, NumHall);",
            "",
            "while (taken) {",
            "    printf(\"Seat isn't available. Please choose a different seat.\\n\");",
          ],
          label: "Seat Check",
          caption: "Before a booking is saved, the chosen seat is looked up in Booked.csv for that hall.",
        },
        {
          type: "code",
          file: "Booked.csv",
          lines: [
            "Hall,Movie,Day,Month,Year,Seat(row,col),name,Telephone,payment,Gmail",
            "5,The Jungle Book,18,07,2025,4,2,...",
            "1,Avatar,18,07,2025,4,7,...",
            "4,How to train the dragon,18,07,2025,1,1,...",
          ],
          label: "CSV Storage",
          caption: "Bookings, schedules and staff each live in their own CSV file — no database needed.",
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