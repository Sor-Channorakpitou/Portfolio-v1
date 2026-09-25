import Icon from "@/components/Icon";
import RoadmapSection from "@/components/RoadmapSection";
import { milestones } from "@/data/journey";

const typeConfig = {
  education: {
    label: "EDUCATION",
    icon: "school",
    color: "bg-electric-cyan dark:bg-primary-fixed",
    text: "text-white dark:text-on-primary-fixed",
  },
  academic: {
    label: "ACADEMIC",
    icon: "science",
    color: "bg-rose-500 dark:bg-rose-400",
    text: "text-white",
  },
  work: { label: "WORK", icon: "work", color: "bg-blue-500 dark:bg-blue-400", text: "text-white" },
  volunteer: {
    label: "VOLUNTEER",
    icon: "volunteer_activism",
    color: "bg-emerald-500 dark:bg-emerald-400",
    text: "text-white",
  },
  external: { label: "EXTERNAL", icon: "open_in_new", color: "bg-amber-500 dark:bg-amber-400", text: "text-white dark:text-black" },
  achievement: {
    label: "ACHIEVEMENT",
    icon: "emoji_events",
    color: "bg-violet-500 dark:bg-violet-400",
    text: "text-white",
  },
};

export default function JourneyPage() {
  return (
    <main className="mx-auto w-full max-w-page flex-grow px-margin-mobile py-section-gap md:px-gutter">
      <section className="mb-stack-lg border-b-4 border-on-background pb-stack-md">
        <h1 className="mb-stack-md font-headline text-headline-xl-mobile uppercase text-on-background md:text-headline-xl">
          JOURNEY
        </h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          From foundation year to research and beyond — every milestone that shaped my path.
        </p>
      </section>

      <section className="relative">
        <div className="absolute left-4 top-0 h-full w-2 bg-surface-variant md:left-1/2 md:-translate-x-1/2">
          <div className="mx-auto h-full w-0.5 border-l-2 border-dashed border-on-surface-variant md:border-l-4" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          {milestones.map((milestone, index) => {
            const config = typeConfig[milestone.type];
            const isLeft = index % 2 === 0;
            return (
              <div key={milestone.title} className="relative pb-section-gap">
                <div className="absolute left-4 top-2 z-10 md:left-1/2 md:top-0.5 md:-translate-x-1/2">
                  <span
                    className={`flex h-5 w-5 items-center justify-center border-2 border-on-background text-xs shadow-brutal dark:shadow-[2px_2px_0px_0px_#ffffff] md:h-8 md:w-8 ${config.color} ${config.text}`}
                  >
                    <Icon name={config.icon} className="hidden text-base leading-none md:block" />
                  </span>
                </div>

                <div className="md:grid md:grid-cols-2 md:items-start md:gap-gutter">
                  {isLeft ? (
                    <>
                      <div className="pl-12 md:pl-0 md:pr-stack-lg">
                        <MilestoneCard milestone={milestone} config={config} />
                      </div>
                      <div className="hidden items-center md:flex md:pl-stack-lg md:pt-2">
                        <span className="h-px w-8 bg-primary" />
                        <span className="ml-3 font-mono text-label-bold uppercase text-primary">
                          {milestone.year}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden items-center justify-end md:flex md:pr-stack-lg md:pt-2">
                        <span className="font-mono text-label-bold uppercase text-primary">
                          {milestone.year}
                        </span>
                        <span className="ml-3 h-px w-8 bg-primary" />
                      </div>
                      <div className="pl-12 md:pl-stack-lg">
                        <MilestoneCard milestone={milestone} config={config} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <RoadmapSection />
    </main>
  );
}

function MilestoneCard({
  milestone,
  config,
}: {
  milestone: (typeof milestones)[number];
  config: (typeof typeConfig)[keyof typeof typeConfig];
}) {
  return (
    <article className="group border-2 border-on-background bg-surface-container-lowest p-stack-lg shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:shadow-[4px_4px_0px_0px_#ffffff] dark:hover:shadow-none">
      <div className="mb-stack-md flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center gap-1 border-2 border-on-background px-3 py-1 font-mono text-label-bold uppercase ${config.color} ${config.text}`}
        >
          <Icon name={config.icon} className="text-sm" />
          {config.label}
        </span>
        <span className="font-mono text-label-bold uppercase text-on-surface-variant md:hidden">
          {milestone.year}
        </span>
      </div>
      <h2 className="mb-stack-sm font-headline text-headline-md uppercase text-on-background">
        {milestone.title}
      </h2>
      <p className="mb-stack-md font-mono text-label-bold uppercase text-primary">
        {milestone.subtitle}
      </p>
      <p className="text-body-md text-on-surface-variant">{milestone.description}</p>
    </article>
  );
}