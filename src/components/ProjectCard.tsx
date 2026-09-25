import Link from "next/link";
import type { Project } from "@/data/projects";
import Icon from "./Icon";

export function FeaturedCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col border-on-background bg-surface-container-lowest shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:shadow-[4px_4px_0px_0px_#ffffff] dark:hover:shadow-none"
    >
      <div className="relative h-64 overflow-hidden border-b-2 border-on-background">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-300"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary-container">
            <Icon name={project.iconVisual ?? "code_blocks"} className="text-[100px] text-on-background transition-transform group-hover:scale-110 dark:text-on-primary-container" />
          </div>
        )}
        <span className="absolute right-stack-sm top-stack-sm border border-on-background bg-surface-container-lowest px-2 py-1 font-mono text-code-sm uppercase text-on-background">
          {project.year}
        </span>
      </div>
      <div className="flex flex-grow flex-col p-stack-lg">
        <h3 className="mb-stack-sm font-headline text-headline-md uppercase leading-tight text-on-background">
          {project.title}
        </h3>
        <p className="mb-stack-md flex-grow text-body-md text-on-surface-variant">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-stack-sm">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-on-background bg-white px-3 py-1 font-mono text-label-bold text-on-background shadow-[4px_4px_0px_0px_var(--color-primary-container)] dark:bg-surface-container"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function WorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col border-2 border-on-background bg-surface-container-lowest shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:shadow-[4px_4px_0px_0px_#ffffff] dark:hover:shadow-none"
    >
      <div className="h-[300px] overflow-hidden border-b-2 border-on-background bg-surface-container">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary-container">
            <Icon name={project.iconVisual ?? "code_blocks"} className="text-[100px] text-on-background dark:text-on-primary-container" />
          </div>
        )}
      </div>
      <div className="flex flex-grow flex-col justify-between p-stack-lg">
        <div>
          <div className="mb-stack-md flex flex-wrap gap-2">
{project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-on-background bg-white px-3 py-1 font-mono text-code-sm text-on-background shadow-[4px_4px_0px_0px_var(--color-primary-container)] dark:bg-surface-container"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="mb-stack-sm font-headline text-headline-md uppercase text-on-background transition-colors group-hover:text-primary">
            {project.title}
          </h2>
          <p className="mb-stack-lg text-body-md text-on-surface-variant line-clamp-3">{project.description}</p>
        </div>
        <span className="inline-flex items-center gap-2 font-mono text-label-bold uppercase text-on-background transition-colors group-hover:text-primary">
          View Case Study
          <Icon name="arrow_forward" />
        </span>
      </div>
    </Link>
  );
}