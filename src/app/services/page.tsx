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

// Prices are left as quotes until rates are settled; swap in "From $X" when ready.
const SERVICES: Service[] = [
  {
    icon: "web",
    title: "Websites & Landing Pages",
    description:
      "Fast, mobile-first sites for small businesses, events and personal brands — built to load quickly and show up on Google.",
    includes: ["Responsive design", "SEO & social previews", "Contact form", "Deployment & domain setup"],
    timeline: "1–2 weeks",
    price: "Custom quote",
  },
  {
    icon: "deployed_code",
    title: "Full-Stack Web Apps",
    description:
      "MVPs and internal tools with real accounts, databases and dashboards — the same stack behind Seksa.",
    includes: ["React / Next.js frontend", "FastAPI or Express backend", "PostgreSQL database", "Auth & admin panel"],
    timeline: "3–8 weeks",
    price: "Custom quote",
  },
  {
    icon: "translate",
    title: "Bilingual EN / KH Sites",
    description:
      "English and Khmer from day one — proper Khmer fonts, a language switcher and content that's easy to update in both.",
    includes: ["Khmer typography", "Language switcher", "Translatable content", "Local SEO"],
    timeline: "1–3 weeks",
    price: "Custom quote",
  },
  {
    icon: "build",
    title: "Fixes & Maintenance",
    description:
      "Something broken, slow or out of date? I'll find it, fix it and keep it running.",
    includes: ["Bug fixes", "Performance tuning", "Content updates", "Monthly check-ins"],
    timeline: "Ongoing",
    price: "Hourly or monthly",
  },
];

const PROCESS = [
  { step: "01", title: "Brief", description: "Tell me what you need. We'll get on a short call or chat to pin down goals." },
  { step: "02", title: "Proposal", description: "A clear scope, timeline and fixed price — no surprises later." },
  { step: "03", title: "Build", description: "Weekly progress updates with a live preview link you can click through." },
  { step: "04", title: "Launch", description: "I deploy it, connect your domain and hand over everything you own." },
  { step: "05", title: "Support", description: "Two weeks of free fixes after launch, then optional maintenance." },
];

// Add real quotes here as they come in; the section stays hidden while this is empty.
const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

const FAQ = [
  {
    question: "How does payment work?",
    answer:
      "50% upfront to book the project, 50% on launch. Bank transfer (ABA, ACLEDA) or other methods by arrangement.",
  },
  {
    question: "Do I own the code and the website?",
    answer:
      "Yes. Once the final payment is made, the code, domain and accounts are yours. I hand over everything.",
  },
  {
    question: "Can you handle hosting and the domain?",
    answer:
      "Yes. I'll set up hosting and connect your domain, in your name, so you're never locked in to me.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "Two rounds of revisions are included in every project. Bigger changes to the scope get a separate quote first.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Two weeks of free bug fixes. After that, you can book changes as needed or go on a monthly maintenance plan.",
  },
  {
    question: "You're a student — will you have time?",
    answer:
      "I only take on as many projects as I can deliver well, and I'll give you a realistic timeline up front.",
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
          shipped on time. Based in Phnom Penh, working with clients anywhere.
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
          <p className="text-body-lg text-black">Send me a message — I reply within 24 hours.</p>
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
