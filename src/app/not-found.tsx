import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="border-b-4 border-on-background bg-primary-container">
      <div className="mx-auto flex max-w-page flex-col items-start gap-stack-lg px-margin-mobile py-20 md:px-gutter md:py-section-gap">
        <span className="bg-surface-container-lowest p-stack-sm font-mono text-label-bold uppercase text-on-background shadow-brutal dark:text-primary-fixed dark:shadow-[4px_4px_0px_0px_#ffffff]">
          Error // 404
        </span>
        <h1 className="border-b-4 border-on-background pb-stack-sm font-headline text-headline-xl-mobile uppercase leading-none text-on-background dark:text-on-primary-container md:text-headline-xl">
          Page Not Found
        </h1>
        <p className="max-w-xl bg-surface-container-lowest p-stack-md font-mono text-body-lg font-bold text-on-background shadow-brutal dark:text-primary-fixed dark:shadow-[4px_4px_0px_0px_#ffffff]">
          This route doesn&apos;t exist — it may have moved or never shipped.
        </p>
        <Link
          href="/"
          className="flex items-center gap-2 bg-surface-container-lowest px-8 py-4 font-mono text-label-bold uppercase text-on-background shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:text-primary-fixed dark:shadow-[4px_4px_0px_0px_#ffffff]"
        >
          Back Home <Icon name="arrow_forward" />
        </Link>
      </div>
    </section>
  );
}
