import WorkGrid from "@/components/WorkGrid";
import Icon from "@/components/Icon";
import { workProjects } from "@/data/projects";
import { experiences } from "@/data/experiences";

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-page flex-grow px-margin-mobile pb-section-gap md:px-gutter">
      <section className="mb-stack-lg border-b-4 border-on-background py-section-gap text-center md:text-left">
        <h1 className="mb-stack-md font-headline text-headline-xl-mobile uppercase text-on-background md:text-headline-xl">
          SELECTED PROJECTS
        </h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          A curated selection of high-impact digital experiences. Built with precision, brutalist
          aesthetics, and a deep understanding of user systems.
        </p>
      </section>
      <WorkGrid projects={workProjects} />

      <section className="mt-section-gap">
        <div className="mb-stack-lg border-b-4 border-on-background pb-stack-md">
          <h2 className="font-headline text-headline-lg uppercase text-on-background">
            EXPERIENCES
          </h2>
        </div>
        <div className="flex flex-col gap-gutter">
          {experiences.map((exp) => (
            <article
              key={exp.title}
              className="flex flex-col gap-4 border-2 border-on-background bg-surface-container-lowest p-stack-lg shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] md:flex-row md:items-start md:justify-between"
            >
              <div className="flex-1">
                <div className="mb-stack-sm flex flex-wrap items-center gap-stack-sm">
                  <span className="border-2 border-on-background bg-primary-container px-3 py-1 font-mono text-label-bold uppercase text-on-primary-container">
                    {exp.category}
                  </span>
                  <span className="font-mono text-label-bold uppercase text-on-surface-variant">
                    {exp.period}
                  </span>
                </div>
                <h3 className="mb-stack-sm font-headline text-headline-md uppercase text-on-background">
                  {exp.title}
                </h3>
                <p className="mb-stack-md text-body-md text-on-surface-variant">{exp.description}</p>
                <ul className="space-y-2 text-body-md text-on-surface-variant">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <Icon name="check_box" filled className="mt-1 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {exp.link && (
                  <a
                    href={exp.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-stack-md inline-flex w-max items-center gap-2 border-2 border-on-background bg-surface-container-lowest px-4 py-2 font-mono text-label-bold uppercase text-on-background shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:shadow-[4px_4px_0px_0px_#ffffff] dark:hover:shadow-none"
                  >
                    {exp.link.label}
                    <Icon name="open_in_new" className="text-sm" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}