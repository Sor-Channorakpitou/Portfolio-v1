import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import ArtifactVisual from "@/components/ArtifactVisual";
import { getAllProjects, getNextProject, getProject } from "@/data/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProject(slug);
    if (!project) return {};
    return {
      title: project.title,
      description: project.longDescription,
    };
  });
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = getNextProject(slug);
  const { caseStudy } = project;

  return (
    <>
      {/* Hero */}
      <header className="w-full border-b-4 border-on-background bg-primary-fixed px-margin-mobile pb-stack-lg pt-section-gap md:px-gutter">
        <div className="mx-auto flex max-w-page flex-col items-end justify-between gap-stack-lg md:flex-row">
          <div className="flex-1">
            <h1 className="mb-stack-md font-headline text-headline-xl-mobile uppercase text-on-background dark:text-on-primary-fixed md:text-headline-xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-body-lg text-on-background dark:text-on-primary-fixed">{project.longDescription}</p>
          </div>
          <div className="w-full min-w-0 border-2 border-on-background bg-surface-container-lowest p-6 shadow-brutal md:w-auto md:min-w-[300px]">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <p className="mb-1 font-mono text-label-bold text-primary">ROLE</p>
                <p className="text-body-md font-medium text-on-background">{caseStudy.role}</p>
              </div>
              <div>
                <p className="mb-1 font-mono text-label-bold text-primary">TIMELINE</p>
                <p className="text-body-md font-medium text-on-background">{caseStudy.timeline}</p>
              </div>
              <div className="col-span-2">
                <p className="mb-1 font-mono text-label-bold text-primary">TECH STACK</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {caseStudy.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border-2 border-on-background bg-white px-2 py-1 font-mono text-code-sm shadow-[4px_4px_0px_0px_var(--color-primary-container)] dark:bg-surface-container"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-2 mt-2 border-t-2 border-on-background pt-2">
                <p className="mb-1 font-mono text-label-bold text-primary">RESULT</p>
                <p className="font-headline text-headline-md text-on-background">{caseStudy.result}</p>
              </div>
              {(project.repo || project.demo) && (
                <div className="col-span-2 flex flex-wrap gap-3 border-t-2 border-on-background pt-3">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-on-background bg-surface-container-lowest px-3 py-1.5 font-mono text-label-bold uppercase text-on-background shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:shadow-[4px_4px_0px_0px_#ffffff] dark:hover:shadow-none"
                    >
                      <Icon name="code" /> Source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-on-background bg-electric-cyan px-3 py-1.5 font-mono text-label-bold uppercase text-on-background shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:text-on-primary-container dark:shadow-[4px_4px_0px_0px_#ffffff] dark:hover:shadow-none"
                    >
                      <Icon name="open_in_new" /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-page flex-col gap-section-gap px-margin-mobile py-section-gap md:px-gutter">
        {project.image && (
          <div className="overflow-hidden border-2 border-on-background bg-surface-container-lowest p-2 shadow-brutal">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Challenge / Solution */}
        <section className="grid grid-cols-1 gap-gutter md:grid-cols-2">
          <div className="border-2 border-on-background bg-surface-container-lowest p-stack-lg shadow-brutal">
            <h2 className="mb-stack-md flex items-center gap-3 font-headline text-headline-lg text-on-background">
              <span className="border-2 border-on-background bg-error-container p-2 text-on-error-container">
                <Icon name="warning" className="text-[40px]" />
              </span>
              The Challenge
            </h2>
            <p className="mb-4 text-body-lg text-on-background">{caseStudy.challengeIntro}</p>
            <p className="text-body-md text-on-surface-variant">{caseStudy.challengeDetail}</p>
          </div>
          <div className="border-2 border-on-background bg-inverse-surface p-stack-lg text-inverse-on-surface shadow-brutal">
            <h2 className="mb-stack-md flex items-center gap-3 font-headline text-headline-lg text-primary-fixed dark:text-on-primary-fixed">
              <span className="border-2 border-on-background bg-primary-fixed p-2 text-on-primary-fixed">
                <Icon name="lightbulb" className="text-[40px]" />
              </span>
              The Solution
            </h2>
            <p className="mb-4 text-body-lg text-surface-bright">{caseStudy.solutionIntro}</p>
            <ul className="space-y-4 text-body-md text-surface-variant">
              {caseStudy.solutionBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <Icon name="check_box" filled className="mt-1 text-primary-fixed dark:text-on-primary-fixed" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Visual Execution */}
        <section>
          <div className="mb-stack-lg flex items-end justify-between border-b-4 border-on-background pb-4">
            <h2 className="font-headline text-headline-lg text-on-background">Visual Execution</h2>
            <p className="hidden font-mono text-label-bold text-primary md:block">
              0{caseStudy.artifacts.length} ARTIFACTS
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
            {caseStudy.artifacts.map((artifact, i) => (
              <div
                key={i}
                className={`group overflow-hidden border-2 border-on-background bg-surface-container-lowest p-4 shadow-brutal ${
                  i === 0 ? "md:col-span-12" : "md:col-span-6"
                }`}
              >
                <ArtifactVisual artifact={artifact} aspectClass={i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"} />
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-headline text-headline-md text-on-background">{artifact.label}</h3>
                  <span
                    className={`border-2 border-on-background px-3 py-1 font-mono text-label-bold ${
                      i === 0
                        ? "bg-primary-container text-on-primary-container"
                        : "bg-surface-container text-on-background"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 max-w-3xl text-body-md text-on-surface-variant">
                  {artifact.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project */}
        <section className="mt-section-gap flex justify-center">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group relative block w-full max-w-4xl overflow-hidden border-2 border-on-background bg-primary-fixed p-stack-lg text-center shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <span className="mb-4 block font-mono text-label-bold uppercase tracking-widest text-on-primary-fixed">
              Next Project
            </span>
            <h2 className="font-headline text-headline-xl-mobile uppercase text-on-background transition-transform duration-300 group-hover:scale-105 dark:text-on-primary-fixed md:text-headline-xl">
              {nextProject.title}
            </h2>
            <span className="absolute right-stack-lg top-1/2 hidden -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-100 md:block">
              <Icon name="arrow_forward" className="text-[64px]" />
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}