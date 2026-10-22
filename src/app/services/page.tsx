import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { TELEGRAM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freelance web development by Sor Channorakpitou — websites, full-stack web apps and bilingual English/Khmer sites.",
};

type Service = {
  icon: string;
  title: string;
  description: string;
  includes: string[];
  timeline: string;
  price: string;
};

// Pitched at small businesses and NGOs in Cambodia. Prices are agreed per project.
const SERVICES: Service[] = [
  {
    icon: "web",
    title: "Websites & Landing Pages",
    description:
      "Mobile-first sites for shops, cafés, clinics, schools and events — most of your customers will find you on their phone, so that's where it has to look best.",
    includes: [
      "Up to 5 pages, mobile-first",
      "Facebook, Telegram & Google Maps links",
      "Contact form & Google search setup",
      "Domain, hosting & launch",
    ],
    timeline: "1–2 weeks",
    price: "Negotiable",
  },
  {
    icon: "translate",
    title: "Bilingual Khmer / English Sites",
    description:
      "Khmer and English from day one — proper Khmer fonts, a language switcher and content you can update in both languages.",
    includes: ["Khmer fonts that render correctly", "One-click language switcher", "Content in both languages", "Local Google search setup"],
    timeline: "2–3 weeks",
    price: "Negotiable",
  },
  {
    icon: "deployed_code",
    title: "Full-Stack Web Apps",
    description:
      "Booking systems, online menus with orders, member portals and internal tools — real accounts, databases and dashboards, the same stack behind Seksa.",
    includes: [
      "Admin dashboard to manage your data",
      "User accounts & roles",
      "Telegram notifications for new orders",
      "KHQR / ABA PayWay payments (on request)",
    ],
    timeline: "4–8 weeks",
    price: "Negotiable",
  },
  {
    icon: "build",
    title: "Fixes & Maintenance",
    description:
      "Something broken, slow or out of date? I'll find it, fix it and keep your site running.",
    includes: ["Bug fixes", "Speed improvements", "Content & price updates", "Monthly backups & check-ins"],
    timeline: "Ongoing",
    price: "Negotiable",
  },
];

const PROCESS = [
  { step: "01", title: "Brief", description: "Message me or meet for a coffee in Phnom Penh — in Khmer or English. Tell me what you need." },
  { step: "02", title: "Quote", description: "A clear scope, timeline and a price we agree on together — no surprises later." },
  { step: "03", title: "Build", description: "Weekly updates with a live preview link you can open on your phone." },
  { step: "04", title: "Launch", description: "I put it online, connect your domain and hand over every login." },
  { step: "05", title: "Support", description: "One month of free fixes after launch, then optional maintenance." },
];

// Add real quotes here as they come in; the section stays hidden while this is empty.
const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

