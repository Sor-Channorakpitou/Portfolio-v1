import Icon from "@/components/Icon";
import { careerRoadmap } from "@/data/roadmap";

const statusConfig = {
  current: {
    label: "CURRENT",
    color: "bg-primary text-on-primary",
    border: "border-primary",
  },
  next: {
    label: "NEXT",
    color: "bg-amber-500 text-white",
    border: "border-amber-500",
  },
  future: {
    label: "FUTURE",
    color: "bg-surface-variant text-on-surface",
    border: "border-surface-variant",
  },
};

export default function RoadmapSection() {
  return (
    <section className="mt-section-gap border-t-4 border-on-background pt-stack-lg">
      <h2 className="mb-stack-sm font-headline text-headline-md uppercase text-on-background">
        CAREER ROADMAP
      </h2>
      <p className="mb-stack-lg max-w-2xl text-body-lg text-on-surface-variant">
        Where I&apos;m heading next — steps on the ladder from intern to senior.
      </p>

      <div className="relative">
        {/* Vertical track */}
        <div className="absolute left-6 top-0 h-full w-0.5 bg-outline md:left-8" />

        {careerRoadmap.map((entry, index) => {
          const cfg = statusConfig[entry.status];
          const isLast = index === careerRoadmap.length - 1;

          return (
            <div
              key={entry.role}
              className="relative mb-stack-lg pl-16 md:pl-20"
            >
              {/* Rung connector */}
              <div className="absolute left-6 top-8 h-0.5 w-8 bg-outline md:left-8 md:w-10" />

              {/* Dot marker */}
              <div
                className={`absolute left-4 top-6 z-10 flex h-5 w-5 items-center justify-center border-2 border-on-background md:left-6 md:h-6 md:w-6 ${isLast ? "bg-electric-cyan dark:bg-primary-fixed" : cfg.color}`}
              >
                <Icon
                  name={entry.status === "current" ? "flag" : entry.status === "next" ? "arrow_upward" : "more_horiz"}
                  className="hidden text-xs md:block"
                />
              </div>

              {/* Card */}
              <article className="group border-2 border-on-background bg-surface-container-lowest p-stack-lg shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:shadow-[4px_4px_0px_0px_#ffffff] dark:hover:shadow-none">
                <div className="mb-stack-md flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1 border-2 border-on-background px-3 py-1 font-mono text-label-bold uppercase ${cfg.color}`}
                  >
                    <Icon name={entry.icon} className="text-sm" />
                    {cfg.label}
                  </span>
                  <span className="font-mono text-label-bold uppercase text-primary">
                    {entry.role}
                  </span>
                </div>
                <h3 className="mb-stack-sm font-headline text-headline-md uppercase text-on-background">
                  {entry.year}
                </h3>
                <p className="mb-stack-md font-mono text-label-bold uppercase text-on-surface-variant">
                  {entry.subtitle}
                </p>
                <p className="text-body-md text-on-surface-variant">
                  {entry.description}
                </p>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}