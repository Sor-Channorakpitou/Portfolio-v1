import CertificateGallery from "@/components/CertificateGallery";
import { certificates, educationTimeline } from "@/data/education";

export default function EducationPage() {
  return (
    <main className="mx-auto w-full max-w-page flex-grow px-margin-mobile py-section-gap md:px-gutter">
      <section className="mb-stack-lg border-b-4 border-on-background pb-stack-md">
        <h1 className="mb-stack-md font-headline text-headline-xl-mobile uppercase text-on-background md:text-headline-xl">
          EDUCATION
        </h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          Bachelor of Computer Science, Software Engineering at CADT — four years, one stack at
          a time.
        </p>
      </section>

      <section>
        <div className="relative border-l-4 border-on-background pl-stack-lg">
          {educationTimeline.map((entry) => (
            <article key={entry.title} className="relative mb-stack-lg pl-2">
              <span className="absolute -left-[24px] top-0 h-5 w-5 border-2 border-on-background bg-primary-container shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]" />
              <p className="mb-1 font-mono text-label-bold uppercase text-primary">{entry.period}</p>
              <h2 className="font-headline text-headline-md uppercase text-on-background">
                {entry.title}
              </h2>
              <p className="mb-stack-sm font-mono text-label-bold uppercase text-on-surface-variant">
                {entry.subtitle}
              </p>
              {entry.terms.length > 0 ? (
                <div className="flex flex-col gap-stack-md md:flex-row md:flex-wrap md:gap-gutter">
                  {entry.terms.map((term) => (
                    <div key={term.name} className="md:min-w-60 md:flex-1">
                      <p className="mb-2 w-max border-2 border-on-background bg-electric-cyan px-3 py-1 font-mono text-label-bold uppercase text-on-background dark:text-on-primary-container">
                        {term.name}
                      </p>
                      <ul className="space-y-2 text-body-md text-on-surface-variant">
                        {term.courses.map((course) => (
                          <li key={course} className="flex items-start gap-2">
                            <span className="mt-2 h-2 w-2 shrink-0 border border-on-background bg-primary-container dark:bg-primary-fixed" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-body-md text-on-surface-variant">
                  Courses to be announced — starting soon.
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-section-gap">
        <div className="mb-stack-lg border-b-4 border-on-background pb-stack-md">
          <h2 className="font-headline text-headline-lg uppercase text-on-background">
            CERTIFICATES
          </h2>
        </div>
        <CertificateGallery certificates={certificates} />
      </section>

      <section className="mt-section-gap">
        <div className="mb-stack-lg border-b-4 border-on-background pb-stack-md">
          <h2 className="font-headline text-headline-lg uppercase text-on-background">
            LANGUAGES
          </h2>
        </div>
        <div className="flex flex-col gap-gutter md:flex-row">
          <article className="flex max-w-md flex-col gap-stack-sm border-2 border-on-background bg-surface-container-lowest p-stack-lg shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
            <span className="w-max border-2 border-on-background bg-primary-container px-3 py-1 font-mono text-label-bold uppercase text-on-primary-container">
              MANDARIN
            </span>
            <h3 className="font-headline text-headline-md uppercase text-on-background">HSK1</h3>
            <p className="text-body-md text-on-surface-variant">
              Studied Mandarin for 9 months — HSK1.
            </p>
          </article>
          <article className="flex max-w-md flex-col gap-stack-sm border-2 border-on-background bg-surface-container-lowest p-stack-lg shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
            <span className="w-max border-2 border-on-background bg-primary-container px-3 py-1 font-mono text-label-bold uppercase text-on-primary-container">
              ENGLISH
            </span>
            <h3 className="font-headline text-headline-md uppercase text-on-background">GEP</h3>
            <p className="text-body-md text-on-surface-variant">
              General English Program — Level 12.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