const FAQ = [
  {
    question: "How does payment work?",
    answer:
      "We agree on a price together after the brief, quoted in USD. 50% deposit to start, 50% before the site goes live. Pay by ABA, ACLEDA, Wing or any KHQR banking app — or cash if we meet in Phnom Penh.",
  },
  {
    question: "Are there any running costs?",
    answer:
      "A .com domain is about $10–15 a year. Hosting for most small sites is free; bigger apps with a database usually cost $5–25 a month. I'll tell you the exact costs before we start.",
  },
  {
    question: "Can I get a .com.kh domain?",
    answer:
      "Yes, but .com.kh domains are registered through local providers and need business registration documents. I can help you through it, or start with a .com while you sort the paperwork.",
  },
  {
    question: "Do I own the website?",
    answer:
      "Yes. The domain and hosting are registered in your name, and once the final payment is made the code is yours too. You're never locked in to me.",
  },
  {
    question: "Can we meet in person?",
    answer:
      "Yes — I'm based in Phnom Penh and happy to meet. For everything else, Telegram, Facebook Messenger or a quick Google Meet call works.",
  },
  {
    question: "How many changes can I ask for?",
    answer:
      "Two rounds of revisions are included. New features or extra pages after we agree on the scope get a separate quote first.",
  },
  {
    question: "What happens after launch?",
    answer:
      "One month of free bug fixes. After that, book updates when you need them or go on a monthly maintenance plan.",
  },
  {
    question: "You're a student — will you have time?",
    answer:
      "I only take on as many projects as I can deliver well, plan around my exam periods and give you a realistic deadline up front.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-page flex-grow px-margin-mobile py-section-gap md:px-gutter">
      <section className="mb-stack-lg border-b-4 border-on-background pb-stack-md">
        <span className="mb-stack-md inline-flex items-center gap-2 border-2 border-on-background bg-primary-container px-3 py-1 font-mono text-label-bold uppercase text-black shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
          <span className="h-2 w-2 animate-pulse bg-black" />
          Open for Projects
        </span>
        <h1 className="mb-stack-md font-headline text-headline-xl-mobile uppercase text-on-background md:text-headline-xl">
          SERVICES
        </h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          I build websites and web apps for businesses, organisations and founders — fast, clean and
          shipped on time. Based in Phnom Penh, working in Khmer or English.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="flex flex-col border-2 border-on-background bg-surface-container-lowest shadow-brutal"
          >
            <div className="flex items-center gap-4 border-b-2 border-on-background bg-electric-cyan p-4">
              <Icon
                name={service.icon}
                filled
                className="text-[32px] text-on-background dark:text-on-primary-fixed"
              />
              <h2 className="font-headline text-headline-md uppercase text-on-background dark:text-on-primary-fixed">
                {service.title}
              </h2>
            </div>
            <div className="flex flex-1 flex-col gap-stack-md p-stack-lg">
              <p className="text-body-lg text-on-surface">{service.description}</p>
              <ul className="space-y-2 text-body-md text-on-surface-variant">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 shrink-0 border border-on-background bg-primary-container dark:bg-primary-fixed" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap justify-between gap-2 border-t-2 border-on-background pt-stack-sm font-mono text-label-bold uppercase">
                <span className="text-on-surface-variant">Timeline: {service.timeline}</span>
                <span className="text-primary">{service.price}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-section-gap">
        <div className="mb-stack-lg border-b-4 border-on-background pb-stack-md">
          <h2 className="font-headline text-headline-lg uppercase text-on-background">HOW IT WORKS</h2>
        </div>
        <ol className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((item) => (
            <li key={item.step} className="border-l-4 border-electric-cyan pl-4">
              <p className="font-mono text-label-bold uppercase text-primary">{item.step}</p>
              <h3 className="font-headline text-headline-md uppercase text-on-background">{item.title}</h3>
              <p className="text-body-md text-on-surface-variant">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {TESTIMONIALS.length > 0 && (
        <section className="mt-section-gap">
          <div className="mb-stack-lg border-b-4 border-on-background pb-stack-md">
            <h2 className="font-headline text-headline-lg uppercase text-on-background">KIND WORDS</h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex flex-col gap-stack-md border-2 border-on-background bg-surface-container-lowest p-stack-lg shadow-brutal"
              >
                <Icon name="format_quote" filled className="text-[40px] text-primary" />
                <blockquote className="text-body-lg text-on-surface">{testimonial.quote}</blockquote>
                <figcaption className="mt-auto font-mono text-label-bold uppercase text-on-surface-variant">
                  {testimonial.name} {"//"} {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="mt-section-gap">
        <div className="mb-stack-lg border-b-4 border-on-background pb-stack-md">
          <h2 className="font-headline text-headline-lg uppercase text-on-background">FAQ</h2>
        </div>
        <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
          {FAQ.map((item) => (
            <details
              key={item.question}
              className="group h-fit border-2 border-on-background bg-surface-container-lowest shadow-brutal"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-stack-md font-mono text-label-bold uppercase text-on-background group-open:border-b-2 group-open:border-on-background group-open:bg-electric-cyan dark:group-open:text-on-primary-fixed [&::-webkit-details-marker]:hidden">
                {item.question}
                <Icon name="add" className="shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="p-stack-md text-body-md text-on-surface-variant">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-section-gap flex flex-col items-start gap-stack-md border-4 border-on-background bg-primary-container p-stack-lg shadow-brutal md:flex-row md:items-center md:justify-between dark:shadow-[4px_4px_0px_0px_#ffffff]">
        <div>
          <h2 className="font-headline text-headline-lg uppercase text-black">Got a project?</h2>
          <p className="text-body-lg text-black">Send me a message — I&apos;ll reply within a day with a free quote.</p>
        </div>
        <div className="flex flex-wrap gap-stack-md">
          <Link
            href="/about#contact"
            className="flex items-center gap-2 border-2 border-black bg-white px-8 py-4 font-mono text-label-bold uppercase text-black shadow-[4px_4px_0px_0px_#000000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Start a Project <Icon name="arrow_forward" />
          </Link>
          {TELEGRAM_URL && (
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-black bg-black px-8 py-4 font-mono text-label-bold uppercase text-primary-container shadow-[4px_4px_0px_0px_#ffffff] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Chat on Telegram <Icon name="send" />
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
