"use client";

import { useMemo, useState } from "react";
import { WorkCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

type Props = {
  projects: Project[];
};

export default function WorkGrid({ projects }: Props) {
  const categories = useMemo(
    () => ["ALL", ...Array.from(new Set(projects.map((p) => p.category.toUpperCase())))],
    [projects],
  );
  const [active, setActive] = useState("ALL");

  const visible = active === "ALL" ? projects : projects.filter((p) => p.category.toUpperCase() === active);

  return (
    <>
      <div className="mt-stack-lg flex flex-wrap items-center gap-stack-sm border-y-2 border-on-background py-stack-md">
        <span className="mr-stack-sm font-mono text-label-bold uppercase text-on-surface-variant">
          FILTER:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`border-2 border-on-background px-4 py-1.5 font-mono text-label-bold uppercase transition-all duration-200 ${
              active === cat
                ? "bg-border-heavy text-primary-fixed shadow-[4px_4px_0px_0px_var(--color-primary-container)]"
                : "bg-surface-container-lowest text-on-background hover:bg-primary-container hover:text-on-primary-container"
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto hidden font-mono text-label-bold text-on-surface-variant md:block">
          {String(visible.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-stack-lg grid grid-cols-1 gap-stack-lg md:grid-cols-2">
        {visible.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}