import Link from "next/link";
import Marquee from "@/components/Marquee";
import Icon from "@/components/Icon";
import { FeaturedCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-4 border-on-background bg-primary-container">
        <div className="relative z-10 mx-auto flex max-w-page flex-col items-center justify-between gap-stack-lg px-margin-mobile py-20 md:flex-row md:px-gutter md:py-section-gap">
          <div className="max-w-3xl flex-1">
            <h1 className="mb-stack-lg inline-block border-b-4 border-on-background pb-stack-sm font-headline text-headline-xl-mobile uppercase leading-none text-on-background dark:text-on-primary-container md:text-headline-xl">
              SOFTWARE
              <br />
              ENGINEERING
            </h1>
            <p className="mb-stack-lg max-w-xl border-on-background bg-surface-container-lowest p-stack-md font-mono text-body-lg font-bold text-on-background shadow-brutal dark:text-primary-fixed dark:shadow-[4px_4px_0px_0px_#ffffff]">
              Sor Channorakpitou, Third-year software engineering student building fast, clean, no-nonsense
              interfaces. Currently powered by React, TypeScript and too much caffeine — and if
              my code works on the first try, I get suspicious. Now taking freelance projects.
            </p>
            <div className="flex flex-wrap gap-stack-md">
              <Link
                href="/services"
                className="flex items-center gap-2 border-2 border-on-background bg-on-background px-8 py-4 font-mono text-label-bold uppercase text-primary-container shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:border-white dark:shadow-[4px_4px_0px_0px_#ffffff]"
              >
                Hire Me <Icon name="handshake" />
              </Link>
              <Link
                href="/work"
                className="flex items-center gap-2 bg-surface-container-lowest px-8 py-4 font-mono text-label-bold uppercase text-on-background shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:text-primary-fixed dark:shadow-[4px_4px_0px_0px_#ffffff]"
              >
                View Work <Icon name="arrow_forward" />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 bg-surface-container-lowest px-8 py-4 font-mono text-label-bold uppercase dark:text-primary-fixed text-on-background shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:shadow-[4px_4px_0px_0px_#ffffff]"
              >
                About Me
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-surface-container-lowest px-8 py-4 font-mono text-label-bold uppercase text-on-background shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:text-primary-fixed dark:shadow-[4px_4px_0px_0px_#ffffff]"
              >
                View CV <Icon name="description" />
              </a>
            </div>
          </div>
          <div className="relative order-first mx-auto mb-stack-md h-64 w-64 sm:h-80 sm:w-80 md:order-none md:mx-0 md:mb-0 md:h-125 md:w-full md:flex-1">
            <div className="absolute inset-0 flex rotate-3 md:inset-auto md:right-0 md:top-0 md:h-[400px] md:w-[400px] items-center justify-center overflow-hidden border-4 border-on-background bg-on-background shadow-[8px_8px_0px_0px_#ffffff] transition-transform duration-300 hover:rotate-0 dark:shadow-brutal-lg">
              <img
                src="/hero.jpg"
                alt="Sor Channorakpitou"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 z-20 -rotate-6 md:bottom-[50px] md:left-auto md:right-[300px] bg-surface-container-lowest p-stack-sm shadow-brutal dark:text-primary-fixed dark:shadow-[4px_4px_0px_0px_#ffffff]">
              <span className="font-mono text-label-bold uppercase text-on-background dark:text-primary-fixed">
                Open for Projects // 100%
              </span>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Selected Work */}
      <section className="mx-auto w-full max-w-page flex-grow px-margin-mobile py-section-gap md:px-gutter">
        <div className="mb-stack-lg flex items-end justify-between border-b-4 border-on-background pb-stack-md">
          <h2 className="m-0 font-headline text-headline-lg uppercase text-on-background">
            Selected Work
          </h2>
          <Link
            href="/work"
            className="flex items-center gap-1 border-2 border-transparent px-2 py-1 font-mono text-label-bold uppercase text-on-background transition-colors hover:border-on-background hover:bg-primary-container"
          >
            All Projects <Icon name="arrow_outward" className="text-sm" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
